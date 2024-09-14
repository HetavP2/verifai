'use server'

import React from 'react'
// import { YoutubeTranscript } from 'youtube-transcript';
// import { TranscriptAPI } from 'youtube-transcript-api';
import { YoutubeLoader } from "@langchain/community/document_loaders/web/youtube";

const fetchVideo = async () => {
    // await YoutubeTranscript.fetchTranscript(
    //   "https://www.youtube.com/watch?v=SZQhgExjBvQ"
    // ).then(console.log);
    // TranscriptAPI.getTranscript('SZQhgExjBvQ').then(console.log);
    const loader = YoutubeLoader.createFromUrl("https://youtu.be/SZQhgExjBvQ", {
        language: "en",
        addVideoInfo: true,
      });
      
    const docs = await loader.load();
      
    console.log(docs);
    

    return (
    <div>fetchVideo</div>
  )
}

export default fetchVideo



