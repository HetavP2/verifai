'use client'
import React, { useState } from 'react'

export const Input = () => {
  const [videoId, setVideoId] = useState('');

  return (
    <div className="w-full text-center m-10">
      <input
        type="text"
        value={videoId}
        onChange={e => setVideoId(e.target.value)}
        placeholder="Enter a YouTube video id..."
        class="rounded-none rounded-l-lg input input-bordered w-2/3 sm:w-1/3 inline"
      />
      <button class="btn btn-neutral inline border-2 rounded-none rounded-r-lg">
        Submit
      </button>
    </div>
  );
}
