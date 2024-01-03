"use client";

import BreadCrumb from "@/components/ui/BreadCrumb";
import Loading from "@/app/loading";
import dayjs from "dayjs";
import { useSingleAppointmentQuery } from "@/redux/api/appointmentApi";

type IDProps = {
  params: any;
};

const ViewBlogPage = ({ params }: IDProps) => {
  const { id } = params;
  const { data, isLoading } = useSingleAppointmentQuery(id);

  if (isLoading) return <Loading />;

  return (
    <div>
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

      <div className="mt-10">
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <div className="relative block overflow-hidden rounded-lg border bg-white border-gray-100 p-4 sm:p-6 lg:p-8">
            <div className="sm:flex sm:justify-between sm:gap-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                  {data?.subject}
                </h3>

                <p className="mt-1 text-xs font-medium text-gray-600">
                  {data?.fullName}
                </p>
                <p className="mt-1 text-xs font-medium text-gray-600">
                  {data?.email}
                </p>
                <p className="mt-1 text-xs font-medium text-gray-600">
                  {data?.mobileNumber}
                </p>
                {data?.company_name && (
                  <p className="mt-5 text-xs font-medium text-gray-600">
                    {data?.company_name}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-4">
              <p className=" text-sm text-gray-500">{data?.message}</p>
            </div>

            <dl className="mt-6 flex gap-4 sm:gap-6">
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
                <dd className="text-xs text-gray-500">
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
