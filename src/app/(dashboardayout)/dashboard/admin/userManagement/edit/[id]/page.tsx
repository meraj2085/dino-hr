"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";
import {
  useGetSingleUserQuery,
  useUpdateUserAdminMutation,
} from "@/redux/api/userApi";
import { userSchema } from "@/schema/user";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

type IDProps = {
  params: any;
};

const EditUserPage = ({ params }: IDProps) => {
  const { id } = params;
  const router = useRouter();
  const { data, isLoading } = useGetSingleUserQuery(id);
  const [updateUserAdmin] = useUpdateUserAdminMutation();

  const onSubmit = async (values: any) => {
    try {
      const data = { id: id, data: values };
      const response = await updateUserAdmin(data).unwrap();
      if (response?._id) {
        router.push("/dashboard/admin/userManagement");
        message.success("User updated successfully");
      } else {
        message.error("Failed to update user");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  const defaultValues = {
    name: {
      firstName: data?.name?.firstName || "",
      lastName: data?.name?.lastName || "",
    },
    email: data?.email || "",
    mobileNumber: data?.mobileNumber || "",
  };

  return (
    <div>
      <BreadCrumb
        items={[
          {
            label: "Admin",
            link: "/dashboard/admin",
          },
          {
            label: "Users",
            link: "/dashboard/admin/userManagement",
          },
          {
            label: "Update",
            link: `/dashboard/admin/userManagement/edit/${data?.id}`,
          },
        ]}
      />

      <ActionBar title="Update User" />
      <div className="flex justify-center">
        <Form
          submitHandler={onSubmit}
          defaultValues={defaultValues}
          resolver={yupResolver(userSchema)}
        >
          <div
            className="md:mx-0 max-w-[500px] mx-auto mt-10"
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} md={12} lg={12} style={{ margin: "10px 0" }}>
                <FormInput
                  name="name.firstName"
                  label="First name"
                  size="large"
                />
              </Col>
              <Col xs={24} sm={12} md={12} lg={12} style={{ margin: "10px 0" }}>
                <FormInput
                  name="name.lastName"
                  label="Last name"
                  size="large"
                />
              </Col>
              <Col xs={24} sm={12} md={24} lg={24} style={{ margin: "10px 0" }}>
                <FormInput
                  name="mobileNumber"
                  label="Mobile number"
                  size="large"
                />
              </Col>
              <Col xs={24} sm={12} md={24} lg={24} style={{ margin: "10px 0" }}>
                <FormInput name="email" label="Email" size="large" />
              </Col>
            </Row>
            <div className="flex md:justify-end justify-center mt-5">
              <Button htmlType="submit">Update</Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default EditUserPage;
