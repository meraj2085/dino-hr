"use client";

import type { Dayjs } from "dayjs";
import React from "react";
import { Calendar, ConfigProvider, theme } from "antd";
import type { CalendarProps } from "antd";
import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { useGetAllEventQuery } from "@/redux/api/eventApi";
import Loading from "@/app/loading";
import dayjs from "dayjs";
import { getUserInfo } from "@/services/auth.service";

const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>["mode"]) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};

const CalendarPage = () => {
  const { user_type } = getUserInfo() as any;
  const { data, isLoading } = useGetAllEventQuery({
    page: 1,
    limit: 10,
  });
  const { token } = theme.useToken();

  const wrapperStyle: React.CSSProperties = {
    width: 600,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  if (isLoading) return <Loading />;

  return (
    <div
      className="min-h-[680px]"
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: "20px",
        padding: "24px 24px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        overflowX: "auto",
      }}
    >
      <ActionBar title="Calendar" />

      <div className="flex justify-center gap-5">
        <div>
          <BreadCrumb
            items={[
              {
                label: "Dashboard",
                link: `/dashboard/${user_type}`,
              },
              {
                label: "Calendar",
                link: `/dashboard/${user_type}/events/calendar`,
              },
            ]}
          />
          <div style={wrapperStyle} className="mt-3 card-box-border">
            <ConfigProvider
              theme={{
                components: {
                  Calendar: {
                    colorPrimary: "#00674A",
                  },
                },
              }}
            >
              <Calendar fullscreen={false} onPanelChange={onPanelChange} />
            </ConfigProvider>
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-8">
          {data?.events?.map((event) => (
            <article
              key={event?.id}
              className="rounded-lg min-w-[450px] border border-gray-300 bg-white shadow-sm hover:shadow-md transition duration-300 ease-in-out"
            >
              <div className="flex items-start gap-4 px-4 pt-4">
                <div>
                  <h3 className="font-medium sm:text-lg">{event?.title}</h3>
                  <p className="mt-1 text-xs font-medium text-gray-600">
                    {dayjs(event?.from_date).format("MMM D")} -{" "}
                    {dayjs(event?.to_date).format("MMM D, YYYY")}
                  </p>
                </div>
              </div>

              <div className="flex justify-end">
                <strong className="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>

                  <span className="text-[10px] min-w-[40px] font-medium sm:text-xs">
                    {event?.type}
                  </span>
                </strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
