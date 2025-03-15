import type { MenuProps } from "antd";
import {
  AppstoreOutlined,
  UserOutlined,
  HomeOutlined,
  NotificationOutlined,
  DashboardOutlined,
  PhoneOutlined,
  UsergroupAddOutlined,
  FieldTimeOutlined,
  UserAddOutlined,
  FileTextOutlined,
  MailOutlined,
  FileExcelOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { USER_TYPE } from "./role";
export const sidebarItems = (user_type: string, is_manager?: boolean) => {
  const adminSidebarItems: MenuProps["items"] = [
    {
      label: <Link href="/">Back To Website</Link>,
      icon: <HomeOutlined />,
      key: `/`,
    },
    {
      label: <Link href={`/dashboard/${user_type}/`}>Dashboard</Link>,
      icon: <DashboardOutlined />,
      key: `/dashboard/${user_type}/`,
    },
    {
      label: "Employees",
      key: "employee-management",
      icon: <UserOutlined />,
      children: [
        {
          label: (
            <Link href={`/dashboard/${user_type}/employees/addEmployee`}>
              Add Employee
            </Link>
          ),
          key: `/dashboard/${user_type}/employees/addEmployee`,
        },
        {
          label: (
            <Link href={`/dashboard/${user_type}/employees/viewEmployee`}>
              View Employees
            </Link>
          ),
          key: `/dashboard/${user_type}/employees/viewEmployee`,
        },
      ],
    },
    {
      label: (
        <Link href={`/dashboard/${user_type}/sendNotification`}>
          Send Notification
        </Link>
      ),
      icon: <NotificationOutlined />,
      key: `/dashboard/${user_type}/sendNotification`,
    },
    {
      label: (
        <Link href={`/dashboard/${user_type}/addressBook`}>Address Book</Link>
      ),
      icon: <PhoneOutlined />,
      key: `/dashboard/${user_type}/addressBook`,
    },
    {
      label: <Link href={`/dashboard/${user_type}/myTeam`}>My Team</Link>,
      icon: <UsergroupAddOutlined />,
      key: `/dashboard/${user_type}/myTeam`,
    },
    {
      label: "Attendance",
      key: "attendance-management",
      icon: <UserAddOutlined />,
      children: [
        {
          label: (
            <Link href={`/dashboard/${user_type}/attendance/allAttendance`}>
              All Attendance
            </Link>
          ),
          key: `/dashboard/${user_type}/attendance/allAttendance`,
        },
        {
          label: (
            <Link href={`/dashboard/${user_type}/attendance/myAttendance`}>
              My Attendance
            </Link>
          ),
          key: `/dashboard/${user_type}/attendance/myAttendance`,
        },
      ],
    },
    {
      label: "Leave",
      key: "leave-management",
      icon: <FileTextOutlined />,
      children: [
        {
          label: (
            <Link href={`/dashboard/${user_type}/leave/applyForLeave`}>
              Apply For Leave
            </Link>
          ),
          key: `/dashboard/${user_type}/leave/applyForLeave`,
        },
        {
          label: (
            <Link href={`/dashboard/${user_type}/leave/appliedLeaves`}>
              Applied Leaves
            </Link>
          ),
          key: `/dashboard/${user_type}/leave/appliedLeaves`,
        },
        {
          label: (
            <Link href={`/dashboard/${user_type}/leave/approveLeaves`}>
              Approve Leaves
            </Link>
          ),
          key: `/dashboard/${user_type}/leave/approveLeaves`,
        },
      ],
    },
    {
      label: "Events and Calendar",
      key: "events-management",
      icon: <FieldTimeOutlined />,
      children: [
        {
          label: (
            <Link href={`/dashboard/${user_type}/events/addEvent`}>
              Add Event
            </Link>
          ),
          key: `/dashboard/${user_type}/events/addEvent`,
        },
        {
          label: (
            <Link href={`/dashboard/${user_type}/events/viewEvents`}>
              View Events
            </Link>
          ),
          key: `/dashboard/${user_type}/events/viewEvents`,
        },
        {
          label: (
            <Link href={`/dashboard/${user_type}/events/calendar`}>
              Calendar
            </Link>
          ),
          key: `/dashboard/${user_type}/events/calendar`,
        },
      ],
    },
    {
      label: (
        <Link href={`/dashboard/${user_type}/report`}>
          Download Report
        </Link>
      ),
      icon: <FileExcelOutlined />,
      key: `/dashboard/${user_type}/report`,
    },
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    {
      label: <Link href="/">Back To Website</Link>,
      icon: <HomeOutlined />,
      key: `/`,
    },
    {
      label: <Link href={`/dashboard/${user_type}/`}>Dashboard</Link>,
      icon: <DashboardOutlined />,
      key: `/dashboard/${user_type}/`,
    },
    {
      label: "Organizations",
      key: "organization-management",
      icon: <AppstoreOutlined />,
      children: [
        {
          label: (
            <Link
              href={`/dashboard/${user_type}/organizations/addOrganization`}
            >
              Add Organization
            </Link>
          ),
          key: `/dashboard/${user_type}/organizations/addOrganization`,
        },
        {
          label: (
            <Link
              href={`/dashboard/${user_type}/organizations/viewOrganization`}
            >
              View Organizations
            </Link>
          ),
          key: `/dashboard/${user_type}/organizations/viewOrganization`,
        },
      ],
    },
    {
      label: <Link href={`/dashboard/${user_type}/bookings`}>Bookings</Link>,
      icon: <PhoneOutlined />,
      key: `/dashboard/${user_type}/bookings`,
    },
    {
      label: <Link href={`/dashboard/${user_type}/feedback`}>Feedback</Link>,
      icon: <MailOutlined />,
      key: `/dashboard/${user_type}/feedback`,
    },
  ];

  const employeeSidebarItems: MenuProps["items"] = [
    {
      label: <Link href="/">Back To Website</Link>,
      icon: <HomeOutlined />,
      key: `/`,
    },
    {
      label: <Link href={`/dashboard/${user_type}/`}>Dashboard</Link>,
      icon: <DashboardOutlined />,
      key: `/dashboard/${user_type}/`,
    },
    {
      label: (
        <Link href={`/dashboard/${user_type}/addressBook`}>Address Book</Link>
      ),
      icon: <PhoneOutlined />,
      key: `/dashboard/${user_type}/addressBook`,
    },
    {
      label: <Link href={`/dashboard/${user_type}/myTeam`}>My Team</Link>,
      icon: <UsergroupAddOutlined />,
      key: `/dashboard/${user_type}/myTeam`,
    },
    {
      label: "Attendance",
      key: "attendance-management",
      icon: <UserAddOutlined />,
      children: [
        {
          label: (
            <Link href={`/dashboard/${user_type}/attendance/myAttendance`}>
              My Attendance
            </Link>
          ),
          key: `/dashboard/${user_type}/attendance/myAttendance`,
        },
      ],
    },
    {
      label: "Leave",
      key: "leave-management",
      icon: <FileTextOutlined />,
      children: [
        {
          label: (
            <Link href={`/dashboard/${user_type}/leave/applyForLeave`}>
              Apply For Leave
            </Link>
          ),
          key: `/dashboard/${user_type}/leave/applyForLeave`,
        },
        {
          label: (
            <Link href={`/dashboard/${user_type}/leave/appliedLeaves`}>
              Applied Leaves
            </Link>
          ),
          key: `/dashboard/${user_type}/leave/appliedLeaves`,
        },
        ...(is_manager
          ? [
              {
                label: (
                  <Link href={`/dashboard/${user_type}/leave/approveLeaves`}>
                    Approve Leaves
                  </Link>
                ),
                key: `/dashboard/${user_type}/leave/approveLeaves`,
              },
            ]
          : []),
      ],
    },
    {
      label: "Events and Calendar",
      key: "events-management",
      icon: <FieldTimeOutlined />,
      children: [
        {
          label: (
            <Link href={`/dashboard/${user_type}/events/viewEvents`}>
              View Events
            </Link>
          ),
          key: `/dashboard/${user_type}/events/viewEvents`,
        },
        {
          label: (
            <Link href={`/dashboard/${user_type}/events/calendar`}>
              Calendar
            </Link>
          ),
          key: `/dashboard/${user_type}/events/calendar`,
        },
      ],
    },
  ];

  if (user_type === USER_TYPE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (user_type === USER_TYPE.ADMIN) return adminSidebarItems;
  else if (user_type === USER_TYPE.EMPLOYEE) return employeeSidebarItems;
};
