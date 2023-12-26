import { Col, Row } from "antd";
import FormInput from "../../Forms/FormInput";
import FormSelectField from "../../Forms/FormSelectField";
import {
  countryOptions,
  employmentStatus,
  genderOptions,
} from "@/constants/global";
import NormalDatePicker from "../../Forms/NormalDatePicker";

const EmployeeBasicInfoForm = () => {
  return (
    <>
      <div className="border border-gray-300 rounded-md p-4 my-4">
        <Row gutter={{ xs: 4, md: 20 }}>
          <Col xs={24} md={12} lg={8} className="mt-3">
            <FormInput
              name="first_name"
              placeholder="Enter First Name"
              label="First Name"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={8} className="mt-3">
            <FormInput
              name="middle_name"
              placeholder="Enter Middle Name"
              label="Enter Middle Name"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={8} className="mt-3">
            <FormInput
              name="last_name"
              placeholder="Enter Last Name"
              label="Last Name"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={12} className="mt-3">
            <NormalDatePicker
              name="date_of_birth"
              label="Date of birth"
              size="large"
            />
          </Col>

          <Col xs={24} md={12} lg={12} className="mt-3">
            <FormSelectField
              size="large"
              name="gender"
              options={genderOptions}
              label="Gender"
              placeholder="Select"
            />
          </Col>
          <Col xs={24} md={12} lg={12} className="mt-3">
            <FormSelectField
              size="large"
              name="employment_status"
              options={employmentStatus}
              label="Employee Status"
              placeholder="Select"
            />
          </Col>
          <Col xs={24} md={12} lg={12} className="mt-3">
            <FormInput
              name="employee_code"
              placeholder="Enter Employee code"
              label="Employee Code"
              size="large"
            />
          </Col>
          <Col xs={24} md={12} lg={12} className="mt-3">
            <FormInput
              name="office_email"
              placeholder="Enter Office email"
              label="Enter Office Email"
              type="email"
              size="large"
            />
          </Col>
          <Col xs={24} md={12} lg={12} className="mt-3">
            <NormalDatePicker
              name="date_of_joining"
              label="Date of Joining"
              size="large"
            />
          </Col>
        </Row>
        <h3 className="text-lg mt-8 font-semibold underline">
          Current Address
        </h3>
        <Row gutter={{ xs: 4, md: 20 }}>
          <Col xs={24} md={12} lg={10} className="mt-3">
            <FormInput
              name="current_address.flat_number"
              label="Flat Number"
              placeholder="Enter Flat Number"
              size="large"
            />
          </Col>
          <Col xs={24} md={12} lg={14} className="mt-3">
            <FormInput
              name="current_address.building_name"
              label="Building Name"
              placeholder="Enter building number"
              size="large"
            />
          </Col>
          <Col xs={24} md={12} lg={24} className="mt-3">
            <FormInput
              name="current_address.street"
              label="Address"
              placeholder="Enter street name"
              size="large"
            />
          </Col>
          <Col xs={24} md={12} lg={24} className="mt-3">
            <FormInput
              name="current_address.landmark"
              label="Landmark"
              placeholder="Enter Landmark"
              size="large"
            />
          </Col>
          <Col xs={24} md={12} lg={18} className="mt-3">
            <FormInput
              name="current_address.city"
              label="City"
              placeholder="Enter city name"
              size="large"
            />
          </Col>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="current_address.postal_code"
              label="Post code"
              placeholder="Enter post code"
              size="large"
              type="number"
            />
          </Col>
          <Col xs={24} md={12} lg={12} className="mt-3">
            <FormInput
              name="current_address.state"
              label="State"
              placeholder="Enter state name"
              size="large"
            />
          </Col>
          <Col xs={24} md={12} lg={12} className="mt-3">
            <FormSelectField
              size="large"
              name="current_address.country"
              options={countryOptions}
              label="Country"
              placeholder="Select"
            />
          </Col>
        </Row>
        <h3 className="text-lg mt-8 font-semibold underline">
          Permanent Address
        </h3>
        <Row gutter={{ xs: 4, md: 20 }}>
          <Col xs={24} md={12} lg={10} className="mt-3">
            <FormInput
              name="permanent_address.flat_number"
              label="Flat Number"
              placeholder="Enter Flat Number"
              size="large"
            />
          </Col>
          <Col xs={24} md={12} lg={14} className="mt-3">
            <FormInput
              name="permanent_address.building_name"
              label="Building Name"
              placeholder="Enter building number"
              size="large"
            />
          </Col>
          <Col xs={24} md={12} lg={24} className="mt-3">
            <FormInput
              name="permanent_address.street"
              label="Address"
              placeholder="Enter street name"
              size="large"
            />
          </Col>
          <Col xs={24} md={12} lg={24} className="mt-3">
            <FormInput
              name="permanent_address.landmark"
              label="Landmark"
              placeholder="Enter Landmark"
              size="large"
            />
          </Col>
          <Col xs={24} md={12} lg={18} className="mt-3">
            <FormInput
              name="permanent_address.city"
              label="City"
              placeholder="Enter city name"
              size="large"
            />
          </Col>
          <Col xs={24} md={12} lg={6} className="mt-3">
            <FormInput
              name="permanent_address.postal_code"
              label="Post code"
              placeholder="Enter post code"
              size="large"
              type="number"
            />
          </Col>
          <Col xs={24} md={12} lg={12} className="mt-3">
            <FormInput
              name="permanent_address.state"
              label="State"
              placeholder="Enter state name"
              size="large"
            />
          </Col>
          <Col xs={24} md={12} lg={12} className="mt-3">
            <FormSelectField
              size="large"
              name="permanent_address.country"
              options={countryOptions}
              label="Country"
              placeholder="Select"
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default EmployeeBasicInfoForm;
