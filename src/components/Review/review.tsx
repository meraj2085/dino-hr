"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

const ReviewSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0",
    className: "center",
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const dummyData = [
    {
      title: "Apex Solutions",
      client_name: "Alex Smith",
      img: "https://res.cloudinary.com/dx2drcria/image/upload/v1704684999/uploads/hxvqyhfmxyweco3gfa3e.png",
      content:
        "The HRMS software exceeded my expectations. It has user-friendly interface, and robust analytics. A game-changer for our HR department",
    },
    {
      title: "Sandbox Inc.",
      client_name: "Daemon Jones",
      img: "https://res.cloudinary.com/dx2drcria/image/upload/v1704684998/uploads/zurqu7kjnqzfwepxfrta.jpg",
      content:
        "Impressed with the software's efficiency. Time-saving features, accurate data management, and excellent support. A must-have for any organization",
    },
    {
      title: "Robox Corp.",
      client_name: "Alice Brown",
      img: "https://res.cloudinary.com/dx2drcria/image/upload/v1704684997/uploads/dpvvcredtu08mtmdkltw.jpg",
      content:
        "HRMS software transformed our HR workflows. Seamless integration, and insightful reporting. Enhancing productivity and employee satisfaction.",
    },
    {
      title: "Maximus Inc.",
      client_name: "Olive White",
      img: "https://res.cloudinary.com/dx2drcria/image/upload/v1704684997/uploads/ctyzwew5wxwdb9inh12x.jpg",
      content:
        "Using the HRMS software has been a game-changer. Navigation, comprehensive features, and excellent customization options. Highly recommended for HR",
    },
  ];

  return (
    <div className="max-w-[1200px] overflow-hidden mx-auto px-7 lg:px-0 mt-14 md:mt-16 lg:mt-24">
      <div className="mb-5 md:mb-12">
        <h1 className="text-5xl text-center font-bold leadi mb-3">
          <span className="text-gradient">Reviews</span>
        </h1>
        <p className="max-w-2xl text-center mx-auto">
          What our Clients say about our services
        </p>
      </div>
      <Slider {...settings}>
        {dummyData?.map((data, index) => (
          <div key={index}>
            <div className="relative block overflow-hidden rounded-lg  text-gray-800  p-4 sm:p-6 h-[350px]">
              <div className="flex flex-col items-center lg:mx-0 ">
                <div className="relative text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute top-0 left-0 w-8 h-8 "
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  <p className="px-6 py-1 text-lg italic">{data?.content}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute bottom-0 right-0 w-8 h-8 "
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </div>
                <span className="w-12 h-1 my-2 rounded-lg "></span>
                <p>{data?.client_name}</p>
                <div className="justify-center mt-2 flex">
                  <Image
                    height={64}
                    width={64}
                    alt="client"
                    src={data?.img}
                    className="h-16 w-16 rounded-full object-cover shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewSection;
