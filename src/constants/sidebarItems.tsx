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
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "./role";
export const sidebarItems = (role: string) => {
  const adminSidebarItems: MenuProps["items"] = [
    {
      label: <Link href="/">Back To Website</Link>,
      icon: <HomeOutlined />,
      key: `/`,
    },
    {
      label: <Link href={`/dashboard/${role}/`}>Dashboard</Link>,
      icon: <DashboardOutlined />,
      key: `/dashboard/${role}/`,
    },
    {
      label: "Employees",
      key: "employee-management",
      icon: <UserOutlined />,
      children: [
        {
          label: (
            <Link href={`/dashboard/${role}/employees/addEmployee`}>
              Add Employee
            </Link>
          ),
          key: `/dashboard/${role}/employees/addEmployee`,
        },
        {
          label: (
            <Link href={`/dashboard/${role}/employees/viewEmployee`}>
              View Employees
            </Link>
          ),
          key: `/dashboard/${role}/employees/viewEmployee`,
        },
      ],
    },
    {
      label: (
        <Link href={`/dashboard/${role}/sendNotification`}>
          Send Notification
        </Link>
      ),
      icon: <NotificationOutlined />,
      key: `/dashboard/${role}/sendNotification`,
    },
    {
      label: <Link href={`/dashboard/${role}/addressBook`}>Address Book</Link>,
      icon: <PhoneOutlined />,
      key: `/dashboard/${role}/addressBook`,
    },
    {
      label: <Link href={`/dashboard/${role}/myTeam`}>My Team</Link>,
      icon: <UsergroupAddOutlined />,
      key: `/dashboard/${role}/myTeam`,
    },
    {
      label: "Attendance",
      key: "attendance-management",
      icon: <UserAddOutlined />,
      children: [
        {
          label: (
            <Link href={`/dashboard/${role}/attendance/addAttendance`}>
              Add Attendance
            </Link>
          ),
          key: `/dashboard/${role}/attendance/addAttendance`,
        },
        {
          label: (
            <Link href={`/dashboard/${role}/attendance/viewAttendance`}>
              View Attendance
            </Link>
          ),
          key: `/dashboard/${role}/attendance/viewAttendance`,
        },
        {
          label: (
            <Link href={`/dashboard/${role}/attendance/teamManagement`}>
              Team Attendance
            </Link>
          ),
          key: `/dashboard/${role}/attendance/teamManagement`,
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
            <Link href={`/dashboard/${role}/leave/applyForLeave`}>
              Apply For Leave
            </Link>
          ),
          key: `/dashboard/${role}/leave/applyForLeave`,
        },
        {
          label: (
            <Link href={`/dashboard/${role}/leave/appliedLeaves`}>
              Applied Leaves
            </Link>
          ),
          key: `/dashboard/${role}/leave/appliedLeaves`,
        },
        {
          label: (
            <Link href={`/dashboard/${role}/leave/approveLeaves`}>
              Approve Leaves
            </Link>
          ),
          key: `/dashboard/${role}/leave/approveLeaves`,
        },
      ],
    },
    {
      label: "Events",
      key: "events-management",
      icon: <FieldTimeOutlined />,
      children: [
        {
          label: (
            <Link href={`/dashboard/${role}/events/addEvent`}>Add Event</Link>
          ),
          key: `/dashboard/${role}/events/addEvent`,
        },
        {
          label: (
            <Link href={`/dashboard/${role}/events/viewEvents`}>
              View Events
            </Link>
          ),
          key: `/dashboard/${role}/events/viewEvents`,
        },
      ],
    },
    {
      label: (
        <Link href={`/dashboard/${role}/userManagement`}>User Management</Link>
      ),
      icon: <UserOutlined />,
      key: `/dashboard/${role}/userManagement`,
    },
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    {
      label: <Link href="/">Back To Website</Link>,
      icon: <HomeOutlined />,
      key: `/`,
    },
    {
      label: <Link href={`/dashboard/${role}/`}>Dashboard</Link>,
      icon: <DashboardOutlined />,
      key: `/dashboard/${role}/`,
    },
    {
      label: "Organizations",
      key: "organization-management",
      icon: <AppstoreOutlined />,
      children: [
        {
          label: (
            <Link href={`/dashboard/${role}/organizations/addOrganization`}>
              Add Organization
            </Link>
          ),
          key: `/dashboard/${role}/organizations/addOrganization`,
        },
        {
          label: (
            <Link href={`/dashboard/${role}/organizations/viewOrganization`}>
              View Organizations
            </Link>
          ),
          key: `/dashboard/${role}/organizations/viewOrganization`,
        },
      ],
    },
  ];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
};
