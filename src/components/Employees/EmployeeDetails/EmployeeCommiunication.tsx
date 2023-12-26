import { Col, Row } from "antd";

const EmployeeCommiunication = ({ employee }: any) => {
  return (
    <div className="bg-white border border-gray-300 rounded-md p-6 my-4">
      <Row gutter={{ xs: 4, md: 20 }}>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Phone Number</h4>
          <p>{employee?.phone_number}</p>
        </Col>
      </Row>
    </div>
  );
};

export default EmployeeCommiunication;
