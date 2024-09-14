import "./App.css";
import React, { useState } from "react";
import ReelText from "./components/reel-text";
import { FactCheck } from "./components/fact-check";
import Reel from "./components/reel";

function App() {
  const [videoId, setVideoId] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setVideoId(formData.get("videoIdForm"));
  }

  return (
    <div>
      <div className="w-full text-center m-10 mx-auto">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="videoIdForm"
            placeholder="Enter a YouTube video id..."
            className="rounded-none rounded-l-lg input input-bordered w-1/3 sm:w-2/3 inline"
          />
          <button
            className="btn btn-neutral inline border-2 rounded-none rounded-r-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="grid grid-cols-5 my-10 text-center mx-10">
        {videoId ? (
          <Reel videoId={videoId} />
        ) : (
          <h1>Paste a YouTube Video URL Above!</h1>
        )}
        <ReelText videoId={videoId} />
        <FactCheck />
      </div>
    </div>
  );
}

export default App;
