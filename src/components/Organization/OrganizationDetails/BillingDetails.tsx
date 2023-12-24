import { IOrganization } from '@/types';
import { Col, Row } from 'antd';

const BillingDetails = ({ organization }: { organization: IOrganization }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-md p-6 my-4">
      <Row gutter={{ xs: 4, md: 20 }}>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Bank Name</h4>
          <p>{organization?.bank_name}</p>
        </Col>

        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Account Number</h4>
          <p>{organization?.account_number}</p>
        </Col>

        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Plan Validity</h4>
          <p>{organization?.plan_validity}</p>
        </Col>

        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Number of Users</h4>
          <p>{organization?.number_of_users}</p>
        </Col>

        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Routing Number</h4>
          <p>{organization?.routing_number}</p>
        </Col>
      </Row>
      <h3 className="text-lg mt-8 font-semibold underline">
        Billing Contact Person
      </h3>
      <Row gutter={{ xs: 4, md: 20 }}>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">First Name</h4>
          <p>{organization?.billing_contact_person_first_name}</p>
        </Col>

        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Middle Name</h4>
          <p>{organization?.billing_contact_person_middle_name}</p>
        </Col>

        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Last Name</h4>
          <p>{organization?.billing_contact_person_last_name}</p>
        </Col>

        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Email</h4>
          <p>{organization?.billing_contact_person_email}</p>
        </Col>

        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Phone Number</h4>
          <p>{organization?.billing_contact_person_phone_number}</p>
        </Col>
      </Row>
      <h3 className="text-lg mt-8 font-semibold underline">Billing Address</h3>
      <Row gutter={{ xs: 4, md: 20 }}>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Street</h4>
          <p>{organization?.billing_street}</p>
        </Col>

        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Landmark</h4>
          <p>{organization?.billing_landmark}</p>
        </Col>

        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">City</h4>
          <p>{organization?.billing_city}</p>
        </Col>

        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Postal Code</h4>
          <p>{organization?.billing_postal_code}</p>
        </Col>

        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">State</h4>
          <p>{organization?.billing_state}</p>
        </Col>

        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Country</h4>
          <p>{organization?.billing_country}</p>
        </Col>
      </Row>
    </div>
  );
};

export default BillingDetails;