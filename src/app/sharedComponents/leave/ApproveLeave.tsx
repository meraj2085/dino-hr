"use client";

import { useDebounced } from "@/redux/hooks";
import { Button, Input, message } from "antd";
import { useState } from "react";
import dayjs from "dayjs";
import BreadCrumb from "@/components/ui/BreadCrumb";
import ActionBar from "@/components/ui/ActionBar";
import PPTable from "@/components/ui/PPTable";
import {
  useGetAllLeavesQuery,
  useUpdateLeaveMutation,
} from "@/redux/api/leaveApi";
import PPModal from "@/components/ui/Modal";

const ApproveLeave = () => {
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
  const { data, isLoading } = useGetAllLeavesQuery({ ...query });
  const [updateLeave] = useUpdateLeaveMutation();
  const [leaveId, setLeaveId] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [open_2, setOpen_2] = useState<boolean>(false);

  const handleApprove = async (id: string) => {
    try {
      const res = await updateLeave({
        id,
        body: { status: "Accepted" },
      }).unwrap();
      if (res) {
        message.success("Lave Approved!");
        setOpen_2(false);
      }
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
        message.success("Lave Rejected!");
        setOpen(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const meta = data?.meta;

  const columns = [
    {
      title: "Employee Name",
      dataIndex: "user_id",
      render: function (data: any) {
        return (
          <span>
            {data?.first_name} {data?.last_name}
          </span>
        );
      },
    },
    {
      title: "Employee Code",
      dataIndex: "user_id",
      render: function (data: any) {
        return <span>{data?.employee_code}</span>;
      },
    },
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
        } else if (data === "Expired") {
          return <span style={{ color: "Red" }}>{data}</span>;
        }
      },
    },
    {
      title: "Days",
      width: 100,
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
      // dataIndex: "id",
      width: 200,
      render: function (data: any) {
        return (
          <>
            {data?.status === "Applied" && (
              <Button
                style={{
                  margin: "0px 5px",
                }}
                onClick={() => {
                  setOpen_2(true);
                  setLeaveId(data?.id);
                }}
                type="primary"
              >
                Approve
              </Button>
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
        <ActionBar title="Approve Leave">
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
          
        />
      </div>
      <PPModal
        title="Reject Event"
        isOpen={open}
        closeModal={() => setOpen(false)}
        handleOk={() => handleReject(leaveId)}
      >
        <p className="my-5">Are you sure you want to reject this leave?</p>
      </PPModal>
      <PPModal
        title="Approve Event"
        isOpen={open_2}
        closeModal={() => setOpen_2(false)}
        handleOk={() => handleApprove(leaveId)}
      >
        <p className="my-5">Are you sure you want to approve this leave?</p>
      </PPModal>
    </>
  );
};

export default ApproveLeave;
