import { Col, Row } from "antd";
import FormSelectField from "../../Forms/FormSelectField";
import { designationStatus, teamStatus } from "@/constants/global";

const EmployeeJobDetails = () => {
  return (
    <div className="border border-gray-300 rounded-md p-4 my-4">
      <Row gutter={{ xs: 4, md: 20 }}>
        <Col xs={24} md={12} lg={12} className="mt-3">
          <FormSelectField
            size="large"
            name="designation"
            options={designationStatus}
            label="Designation"
            placeholder="Your Designation"
          />
        </Col>
        <Col xs={24} md={12} lg={12} className="mt-3">
          <FormSelectField
            size="large"
            name="team"
            options={teamStatus}
            label="Team"
            placeholder="Your Team"
          />
        </Col>
      </Row>
    </div>
  );
};

export default EmployeeJobDetails;
