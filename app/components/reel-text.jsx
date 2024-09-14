import React from "react";
import { YoutubeTranscript } from "youtube-transcript";

const ReelText = ({ videoId }) => {
  console.log('Reeltext', videoId)
  YoutubeTranscript.fetchTranscript(
    `https://www.youtube.com/watch?v=${String(videoId)}
    }`
  ).then(console.log);
  const totalText = 'some text here'

  return (
    <div className="col-span-5 sm:col-span-2">
      Transcript
      <div className="m-5 border rounded-lg bg-base-100">{totalText}</div>
    </div>
  );
};

export default ReelText;