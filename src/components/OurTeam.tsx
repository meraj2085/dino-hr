import Image from "next/image";

const TeamMemberDetails = [
  {
    name: "Emma Johnson",
    role: "HR Manager",
    image:
      "https://res.cloudinary.com/dx2drcria/image/upload/v1704349714/team/gy8vvyjqqkhxaepexlwh.jpg",
  },
  {
    name: "Sophia Smith",
    role: "Software Developer",
    image:
      "https://res.cloudinary.com/dx2drcria/image/upload/v1704349713/team/ejfomxbuhsgvw3ffosjz.jpg",
  },
  {
    name: "Oliver Williams",
    role: "System Analyst",
    image:
      "https://res.cloudinary.com/dx2drcria/image/upload/v1704349714/team/jkhrrrrisvje0udyajks.jpg",
  },
  {
    name: "Ava Brown",
    role: "HR Specialist",
    image:
      "https://res.cloudinary.com/dx2drcria/image/upload/v1704349713/team/zmd3lpwqgzqylo8yf0hr.jpg",
  },
  {
    name: "Liam Jones",
    role: "Software Engineer",
    image:
      "https://res.cloudinary.com/dx2drcria/image/upload/v1704349714/team/wu9zy0kvg44hi8jiabyt.jpg",
  },
  {
    name: "Isabella Davis",
    role: "Quality Assurance",
    image:
      "https://res.cloudinary.com/dx2drcria/image/upload/v1704349714/team/unlppefujkunlxe9l2tw.jpg",
  },
  {
    name: "Alexander Taylor",
    role: "Database Administrator",
    image:
      "https://res.cloudinary.com/dx2drcria/image/upload/v1704349715/team/bkxouwxdszgbl5kd6je1.jpg",
  },
  {
    name: "Mia Evans",
    role: "UI/UX Designer",
    // image: "https://xsgames.co/randomusers/assets/avatars/female/5.jpg",
    image:
      "https://res.cloudinary.com/dx2drcria/image/upload/v1704349714/team/cqhbcjnhi1tncrcibiv3.jpg",
  },
  {
    name: "Noah White",
    role: "Project Manager",
    image:
      "https://res.cloudinary.com/dx2drcria/image/upload/v1704349715/team/hovhiwo5yiqqri2bwy63.jpg",
  },
];

const OurTeam = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-5 pb-10 py-5">
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="mb-5 md:mb-16">
            <h1 className="text-5xl text-center font-bold leadi mb-3">
              <span className="text-gradient">Our Team</span>
            </h1>
            <p className="max-w-2xl text-center mx-auto">
              Meet our team of experts who are always ready to help you.
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            {TeamMemberDetails.map((member, index) => (
              <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full group">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:shadow-md transition duration-300 ease-in-outd">
                  <Image
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    alt="team"
                    src={member?.image}
                    width={100}
                    height={100}
                  />

                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      {member?.name}
                    </h2>
                    <p className="text-gray-500">{member?.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
