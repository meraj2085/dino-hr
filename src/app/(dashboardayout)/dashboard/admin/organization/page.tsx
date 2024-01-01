"use client";

import BasicInfo from "@/components/Organization/OrganizationDetails/BasicInfo";
import BillingDetails from "@/components/Organization/OrganizationDetails/BillingDetails";
import ContactPerson from "@/components/Organization/OrganizationDetails/ContactPerson";
import StepperPage from "@/components/StepperForm/StepperPage";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { useGetSingleOrganizationQuery } from "@/redux/api/organizationApi";
import { getUserInfo } from "@/services/auth.service";

const Organization = () => {
  const { organization_id } = getUserInfo() as any;
  const { data, isLoading } = useGetSingleOrganizationQuery(organization_id);

  const steps = [
    {
      title: "Basic Info",
      content: <BasicInfo organization={data} />,
    },
    {
      title: "Contact Person",
      content: <ContactPerson organization={data} />,
    },
    {
      title: "Billing Details",
      content: <BillingDetails organization={data} />,
    },
  ];

  return (
    <div>
      <BreadCrumb
        items={[
          {
            label: "Admin",
            link: "/dashboard/admin",
          },
        ]}
      />

      <div className="w-full h-4" />
      <StepperPage steps={steps} />
    </div>
  );
};

export default Organization;
