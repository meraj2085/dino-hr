import { IOrganization } from '@/types';
import { Col, Row } from 'antd';
import React from 'react';

const ContactPerson = ({ organization }: { organization: IOrganization }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-md p-6 my-4">
      <Row gutter={{ xs: 4, md: 20 }}>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">First Name</h4>
          <p>{organization?.contact_person_first_name}</p>
        </Col>

        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Last Name</h4>
          <p>{organization?.contact_person_last_name}</p>
        </Col>

        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Email</h4>
          <p>{organization?.contact_person_email}</p>
        </Col>

        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Phone Number</h4>
          <p>{organization?.contact_person_phone_number}</p>
        </Col>

        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">NID Number</h4>
          <p>{organization?.nid_number}</p>
        </Col>
      </Row>
      <h3 className="text-lg mt-8 font-semibold underline">
        Account Manager From Dino HR
      </h3>
      <Row gutter={{ xs: 4, md: 20 }}>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">First Name</h4>
          <p>{organization?.account_manager_first_name}</p>
        </Col>
        
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Last Name</h4>
          <p>{organization?.account_manager_last_name}</p>
        </Col>

        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Designation</h4>
          <p>{organization?.account_manager_designation}</p>
        </Col>

        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Email</h4>
          <p>{organization?.account_manager_email}</p>
        </Col>

        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Phone Number</h4>
          <p>{organization?.account_manager_phone_number}</p>
        </Col>
      </Row>
    </div>
  );
};

export default ContactPerson;