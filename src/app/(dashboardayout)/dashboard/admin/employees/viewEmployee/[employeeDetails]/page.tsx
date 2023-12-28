"use client";

import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { Button } from "antd";
import BasicInfo from "@/components/Organization/OrganizationDetails/BasicInfo";
import ContactPerson from "@/components/Organization/OrganizationDetails/ContactPerson";
import BillingDetails from "@/components/Organization/OrganizationDetails/BillingDetails";
import StepperPage from "@/components/StepperForm/StepperPage";
import { EditOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useGetSingleEmployeeQuery } from "@/redux/api/employeeApi";
import EmployeeBasicDetails from "@/components/Employees/EmployeeDetails/EmployeeBasicDetails";
import EmployeeCommiunication from "@/components/Employees/EmployeeDetails/EmployeeCommiunication";

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
      content: <EmployeeBasicDetails employee={data} />,
    },
    {
      title: "Commiunication",
      content: <EmployeeCommiunication employee={data} />,
    },
    {
      title: "Billing Details",
      content: <BillingDetails organization={data} />,
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
