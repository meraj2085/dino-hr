import Image from "next/image";

const TopCompanies = () => {
  return (
    <section className="bg-gray-100 my-10 mt-14 md:mt-16 lg:mt-24">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center py-10 mb-10">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-4xl lg:font-bold ">
            TRUSTED BY THE MAJOR BRANDS
          </h1>

          <p className="max-w-lg mx-auto mt-4 text-gray-500">
            Our top companies
          </p>
        </div>
        <div className="max-w-[1200px] pb-20 mx-auto grid grid-cols-2 gap-16 mb-16 text-center lg:grid-cols-6">
          <div className="flex items-center justify-center">
            <Image
              height={100}
              width={100}
              src="https://i.ibb.co/8jJfgkc/5847f8aecef1014c0b5e48af.png"
              alt="Fabemi Logo"
              className="block object-contain h-16  cursor-pointer hover:scale-110 duration-100"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              height={100}
              width={100}
              src="https://i.ibb.co/phD2q0h/5847f44acef1014c0b5e4892.png"
              alt="Spoon Logo"
              className="block object-contain h-16  cursor-pointer hover:scale-110 duration-100"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              height={100}
              width={100}
              src="https://i.ibb.co/VxGQ1Qd/5847f42bcef1014c0b5e488e.png"
              alt="Atlassian Logo"
              className="block object-contain h-16  cursor-pointer hover:scale-110 duration-100"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              height={100}
              width={100}
              src="https://i.ibb.co/Cvd50zK/5847f415cef1014c0b5e488b.png"
              alt="Z Logo"
              className="block object-contain h-16  cursor-pointer hover:scale-110 duration-100"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              height={100}
              width={100}
              src="https://i.ibb.co/7VNmQ2H/5847f3f8cef1014c0b5e4887.png"
              alt="Apple Logo"
              className="block object-contain h-16  cursor-pointer hover:scale-110 duration-100"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              height={100}
              width={100}
              src="https://i.ibb.co/SyrVKFM/5847f997cef1014c0b5e48c1.png"
              alt="Nikon Logo"
              className="block object-contain h-16  cursor-pointer hover:scale-110 duration-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCompanies;
