import Image from "next/image";
import aboutUsImg from "../../public/assets/about-us.png";

const AboutUs = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-5 my-40">
      <div className="mb-5 md:mb-8">
        <h1 className="text-4xl  font-bold text-center mb-3">Our Story</h1>
        <p className="max-w-2xl text-center mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quae, atque quia, voluptatem voluptates dolorum.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
        <div>
          <Image src={aboutUsImg} alt="about img" className="rounded-lg shadow-xl"/>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl text-center md:text-start mb-2 md:mb-5">
            How We Started
          </h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quae, atque quia, voluptatem voluptates dolorum
            necessitatibus voluptas quod quibusdam consequatur? Quisquam
            voluptatum, quae, atque quia,{" "}
            <span className="hidden lg:block">
              voluptatem voluptates dolorum necessitatibus voluptas quod
              quibusdam consequatur? voluptatum, quae, atque quia, voluptatem
              voluptates dolorum necessitatibus voluptas quod quibusdam
              consequatur?
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
