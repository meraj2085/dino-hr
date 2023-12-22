"use client";

import OrganizationInfo1 from "@/components/OrganizationForms/OrganizationForm1";
import OrganizationInfo2 from "@/components/OrganizationForms/OrganizationForm2";
import OrganizationInfo3 from "@/components/OrganizationForms/OrganizationForm3";
import StepperForm from "@/components/StepperForm/StepperForm";

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
      <h1 className="text-3xl font-extrabold text-center my-8">Add Organization</h1>
      <StepperForm
        persistKey="add-organization-form"
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
