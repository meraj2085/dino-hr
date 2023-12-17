import PricingSection from "@/components/PricingSection";
import heroImage from "../../../public/assets/heroImage.png";
import Image from "next/image";
import TopCompanies from "@/components/TopCompanies";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <div className="relative w-full max-h-[800px] ">
          <div className="flex md:hidden absolute inset-0 bg-gradient-to-r from-black to-transparent mix-blend-multiply"></div>
          <Image
            className="w-full max-h-[800px]"
            src={heroImage}
            width={10000}
            alt="Hero image"
          />
          <div className="absolute top-1/2 md:top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center md:left-[800px] md:text-left md:transform-none">
            <div>
              <h1 className="mb-3 text-4xl font-bold text-white md:text-gray-900 md:text-5xl md:leading-tight md:font-extrabold">
                Quality Wallpapers
              </h1>
              <h1 className="hidden md:flex md:text-gray-900 text-3xl font-semibold md:ms-7">
                Paintings For Home
              </h1>
            </div>
            <div className="mt-10 space-y-3 text-xs text-white md:text-gray-600 md:mt-5 md:flex md:flex-row md:justify-center md:space-x-8 md:space-y-0">
              <div className="flex items-center">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 mr-1 text-[#8484BD]"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                No credit card required
              </div>
              <div className="flex items-center">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 mr-1 text-[#8484BD]"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                No commitment
              </div>
              <div className="flex items-center">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 mr-1 text-[#8484BD]"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
