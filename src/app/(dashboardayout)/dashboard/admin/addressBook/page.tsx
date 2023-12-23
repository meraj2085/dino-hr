"use client";
import React from "react";
const { Meta } = Card;
import { Avatar, Card, Col, Input, Row } from "antd";

const dummyData = [
  {
    name: "John doe",
    phone: "01987238273",
    email: "johndoe@gmail.com",
    img: "https://www.apexfootwearltd.com/media/images/2._SNM.466072d2.fill-494x620-c100.jpg",
  },

  {
    name: "John doe",
    phone: "01987238273",
    email: "johndoe@gmail.com",
    img: "https://www.apexfootwearltd.com/media/images/2._SNM.466072d2.fill-494x620-c100.jpg",
  },
  {
    name: "John doe",
    phone: "01987238273",
    email: "johndoe@gmail.com",
    img: "https://www.apexfootwearltd.com/media/images/2._SNM.466072d2.fill-494x620-c100.jpg",
  },
  {
    name: "John doe",
    phone: "01987238273",
    email: "johndoe@gmail.com",
    img: "https://www.apexfootwearltd.com/media/images/2._SNM.466072d2.fill-494x620-c100.jpg",
  },
  {
    name: "John doe",
    phone: "01987238273",
    email: "johndoe@gmail.com",
    img: "https://www.apexfootwearltd.com/media/images/2._SNM.466072d2.fill-494x620-c100.jpg",
  },
  {
    name: "John doe",
    phone: "01987238273",
    email: "johndoe@gmail.com",
    img: "https://www.apexfootwearltd.com/media/images/2._SNM.466072d2.fill-494x620-c100.jpg",
  },
  {
    name: "John doe",
    phone: "01987238273",
    email: "johndoe@gmail.com",
    img: "https://www.apexfootwearltd.com/media/images/2._SNM.466072d2.fill-494x620-c100.jpg",
  },
  {
    name: "John doe",
    phone: "01987238273",
    email: "johndoe@gmail.com",
    img: "https://www.apexfootwearltd.com/media/images/2._SNM.466072d2.fill-494x620-c100.jpg",
  },
];

const AddressBook = () => {
  return (
    <div>
      <div>
        <h2 className="text-xl font-bold">Address Book</h2>
        <Input className="my-4 w-52" size="large" placeholder="Search" />
      </div>
      <Row gutter={[16, 16]}>
        {dummyData?.map((data, index) => (
          <Col key={index} span={12}>
            <Card>
              {/* Card content */}
              <div className="flex">
                <Avatar size={64} src={data.img} />
                <div className="ml-4 mt-[-10px]">
                  <h1 className="text-md font-bold">{data.name}</h1>
                  <h5>Phone : {data.phone}</h5>
                  <h5>Email : {data.email}</h5>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AddressBook;
