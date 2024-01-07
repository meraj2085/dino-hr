import { Col, Row } from "antd";
import {
  departmentOptions,
  designationOptions,
  employmentStatus,
  roleOptions,
  teamOptions,
} from "@/constants/global";
import FormSelectField from "@/components/Forms/FormSelectField";
import NormalDatePicker from "@/components/Forms/NormalDatePicker";
import { useGetAllUsersQuery } from "@/redux/api/userApi";

const EmployeeEmploymentInfoForm = () => {
  const { data, isLoading } = useGetAllUsersQuery({});

  const managerOptions: any = data?.users
    ?.filter((user: any) => user.role === "Manager")
    .map((user: any) => ({
      label: user.first_name + " " + user.last_name,
      value: user._id,
    }));

  return (
    <div className="border bg-white border-gray-300 rounded-md p-4 my-4">
      <Row gutter={{ xs: 4, md: 20 }}>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <FormSelectField
            size="large"
            name="employment_status"
            options={employmentStatus}
            label="Employment Status"
            placeholder="Your Employment Status"
            required
          />
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <NormalDatePicker
            name="date_of_joining"
            label="Date of Joining"
            size="large"
            required
          />
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <FormSelectField
            size="large"
            name="department"
            options={departmentOptions}
            label="Department"
            placeholder="Your Department"
            required
          />
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <FormSelectField
            size="large"
            name="designation"
            options={designationOptions}
            label="Designation"
            placeholder="Your Designation"
            required
          />
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <FormSelectField
            size="large"
            name="team"
            options={teamOptions}
            label="Team"
            placeholder="Your Team"
            required
          />
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <FormSelectField
            size="large"
            name="role"
            options={roleOptions}
            label="Role"
            placeholder="Your Role"
            required
          />
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <FormSelectField
            size="large"
            name="manager_id"
            options={managerOptions || [{ label: "No Manager", value: "" }]}
            label="Manager"
            placeholder="Your Manager"
            required
          />
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <NormalDatePicker
            name="contract_date"
            label="Contract Date"
            size="large"
            required
          />
        </Col>
      </Row>
    </div>
  );
};

export default EmployeeEmploymentInfoForm;
