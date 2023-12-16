import { Avatar, Dropdown, Layout, MenuProps, Row, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/constants/storageKey";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/localStorage";
import Link from "next/link";
const { Header: AntHeader } = Layout;
import sun from "../../../public/assets/sun.png";
import moon from "../../../public/assets/moon.png";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const localStorageTheme = getFromLocalStorage("theme");
  const theme = localStorageTheme ? JSON.parse(localStorageTheme) : null;
  const [localTheme, setLocalTheme] = useState(theme?.theme);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/auth/login");
  };

  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Link href="/dashboard/profile">
          <p className="bg-gray-600 rounded-md py-2 px-10 text-white text-center">
            Profile
          </p>
        </Link>
      ),
    },
    {
      key: "0",
      label: (
        <p
          className="bg-red-300 rounded-md py-2 px-10 text-white text-center"
          onClick={logOut}
        >
          Logout
        </p>
      ),
    },
  ];

  return (
    <AntHeader
      style={{
        height: "65.5px",
        background: "#FFFFFF",
      }}
    >
      <Row
        justify="end"
        align="middle"
        style={{
          height: "100%",
        }}
      >
        <div className="mr-10">
          {theme?.theme === "dark" ||
          localTheme === "dark" ||
          theme?.theme === undefined ? (
            <Image
              height={25}
              width={25}
              src={sun}
              alt="Sun Logo"
              className="block object-contain h-16"
              onClick={() => {
                setLocalTheme("light");
                setToLocalStorage("theme", JSON.stringify({ theme: "light" }));
                dispatch({ type: "config/setTheme", payload: "light" });
              }}
            />
          ) : (
            <Image
              height={25}
              width={25}
              src={moon}
              alt="Moon Logo"
              className="block object-contain h-16"
              onClick={() => {
                setLocalTheme("dark");
                setToLocalStorage("theme", JSON.stringify({ theme: "dark" }));
                dispatch({ type: "config/setTheme", payload: "dark" });
              }}
            />
          )}
        </div>
        <Dropdown menu={{ items }}>
          <a>
            <Space wrap size={16}>
              <Avatar size="large" icon={<UserOutlined />} />
            </Space>
          </a>
        </Dropdown>
      </Row>
    </AntHeader>
  );
};

export default Header;
