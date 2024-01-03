"use client";

import { useDebounced } from "@/redux/hooks";
import { Button, Input, message } from "antd";
import { useState } from "react";
import dayjs from "dayjs";
import { FolderViewOutlined } from "@ant-design/icons";
import Link from "next/link";
import BreadCrumb from "@/components/ui/BreadCrumb";
import ActionBar from "@/components/ui/ActionBar";
import PPTable from "@/components/ui/PPTable";
import {
  useGetAllLeavesQuery,
  useUpdateLeaveMutation,
} from "@/redux/api/leaveApi";
import PPModal from "@/components/ui/Modal";

const Approveleave = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [open, setOpen] = useState<boolean>(false);
  const [leaveId, setLeaveId] = useState<string>("");

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
  const { data, isLoading } = useGetAllLeavesQuery({ ...query });
  const [updateLeave] = useUpdateLeaveMutation();

  const handleApprove = async (id: string) => {
    try {
      await updateLeave({
        id,
        body: { status: "Accepted" },
      }).unwrap();
    } catch (error) {
      console.error(error);
    }
  };

  const handleReject = async (id: string) => {
    try {
      const res = await updateLeave({
        id,
        body: { status: "Rejected" },
      }).unwrap();
      if (res) {
        message.success("Your leave Reject successfully");
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
            <Link
              href={`/dashboard/admin/leave/approveLeaves/view/${data?._id}`}
            >
              <Button
                style={{
                  margin: "0px 5px",
                }}
              >
                <FolderViewOutlined />
              </Button>
            </Link>
            {data?.status !== "Accepted" && (
              <Button
                style={{
                  margin: "0px 5px",
                }}
                onClick={() => handleApprove(data?._id)}
                type="primary"
              >
                Approve
              </Button>
            )}
            {data?.status !== "Rejected" && (
              <Button
                onClick={() => {
                  setOpen(true);
                  setLeaveId(data?._id);
                }}
                style={{
                  margin: "0px 5px",
                }}
              >
                Reject
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
      <ActionBar title="Approve Leave List">
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
        dataSource={data?.leaves}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
        scroll={{ x: true }}
      />

      <PPModal
        title="Cancel Leave"
        isOpen={open}
        closeModal={() => setOpen(false)}
        handleOk={() => handleReject(leaveId)}
      >
        <p className="my-5">Do you want to reject this leave?</p>
      </PPModal>
    </div>
  );
};

export default Approveleave;
