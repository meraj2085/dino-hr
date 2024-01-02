/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Loading from "@/app/loading";
import BreadCrumb from "@/components/ui/BreadCrumb";
import {
  useDeleteNotificationMutation,
  useGetNotificationsQuery,
} from "@/redux/api/notificationApi";
import { message } from "antd";
import dayjs from "dayjs";

const notification = () => {
  const { data, isLoading } = useGetNotificationsQuery({
    limit: 100,
    page: 1,
  });

  const [deleteNotification] = useDeleteNotificationMutation();

  const deleteHandler = async () => {
    try {
      const res = await deleteNotification(null);
      console.log(res);
      if (res) {
        message.success("Notification cleared");
      }
    } catch (error: any) {
      message.error(error.message);
    }
  };

  if (isLoading) return <Loading />;

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
      <div className="flex justify-end py-3 px-3 ">
        {data && data?.notifications?.length > 0 && (
          <p
            onClick={() => deleteHandler()}
            className="text-red-600 hover:text-[#00674A] cursor-pointer"
          >
            Clear All
          </p>
        )}
      </div>
      <div className="space-y-4 mt-3">
        {data && data?.notifications?.length > 0 ? (
          data?.notifications?.map((notificationData, index) => (
            <details
              key={index}
              className="group bg-white p-4 [&_summary::-webkit-details-marker]:hidden rounded-lg shadow-md border-b-2 border-[#00674A]"
              open={index === -1}
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-white p-1 text-gray-900">
                <div>
                  <h2 className="text-[17px]">{notificationData?.title}</h2>
                  <p className="mt-1">
                    {dayjs(notificationData?.createdAt).format(
                      "MMM D, YYYY hh:mm A"
                    )}
                  </p>
                </div>

                <svg
                  onClick={() => {
                    console.log("clicked", notificationData?.id);
                  }}
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
            </details>
          ))
        ) : (
          <div className="grid h-[500px] px-4 bg-white place-content-center">
            <h1 className="tracking-widest text-gray-500 uppercase">
              No Notification Yet!
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default notification;
