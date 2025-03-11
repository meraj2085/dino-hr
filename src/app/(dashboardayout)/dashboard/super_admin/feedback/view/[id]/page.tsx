"use client";

import BreadCrumb from "@/components/ui/BreadCrumb";
import Loading from "@/app/loading";
import dayjs from "dayjs";
import { useGetSingleFeedbackQuery } from "@/redux/api/feedbackApi";
import ActionBar from "@/components/ui/ActionBar";

type IDProps = {
  params: any;
};

const ViewBlogPage = ({ params }: IDProps) => {
  const { id } = params;
  const { data, isLoading } = useGetSingleFeedbackQuery(id);

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
            label: "Feedback",
            link: "/dashboard/super_admin/feedback",
          },
          {
            label: "View",
            link: `/dashboard/super_admin/feedback/view/${id}`,
          },
        ]}
      />
      <ActionBar title="View Feedback" />

      <div>
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <div className="relative block overflow-hidden rounded-lg  bg-white p-4 sm:p-6 lg:p-6">
            <div className="flow-root">
              <dl className="-my-3 divide-y divide-gray-100 text-sm">
                <div className="grid grid-cols-1 gap-1 py-3 px-2 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Name</dt>
                  <dd className="text-gray-700 sm:col-span-2">{data?.name}</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 px-2 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Email</dt>
                  <dd className="text-gray-700 sm:col-span-2">{data?.email}</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 px-2 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Feedback</dt>
                  <dd className="text-gray-700 sm:col-span-2">
                    {data?.feedback}
                  </dd>
                </div>
              </dl>
            </div>

            <dl className="mt-6 px-2 flex gap-4 sm:gap-6">
              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">Posted On</dt>
                <dd className="text-xs text-gray-500">
                  {dayjs(data?.createdAt).format("YYYY-MM-DD")}
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
