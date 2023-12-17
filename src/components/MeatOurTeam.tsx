import Image from "next/image";
import profileImg from "../../public/assets/profile.png";
import {
  FacebookFilled,
  GithubFilled,
  LinkedinFilled,
} from "@ant-design/icons";
import Link from "next/link";

const TeamMemberDetails = [
  {
    name: "John Doe",
    designation: "Full Stack Developer",
    image: profileImg,
    social: {
      facebook: "https://www.facebook.com",
      linkedin: "https://www.linkedin.com",
      github: "https://www.github.com",
    },
  },
  {
    name: "John Doe",
    designation: "Full Stack Developer",
    image: profileImg,
    social: {
      facebook: "https://www.facebook.com",
      linkedin: "https://www.linkedin.com",
      github: "https://www.github.com",
    },
  },
  {
    name: "John Doe",
    designation: "Full Stack Developer",
    image: profileImg,
    social: {
      facebook: "https://www.facebook.com",
      linkedin: "https://www.linkedin.com",
      github: "https://www.github.com",
    },
  },
  {
    name: "John Doe",
    designation: "Full Stack Developer",
    image: profileImg,
    social: {
      facebook: "https://www.facebook.com",
      linkedin: "https://www.linkedin.com",
      github: "https://www.github.com",
    },
  },
  {
    name: "John Doe",
    designation: "Full Stack Developer",
    image: profileImg,
    social: {
      facebook: "https://www.facebook.com",
      linkedin: "https://www.linkedin.com",
      github: "https://www.github.com",
    },
  },
  {
    name: "John Doe",
    designation: "Full Stack Developer",
    image: profileImg,
    social: {
      facebook: "https://www.facebook.com",
      linkedin: "https://www.linkedin.com",
      github: "https://www.github.com",
    },
  },
];

const TeamMember = ({
  name,
  designation,
  image,
  social,
  desktopFlipped = false,
  mobileFlipped = false,
}: {
  name: string;
  designation: string;
  image: any;
  social: {
    facebook: string;
    linkedin: string;
    github: string;
  };
  desktopFlipped?: boolean;
  mobileFlipped?: boolean;
}) => {
  return (
    <div
      className={`flex justify-center  ${
        !desktopFlipped ? "md:justify-start" : "md:justify-end"
      }`}
    >
      <Image
        className={`rounded-full max-w-[150px] border-8 border-white shadow-lg shadow-[#6ec7567d] z-10 ${
          !desktopFlipped ? "md:order-first" : "md:order-last"
        } ${!mobileFlipped ? "order-first" : "order-last"}`}
        src={image}
        width={0}
        height={0}
        alt="Profile image"
      />
      <div
        className={`flex flex-col justify-center z-0 ${
          !desktopFlipped ? "md:order-last" : "md:order-first"
        } ${!mobileFlipped ? "order-last" : "order-first"}`}
      >
        <div
          className={`py-2 px-14 md:px-10 lg:px-20 shadow-lg shadow-[#6ec7567d] rounded-xl ${
            !desktopFlipped
              ? "md:ml-[-30px] md:text-start"
              : "md:mr-[-30px] md:text-end"
          } ${
            !mobileFlipped
              ? "ml-[-30px] text-start"
              : "mr-[-30px] text-end"
          }`}
        >
          <h1 className="text-lg font-bold">{name}</h1>
          <h2 className="mb-2">{designation}</h2>
          <div
            className={`flex gap-5 ${
              !desktopFlipped
                ? "md:justify-start"
                : "md:justify-end"
            } ${
              !mobileFlipped
                ? "justify-start"
                : "justify-end"
            }`}
          >
            <Link href={social.github}>
              <GithubFilled
                className={`text-gray-500 hover:text-black  transition-transform duration-300 transform hover:scale-125`}
                style={{ fontSize: "18px" }}
              />
            </Link>
            <Link href={social.linkedin}>
              <LinkedinFilled
                className={`text-gray-500 hover:text-blue-700  transition-transform duration-300 transform hover:scale-125`}
                style={{ fontSize: "18px" }}
              />
            </Link>
            <Link href={social.facebook}>
              <FacebookFilled
                className={`text-gray-500 hover:text-blue-800  transition-transform duration-300 transform hover:scale-125`}
                style={{ fontSize: "18px" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const MeatOurTeam = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-5 my-40">
      <h1 className="text-5xl font-extrabold text-center">Meat Our Team</h1>
      <p className="text-center max-w-2xl mx-auto mt-4 mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatum, voluptate quibusdam, quia voluptas, eaque aperiam
        necessitatibus quos doloribus quod voluptatem
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-x-10 md:gap-y-24 lg:gap-24">
        {TeamMemberDetails.map((member, index) => {
          const isMobileFlipped = index % 2 !== 0;
          const isDesktopFlipped = index % 4 >= 2;
          //   console.log(isDesktopFlipped, isMobileFlipped);
          return (
            <TeamMember
              key={index}
              name={member.name}
              designation={member.designation}
              image={member.image}
              social={member.social}
              desktopFlipped={isDesktopFlipped}
              mobileFlipped={isMobileFlipped}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MeatOurTeam;
