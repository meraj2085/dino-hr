const TeamMemberDetails = [
  {
    name: "Emma Johnson",
    role: "HR Manager",
    image: "https://xsgames.co/randomusers/assets/avatars/female/18.jpg",
  },
  {
    name: "Sophia Smith",
    role: "Software Developer",
    image: "https://xsgames.co/randomusers/assets/avatars/female/44.jpg",
  },
  {
    name: "Oliver Williams",
    role: "System Analyst",
    image: "https://xsgames.co/randomusers/assets/avatars/male/29.jpg",
  },
  {
    name: "Ava Brown",
    role: "HR Specialist",
    image: "https://xsgames.co/randomusers/assets/avatars/female/22.jpg",
  },
  {
    name: "Liam Jones",
    role: "Software Engineer",
    image: "https://xsgames.co/randomusers/assets/avatars/male/25.jpg",
  },
  {
    name: "Isabella Davis",
    role: "Quality Assurance",
    image: "https://xsgames.co/randomusers/assets/avatars/female/39.jpg",
  },
  {
    name: "Alexander Taylor",
    role: "Database Administrator",
    image: "https://xsgames.co/randomusers/assets/avatars/male/58.jpg",
  },
  {
    name: "Mia Evans",
    role: "UI/UX Designer",
    image: "https://xsgames.co/randomusers/assets/avatars/female/69.jpg",
  },
  {
    name: "Noah White",
    role: "Project Manager",
    image: "https://xsgames.co/randomusers/assets/avatars/male/60.jpg",
  },
];

const OurTeam = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-5 mt-10">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
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
              <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:shadow-md">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={member?.image}
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
