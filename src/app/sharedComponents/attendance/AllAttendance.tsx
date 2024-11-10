"use client";

import { useDebounced } from "@/redux/hooks";
import { DatePicker, Input } from "antd";
import { useState } from "react";
import BreadCrumb from "@/components/ui/BreadCrumb";
import ActionBar from "@/components/ui/ActionBar";
import PPTable from "@/components/ui/PPTable";
import { useGetAllAttendanceQuery } from "@/redux/api/attendanceApi";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import locale from "dayjs/plugin/localeData";
import { CheckSVG, XSignSVG } from "@/shared/svg";

dayjs.extend(weekday);
dayjs.extend(locale);

const AllAttendance = () => {
  const currentDate = dayjs().format("YYYY-MM-DD");
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

  const totalDays = 30;

  const columns = [
    {
      title: "Employee",
      dataIndex: "employee",
      key: "employee",
    },
    ...Array.from({ length: totalDays }, (_, index) => ({
      title: (index + 1).toString(),
      dataIndex: `day_${index + 1}`,
      key: `day_${index + 1}`,
      render: (status: any) => status || <CheckSVG />,
    })),
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
    <div style={{ overflowX: "auto" }} className="background">
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
          picker="date"
          defaultValue={dayjs(selectedDate, "YYYY-MM-DD")}
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
        scroll={{ x: 1500 }}
      />
    </div>
  );
};

export default AllAttendance;
