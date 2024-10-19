import { Col, Row } from "antd";
import { employmentStatus } from "@/constants/global";
import FormSelectField from "@/components/Forms/FormSelectField";
import NormalDatePicker from "@/components/Forms/NormalDatePicker";
import { useGetAllUsersQuery } from "@/redux/api/userApi";
import RoleFields from "@/components/Forms/fetchedForms/RoleFields";
import TeamFields from "@/components/Forms/fetchedForms/TeamFields";
import DesignationFields from "@/components/Forms/fetchedForms/DesignationFields";
import DepartmentFields from "@/components/Forms/fetchedForms/DepartmentFields";
import FormSelectCustom from "@/components/Forms/FormSelectCustom";

const EmployeeEmploymentInfoForm = ({
  orgData,
  isOrgDataLoading,
}: {
  orgData: any;
  isOrgDataLoading: boolean;
}) => {
  const { data, isLoading: alUsersLoading } = useGetAllUsersQuery({});

  const managerOptions: any = data?.users
    // ?.filter((user: any) => user.role === "Manager")
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
          <DepartmentFields
            name="department"
            label="Department"
            placeholder="Your Department"
            orgData={orgData}
            isOrgDataLoading={isOrgDataLoading}
            required={true}
          />
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <DesignationFields
            name="designation"
            label="Designation"
            placeholder="Your Designation"
            orgData={orgData}
            isOrgDataLoading={isOrgDataLoading}
            required={true}
          />
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <TeamFields
            name="team"
            label="Team"
            placeholder="Select Team"
            orgData={orgData}
            isOrgDataLoading={isOrgDataLoading}
            required={true}
          />
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <RoleFields
            name="role"
            label="Role"
            placeholder="Select role"
            orgData={orgData}
            isOrgDataLoading={isOrgDataLoading}
            required={true}
          />
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <FormSelectCustom
            name="manager_id"
            selectOptions={
              managerOptions || [{ label: "No Manager", value: "" }]
            }
            label="Manager"
            placeholder="Select Manager"
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
