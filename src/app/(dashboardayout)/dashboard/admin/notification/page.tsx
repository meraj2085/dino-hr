"use client";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { useGetNotificationsQuery } from "@/redux/api/notificationApi";
import dayjs from "dayjs";

const notification = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, isLoading } = useGetNotificationsQuery({
    limit: 100,
    page: 1,
  });

  return (
    <div
      className="min-w-[250px]"
      style={{
        backgroundColor: "#FFFFFF",
        margin: "20px",
        borderRadius: "20px",
        padding: "24px 24px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        overflowX: "auto",
      }}
    >
      <BreadCrumb
        items={[
          {
            label: "Admin",
            link: "/dashboard/admin",
          },
          {
            label: "Send Notification",
            link: "/dashboard/admin/sendNotification",
          },
        ]}
      />
      <div className="space-y-4 mt-3">
        {data?.notifications ? (
          data?.notifications?.map((notificationData, index) => (
            <details
              key={index}
              className="group bg-gray-200 p-4 [&_summary::-webkit-details-marker]:hidden rounded-lg shadow-md"
              open={index === 0 ? true : false}
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-200 p-4 text-gray-900">
                <h2 className="font-bold text-[17px]">
                  {notificationData?.title}
                </h2>

                <svg
                  className="h-7 w-7 font-bold shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <p className="mt-4 px-4 leading-relaxed text-gray-700">
                {notificationData?.description}
              </p>
              <span className="mt-4 px-4 text-[15px] leading-relaxed text-gray-700 flex justify-end items-end">
                {dayjs(notificationData?.createdAt).format(
                  "MMM D, YYYY hh:mm A"
                )}
              </span>
            </details>
          ))
        ) : (
          <div className="grid h-screen px-4 bg-white place-content-center">
            <h1 className="tracking-widest text-gray-500 uppercase">
              Yeh! Notification is coming soon!!!
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default notification;
