"use client";
import LineChartComponent from "@/components/LineChart";
import PiChart from "@/components/PiChart";
import ActionBar from "@/components/ui/ActionBar";
import { useGetSuperAdminStatsQuery } from "@/redux/api/statisticsApi";

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
  const { data, isLoading } = useGetSuperAdminStatsQuery(undefined);

  return (
    <div className="min-h-[680px] background">
      <div className="flex flex-col md:flex-row justify-center">
        <div className="w-full md:w-1/4 order-1 gap-4 flex flex-col justify-center">
          <div>
            <Card
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-building-community"
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
                  <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
                  <path d="M13 7l0 .01" />
                  <path d="M17 7l0 .01" />
                  <path d="M17 11l0 .01" />
                  <path d="M17 15l0 .01" />
                </svg>
              }
              title="Organization"
              value={data?.organizations}
            />
            <Card
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-user-shield"
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
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h2" />
                  <path d="M22 16c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5z" />
                  <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                </svg>
              }
              title="Admin Users"
              value={data?.adminUsers}
            />
          </div>
        </div>
        <div className="w-full md:w-1/3 order-0 md:order-1 bg-white rounded-md py-4">
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
              <span className="text-[#FF8F8F] text-[20px] mr-1">●</span>
              Female
            </span>
          </div>
        </div>
        <div className="w-full md:w-1/4 order-1 gap-4 flex flex-col justify-center">
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
                  className="icon icon-tabler icon-tabler-clipboard-list"
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
                  <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                  <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                  <path d="M9 12l.01 0" />
                  <path d="M13 12l2 0" />
                  <path d="M9 16l.01 0" />
                  <path d="M13 16l2 0" />
                </svg>
              }
              title="Bookings"
              value={data?.bookings}
            />
          </div>
        </div>
      </div>
      <LineChartComponent activeByDate={data?.activeByDate} />
    </div>
  );
};

export default AdminPage;
