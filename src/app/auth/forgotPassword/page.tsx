"use client";
import { Button, message } from "antd";
import vectorImg from "../../../../public/assets/animated-hr.gif";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  useResetPasswordMutation,
  useSendOtpMutation,
  useVerifyOtpMutation,
} from "@/redux/api/resetPasswordApi";

type mailFormValues = {
  office_email: string;
};
type otpFormValues = {
  office_email: string;
  otp: string;
};
type passwordFormValues = {
  password: string;
};

const ResetPassword = () => {
  const [seconds, setSeconds] = useState(0);
  const [officeEmail, setOfficeEmail] = useState("");
  const [isVerifiedOtp, setIsVerifiedOtp] = useState(false);

  const router = useRouter();

  const [sendOtp, { isLoading: isSendOtpLoading }] = useSendOtpMutation();
  const [verifyOtp, { isLoading: isVerifyOtpLoading }] = useVerifyOtpMutation();
  const [ResetPassword, { isLoading: isResetPasswordLoading }] =
    useResetPasswordMutation();

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (officeEmail && !isVerifiedOtp && seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0 && officeEmail) {
      // setOfficeEmail("");
      message.error("OTP expired");
      // setSeconds(60); // Reset the timer to 60 seconds
    }

    return () => clearInterval(timer); // Cleanup the timer on component unmount
  }, [isVerifiedOtp, officeEmail, seconds]);

  // console.log(seconds, officeEmail, isVerifiedOtp);
  //send otp
  const onMailSubmit: SubmitHandler<mailFormValues> = async (data: any) => {
    try {
      // console.log(data);
      const res = await sendOtp(data).unwrap();
      console.log(res);
      if (res?._id) {
        setOfficeEmail(data.office_email);
        message.success("We've sent an OTP on your mail! Please check.");
        setSeconds(30);
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  //verify otp
  const onOTPSubmit: SubmitHandler<otpFormValues> = async (data: any) => {
    try {
      // console.log(data);
      const res = await verifyOtp({
        ...data,
        office_email: officeEmail,
      }).unwrap();
      if (res?.isVerified) {
        setIsVerifiedOtp(true);
      }
      // console.log(res);
    } catch (err: any) {
      message.error(err.message);
      if (err.message === "OTP expired") {
        setOfficeEmail("");
      }
    }
  };

  //reset password
  const onPasswordSubmit: SubmitHandler<passwordFormValues> = async (
    data: any
  ) => {
    try {
      const { password, confirm_password } = data;
      if (password !== confirm_password) {
        message.error("Password does not match");
        return;
      }
      const res = await ResetPassword({
        password,
        office_email: officeEmail,
      }).unwrap();
      if (res?._id) {
        message.success("Password reset successfully!");
        router.push("/auth/login");
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
          {isSendOtpLoading || isVerifyOtpLoading || isResetPasswordLoading ? (
            <div className="flex justify-center items-center h-[450px]">
              <div className="animate-spin rounded-full border-t-4 border-[#00674A] border-solid h-16 w-16"></div>
            </div>
          ) : (
            <>
              <h1 className="text-3xl font-normal text-[#00684a] mb-4">
                Forgot Password
              </h1>
              {!officeEmail && (
                <Form submitHandler={onMailSubmit}>
                  <div>
                    <FormInput
                      name="office_email"
                      type="email"
                      size="large"
                      label="Email"
                      placeholder="Enter your office mail"
                    />
                  </div>
                  <div className="flex justify-left mt-3">
                    <Button shape="default" htmlType="submit">
                      Submit
                    </Button>
                  </div>
                </Form>
              )}
              {officeEmail && !isVerifiedOtp && (
                <Form submitHandler={onOTPSubmit}>
                  <div>
                    <FormInput
                      name="otp"
                      size="large"
                      label="OTP"
                      placeholder="Enter OTP"
                    />
                    {!!seconds && (
                      <p className="text-xs text-gray-400 text-end">
                        {seconds} seconds left
                      </p>
                    )}
                  </div>
                  <div className="flex justify-left mt-3">
                    {seconds > 0 ? (
                      <Button shape="default" htmlType="submit">
                        Verify
                      </Button>
                    ) : (
                      <Button
                        shape="default"
                        onClick={() =>
                          onMailSubmit({ office_email: officeEmail })
                        }
                      >
                        Resend
                      </Button>
                    )}
                  </div>
                </Form>
              )}
              {officeEmail && isVerifiedOtp && (
                <Form submitHandler={onPasswordSubmit}>
                  <div>
                    <FormInput
                      name="password"
                      type="password"
                      size="large"
                      label="New Password"
                      placeholder="Enter new password"
                    />
                  </div>
                  <div>
                    <FormInput
                      name="confirm_password"
                      type="password"
                      size="large"
                      label="Confirm Password"
                      placeholder="Enter new password again"
                    />
                  </div>
                  <div className="flex justify-left mt-3">
                    <Button shape="default" htmlType="submit">
                      Submit
                    </Button>
                  </div>
                </Form>
              )}
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

export default ResetPassword;
