import { ArrowRightOutlined } from "@ant-design/icons";
import React from "react";

const VideoSection = () => {
  return (
    <div id="video-section" className="bg-gray-100">
      <div className="max-w-[1200px] mx-auto grid sm:grid-cols-1 md:grid-cols-5 rounded-md pt-10 p-4 md:p-10">
        <div className="col-span-2 flex flex-col md:mr-10 justify-center">
          <h1 className="text-4xl text-center md:text-start my-6 md:my-0 md:text-3xl lg:text-5xl font-extrabold">
            How <span className="">Dino HR</span> will Help You in 90
            Seconds
          </h1>
          <h2 className="text-lg bg-[#00674A] text-white hidden md:inline-block p-2 font-bold rounded text-center mt-5">
            WATCH THE VIDEO <ArrowRightOutlined className="animate-pulse" />
          </h2>
        </div>
        <div className="col-span-3">
          <iframe
            className="w-full mx-auto rounded-lg aspect-video drop-shadow-lg"
            src="https://www.youtube.com/embed/A2HFusWQIeE?si=hcChHpgEWECLrQ3U"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
