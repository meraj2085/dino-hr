"use client";

import { getUserInfo } from "@/services/auth.service";
import Link from "next/link";

const DynamicRouteNav = () => {
  const { user_type } = getUserInfo() as any;
  return (
    <>
      {user_type &&
        (user_type === "admin" ||
          user_type === "super_admin" ||
          user_type === "hr" ||
          user_type === "employer") && (
          <li>
            <Link
              className="text-gray-500 transition hover:text-gray-500/75"
              href={`/dashboard/${user_type}`}
            >
              Dashboard
            </Link>
          </li>
        )}
    </>
  );
};

export default DynamicRouteNav;
