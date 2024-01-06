import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";

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
  const [open, setOpen] = useState(false);

  return (
    // <header className="bg-white fixed top-0 left-0 right-0 z-[10]">
    <header className="bg-white fixed top-0 left-0 right-0 z-[10] backdrop-filter backdrop-blur-md bg-opacity-80">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-0">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-[#00674A]" href="/">
              <span className="sr-only">Home</span>
              <Image
                src="https://res.cloudinary.com/dn163fium/image/upload/v1702705615/usmjqqtg18c9j7bnwh4f.png"
                height={49}
                width={49}
                alt="Dino HR Logo"
              />
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
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
              </ul>
            </nav>
            <div className="flex items-center gap-4">
              <DynamicAuthNav />
              <div className="block md:hidden" onClick={() => setOpen(!open)}>
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
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
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden min-h-[200px] md:pb-0 pb-12 absolute md:static bg-gray-100 md:z-[12] z-[12] left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in gap-6 text-sm ${
          open ? "top-0" : "top-[-490px]"
        }`}
      >
        <div className="flex justify-end px-6 py-5">
          <div className="block md:hidden" onClick={() => setOpen(!open)}>
            <button className="rounded bg-gray-200 p-2 text-gray-600 transition hover:text-gray-600/75">
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
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div
            onClick={() => setOpen(!open)}
            className="text-center flex flex-col gap-7 text-md"
          >
            <Link
              className="text-gray-500 transition hover:text-gray-500/75"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-gray-500 transition hover:text-gray-500/75"
              href="/faq"
            >
              FAQ
            </Link>
            <Link
              className="text-gray-500 transition hover:text-gray-500/75"
              href="/bookCall"
            >
              Book Call
            </Link>
            <Link
              className="text-gray-500 transition hover:text-gray-500/75"
              href="/feedback"
            >
              Feedback
            </Link>
            <ul>
              <li>
                <DynamicRouteNav />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
