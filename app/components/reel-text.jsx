
import React, { useEffect, useState } from "react";
import { YoutubeTranscript } from "youtube-transcript";

const ReelText = ({ videoId }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    async function getTranscript() {
      const dataServer = await YoutubeTranscript.fetchTranscript(videoId);
      await setData(dataServer)
    }

    getTranscript();
  }, [videoId]);
  
  console.log(data);

  const totalText = 'some text here'

  return (
    <div className="col-span-5 sm:col-span-2">
      Transcript
      <div className="m-5 border rounded-lg bg-base-100">{videoId}</div>
    </div>
  );
};

export default ReelText;