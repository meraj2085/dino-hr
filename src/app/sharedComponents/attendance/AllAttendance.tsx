"use client";

import { useDebounced } from "@/redux/hooks";
import { DatePicker, Input } from "antd";
import { useState } from "react";
import BreadCrumb from "@/components/ui/BreadCrumb";
import ActionBar from "@/components/ui/ActionBar";
import PPTable from "@/components/ui/PPTable";
import { useGetAllAttendanceQuery } from "@/redux/api/attendanceApi";
import dayjs from "dayjs";
import moment from "moment";

const AllAttendance = () => {
  const currentDate = moment(new Date()).format("YYYY-MM-DD");
  const [selectedDate, setSelectedDate] = useState(currentDate);
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
  query["date"] = selectedDate;

  const handleDateChange = (date: any) => {
    setSelectedDate(dayjs(date).format("YYYY-MM-DD"));
  };

  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm;
  }
  const { data, isLoading } = useGetAllAttendanceQuery({ ...query });

  const meta = data?.meta;

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
    },
    {
      title: "Check out time",
      dataIndex: "check_out",
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

      <ActionBar title="All Attendance">
        <Input
          size="large"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "20%",
          }}
        />
        <DatePicker
          style={{ width: "20%" }}
          className="py-2"
          onChange={handleDateChange}
          defaultValue={dayjs(selectedDate, dateFormat)}
          format="YYYY-MM-DD"
        />
      </ActionBar>

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

export default AllAttendance;
