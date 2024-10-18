"use client";

import StepperForm from "@/components/StepperForm/StepperForm";
import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { Spin, message } from "antd";
import {
  useGetSingleUserQuery,
  useUpdateUserMutation,
} from "@/redux/api/userApi";
import EmployeeBasicInfoForm from "@/components/Employees/AddEmployeeForms/EmployeeBasicInfo";
import EmployeeContactInfoForm from "@/components/Employees/AddEmployeeForms/EmployeeContactInfo";
import EmployeeEmploymentInfoForm from "@/components/Employees/AddEmployeeForms/EmployeeEmploymentInfo";
import EmployeeFinancialInfoForm from "@/components/Employees/AddEmployeeForms/EmployeeFinancialInfo";
import { useUpdateEmployeeMutation } from "@/redux/api/employeeApi";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "@/schema/user";
import { useGetSingleOrganizationQuery } from "@/redux/api/organizationApi";
import { getUserInfo } from "@/services/auth.service";

const UpdateEmployee = ({ params }: { params: { employeeId: string } }) => {
  const empId = params.employeeId;
  const { organization_id } = getUserInfo() as any;

  const { data, isLoading } = useGetSingleUserQuery(empId);
  const { data: orgData, isLoading: isOrgDataLoading } =
    useGetSingleOrganizationQuery(organization_id);

  const steps = [
    {
      title: "Basic Info",
      content: (
        <EmployeeBasicInfoForm defaultImageUrl={data?.profile_picture} />
      ),
    },
    {
      title: "Contact Info",
      content: <EmployeeContactInfoForm />,
    },
    {
      title: "Employment Info",
      content: (
        <EmployeeEmploymentInfoForm
          orgData={orgData}
          isOrgDataLoading={isOrgDataLoading}
        />
      ),
    },
    {
      title: "Financial Info",
      content: <EmployeeFinancialInfoForm />,
    },
  ];

  const [UpdateEmployee, { isLoading: isUpdateLoading }] =
    useUpdateEmployeeMutation();

  const handleSubmit = async (values: any) => {
    try {
      const res = await UpdateEmployee({
        id: empId,
        updatedData: values,
      }).unwrap();
      if (res._id) {
        message.success("Employee Updated Successfully");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  if (isLoading) return <Spin />;

  const defaultValues = {
    organization_id: data?.organization_id,
    first_name: data?.first_name,
    last_name: data?.last_name,
    date_of_birth: data?.date_of_birth,
    gender: data?.gender,
    employment_status: data?.employment_status,
    office_email: data?.office_email,
    date_of_joining: data?.date_of_joining,
    department: data?.department,
    flat_number: data?.flat_number,
    building_name: data?.building_name,
    street: data?.street,
    city: data?.city,
    landmark: data?.landmark,
    country: data?.country,
    state: data?.state,
    postal_code: data?.postal_code,
    phone_number: data?.phone_number,
    other_phone_number: data?.other_phone_number,
    personal_email: data?.personal_email,
    bank_name: data?.bank_name,
    role: data?.role,
    account_number: data?.account_number,
    branch_name: data?.branch_name,
    designation: data?.designation,
    team: data?.team,
    manager_id: data?.manager_id, // [_id of user thats role is manager]
    emergency_contact: {
      full_name: data?.emergency_contact?.full_name,
      phone_number: data?.emergency_contact?.phone_number,
      email: data?.emergency_contact?.email,
      relationship: data?.emergency_contact?.relationship,
    },
    contract_date: data?.contract_date,
    salaryDetails: {
      basic_salary: data?.salaryDetails?.basic_salary,
      total_allowance: data?.salaryDetails?.total_allowance,
      annual_bonus: data?.salaryDetails?.annual_bonus,
      total_ctc: data?.salaryDetails?.total_ctc,
    },
  };

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        minHeight: "680px",
        borderRadius: "20px",
        padding: "24px 24px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        overflowX: "auto",
      }}
    >
      <BreadCrumb
        items={[
          {
            label: "Super Admin",
            link: "/dashboard/super_admin",
          },
          {
            label: "Add Organization",
            link: "/dashboard/super_admin/organizations/addOrganization",
          },
        ]}
      />
      <ActionBar title="Update Employee"></ActionBar>
      <div className="w-full h-4" />
      <StepperForm
        defaultValues={defaultValues}
        navigateLink="/dashboard/admin/employees/viewEmployee"
        submitHandler={(value) => {
          handleSubmit(value);
        }}
        steps={steps}
        resolver={yupResolver(userSchema)}
      />
    </div>
  );
};

export default UpdateEmployee;
