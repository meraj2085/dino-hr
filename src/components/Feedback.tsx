"use client";

import Image from "next/image";
import temp from "../../public/assets/register-pana.png";
import Form from "./Forms/Form";
import FormInput from "./Forms/FormInput";
import FormTextArea from "./Forms/FormTextArea";

const Feedback = () => {
  const onSubmit = async (values: any) => {
    try {
      console.log(values);
    } catch (err: any) {
      console.error(err.message);
    }
  };
  return (
    <div className="max-w-[1200px] mx-auto px-5 my-40 ">
      <div className="mb-5 md:mb-8">Give us your feedback</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
        <div className="hidden md:block">
          <Image src={temp} alt="about img" />
        </div>
        <div className="">
          <div className="max-w-lg mx-auto px-5 bg-gray-100 text-gray-800 ">
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
