"use client";

import AdminBasicInfoForm from "@/components/Organization/CreateAdminForms/AdminBasicInfo";
import AdminBankDetails from "@/components/Organization/CreateAdminForms/AdminBankDetails";
import AdminContact from "@/components/Organization/CreateAdminForms/AdminContact";
import AdminEmergencyContact from "@/components/Organization/CreateAdminForms/AdminEmergencyContact";
import AdminIdentity from "@/components/Organization/CreateAdminForms/AdminIdentity";
import AdminJobDetails from "@/components/Organization/CreateAdminForms/AdminJobDetails";
import StepperForm from "@/components/StepperForm/StepperForm";
import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { message } from "antd";
import { useAddEmployeeMutation } from "@/redux/api/employeeApi";

const steps = [
  {
    title: "Basic info",
    content: <AdminBasicInfoForm />,
  },
  {
    title: "Commiunication",
    content: <AdminContact />,
  },
  {
    title: "Identity",
    content: <AdminIdentity />,
  },
  {
    title: "Bank Details",
    content: <AdminBankDetails />,
  },
  {
    title: "Job Details",
    content: <AdminJobDetails />,
  },
  {
    title: "Emergency Contact",
    content: <AdminEmergencyContact />,
  },
];

const AddAdmin = ({ params }: { params: Record<"adminOrgId", string> }) => {
  const [addAdmin] = useAddEmployeeMutation();
  const handleAdminsSubmit = async (values: any) => {
    // console.log(values);
    try {
      const res = await addAdmin(values).unwrap();
      console.log(res);
      if (res.id) {
        message.success("Admin Added Successfully");
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
            label: "Super Admin",
            link: "/dashboard/super_admin",
          },
          {
            label: "Add Admin",
            link: `/dashboard/super_admin/organizations/updateOrganization/createAdmin/${params.adminOrgId}`,
          },
        ]}
      />
      <ActionBar title="Add Admin"></ActionBar>
      <div className="w-full h-4" />

      <StepperForm
        persistKey="addAdminForm"
        navigateLink="/dashboard/super_admin/organizations/viewOrganization"
        submitHandler={(value) => {
          handleAdminsSubmit(value);
        }}
        steps={steps}
      />
    </div>
  );
};

export default AddAdmin;
