"use client";

import React, { useState } from "react";
import ActionBar from "@/components/ui/ActionBar";
import { Avatar, Card, Col, Input, Row } from "antd";
import { useGetMyTeamQuery } from "@/redux/api/userApi";
import Image from "next/image";
import { useDebounced } from "@/redux/hooks";
import Loading from "@/app/loading";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { anonymousAvatar } from "@/constants/global";

const MyTeam = () => {
  const query: Record<string, any> = {};
  const [searchTerm, setSearchTerm] = useState<string>("");

  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm;
  }

  const { data: teamData, isLoading } = useGetMyTeamQuery({ ...query });

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="background">
      <BreadCrumb
        items={[
          {
            label: "Admin",
            link: "/dashboard/admin",
          },
          {
            label: "My Team",
            link: "/dashboard/admin/myTeam",
          },
        ]}
      />
      <ActionBar title="My Team">
        <Input
          size="large"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "20%",
          }}
        />
      </ActionBar>
      <Row gutter={10}>
        {teamData?.myTeam?.map((data, index) => (
          <Col key={index} xs={24} sm={18} md={16} lg={12}>
            <Card className="mb-2 border-gray-300 shadow-sm min-w-[250px] hover:shadow-md transition duration-300 ease-in-out">
              <div className="md:flex gap-4">
                <div className="flex justify-center">
                  <Avatar
                    size={64}
                    src={
                      data?.profile_picture
                        ? data?.profile_picture
                        : data?.gender === "Male"
                        ? anonymousAvatar?.male
                        : anonymousAvatar.female
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
