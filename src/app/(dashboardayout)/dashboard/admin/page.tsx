import React from "react";
import SetupAnalytics from "../../../../../public/assets/SetupAnalytics.png";
import Image from "next/image";

const AdminPage = () => {
  return (
    <div className="flex justify-center">
      <Image src={SetupAnalytics} alt="" width={670} />
    </div>
  );
};

export default AdminPage;
