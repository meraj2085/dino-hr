"use client";

import Image from "next/image";
import FeedbackImg from "../../public/assets/Feedback.png";
import Form from "./Forms/Form";
import FormInput from "./Forms/FormInput";
import FormTextArea from "./Forms/FormTextArea";
import { useRouter } from "next/navigation";
import { useAddFeedbackMutation } from "@/redux/api/feedbackApi";
import { SubmitHandler } from "react-hook-form";
import { message } from "antd";

const Feedback = () => {
  const router = useRouter();
  const [addFeedback] = useAddFeedbackMutation();

  type FormValues = {
    name: string;
    email: string;
    feedback: string;
  };

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const response = await addFeedback(data).unwrap();
      if (response?._id) {
        message.success("Thank you for your feedback");
        router.push("/");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto px-5 mt-16 md:mt-20 lg:mt-24 mb-28">
      <div className="mb-5 md:mb-12">
        <h1 className="text-5xl text-center font-bold leadi mb-3">
          <span className="text-gradient">Feedback</span>
        </h1>
        <p className="max-w-2xl text-center mx-auto">
          We&apos;d love to hear service feedback from you
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
        <div className="hidden md:flex flex-col justify-center align-middle">
          <div>
            <Image src={FeedbackImg} alt="about img" />
          </div>
        </div>
        <div className="mt-10">
          <div className="max-w-lg mx-auto px-5 bg-gray-100 text-gray-800 pt-10 pb-5 rounded-md">
            <Form submitHandler={onSubmit}>
              <label className="block">
                <FormInput name="name" type="text" size="large" label="Name" />
              </label>
              <label className="block mt-5">
                <FormInput
                  name="email"
                  type="email"
                  size="large"
                  label="Email"
                />
              </label>
              <label className="block mt-5">
                <FormTextArea name="feedback" label="Your Feedback" />
              </label>
              <div className="flex justify-center mt-4">
                <button className="rounded-md bg-[#00674A] px-5 py-2.5 text-sm font-medium text-white shadow">
                  Submit
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
