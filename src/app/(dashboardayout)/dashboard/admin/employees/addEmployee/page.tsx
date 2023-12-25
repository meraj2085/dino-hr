"use client";
import EmployeeBankDetails from "@/components/EmployeesForm/EmployeeBankDetails";
import EmployeeContact from "@/components/EmployeesForm/EmployeeContact";
import EmployeeEmergencyContact from "@/components/EmployeesForm/EmployeeEmergencyContact";
import EmployeeIdentity from "@/components/EmployeesForm/EmployeeIdentity";
import EmployeeJobDetails from "@/components/EmployeesForm/EmployeeJobDetails";
import EmployeeBasicInfoForm from "@/components/EmployeesForm/EmployeesBasicInfo";
import StepperForm from "@/components/StepperForm/StepperForm";

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

const handleEmployeesSubmit = async (values: any) => {
  try {
    console.log(values);
  } catch (err: any) {
    console.error(err.message);
  }
};

const AddEmployee = () => {
  return (
    <div>
      <h1 className="text-3xl font-extrabold text-center my-8">
        Add Employees
      </h1>
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
