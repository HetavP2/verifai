import "./App.css";
import React, { useState } from "react";
import ReelText from "./components/reel-text";
// import { FactCheck } from "./components/fact-check";
import Reel from "./components/reel";

function App() {
  const [videoId, setVideoId] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setVideoId(formData.get("videoIdForm"));
  }

  return (
    <div className="mx-auto">
      <div className="w-full text-center m-10 mx-auto">
        <h1 className="text-4xl text-primary font-bold m-10">Verif.ai</h1>
        <h2 className="text-2xl text-primary mb-10">The Fact Checker</h2>
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
          <h1 className="">Paste a YouTube Video URL Above!</h1>
        )}
        <ReelText videoId={videoId} />
      </div>
    </div>
  );
}

export default App;
