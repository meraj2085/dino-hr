"use client";

import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { Button, Input } from "antd";
import Link from "next/link";
import { EditOutlined, EyeOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useDebounced } from "@/redux/hooks";
import PPTable from "@/components/ui/PPTable";
import dayjs from "dayjs";
import { useGetAllAppointmentQuery } from "@/redux/api/appointmentApi";

const BookingManagementPage = () => {
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
  const { data, isLoading } = useGetAllAppointmentQuery({ ...query });
  const meta = data?.meta;

  const columns = [
    {
      title: "Name",
      dataIndex: "fullName",
    },
    {
      title: "Mobile Number",
      dataIndex: "mobileNumber",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Date",
      dataIndex: "appointment_date",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY");
      },
      sorter: true,
    },
    {
      title: "Time",
      dataIndex: "appointment_time",
    },
    {
      title: "Status",
      dataIndex: "appointment_status",
      render: function (data: any) {
        if (data === "pending") {
          return <span style={{ color: "#8384BF" }}>{data}</span>;
        } else if (data === "completed") {
          return <span style={{ color: "green" }}>{data}</span>;
        }
      },
    },
    {
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <>
            <Link href={`/dashboard/super_admin/bookings/view/${data}`}>
              <Button icon={<EyeOutlined />} />
            </Link>
            <Link href={`/dashboard/super_admin/bookings/edit/${data}`}>
              <Button
                style={{
                  margin: "0px 5px",
                }}
                icon={<EditOutlined />}
              />
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
    <div style={{ overflowX: "auto" }} className="min-w-[250px]">
      <BreadCrumb
        items={[
          {
            label: "Super Admin",
            link: "/dashboard/super_admin",
          },
          {
            label: "Bookings",
            link: "/dashboard/super_admin/bookings",
          },
        ]}
      />
      <ActionBar title="Bookings List">
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
        dataSource={data?.appointments}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
        scroll={{ x: true }}
      />
    </div>
  );
};

export default BookingManagementPage;
