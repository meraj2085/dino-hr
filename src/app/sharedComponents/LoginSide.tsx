import Image from "next/image";
import green_new from "../../../public/assets/green_new.png";

const LoginSide = () => {
  return (
    <div className="hidden sm:block col-span-5 bg-[#00674A]">
      <div className="flex ">
        <div className="my-10 ml-12 w-[400px]">
          <h1 className="text-xl lg:text-3xl font-bold my-4 text-white">
            Simplify HRMS By <span className="">Dino HR</span>
          </h1>
          <p className="text-md mb-4 text-white w-[300px]">
            All in one human resource management system. Dino simplifies every
            aspect of HRMS.
          </p>
          <div className="inline-flex text-white cursor-pointer hover:underline">
            <span>Learn more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-narrow-right"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M15 16l4 -4" />
              <path d="M15 8l4 4" />
            </svg>
          </div>
        </div>

        <Image
          className="h-[100vh] w-full object-cover overflow-hidden"
          src={green_new}
          width={700}
          alt="Dino HR Logo"
        />
      </div>
    </div>
  );
};

export default LoginSide;
