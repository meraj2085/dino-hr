"use client";

import { useDebounced } from "@/redux/hooks";
import { Button, Input, message } from "antd";
import { useState } from "react";
import dayjs from "dayjs";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import Link from "next/link";
import BreadCrumb from "@/components/ui/BreadCrumb";
import ActionBar from "@/components/ui/ActionBar";
import PPTable from "@/components/ui/PPTable";
import {
  useDeleteEventMutation,
  useGetAllEventQuery,
} from "@/redux/api/eventApi";
import PPModal from "@/components/ui/Modal";
import { getUserInfo } from "@/services/auth.service";

const ViewEvents = () => {
  const { user_type } = getUserInfo() as any;
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
  const { data, isLoading } = useGetAllEventQuery({ ...query });
  const [deleteEvent] = useDeleteEventMutation();
  const meta = data?.meta;

  const deleteEventHandler = async (id: string) => {
    try {
      const res = await deleteEvent(id);
      if (res) {
        message.success("Event Successfully Deleted!");
        setOpen(false);
      }
    } catch (error: any) {
      message.error(error.message);
    }
  };

  let columns = [
    {
      title: "Title",
      dataIndex: "title",
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
      title: "Type",
      dataIndex: "type",
    },
  ];

  if (user_type === "admin") {
    columns.push({
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <>
            <Link href={`/dashboard/admin/events/edit/${data}`}>
              <Button
                style={{
                  margin: "0px 5px",
                }}
              >
                <EditOutlined />
              </Button>
            </Link>
            <Button
              onClick={() => {
                setOpen(true);
                setEventId(data);
              }}
              style={{
                margin: "0px 5px",
              }}
            >
              <DeleteOutlined />
            </Button>
          </>
        );
      },
      sorter: true,
    });
  }

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
            label: "Events / View Event",
            link: "/dashboard/admin/events/viewEvent",
          },
        ]}
      />
      <ActionBar title="Events List">
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
        dataSource={data?.events}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
        scroll={{ x: true }}
      />

      <PPModal
        title="Remove Event"
        isOpen={open}
        closeModal={() => setOpen(false)}
        handleOk={() => deleteEventHandler(eventId)}
      >
        <p className="my-5">Do you want to remove this Event?</p>
      </PPModal>
    </div>
  );
};

export default ViewEvents;
