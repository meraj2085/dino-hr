"use client";

import EmployeeBasicInfoForm from "@/components/Employees/AddEmployeeForms/EmployeeBasicInfo";
import EmployeeContactInfoForm from "@/components/Employees/AddEmployeeForms/EmployeeContactInfo";
import EmployeeEmploymentInfoForm from "@/components/Employees/AddEmployeeForms/EmployeeEmploymentInfo";
import EmployeeFinancialInfoForm from "@/components/Employees/AddEmployeeForms/EmployeeFinancialInfo";
import StepperForm from "@/components/StepperForm/StepperForm";
import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { useAddEmployeeMutation } from "@/redux/api/employeeApi";
import { userSchema } from "@/schema/user";
import { getUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { message } from "antd";

const steps = [
  {
    title: "Basic Info",
    content: <EmployeeBasicInfoForm />,
  },
  {
    title: "Contact Info",
    content: <EmployeeContactInfoForm />,
  },
  {
    title: "Employment Info",
    content: <EmployeeEmploymentInfoForm />,
  },
  {
    title: "Financial Info",
    content: <EmployeeFinancialInfoForm />,
  },
];

const AddEmployee = () => {
  const { organization_id } = getUserInfo() as any;
  const [addEmployee] = useAddEmployeeMutation();
  const handleEmployeesSubmit = async (values: any) => {
    // const { profile_picture, ...rest } = values;
    const total_ctc =
      Number(values.salaryDetails.basic_salary) +
      Number(values.salaryDetails.total_allowance) +
      Number(values.salaryDetails.annual_bonus);
    values.salaryDetails.total_ctc = total_ctc.toString();
    values.organization_id = organization_id;
    try {
      const res = await addEmployee(values).unwrap();
      if (res.id) {
        message.success("Employee Added Successfully");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        minHeight:"680px",
        borderRadius: "20px",
        padding: "24px 24px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        overflowX: "auto",
      }}
    >
      <BreadCrumb
        items={[
          {
            label: "Admin",
            link: "/dashboard/admin",
          },
          {
            label: "Add Employee",
            link: "/dashboard/admin/employees/addEmployee",
          },
        ]}
      />
      <ActionBar title="Add Employee"></ActionBar>
      <div className="w-full h-4" />

      <StepperForm
        persistKey="addEmployeesForm"
        navigateLink="/dashboard/admin/employees/viewEmployee"
        submitHandler={(value) => {
          handleEmployeesSubmit(value);
        }}
        steps={steps}
        resolver={yupResolver(userSchema)}
      />
    </div>
  );
};

export default AddEmployee;
