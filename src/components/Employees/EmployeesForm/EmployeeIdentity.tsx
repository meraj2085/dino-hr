import { Col, Row } from "antd";
import FormInput from "../../Forms/FormInput";

const EmployeeIdentity = () => {
  return (
    <div>
      <div className="border border-gray-300 rounded-md p-4 my-4">
        <Row gutter={{ xs: 4, md: 20 }}>
          <Col xs={24} md={12} lg={12} className="mt-3">
            <FormInput
              name="employee_nid"
              placeholder="Enter Nid Number"
              label="Nid Number"
              size="large"
            />
          </Col>
          <Col xs={24} md={12} lg={12} className="mt-3">
            <FormInput
              name="employee_driving_licence"
              placeholder="Enter Driving Licence"
              label="Driving Licence"
              size="large"
            />
          </Col>
          <Col xs={24} md={12} lg={12} className="mt-3">
            <FormInput
              name="vehicle_number"
              placeholder="Enter Vehicle Number"
              label="Vehicle Number"
              size="large"
            />
          </Col>
          <Col xs={24} md={12} lg={12} className="mt-3">
            <FormInput
              name="passport_number"
              placeholder="Enter Passport Number"
              label="Passport Number"
              size="large"
            />
          </Col>
          <Col xs={24} md={12} lg={24} className="mt-3">
            <FormInput
              name="password"
              placeholder="Enter password"
              label="Password"
              size="large"
              type="password"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default EmployeeIdentity;
