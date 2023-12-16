import {
  ArrowRightOutlined,
} from "@ant-design/icons";
import React from "react";

const VideoSection = () => {
  return (
    <div className="max-w-[1200px] mx-auto grid sm:grid-cols-1 md:grid-cols-5 bg-[#9fff8486] my-32 rounded-md pt-10 p-4 md:p-10">
      <div className="col-span-2 flex flex-col md:mr-10 justify-center">
        <h1 className="text-4xl text-center md:text-start my-6 md:my-0 md:text-3xl lg:text-5xl font-extrabold">
          How <span className="italic">Dino HR</span> will Help You in 90
          Seconds
        </h1>
        <h2 className="text-lg bg-[#6EC756] hidden md:inline-block p-2 font-bold rounded text-center mt-5">
          WATCH THE VIDEO <ArrowRightOutlined className="animate-pulse" />
        </h2>
      </div>
      <div className="col-span-3">
        <iframe
          className="w-full mx-auto rounded-lg aspect-video drop-shadow-lg"
          // width="560"
          // height="315"
          src="https://www.youtube.com/embed/A2HFusWQIeE?si=hcChHpgEWECLrQ3U"
          title="YouTube video player"
          // frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default VideoSection;
