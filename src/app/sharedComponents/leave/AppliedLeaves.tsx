"use client";

import { useDebounced } from "@/redux/hooks";
import { Button, Input, message } from "antd";
import { useState } from "react";
import dayjs from "dayjs";
import Link from "next/link";
import BreadCrumb from "@/components/ui/BreadCrumb";
import ActionBar from "@/components/ui/ActionBar";
import PPTable from "@/components/ui/PPTable";
import {
  useLeavesByEmailQuery,
  useUpdateLeaveMutation,
} from "@/redux/api/leaveApi";
import { getUserInfo } from "@/services/auth.service";
import PPModal from "@/components/ui/Modal";

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

  const [leaveId, setLeaveId] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const { data, isLoading } = useLeavesByEmailQuery(userId);
  const [updateLeave] = useUpdateLeaveMutation();

  const handleCancel = async (id: string) => {
    try {
      const res = await updateLeave({
        id,
        body: { status: "Cancelled" },
      }).unwrap();
      if (res) {
        message.success("Lave cancelled!");
        setOpen(false);
      }
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
      render: function (data: any) {
        if (data === "Applied") {
          return <span>{data}</span>;
        } else if (data === "Accepted") {
          return <span style={{ color: "#00674A" }}>{data}</span>;
        } else if (data === "Cancelled") {
          return <span style={{ color: "Red" }}>{data}</span>;
        } else if (data === "Rejected") {
          return <span style={{ color: "Red" }}>{data}</span>;
        }
      },
    },
    {
      title: "Total Days",
      dataIndex: "no_of_days",
    },
    {
      title: "From Date",
      dataIndex: "from_date",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY");
      },
      sorter: true,
    },
    {
      title: "To Date",
      dataIndex: "to_date",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY");
      },
      sorter: true,
    },

    {
      title: "Action",
      render: function (data: any) {
        return (
          <>
            {data?.status === "Applied" && (
              <Link
                href={`/dashboard/admin/leave/appliedLeaves/edit/${data?._id}`}
              >
                <Button
                  style={{
                    margin: "0px 5px",
                  }}
                >
                  Edit
                </Button>
              </Link>
            )}
            {data?.status === "Applied" && (
              <Button
                onClick={() => {
                  setOpen(true);
                  setLeaveId(data?.id);
                }}
                type="primary"
                style={{ backgroundColor: "#FF4D4F" }}
                danger
              >
                Cancel
              </Button>
            )}
          </>
        );
      },
      fixed: 'right',
      width: 160,
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
    <>
      <div style={{ overflowX: "auto" }} className="background">
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
        <ActionBar title="Applied Leave">
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
      <PPModal
        title="Cancel Leave"
        isOpen={open}
        closeModal={() => setOpen(false)}
        handleOk={() => handleCancel(leaveId)}
      >
        <p className="my-5">Are you sure you want to cancel this leave?</p>
      </PPModal>
    </>
  );
};

export default AppliedLeaves;
