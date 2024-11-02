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
import { ProgressCard } from "./ProgressCard";

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
      // console.error(err.message);
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
      sorter: true,
    },

    {
      title: "Punch In",
      dataIndex: "check_in",
    },
    {
      title: "Punch Out",
      dataIndex: "check_out",
    },
    {
      title: "Production",
      dataIndex: "production",
    },
    {
      title: "Break",
      dataIndex: "break",
    },
    {
      title: "Overtime",
      dataIndex: "overtime",
    },
    {
      title: "Action",
      dataIndex: "is_checkout",
      render: function (data: any) {
        return (
          <>
            <Button disabled={data} onClick={() => setCheck(!check)}>
              Check out
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <div style={{ overflowX: "auto" }} className="background">
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
      <div className="mb-5 flex justify-between">
        <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100 border w-[300px] h-[300px]">
          <div className="block rounded-lg px-4 py-2 shadow-sm border bg-[#F9F9F9]">
            <p className="text-[#1F1F1F]">Punch In at</p>
            <p className="text-[#727272]">Wed, 11th Mar 2019 10.00 AM</p>
          </div>
          <div className="flex justify-center my-5 relative">
            <svg width="120" height="120" className="absolute">
              <circle
                cx="60"
                cy="60"
                r="54"
                stroke="#E3E3E3"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="60"
                cy="60"
                r="54"
                stroke="#00674A"
                strokeWidth="8"
                fill="none"
                strokeDasharray="339.292"
                strokeDashoffset={(1 - 3.45 / 8) * 339.292}
                strokeLinecap="round"
                transform="rotate(-90 60 60)"
              />
            </svg>
            <div className="w-[120px] h-[120px] bg-[#F9F9F9] flex items-center justify-center rounded-full font-semibold text-lg">
              3.45 hrs
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="px-7 py-[10px] font-semibold rounded-full bg-[#00674A] text-gray-100"
            >
              Punch Out
            </button>
          </div>
        </div>

        {/* 2 */}
        <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100 border w-[400px] h-[300px]">
          <ProgressCard
            title="Today"
            progress={3.45}
            total={8}
            color="#FF9B43"
          />
          <ProgressCard
            title="This Week"
            progress={28}
            total={40}
            color="#64279A"
          />
          <ProgressCard
            title="This Month"
            progress={90}
            total={160}
            color="#00674A"
          />
          <ProgressCard
            title="Remaining"
            progress={70}
            total={160}
            color="#F52D51"
          />
          <ProgressCard
            title="Overtime"
            progress={9}
            total={100}
            color="#009EFB"
          />
        </div>
        {/* 3 */}
        <div className="block rounded-lg py-4 px-5 shadow-sm shadow-indigo-100 border w-[330px] h-[300px]">
          <div className="max-w-5xl max-h-[250px] overflow-y-auto">
            <div className="grid gap-4 sm:grid-cols-12">
              <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-3 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-2 sm:before:h-2 sm:before:rounded-full sm:before:left-[-31px] sm:before:z-[1] before:bg-emerald-600"
                    >
                      <time className="text-[12px] tracki font-semibold text-gray-600">
                        Punch In at
                      </time>
                      <p className="text-[12px]">10.00 AM.</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
