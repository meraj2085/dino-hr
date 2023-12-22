"use client";

import OrganizationInfo1 from "@/components/OrganizationForms/OrganizationForm1";
import OrganizationInfo2 from "@/components/OrganizationForms/OrganizationForm2";
import OrganizationInfo3 from "@/components/OrganizationForms/OrganizationForm3";
import StepperForm from "@/components/StepperForm/StepperForm";
import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { Space } from "antd";

const AddOrganization = () => {
  const steps = [
    {
      title: "Organization Info 1",
      content: <OrganizationInfo1 />,
    },
    {
      title: "Organization Info 2",
      content: <OrganizationInfo2 />,
    },
    {
      title: "Organization Info 3",
      content: <OrganizationInfo3 />,
    },
  ];

  const handleStudentSubmit = async (values: any) => {
    try {
      console.log(values);
    } catch (err: any) {
      console.error(err.message);
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
            label: "Add Organization",
            link: "/dashboard/super_admin/organizations/addOrganization",
          },
        ]}
      />
      <ActionBar title="Add Organization"></ActionBar>
      <div className="w-full h-4"/>
      <StepperForm
        persistKey="addOrganizationForm"
        navigateLink="/dashboard/super_admin/organizations/viewOrganization"
        submitHandler={(value) => {
          handleStudentSubmit(value);
        }}
        steps={steps}
      />
    </div>
  );
};

export default AddOrganization;
