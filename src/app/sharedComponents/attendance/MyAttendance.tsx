"use client";

import BreadCrumb from "@/components/ui/BreadCrumb";
import { message } from "antd";
import { useEffect, useState } from "react";
import PPTable from "@/components/ui/PPTable";
import SmallLoader from "@/components/shared/SmallLoader";
import dayjs from "dayjs";
import {
  useAddAttendanceMutation,
  useGetSingleAttendanceQuery,
  useGetTodaysAttendanceQuery,
} from "@/redux/api/attendanceApi";
import { getUserInfo } from "@/services/auth.service";
import ActionBar from "@/components/ui/ActionBar";
import { ProgressCard } from "./ProgressCard";

const MyAttendance = () => {
  const { userId } = getUserInfo() as any;
  const [action, setAction] = useState<string>("check_in");
  const { data: todaysAttendanceData, isLoading: todaysAttendanceDataLoading } =
    useGetTodaysAttendanceQuery({});
  const [addAttendance, { isLoading: addAttendanceLoading }] =
    useAddAttendanceMutation();
  const [todaysTotalWorkingTime, setTodaysTotalWorkingTime] =
    useState<string>("00:00");
  const { data, isLoading } = useGetSingleAttendanceQuery(userId);

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
      todaysAttendanceData.activity_logs.forEach((activity: any) => {
        const activityTime = new Date(activity.timestamp);
        if (activity.activity === "check_in") {
          lastCheckIn = activityTime;
        } else if (activity.activity === "check_out" && lastCheckIn) {
          const diffMs = activityTime.getTime() - lastCheckIn.getTime();
          const diffSeconds = Math.floor(diffMs / 1000);
          totalSeconds += diffSeconds;
          lastCheckIn = null;
        }
      });

      const totalMinutes = Math.floor(totalSeconds / 60);
      const remainingSeconds = totalSeconds % 60;

      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;

      setTodaysTotalWorkingTime(
        `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`
      );
    }
  }, [todaysAttendanceData, todaysAttendanceDataLoading]);

  function convertTimeToDecimal(time: string): number {
    const [hours, minutes] = time.split(":").map(Number);
    const decimalTime = hours + minutes / 100;
    return Number(decimalTime.toFixed(2));
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
  ];

  return (
    <div style={{ overflowX: "auto" }} className="background">
      <BreadCrumb
        items={[
          {
            label: "All Attendance",
            link: "/dashboard/admin/attendance/allAttendance",
          },
        ]}
      />
      <ActionBar title="My Attendance" />
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
              {todaysTotalWorkingTime}
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
            progress={convertTimeToDecimal(todaysTotalWorkingTime)}
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
    </div>
  );
};

export default MyAttendance;
