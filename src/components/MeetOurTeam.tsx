import Image from "next/image";
import profileImg from "../../public/assets/profile.png";
import {
  LinkedinFilled,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const TeamMemberDetails = [
  {
    name: "John Doe",
    description:
      "Meet John Doe, a dynamic and innovative Full Stack Developer with a passion for crafting seamless digital experiences",
    image: "https://xsgames.co/randomusers/assets/avatars/male/7.jpg",
    social: {
      linkedin: "https://www.linkedin.com",
      twitter: "https://www.twitter.com",
      instagram: "https://www.instagram.com",
    },
  },
  {
    name: "John Doe",
    description:
      "Meet John Doe, a dynamic and innovative Full Stack Developer with a passion for crafting seamless digital experiences",
    image: "https://xsgames.co/randomusers/assets/avatars/male/8.jpg",
    social: {
      linkedin: "https://www.linkedin.com",
      twitter: "https://www.twitter.com",
      instagram: "https://www.instagram.com",
    },
  },
  {
    name: "John Doe",
    description:
      "Meet John Doe, a dynamic and innovative Full Stack Developer with a passion for crafting seamless digital experiences",
    image: "https://xsgames.co/randomusers/assets/avatars/male/2.jpg",
    social: {
      linkedin: "https://www.linkedin.com",
      twitter: "https://www.twitter.com",
      instagram: "https://www.instagram.com",
    },
  },
  {
    name: "John Doe",
    description:
      "Meet John Doe, a dynamic and innovative Full Stack Developer with a passion for crafting seamless digital experiences",
    image: "https://xsgames.co/randomusers/assets/avatars/male/20.jpg",
    social: {
      linkedin: "https://www.linkedin.com",
      twitter: "https://www.twitter.com",
      instagram: "https://www.instagram.com",
    },
  },
  {
    name: "John Doe",
    description:
      "Meet John Doe, a dynamic and innovative Full Stack Developer with a passion for crafting seamless digital experiences",
    image: "https://xsgames.co/randomusers/assets/avatars/male/30.jpg",
    social: {
      linkedin: "https://www.linkedin.com",
      twitter: "https://www.twitter.com",
      instagram: "https://www.instagram.com",
    },
  },
  {
    name: "John Doe",
    description:
      "Meet John Doe, a dynamic and innovative Full Stack Developer with a passion for crafting seamless digital experiences",
    image: "https://xsgames.co/randomusers/assets/avatars/male/57.jpg",
    social: {
      linkedin: "https://www.linkedin.com",
      twitter: "https://www.twitter.com",
      instagram: "https://www.instagram.com",
    },
  },
];

const TeamMember = ({
  name,
  description,
  image,
  social,
  desktopFlipped = false,
  mobileFlipped = false,
}: {
  name: string;
  description: string;
  image: any;
  social: {
    twitter: string;
    linkedin: string;
    instagram: string;
  };
  desktopFlipped?: boolean;
  mobileFlipped?: boolean;
}) => {
  return (
    <div
      className={`flex justify-center ${
        !desktopFlipped ? "lg:justify-start" : "lg:justify-end"
      }`}
    >
      <div
        className={`${!desktopFlipped ? "lg:order-first" : "lg:order-last"} ${
          !mobileFlipped ? "order-first" : "order-last"
        } z-10 flex flex-col justify-center`}
      >
        <div className="">
          <Image
            width={300}
            height={300}
            className={`rounded-full border-8 border-white shadow-lg`}
            src={image || profileImg}
            alt="Profile image"
          />
        </div>
      </div>
      <div
        className={`flex flex-col justify-center z-0 ${
          !desktopFlipped ? "lg:order-last" : "lg:order-first"
        } ${!mobileFlipped ? "order-last" : "order-first"}`}
      >
        <div
          className={`py-2 shadow-lg rounded-xl ${
            !desktopFlipped
              ? "lg:ml-[-75px] lg:text-start lg:pl-24 lg:pr-4"
              : "lg:mr-[-75px] lg:text-end lg:pr-24 lg:pl-4"
          } ${
            !mobileFlipped
              ? "ml-[-30px] text-start pl-14 pr-4"
              : "mr-[-30px] text-end pr-14 pl-4"
          }`}
        >
          <h1 className="text-lg font-bold">{name}</h1>
          <p className="mb-2">{description}</p>
          <div
            className={`flex gap-5 ${
              !desktopFlipped ? "lg:justify-start" : "lg:justify-end"
            } ${!mobileFlipped ? "justify-start" : "justify-end"}`}
          >
            <Link href={social.linkedin}>
              <LinkedinFilled
                className={`text-gray-500 hover:text-blue-700  transition-transform duration-300 transform hover:scale-125`}
                style={{ fontSize: "18px" }}
              />
            </Link>
            <Link href={social.twitter}>
              <TwitterOutlined
                className={`text-gray-500 hover:text-sky-500 transition-transform duration-300 transform hover:scale-125`}
                style={{ fontSize: "18px" }}
              />
            </Link>
            <Link href={social.instagram}>
              <InstagramOutlined
                className={`text-gray-500 hover:text-pink-700  transition-transform duration-300 transform hover:scale-125`}
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
    <div className="max-w-[1200px] mx-auto px-5 mt-14 md:mt-16 lg:mt-24">
      <h1 className="text-5xl font-extrabold text-center">Meet Our Team</h1>
      <p className="text-center max-w-2xl mx-auto mt-4 mb-10">
        Welcome to the heart of our innovation—the brilliant minds that make up
        our dedicated team. Each member is a unique puzzle piece, contributing
        distinct skills and perspectives to the collective masterpiece we
        create.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        {TeamMemberDetails.map((member, index) => {
          const isMobileFlipped = index % 2 !== 0;
          const isDesktopFlipped = index % 4 >= 2;
          return (
            <TeamMember
              key={index}
              name={member.name}
              description={member.description}
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
