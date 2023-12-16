"use client";

import { getUserInfo } from "@/services/auth.service";
import Link from "next/link";

const DynamicRouteNav = () => {
  const { role } = getUserInfo() as any;
  return (
    <>
      {role && (role === "admin" || role === "super_admin") && (
        <li>
          <Link
            className="text-gray-500 transition hover:text-gray-500/75"
            href={`/dashboard/${role}`}
          >
            Dashboard
          </Link>
        </li>
      )}
    </>
  );
};

export default DynamicRouteNav;
