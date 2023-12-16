"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      text: "Excellent painting service! The team paid attention to detail and transformed my space beautifully. with the professionalism and skill of the painters. Highly recommend for quality work!",
      author: "John Doe",
      role: "Client",
      image:
        "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2864&q=80",
    },
    {
      id: 2,
      text: "I'm impressed with the professionalism and skill of the painters. Highly recommend for quality work! with the professionalism and skill of the painters. Highly recommend for quality work!",
      author: "Jane Smith",
      role: "Customer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
    },
    {
      id: 3,
      text: "The painters were punctual, efficient, and left my home spotless. A great experience overall! with the professionalism and skill of the painters. Highly recommend for quality work!",
      author: "Sam Brown",
      role: "Homeowner",
      image:
        "https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80.",
    },
    {
      id: 4,
      text: "Top-notch painting service! The team listened to my preferences and delivered beyond expectations. with the professionalism and skill of the painters. Highly recommend for quality work!",
      author: "Alice Johnson",
      role: "Satisfied Customer",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2864&q=80",
    },
    {
      id: 5,
      text: "Professional painters with a creative touch. My walls look amazing, and the colors are perfect! with the professionalism and skill of the painters. Highly recommend for quality work!",
      author: "Michael White",
      role: "Happy Homeowner",
      image:
        "https://plus.unsplash.com/premium_photo-1675034393381-7e246fc40755?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
    },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <section className="bg-white my-10 max-w-[1200px] mx-auto">
      <div className="px-6 py-10">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-4xl lg:font-bold ">
            Clients <span className="text-[#8484BD]">Review</span>
          </h1>

          <p className="max-w-lg mx-auto mt-4 text-gray-500">
            What our clients say about us
          </p>
        </div>

        <div className="mt-8 md:mt-10">
          <div className="flex items-start max-w-6xl mx-auto mt-16">
            <button
              onClick={handlePrev}
              title="left arrow"
              className="hidden p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 lg:block hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div key={reviews[currentIndex].id}>
              <p className="flex items-center text-center text-gray-500 lg:mx-8">
                {reviews[currentIndex].text}
              </p>

              <div className="flex flex-col items-center justify-center mt-8">
                <Image
                  height={56}
                  width={56}
                  className="object-cover rounded-full w-14 h-14"
                  src={reviews[currentIndex].image}
                  alt=""
                />

                <div className="mt-4 text-center">
                  <h1 className="font-semibold text-gray-800 ">
                    {reviews[currentIndex].author}
                  </h1>
                  <span className="text-sm text-gray-500 ">
                    {reviews[currentIndex].role}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={handleNext}
              title="right arrow"
              className="hidden p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 lg:block hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
