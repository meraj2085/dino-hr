import { Col, Row } from "antd";
import FormInput from "@/components/Forms/FormInput";

const EmployeeFinancialInfoForm = () => {
  return (
    <div className="border border-gray-300 rounded-md p-4 my-4">
      <Row gutter={{ xs: 4, md: 20 }}>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <FormInput
            name="bank_name"
            placeholder="Enter Bank Name"
            label="Bank Name"
            size="large"
            required
          />
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <FormInput
            name="account_number"
            placeholder="Enter Account Number"
            label="Account Number"
            size="large"
            required
          />
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <FormInput
            name="branch_name"
            placeholder="Enter Branch Name"
            label="Branch Name"
            size="large"
          />
        </Col>
      </Row>

      <h3 className="text-lg mt-8 font-semibold underline">
        Salary Details
      </h3>
      <Row gutter={{ xs: 4, md: 20 }}>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <FormInput
            name="salaryDetails.basic_salary"
            placeholder="Enter Basic Salary"
            label="Basic Salary"
            size="large"
            required
          />
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <FormInput
            name="salaryDetails.total_allowance"
            placeholder="Enter Total Allowance"
            label="Total Allowance"
            size="large"
            required
          />
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <FormInput
            name="salaryDetails.annual_bonus"
            placeholder="Enter Annual Bonus"
            label="Annual Bonus"
            size="large"
            required
          />
        </Col>
      </Row>
    </div>
  );
};

export default EmployeeFinancialInfoForm;
