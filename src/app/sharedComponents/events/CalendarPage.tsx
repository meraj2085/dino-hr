"use client";

import type { Dayjs } from "dayjs";
import React from "react";
import { Calendar, theme } from "antd";
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
    <div style={{ overflowX: "auto" }} className="px-10">
      <ActionBar title="Calendar" />
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
      <div className="flex justify-between gap-5">
        <div style={wrapperStyle} className="mt-3">
          <Calendar fullscreen={false} onPanelChange={onPanelChange} />
        </div>
        <div className="flex flex-col gap-2 pt-3">
          {data?.events?.map((event) => (
            <div
              key={event.id}
              className="block min-w-[450px] rounded-lg border border-gray-100 bg-white p-4 sm:p-6 lg:py-4"
            >
              <div className="sm:flex sm:justify-between sm:gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">
                    {event.title}
                  </h3>

                  <p className="mt-1 text-xs font-medium text-gray-600">
                    {dayjs(event?.from_date).format("MMM D")} -{" "}
                    {dayjs(event?.to_date).format("MMM D, YYYY")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
