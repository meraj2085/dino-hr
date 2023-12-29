"use client";
import { Button, message } from "antd";
import vectorImg from "../../../../public/assets/animated-hr.gif";
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

type FormValues = {
  office_email: string;
  password: string;
};

const LoginPage = () => {
  const [userLogin, { isLoading }] = useUserLoginMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await userLogin({ ...data }).unwrap();
      if (res?.accessToken) {
        storeUserInfo({ accessToken: res?.accessToken });
        const { user_type } = getUserInfo() as any;
        router.push(`/dashboard/${user_type}`);
        message.success("User logged in successfully!");
      } else {
        message.error("Email or password is incorrect!");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div>
      {/* main layout  */}
      <div className="grid grid-cols-1 sm:grid-cols-7 h-[100vh] ">
        {/* login colum */}
        <div className="col-span-2 lg:p-7 lg:mb-10 ml-4 p-4">
          <div className="flex items-center lg:my-5 my-3">
            <Link href="/">
              <Image
                src="https://res.cloudinary.com/dn163fium/image/upload/v1702705615/usmjqqtg18c9j7bnwh4f.png"
                height={52}
                width={52}
                alt="Dino-HR-Logo"
              />
            </Link>
            <h1 className="pl-2 text-2xl lg:text-4xl font-bold text-[#00684a]">
              Dino
            </h1>
          </div>
          {isLoading ? (
            <div className="flex justify-center items-center h-[450px]">
              <div className="animate-spin rounded-full border-t-4 border-[#00674A] border-solid h-16 w-16"></div>
            </div>
          ) : (
            <>
              <h1 className="text-3xl font-normal text-[#00684a] mb-4">
                Log in to your account
              </h1>
              <Form
                submitHandler={onSubmit}
                resolver={yupResolver(loginSchema)}
              >
                <div>
                  <FormInput
                    name="office_email"
                    type="email"
                    size="large"
                    label="Email Address"
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
                      href="#"
                      className="text-xs hover:underline text-gray-400 hover:text-gray-800"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="flex justify-left">
                  <Button shape="default" htmlType="submit">
                    Login
                  </Button>
                </div>
              </Form>
            </>
          )}
        </div>

        {/* text colum  */}
        <div className=" hidden sm:block col-span-5 bg-[#00684a] ">
          <div className="flex ">
            <div className="text-white my-10 ml-12">
              <h1 className="text-xl lg:text-3xl font-bold my-4">
                Simplify HR tasks using Dino HR
              </h1>
              <p className="text-md mb-4">
                All in one human resource management system. From effortlessly
                managing teams to managing employee salaries, Dino simplifies
                every aspect of HRMS.
              </p>
              <Link className="underline" href="/">
                Learn more
              </Link>
            </div>

            {/* img colum */}
            <Image
              className="h-[100vh]"
              src={vectorImg}
              width={586}
              alt="Dino HR Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
