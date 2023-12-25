"use client";

import Form from "@/components/Forms/Form";
import FormInput from "../../../components/Forms/FormInput";
import FormTextArea from "../../../components/Forms/FormTextArea";
import Image from "next/image";
import ContactUsImg from "../../../../public/assets/ContactUsImg.png";
import FormTimePicker from "@/components/Forms/FormTimePicker";
import FormDatePicker from "@/components/Forms/FormDatePicker";

const BookCall = () => {
  const onSubmit = async (values: any) => {
    try {
      console.log(values);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div className="mt-20 text-gray-800">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-4xl lg:font-bold ">
          Book A Call
        </h1>
        <p className="max-w-lg mx-auto mt-4 text-gray-500">
          We are here to help you. Book a call with us to know more about our
          services.
        </p>
      </div>
      <section className="pb-16 pt-5 max-w-[1200px] mx-auto">
        <div className="grid gap-8 grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="p-4">
            <Image
              src={ContactUsImg}
              alt="Background Image"
              width={400}
              height={400}
              className="rounded-lg mt-12 mb-14"
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
                <div className="mb-3 md:mr-5">
                  <label className="block">
                    <FormInput
                      name="fullName"
                      type="text"
                      size="large"
                      label="Full Name"
                    />
                  </label>
                </div>
                <div className="mb-3 md:ml-0">
                  <label className="block">
                    <FormInput
                      name="mobileNumber"
                      type="text"
                      size="large"
                      label="Mobile Number"
                    />
                  </label>
                </div>
              </div>

              <label className="block mb-3">
                <FormInput
                  name="company_name"
                  type="text"
                  size="large"
                  label="Company Name (If Applicable)"
                />
              </label>

              <label className="block mb-3">
                <FormInput
                  name="email"
                  type="email"
                  size="large"
                  label="Email"
                />
              </label>

              <div>
                <div className="mb-3">
                  <label className="block">
                    <FormDatePicker
                      name="appointment_date"
                      label="Appointment date"
                      size="large"
                    />
                  </label>
                </div>
                <div className="mb-3">
                  <label className="block">
                    <FormTimePicker
                      name="appointment_time"
                      label="Appointment time"
                    />
                  </label>
                </div>
              </div>

              <label className="block mb-3">
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
                I agree to the storage of my data
              </span>
              <div className="flex justify-start mt-4">
                <button className="rounded-md bg-[#00674A] px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-green-400 transition duration-300">
                  Book Call
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
