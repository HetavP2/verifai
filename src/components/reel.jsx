import React from "react";

const Reel = ({ videoId }) => {
  return (
    <div className="col-span-5 sm:col-span-2 bg-gradient-to-br from-[#3F704B] to-[#2E8B57] rounded-2xl shadow-2xl h-96">
      <iframe
        className="w-4/5 mx-auto h-4/5 my-10"
        src={`https://www.youtube.com/embed/${videoId}?si=Z4i21SJAJt_qsPQr`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Reel;
