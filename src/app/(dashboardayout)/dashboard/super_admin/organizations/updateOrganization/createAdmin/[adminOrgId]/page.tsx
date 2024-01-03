"use client";

import StepperForm from "@/components/StepperForm/StepperForm";
import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { message } from "antd";
import { useAddEmployeeMutation } from "@/redux/api/employeeApi";
import AdminBasicInfoForm from "@/components/Organization/CreateAdminForms/AdminBasicInfo";
import AdminContactInfoForm from "@/components/Organization/CreateAdminForms/AdminContactInfo";
import AdminFinancialInfoForm from "@/components/Organization/CreateAdminForms/AdminFinancialInfo";
import AdminEmploymentInfoForm from "@/components/Organization/CreateAdminForms/AdminEmploymentInfo";

const steps = [
  {
    title: "Basic Info",
    content: <AdminBasicInfoForm />,
  },
  {
    title: "Contact Info",
    content: <AdminContactInfoForm />,
  },
  {
    title: "Employment Info",
    content: <AdminEmploymentInfoForm />,
  },
  {
    title: "Financial Info",
    content: <AdminFinancialInfoForm />,
  },
];

const AddAdmin = ({ params }: { params: Record<"adminOrgId", string> }) => {
  const [addAdmin] = useAddEmployeeMutation();
  const handleAdminsSubmit = async (values: any) => {
    const total_ctc =
      Number(values.salaryDetails.basic_salary) +
      Number(values.salaryDetails.total_allowance) +
      Number(values.salaryDetails.annual_bonus);
    values.salaryDetails.total_ctc = total_ctc.toString();
    values.user_type = "admin";
    values.organization_id = params.adminOrgId;
        
    try {
      const res = await addAdmin(values).unwrap();
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
            label: "Super Admin",
            link: "/dashboard/super_admin",
          },
          {
            label: "Create Admin",
            link: `/dashboard/super_admin/organizations/updateOrganization/createAdmin/${params.adminOrgId}`,
          },
        ]}
      />
      <ActionBar title="Create Admin"></ActionBar>
      <div className="w-full h-4" />

      <StepperForm
        persistKey="createAdminForm"
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
