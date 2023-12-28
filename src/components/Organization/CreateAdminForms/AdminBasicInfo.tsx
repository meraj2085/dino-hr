import { Col, Row } from "antd";
import {
  genderOptions,
} from "@/constants/global";
import FormInput from "@/components/Forms/FormInput";
import NormalDatePicker from "@/components/Forms/NormalDatePicker";
import FormSelectField from "@/components/Forms/FormSelectField";
import UploadImage from "@/components/ui/UploadImage";

const AdminBasicInfoForm = () => {
  return (
    <>
      <div className="border border-gray-300 rounded-md p-4 my-4">
        <UploadImage name="profile_picture" />
        <Row gutter={{ xs: 4, md: 20 }}>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="first_name"
              placeholder="Enter First Name"
              label="First Name"
              size="large"
            />
          </Col>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="last_name"
              placeholder="Enter Last Name"
              label="Last Name"
              size="large"
            />
          </Col>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <NormalDatePicker
              name="date_of_birth"
              label="Date of birth"
              size="large"
            />
          </Col>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormSelectField
              size="large"
              name="gender"
              options={genderOptions}
              label="Gender"
              placeholder="Select"
            />
          </Col>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="phone_number"
              placeholder="Enter Phone Number"
              label="Phone Number"
              size="large"
            />
          </Col>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="other_phone_number"
              placeholder="Enter Other Phone Number"
              label="Other Phone Number"
              size="large"
            />
          </Col>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="office_email"
              placeholder="Enter Office email"
              label="Enter Office Email"
              type="email"
              size="large"
            />
          </Col>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="personal_email"
              placeholder="Enter Personal email"
              label="Enter Personal Email"
              type="email"
              size="large"
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AdminBasicInfoForm;