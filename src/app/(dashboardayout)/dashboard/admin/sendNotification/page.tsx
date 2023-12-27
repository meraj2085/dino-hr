"use client";
import Loading from "@/app/loading";
import DSNotificationField from "@/components/Forms/DSNotificationField";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import FormToggleButton from "@/components/Forms/FormToggleButton";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { useAddNotificationMutation } from "@/redux/api/notificationApi";
import { sendNotificationSchema } from "@/schema/sendNotification";
import { getUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import { useState } from "react";

const SendNotification = () => {
  const { organization_id } = getUserInfo() as any;
  const [selectedPreference, setSelectedPreference] = useState<string>("all");
  const sendPreference = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Employee",
      value: "employee",
    },
    {
      label: "Department",
      value: "department",
    },
  ];
  const departmentOptions = [
    {
      label: "HR",
      value: "HR",
    },
    {
      label: "IT",
      value: "IT",
    },
    {
      label: "Finance",
      value: "Finance",
    },
    {
      label: "Marketing",
      value: "Marketing",
    },
    {
      label: "Sales",
      value: "Sales",
    },
    {
      label: "Operations",
      value: "Operations",
    },
  ];

  const [addNotification, { isLoading }] = useAddNotificationMutation();

  const onSubmit = async (data: any) => {
    data.preference = selectedPreference;
    data.organization_id = organization_id;

    try {
      if (selectedPreference === "all") {
        data.toAll = true;
        delete data?.department;
        delete data?.user_ids;
      } else if (selectedPreference === "employee") {
        data.user_ids = data?.user_ids;
        delete data?.department;
        delete data?.toAll;
      } else if (selectedPreference === "department") {
        data.department = data?.department;
        delete data?.user_ids;
        delete data?.toAll;
      }
      const res = await addNotification(data).unwrap();
      if (res) {
        message.success("Notification Send Successfully");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

  const handlePreferenceChange = (value: string) => {
    setSelectedPreference(value);
  };

  if (isLoading) return <Loading />;

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        margin: "20px",
        borderRadius: "20px",
        padding: "24px 24px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <BreadCrumb
        items={[
          {
            label: "Admin",
            link: "/dashboard/admin",
          },
          {
            label: "Send Notification",
            link: "/dashboard/admin/sendNotification",
          },
        ]}
      />

      <Form
        submitHandler={onSubmit}
        resolver={yupResolver(sendNotificationSchema)}
      >
        <Row gutter={{ xs: 4, md: 20 }}>
          <Col xs={24} md={24} lg={24} className="mt-3">
            <FormInput name="title" label="Title" />
          </Col>

          <Col xs={24} md={24} lg={24} className="mt-3">
            <FormTextArea name="description" label="Description" rows={4} />
          </Col>

          <Col xs={24} md={12} lg={12} className="mt-3">
            <div>
              <FormToggleButton name="sendPush" label="Send Push" />
            </div>
          </Col>

          <Col xs={24} md={12} lg={12} className="mt-3">
            <div>
              <FormToggleButton name="sendEmail" label="Send Email" />
            </div>
          </Col>

          <Col xs={24} md={12} lg={12} className="mt-6">
            <div>
              <FormSelectField
                size="large"
                name="preference"
                options={sendPreference}
                label="Preference"
                placeholder="Select"
                value={selectedPreference}
                handleChange={(value: any) => handlePreferenceChange(value)}
              />
            </div>
          </Col>

          {["employee"].includes(selectedPreference) && (
            <Col xs={24} md={12} lg={12} className="mt-6">
              <div>
                <DSNotificationField name="user_ids" label="Select Employee" />
              </div>
            </Col>
          )}

          {["department"].includes(selectedPreference) && (
            <Col xs={24} md={12} lg={12} className="mt-6">
              <div>
                <FormSelectField
                  size="large"
                  name="department"
                  options={departmentOptions}
                  label="Select Department"
                  placeholder="Select"
                />
              </div>
            </Col>
          )}
        </Row>

        <Button
          htmlType="submit"
          className="bg-[#00674A] text-white flex justify-end item-end"
          style={{ marginTop: "20px", borderRadius: "10px" }}
        >
          Send Notification
        </Button>
      </Form>
    </div>
  );
};

export default SendNotification;
