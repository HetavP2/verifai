import "./App.css";
import React, { useState } from "react";
import ReelText from "./components/reel-text";
import Reel from "./components/reel";

function App() {
  const [videoId, setVideoId] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    let youtubeUrl = formData.get("videoIdForm");
    let videoIdActual = youtubeUrl.split("v=")[1];
    setVideoId(videoIdActual);

  }

  return (
    <div className="mx-auto bg-gradient-to-r from-[#E5EBB3] to-[#DEE8CA] h-screen">
      <div className="w-full text-center p-10 mx-auto">
        <h1 className="text-6xl text-primary font-bold pt-10">Verifai</h1>
        <h2 className="text-2xl text-primary mb-10">
          Mitigating the Misinformation Pandemic
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="videoIdForm"
            placeholder="Enter a YouTube video link..."
            className="rounded-none rounded-l-lg input w-3 sm:w-2/3 inline outline-none	"
          />
          <button
            className="btn btn-neutral bg-[#3F704B] inline border-2 border-[#3F704B] hover:bg-[#00A86B] text-white hover:border-[#00A86B] rounded-none rounded-r-lg -translate-y-0.5"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="grid grid-cols-5 mt-10 text-center mx-10">
        {videoId ? (
          <>
          <Reel videoId={videoId} />
          <ReelText videoId={videoId} />
          </>
        ) : (
          <h1 className="text-lg text-primary font-bold p-3">
            Paste a YouTube Video ID Above!
          </h1>
        )}
      </div>
    </div>
  );
}

export default App;
