// import fetchVideo from '@/functions/fetchVideo';
import React from 'react'

export const Reel = () => {
    // fetchVideo()
    return (
      <div className="col-span-5 sm:col-span-2 bg-primary">
        Reel
        <iframe
          className="w-full m-10 h-auto"
          src="https://www.youtube.com/embed/{ VIDEOID }?si=Z4i21SJAJt_qsPQr"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    );
}
