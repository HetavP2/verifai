from flask import Flask, jsonify, request
import requests
import cohere
import pandas as pd
import threading
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

API_KEY = 'tTjPWFiZuOVTixesT0O6nDZbwJSM3o2CL7Vaz0pf'
api_key_utube = 'jnPtJM9iNAdF6dRbL7AbYRU9'

@app.route('/transcript/<video_id>', methods=['GET'])
def transcript(video_id):
    try:
        print(video_id)
        # Fetch the transcript from the external API
        response_utube = requests.get(f"https://www.searchapi.io/api/v1/search?engine=youtube_transcripts&video_id={video_id}&api_key={api_key_utube}")
        response_utube.raise_for_status()  # Ensure the request was successful
        response_utube = response_utube.json()

        # Extract transcript texts
        transcripts_array = [item['text'] for item in response_utube['transcripts']]
        condensed_array = ' '.join(transcripts_array)
        words = condensed_array.split()
        chunk_size = 250
        chunks = [' '.join(words[i:i + chunk_size]) for i in range(0, len(words), chunk_size)]

        # Placeholder to store results
        data = []

        # Initialize Cohere API client
        co = cohere.Client(api_key=API_KEY)

        # Function to process a single chunk and append results to data
        def process_chunk(chunk):
            nonlocal data
            try:
                # First API call to generate the context using web search
                response = co.chat(
                    message=chunk,
                    connectors=[{"id": "web-search"}]
                )
                response_text = response.text

                if "couldn't find any information" in response_text or "could not find any information" in response_text:
                    response_text = "Couldn't find any information"

                # Second API call to classify the statement as fact or not a fact
                response2 = co.chat(
                    message=f"Now is the statement '{chunk}' from these options fact, not a fact or Not enough information, choose one solely based on the context: {response_text}",
                    max_tokens=20
                )
                fact_or_not_fact = response2.text.strip()

                if "not a fact" in fact_or_not_fact.lower():
                    fact_or_not_fact = "not a fact"
                elif "fact" in fact_or_not_fact.lower():
                    fact_or_not_fact = "fact"
                else:
                    fact_or_not_fact = "Not enough information"

                # Append results to the list
                data.append({
                    'chunk': chunk,
                    'fact_or_not_fact': fact_or_not_fact,
                    'response_text': response_text
                })
            except Exception as e:
                print(f"Error processing chunk: {chunk}. Error: {str(e)}")

        # Process all chunks sequentially
        for chunk in chunks:
            process_chunk(chunk)

        # Convert the data into a pandas DataFrame
        df = pd.DataFrame(data)

        # Return the DataFrame as JSON response
        print(df)
        return jsonify(df.to_dict())

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == "__main__":
    app.run(debug=True)
