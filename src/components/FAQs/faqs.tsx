"use client";
const FAQsSection = () => {
  const dummyData = [
    {
      fQuestion: " What makes Pocket HRMS different from other HRMS platforms?",
      fAns: "The main differentiating factor of Pocket HRMS is the ability to be exceptionally These factors help us remain ahead of the curve with advanced technology while maintaining high cost efficiency as you pay only for the modules you use.",
    },
    {
      fQuestion: "How does Pocket HRMS make sense financially?",
      fAns: "  With Pocket HRMS, you automate the numerous administrative HR processes, saving their time and efforts. Additionally, with the  help of AI, Pocket HRMS can keep your employees engaged, resulting in a highly productive workforce. Moreover, there are no downtime or high hardware maintenance costs since Pocket HRMS is a cloud-based system.",
    },
    {
      fQuestion:
        "What are the hidden charges in using the trial version of Pocket HRMS?",
      fAns: "There are absolutely no charges for using the full version of Pocket HRMS during the trial period. We do not even ask for your financial information while providing you free access to our software and its highly innovative modules. We believe in complete transparency, andhence, you can use Pocket HRMS to your heart’s content during thetrial period and get acquainted with all of its innovative features  and advanced modules.",
    },
    {
      fQuestion: " Does Pocket HRMS provide a mobile app for remote access?",
      fAns: "Yes, in this digital age, any future-proof software should be mobile-friendly. Hence, even though our ESS portal works via mobile browsers, we have developed a mobile app for Android and iOS mobile platforms. You can mark your attendance, register leave, on-duty requests, approve or reject them, and view your employment details with the dedicated mobile app. Experience Next-Gen HRMS Features Now! Get Started Today Copyright 2022 © Pocket HRMS – All Rights Reserved.",
    },
  ];
  return (
    <div className="max-w-[1200px]  mx-auto my-20">
      <div className="text-center py-5 mb-5">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-4xl lg:font-bold ">
          frequently asked questions
        </h1>
      </div>
      <div className="space-y-4">
        {dummyData?.map((data, index) => (
          <details
            key={index}
            className="group border-s-4 border-[#00674A] bg-gray-100 p-6 [&_summary::-webkit-details-marker]:hidden"
            open={index === 0 ? true : false}
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-lg  text-gray-900 font-bold">
                {data?.fQuestion}
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700">{data?.fAns}</p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default FAQsSection;
