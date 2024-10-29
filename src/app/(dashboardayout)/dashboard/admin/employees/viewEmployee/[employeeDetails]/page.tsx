"use client";

import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { Col, Dropdown, Input, MenuProps, message, Row, Space } from "antd";
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
  RefreshSVG,
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
import { useRouter } from "next/navigation";
import { getUserInfo } from "@/services/auth.service";
import { generateRandomCaptcha } from "@/utils/captchaGenerator";
import "./employeeDetails.css";
import { useGetSingleOrganizationQuery } from "@/redux/api/organizationApi";

const EmployeeDetails = ({
  params,
}: {
  params: { employeeDetails: string };
}) => {
  const router = useRouter();
  const employeeId = params.employeeDetails;
  const { user_type, organization_id } = getUserInfo() as any;
  const { data, isLoading, refetch } = useGetSingleEmployeeQuery(employeeId);
  const [adminResetPassword, { isLoading: resetPasswordLoading }] =
    useAdminResetPasswordMutation();
  const [adminShowPassword, { isLoading: showPasswordLoading }] =
    useAdminShowPasswordMutation();
  const [deleteUser, { isLoading: deleteUserLoading }] =
    useDeleteUserMutation();
  const [disableOrActivateUser, { isLoading: disableUserLoading }] =
    useDisableOrActivateUserMutation();
  const { data: orgData, isLoading: isOrgDataLoading } =
    useGetSingleOrganizationQuery(organization_id);

  const [open_2, setOpen_2] = useState<boolean>(false);
  const [showPassData, setShowPassData] = useState<Record<string, any>>({});
  const [action, setAction] = useState<string | null>(null);
  const [isConfirmModalOpen, setConfirmModalOpen] = useState<boolean>(false);
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
  const [captcha, setCaptcha] = useState<string>(generateRandomCaptcha());
  const [captchaInput, setCaptchaInput] = useState<string>("");
  const [isVerified, setIsVerified] = useState<boolean>(false);

  const refreshCaptcha = () => {
    setCaptcha(generateRandomCaptcha());
    setCaptchaInput("");
    setIsVerified(false);
  };

  const openConfirmationModal = (actionType: string) => {
    setAction(actionType);
    setConfirmModalOpen(true);
  };

  const handleResetPassword = async (id: string) => {
    try {
      const res = await adminResetPassword({ id }).unwrap();
      if (res) {
        message.success("Password reset successfully");
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
        await refetch();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleConfirmation = async () => {
    if (!action) return;

    try {
      if (action === "activate") {
        await handleDisableOrActivateUser(employeeId, "Active");
      } else if (action === "disable") {
        await handleDisableOrActivateUser(employeeId, "Disabled");
      } else if (action === "reset the password of") {
        await handleResetPassword(employeeId);
      }
      setConfirmModalOpen(false);
    } catch (error) {
      console.error(error);
      setConfirmModalOpen(false);
    }
  };

  const closeDeleteModal = () => {
    setDeleteOpen(false);
    setCaptchaInput("");
    setIsVerified(false);
  };

  const handleCaptchaVerification = () => {
    if (captchaInput === captcha) {
      setIsVerified(true);
      message.success("Captcha verification successful");
    } else {
      message.error("Captcha verification failed");
      setIsVerified(false);
    }
  };

  const handleDeleteUser = async (id: string) => {
    try {
      const res = await deleteUser(id).unwrap();
      if (res) {
        router.push(`/dashboard/${user_type}/employees/viewEmployee`);
        refetch();
        message.success("User deleted successfully");
        closeDeleteModal();
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
          onClick={() => openConfirmationModal("reset the password of")}
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
          onClick={() => setDeleteOpen(true)}
          disabled={!orgData?.user_delete_permission}
          className={`flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm text-red-700 hover:bg-red-50 ${
            !orgData?.user_delete_permission
              ? "cursor-not-allowed"
              : "cursor-pointer"
          }`}
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
            onClick={() => openConfirmationModal("activate")}
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
            onClick={() => openConfirmationModal("disable")}
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
        isOpen={isConfirmModalOpen}
        closeModal={() => setConfirmModalOpen(false)}
        handleOk={() => handleConfirmation()}
        title="Confirm Action"
      >
        <p className="my-5">Are you sure you want to {action} this user?</p>
      </PPModal>

      <PPModal
        isOpen={deleteOpen}
        closeModal={closeDeleteModal}
        handleOk={
          isVerified
            ? () => handleDeleteUser(employeeId)
            : handleCaptchaVerification
        }
        okText={isVerified ? "Delete" : "Verify"}
        title="Confirm Action"
      >
        <div>
          <Row gutter={{ xs: 4, md: 20 }}>
            <div className="relative w-full flex justify-center items-center">
              <div className="bg-gray-200 px-4 py-[6px] border border-dashed border-gray-700">
                {captcha.split("").map((char, index) => (
                  <span
                    key={index}
                    className="captcha-char"
                    style={{
                      display: "inline-block",
                      transform: `translateY(${Math.sin(index) * 9}px)`,
                      fontSize: "24px",
                      fontWeight: "bold",
                      letterSpacing: "3px",
                      color: "#333",
                    }}
                  >
                    {char}
                  </span>
                ))}
              </div>

              <div
                style={{
                  position: "absolute",
                  right: "120px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  transition: "transform 0.3s ease",
                }}
                className="icon-container"
                onClick={refreshCaptcha}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-50%) rotate(180deg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-50%) rotate(0deg)";
                }}
              >
                <RefreshSVG />
              </div>
            </div>

            <Col xs={24} md={24} lg={24} className="my-3">
              <Input
                type="text"
                size="large"
                placeholder="Enter Captcha"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
              />
            </Col>
          </Row>
        </div>
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
