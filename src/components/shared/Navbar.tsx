import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

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
  const [sticky, setSticky] = useState(false);

  const menuLinks = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "Blog", link: "/blog" },
    { name: "FAQ", link: "/faq" },
    { name: "Feedback", link: "/feedback" },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  });

  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-[999]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-0">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-[#8484BD]" href="/">
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
    </header>
  );
};

export default NavBar;
