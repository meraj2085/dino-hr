"use client";
import { Button, message } from "antd";
import vectorImg from "../../../../public/assets/animated-hr.gif";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useChangePasswordMutation } from "@/redux/api/authApi";
import { getUserInfo } from "@/services/auth.service";
import LoginSide from "@/app/sharedComponents/LoginSide";

type FormValues = {
  old_password: string;
  new_password: string;
  confirm_new_password: string;
};

const ChangePassword = () => {
  const router = useRouter();
  const [changePassword, { isLoading }] = useChangePasswordMutation();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      if (data.new_password !== data.confirm_new_password) {
        message.error("Password does not match");
        return;
      }
      const res = await changePassword(data).unwrap();
      if (res._id) {
        message.success("Password changed successfully");
        const { user_type } = getUserInfo() as any;
        router.push(`/dashboard/${user_type}`);
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  return (
    <div>
      {/* main layout  */}
      <div className="grid grid-cols-1 sm:grid-cols-7 h-[100vh] ">
        {/* login colum */}
        <div className="col-span-2 lg:p-7 lg:mb-10 ml-4 p-4">
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
          {isLoading ? (
            <div className="flex justify-center items-center h-[450px]">
              <div className="animate-spin rounded-full border-t-4 border-[#00674A] border-solid h-16 w-16"></div>
            </div>
          ) : (
            <>
              <Form
                submitHandler={onSubmit}
                // resolver={yupResolver(loginSchema)}
              >
                <div>
                  <FormInput
                    name="old_password"
                    type="password"
                    size="large"
                    label="Old Password"
                  />
                </div>
                <div className="mt-2">
                  <FormInput
                    name="new_password"
                    type="password"
                    size="large"
                    label="New Password"
                  />
                </div>
                <div className="mt-2">
                  <FormInput
                    name="confirm_new_password"
                    type="password"
                    size="large"
                    label="Confirm Password"
                  />
                </div>
                <div className="flex justify-left mt-5">
                  <Button shape="default" htmlType="submit">
                    Change Password
                  </Button>
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

export default ChangePassword;
