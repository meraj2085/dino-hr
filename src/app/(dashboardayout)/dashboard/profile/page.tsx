/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { Avatar, Card, Col, Row } from "antd";

import React from "react";
import { getUserInfo } from "@/services/auth.service";
import { useGetSingleUserQuery } from "@/redux/api/userApi";
import Loading from "@/app/loading";

const profile = () => {
  const { userId } = getUserInfo() as any;
  const { data, isLoading } = useGetSingleUserQuery(userId);

  if (isLoading) return <Loading />;
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
          <div className="grid lg:grid-cols-2 mx-auto ">
            {/* left  */}
            <div className="flex justify-start items-center mb-5 lg:mb-0">
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
              </div>
            </div>

            {/* right */}
            <div className="flex border-dashed lg:border-l-2 border-gray-500 pl-4">
              <div className="text-md font-bold mr-10">
                <h1>Phone:</h1>
                <h1>Email:</h1>
                <h1>Birthday:</h1>
                <h1>Address:</h1>
                <h1>Gender:</h1>
              </div>
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
          </div>
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
              </Card>
            </Col>
          </Row>
        </div>
        <div>
          <Row gutter={10}>
            <Col xs={24} sm={18} md={16} lg={12}>
              <Card title="Bank Details" bordered={false} className="mb-2">
                <div className="flex">
                  {/* input */}
                  <div className="text-md font-bold mr-10">
                    <h1>Bank Name:</h1>
                    <h1>Account No.</h1>
                    <h1>Branch: </h1>
                    <h1>Account Type: </h1>
                  </div>
                  {/* value */}
                  <div>
                    <h2>{data?.bank_name}</h2>
                    <h2>{data?.account_number}</h2>
                    <h2>{data?.bank_details?.branch}</h2>
                    <h2>{data?.bank_details?.account_type}</h2>
                  </div>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={18} md={16} lg={12}>
              <Card title="Other Information" bordered={false} className="mb-2">
                <div className="flex">
                  {/* input */}
                  <div className="text-md font-bold mr-10">
                    <h1>Team: </h1>
                    <h1>Role:</h1>
                    <h1>User Type:</h1>
                    <h1>Manager Id:</h1>
                  </div>
                  {/* value */}
                  <div>
                    <h2>{data?.team}</h2>
                    <h2>{data?.role}</h2>
                    <h2>{data?.user_type}</h2>
                    <h2>{data?.manager_id}</h2>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default profile;
