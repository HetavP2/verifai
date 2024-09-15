from flask import Flask,jsonify,request
import requests
import cohere
import pandas as pd
import threading
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
API_KEY = 'tTjPWFiZuOVTixesT0O6nDZbwJSM3o2CL7Vaz0pf'
api_key_utube = 'jnPtJM9iNAdF6dRbL7AbYRU9'

@app.route('/transcript', methods=['POST'])
def transcript():
    response = request.get_json()
    video_id = str(response.get('video_id'))
    
    # Fetch the transcript from the external API
    response = requests.get(f"https://www.searchapi.io/api/v1/search?engine=youtube_transcripts&video_id={video_id}&api_key={api_key_utube}").json()
    
    # Extract transcript texts
    transcripts_array = [item['text'] for item in response['transcripts']]
    condensed_array = ' '.join(transcripts_array)
    words = condensed_array.split()
    chunk_size = 250
    chunks = [' '.join(words[i:i + chunk_size]) for i in range(0, len(words), chunk_size)]
    
    # Placeholder to store results
    data = []
    
    # Initialize Cohere API client
    co = cohere.Client(api_key=API_KEY)
    
    # Define a lock to prevent race conditions when appending data
    lock = threading.Lock()
    
    # Function to process a single chunk and append results to data
    def process_chunk(chunk):
        nonlocal data
        # First API call to generate the context using web search
        response = co.chat(
            message=chunk,
            connectors=[{"id": "web-search"}]
        )
        response_text = response.text
        
        if "couldn't find any information" in response_text or "couldn not find any information" in response_text:
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
        
        # Safely append results to the list using a lock
        with lock:
            data.append({
                'chunk': chunk,
                'fact_or_not_fact': fact_or_not_fact,
                'response_text': response_text
            })
    
    # Create a list to hold threads
    threads = []
    
    # Function to start all threads and ensure Flask context is maintained
    with app.app_context():  # Ensure Flask context is available in threads
        for chunk in chunks:
            thread = threading.Thread(target=process_chunk, args=(chunk,))
            thread.start()
            threads.append(thread)
        
        # Wait for all threads to finish
        for thread in threads:
            thread.join()
    
    # Convert the data into a pandas DataFrame
    df = pd.DataFrame(data)
    
    # Return the DataFrame as JSON response
    return jsonify(df.to_dict())


if __name__ =="__main__":
    app.run(debug=True)