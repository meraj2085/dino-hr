"use client";
import EmployeeBankDetails from "@/components/Employees/EmployeesForm/EmployeeBankDetails";
import EmployeeContact from "@/components/Employees/EmployeesForm/EmployeeContact";
import EmployeeEmergencyContact from "@/components/Employees/EmployeesForm/EmployeeEmergencyContact";
import EmployeeIdentity from "@/components/Employees/EmployeesForm/EmployeeIdentity";
import EmployeeJobDetails from "@/components/Employees/EmployeesForm/EmployeeJobDetails";
import EmployeeBasicInfoForm from "@/components/Employees/EmployeesForm/EmployeesBasicInfo";
import StepperForm from "@/components/StepperForm/StepperForm";
import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { useAddEmployeeMutation } from "@/redux/api/employeeApi";
import { message } from "antd";

  const steps = [
    {
      title: "Basic info",
      content: <EmployeeBasicInfoForm />,
    },
    {
      title: "Commiunication",
      content: <EmployeeContact />,
    },
    {
      title: "Identity",
      content: <EmployeeIdentity />,
    },
    {
      title: "Bank Details",
      content: <EmployeeBankDetails />,
    },
    {
      title: "Job Details",
      content: <EmployeeJobDetails />,
    },
    {
      title: "Emergency Contact",
      content: <EmployeeEmergencyContact />,
    },
  ];

  const AddEmployee = () => {
    const [addEmployee] = useAddEmployeeMutation();
    const handleEmployeesSubmit = async (values: any) => {
      console.log(values);
      try {
        const res = await addEmployee(values).unwrap();
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
              label: "Employees / Add Employee",
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
