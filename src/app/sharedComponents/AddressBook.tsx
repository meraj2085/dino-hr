"use client";
import { useState } from "react";
import { Avatar, Card, Col, Input, Row } from "antd";
import { useGetAllAddressQuery } from "@/redux/api/addressApi";
import { useDebounced } from "@/redux/hooks";
import { IAddress } from "@/types";
import ActionBar from "@/components/ui/ActionBar";
import Loading from "@/app/loading";
import Image from "next/image";

const AddressBook = () => {
  const query: Record<string, any> = {};
  const [searchTerm, setSearchTerm] = useState<string>("");

  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm;
  }

  const { data, isLoading } = useGetAllAddressQuery({ ...query });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div
      className="min-w-[300px] min-h-[650px] m-0 md:m-[20px]"
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: "20px",
        padding: "24px 24px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        overflowX: "auto",
      }}
    >
      <ActionBar title="Address Book" />
      <Input
        className="w-52 mb-2"
        size="large"
        placeholder="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Row gutter={10} className="">
        {data?.address?.map((data: IAddress) => (
          <Col xs={24} sm={18} md={16} lg={12} key={data.id}>
            <Card
              className="mb-2 border-gray-300 hover:shadow-md shadow min-w-[250px]"
              loading={isLoading}
            >
              <div className="md:flex gap-4">
                <div className="flex justify-center">
                  <Avatar
                    size={64}
                    src={
                      data?.profile_picture || (
                        <Image
                          src={data?.profile_picture || ""}
                          alt="profile"
                        />
                      )
                    }
                  />
                </div>
                <div className="ml-4">
                  <h1 className="text-md font-bold">
                    {data.first_name} {data.last_name}
                  </h1>
                  <h5>Phone : {data.phone_number}</h5>
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

export default AddressBook;
