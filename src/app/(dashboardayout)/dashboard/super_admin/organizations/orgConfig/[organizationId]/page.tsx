"use client";

import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormTimePicker from "@/components/Forms/FormTimePicker";
import { Button, Col, message, Row } from "antd";
import FormMultiSelectCreate from "@/components/Forms/FormMultiSelectCreate";
import {
  dayOptions,
  departmentOptions,
  designationOptions,
  roleOptions,
  teamOptions,
} from "@/constants/global";
import FormMultiSelectField from "@/components/Forms/FormMultiSelectField";
import {
  useGetSingleOrganizationQuery,
  useOrganizationConfigMutation,
} from "@/redux/api/organizationApi";
import Loading from "@/app/loading";
import FormSwitch from "@/components/Forms/FormSwitch";

const OrgConfig = ({ params }: { params: { organizationId: string } }) => {
  const orgId = params.organizationId;
  const { data, isLoading } = useGetSingleOrganizationQuery(orgId);
  const [organizationConfig, { isLoading: isUpdateLoading }] =
    useOrganizationConfigMutation();

  const onSubmit = async (data: any) => {
    try {
      const res = await organizationConfig({
        id: orgId,
        data: data,
      }).unwrap();
      if (res.id) {
        message.success("Config Updated Successfully");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  if (isLoading || isUpdateLoading)
    return (
      <div className="background">
        <Loading />
      </div>
    );

  return (
    <div className="background">
      <BreadCrumb
        items={[
          {
            label: "Super Admin",
            link: "/dashboard/super_admin",
          },
          {
            label: "Details",
            link: `/dashboard/super_admin/organizations/viewOrganization/${orgId}`,
          },
          {
            label: "Config",
            link: `/dashboard/super_admin/organizations/orgConfig/${orgId}`,
          },
        ]}
      />
      <ActionBar title="Organization Config" />
      <div>
        <Form
          submitHandler={onSubmit}
          defaultValues={{
            working_days: data?.working_days,
            office_start_time: data?.office_start_time,
            office_end_time: data?.office_end_time,
            org_departments: data?.org_departments,
            org_teams: data?.org_teams,
            org_designations: data?.org_designations,
            org_roles: data?.org_roles,
            user_delete_permission: data?.user_delete_permission,
          }}
        >
          <Row gutter={{ xs: 4, md: 20 }}>
            <Col xs={24} md={12} lg={12} className="mt-3">
              <div>
                <FormMultiSelectField
                  name="working_days"
                  label="Working Days"
                  placeholder="Select Working Days"
                  options={dayOptions}
                />
              </div>
            </Col>
            <Col xs={24} md={12} lg={12} className="mt-3">
              <div className="flex justify-between">
                <div>
                  <FormTimePicker
                    name="office_start_time"
                    label="Office Start Time"
                  />
                </div>
                <p className="pt-[29px]">-</p>
                <div>
                  <FormTimePicker
                    name="office_end_time"
                    label="Office End Time"
                  />
                </div>
              </div>
            </Col>
            <Col xs={24} md={12} lg={12} className="mt-3">
              <div>
                <FormMultiSelectCreate
                  name="org_departments"
                  label="Departments"
                  placeholder="Select Departments"
                  selectOptions={departmentOptions}
                />
              </div>
            </Col>
            <Col xs={24} md={12} lg={12} className="mt-3">
              <div>
                <FormMultiSelectCreate
                  name="org_teams"
                  label="Teams"
                  placeholder="Select Teams"
                  selectOptions={teamOptions}
                />
              </div>
            </Col>
            <Col xs={24} md={12} lg={12} className="mt-3">
              <div>
                <FormMultiSelectCreate
                  name="org_designations"
                  label="Designations"
                  placeholder="Select Designations"
                  selectOptions={designationOptions}
                />
              </div>
            </Col>
            <Col xs={24} md={12} lg={12} className="mt-3">
              <div>
                <FormMultiSelectCreate
                  name="org_roles"
                  label="Roles"
                  placeholder="Select Roles"
                  selectOptions={roleOptions}
                />
              </div>
            </Col>
            <Col xs={24} md={12} lg={12} className="mt-3">
              <div>
                <FormSwitch
                  name="user_delete_permission"
                  label="Allow Admin To Delete User?"
                  defaultValue={data?.user_delete_permission}
                />
              </div>
            </Col>
          </Row>

          <div className="mt-5">
            <Button
              htmlType="submit"
              className="bg-[#00674A] text-white hover:text-white flex justify-end item-end"
              style={{ margin: "10px 0px" }}
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default OrgConfig;
