"use client";
import { useState } from "react";
const { Meta } = Card;
import { Avatar, Card, Col, Input, Row } from "antd";
import { useGetAllAddressQuery } from "@/redux/api/addressApi";
import { useDebounced } from "@/redux/hooks";
import { IAddress } from "@/types";
import ActionBar from "@/components/ui/ActionBar";

const AddressBook = () => {
  const query: Record<string, any> = {};
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm;
  }

  const { data, isLoading } = useGetAllAddressQuery({ query });
  const meta = data?.meta;
  // console.log(data);

  return (
    <div>
        <ActionBar title="Address Book">
        <Input
          className="w-52 mb-2"
          size="large"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        </ActionBar>
      <Row gutter={32}>
        {data?.address?.map((data: IAddress) => (
          <Col xs={24} sm={18} md={16} lg={12} key={data.id}>
            <Card loading={isLoading}>
              {/* Card content */}
              <div className="flex">
                <Avatar
                  size={64}
                  src="https://www.apexfootwearltd.com/media/images/2._SNM.466072d2.fill-494x620-c100.jpg"
                />
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
