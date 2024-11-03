"use client";

import BreadCrumb from "@/components/ui/BreadCrumb";
import { Button, Col, Row, message } from "antd";
import { useEffect, useState } from "react";
import PPTable from "@/components/ui/PPTable";
import PPModal from "@/components/ui/Modal";
import Form from "@/components/Forms/Form";
import FormTextArea from "@/components/Forms/FormTextArea";
import SmallLoader from "@/components/shared/SmallLoader";
import dayjs from "dayjs";
import {
  useAddAttendanceMutation,
  useGetSingleAttendanceQuery,
  useGetTodaysAttendanceQuery,
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
  const [action, setAction] = useState<string>("check_in");
  const { data: todaysAttendanceData, isLoading: todaysAttendanceDataLoading } =
    useGetTodaysAttendanceQuery({});
  const [addAttendance, { isLoading: addAttendanceLoading }] =
    useAddAttendanceMutation();
  const [todaysTotalWorkingTime, setTodaysTotalWorkingTime] =
    useState<string>("00:00");

  console.log(todaysTotalWorkingTime, "todaysTotalWorkingTime");

  useEffect(() => {
    if (!todaysAttendanceDataLoading && todaysAttendanceData) {
      const lastActivity =
        todaysAttendanceData.activity_logs[
          todaysAttendanceData.activity_logs.length - 1
        ];

      if (lastActivity) {
        if (lastActivity.activity === "check_in") {
          setAction("check_out");
        } else {
          setAction("check_in");
        }
      } else {
        setAction("check_in");
      }
    }

    if (todaysAttendanceData) {
      let totalSeconds = 0;
      let lastCheckIn: Date | null = null;

      // Loop through the activity logs
      todaysAttendanceData.activity_logs.forEach((activity: any) => {
        const activityTime = new Date(activity.timestamp);

        if (activity.activity === "check_in") {
          lastCheckIn = activityTime; // Store the time of the last check-in
        } else if (activity.activity === "check_out" && lastCheckIn) {
          // Calculate the time difference in milliseconds
          const diffMs = activityTime.getTime() - lastCheckIn.getTime();
          const diffSeconds = Math.floor(diffMs / 1000); // Convert milliseconds to seconds

          // Accumulate total seconds
          totalSeconds += diffSeconds;

          // Reset lastCheckIn after pairing
          lastCheckIn = null;
        }
      });

      // Convert total seconds to minutes and remaining seconds
      const totalMinutes = Math.floor(totalSeconds / 60);
      const remainingSeconds = totalSeconds % 60;

      // Convert total minutes to hours and minutes
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;

      // Set total working time in HH:MM format
      setTodaysTotalWorkingTime(
        `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`
      );

      // Optionally log total time for verification
      console.log(
        `Total Working Time: ${hours} hours, ${minutes} minutes, ${remainingSeconds} seconds`
      );
    }
  }, [todaysAttendanceData, todaysAttendanceDataLoading]);

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

  function convertTimeToDecimal(time: string): number {
    const [hours, minutes] = time.split(":").map(Number);
    return hours + minutes / 60;
  }

  const handlePunchIn = async () => {
    try {
      const attendanceData = {
        user_id: userId,
        date: new Date().toISOString().split("T")[0],
        action: action,
        activity_logs: [],
      };

      const response = await addAttendance(attendanceData).unwrap();
      if (response._id) {
        message.success(
          `Punch ${action === "check_in" ? "In" : "Out"} Successfully`
        );
      }
    } catch (error) {
      console.error("Failed to record attendance:", error);
    }
  };

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      sorter: true,
      render: (date: string) => dayjs(date).format("DD MMM YYYY"),
    },

    {
      title: "Punch In",
      dataIndex: "check_in",
      render: (check_in: string) => dayjs(check_in).format("hh:mm A"),
    },
    {
      title: "Punch Out",
      dataIndex: "check_out",
      render: (check_out: string) => dayjs(check_out).format("hh:mm A"),
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
                strokeDashoffset={
                  (1 - convertTimeToDecimal(todaysTotalWorkingTime) / 8) *
                  339.292
                }
                strokeLinecap="round"
                transform="rotate(-90 60 60)"
              />
            </svg>
            <div className="w-[120px] h-[120px] bg-[#F9F9F9] flex items-center justify-center rounded-full font-semibold text-lg">
              {todaysTotalWorkingTime} hrs
            </div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => handlePunchIn()}
              disabled={todaysAttendanceDataLoading}
              className={`${
                todaysAttendanceDataLoading
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              } rounded-full px-5 py-2.5 overflow-hidden group bg-[#00674A] relative hover:bg-gradient-to-r hover:from-[#00674A] hover:to-[#00674A] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#00674A] transition-all ease-out duration-300`}
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">
                {todaysAttendanceDataLoading
                  ? "Loading..."
                  : action === "check_out"
                  ? "Punch Out"
                  : "Punch In"}
              </span>
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
        <div className="rounded-lg py-4 px-5 shadow-sm shadow-indigo-100 border w-[330px] h-[300px] flex flex-col justify-between">
          {todaysAttendanceData ? (
            <>
              {!todaysAttendanceDataLoading ? (
                <div className="max-w-5xl max-h-[250px] overflow-y-auto">
                  <div className="grid gap-4 sm:grid-cols-12">
                    <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                      <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-3 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
                        {todaysAttendanceData?.activity_logs
                          ?.slice()
                          .sort(
                            (a: any, b: any) =>
                              new Date(b.timestamp).getTime() -
                              new Date(a.timestamp).getTime()
                          )
                          .map((activity: any, index: any) => (
                            <div
                              key={index}
                              className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-2 sm:before:h-2 sm:before:rounded-full sm:before:left-[-31px] sm:before:z-[1] before:bg-emerald-600"
                            >
                              <time className="text-[12px] tracking font-semibold text-gray-600">
                                {activity.activity === "check_in"
                                  ? "Punch In at"
                                  : "Punch Out at"}
                              </time>
                              <p className="text-[12px]">
                                {new Date(
                                  activity.timestamp
                                ).toLocaleTimeString([], {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  hour12: true,
                                })}
                              </p>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex justify-center items-center h-full">
                  <SmallLoader />
                </div>
              )}
            </>
          ) : (
            <div className="flex justify-center items-center h-full">
              <p className="text-md font-semibold leadi">No Data...</p>
            </div>
          )}
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
