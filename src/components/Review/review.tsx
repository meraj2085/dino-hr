"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ReviewSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
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
      client_name: "CEO of Alex Johnson",
      img: "https://www.apexfootwearltd.com/media/images/2._SNM.466072d2.fill-494x620-c100.jpg",
      content:
        "HR Management transformed our processes, offering efficiency and seamless recruitment. User-friendly interface, excellent support. Exceeded expectations, positively impacting productivity.",
    },
    {
      title: "Quantu Innovation",
      client_name: "CEO of Emily Rodriguez",
      img: "https://static.theceomagazine.net/wp-content/uploads/2023/04/21154637/jack-hidary-sandboxaq-1.png",
      content:
        "Integral to our company, HR Management's recruitment and performance tools are invaluable. Scalable, with insightful reporting. Enhances operations, fosters growth, and ensures transparency.",
    },
    {
      title: "Horizon Enterprises",
      client_name: "CEO of Jason Taylor",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLdmVVSKBgiPk1LIqf0rjsoE3X7M5cuJFDeg&usqp=CAU",
      content:
        "Game-changer for our organization. Employee self-service empowers, analytics offer insights, and compliance features align with regulations. Seamless onboarding and improved overall employee experience.",
    },
    {
      title: "Stellar Services",
      client_name: "CEO of Olivia Chen",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS3MvMZtLocES4CUQGO0es6iQXREI7k9ZtO_yzAHIQG0NOXZxe2y7ofeZ2qs5_rEJBlTk&usqp=CAU",
      content:
        "Cost-effective and essential for our small business. Simple implementation, efficient time-tracking, and leave management. Responsive customer support. Streamlined HR processes, compliant and user-friendly.",
    },
  ];

  return (
    <div className="max-w-[1200px]  mx-auto my-20">
      <div className="text-center py-4">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-4xl lg:font-bold ">
          Client Reviews
        </h1>
        <p className="max-w-lg mx-auto mt-4 text-gray-500">
          What our Clients say about us
        </p>
      </div>
      <Slider {...settings}>
        {dummyData?.map((data, index) => (
          <div key={index}>
            <div className="relative block overflow-hidden rounded-lg  bg-gray-100 text-gray-800  p-4 sm:p-6 lg:m-8 h-[250px] shadow-lg">
              <div className="sm:flex sm:justify-between sm:gap-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                    {data?.title}
                  </h3>

                  <p className="mt-1 text-xs font-medium text-gray-600">
                    {data?.client_name}
                  </p>
                </div>

                <div className="hidden sm:block sm:shrink-0">
                  <img
                    alt="Paul Clapton"
                    src={data?.img}
                    className="h-16 w-16 rounded-lg object-cover shadow-sm"
                  />
                </div>
              </div>

              <div className="mt-4">
                <p className="lg:max-w-[40ch] text-sm text-gray-500">
                  {data?.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewSection;
