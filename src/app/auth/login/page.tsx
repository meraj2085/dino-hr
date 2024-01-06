"use client";
import { Button, message } from "antd";
import vectorImg from "../../../../public/assets/animated-hr.gif";
import purple_login from "../../../../public/assets/purple_login.png";
import gray from "../../../../public/assets/gray.png";
import green from "../../../../public/assets/green.png";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { getUserInfo, storeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { loginSchema } from "@/schema/login";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { decodedToken } from "@/utils/jwt";
import LoginSide from "@/app/sharedComponents/LoginSide";

type FormValues = {
  office_email: string;
  password: string;
};

const LoginPage = () => {
  const [userLogin, { isLoading: loading }] = useUserLoginMutation();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const [defaultValues, setDefaultValues] = useState<FormValues>({
    office_email: "",
    password: "",
  });

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      setIsLoading(true);
      const res = await userLogin({ ...data }).unwrap();
      if (res?.accessToken) {
        const { user_type } = decodedToken(res?.accessToken) as {
          user_type: string;
        };
        if (user_type) {
          router.push(`/dashboard/${user_type}`);
          message.success("User logged in successfully!");
          setIsLoading(false);
        }
        storeUserInfo({ accessToken: res?.accessToken });
      }
    } catch (err: any) {
      setIsLoading(false);
      console.error(err.message);
      message.error(err.message);
    }
  };

  return (
    <div>
      {/* main layout  */}
      <div className="grid grid-cols-1 sm:grid-cols-7 h-[100vh]">
        {/* login colum */}
        <div className="col-span-2 lg:p-7 shadow-2xl p-4 ">
          <div className="flex justify-center mb-5">
            <div className="flex items-center lg:my-5 my-3">
              <Link href="/">
                <Image
                  src="https://res.cloudinary.com/dn163fium/image/upload/v1702705615/usmjqqtg18c9j7bnwh4f.png"
                  height={52}
                  width={52}
                  alt="Dino-HR-Logo"
                />
              </Link>
              <h1 className="pl-2 text-2xl lg:text-4xl font-bold text-gradient">
                Dino
              </h1>
            </div>
          </div>
          {isLoading || loading ? (
            <div className="flex justify-center items-center h-[450px]">
              <div className="animate-spin rounded-full border-t-4 border-[#00674A] border-solid h-16 w-16"></div>
            </div>
          ) : (
            <>
              <Form
                submitHandler={onSubmit}
                defaultValues={defaultValues}
                resolver={yupResolver(loginSchema)}
              >
                <div>
                  <FormInput
                    name="office_email"
                    type="email"
                    size="large"
                    label="Email address"
                  />
                </div>
                <div>
                  <FormInput
                    name="password"
                    type="password"
                    size="large"
                    label="Password"
                  />
                  <div className="flex justify-end mt-1">
                    <a
                      rel="noopener noreferrer"
                      href="/auth/forgotPassword"
                      className="text-xs hover:underline text-gray-400 hover:text-gray-800"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="flex center mt-5">
                  <button
                    type="submit"
                    className="relative mx-10 w-full inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#00674A] rounded-xl group"
                  >
                    <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#124436] rounded group-hover:-mr-4 group-hover:-mt-4">
                      <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#0d3a2d] rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                    <span className="relative text-center w-full text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                      Sign In
                    </span>
                  </button>
                </div>
                <div className="flex justify-center mt-16 mb-3">
                  <div className="inline-flex items-center justify-center w-full">
                    <span className="pr-2">Credentials</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-key text-[#00674A]"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0z" />
                      <path d="M15 9h.01" />
                    </svg>
                  </div>
                </div>

                <div className="flex justify-center cursor-pointer">
                  <span className="inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm">
                    <p
                      onClick={() =>
                        setDefaultValues({
                          office_email: "admin@dino.com",
                          password: "Dino-123",
                        })
                      }
                      className="inline-block px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:relative"
                    >
                      Admin
                    </p>
                    <p
                      onClick={() =>
                        setDefaultValues({
                          office_email: "super@admin.com",
                          password: "Dino-123",
                        })
                      }
                      className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 bg-gray-50 focus:relative"
                    >
                      Super Admin
                    </p>
                    <p
                      onClick={() =>
                        setDefaultValues({
                          office_email: "employee@dino.com",
                          password: "Dino-123",
                        })
                      }
                      className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:relative"
                    >
                      Employee
                    </p>
                  </span>
                </div>
              </Form>
            </>
          )}
        </div>

        {/* text colum  */}
        <LoginSide />
      </div>
    </div>
  );
};

export default LoginPage;
