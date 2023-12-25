"use client";

import BasicInfoForm from "@/components/OrganizationForms/BasicInfo";
import StepperForm from "@/components/StepperForm/StepperForm";
import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";
import ContactPersonForm from "@/components/OrganizationForms/ContactPerson";
import BillingDetailsForm from "@/components/OrganizationForms/BillingDetails";
import { useAddOrganizationMutation } from "@/redux/api/organizationApi";
import { message } from "antd";

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
      // console.log(values);
      const res = await addOrganization(values).unwrap();
      console.log(res);
      if (res.id) {
        message.success("Organization Added Successfully");
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
      />
    </div>
  );
};

export default AddOrganization;
