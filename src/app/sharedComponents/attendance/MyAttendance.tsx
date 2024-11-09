"use client";

import moment from "moment";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { DatePicker, message } from "antd";
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
import no_data from "../../../../public/assets/no_data.png";
import Image from "next/image";
import { useDebounced } from "@/redux/hooks";
import { formatSecondToTime } from "@/utils/common";

const MyAttendance = () => {
  const { userId } = getUserInfo() as any;
  const query: Record<string, any> = {};
  const [action, setAction] = useState<string>("check_in");
  const currentDate = moment(new Date()).format("YYYY-MM");
  const { data: todaysAttendanceData, isLoading: todaysAttendanceDataLoading } =
    useGetTodaysAttendanceQuery({});
  const [addAttendance, { isLoading: addAttendanceLoading }] =
    useAddAttendanceMutation();
  const [todaysTotalWorkingTime, setTodaysTotalWorkingTime] =
    useState<string>("00:00:00");
  const [isCountdownLoading, setIsCountdownLoading] = useState<boolean>(false);
  const [selectedMonthYear, setSelectedMonthYear] = useState(currentDate);
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["monthYear"] = selectedMonthYear;

  const handleDateChange = (date: any) => {
    setSelectedMonthYear(dayjs(date).format("YYYY-MM"));
  };

  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm;
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

  const { data, isLoading } = useGetSingleAttendanceQuery({ ...query });
  const meta = data?.meta;

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
        `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
          2,
          "0"
        )}:${remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds}`
      );
    }
  }, [todaysAttendanceData, todaysAttendanceDataLoading]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (action === "check_out" && todaysAttendanceData) {
      interval = setInterval(() => {
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

        if (lastCheckIn) {
          const diffMs = new Date().getTime() - (lastCheckIn as Date).getTime();
          const diffSeconds = Math.floor(diffMs / 1000);
          totalSeconds += diffSeconds;
        }

        const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
        const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
          2,
          "0"
        );
        const seconds = String(totalSeconds % 60).padStart(2, "0");

        setTodaysTotalWorkingTime(`${hours}:${minutes}:${seconds}`);
        // setIsCountdownLoading(false);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [todaysAttendanceData, action]);

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
      render: (production: string) => formatSecondToTime(production),
    },
    {
      title: "Break",
      dataIndex: "break",
      render: (breakTime: string) => formatSecondToTime(breakTime),
    },
    {
      title: "Overtime",
      dataIndex: "overtime",
      render: (overtime: string) => formatSecondToTime(overtime),
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
                  (1 -
                    (isCountdownLoading
                      ? 0
                      : convertTimeToDecimal(todaysTotalWorkingTime) / 8)) *
                  339.292
                }
                strokeLinecap="round"
                transform="rotate(-90 60 60)"
              />
            </svg>
            <div className="w-[120px] h-[120px] bg-[#F9F9F9] flex items-center justify-center rounded-full font-semibold text-lg">
              {isCountdownLoading ? <SmallLoader /> : todaysTotalWorkingTime}
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
              <Image
                width={100}
                height={100}
                src={no_data}
                alt="Profile image"
                draggable={false}
              />
            </div>
          )}
        </div>
      </div>

      <div className="mb-2 flex justify-end">
        <DatePicker
          style={{ width: "20%", height: "35px" }}
          className="py-2"
          onChange={handleDateChange}
          picker="month"
          defaultValue={dayjs(selectedMonthYear, "YYYY/MM")}
          format="YYYY-MM"
          disabledDate={(current) => {
            return current && current > dayjs().endOf("month");
          }}
        />
      </div>
      <PPTable
        loading={isLoading}
        columns={columns}
        dataSource={data?.attendances || []}
        showSizeChanger={true}
        pageSize={size}
        totalPages={meta?.total}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
        scroll={{ x: true }}
      />
    </div>
  );
};

export default MyAttendance;
