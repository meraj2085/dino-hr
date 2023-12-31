import { Col, Row } from "antd";
import { IUser } from "@/types";

const EmployeeFinancialInfo = ({ user }: { user: IUser }) => {
  return (
    <div className="border border-gray-300 rounded-md p-4 my-4">
      <Row gutter={{ xs: 4, md: 20 }}>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Bank Name</h4>
          <p>{user?.bank_name}</p>
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Account Number</h4>
          <p>{user?.account_number}</p>
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Branch Name</h4>
          <p>{user?.branch_name}</p>
        </Col>
      </Row>

      <h3 className="text-lg mt-8 font-semibold underline">Salary Details</h3>
      <Row gutter={{ xs: 4, md: 20 }}>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Basic Salary</h4>
          <p>{user?.salaryDetails?.basic_salary}</p>
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Total Allowance</h4>
          <p>{user?.salaryDetails?.total_allowance}</p>
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Annual Bonus</h4>
          <p>{user?.salaryDetails?.annual_bonus}</p>
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Total CTC</h4>
          <p>{user?.salaryDetails?.total_ctc}</p>
        </Col>
      </Row>
    </div>
  );
};

export default EmployeeFinancialInfo;
