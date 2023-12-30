"use client";

import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { useUserSignUpMutation } from "@/redux/api/authApi";
import { IUser } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { Button, Col, Row, message } from "antd";
import { signUpSchema } from "@/schema/signUp";

const CreateUserPage = () => {
  const [userSignUp] = useUserSignUpMutation();
  const router = useRouter();

  const onSubmit = async (values: any) => {
    try {
      const response = await userSignUp(values).unwrap();
      if (response?.accessToken) {
        router.push("/dashboard/admin/userManagement");
        message.success("User created successfully!");
      } else {
        message.error("Failed to create user");
      }
    } catch (err: any) {
      console.error(err.message);
    }
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
            label: "Create",
            link: "/dashboard/admin/userManagement/create",
          },
        ]}
      />

      <div>
        <h1 className="text-center text-4xl font-bold leadi">Create User</h1>
        <div className="max-w-[300px] mx-auto mt-3">
          <hr className="border-t-1 border-gray-500" />
        </div>
      </div>

      <div className="mt-10">
        <Form submitHandler={onSubmit} resolver={yupResolver(signUpSchema)}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              Admin Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  name="name.firstName"
                  type="text"
                  size="large"
                  label="First Name"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  name="name.lastName"
                  type="text"
                  size="large"
                  label="Last Name"
                />
              </Col>

              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  name="email"
                  type="email"
                  size="large"
                  label="Email"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  name="mobileNumber"
                  type="text"
                  size="large"
                  label="Mobile Number"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  name="password"
                  type="password"
                  size="large"
                  label="Password"
                />
              </Col>
            </Row>
            <div className="flex justify-end">
              <Button htmlType="submit">Create</Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CreateUserPage;
