"use client";
import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { Button, Input, message } from "antd";
import Link from "next/link";
import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useDebounced } from "@/redux/hooks";
import PPTable from "@/components/ui/PPTable";
import { IUser } from "@/types";
import dayjs from "dayjs";
import {
  useDeleteServiceMutation,
  useServicesQuery,
} from "@/redux/api/serviceApi";
import PPModal from "@/components/ui/Modal";

const ServiceManagementPage = () => {
  const query: Record<string, any> = {};
  const [deleteId, setDeleteId] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
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
  const { data, isLoading } = useServicesQuery({ ...query });
  const [deleteService] = useDeleteServiceMutation();
  const meta = data?.meta;

  const deleteHandler = async (id: string) => {
    try {
      const response = await deleteService(id).unwrap();
      setOpen(false);
      setDeleteId("");
      if (response?.id) {
        message.success("Service deleted successfully");
      } else {
        message.error("Failed to delete service");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      render: function (data: string) {
        return `$${data}`;
      },
      sorter: true,
    },
    {
      title: "Availability",
      dataIndex: "availability",
      render: function (data: Record<string, string>) {
        return data ? "Available" : "Not Available";
      },
    },
    {
      title: "Description",
      dataIndex: "description",
      render: function (data: string) {
        const first100Chars = data.slice(0, 30);
        return `${first100Chars}...`;
      },
    },
    {
      title: "Created at",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <>
            <Link href={`/dashboard/admin/serviceManagement/edit/${data}`}>
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
                setDeleteId(data);
                setOpen(true);
              }}
              type="primary"
              danger
            >
              <DeleteOutlined />
            </Button>
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
      <div>
        <BreadCrumb
          items={[
            {
              label: "Admin",
              link: "/dashboard/admin",
            },
            {
              label: "Services",
              link: "/dashboard/admin/serviceManagement",
            },
          ]}
        />
        <ActionBar title="Service List">
          <Input
            size="large"
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "20%",
            }}
          />
          <div>
            <Link href="/dashboard/admin/serviceManagement/create">
              <Button>Add Service</Button>
            </Link>
          </div>
        </ActionBar>

        <PPTable
          loading={isLoading}
          columns={columns}
          dataSource={data?.services}
          pageSize={size}
          totalPages={meta?.total}
          showSizeChanger={true}
          onPaginationChange={onPaginationChange}
          onTableChange={onTableChange}
          showPagination={true}
        />
      </div>
      <PPModal
        title="Delete Service"
        isOpen={open}
        closeModal={() => setOpen(false)}
        handleOk={() => {
          deleteHandler(deleteId);
        }}
      >
        <>
          <p className="mt-5">Are you sure you want to delete this service?</p>
        </>
      </PPModal>
    </>
  );
};

export default ServiceManagementPage;
