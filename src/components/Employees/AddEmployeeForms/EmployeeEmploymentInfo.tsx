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
import FormInput from "@/components/Forms/FormInput";
import { useGetAllOrganizationQuery } from "@/redux/api/organizationApi";
import { useGetAllUsersQuery } from "@/redux/api/userApi";

const EmployeeEmploymentInfoForm = () => {
  const { data, isLoading } = useGetAllUsersQuery({});

  const managerOptions: any = data?.users
    ?.filter((user: any) => user.role === "Manager")
    .map((user: any) => ({
      label: user.first_name + " " + user.last_name,
      value: user._id,
    }));

  // console.log(data);

  return (
    <div className="border border-gray-300 rounded-md p-4 my-4">
      <Row gutter={{ xs: 4, md: 20 }}>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <FormSelectField
            size="large"
            name="employment_status"
            options={employmentStatus}
            label="Employment Status"
            placeholder="Your Employment Status"
          />
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <NormalDatePicker
            name="date_of_joining"
            label="Date of Joining"
            size="large"
          />
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <FormInput
            size="large"
            name="employee_code"
            label="Enter Employee Code"
            placeholder="eg: EMP00001"
          />
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <FormSelectField
            size="large"
            name="department"
            options={departmentOptions}
            label="Department"
            placeholder="Your Department"
          />
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <FormSelectField
            size="large"
            name="designation"
            options={designationOptions}
            label="Designation"
            placeholder="Your Designation"
          />
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <FormSelectField
            size="large"
            name="team"
            options={teamOptions}
            label="Team"
            placeholder="Your Team"
          />
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <FormSelectField
            size="large"
            name="role"
            options={roleOptions}
            label="Role"
            placeholder="Your Role"
          />
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <FormSelectField
            size="large"
            name="manager_id"
            options={managerOptions || []}
            label="Manager"
            placeholder="Your Manager"
          />
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <NormalDatePicker
            name="contract_date"
            label="Contract Date"
            size="large"
          />
        </Col>
      </Row>
    </div>
  );
};

export default EmployeeEmploymentInfoForm;
