"use client";

import BreadCrumb from "@/components/ui/BreadCrumb";
import Loading from "@/app/loading";
import dayjs from "dayjs";
import { useSingleAppointmentQuery } from "@/redux/api/appointmentApi";
import ActionBar from "@/components/ui/ActionBar";

type IDProps = {
  params: any;
};

const ViewBlogPage = ({ params }: IDProps) => {
  const { id } = params;
  const { data, isLoading } = useSingleAppointmentQuery(id);

  if (isLoading) return <Loading />;

  return (
    <div style={{ overflowX: "auto" }} className="min-w-[250px] background">
      <BreadCrumb
        items={[
          {
            label: "Admin",
            link: "/dashboard/super_admin",
          },
          {
            label: "Bookings",
            link: "/dashboard/super_admin/bookings",
          },
          {
            label: "View",
            link: `/dashboard/super_admin/bookings/view/${id}`,
          },
        ]}
      />
      <ActionBar title="View Booking" />

      <div>
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
          }}
        >
          <div className="relative block overflow-hidden rounded-lg  bg-white p-4 sm:p-6 lg:p-6">
            <div className="flow-root">
              <dl className="-my-3 divide-y divide-gray-100 text-sm">
                <div className="grid grid-cols-1 gap-1 py-3 px-2 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Name</dt>
                  <dd className="text-gray-700 sm:col-span-2">
                    {data?.fullName}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 px-2 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Email</dt>
                  <dd className="text-gray-700 sm:col-span-2">{data?.email}</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 px-2 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Mobile</dt>
                  <dd className="text-gray-700 sm:col-span-2">
                    {data?.mobileNumber}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 px-2 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Subject</dt>
                  <dd className="text-gray-700 sm:col-span-2">
                    {data?.subject}
                  </dd>
                </div>

                {data?.company_name && (
                  <div className="grid grid-cols-1 gap-1 py-3 px-2 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Organization</dt>
                    <dd className="text-gray-700 sm:col-span-2">
                      {data?.company_name}
                    </dd>
                  </div>
                )}

                <div className="grid grid-cols-1 gap-1 py-3 px-2 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Bio</dt>
                  <dd className="text-gray-700 sm:col-span-2">
                    {data?.message}
                  </dd>
                </div>
              </dl>
            </div>

            <dl className="mt-10 px-2 flex gap-[50px]">
              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">
                  Appointment At
                </dt>
                <dd className="text-xs text-gray-500">
                  {dayjs(data?.appointment_date).format("YYYY-MM-DD")}|
                  {data?.appointment_time}
                </dd>
              </div>

              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">Status</dt>
                <dd className="text-xs text-gray-500 capitalize">
                  {data?.appointment_status}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBlogPage;
