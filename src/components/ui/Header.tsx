import { Avatar, Badge, Dropdown, Layout, MenuProps, Row, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/constants/storageKey";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/localStorage";
import Link from "next/link";
const { Header: AntHeader } = Layout;
import Image from "next/image";
import { useState } from "react";
import { useGetUnreadCountQuery } from "@/redux/api/notificationApi";
import { useGetSingleUserQuery } from "@/redux/api/userApi";
import {
  DarkThemeSVG,
  LightThemeSVG,
  LockSVG,
  LogOutSVG,
  NotificationSVG,
  OrganizationSVG,
  ProfileSVG,
} from "@/shared/svg";

const Header = () => {
  const localStorageTheme = getFromLocalStorage("theme");
  const { userId } = getUserInfo() as any;
  const { data, isLoading } = useGetUnreadCountQuery(undefined);
  const theme = localStorageTheme ? JSON.parse(localStorageTheme) : null;
  const [localTheme, setLocalTheme] = useState(theme?.theme);
  const { user_type } = getUserInfo() as any;
  const { data: userData } = useGetSingleUserQuery(userId);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/auth/login");
  };

  const items: MenuProps["items"] = [
    {
      key: "2",
      label: (
        <Link
          href="/auth/changePassword"
          className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm text-gray-800 hover:bg-gray-50"
          role="menuitem"
        >
          <LockSVG />
          Change Password
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <button
          onClick={logOut}
          className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm text-red-700 hover:bg-red-50"
        >
          <LogOutSVG />
          Logout
        </button>
      ),
    },
  ];

  if (user_type === "admin") {
    items.unshift({
      key: "1",
      label: (
        <Link
          href="/dashboard/admin/organization"
          className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm text-gray-800 hover:bg-gray-50"
          role="menuitem"
        >
          <OrganizationSVG />
          Organization
        </Link>
      ),
    });
    items.unshift({
      key: "0",
      label: (
        <Link
          href="/dashboard/profile"
          className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm text-gray-800 hover:bg-gray-50"
          role="menuitem"
        >
          <ProfileSVG />
          My Profile
        </Link>
      ),
    });
  }

  if (user_type === "employee") {
    items.unshift({
      key: "0",
      label: (
        <Link
          href="/dashboard/profile"
          className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm text-gray-800 hover:bg-gray-50"
          role="menuitem"
        >
          <ProfileSVG />
          My Profile
        </Link>
      ),
    });
  }

  return (
    <AntHeader
      className="min-w-[300px]"
      style={{
        height: "65.5px",
        background: "#FFFFFF",
        overflowX: "auto",
      }}
    >
      <Row
        justify="end"
        align="middle"
        style={{
          height: "100%",
        }}
      >
        <div className="mr-8">
          {theme?.theme === "light" ||
          localTheme === "light" ||
          theme?.theme === undefined ? (
            <div
              onClick={() => {
                setLocalTheme("dark");
                setToLocalStorage("theme", JSON.stringify({ theme: "dark" }));
                dispatch({ type: "config/setTheme", payload: "dark" });
              }}
            >
              <DarkThemeSVG />
            </div>
          ) : (
            <div
              onClick={() => {
                setLocalTheme("light");
                setToLocalStorage("theme", JSON.stringify({ theme: "light" }));
                dispatch({ type: "config/setTheme", payload: "light" });
              }}
            >
              <LightThemeSVG />
            </div>
          )}
        </div>
        <Link
          href={`/dashboard/${user_type}/notification`}
          className="mr-10 flex items-center"
        >
          {Number(data) > 0 ? (
            <Badge count={Number(data) > 0 && data}>
              <NotificationSVG />
            </Badge>
          ) : (
            <NotificationSVG />
          )}
        </Link>
        <Dropdown menu={{ items }}>
          <a>
            <Space wrap size={16}>
              <Avatar
                size="large"
                icon={
                  userData?.profile_picture ? (
                    <Image
                      src={userData?.profile_picture}
                      alt="User Avatar"
                      height={25}
                      width={25}
                      className="rounded-full"
                    />
                  ) : (
                    <UserOutlined />
                  )
                }
              />
            </Space>
          </a>
        </Dropdown>
      </Row>
    </AntHeader>
  );
};

export default Header;
