"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
      img: "https://www.apexfootwearltd.com/media/images/2._SNM.466072d2.fill-494x620-c100.jpg",
      content:
        "The HRMS software exceeded my expectations. It has user-friendly interface, and robust analytics. A game-changer for our HR department",
    },
    {
      title: "Sandbox Inc.",
      client_name: "Daemon Jones",
      img: "https://static.theceomagazine.net/wp-content/uploads/2023/04/21154637/jack-hidary-sandboxaq-1.png",
      content:
        "Impressed with the software's efficiency. Time-saving features, accurate data management, and excellent support. A must-have for any organization",
    },
    {
      title: "Robox Corp.",
      client_name: "Alice Brown",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLdmVVSKBgiPk1LIqf0rjsoE3X7M5cuJFDeg&usqp=CAU",
      content:
        "HRMS software transformed our HR workflows. Seamless integration, and insightful reporting. Enhancing productivity and employee satisfaction.",
    },
    {
      title: "Maximus Inc.",
      client_name: "Olive White",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS3MvMZtLocES4CUQGO0es6iQXREI7k9ZtO_yzAHIQG0NOXZxe2y7ofeZ2qs5_rEJBlTk&usqp=CAU",
      content:
        "Using the HRMS software has been a game-changer. Navigation, comprehensive features, and excellent customization options. Highly recommended for HR",
    },
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-7 lg:px-0 mt-14 md:mt-16 lg:mt-24 mb-20">
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
            <div className="relative block overflow-hidden rounded-lg  text-gray-800  p-4 sm:p-6 lg:m-8 h-[250px]">
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
                <div className="justify-center mt-2 hidden md:flex">
                  <img
                    alt="client image"
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
