import { IOrganization } from "@/types";
import { Col, Row } from "antd";
import React from "react";

const BasicInfo = ({ organization }: { organization: IOrganization }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-md p-6 my-4">
      <Row gutter={{ xs: 4, md: 20 }}>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Organization Name</h4>
          <p>{organization?.company_name}</p>
        </Col>

        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Organization Code</h4>
          <p>{organization?.company_code}</p>
        </Col>

        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Email</h4>
          <p>{organization?.email}</p>
        </Col>

        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">TIN Number</h4>
          <p>{organization?.tin_number}</p>
        </Col>

        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">BIN Number</h4>
          <p>{organization?.bin_number}</p>
        </Col>
      </Row>
      <h3 className="text-lg mt-8 font-semibold underline">
        Communication Address
      </h3>
      <Row gutter={{ xs: 4, md: 20 }}>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Street</h4>
          <p>{organization?.street}</p>
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Landmark</h4>
          <p>{organization?.landmark}</p>
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">City</h4>
          <p>{organization?.city}</p>
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Postal Code</h4>
          <p>{organization?.postal_code}</p>
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">State</h4>
          <p>{organization?.state}</p>
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Country</h4>
          <p>{organization?.country}</p>
        </Col>
      </Row>
      <h3 className="text-lg mt-8 font-semibold underline">
        Registered Address
      </h3>
      <Row gutter={{ xs: 4, md: 20 }}>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Street</h4>
          <p>{organization?.registered_street}</p>
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Landmark</h4>
          <p>{organization?.registered_landmark}</p>
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">City</h4>
          <p>{organization?.registered_city}</p>
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Postal Code</h4>
          <p>{organization?.registered_postal_code}</p>
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">State</h4>
          <p>{organization?.registered_state}</p>
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Country</h4>
          <p>{organization?.registered_country}</p>
        </Col>
      </Row>
    </div>
  );
};

export default BasicInfo;
