"use client";

import { useDebounced } from "@/redux/hooks";
import { Button, Input, message } from "antd";
import { useState } from "react";
import dayjs from "dayjs";
import { FolderViewOutlined, EditOutlined } from "@ant-design/icons";
import Link from "next/link";
import BreadCrumb from "@/components/ui/BreadCrumb";
import ActionBar from "@/components/ui/ActionBar";
import PPTable from "@/components/ui/PPTable";
import {
  useLeavesByEmailQuery,
  useUpdateLeaveMutation,
} from "@/redux/api/leaveApi";
import { getUserInfo } from "@/services/auth.service";

const AppliedLeaves = () => {
  const { userId } = getUserInfo() as any;
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

  const { data, isLoading } = useLeavesByEmailQuery(userId);
  const [updateLeave] = useUpdateLeaveMutation();

  const handleCancel = async (id: string) => {
    try {
      await updateLeave({
        id,
        body: { status: "Cancelled" },
      }).unwrap();
    } catch (error) {
      console.error(error);
    }
  };
  const meta = data?.meta;

  const columns = [
    {
      title: "Leave Types",
      dataIndex: "leave_type",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Days",
      dataIndex: "no_of_days",
    },
    {
      title: "From Date",
      dataIndex: "from_date",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "To Date",
      dataIndex: "to_date",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },

    {
      title: "Action",
      // dataIndex: "id",
      render: function (data: any) {
        return (
          <>
            {data?.status !== "Cancelled" && (
              <Link
                href={`/dashboard/admin/leave/appliedLeaves/edit/${data?._id}`}
              >
                <Button
                  style={{
                    margin: "0px 5px",
                  }}
                >
                  <EditOutlined />
                </Button>
              </Link>
            )}
            {data?.status !== "Cancelled" && (
              <Link
                href={`/dashboard/admin/leave/appliedLeaves/view/${data?._id}`}
              >
                <Button
                  style={{
                    margin: "0px 5px",
                  }}
                >
                  <FolderViewOutlined />
                </Button>
              </Link>
            )}
            {data?.status !== "Cancelled" && (
              <Button onClick={() => handleCancel(data)} type="primary" danger>
                Cancel
              </Button>
            )}
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
            link: "/dashboard/admin",
          },
          {
            label: "Applied Leaves",
            link: "/dashboard/admin/leave/appliedLeaves",
          },
        ]}
      />
      <ActionBar title="Applied List">
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
        dataSource={data}
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

export default AppliedLeaves;
