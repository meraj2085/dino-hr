"use client";

import Link from "next/link";
import { getUserInfo } from "@/services/auth.service";

const DynamicAuthNav = () => {
  const { user_type } = getUserInfo() as any;

  return (
    <div>
      {!user_type && (
        <div className="sm:flex sm:gap-4 mt-4 md:mt-0">
          <>
            <Link
              className="rounded-md bg-[#00674A] hover:bg-[#008567] px-5 py-2.5 text-sm font-medium text-white shadow"
              href="/auth/login"
            >
              Login
            </Link>
          </>
        </div>
      )}
    </div>
  );
};

export default DynamicAuthNav;
