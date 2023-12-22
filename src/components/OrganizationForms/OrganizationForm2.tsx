import React from "react";
import FormInput from "../Forms/FormInput";
import { Col, Row } from "antd";

const OrganizationForm2 = () => {
  return (
    <>
      <div className="border border-gray-300 rounded-md p-4 my-4">
        <p className="text-xl font-medium my-2">Organization Form 2</p>
        <Row gutter={{ xs: 4, md: 20 }}>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="student.guardian.fatherName"
              label="Father name"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="student.guardian.fatherOccupation"
              label="Father occupation"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="student.guardian.fatherContactNo"
              label="Father contact no."
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="student.guardian.motherName"
              label="Mother name"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="student.guardian.motherOccupation"
              label="Mother occupation"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="student.guardian.motherContactNo"
              label="Mother contact no."
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="student.guardian.address"
              label="Address"
              size="large"
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default OrganizationForm2;
