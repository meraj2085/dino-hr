"use client";
import ActionBar from "@/components/ui/ActionBar";
import {
  useGetEmployeeStatsQuery,
} from "@/redux/api/statisticsApi";

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
    <div className="flex border border-gray-300  bg-white text-[#00674A] rounded-md p-4">
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

const EmployeeDashboardPage = () => {
  const { data, isLoading } = useGetEmployeeStatsQuery(undefined);
  // console.log(data);
  return (
    <div
      className="min-h-[680px]"
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: "20px",
        padding: "24px 24px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        overflowX: "auto",
      }}
    >
      <ActionBar title="Dashboard" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
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
            title="Upcoming Events"
            value={data?.upcomingEvents}
          />
          <Card
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-users-group"
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
                <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
                <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M17 10h2a2 2 0 0 1 2 2v1" />
                <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
              </svg>
            }
            title="Team Members"
            value={data?.myTeam}
          />
        </div>
      </div>
  );
};

export default EmployeeDashboardPage;
