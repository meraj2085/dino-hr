import React from "react";
import fabemiLogo from "../../public/assets/fabemi-logo.png";
import spoonLogo from "../../public/assets/spoon-logo.png";
import atlassianLogo from "../../public/assets/atlassian-logo.png";
import zLogo from "../../public/assets/z-logo.png";
import appleLogo from "../../public/assets/apple-logo.png";
import nikonLogo from "../../public/assets/nikon-logo.png";
import Image from "next/image";

const Stats = () => {
  return (
    <section className="bg-[#F3F4F6] my-10 mt-20">
      <div className="text-center py-10 mb-10">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-4xl lg:font-bold ">
          Top <span className="text-[#8484BD]">Clients</span>
        </h1>

        <p className="max-w-lg mx-auto mt-4 text-gray-500">Our top clients</p>
      </div>
      <div className="max-w-[1200px] pb-20 mx-auto grid grid-cols-2 gap-16 mb-16 text-center lg:grid-cols-6">
        <div className="flex items-center justify-center">
          <Image
            height={100}
            width={100}
            src={fabemiLogo}
            alt="Fabemi Logo"
            className="block object-contain h-16"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            height={100}
            width={100}
            src={spoonLogo}
            alt="Spoon Logo"
            className="block object-contain h-16"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            height={100}
            width={100}
            src={atlassianLogo}
            alt="Atlassian Logo"
            className="block object-contain h-16"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            height={100}
            width={100}
            src={zLogo}
            alt="Z Logo"
            className="block object-contain h-16"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            height={100}
            width={100}
            src={appleLogo}
            alt="Apple Logo"
            className="block object-contain h-16"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            height={100}
            width={100}
            src={nikonLogo}
            alt="Nikon Logo"
            className="block object-contain h-16"
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;
