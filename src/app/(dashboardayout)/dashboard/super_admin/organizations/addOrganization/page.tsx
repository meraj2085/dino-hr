"use client";

import BasicInfoForm from "@/components/Organization/OrganizationForms/BasicInfo";
import StepperForm from "@/components/StepperForm/StepperForm";
import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";
import ContactPersonForm from "@/components/Organization/OrganizationForms/ContactPerson";
import BillingDetailsForm from "@/components/Organization/OrganizationForms/BillingDetails";
import { useAddOrganizationMutation } from "@/redux/api/organizationApi";
import { message } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import { organizationSchema } from "@/schema/organization";

const AddOrganization = () => {
  const steps = [
    {
      title: "Basic Info",
      content: <BasicInfoForm />,
    },
    {
      title: "Contact Person",
      content: <ContactPersonForm />,
    },
    {
      title: "Billing Details",
      content: <BillingDetailsForm />,
    },
  ];

  const [addOrganization, { isLoading }] = useAddOrganizationMutation();

  const handleStudentSubmit = async (values: any) => {
    try {
      const res = await addOrganization(values).unwrap();
      if (res.id) {
        message.success("Organization Added Successfully");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

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
      <div className="w-full h-4" />
      <StepperForm
        persistKey="addOrganizationForm"
        navigateLink="/dashboard/super_admin/organizations/viewOrganization"
        submitHandler={(value) => {
          handleStudentSubmit(value);
        }}
        steps={steps}
        resolver={yupResolver(organizationSchema)}
      />
    </div>
  );
};

export default AddOrganization;
