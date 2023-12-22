import React from "react";
import FormInput from "../Forms/FormInput";
import { Col, Row } from "antd";
import exp from "constants";

const ContactPersonForm = () => {
  return (
    <>
      <div className="border border-gray-300 rounded-md p-4 my-4">
        {/* <p className="text-xl font-medium my-2">Organization Form 2</p> */}
        <Row gutter={{ xs: 4, md: 20 }}>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="contact_person_first_name"
              label="First Name"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="contact_person_middle_name"
              label="Middle Name"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="contact_person_last_name"
              label="Last Name"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput name="contact_person_email" label="Email" size="large" />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="contact_person_phone_number"
              label="Phone Number"
              size="large"
            />
          </Col>

          {/* <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="profile_picture"
              label="Profile Picture"
              size="large"
            />
          </Col> */}

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput name="nid_number" label="NID Number" size="large" />
          </Col>
        </Row>
        <h3 className="text-lg mt-8 font-semibold underline">
          Account Manager From Dino HR
        </h3>
        <Row gutter={{ xs: 4, md: 20 }}>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="account_manager_first_name"
              label="First Name"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="account_manager_middle_name"
              label="Middle Name"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="account_manager_last_name"
              label="Last Name"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="account_manager_designation"
              label="Designation"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="account_manager_email"
              label="Email"
              type="email"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="account_manager_phone_number"
              label="Phone Number"
              size="large"
            />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ContactPersonForm;
