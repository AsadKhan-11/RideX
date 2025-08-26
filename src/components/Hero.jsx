import React from "react";
import bgVideo from "../assets/bg.mp4"; // your video file

const VideoBackground = () => {
  return (
    <div className=" relative w-full h-screen overflow-hidden" id="home">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay (optional, for dark effect) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content on top */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-6xl md:text-6xl font-bold mb-6 ">
          The Future on Wheels
        </h1>
        <button className=" px-6 py-3 border-2 border-transparent bg-white text-black font-semibold rounded-full shadow-lg hover:bg-[#5e5e5e65] hover:border-white hover:text-white cursor-pointer transition-all duration-300">
          Explore Cars
        </button>
      </div>
    </div>
  );
};

export default VideoBackground;
