"use client";

import { useGetAllUsersQuery } from "@/redux/api/userApi";
import { useDebounced } from "@/redux/hooks";
import { Button, Input } from "antd";
import { useState } from "react";
import dayjs from "dayjs";
import {
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import BreadCrumb from "@/components/ui/BreadCrumb";
import ActionBar from "@/components/ui/ActionBar";
import PPTable from "@/components/ui/PPTable";

const ViewEvents = () => {
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
  const { data, isLoading } = useGetAllUsersQuery({ ...query });
  const meta = data?.meta;

  const columns = [
    {
      title: "From Date",
      dataIndex: "name",
      render: function (data: Record<string, string>) {
        const fullName = `${data?.firstName} ${data?.lastName}`;
        return <>{fullName}</>;
      },
    },
    {
      title: "To Date",
      dataIndex: "data?.email",
    },
    {
      title: "Type",
      dataIndex: "mobileNumber",
    },
    {
      title: "Created at",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <>
            <Link href={`/dashboard/admin/events/edit/${data}`}>
              <Button
                style={{
                  margin: "0px 5px",
                }}
              >
                <EditOutlined />
              </Button>
            </Link>
            <Link href={`/dashboard/admin/`}>
              <Button
                style={{
                  margin: "0px 5px",
                }}
              >
                <DeleteOutlined />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  return (
    <div>
      <BreadCrumb
        items={[
          {
            label: "Admin",
            link: "/dashboard/admin",
          },
          {
            label: "View Event",
            link: "/dashboard/admin/event/viewEvent",
          },
        ]}
      />
      <ActionBar title="Events List">
        <Input
          size="large"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "20%",
          }}
        />
      </ActionBar>

      <PPTable
        loading={isLoading}
        columns={columns}
        dataSource={data?.users}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default ViewEvents;
