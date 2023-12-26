import { Col, Row } from "antd";
import FormInput from "../../Forms/FormInput";
import FormSelectField from "../../Forms/FormSelectField";
import { accountType } from "@/constants/global";

const EmployeeBankDetails = () => {
  return (
    <div className="border border-gray-300 rounded-md p-4 my-4">
      <Row gutter={{ xs: 4, md: 20 }}>
        <Col xs={24} md={12} lg={24} className="mt-3">
          <FormInput
            name="bank_name"
            placeholder="Enter Bank Name"
            label="Bank Name"
            size="large"
          />
        </Col>
        <Col xs={24} md={12} lg={24} className="mt-3">
          <FormInput
            name="account_number"
            placeholder="Enter Account Number"
            label="Account Number"
            size="large"
            type="number"
          />
        </Col>
        <Col xs={24} md={12} lg={12} className="mt-3">
          <FormInput
            name="bank_details.branch"
            placeholder="Enter Branch Name"
            label="Branch Name"
            size="large"
          />
        </Col>
        <Col xs={24} md={12} lg={12} className="mt-3">
          <FormSelectField
            size="large"
            name="bank_details.account_type"
            options={accountType}
            label="Account Type"
            placeholder="Select"
          />
        </Col>
      </Row>
    </div>
  );
};

export default EmployeeBankDetails;
