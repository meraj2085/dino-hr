"use client";

import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { Button, Dropdown, MenuProps, Space } from "antd";
import StepperPage from "@/components/StepperForm/StepperPage";
import { EditOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useGetSingleEmployeeQuery } from "@/redux/api/employeeApi";
import EmployeeBasicInfo from "@/components/Employees/EmployeeDetails/EmployeeBasicInfo";
import EmployeeContactInfo from "@/components/Employees/EmployeeDetails/EmployeeContactInfo";
import EmployeeEmploymentInfo from "@/components/Employees/EmployeeDetails/EmployeeEmploymentInfo";
import EmployeeFinancialInfo from "@/components/Employees/EmployeeDetails/EmployeeFinancialInfo";
import DHRButton from "@/components/ui/DHRButton";
import { DeleteSVG, DisableSVG, LockSVG, ResetPasswordSVG } from "@/shared/svg";

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

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link
          href="/auth/changePassword"
          className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm text-gray-800 hover:bg-gray-50"
          role="menuitem"
        >
          <ResetPasswordSVG />
          Reset Password
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <button className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm text-red-700 hover:bg-red-50">
          <DeleteSVG />
          Delete
        </button>
      ),
    },
    {
      key: "3",
      label: (
        <button className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm text-red-700 hover:bg-red-50">
          <DisableSVG />
          Disable
        </button>
      ),
    },
  ];

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
        <div className="flex gap-2">
          <div className="flex gap-5">
            <Dropdown placement="bottom" arrow menu={{ items }}>
              <a>
                <Space wrap size={16}>
                  <DHRButton text="ACTIONS" />
                </Space>
              </a>
            </Dropdown>
          </div>
          <div className="flex gap-5">
            <Link
              href={`/dashboard/admin/employees/updateEmployee/${employeeId}`}
            >
              <DHRButton icon={<EditOutlined />} text="UPDATE" />
            </Link>
          </div>
        </div>
      </ActionBar>
      <div className="w-full h-4" />
      <StepperPage steps={steps} />
    </div>
  );
};

export default EmployeeDetails;
