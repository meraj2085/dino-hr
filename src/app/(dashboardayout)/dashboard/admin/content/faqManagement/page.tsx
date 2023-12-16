"use client";
import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { Button, Input, message } from "antd";
import Link from "next/link";
import {
  DeleteOutlined,
  EyeOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useDebounced } from "@/redux/hooks";
import PPTable from "@/components/ui/PPTable";
import { IUser } from "@/types";
import dayjs from "dayjs";
import { useDeleteFaqMutation, useGetAllFaqQuery } from "@/redux/api/faqApi";
import PPModal from "@/components/ui/Modal";

const BlogManagementPage = () => {
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
  const { data, isLoading } = useGetAllFaqQuery({ ...query });
  const [deleteFaq] = useDeleteFaqMutation();
  const meta = data?.meta;

  const deleteHandler = async (id: string) => {
    try {
      const response = await deleteFaq(id).unwrap();
      setOpen(false);
      setDeleteId("");
      if (response?.id) {
        message.success("Faq deleted successfully");
      } else {
        message.error("Failed to delete faq");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  const columns = [
    {
      title: "Question",
      dataIndex: "question",
      render: function (data: string) {
        const first100Chars = data.slice(0, 30);
        return `${first100Chars}...`;
      },
    },
    {
      title: "Answer",
      dataIndex: "answer",
      render: function (data: string) {
        const first100Chars = data.slice(0, 30);
        return `${first100Chars}...`;
      },
    },
    {
      title: "Created at",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY");
      },
      sorter: true,
    },
    {
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <>
            <Link href={`/dashboard/admin/content/faqManagement/view/${data}`}>
              <Button className="bg-blue-300 text-white hover:text-violet-600">
                <EyeOutlined />
              </Button>
            </Link>
            <Link href={`/dashboard/admin/content/faqManagement/edit/${data}`}>
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
              label: "FAQ",
              link: "/dashboard/admin/content/faqManagement",
            },
          ]}
        />
        <ActionBar title="FAQ List">
          <Input
            size="large"
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "20%",
            }}
          />
          <div>
            <Link href="/dashboard/admin/content/faqManagement/create">
              <Button>Create FAQ</Button>
            </Link>
          </div>
        </ActionBar>

        <PPTable
          loading={isLoading}
          columns={columns}
          dataSource={data?.faq}
          pageSize={size}
          totalPages={meta?.total}
          showSizeChanger={true}
          onPaginationChange={onPaginationChange}
          onTableChange={onTableChange}
          showPagination={true}
        />
      </div>
      <PPModal
        title="Delete FAQ"
        isOpen={open}
        closeModal={() => setOpen(false)}
        handleOk={() => {
          deleteHandler(deleteId);
        }}
      >
        <>
          <p className="mt-5">Are you sure you want to delete this FAQ?</p>
        </>
      </PPModal>
    </>
  );
};

export default BlogManagementPage;
