"use client";

import Form from "@/components/Forms/Form";
import FormInput from "./Forms/FormInput";
import FormTextArea from "./Forms/FormTextArea";
import Image from "next/image";
import bookcall from "./../../public/assets/book a call.png";

const BookCall = () => {
  const onSubmit = async (values: any) => {
    try {
      console.log(values);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div className="mt-5 bg-gray-100 text-gray-800">
      <section className="py-16 max-w-[1200px] mx-auto">
        <div className="grid gap-8 grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="p-4">
            <Image
              src={bookcall}
              alt="Background Image"
              width={300}
              height={300}
              className="rounded-lg mt-12 mb-14"
              style={{ transform: "rotate(-20deg)" }}
            />

            <div className="space-y-4">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6 text-[#00674A]"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>+88 0123456789</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6 text-[#00674A]"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Dhaka, Bangladesh, 1200</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6 text-[#00674A]"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>dinoHR.solutions@gmail.com</span>
              </p>
            </div>
          </div>
          <div className="space-y-6 p-4">
            <Form submitHandler={onSubmit}>
              <div className="flex flex-col md:flex-row">
                <div className="mb-4 md:mr-5">
                  <label className="block">
                    <FormInput
                      name="name"
                      type="text"
                      size="large"
                      label="Full Name"
                    />
                  </label>
                </div>
                <div className="mb-4 md:ml-0">
                  <label className="block">
                    <FormInput
                      name="phone_number"
                      type="text"
                      size="large"
                      label="Phone Number"
                    />
                  </label>
                </div>
              </div>

              <label className="block mt-3">
                <FormInput
                  name="compant_name"
                  type="text"
                  size="large"
                  label="Company Name (If Applicable)"
                />
              </label>
              <label className="block mt-3">
                <FormInput
                  name="email"
                  type="email"
                  size="large"
                  label="Email"
                />
              </label>
              <label className="block mt-3">
                <FormInput
                  name="subject"
                  type="text"
                  size="large"
                  label="Subject"
                />
              </label>
              <label className="block mt-3">
                <FormTextArea name="message" label="Message" />
              </label>
              <input
                type="checkbox"
                className="mr-2 mt-2 ml-0 h-4 w-4 text-green-500"
              />
              <span className="text-gray-700">
                I agree to the terms and conditions
              </span>
              <div className="flex justify-start mt-4">
                <button className="rounded-md bg-[#00674A] px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-green-400 transition duration-300">
                  Send Message
                </button>
              </div>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookCall;
