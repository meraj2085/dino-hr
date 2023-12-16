"use client";

import Loading from "@/app/loading";
import { useGetAllNewsQuery } from "@/redux/api/newsApi";
import dayjs from "dayjs";
import Image from "next/image";

const News = () => {
  const { data, isLoading } = useGetAllNewsQuery({});
  if (isLoading) return <Loading />;
  return (
    <section className="max-w-[1200px] mx-auto">
      <div className="container px-6 py-10 mx-auto space-y-8">
        <div className="text-center mb-20">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-4xl lg:font-bold ">
            Latest <span className="text-[#8484BD]">News</span>
          </h1>
          <p className="max-w-lg mx-auto mt-4 text-gray-500">
            Know whats happening in the world of paint
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {data?.blogs?.map((blog: any, index: any) => (
            <article key={blog?._id} className="flex flex-col ">
              <Image
                alt=""
                height={200}
                width={200}
                className="object-cover w-full h-52 "
                src={`https://source.unsplash.com/200x200/?house?${index}`}
              />
              <div className="flex flex-col flex-1 p-6">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracki uppercase hover:underline"
                >
                  Paint News
                </a>
                <h3 className="flex-1 py-2 text-lg font-semibold leadi">
                  {(blog?.title).slice(0, 40)}...
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs ">
                  <span>{dayjs(blog?.createdAt).format("MMM D, YYYY")}</span>
                  <span>{blog?.views}K views</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
