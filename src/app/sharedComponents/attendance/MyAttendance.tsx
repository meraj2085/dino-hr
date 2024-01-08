"use client";

import BreadCrumb from "@/components/ui/BreadCrumb";
import { Button, Col, Row, message } from "antd";
import { useState } from "react";
import PPTable from "@/components/ui/PPTable";
import PPModal from "@/components/ui/Modal";
import Form from "@/components/Forms/Form";
import FormTextArea from "@/components/Forms/FormTextArea";
import dayjs from "dayjs";
import {
  useAddAttendanceMutation,
  useGetSingleAttendanceQuery,
  useUpdateAttendanceMutation,
} from "@/redux/api/attendanceApi";
import { getUserInfo } from "@/services/auth.service";
import ActionBar from "@/components/ui/ActionBar";
import CustomDatePicker from "@/components/Forms/CustomDatePicker";
import CustomTimePicker from "@/components/Forms/CustomTimePicker";

const MyAttendance = () => {
  const { userId } = getUserInfo() as any;
  const [open, setOpen] = useState<boolean>(false);
  const [check, setCheck] = useState<boolean>(false);
  const [updateAttendance] = useUpdateAttendanceMutation();
  const [addAttendance] = useAddAttendanceMutation();

  const onSubmit = async (data: any) => {
    try {
      data.check_in = dayjs(new Date()).format("HH:mm");
      data.check_out = "";
      data.user_id = userId;
      data.is_checkout = false;
      data.date = dayjs(new Date()).format("YYYY-MM-DD");
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
  const isCurrentDateAttendance =
    data &&
    data.find(
      (attendanceData: any) =>
        attendanceData?.createdAt.split("T")[0] === currentDate
    );

  const handleCheckOut = async (attendanceId: string) => {
    const res = await updateAttendance({
      id: attendanceId,
      data: { check_out: dayjs(new Date()).format("HH:mm"), is_checkout: true },
    });
    if (res) {
      setCheck(false);
      message.success("Attendance Updated Successfully");
    }
  };

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
              <Button disabled={data} onClick={() => setCheck(!check)}>Check out</Button>
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

      <ActionBar title="My Attendance">
        <span></span>
        <div className="flex gap-5">
            <Button
              disabled={isCurrentDateAttendance?.date}
              className="flex gap-5"
              onClick={() => setOpen(!open)}
            >
              Check in{" "}
            </Button>
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
                <CustomDatePicker
                  name="date"
                  label="Check in Date"
                  size="large"
                />
              </div>
            </Col>

            <Col xs={24} md={24} lg={24} className="mt-3">
              <div>
                <CustomTimePicker name="check_in" label="Time" />
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
        title="Are you sure you want to check out?"
        isOpen={check}
        closeModal={handleCheckClose}
        handleOk={() => handleCheckOut(isCurrentDateAttendance?._id)}
      >
        <div className="mb-10">
          <Form submitHandler={onSubmit}>
            <Row gutter={{ xs: 4, md: 20 }}>
              <Col xs={24} md={24} lg={24} className="my-3">
                <div>
                  <CustomDatePicker
                    name="date"
                    label="Check Out Date"
                    size="large"
                  />
                </div>
              </Col>
              <Col xs={24} md={24} lg={24} className="mt-3">
                <div>
                  <CustomTimePicker name="check_out" label="Check Out Time" />
                </div>
              </Col>
            </Row>
          </Form>
        </div>
      </PPModal>
    </div>
  );
};

export default MyAttendance;
