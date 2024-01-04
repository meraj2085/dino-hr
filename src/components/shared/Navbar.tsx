import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const DynamicAuthNav = dynamic(
  () => import("@/components/shared/DynamicAuthNav"),
  {
    ssr: false,
  }
);

const DynamicRouteNav = dynamic(
  () => import("@/components/shared/DynamicRouteNav"),
  {
    ssr: false,
  }
);

const NavBar = () => {
  let [open, setOpen] = useState(false);
  return (
    <div className=" w-full fixed top-0 left-0 z-10">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <Link className="block text-[#00674A]" href="/">
          <span className="sr-only">Home</span>
          <Image
            src="https://res.cloudinary.com/dn163fium/image/upload/v1702705615/usmjqqtg18c9j7bnwh4f.png"
            height={49}
            width={49}
            alt="Dino HR Logo"
          />
        </Link>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in gap-6 text-sm ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          <li>
            <Link
              className="text-gray-500 transition hover:text-gray-500/75"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-gray-500 transition hover:text-gray-500/75"
              href="/faq"
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              className="text-gray-500 transition hover:text-gray-500/75"
              href="/bookCall"
            >
              Book Call
            </Link>
          </li>
          <li>
            <Link
              className="text-gray-500 transition hover:text-gray-500/75"
              href="/feedback"
            >
              Feedback
            </Link>
          </li>
          <DynamicRouteNav />
          <DynamicAuthNav />
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
