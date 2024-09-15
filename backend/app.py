from flask import Flask, jsonify, request
import requests
import cohere
import pandas as pd
from flask_cors import CORS
from youtube_transcript_api import YouTubeTranscriptApi

app = Flask(__name__)
CORS(app)

API_KEY = 'tTjPWFiZuOVTixesT0O6nDZbwJSM3o2CL7Vaz0pf'
api_key_utube = 'jnPtJM9iNAdF6dRbL7AbYRU9'

@app.route('/transcript/<video_id>', methods=['GET'])
def transcript(video_id):
    try:
        response_utube = YouTubeTranscriptApi.get_transcript(video_id)
        transcripts_array = [item['text'] for item in response_utube]  # Adjusted to match the response structure
        condensed_array = ' '.join(transcripts_array)
        words = condensed_array.split()
        chunk_size = 250
        chunks = [' '.join(words[i:i + chunk_size]) for i in range(0, len(words), chunk_size)]

        data = []

        co = cohere.Client(api_key=API_KEY)

        def process_chunk(chunk):
            nonlocal data
            try:
                # First API call to generate the context using web search
                response = co.chat(
                    message=f"'{chunk}' Generate citations for when you search the web. The maximum number is 3 and generate them in MLA format.",
                    connectors=[{"id": "web-search"}],
                    max_tokens = 200
                )
                response_text = response.text

                if "couldn't find any information" in response_text or "could not find any information" in response_text:
                    response_text = "Couldn't find any information"

                # Second API call to classify the statement as fact or not a fact
                response2 = co.chat(
                    message=f"Now is the statement '{chunk}' from these options fact, not a fact or Not enough information, choose one solely based on the context: {response_text}. ",
                    max_tokens=20
                )
                fact_or_not = response2.text.strip()

                if "not a fact" in fact_or_not.lower():
                    fact_or_not = "Not a fact"
                elif "fact" in fact_or_not.lower():
                    fact_or_not = "Fact"
                else:
                    fact_or_not = "Not enough information"
                
                if fact_or_not =="Not enough information":
                    response_text = ""
                # Append results to the list
                data.append({
                    'chunk': chunk,
                    'fact_or_not': fact_or_not,  # Corrected key
                    'response_text': response_text
                })
                print(response_text)
            except Exception as e:
                pass
                # print(f"Error processing chunk: {chunk}. Error: {str(e)}")

        # Process all chunks sequentially
        for chunk in chunks:
            process_chunk(chunk)

        # Return the data as a JSON response in the required format
        return jsonify(data)  # Simply return the data list

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == "__main__":
    app.run(debug=True)
