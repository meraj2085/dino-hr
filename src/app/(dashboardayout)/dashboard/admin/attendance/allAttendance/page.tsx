"use client";
import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { Button, Col, Input, Row } from "antd";
import Link from "next/link";
import dayjs from "dayjs";
import { useState } from "react";
import { useDebounced } from "@/redux/hooks";
import PPTable from "@/components/ui/PPTable";
import { useGetAllOrganizationQuery } from "@/redux/api/organizationApi";
import PPModal from "@/components/ui/Modal";
import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { eventSchema } from "@/schema/event";
import FormTimePicker from "@/components/Forms/FormTimePicker";

const AllAttendance = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [open, setOpen] = useState<boolean>(false);

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  if (!!debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm;
  }

  const { data, isLoading } = useGetAllOrganizationQuery({ ...query });
  const meta = data?.meta;

  // console.log(data);

  const columns = [
    {
      title: "Check in time",
      dataIndex: "check_in_time",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Check out time",
      dataIndex: "Check_out_time",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Status",
      dataIndex: "",
    },
    {
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <>
            <Link href={``}>
              <Button onClick={() => setOpen(!open)}>Add</Button>
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
    <div style={{ overflowX: "auto" }}>
      <BreadCrumb
        items={[
          {
            label: "Admin",
            link: "/admin",
          },
          {
            label: "All Attendance",
            link: "/dashboard/admin/attendance/allAttendance",
          },
        ]}
      />
      <ActionBar title="Add Attendance">
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
        dataSource={data?.organizations}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
        scroll={{ x: true }}
      />
      <PPModal
        title="Add Attendance"
        isOpen={open}
        closeModal={() => setOpen(false)}
        handleOk={() => setOpen(false)}
      >
        <Form submitHandler={onSubmit} resolver={yupResolver(eventSchema)}>
          <Row gutter={{ xs: 4, md: 20 }}>
            <Col xs={24} md={12} lg={12} className="mt-3">
              <div>
                <FormDatePicker
                  name="check_in_date"
                  label="Check in Date"
                  size="large"
                />
                <FormTimePicker name="time" label="Time" />
              </div>
            </Col>

            <Col xs={24} md={12} lg={12} className="mt-3">
              <div>
                <FormDatePicker
                  name="check_out_date"
                  label="Check out Date"
                  size="large"
                />
                <FormTimePicker name="time" label="Time" />
              </div>
            </Col>

            <Col xs={24} md={12} lg={12} className="mt-3">
              <div>
                <FormInput name="name" type="text" size="large" label="Name" />
              </div>
            </Col>

            <Col xs={24} md={12} lg={12} className="mt-3">
              <div>
                <FormInput name="id" type="text" size="large" label="ID" />
              </div>
            </Col>
          </Row>
        </Form>
      </PPModal>
    </div>
  );
};

export default AllAttendance;
