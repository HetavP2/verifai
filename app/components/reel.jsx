"use client";

import React, { useState } from "react";

export const Reel = () => {
    const [videoId, setVideoId] = useState("");

    function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        setVideoId(formData.get('videoIdForm'))
    }
    
    
    
  return (
    <div className="col-span-5 sm:col-span-2 bg-primary">
      Reel
      <div className="w-full text-center m-10 mx-auto">
        <form onSubmit={handleSubmit}>
          <input
                      type="text"
                      name='videoIdForm'
            placeholder="Enter a YouTube video id..."
            className="rounded-none rounded-l-lg input input-bordered w-1/3 sm:w-2/3 inline"
          />
          <button className="btn btn-neutral inline border-2 rounded-none rounded-r-lg" type="submit">
            Submit
          </button>
        </form>
      </div>
      {videoId ? (
        <iframe
          className="w-3/4 mx-auto h-96 my-10"
          src={`https://www.youtube.com/embed/${videoId}?si=Z4i21SJAJt_qsPQr`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ) : (
        <h1>Paste a YouTube Video URL Above!</h1>
      )}
    </div>
  );
};
