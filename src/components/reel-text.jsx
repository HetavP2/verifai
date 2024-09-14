import React, { useEffect, useState } from "react";
// import { YoutubeTranscript } from "youtube-transcript";

const ReelText = ({ videoId }) => {
//   const [data, setData] = useState();
//   const [vidId, setVidId] = useState(videoId);

//   console.log();

//   useEffect(() => {
//     async function getTranscript() {
//       const res = await fetch(
//         "https://www.searchapi.io/api/v1/search?engine=youtube_transcripts&video_id=" +
//           vidId +
//           "&api_key=jnPtJM9iNAdF6dRbL7AbYRU9"
//       );
//       const json_data = await res.json();
//       // const dataServer = await YoutubeTranscript.fetchTranscript(videoId);
//       setData(json_data.transcripts);
//     }

//     getTranscript();
//   }, []);

//   console.log(data);

  return (
    <div className="col-span-5 sm:col-span-2">
      Transcript
      <div className="m-5 border rounded-lg bg-base-100">{videoId}</div>
    </div>
  );
};

export default ReelText;
