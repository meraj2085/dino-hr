import globalMap from "../../../public/assets/globalMap.png";
import Image from "next/image";
import ContactUs from "@/components/ContactUs";
import MeatOurTeam from "@/components/MeatOurTeam";
import PricingSection from "@/components/PricingSection";
import TopCompanies from "@/components/TopCompanies";
import VideoSection from "@/components/VideoSection";
import ReviewSection from "@/components/Review/review";
import BookCall from "@/components/BookCall";

export default function Home() {
  return (
    <>
      <section className="min-h-[800px]">
        <div className="container flex flex-col-reverse justify-center p-6 mx-auto sm:py-12 lg:py-[150px] lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leadi sm:text-6xl">
              Expert <br />
              <span>HR Support</span> With Dino
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Simplify HR tasks with Dino, your all in one HR management system.
              <br className="hidden md:inline lg:hidden" /> Effortlessly handle
              team management, salary administration, attendance tracking, and
              many more.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                href="#_"
                className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
              >
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out group-hover:h-full"></span>
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    className="w-5 h-5 text-[#00674A]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    className="w-5 h-5 text-[#00674A]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out text-[#00674A]">
                  Learn More
                </span>
              </a>
              <a
                href="#_"
                className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#00674A] rounded-xl group"
              >
                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#124436] rounded group-hover:-mr-4 group-hover:-mt-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#124436] rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                  Get HR Ready
                </span>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <Image
              src={globalMap}
              alt="global map"
              height={500}
              width={500}
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
      {/* <VideoSection /> */}
      <MeatOurTeam />
      {/* <PricingSection />
      <TopCompanies />
      <ReviewSection />
      <ContactUs /> */}
    </>
  );
}
