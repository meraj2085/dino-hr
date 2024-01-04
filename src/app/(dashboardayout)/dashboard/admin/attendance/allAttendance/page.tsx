"use client";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { Button, Col, Input, Row, message } from "antd";
import { useState, useEffect } from "react";
import PPTable from "@/components/ui/PPTable";
import PPModal from "@/components/ui/Modal";
import Form from "@/components/Forms/Form";
import FormTextArea from "@/components/Forms/FormTextArea";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import dayjs from "dayjs";
import {
  useAddAttendanceMutation,
  useGetSingleAttendanceQuery,
  useUpdateAttendanceMutation,
} from "@/redux/api/attendanceApi";
import { getUserInfo } from "@/services/auth.service";
import FormTimePicker from "@/components/Forms/FormTimePicker";
import ActionBar from "@/components/ui/ActionBar";
import Link from "next/link";
import CustomDatePicker from "@/components/Forms/CustomDatePicker";

const AllAttendance = () => {
  const { userId } = getUserInfo() as any;

  const [open, setOpen] = useState<boolean>(false);
  const [check, setCheck] = useState<boolean>(false);

  const [updateAttendance] = useUpdateAttendanceMutation();

  const [addAttendance] = useAddAttendanceMutation();

  const onSubmit = async (data: any) => {
    try {
      data.check_out = "";
      data.user_id = userId;
      data.is_checkout = false;
      data.date = dayjs(data?.date).format("YYYY-MM-DD");
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

  const { data, isLoading } = useGetSingleAttendanceQuery(userId);
  const handleClose = () => {
    setOpen(false);
  };
  const handleCheckClose = () => {
    setCheck(false);
  };

  const currentDate = new Date().toISOString().split("T")[0];
  const isCurrentDateAttendance = data && data.find((attendanceData: any) => attendanceData?.createdAt.split("T")[0] === currentDate);

  const handleCheckOut = async () => {
    const res = await updateAttendance({id: userId, data : {check_out: dayjs(new Date()).format("HH:mm"),
    is_checkout: true}});
    if (res) {
      setCheck(false);
      message.success("Attendance Updated Successfully");
    }
  }

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
    },

    {
      title: "Check in time",
      dataIndex: "check_in",
      sorter: true,
    },
    {
      title: "Check out time",
      dataIndex: "check_out",
      sorter: true,
    },

    {
      title: "Action",
      dataIndex: "is_checkout",
      render: function (data: any) {
        return (
          <>
            {
               isCurrentDateAttendance && !data ? (
                <Button onClick={() => setCheck(!check)}>Check out</Button>
              ) : null
              // <Button onClick={() => setOpen(!open)}>Check in </Button>
            }
          </>
        );
      },
    },
  ];



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

<ActionBar title="Organization Detail">
        <span></span>
        <div className="flex gap-5">
          {
            !isCurrentDateAttendance?.date && <Button className="flex gap-5" onClick={() => setOpen(!open)}>Check in </Button>
          }
        </div>
      </ActionBar>

      <PPTable
        loading={isLoading}
        columns={columns}
        dataSource={data}
        showSizeChanger={true}
        scroll={{ x: true }}
      />
      <PPModal
        title="Check In"
        isOpen={open}
        closeModal={handleClose}
        handleOk={() => setOpen(false)}
        showOkButton={false}
        showCancelButton={false}
      >
        <Form submitHandler={onSubmit}>
          <Row gutter={{ xs: 4, md: 20 }}>
            <Col xs={24} md={24} lg={24} className="mt-3">
              <div>
                <FormDatePicker
                  name="date"
                  label="Check in Date"
                  size="large"
                />
              </div>
            </Col>

            <Col xs={24} md={24} lg={24} className="mt-3">
              <div>
                <FormTimePicker name="check_in" label="Time" />
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
        showOkButton={false}
        showCancelButton={true}
      >
     
    

<div>
<div className="flex gap-3">
<h1>Check In Time : </h1>
<h2>{isCurrentDateAttendance?.check_in}</h2>
</div>

<div className="flex gap-3">
<h1>Check Out Time : </h1>
<h2>{dayjs(new Date()).format("HH:mm")}</h2>
</div>
<button className="bg-[blue] p-3 rounded-lg" onClick={() =>handleCheckOut()}>Submit</button>
{/* <Button  onClick={() =>handleCheckOut()}>Check out</Button> */}
</div>
      </PPModal>
    </div>
  );
};

export default AllAttendance;
