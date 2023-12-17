"use client";
import { Card, Col, Rate, Row } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ReviewSection = () => {
  const settings = {
    centerMode: true,
    centerPadding: "60px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    className: "center",
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
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
  const damyData = [
    {
      title: "Shahin",
      img: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing eli Lorem ipsum dolor sit amet consectetur adipisicinLorem ipsum dolor sit amet consectetur adipisicing eli  g eli ",
      value: 5,
    },
    {
      title: "Miraz",
      img: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing eli Lorem ipsum dolor sit amet consectetur adipisicinLorem ipsum dolor sit amet consectetur adipisicing eli  g eli ",
      value: 5,
    },
    {
      title: "Mitu",
      img: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing eli Lorem ipsum dolor sit amet consectetur adipisicinLorem ipsum dolor sit amet consectetur adipisicing eli  g eli ",
      value: 5,
    },
    {
      title: "Rashida",
      img: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing eli Lorem ipsum dolor sit amet consectetur adipisicinLorem ipsum dolor sit amet consectetur adipisicing eli  g eli ",
      value: 5,
    },
  ];

  return (
    <div className="max-w-[1200px] mx-auto mt-20">
      <Slider {...settings}>
        {damyData?.map((data, index) => (
          <div key={index}>
            <Card
              title={data?.title}
              extra={<Rate allowHalf defaultValue={data.value} disabled />}
              style={{
                width: 350,
                height: 300,
                margin: "13px",
                backgroundColor: "#cdc2c2",
              }}
            >
              <img
                src={data?.img}
                alt="review image"
                style={{ width: "20%" }}
              />
              <p>{data?.content}</p>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewSection;
