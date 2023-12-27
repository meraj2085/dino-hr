"use client";

import BreadCrumb from "@/components/ui/BreadCrumb";
import Image from "next/image";
import Loading from "@/app/loading";
import dayjs from "dayjs";
import { useGetSingleFeedbackQuery } from "@/redux/api/feedbackApi";

type IDProps = {
  params: any;
};

const ViewBlogPage = ({ params }: IDProps) => {
  const { id } = params;
  const { data, isLoading } = useGetSingleFeedbackQuery(id);

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
            label: "Feedback",
            link: "/dashboard/super_admin/feedback",
          },
          {
            label: "View",
            link: `/dashboard/super_admin/feedback/view/${id}`,
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
                  {data?.name}
                </h3>
                <p className="mt-1 text-xs font-medium text-gray-600">
                  {data?.email}
                </p>
              </div>
            </div>

            <div className="mt-4">
              <p className=" text-sm text-gray-500">{data?.feedback}</p>
            </div>

            <dl className="mt-6 flex gap-4 sm:gap-6">
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
