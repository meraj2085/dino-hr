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
import { EditOutlined } from "@ant-design/icons";
import React from "react";
import { getUserInfo } from "@/services/auth.service";
import { useGetSingleUserQuery } from "@/redux/api/userApi";
import ProfileBasicDetails from "@/components/profile/profileDetails/ProfileBasicDetails";
import ProfileAddressDetails from "@/components/profile/profileDetails/ProfileAddressDetails";
import StepperPage from "@/components/StepperForm/StepperPage";

const profile = () => {
  const { userId } = getUserInfo() as any;
  const { data } = useGetSingleUserQuery(userId);

  const steps = [
    {
      title: "Basic Info",
      content: <ProfileBasicDetails userData={data} />,
    },
    {
      title: "Address Info",
      content: <ProfileAddressDetails userData={data} />,
    },
  ];
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
      <div className="w-full h-4" />
      <StepperPage steps={steps} />
    </div>
  );
};

export default profile;
