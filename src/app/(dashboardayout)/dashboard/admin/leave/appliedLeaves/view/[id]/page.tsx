"use client";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { useSingleLeaveQuery } from "@/redux/api/leaveApi";
import { useGetSingleUserQuery } from "@/redux/api/userApi";
import dayjs from "dayjs";

type IDProps = {
  params: any;
};
const LeaveDetailsPage = ({ params }: IDProps) => {
  const id = params?.id;
  const { data } = useSingleLeaveQuery(id);
  console.log(data);
  const { data: user } = useGetSingleUserQuery(data?.user_id);
  return (
    <div>
      <BreadCrumb
        items={[
          {
            label: "Admin",
            link: "/dashboard/admin",
          },
          {
            label: "Leave",
            link: "/dashboard/admin/leave/appliedLeaves",
          },
          {
            label: "View",
            link: `/dashboard/admin/leave/appliedLeaves/view/${id}`,
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
                <p className="mt-1 text-xs font-medium text-gray-600">
                  {user?.first_name} {user?.middle_name} {user?.last_name}
                </p>

                <p className="mt-1 text-xs font-medium text-gray-600">
                  {user?.personal_email}
                </p>
                <p className="mt-1 text-xs font-medium text-gray-600">
                  {user?.phone_number}
                </p>
                <h3 className="text-lg font-bold text-gray-900 sm:text-xl mt-5">
                  {data?.reason}
                </h3>
              </div>
            </div>

            <div className="mt-4">
              <p className=" text-sm text-gray-500">{data?.message}</p>
            </div>

            <dl className="mt-6 flex gap-4 sm:gap-6">
              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">Leave At</dt>
                <dd className="text-xs text-gray-500">
                  {dayjs(data?.from_date).format("YYYY-MM-DD")}
                  <span> to </span>
                  {dayjs(data?.to_date).format("YYYY-MM-DD")}
                </dd>
              </div>
              <div>Total {data?.no_of_days} days</div>

              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">Status</dt>
                <dd className="text-xs text-gray-500">{data?.status}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveDetailsPage;
