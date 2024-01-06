import { Col, Row } from "antd";
import FormInput from "../../Forms/FormInput";
import UploadImage from "@/components/ui/UploadImage";

const BasicInfoForm = ({ defaultImageUrl }: { defaultImageUrl?: string }) => {
  return (
    <>
      <div className="bg-white border border-gray-300 rounded-md p-4 my-4">
        <UploadImage name="profile_picture" defaultImageUrl={defaultImageUrl} />
        <Row gutter={{ xs: 4, md: 20 }}>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="company_name"
              label="Organization Name"
              placeholder="Enter Organization Name"
              size="large"
              required
            />
          </Col>

          {/* <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="company_code"
              label="Organization Code"
              size="large"
            />
          </Col> */}

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="email"
              label="Email"
              placeholder="Enter Email"
              type="email"
              size="large"
              required
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="tin_number"
              label="TIN Number"
              placeholder="Enter TIN Number"
              size="large"
              required
            />
          </Col>

          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="bin_number"
              label="BIN Number"
              placeholder="Enter BIN Number"
              size="large"
              required
            />
          </Col>
        </Row>
        <h3 className="text-lg mt-8 font-semibold underline">
          Communication Address
        </h3>
        <Row gutter={{ xs: 4, md: 20 }}>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="street"
              label="Street"
              placeholder="Enter Street"
              size="large"
            />
          </Col>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="landmark"
              label="Landmark"
              placeholder="Enter Landmark"
              size="large"
            />
          </Col>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="city"
              label="City"
              placeholder="Enter City"
              size="large"
              required
            />
          </Col>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="postal_code"
              label="Postal Code"
              placeholder="Enter Postal Code"
              size="large"
              required
            />
          </Col>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="state"
              label="State"
              placeholder="Enter State"
              size="large"
              required
            />
          </Col>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="country"
              label="Country"
              placeholder="Enter Country"
              size="large"
              required
            />
          </Col>
        </Row>
        <h3 className="text-lg mt-8 font-semibold underline">
          Registered Address
        </h3>
        <Row gutter={{ xs: 4, md: 20 }}>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="registered_street"
              label="Street"
              placeholder="Enter Street"
              size="large"
            />
          </Col>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="registered_landmark"
              label="Landmark"
              placeholder="Enter Landmark"
              size="large"
            />
          </Col>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="registered_city"
              label="City"
              placeholder="Enter City"
              size="large"
              required
            />
          </Col>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="registered_postal_code"
              label="Postal Code"
              placeholder="Enter Postal Code"
              size="large"
              required
            />
          </Col>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="registered_state"
              label="State"
              placeholder="Enter State"
              size="large"
              required
            />
          </Col>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="registered_country"
              label="Country"
              placeholder="Enter Country"
              size="large"
              required
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default BasicInfoForm;
