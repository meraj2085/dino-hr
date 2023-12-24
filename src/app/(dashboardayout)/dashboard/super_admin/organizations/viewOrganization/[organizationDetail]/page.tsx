"use client";

import StepperForm from "@/components/StepperForm/StepperForm";
import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";
import {
  useAddOrganizationMutation,
  useGetSingleOrganizationQuery,
} from "@/redux/api/organizationApi";
import { Button, message } from "antd";
import BasicInfo from "@/components/Organization/OrganizationDetails/BasicInfo";
import ContactPerson from "@/components/Organization/OrganizationDetails/ContactPerson";
import BillingDetails from "@/components/Organization/OrganizationDetails/BillingDetails";
import StepperPage from "@/components/StepperForm/StepperPage";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

const OrgDetailPage = ({
  params,
}: {
  params: { organizationDetail: string };
}) => {
  const availableServiceId = params.organizationDetail;
  const { data, isLoading } = useGetSingleOrganizationQuery(availableServiceId);

  console.log(params, data);
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
            label: "Super Admin",
            link: "/dashboard/super_admin",
          },
          {
            label: "Add Organization",
            link: "/dashboard/super_admin/organizations/addOrganization",
          },
        ]}
      />
      <ActionBar title="Organization Detail">
        <span></span>
        <div className="flex gap-5">
          <Button icon={<PlusOutlined />}>ADD ADMIN</Button>
          <Button icon={<EditOutlined />}>UPDATE</Button>
          <Button icon={<DeleteOutlined />}>DELETE</Button>
        </div>
      </ActionBar>
      <div className="w-full h-4" />
      <StepperPage steps={steps} />
    </div>
  );
};

export default OrgDetailPage;
