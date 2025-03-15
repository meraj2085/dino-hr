"use client";

import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";

const ReportPage = () => {
  return (
    <div style={{ overflowX: "auto" }} className="background no-select">
      <BreadCrumb
        items={[
          {
            label: "Admin",
            link: "/dashboard/admin",
          },
          {
            label: "Report",
            link: "/dashboard/admin/report",
          },
        ]}
      />
      <ActionBar title="Report" />

      <div className="space-y-4 mt-3">
        {[
          { id: 1, name: "Attendance Report" },
          { id: 2, name: "Leave Report" },
          { id: 3, name: "Salary Report" },
        ].map((item) => (
          <details
            key={item.id}
            className="group bg-white p-4 [&_summary::-webkit-details-marker]:hidden rounded-lg shadow-md border-b-2 border-[0.5px] border-[#00674A]"
            open={item.id === -1}
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-white p-1 text-gray-900">
              <div>
                <h2 className="text-[17px]">{item?.name}</h2>
              </div>

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

            <div className="mt-4 px-4 leading-relaxed text-gray-700">
              <p>Meraj</p>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
};

export default ReportPage;
