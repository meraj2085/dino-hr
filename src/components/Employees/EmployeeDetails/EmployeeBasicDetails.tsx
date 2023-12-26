import { Col, Row } from "antd";

const EmployeeBasicDetails = ({ employee }: any) => {
  return (
    <div className="bg-white border border-gray-300 rounded-md p-6 my-4">
      <Row gutter={{ xs: 4, md: 20 }}>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">First Name</h4>
          <p>{employee?.first_name}</p>
        </Col>

        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Middle Name</h4>
          <p>{employee?.middle_name}</p>
        </Col>

        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Last name</h4>
          <p>{employee?.last_name}</p>
        </Col>

        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Date Of Birth</h4>
          <p>{employee?.date_of_birth}</p>
        </Col>

        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Gender</h4>
          <p>{employee?.gender}</p>
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Employee Status</h4>
          <p>{employee?.employment_status}</p>
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Employee Code</h4>
          <p>{employee?.employee_code}</p>
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Office Email</h4>
          <p>{employee?.office_email}</p>
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Date of Joining</h4>
          <p>{employee?.date_of_joining}</p>
        </Col>
      </Row>
      <h3 className="text-lg mt-8 font-semibold underline">Current Address</h3>
      <Row gutter={{ xs: 4, md: 20 }}>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Flat Number</h4>
          <p>{employee?.flat_number}</p>
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Building Name</h4>
          <p>{employee?.building_name}</p>
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Address</h4>
          <p>{employee?.street}</p>
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Landmark</h4>
          <p>{employee?.landmark}</p>
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">City</h4>
          <p>{employee?.city}</p>
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Post Code</h4>
          <p>{employee?.postal_code}</p>
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">State</h4>
          <p>{employee?.state}</p>
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Country</h4>
          <p>{employee?.country}</p>
        </Col>
      </Row>
      <h3 className="text-lg mt-8 font-semibold underline">
        Permanent Address
      </h3>
      <Row gutter={{ xs: 4, md: 20 }}>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Flat Number</h4>
          <p>{employee?.permanent_address?.flat_number}</p>
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Building Name</h4>
          <p>{employee?.permanent_address?.building_name}</p>
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Address</h4>
          <p>{employee?.permanent_address?.street}</p>
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Landmark</h4>
          <p>{employee?.permanent_address?.landmark}</p>
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">City</h4>
          <p>{employee?.permanent_address?.city}</p>
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Post Code</h4>
          <p>{employee?.permanent_address?.postal_code}</p>
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">State</h4>
          <p>{employee?.permanent_address?.state}</p>
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Country</h4>
          <p>{employee?.permanent_address?.country}</p>
        </Col>
      </Row>
    </div>
  );
};

export default EmployeeBasicDetails;
