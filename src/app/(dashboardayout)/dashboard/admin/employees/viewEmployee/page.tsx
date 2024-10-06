"use client";
import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { Button, Input } from "antd";
import Link from "next/link";
import { EyeOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useDebounced } from "@/redux/hooks";
import PPTable from "@/components/ui/PPTable";
import { useGetAllEmployeeQuery } from "@/redux/api/employeeApi";
import Image from "next/image";
import { anonymousAvatar } from "@/constants/global";
import { MaleSVG, FemaleSVG } from "@/shared/svg";

const ViewEmployees = () => {
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

  const { data, isLoading } = useGetAllEmployeeQuery({ ...query });
  const meta = data?.meta;

  const columns = [
    {
      title: "",
      dataIndex: "profile_picture",
      render: function (data: string, record: Record<string, string>) {
        return (
          <Image
            src={
              data
                ? data
                : record?.gender === "Male"
                ? anonymousAvatar?.male
                : anonymousAvatar.female
            }
            alt="Avatar"
            width={50}
            height={50}
            style={{ borderRadius: "10%" }}
          />
        );
      },
      width: 80,
    },
    {
      title: "Employee Name",
      render: function (data: Record<string, string>) {
        const fullName = `${data?.first_name} ${data?.last_name}`;
        return <>{fullName}</>;
      },
    },
    {
      title: "Gender",
      width: 120,
      render: function (data: Record<string, string>) {
        return (
          <>
            {data?.gender === "Male" ? (
              <div className="flex gap-[1px] items-center">
                <MaleSVG />
                Male
              </div>
            ) : (
              <div className="flex gap-[1px] items-center">
                <FemaleSVG />
                Female
              </div>
            )}
          </>
        );
      },
    },
    {
      title: "Employee Email",
      dataIndex: "office_email",
      width: 200,
    },
    {
      title: "Employee Phone",
      dataIndex: "phone_number",
    },
    {
      title: "Status",
      dataIndex: "employment_status",
    },
    {
      title: "Employee Code",
      dataIndex: "employee_code",
    },
    {
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <>
            <Link href={`/dashboard/admin/employees/viewEmployee/${data}`}>
              <Button icon={<EyeOutlined />}></Button>
            </Link>
          </>
        );
      },
      fixed: "right",
      width: 70,
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
    <div style={{ overflowX: "auto" }} className="background">
      <BreadCrumb
        items={[
          {
            label: "Admin",
            link: "/dashboard/admin",
          },
          {
            label: "Employees / View Employee",
            link: "/dashboard/admin/Employees/viewEmployee",
          },
        ]}
      />
      <ActionBar title="Employee List">
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
        dataSource={data?.employees}
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

export default ViewEmployees;
