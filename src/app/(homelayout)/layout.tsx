"use client";

import dynamic from "next/dynamic";
import NavBar from "@/components/shared/Navbar";
import { useGetProfileQuery } from "@/redux/api/userApi";
import { getUserInfo } from "@/services/auth.service";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetProfileQuery(undefined);

  useEffect(() => {
    dispatch({ type: "user/setUser", payload: data });
  }, [data, dispatch]);

  return (
    <div>
      <NavBar />
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
