"use client";
import LineChartComponent from "@/components/LineChart";
import PiChart from "@/components/PiChart";
import ActionBar from "@/components/ui/ActionBar";
import { useGetAdminStatsQuery } from "@/redux/api/statisticsApi";

const Card = ({
  icon,
  title,
  value,
}: {
  icon: any;
  title: string;
  value: number;
}) => {
  return (
    <div className="flex grow gap-3 border border-gray-300 shadow-sm  hover:shadow-md transition duration-300 ease-in-out  bg-white text-[#00674A] rounded-md p-4 mb-8">
      <div className=" flex justify-center items-center">
        <p className="text-5xl">{icon}</p>
      </div>
      <div className="overflow-hidden flex items-center">
        <div>
          <p className="text-xl">{title}</p>
          <p className="text-lg">{value}</p>
        </div>
      </div>
    </div>
  );
};

const AdminPage = () => {
  const { data, isLoading } = useGetAdminStatsQuery(undefined);
  return (
    <div className="min-h-[680px] background">
      <div className="flex flex-col lg:flex-row justify-center max-w-7xl mx-auto">
        <div className="w-full lg:w-1/4 order-1 gap-4 flex flex-col justify-center">
          <div>
            <Card
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-users"
                  width={43}
                  height={43}
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                </svg>
              }
              title="Employees"
              value={data?.employees}
            />
            <Card
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-calendar-check"
                  width={43}
                  height={43}
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M11.5 21h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6" />
                  <path d="M16 3v4" />
                  <path d="M8 3v4" />
                  <path d="M4 11h16" />
                  <path d="M15 19l2 2l4 -4" />
                </svg>
              }
              title="Events"
              value={data?.events}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/3 order-0 lg:order-1 bg-white rounded-md py-4">
          <h1 className="text-center text-4xl font-bold mb-4 mt-2">
            <span className="text-gradient-action">Dashboard</span>
          </h1>
          <div className="flex justify-center">
            <PiChart employeesByGender={data?.employeesByGender} />
          </div>
          <div className="text-center">
            <span className="mr-4">
              <span className="text-[#a7daff] text-[20px] mr-1">●</span>
              Male
            </span>
            <span>
              <span className="text-[#f5558d] text-[20px] mr-1">●</span>
              Female
            </span>
          </div>
        </div>
        <div className="w-full lg:w-1/4 order-1 gap-4 flex flex-col justify-center">
          <div>
            <Card
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-user-check"
                  width={43}
                  height={43}
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
                  <path d="M15 19l2 2l4 -4" />
                </svg>
              }
              title="Attendance"
              value={data?.attendance}
            />
            <Card
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-user-x"
                  width={43}
                  height={43}
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h3.5" />
                  <path d="M22 22l-5 -5" />
                  <path d="M17 22l5 -5" />
                </svg>
              }
              title="Leaves"
              value={data?.leaves}
            />
          </div>
        </div>
      </div>
      <LineChartComponent activeByDate={data?.activeByDate} />
    </div>
  );
};

export default AdminPage;
