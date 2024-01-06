import Image from "next/image";
import aboutUsImg from "../../public/assets/about-us.png";

const AboutUs = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-5 mt-14 lg:mt-20">
      <div className="mb-5 md:mb-12">
        <h1 className="text-5xl text-center font-bold leadi mb-3">
          <span className="text-gradient">About Us</span>
        </h1>
        <p className="max-w-2xl text-center mx-auto">
          Know more about Dino HR and how we can help you.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
        <div>
          <Image
            src={aboutUsImg}
            alt="about img"
            className="rounded-lg shadow-xl"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-justify">
            Simplify HR tasks with Dino, your all in one HR management system.
            At the heart of our platform is a team of dedicated professionals
            who envision a workplace where HR processes are not just streamlined
            but are catalysts for organizational success.
            <span className="hidden lg:block mt-5">
              As pioneers in the realm of HR innovation, we understand the
              intricate balance between people and technology. Our mission is to
              empower businesses with a comprehensive HR solution that goes
              beyond mere management—it&apos;s about fostering a culture of
              collaboration, growth, and employee well-being.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
