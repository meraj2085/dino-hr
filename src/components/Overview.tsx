const Overview = () => {
  return (
    <section className="bg-[#F3F4F6] mt-16">
      <div className="px-6 py-10 space-y-8 max-w-[1200px] mx-auto">
        <div className="py-5">
          <h1 className="text-5xl text-center font-bold leadi mb-3">
            <span className="text-gradient">Overview</span>
          </h1>
          <p className="max-w-2xl text-center mx-auto">
            Know more about our statistics and our brands
          </p>
        </div>

        <div>
          <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <p className="text-4xl font-bold leadi lg:text-6xl">87+</p>
              <p className="text-sm sm:text-base">Clients</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <p className="text-4xl font-bold leadi lg:text-6xl">2000</p>
              <p className="text-sm sm:text-base">Active Employees</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <p className="text-4xl font-bold leadi lg:text-6xl">13+</p>
              <p className="text-sm sm:text-base">Active services</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <p className="text-4xl font-bold leadi lg:text-6xl">24</p>
              <p className="text-sm sm:text-base">Service hours</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <p className="text-4xl font-bold leadi lg:text-6xl">5</p>
              <p className="text-sm sm:text-base">Years of experience</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <p className="text-4xl font-bold leadi lg:text-6xl">10+</p>
              <p className="text-sm sm:text-base">Team Members</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
