const Overview = () => {
  return (
    <section className="bg-[#F3F4F6]">
      <div className="px-6 py-10 space-y-8 max-w-[1200px] mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-4xl lg:font-bold ">
            Company <span className="text-[#8484BD]">Overview</span>
          </h1>
          <p className="max-w-lg mx-auto mt-4 text-gray-500">
            Know about our statistics
          </p>
        </div>
        <div>
          <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <p className="text-4xl font-bold leadi lg:text-6xl">57+</p>
              <p className="text-sm sm:text-base">Clients</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <p className="text-4xl font-bold leadi lg:text-6xl">200+</p>
              <p className="text-sm sm:text-base">Projects completed</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <p className="text-4xl font-bold leadi lg:text-6xl">10+</p>
              <p className="text-sm sm:text-base">Active services</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <p className="text-4xl font-bold leadi lg:text-6xl">24</p>
              <p className="text-sm sm:text-base">Open hours</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <p className="text-4xl font-bold leadi lg:text-6xl">12</p>
              <p className="text-sm sm:text-base">Years of experience</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <p className="text-4xl font-bold leadi lg:text-6xl">10+</p>
              <p className="text-sm sm:text-base">Working Staffs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
