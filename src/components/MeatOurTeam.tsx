import Image from "next/image";
import profileImg from "../../public/assets/profile.png";
import {
  FacebookFilled,
  GithubFilled,
  LinkedinFilled,
} from "@ant-design/icons";
import Link from "next/link";

const TeamMember = ({
  name,
  designation,
  image,
  social,
  reversed = false,
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
}) => {
  return (
    <div className={`flex  ${!reversed ? "justify-start" : "justify-end"}`}>
      <Image
        className={`rounded-full max-w-[150px] border-8 border-white shadow-lg shadow-[#6ec7567d] z-0 ${
          !reversed ? "order-first" : "order-last"
        }`}
        src={image}
        width={0}
        height={0}
        alt="Profile image"
      />
      <div
        className={`flex flex-col justify-center z-10 ${
          !reversed ? "order-last" : "order-first"
        }`}
      >
        <div
          className={`py-2 min-w-[290px] bg-white shadow-lg shadow-[#6ec7567d] rounded-xl ${
            !reversed
              ? "ml-[-30px] pl-12 text-start"
              : "mr-[-30px] pr-12 text-end"
          }`}
        >
          <h1 className="text-lg font-bold">{name}</h1>
          <h2 className="mb-2">{designation}</h2>
          <Link href={social.github}>
            <GithubFilled
              className={`text-gray-500 hover:text-black ${
                reversed ? "ml-6" : "mr-6"
              } transition-transform duration-300 transform hover:scale-110`}
              style={{ fontSize: "18px" }}
            />
          </Link>
          <Link href={social.linkedin}>
            <LinkedinFilled
              className={`text-gray-500 hover:text-blue-700 ${
                reversed ? "ml-6" : "mr-6"
              } transition-transform duration-300 transform hover:scale-110`}
              style={{ fontSize: "18px" }}
            />
          </Link>
          <Link href={social.facebook}>
            <FacebookFilled
              className={`text-gray-500 hover:text-blue-800 ${
                reversed ? "ml-6" : "mr-6"
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
      <h1>Meat Our Team</h1>
      <div className="grid grid-cols-2 gap-24">
        <TeamMember
          name="John Doe"
          designation="Full Stack Developer"
          image={profileImg}
          social={{
            facebook: "https://www.facebook.com",
            linkedin: "https://www.linkedin.com",
            github: "https://www.github.com",
          }}
        />
        <TeamMember
          name="John Doe"
          designation="Full Stack Developer"
          image={profileImg}
          social={{
            facebook: "https://www.facebook.com",
            linkedin: "https://www.linkedin.com",
            github: "https://www.github.com",
          }}
        />
        <TeamMember
          name="John Doe"
          designation="Full Stack Developer"
          image={profileImg}
          social={{
            facebook: "https://www.facebook.com",
            linkedin: "https://www.linkedin.com",
            github: "https://www.github.com",
          }}
          reversed
        />
        <TeamMember
          name="John Doe"
          designation="Full Stack Developer"
          image={profileImg}
          social={{
            facebook: "https://www.facebook.com",
            linkedin: "https://www.linkedin.com",
            github: "https://www.github.com",
          }}
          reversed
        />
        <TeamMember
          name="John Doe"
          designation="Full Stack Developer"
          image={profileImg}
          social={{
            facebook: "https://www.facebook.com",
            linkedin: "https://www.linkedin.com",
            github: "https://www.github.com",
          }}
        />
        <TeamMember
          name="John Doe"
          designation="Full Stack Developer"
          image={profileImg}
          social={{
            facebook: "https://www.facebook.com",
            linkedin: "https://www.linkedin.com",
            github: "https://www.github.com",
          }}
        />
      </div>
    </div>
  );
};

export default MeatOurTeam;
