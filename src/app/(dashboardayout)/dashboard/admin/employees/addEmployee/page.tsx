"use client";
import EmployeesFormOne from "@/components/EmployeesForm/EmployeesFormOne";
import EmployeesFormThree from "@/components/EmployeesForm/EmployeesFormThree";
import EmployeesFormTwo from "@/components/EmployeesForm/EmployeesFormTwo";
import StepperForm from "@/components/StepperForm/StepperForm";

const steps = [
  {
    title: "Employees Info 1",
    content: <EmployeesFormOne />,
  },
  {
    title: "Employees Info 2",
    content: <EmployeesFormTwo />,
  },
  {
    title: "Employees Info 3",
    content: <EmployeesFormThree />,
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
