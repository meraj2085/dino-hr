import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import { countryOptions } from "@/constants/global";
import { Col, Row } from "antd";

const AdminContactInfoForm = () => {
  return (
    <div>
      <div className="border border-gray-300 rounded-md p-4 my-4">
        <Row gutter={{ xs: 4, md: 20 }}>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="flat_number"
              placeholder="Enter Flat Number"
              label="Flat Number"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="building_name"
              placeholder="Enter Building Name"
              label="Building Name"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="street"
              placeholder="Enter Street"
              label="Street"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="city"
              placeholder="Enter City"
              label="City"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="landmark"
              placeholder="Enter Landmark"
              label="Landmark"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormSelectField
              name="country"
              options={countryOptions}
              placeholder="Enter Country"
              label="Country"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="state"
              placeholder="Enter State"
              label="State"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="postal_code"
              placeholder="Enter Postal Code"
              label="Postal Code"
              size="large"
            />
          </Col>
        </Row>
        <h3 className="text-lg mt-8 font-semibold underline">
          Emergency Contact
        </h3>
        <Row gutter={{ xs: 4, md: 20 }}>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="emergency_contact.full_name"
              placeholder="Enter Full Name"
              label="Full Name"
              size="large"
              required
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="emergency_contact.phone_number"
              placeholder="Enter Phone Number"
              label="Phone Number"
              size="large"
              required
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="emergency_contact.email"
              placeholder="Enter Email"
              label="Email"
              type="email"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="emergency_contact.relationship"
              placeholder="Enter Relationship"
              label="Relationship"
              size="large"
              required
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AdminContactInfoForm;
