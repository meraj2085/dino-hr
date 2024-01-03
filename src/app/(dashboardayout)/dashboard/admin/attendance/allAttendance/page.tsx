"use client";
import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { Button, Col, Input, Row, message } from "antd";
import { useState } from "react";
import { useDebounced } from "@/redux/hooks";
import PPTable from "@/components/ui/PPTable";
import PPModal from "@/components/ui/Modal";
import Form from "@/components/Forms/Form";
import CustomDatePicker from "@/components/Forms/CustomDatePicker";
import CustomTimePicker from "@/components/Forms/CustomTimePicker";
import FormTextArea from "@/components/Forms/FormTextArea";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import { useAddAttendanceMutation, useGetAllAttendanceQuery, useGetSingleAttendanceQuery, useUpdateAttendanceMutation } from "@/redux/api/attendanceApi";
import { getUserInfo } from "@/services/auth.service";
import FormTimePicker from "@/components/Forms/FormTimePicker";
import { useRouter } from "next/navigation";

const AllAttendance = () => {
  const  {userId}  = getUserInfo() as any;
  const query: Record<string, any> = {};
  const router = useRouter();

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");


  const [open, setOpen] = useState<boolean>(false);
  const [check, setCheck] = useState<boolean>(false);

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  const [updateAttendance] = useUpdateAttendanceMutation();

  const [addAttendance] = useAddAttendanceMutation();

  const onSubmit = async (data: any) => {
    
    try {
      data.is_checkout=true;
      data.check_out="00:00"
      data.user_id= userId
      console.log(data);
      const res = await addAttendance(data).unwrap();
      if (res._id) {
        setOpen(false);
        message.success("Attendance Added Successfully");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
    setOpen(false);
  };

  if (!!debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm;
  }

  const { data, isLoading } = useGetAllAttendanceQuery({ ...query });
  const { data:myAttendanceData } = useGetSingleAttendanceQuery(userId);
  
 
  // console.log(myAttendanceData);
  const meta = data?.meta;

  const handleClose = () => {
    setOpen(false);
  };
  const handleCheckClose = () => {
    setCheck(false);
  };

  // console.log(data);

  const columns = [

    {
      title: "Date",
      dataIndex: "date",
    },

    {
      title: "Check in time",
      dataIndex: "check_in",
      // render: function (data: any) {
      //   return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      // },
      sorter: true,
    },
    {
      title: "Check out time",
      dataIndex: "check_out",
      // render: function (data: any) {
      //   return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      // },
      sorter: true,
    },
    // {
    //   title: "Status",
    //   dataIndex: "",
    // },
    {
      title: "Action",
      dataIndex: "is_checkout",
      render: function (data: any) {
        return (
          <>
          {
            data?
            <Button onClick={() => setCheck(!check)} >Check out</Button>:
            <Button onClick={() => setOpen(!open)}>Check in</Button>
          }
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
        dataSource={data?.attendances}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
        scroll={{ x: true }}
      />
      <PPModal
        title="Check In"
        isOpen={open}
        closeModal={handleClose}
        handleOk={() => setOpen(false)}
        showOkButton = {false}
        showCancelButton = {false}
      >
        <Form submitHandler={onSubmit}>
          <Row gutter={{ xs: 4, md: 20 }}>
            <Col xs={24} md={24} lg={24} className="mt-3">
              <div>
                <FormDatePicker
                // onChange={(value: any) => handlePreferenceChange(value)}
                  name="date"
                  label="Check in Date"
                  size="large"
                />
              </div>
            </Col>

            <Col xs={24} md={24} lg={24} className="mt-3">
              <div>
                <FormTimePicker  name="check_in" label="Time" />
              </div>
            </Col>

            <Col xs={24} md={24} lg={24} className="mt-3">
              <div>
                <FormTextArea
                  name="description"
                  placeholder="Description"
                  label="Description"
                />
              </div>
            </Col>
            <div className="flex justify-end item-end">
            <Button
              htmlType="submit"
              className="bg-[#00674A] text-white hover:text-white "
              style={{ margin: "10px 0px" }}
            >
              Check In
            </Button>
            </div>
          </Row>
        </Form>
      </PPModal>

      <PPModal
        title="Check Out"
        isOpen={check}
        closeModal={handleCheckClose}
        handleOk={() => setCheck(false)}
        showOkButton = {false}
        showCancelButton = {false}
      >
        <Form submitHandler={onSubmit}>
          <Row gutter={{ xs: 4, md: 20 }}>

            <Col xs={24} md={24} lg={24} className="mt-3">
              <div>
                <FormTimePicker  name="check_in" label="Check_in_Time" />
              </div>
            </Col>
            <Col xs={24} md={24} lg={24} className="mt-3">
              <div>
                <FormTimePicker  name="check_out" label="Check_Out" />
              </div>
            </Col>
            <div className="flex justify-end item-end">
            <Button
              htmlType="submit"
              className="bg-[#00674A] text-white hover:text-white "
              style={{ margin: "10px 0px" }}
            >
              Check Out Done
            </Button>
            </div>
          </Row>
        </Form>
      </PPModal>
    </div>
  );
};

export default AllAttendance;
