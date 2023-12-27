"use client";
import React from "react";
import ActionBar from "@/components/ui/ActionBar";
import { Avatar, Card, Col, Input, Row } from "antd";
import BreadCrumb from "@/components/ui/BreadCrumb";

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
const MyTeam = () => {
  return (
    <div>
      <BreadCrumb
        items={[
          {
            label: "Admin",
            link: "/admin",
          },
          {
            label: "My Team",
            link: "/dashboard/admin/myTeam",
          },
        ]}
      />
      <ActionBar title="My Team"></ActionBar>
      <Row gutter={10}>
        {dummyData?.map((data, index) => (
          <Col key={index} xs={24} sm={18} md={16} lg={12}>
            <Card>
              {/* Card content */}
              <div className="md:flex justify-center items-center gap-4">
                <div className="flex justify-center">
                  <Avatar size={64} src={data.img} />
                </div>
                <div className="ml-4">
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
export default MyTeam;
