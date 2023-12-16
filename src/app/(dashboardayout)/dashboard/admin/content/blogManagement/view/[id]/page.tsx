"use client";

import BreadCrumb from "@/components/ui/BreadCrumb";
import Image from "next/image";
import { useGetSingleBlogQuery } from "@/redux/api/blogApi";
import Loading from "@/app/loading";
import dayjs from "dayjs";

type IDProps = {
  params: any;
};

const ViewBlogPage = ({ params }: IDProps) => {
  const { id } = params;
  const { data, isLoading } = useGetSingleBlogQuery(id);

  if (isLoading) return <Loading />;

  return (
    <div>
      <BreadCrumb
        items={[
          {
            label: "Admin",
            link: "/dashboard/admin",
          },
          {
            label: "Blog",
            link: "/dashboard/admin/content/blogManagement",
          },
          {
            label: "View",
            link: `/dashboard/admin/content/blogManagement/view/${id}`,
          },
        ]}
      />

      <div>
        <h1 className="text-center text-4xl font-bold leadi">View Blog</h1>
        <div className="max-w-[300px] mx-auto mt-3">
          <hr className="border-t-1 border-gray-500" />
        </div>
      </div>

      <div className="mt-10">
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <article className="flex bg-white transition hover:shadow-xl rounded-md">
            <div className="hidden sm:block sm:basis-56">
              <Image
                alt="Guitar"
                height={200}
                width={200}
                src="https://source.unsplash.com/200x200/?house"
                className="aspect-square h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between">
              <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                <a href="#">
                  <h3 className="font-bold uppercase text-gray-900">
                    {data?.title}
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                  {data?.description}
                </p>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                  Views: {data?.views}K
                </p>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                  Published: {dayjs(data?.createdAt).format("MMM D, YYYY")}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ViewBlogPage;
