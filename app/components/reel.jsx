"use client";

import React, { useState } from "react";

export const Reel = () => {
  const [videoId, setVideoId] = useState("");
  return (
    <div className="col-span-5 sm:col-span-2 bg-primary">
      Reel
      <div className="w-full text-center m-10">
        <input
          type="text"
          value={videoId}
          onChange={(e) => setVideoId(e.target.value)}
          placeholder="Enter a YouTube video id..."
          class="rounded-none rounded-l-lg input input-bordered w-2/3 sm:w-1/3 inline"
        />
        <button class="btn btn-neutral inline border-2 rounded-none rounded-r-lg">
          Submit
        </button>
      </div>
      {videoId ? (
        <iframe
          className="w- h-auto"
          src={`https://www.youtube.com/embed/${videoId}?si=Z4i21SJAJt_qsPQr`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ) : (
        <h1>Hi there</h1>
      )}
    </div>
  );
};
