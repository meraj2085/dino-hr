"use client";

import Contents from "@/components/ui/Contents";
import Sidebar from "@/components/ui/Sidebar";
import { getUserInfo, isLoggedIn } from "@/services/auth.service";
import { Layout } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "../loading";
import { useGetSingleUserQuery } from "@/redux/api/userApi";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { userId } = getUserInfo() as any;
  const { data, isLoading: userLoading } = useGetSingleUserQuery(userId);
  const userLoggedIn = isLoggedIn();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/auth/login");
      return;
    }

    if (data && !data.is_password_reset) {
      router.push("/auth/changePassword");
      return;
    }

    setIsLoading(true);
  }, [router, isLoading, userLoggedIn, data]);

  if (!isLoading || userLoading) {
    return <Loading />;
  }

  return (
    <Layout hasSider>
      <Sidebar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
