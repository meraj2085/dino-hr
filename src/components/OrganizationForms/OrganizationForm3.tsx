import FormInput from "../Forms/FormInput";
import { Col, Row } from "antd";

const OrganizationForm3 = () => {
  return (
    <>
      <div className="border border-gray-300 rounded-md p-4 my-4">
        <p className="text-xl font-medium my-2">Organization Form 3</p>
        <Row gutter={{ xs: 4, md: 20 }}>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="organization.form3.field1"
              label="Field 1"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="organization.form3.field2"
              label="Field 2"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="organization.form3.field3"
              label="Field 3"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="organization.form3.field4"
              label="Field 4"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="organization.form3.field5"
              label="Field 5"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="organization.form3.field6"
              label="Field 6"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="organization.form3.field7"
              label="Field 7"
              size="large"
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default OrganizationForm3;
