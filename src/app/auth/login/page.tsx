"use client";
import { Button, message } from "antd";
import vectorImg from "../../../../public/assets/vector.png";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { loginSchema } from "@/schema/login";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";

type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await userLogin({ ...data }).unwrap();
      if (res?.accessToken) {
        router.push("/");
        message.success("User logged in successfully!");
      } else {
        message.error("Email or password is incorrect!");
      }
      storeUserInfo({ accessToken: res?.accessToken });
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div>
      {/* main layout  */}
      <div className="grid grid-cols-1 sm:grid-cols-7 h-[100vh] ">
        {/* login colum */}
        <div className="col-span-2 p-8 ml-2 mb-10">
          <div className="flex items-center my-5">
            <Link className="" href="/">
              <Image
                src="https://res.cloudinary.com/dn163fium/image/upload/v1702705615/usmjqqtg18c9j7bnwh4f.png"
                height={52}
                width={52}
                alt="Dino HR Logo"
              />
            </Link>
            <h1 className="pl-2 text-4xl font-bold text-[#00684a]">Dino</h1>
          </div>
          <h1 className="text-3xl font-normal text-[#00684a] mb-4">
            Log in to your account
          </h1>
          <Form submitHandler={onSubmit} resolver={yupResolver(loginSchema)}>
            <div>
              <FormInput
                name="email"
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
        </div>

        {/* text colum  */}
        <div className=" hidden sm:block col-span-5 bg-[#00684a] ">
          <div className="flex ">
            <div className="text-white my-10 ml-12">
              <h1 className="text-3xl font-bold my-4">
                Unlock the power of AI <br /> with Vector Search
              </h1>
              <p className="text-md mb-4">
                Introducing Vector Search. Build intelligent applications
                powered by semantic search and generative AI over any type of
                data.
              </p>
              <Link className="underline" href="/">
                Learn more
              </Link>
            </div>

            {/* img colum */}
            <Image className="h-[100vh]"
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