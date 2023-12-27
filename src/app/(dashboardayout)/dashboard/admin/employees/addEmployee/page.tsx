"use client";

import EmployeeBasicInfoForm from "@/components/Employees/AddEmployeeForms/EmployeeBasicInfo";
import EmployeeContactInfoForm from "@/components/Employees/AddEmployeeForms/EmployeeContactInfo";
import EmployeeEmploymentInfoForm from "@/components/Employees/AddEmployeeForms/EmployeeEmploymentInfo";
import EmployeeFinancialInfoForm from "@/components/Employees/AddEmployeeForms/EmployeeFinancialInfo";
import StepperForm from "@/components/StepperForm/StepperForm";
import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { useAddEmployeeMutation } from "@/redux/api/employeeApi";
import { getUserInfo } from "@/services/auth.service";
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
    const { profile_picture, ...rest } = values;

    const total_ctc =
      Number(rest.salaryDetails.basic_salary) +
      Number(rest.salaryDetails.total_allowance) +
      Number(rest.salaryDetails.annual_bonus);
    rest.salaryDetails.total_ctc = total_ctc.toString();
    // console.log(values);
    try {
      const res = await addEmployee({ ...rest, organization_id }).unwrap();
      console.log(res);
      if (res.id) {
        message.success("Employee Added Successfully");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };
  return (
    <div>
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
        navigateLink="/dashboard/admin/employees/addEmployee"
        submitHandler={(value) => {
          handleEmployeesSubmit(value);
        }}
        steps={steps}
      />
    </div>
  );
};

export default AddEmployee;
