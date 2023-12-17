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
  reversed = false,
  mobile = false,
}: {
  name: string;
  designation: string;
  image: any;
  social: {
    facebook: string;
    linkedin: string;
    github: string;
  };
  reversed?: boolean;
  mobile?: boolean;
}) => {
  return (
    <div
      className={`flex justify-center  ${
        !reversed ? "md:justify-start" : "md:justify-end"
      }`}
    >
      <Image
        className={`rounded-full max-w-[150px] border-8 border-white shadow-lg shadow-[#6ec7567d] z-10 ${
          !reversed ? "md:order-first" : "md:order-last"
        } ${!mobile ? "order-first" : "order-last"}`}
        src={image}
        width={0}
        height={0}
        alt="Profile image"
      />
      <div
        className={`flex flex-col justify-center z-0 ${
          !reversed ? "md:order-last" : "md:order-first"
        } ${!mobile ? "order-last" : "order-first"}`}
      >
        <div
          className={`py-2 min-w-[290px] shadow-lg shadow-[#6ec7567d] rounded-xl ${
            !reversed
              ? "md:ml-[-30px] md:pl-12 md:text-start"
              : "md:mr-[-30px] md:pr-12 md:text-end"
          } ${
            !mobile
              ? "ml-[-30px] pl-12 text-start"
              : "mr-[-30px] pr-12 text-end"
          }`}
        >
          <h1 className="text-lg font-bold">{name}</h1>
          <h2 className="mb-2">{designation}</h2>
          <Link href={social.github}>
            <GithubFilled
              className={`text-gray-500 hover:text-black ${
                reversed ? "md:ml-6" : "md:mr-6"
              } ${
                mobile ? "ml-6" : "mr-6"
              } transition-transform duration-300 transform hover:scale-110`}
              style={{ fontSize: "18px" }}
            />
          </Link>
          <Link href={social.linkedin}>
            <LinkedinFilled
              className={`text-gray-500 hover:text-blue-700 ${
                reversed ? "md:ml-6" : "md:mr-6"
              } ${
                mobile ? "ml-6" : "mr-6"
              } transition-transform duration-300 transform hover:scale-110`}
              style={{ fontSize: "18px" }}
            />
          </Link>
          <Link href={social.facebook}>
            <FacebookFilled
              className={`text-gray-500 hover:text-blue-800 ${
                reversed ? "md:ml-6" : "md:mr-6"
              } ${
                mobile ? "ml-6" : "mr-6"
              } transition-transform duration-300 transform hover:scale-110`}
              style={{ fontSize: "18px" }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

const MeatOurTeam = () => {
  return (
    <div className="max-w-[1200px] mx-auto my-40">
      <h1 className="text-5xl font-extrabold text-center">Meat Our Team</h1>
      <p className="text-center max-w-2xl mx-auto mt-4 mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatum, voluptate quibusdam, quia voluptas, eaque aperiam
        necessitatibus quos doloribus quod voluptatem
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
        {TeamMemberDetails.map((member, index) => {
          const isMobile = index % 2 !== 0;
          const isReversed = index % 4 >= 2;
        //   console.log(isReversed, isMobile);
          return (
            <TeamMember
              key={index}
              name={member.name}
              designation={member.designation}
              image={member.image}
              social={member.social}
              reversed={isReversed}
              mobile={isMobile}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MeatOurTeam;
