/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import BreadCrumb from "@/components/ui/BreadCrumb";
import {
  Avatar,
  Button,
  Card,
  Col,
  Divider,
  Flex,
  Row,
  Table,
  Timeline,
} from "antd";

import React from "react";
import { getUserInfo } from "@/services/auth.service";
import { useGetSingleUserQuery } from "@/redux/api/userApi";

// const dataSource = [
//   {
//     key: "1",
//     name: "Mike",
//     relationship: "brother",
//     birthDate: "Feb 16th, 2019",
//     phone: "0182398398",
//   },
// ];

// const columns = [
//   {
//     title: "Name",
//     dataIndex: "name",
//     key: "name",
//   },
//   {
//     title: "Relationship",
//     dataIndex: "relationship",
//     key: "Relationship",
//   },
//   {
//     title: "Birth Date",
//     dataIndex: "birthDate",
//     key: "birthDate",
//   },
//   {
//     title: "Phone",
//     dataIndex: "phone",
//     key: "phone",
//   },
// ];

const profile = () => {
  const { userId } = getUserInfo() as any;
  const { data } = useGetSingleUserQuery(userId);

  return (
    <div>
      <h1 className="text-2xl font-semibold pb-1">Profile</h1>
      <BreadCrumb
        items={[
          {
            label: "Dashboard",
            link: "/dashboard/admin",
          },
          {
            label: "Profile",
            link: "/dashboard/profile",
          },
        ]}
      />
      <div>
        <Card className="mt-5">
          <Flex className="flex flex-col md:flex-row lg:gap-56">
            {/* left  */}
            <div className="flex">
              {" "}
              <Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 80, xl: 100, xxl: 120 }}
                src="https://smarthr.dreamstechnologies.com/html/template/assets/img/profiles/avatar-02.jpg"
              />
              <div className="pl-4">
                <h1 className="text-xl font-bold">
                  {data?.first_name} {data?.middle_name} {data?.last_name}
                </h1>
                <h1 className="text-md font-bold">{data?.designation}</h1>
                <h1 className="text-md font-bold">{data?.employee_code}</h1>
                <Button className="my-2" type="primary" danger>
                  Sent Message
                </Button>
              </div>
            </div>

            {/* right */}
            <div className="flex border-dashed lg:border-l-2 border-gray-500 pl-4">
              {/* input */}
              <div className="text-md font-bold mr-10">
                <h1>Phone:</h1>
                <h1>Email:</h1>
                <h1>Birthday:</h1>
                <h1>Address:</h1>
                <h1>Gender:</h1>
              </div>
              {/* value */}
              <div>
                <h2 className="text-blue-500"> {data?.phone_number}</h2>
                <h2 className="text-blue-500">{data?.personal_email}</h2>
                <h2>{data?.date_of_birth}</h2>
                <h2>
                  {data?.permanent_address?.flat_number}{" "}
                  {data?.permanent_address?.street},
                  {data?.permanent_address?.state},{" "}
                  {data?.permanent_address?.country}
                </h2>
                <h2>{data?.gender}</h2>
              </div>
            </div>
          </Flex>
        </Card>
        {/* </Col> */}

        {/* 2nd section  */}
        <br />

        {/* Personal-Emergency row  */}

        <div>
          <Row gutter={10}>
            <Col xs={24} sm={18} md={16} lg={12}>
              <Card
                title="Personal Information"
                bordered={false}
                className="mb-2"
              >
                <div className="flex">
                  {/* input */}
                  <div className="text-md font-bold mr-10">
                    <h1>Phone No.</h1>
                    <h1>secondary Phone No.</h1>
                    <h1>Email: </h1>
                    <h1>Office Email: </h1>
                  </div>
                  {/* value */}
                  <div>
                    <h2>{data?.phone_number}</h2>
                    <h2>{data?.other_phone_number}</h2>
                    <h2>{data?.personal_email}</h2>
                    <h2>{data?.office_email}</h2>
                  </div>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={18} md={16} lg={12}>
              <Card title="Emergency Contact" bordered={false} className="mb-2">
                <div className="flex">
                  {/* input */}
                  <div className="text-md font-bold mr-10">
                    <h1>Name: </h1>
                    <h1>Relation:</h1>
                    <h1>Phone No:</h1>
                    <h1>Email:</h1>
                  </div>
                  {/* value */}
                  <div>
                    <h2>{data?.emergency_contact?.name}</h2>
                    <h2>{data?.emergency_contact?.relationship}</h2>
                    <h2>{data?.emergency_contact_details?.phone_number}</h2>
                    <h2>{data?.emergency_contact_details?.email}</h2>
                  </div>
                </div>
                {/* <Divider dashed /> */}
                {/* <div className="flex">
                  <div className="text-md font-bold mr-10">
                    <h1>Passport No.</h1>
                    <h1>Passport Exp Date</h1>
                    <h1>Telephone No.</h1>
                  </div>

                  <div>
                    <h2>849584958583</h2>
                    <h2>849584958583</h2>
                    <h2>849584958583</h2>
                  </div>
                </div> */}
              </Card>
            </Col>
          </Row>
        </div>

        {/* Bank-family information */}
        {/* <Row gutter={10}>
          <Col xs={24} sm={18} md={16} lg={12}>
            <Card title="Bank Information" bordered={false} className="mb-2">
              <div className="flex">
                
                <div className="text-md font-bold mr-10">
                  <h1>Passport No.</h1>
                  <h1>Passport Exp Date</h1>
                  <h1>Telephone No.</h1>
                  <h1>Telephone No.</h1>
                </div>
                
                <div>
                  <h2>849584958583</h2>
                  <h2>849584958583</h2>
                  <h2>849584958583</h2>
                  <h2>849584958583</h2>
                </div>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={18} md={16} lg={12}>
            <Card title="Family Contact" bordered={false} className="mb-2">
              <Table
                dataSource={dataSource}
                columns={columns}
                pagination={false}
                bordered={false}
              />
            </Card>
          </Col>
        </Row> */}
        {/* Education-Experience Information */}
        {/* <Row gutter={10}>
          <Col xs={24} sm={18} md={16} lg={12}>
            <Card
              title="Education Information"
              bordered={false}
              className="mb-2"
            >
              <Timeline
                items={[
                  {
                    children: (
                      <>
                        <p>Technical testing 1</p>
                        <p>Technical testing 2</p>
                        <p>Technical testing 3</p>
                      </>
                    ),
                  },
                  {
                    children: (
                      <>
                        <p>Technical testing 1</p>
                        <p>Technical testing 2</p>
                        <p>Technical testing 3</p>
                      </>
                    ),
                  },
                ]}
              />
            </Card>
          </Col>
          <Col xs={24} sm={18} md={16} lg={12}>
            <Card title="Experience" bordered={false} className="mb-2">
              <Timeline
                items={[
                  {
                    children: (
                      <>
                        <p>Technical testing 1</p>
                        <p>Technical testing 2</p>
                        <p>Technical testing 3</p>
                      </>
                    ),
                  },
                  {
                    children: (
                      <>
                        <p>Technical testing 1</p>
                        <p>Technical testing 2</p>
                        <p>Technical testing 3</p>
                      </>
                    ),
                  },
                ]}
              />
            </Card>
          </Col>
        </Row> */}
      </div>
    </div>
  );
};

export default profile;
