import { Col, Row } from "antd";
import Image from "next/image";
import { IUser } from "@/types";
import dayjs from "dayjs";

const EmployeeBasicInfo = ({ user }: { user: IUser }) => {
  return (
    <>
      <div className="border border-gray-300 rounded-md p-4 my-4">
        <Image
          src={
            user?.profile_picture ||
            "https://res.cloudinary.com/df5c6zeao/image/upload/v1703432735/uploads/organization.png"
          }
          className="rounded-lg border border-gray-400"
          height={100}
          width={100}
          alt="profile_picture"
        />
        <Row gutter={{ xs: 4, md: 20 }}>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <h4 className="text-[16px]">First Name</h4>
            <p>{user?.first_name}</p>
          </Col>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <h4 className="text-[16px]">Last Name</h4>
            <p>{user?.last_name}</p>
          </Col>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <h4 className="text-[16px]">Date of Birth</h4>
            <p>{dayjs(user?.date_of_birth).format("DD MMM YYYY")}</p>
          </Col>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <h4 className="text-[16px]">Gender</h4>
            <p>{user?.gender}</p>
          </Col>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <h4 className="text-[16px]">Phone Number</h4>
            <p>{user?.phone_number}</p>
          </Col>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <h4 className="text-[16px]">Other Phone Number</h4>
            <p>{user?.other_phone_number}</p>
          </Col>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <h4 className="text-[16px]">Office Email</h4>
            <p>{user?.office_email}</p>
          </Col>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <h4 className="text-[16px]">Personal Email</h4>
            <p>{user?.personal_email}</p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default EmployeeBasicInfo;
