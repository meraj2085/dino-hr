"use client";

import { useDebounced } from "@/redux/hooks";
import { Button, DatePicker, Input, message } from "antd";
import { useState } from "react";
import dayjs from "dayjs";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import Link from "next/link";
import BreadCrumb from "@/components/ui/BreadCrumb";
import ActionBar from "@/components/ui/ActionBar";
import PPTable from "@/components/ui/PPTable";
import { useGetAllAttendanceQuery } from "@/redux/api/attendanceApi";
import FormDatePicker from "@/components/Forms/FormDatePicker";

const ViewAttendance = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [open, setOpen] = useState<boolean>(false);
  const [eventId, setEventId] = useState<string>("");

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
  const { data, isLoading } = useGetAllAttendanceQuery({ ...query });

  const meta = data?.meta;
  console.log(data);

  const columns = [
    {
      title: "Name",
      dataIndex: "userName",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Check in time",
      dataIndex: "check_in",
      // render: function (data: any) {
      //   return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      // },
      sorter: true,
    },
    {
      title: "Check out time",
      dataIndex: "check_out",
      // render: function (data: any) {
      //   return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      // },
      sorter: true,
    },
    {
      title: "Description",
      dataIndex: "description",
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

  const dateFormat = "YYYY/MM/DD";

  return (
    <div style={{ overflowX: "auto" }}>
      <BreadCrumb
        items={[
          {
            label: "Admin",
            link: "/admin",
          },
          {
            label: "View Attendance",
            link: "/dashboard/admin/attendance/viewAttendance",
          },
        ]}
      />
     
      <ActionBar title="View Attendance">
        <Input
          size="large"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "20%",
          }}
        />
      </ActionBar>
      <DatePicker 
      style={{
        width: "20%",
        marginBottom: "10px",
      }}
        
        defaultValue={dayjs("2015/01/01", dateFormat)}
        format={dateFormat}
      />
      

      <PPTable
        loading={isLoading}
        columns={columns}
        dataSource={data?.attendances}
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

export default ViewAttendance;
