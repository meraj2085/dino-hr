"use client";

import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { Button } from "antd";
import StepperPage from "@/components/StepperForm/StepperPage";
import { EditOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useGetSingleEmployeeQuery } from "@/redux/api/employeeApi";
import EmployeeBasicInfo from "@/components/Employees/EmployeeDetails/EmployeeBasicInfo";
import EmployeeContactInfo from "@/components/Employees/EmployeeDetails/EmployeeContactInfo";
import EmployeeEmploymentInfo from "@/components/Employees/EmployeeDetails/EmployeeEmploymentInfo";
import EmployeeFinancialInfo from "@/components/Employees/EmployeeDetails/EmployeeFinancialInfo";

const EmployeeDetails = ({
  params,
}: {
  params: { employeeDetails: string };
}) => {
  const employeeId = params.employeeDetails;
  const { data, isLoading } = useGetSingleEmployeeQuery(employeeId);

  const steps = [
    {
      title: "Basic Info",
      content: <EmployeeBasicInfo user={data} />,
    },
    {
      title: "Contact Info",
      content: <EmployeeContactInfo user={data} />,
    },
    {
      title: "Employment Info",
      content: <EmployeeEmploymentInfo user={data} />,
    },
    {
      title: "Financial Info",
      content: <EmployeeFinancialInfo user={data} />,
    },
  ];

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
      <ActionBar title="Employee Detail">
        <span></span>
        <div className="flex gap-5">
          <Link
            href={`/dashboard/admin/employees/updateEmployee/${employeeId}`}
          >
            <Button icon={<EditOutlined />}>UPDATE</Button>
          </Link>
        </div>
      </ActionBar>
      <div className="w-full h-4" />
      <StepperPage steps={steps} />
    </div>
  );
};

export default EmployeeDetails;
