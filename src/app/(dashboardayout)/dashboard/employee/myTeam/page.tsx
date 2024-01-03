"use client";
import React from "react";
import ActionBar from "@/components/ui/ActionBar";
import { Avatar, Card, Col, Input, Row } from "antd";
import { useGetMyTeamQuery } from "@/redux/api/userApi";
import profileImg from "../../../../../../public/assets/profile.png"
import Image from "next/image";

const MyTeam = () => {
  const { data: teamData, isLoading } = useGetMyTeamQuery({});
  // console.log(teamData);
  return (
    <div className="min-w-[250px]">
      <ActionBar title="My Team" />
      <Row gutter={10}>
        {teamData?.myTeam?.map((data, index) => (
          <Col key={index} xs={24} sm={18} md={16} lg={12}>
            <Card className="mb-2">
              <div className="md:flex gap-4">
                <div className="flex justify-center">
                  <Avatar
                    size={64}
                    src={
                      data?.profile_picture || (
                        <Image src={profileImg} alt="profile" />
                      )
                    }
                  />
                </div>
                <div className="ml-4">
                  <h1 className="text-md font-bold">
                    {data?.first_name} {data?.last_name}
                  </h1>
                  <h5>Phone : {data?.phone_number}</h5>
                  <h5>Email : {data?.office_email}</h5>
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
