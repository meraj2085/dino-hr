"use client";

import { Avatar, Button, Dropdown, MenuProps, Space } from "antd";
import Link from "next/link";
import { UserOutlined } from "@ant-design/icons";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { authKey } from "@/constants/storageKey";

const DynamicAuthNav = () => {
  const { role } = getUserInfo() as any;
  const router = useRouter();

  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/auth/login");
  };

  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Link href="/profile">
          <Button type="text">Profile</Button>
        </Link>
      ),
    },
    {
      key: "0",
      label: (
        <Button onClick={logOut} type="text" danger>
          Logout
        </Button>
      ),
    },
  ];

  return (
    <div>
      {!role ? (
        <div className="hidden sm:flex sm:gap-4">
          <>
            <Link
              className="rounded-md bg-[#00674A] hover:bg-[#008567] px-5 py-2.5 text-sm font-medium text-white shadow"
              href="/auth/login"
            >
              Login
            </Link>
          </>
        </div>
      ) : (
        <Dropdown menu={{ items }}>
          <a>
            <Space wrap size={16}>
              <Avatar size="large" icon={<UserOutlined />} />
            </Space>
          </a>
        </Dropdown>
      )}
    </div>
  );
};

export default DynamicAuthNav;
