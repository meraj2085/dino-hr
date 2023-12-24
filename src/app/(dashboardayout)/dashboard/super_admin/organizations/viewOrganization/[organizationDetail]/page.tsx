"use client";

import StepperForm from "@/components/StepperForm/StepperForm";
import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { useAddOrganizationMutation } from "@/redux/api/organizationApi";
import { message } from "antd";
import BasicInfo from "@/components/Organization/OrganizationDetails/BasicInfo";
import ContactPerson from "@/components/Organization/OrganizationDetails/ContactPerson";
import BillingDetails from "@/components/Organization/OrganizationDetails/BillingDetails";
import StepperPage from "@/components/StepperForm/StepperPage";

const OrgDetailPage = () => {
  const steps = [
    {
      title: "Basic Info",
      content: <BasicInfo />,
    },
    {
      title: "Contact Person",
      content: <ContactPerson />,
    },
    {
      title: "Billing Details",
      content: <BillingDetails />,
    },
  ];

  // const [addOrganization, { isLoading }] = useAddOrganizationMutation();

  // const handleStudentSubmit = async (values: any) => {
  //   try {
  //     // console.log(values);
  //     const res = await addOrganization(values).unwrap();
  //     console.log(res);
  //     if (res.id) {
  //       message.success("Organization Added Successfully");
  //     }
  //   } catch (err: any) {
  //     message.error(err.message);
  //   }
  // };

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
      <StepperPage
        // persistKey="addOrganizationForm"
        // navigateLink="/dashboard/super_admin/organizations/viewOrganization"
        // submitHandler={(value) => {
        //   handleStudentSubmit(value);
        // }}
        steps={steps}
      />
    </div>
  );
};

export default OrgDetailPage;
