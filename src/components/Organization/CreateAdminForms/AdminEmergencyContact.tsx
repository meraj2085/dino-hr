import { Col, Row } from "antd";
import { EmargencyRelationStatus } from "@/constants/global";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";

const AdminEmergencyContact = () => {
  return (
    <div className="border border-gray-300 rounded-md p-4 my-4">
      <Row gutter={{ xs: 4, md: 20 }}>
        <Col xs={24} md={12} lg={24} className="mt-3">
          <FormInput
            name="emergency_contact.name"
            placeholder="Enter Full Name"
            label="Full Name"
            size="large"
          />
        </Col>
        <Col xs={24} md={12} lg={24} className="mt-3">
          <FormInput
            name="emergency_contact_details.phone_number"
            placeholder="Enter phone number"
            label="Phone Number"
            size="large"
          />
        </Col>
        <Col xs={24} md={12} lg={12} className="mt-3">
          <FormInput
            name="emergency_contact_details.email"
            placeholder="Enter Email"
            label="Email"
            size="large"
          />
        </Col>
        <Col xs={24} md={12} lg={12} className="mt-3">
          <FormSelectField
            size="large"
            name="emergency_contact.relationship"
            options={EmargencyRelationStatus}
            label="Relation"
            placeholder="Select"
          />
        </Col>
      </Row>
    </div>
  );
};

export default AdminEmergencyContact;
