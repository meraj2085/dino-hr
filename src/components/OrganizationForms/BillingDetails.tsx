import FormInput from "../Forms/FormInput";
import { Col, Row } from "antd";

const BillingDetailsForm = () => {
  return (
    <>
      <div className="border border-gray-300 rounded-md p-4 my-4">
        {/* <p className="text-xl font-medium my-2">Organization Form 3</p> */}
        <Row gutter={{ xs: 4, md: 20 }}>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput name="bank_name" label="Bank Name" size="large" />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="account_number"
              label="Account Number"
              type="number"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="plan_validity"
              label="Plan Validity"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="number_of_users"
              label="Number of Users"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="routing_number"
              label="Routing Number"
              size="large"
            />
          </Col>
        </Row>
        <h3 className="text-lg mt-8 font-semibold underline">
          Billing Contact Person
        </h3>
        <Row gutter={{ xs: 4, md: 20 }}>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="billing_contact_person_first_name"
              label="First Name"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="billing_contact_person_middle_name"
              label="Middle Name"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="billing_contact_person_last_name"
              label="Last Name"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="billing_contact_person_email"
              label="Email"
              type="email"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="billing_contact_person_phone_number"
              label="Phone Number"
              size="large"
            />
          </Col>
        </Row>
        <h3 className="text-lg mt-8 font-semibold underline">
          Billing Address
        </h3>
        <Row gutter={{ xs: 4, md: 20 }}>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput name="billing_street" label="Street" size="large" />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput name="billing_landmark" label="Landmark" size="large" />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput name="billing_city" label="City" size="large" />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="billing_postal_code"
              label="Postal Code"
              type="number"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput name="billing_state" label="State" size="large" />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput name="billing_country" label="Country" size="large" />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default BillingDetailsForm;
