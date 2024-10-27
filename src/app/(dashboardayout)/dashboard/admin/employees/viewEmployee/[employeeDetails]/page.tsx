"use client";

import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { Dropdown, MenuProps, message, Space } from "antd";
import StepperPage from "@/components/StepperForm/StepperPage";
import { EditOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useGetSingleEmployeeQuery } from "@/redux/api/employeeApi";
import EmployeeBasicInfo from "@/components/Employees/EmployeeDetails/EmployeeBasicInfo";
import EmployeeContactInfo from "@/components/Employees/EmployeeDetails/EmployeeContactInfo";
import EmployeeEmploymentInfo from "@/components/Employees/EmployeeDetails/EmployeeEmploymentInfo";
import EmployeeFinancialInfo from "@/components/Employees/EmployeeDetails/EmployeeFinancialInfo";
import DHRButton from "@/components/ui/DHRButton";
import {
  ActionSVG,
  ActiveSVG,
  CopyIconSVG,
  DeleteSVG,
  DisableSVG,
  ResetPasswordSVG,
  ViewPasswordSVG,
} from "@/shared/svg";
import PPModal from "@/components/ui/Modal";
import { useState } from "react";
import {
  useAdminResetPasswordMutation,
  useAdminShowPasswordMutation,
} from "@/redux/api/authApi";
import SmallLoader from "@/components/shared/SmallLoader";
import {
  useDeleteUserMutation,
  useDisableOrActivateUserMutation,
} from "@/redux/api/userApi";

const EmployeeDetails = ({
  params,
}: {
  params: { employeeDetails: string };
}) => {
  const employeeId = params.employeeDetails;
  const { data, isLoading, refetch } = useGetSingleEmployeeQuery(employeeId);
  const [adminResetPassword, { isLoading: resetPasswordLoading }] =
    useAdminResetPasswordMutation();
  const [adminShowPassword, { isLoading: showPasswordLoading }] =
    useAdminShowPasswordMutation();
  const [deleteUser, { isLoading: deleteUserLoading }] =
    useDeleteUserMutation();
  const [disableOrActivateUser, { isLoading: disableUserLoading }] =
    useDisableOrActivateUserMutation();

  const [open, setOpen] = useState<boolean>(false);
  const [open_2, setOpen_2] = useState<boolean>(false);
  const [showPassData, setShowPassData] = useState<Record<string, any>>({});

  const handleResetPassword = async (id: string) => {
    try {
      const res = await adminResetPassword({ id }).unwrap();
      if (res) {
        message.success("Password reset successfully");
        setOpen(false);
        await refetch();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleShowPassword = async (id: string) => {
    try {
      setOpen_2(true);
      const res = await adminShowPassword({ id }).unwrap();
      if (res) {
        setShowPassData(res);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCopyToClipboard = () => {
    const textToCopy = `Email: ${showPassData?.office_email} | Password: ${showPassData?.password}`;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        message.success("Copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        message.error("Failed to copy.");
      });
  };

  const handleDeleteUser = async (id: string) => {
    try {
      const res = await deleteUser(id).unwrap();
      if (res) {
        message.success("User deleted successfully");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDisableOrActivateUser = async (
    id: string,
    status: "Disabled" | "Active"
  ) => {
    try {
      const res = await disableOrActivateUser({ id, status }).unwrap();
      if (res) {
        message.success(
          `User ${
            status === "Disabled" ? "disabled" : "activated"
          } successfully`
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

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
      label: data?.is_password_reset ? (
        <button
          onClick={() => setOpen(true)}
          className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm text-gray-800 hover:bg-gray-50"
          role="menuitem"
        >
          <ResetPasswordSVG />
          Reset Password
        </button>
      ) : (
        <button
          onClick={() => handleShowPassword(employeeId)}
          className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm text-gray-800 hover:bg-gray-50"
        >
          <ViewPasswordSVG />
          Show Password
        </button>
      ),
    },
    {
      key: "2",
      label: (
        <button
          onClick={() => handleDeleteUser(employeeId)}
          className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm text-red-700 hover:bg-red-50"
        >
          <DeleteSVG />
          Delete
        </button>
      ),
    },
    {
      key: "3",
      label:
        data?.status === "Disabled" ? (
          <button
            disabled={data?.status === "Active" ? true : false}
            onClick={() => handleDisableOrActivateUser(employeeId, "Active")}
            className={`flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm text-[#00674A] hover:bg-green-50 ${
              data?.status === "Active"
                ? "cursor-not-allowed"
                : "cursor-pointer"
            }`}
          >
            <ActiveSVG />
            Activate
          </button>
        ) : (
          <button
            disabled={data?.status === "Disabled" ? true : false}
            onClick={() => handleDisableOrActivateUser(employeeId, "Disabled")}
            className={`flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm text-red-700 hover:bg-red-50 ${
              data?.status === "Disabled"
                ? "cursor-not-allowed"
                : "cursor-pointer"
            }`}
          >
            <DisableSVG />
            Disable
          </button>
        ),
    },
  ];

  return (
    <>
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
        <ActionBar title="Employee Details">
          <span></span>
          <div className="flex gap-2">
            <div className="flex gap-5">
              <Dropdown placement="bottom" arrow menu={{ items }}>
                <a>
                  <Space wrap size={16}>
                    <DHRButton icon={<ActionSVG />} text="ACTIONS" />
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
      <PPModal
        title="Reset Password"
        isOpen={open}
        closeModal={() => setOpen(false)}
        handleOk={() => handleResetPassword(employeeId)}
      >
        <p className="my-5">Are you sure you want to reset password?</p>
      </PPModal>
      <PPModal
        title="Show Password"
        isOpen={open_2}
        closeModal={() => setOpen_2(false)}
        showOkButton={false}
        showCancelButton={false}
      >
        <div className="flex items-center justify-between w-full h-20 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
          {showPasswordLoading ? (
            <div className="w-full flex justify-center">
              <SmallLoader />
            </div>
          ) : (
            <>
              <div className="flex flex-col justify-center ps-5">
                <p className="text-sm mb-1 text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Email:</span>{" "}
                  {showPassData?.office_email}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Password:</span>{" "}
                  {showPassData?.password}
                </p>
              </div>

              <div className="flex items-center justify-center h-full pr-4">
                <div
                  className="hover:bg-slate-200 p-1 rounded-md duration-300"
                  onClick={handleCopyToClipboard}
                >
                  <CopyIconSVG />
                </div>
              </div>
            </>
          )}
        </div>
      </PPModal>
    </>
  );
};

export default EmployeeDetails;
