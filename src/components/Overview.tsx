"use client";
import { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
const Overview = () => {
  const [isCounted, setIsCounted] = useState(false);
  return (
    <section className="bg-[#F3F4F6] mt-16">
      <div className="px-6 py-10 space-y-8 max-w-[1200px] mx-auto">
        <div className="py-5">
          <h1 className="text-5xl text-center font-bold leadi mb-3">
            <span className="text-gradient">Overview</span>
          </h1>
          <p className="max-w-2xl text-center mx-auto">
            Know more about our statistics and our brands
          </p>
        </div>

        <div>
          <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <div className="text-4xl font-bold leadi lg:text-6xl">
                <VisibilitySensor partialVisibility>
                  {({ isVisible }: { isVisible: boolean }) => (
                    <div style={{ height: 100 }}>
                      {isVisible && !isCounted ? (
                        <CountUp
                          end={86}
                          duration={5}
                          onEnd={() => setIsCounted(true)}
                        />
                      ) : (
                        86
                      )}
                      +
                    </div>
                  )}
                </VisibilitySensor>
              </div>
              <p className="text-sm sm:text-base">Clients</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <div className="text-4xl font-bold leadi lg:text-6xl">
                <VisibilitySensor partialVisibility>
                  {({ isVisible }: { isVisible: boolean }) => (
                    <div style={{ height: 100 }}>
                      {isVisible && !isCounted ? (
                        <CountUp end={1000} duration={5} />
                      ) : (
                        1000
                      )}
                      +
                    </div>
                  )}
                </VisibilitySensor>
              </div>
              <p className="text-sm sm:text-base">Active Employees</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <div className="text-4xl font-bold leadi lg:text-6xl">
                <VisibilitySensor partialVisibility>
                  {({ isVisible }: { isVisible: boolean }) => (
                    <div style={{ height: 100 }}>
                      {isVisible && !isCounted ? (
                        <CountUp end={13} duration={5} />
                      ) : (
                        13
                      )}
                      +
                    </div>
                  )}
                </VisibilitySensor>
              </div>
              <p className="text-sm sm:text-base">Active services</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <div className="text-4xl font-bold leadi lg:text-6xl">
                <VisibilitySensor partialVisibility>
                  {({ isVisible }: { isVisible: boolean }) => (
                    <div style={{ height: 100 }}>
                      {isVisible && !isCounted ? (
                        <CountUp end={24} duration={5} />
                      ) : (
                        24
                      )}
                    </div>
                  )}
                </VisibilitySensor>
              </div>
              <p className="text-sm sm:text-base">Service hours</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <div className="text-4xl font-bold leadi lg:text-6xl">
                <VisibilitySensor partialVisibility>
                  {({ isVisible }: { isVisible: boolean }) => (
                    <div style={{ height: 100 }}>
                      {isVisible && !isCounted ? (
                        <CountUp end={5} duration={5} />
                      ) : (
                        5
                      )}
                    </div>
                  )}
                </VisibilitySensor>
              </div>
              <p className="text-sm sm:text-base">Years of experience</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <div className="text-4xl font-bold leadi lg:text-6xl">
                <VisibilitySensor partialVisibility>
                  {({ isVisible }: { isVisible: boolean }) => (
                    <div style={{ height: 100 }}>
                      {isVisible && !isCounted ? (
                        <CountUp end={10} duration={5} />
                      ) : 10}
                    </div>
                  )}
                </VisibilitySensor>
              </div>
              <p className="text-sm sm:text-base">Team Members</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
