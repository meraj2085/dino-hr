import { Col, Row } from 'antd';
import FormInput from '../Forms/FormInput';

const OrganizationForm1 = () => {
  return (
    <>
      <div className="border border-gray-300 rounded-md p-4 my-4">
        <p className="text-xl font-medium my-2">Organization Form 1</p>
        <Row gutter={{ xs: 4, md: 20 }}>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="organization.form1.field1"
              label="Field 1"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="organization.form1.field2"
              label="Field 2"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="organization.form1.field3"
              label="Field 3"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="organization.form1.field4"
              label="Field 4"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="organization.form1.field5"
              label="Field 5"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="organization.form1.field6"
              label="Field 6"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="organization.form1.field7"
              label="Field 7"
              size="large"
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default OrganizationForm1;