import { IUser } from "@/types";
import { Col, Row } from "antd";

const EmployeeContactInfo = ({ user }: { user: IUser }) => {
  return (
    <div>
      <div className="bg-white border border-gray-300 rounded-md p-4 my-4">
        <Row gutter={{ xs: 4, md: 20 }}>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <h4 className="text-[16px]">Flat Number</h4>
            <p>{user?.flat_number}</p>
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <h4 className="text-[16px]">Building Name</h4>
            <p>{user?.building_name}</p>
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <h4 className="text-[16px]">Street</h4>
            <p>{user?.street}</p>
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <h4 className="text-[16px]">City</h4>
            <p>{user?.city}</p>
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <h4 className="text-[16px]">Landmark</h4>
            <p>{user?.landmark}</p>
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <h4 className="text-[16px]">Country</h4>
            <p>{user?.country}</p>
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <h4 className="text-[16px]">State</h4>
            <p>{user?.state}</p>
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <h4 className="text-[16px]">Postal Code</h4>
            <p>{user?.postal_code}</p>
          </Col>
        </Row>
        <h3 className="text-lg mt-8 font-semibold underline">
          Emergency Contact
        </h3>
        <Row gutter={{ xs: 4, md: 20 }}>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <h4 className="text-[16px]">Full Name</h4>
            <p>{user?.emergency_contact?.full_name}</p>
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <h4 className="text-[16px]">Phone Number</h4>
            <p>{user?.emergency_contact?.phone_number}</p>
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <h4 className="text-[16px]">Email</h4>
            <p>{user?.emergency_contact?.email}</p>
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <h4 className="text-[16px]">Relationship</h4>
            <p>{user?.emergency_contact?.relationship}</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default EmployeeContactInfo;
