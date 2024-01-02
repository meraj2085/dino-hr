import { Avatar, Dropdown, Layout, MenuProps, Row, Space } from "antd";
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

const Header = () => {
  const localStorageTheme = getFromLocalStorage("theme");
  const { data, isLoading } = useGetUnreadCountQuery(undefined);
  const theme = localStorageTheme ? JSON.parse(localStorageTheme) : null;
  const [localTheme, setLocalTheme] = useState(theme?.theme);
  const { user_type } = getUserInfo() as any;
  const router = useRouter();
  const dispatch = useAppDispatch();

  console.log(data, "count");

  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/auth/login");
  };

  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Link
          href="/dashboard/profile"
          className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm text-gray-800 hover:bg-gray-50"
          role="menuitem"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-user w-4 h-4"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          </svg>
          My Profile
        </Link>
      ),
    },

    {
      key: "2",
      label: (
        <Link
          href="/auth/changePassword"
          className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm text-gray-800 hover:bg-gray-50"
          role="menuitem"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-lock-open w-4 h-4"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 11m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
            <path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M8 11v-5a4 4 0 0 1 8 0" />
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-logout h-4 w-4"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
            <path d="M9 12h12l-3 -3" />
            <path d="M18 15l3 -3" />
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-building-warehouse w-4 h-4"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 21v-13l9 -4l9 4v13" />
            <path d="M13 13h4v8h-10v-6h6" />
            <path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3" />
          </svg>
          Organization
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-moon text-[#00674A]"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
              </svg>
            </div>
          ) : (
            <div
              onClick={() => {
                setLocalTheme("light");
                setToLocalStorage("theme", JSON.stringify({ theme: "light" }));
                dispatch({ type: "config/setTheme", payload: "light" });
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-sun text-[#00674A]"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
              </svg>
            </div>
          )}
        </div>
        <Link
          href={`/dashboard/${user_type}/notification`}
          className="mr-10 relative"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-bell-ringing-filled text-[#00674A]"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17.451 2.344a1 1 0 0 1 1.41 -.099a12.05 12.05 0 0 1 3.048 4.064a1 1 0 1 1 -1.818 .836a10.05 10.05 0 0 0 -2.54 -3.39a1 1 0 0 1 -.1 -1.41z"
              strokeWidth="0"
              fill="currentColor"
            />
            <path
              d="M5.136 2.245a1 1 0 0 1 1.312 1.51a10.05 10.05 0 0 0 -2.54 3.39a1 1 0 1 1 -1.817 -.835a12.05 12.05 0 0 1 3.045 -4.065z"
              strokeWidth="0"
              fill="currentColor"
            />
            <path
              d="M14.235 19c.865 0 1.322 1.024 .745 1.668a3.992 3.992 0 0 1 -2.98 1.332a3.992 3.992 0 0 1 -2.98 -1.332c-.552 -.616 -.158 -1.579 .634 -1.661l.11 -.006h4.471z"
              strokeWidth="0"
              fill="currentColor"
            />
            <path
              d="M12 2c1.358 0 2.506 .903 2.875 2.141l.046 .171l.008 .043a8.013 8.013 0 0 1 4.024 6.069l.028 .287l.019 .289v2.931l.021 .136a3 3 0 0 0 1.143 1.847l.167 .117l.162 .099c.86 .487 .56 1.766 -.377 1.864l-.116 .006h-16c-1.028 0 -1.387 -1.364 -.493 -1.87a3 3 0 0 0 1.472 -2.063l.021 -.143l.001 -2.97a8 8 0 0 1 3.821 -6.454l.248 -.146l.01 -.043a3.003 3.003 0 0 1 2.562 -2.29l.182 -.017l.176 -.004z"
              strokeWidth="0"
              fill="currentColor"
            />
          </svg>
          {Number(data) > 0 && (
            <div className="absolute top-0 right-0 w-[10px] h-[10px]">
              <div className="bg-red-500 w-full h-full rounded-full animate-pulse"></div>
            </div>
          )}
        </Link>
        <Dropdown menu={{ items }}>
          <a>
            <Space wrap size={16}>
              <Avatar
                size="large"
                icon={
                  // <UserOutlined />
                  <Image
                    src="https://res.cloudinary.com/dn163fium/image/upload/v1703907617/the50wmbputcfuukvhbk.avif"
                    alt="User Avatar"
                    height={25}
                    width={25}
                    className="rounded-full"
                  />
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
