"use client";

import { useDebounced } from "@/redux/hooks";
import { DatePicker, Input, Tooltip } from "antd";
import { useState } from "react";
import BreadCrumb from "@/components/ui/BreadCrumb";
import ActionBar from "@/components/ui/ActionBar";
import PPTable from "@/components/ui/PPTable";
import { useGetAllAttendanceQuery } from "@/redux/api/attendanceApi";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import locale from "dayjs/plugin/localeData";
import { CheckSVG, XSignSVG, UpcomingSVG } from "@/shared/svg";

dayjs.extend(weekday);
dayjs.extend(locale);

const AllAttendance = () => {
  const currentDate = dayjs();
  const [selectedMonthYear, setSelectedMonthYear] = useState(
    currentDate.format("YYYY-MM")
  );
  const query: Record<string, any> = {};
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const totalDays = dayjs(selectedMonthYear).daysInMonth();
  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["monthYear"] = selectedMonthYear;

  const handleDateChange = (date: any) => {
    setSelectedMonthYear(dayjs(date).format("YYYY-MM"));
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
      title: "Employee",
      dataIndex: "name",
      key: "name",
      fixed: "left",
      width: 150,
      render: (name: string) => <div>{name}</div>,
    },
  
    ...Array.from({ length: totalDays }, (_, index) => {
      const dayDate = dayjs(selectedMonthYear).date(index + 1);
      const dayName = dayDate.format("ddd");
  
      return {
        title: (
          <Tooltip placement="top" title={dayName}>
            <span>{index + 1}</span>
          </Tooltip>
        ),
        dataIndex: `day_${index + 1}`,
        key: `day_${index + 1}`,
        render: (status: any) => {
          const isFutureDate = dayDate.isAfter(currentDate, "day");
  
          if (isFutureDate) {
            return <UpcomingSVG />;
          }
  
          return status?.attendance ? <CheckSVG /> : <XSignSVG />;
        },
      };
    }),
  ];

  const tableData = (data?.attendances || []).map((user: any) => {
    const row: Record<string, any> = { user_id: user.user_id, name: user.name };
    user.data.forEach((day: any, index: number) => {
      row[`day_${index + 1}`] = day;
    });
    return row;
  });

  console.log(tableData, "tableData");

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
          picker="month"
          defaultValue={dayjs(selectedMonthYear, "YYYY-MM")}
          format="YYYY-MM"
          disabledDate={(current) => current > currentDate.endOf("month")}
        />
      </ActionBar>

      <PPTable
        loading={isLoading}
        columns={columns}
        dataSource={tableData}
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
