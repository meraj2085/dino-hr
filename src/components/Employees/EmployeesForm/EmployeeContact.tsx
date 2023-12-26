import { Col, Row } from "antd";
import FormInput from "../../Forms/FormInput";

const EmployeeContact = () => {
  return (
    <div>
      <div className="border border-gray-300 rounded-md p-4 my-4">
        <Row gutter={{ xs: 4, md: 20 }}>
          <Col xs={24} md={12} lg={12} className="mt-3">
            <FormInput
              name="phone_number"
              placeholder="Enter Phone Number"
              label="Phone Number"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={12} className="mt-3">
            <FormInput
              name="other_phone_number"
              placeholder="Other Phone Number"
              label="Other Phone Number"
              size="large"
            />
          </Col>
          <Col xs={24} md={12} lg={12} className="mt-3">
            <FormInput
              name="personal_email"
              placeholder="Enter Personal Email"
              label="Personal Email"
              type="email"
              size="large"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default EmployeeContact;
