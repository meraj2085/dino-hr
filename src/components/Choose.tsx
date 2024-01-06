const ChooseSection = () => {
  return (
    <div className="bg-[#F3F4F6] py-10">
      <div className="max-w-[1200px] mx-auto my-10">
        <div className="mb-5 md:mb-12">
          <h1 className="text-5xl text-center font-bold leadi mb-3">
            <span className="text-gradient">Why Us</span>
          </h1>
          <p className="max-w-2xl text-center mx-auto">
            Know why you should choose us for your brand?
          </p>
        </div>
        <div className="md:grid grid-cols-3 w-fit gap-20 text-center">
          <div className="p-8">
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-message-chatbot text-[#00674A] hover:px-[1px]"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
                <path d="M9.5 9h.01" />
                <path d="M14.5 9h.01" />
                <path d="M9.5 13a3.5 3.5 0 0 0 5 0" />
              </svg>
            </div>

            <h2 className="text-2xl my-3">Wide range of support</h2>
            <p>
              We provide a wide range of support to our clients. We are always
              24/7 ready to help you.
            </p>
          </div>
          <div className="p-8">
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-shield-check text-[#00674A] hover:px-[1px]"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06" />
                <path d="M15 19l2 2l4 -4" />
              </svg>
            </div>
            <h2 className="text-2xl my-3">Trusted by our clients</h2>
            <p>
              We have a large number of clients who are happy with our services.
              We provide the best services to our clients.
            </p>
          </div>
          <div className="p-8">
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-device-mobile-heart text-[#00674A] hover:px-[1px]"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M11.5 21h-3.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v6" />
                <path d="M11 4h2" />
                <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z" />
              </svg>
            </div>
            <h2 className="text-2xl my-3">Fast & easy UI/UX</h2>
            <p>
              Fast and easy to use. You can easily use this HRMS software. Our
              UI is very simple and easy to use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseSection;
