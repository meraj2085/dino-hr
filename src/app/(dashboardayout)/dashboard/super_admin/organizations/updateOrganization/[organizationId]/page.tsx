"use client";

import BasicInfoForm from "@/components/Organization/OrganizationForms/BasicInfo";
import StepperForm from "@/components/StepperForm/StepperForm";
import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";
import ContactPersonForm from "@/components/Organization/OrganizationForms/ContactPerson";
import BillingDetailsForm from "@/components/Organization/OrganizationForms/BillingDetails";
import {
  useGetSingleOrganizationQuery,
  useUpdateOrganizationMutation,
} from "@/redux/api/organizationApi";
import { Spin, message } from "antd";

const UpdateOrganization = ({
  params,
}: {
  params: { organizationId: string };
}) => {

  const orgId = params.organizationId;

  const { data, isLoading } = useGetSingleOrganizationQuery(orgId);

  const steps = [
    {
      title: "Basic Info",
      content: <BasicInfoForm defaultImageUrl={data?.profile_picture} />,
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

  const [updateOrganization, { isLoading: isUpdateLoading }] =
    useUpdateOrganizationMutation();

  const handleSubmit = async (values: any) => {
    try {
      // console.log(values);
      const res = await updateOrganization({
        id: orgId,
        updatedData: values,
      }).unwrap();
      console.log(res);
      if (res.id) {
        message.success("Organization Updated Successfully");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  if (isLoading) return <Spin />;

  // console.log(data);

  const defaultValues = {
    bin_number: data?.bin_number,
    nid_number: data?.nid_number,
    tin_number: data?.tin_number,
    email: data?.email,
    street: data?.street,
    city: data?.city,
    landmark: data?.landmark,
    country: data?.country,
    state: data?.state,
    postal_code: data?.postal_code,
    billing_street: data?.billing_street,
    billing_city: data?.billing_city,
    billing_landmark: data?.billing_landmark,
    billing_country: data?.billing_country,
    billing_state: data?.billing_state,
    billing_postal_code: data?.billing_postal_code,
    registered_street: data?.registered_street,
    registered_city: data?.registered_city,
    registered_landmark: data?.registered_landmark,
    registered_country: data?.registered_country,
    registered_state: data?.registered_state,
    registered_postal_code: data?.registered_postal_code,
    contact_person_first_name: data?.contact_person_first_name,
    contact_person_last_name: data?.contact_person_last_name,
    contact_person_middle_name: data?.contact_person_middle_name,
    contact_person_email: data?.contact_person_email,
    contact_person_phone_number: data?.contact_person_phone_number,
    account_manager_first_name: data?.account_manager_first_name,
    account_manager_last_name: data?.account_manager_last_name,
    account_manager_middle_name: data?.account_manager_middle_name,
    account_manager_designation: data?.account_manager_designation,
    account_manager_email: data?.account_manager_email,
    account_manager_phone_number: data?.account_manager_phone_number,
    billing_contact_person_first_name:
      data?.billing_contact_person_first_name,
    billing_contact_person_last_name:
      data?.billing_contact_person_last_name,
    billing_contact_person_middle_name:
      data?.billing_contact_person_middle_name,
    billing_contact_person_email: data?.billing_contact_person_email,
    billing_contact_person_phone_number:
      data?.billing_contact_person_phone_number,
    bank_name: data?.bank_name,
    account_number: data?.account_number,
    routing_number: data?.routing_number,
    plan_validity: data?.plan_validity,
    number_of_users: data?.number_of_users,
    company_name: data?.company_name,
    company_code: data?.company_code,
    // profile_picture: data?.profile_picture,
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
      <ActionBar title="Update Organization"></ActionBar>
      <div className="w-full h-4" />
      <StepperForm
        defaultValues={defaultValues}
        navigateLink="/dashboard/super_admin/organizations/viewOrganization"
        submitHandler={(value) => {
          handleSubmit(value);
        }}
        steps={steps}
      />
    </div>
  );
};

export default UpdateOrganization;
