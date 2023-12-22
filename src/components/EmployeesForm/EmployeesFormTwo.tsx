import { Col, Row } from "antd";
import FormInput from "../Forms/FormInput";

const EmployeesFormTwo = () => {
  return (
    <>
      <div className="border border-gray-300 rounded-md p-4 my-4">
        <p className="text-xl font-medium my-2">Employees Form two</p>
        <Row gutter={{ xs: 4, md: 20 }}>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="employee.form2.field1"
              label="Field 1"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="employee.form2.field2"
              label="Field 2"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="employee.form2.field3"
              label="Field 3"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="employee.form2.field4"
              label="Field 4"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="employee.form2.field5"
              label="Field 5"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="employee.form2.field6"
              label="Field 6"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="employee.form2.field7"
              label="Field 7"
              size="large"
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default EmployeesFormTwo;
