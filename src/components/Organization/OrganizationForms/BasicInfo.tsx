import { Col, Row } from "antd";
import FormInput from "../../Forms/FormInput";
import UploadImage from "@/components/ui/UploadImage";

const BasicInfoForm = () => {
  return (
    <>
      <div className="border border-gray-300 rounded-md p-4 my-4">
        {/* <p className="text-xl font-medium my-2">Organization Form 1</p> */}
        <UploadImage
          name="profile_picture"
          // defaultImageUrl={defaultValues.profileImg}
        />
        <Row gutter={{ xs: 4, md: 20 }}>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="company_name"
              label="Organization Name"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="company_code"
              label="Organization Code"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput name="email" label="Email" type="email" size="large" />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput name="tin_number" label="TIN Number" size="large" />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput name="bin_number" label="BIN Number" size="large" />
          </Col>
        </Row>
        <h3 className="text-lg mt-8 font-semibold underline">
          Communication Address
        </h3>
        <Row gutter={{ xs: 4, md: 20 }}>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput name="street" label="Street" size="large" />
          </Col>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput name="landmark" label="Landmark" size="large" />
          </Col>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput name="city" label="City" size="large" />
          </Col>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="postal_code"
              label="Postal Code"
              size="large"
            />
          </Col>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput name="state" label="State" size="large" />
          </Col>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput name="country" label="Country" size="large" />
          </Col>
        </Row>
        <h3 className="text-lg mt-8 font-semibold underline">
          Registered Address
        </h3>
        <Row gutter={{ xs: 4, md: 20 }}>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput name="registered_street" label="Street" size="large" />
          </Col>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="registered_landmark"
              label="Landmark"
              size="large"
            />
          </Col>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput name="registered_city" label="City" size="large" />
          </Col>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="registered_postal_code"
              label="Postal Code"
              size="large"
            />
          </Col>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput name="registered_state" label="State" size="large" />
          </Col>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput name="registered_country" label="Country" size="large" />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default BasicInfoForm;
