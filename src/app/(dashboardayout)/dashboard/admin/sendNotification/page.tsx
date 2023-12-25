"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormMultiSelectField from "@/components/Forms/FormMultiSelectField";
import FormSelectField, {
  SelectOptions,
} from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import FormToggleButton from "@/components/Forms/FormToggleButton";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { useAddNotificationMutation } from "@/redux/api/notificationApi";
import { sendNotificationSchema } from "@/schema/sendNotification";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import { useState } from "react";

const SendNotification = () => {
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
  const onSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

  const [selectedPreference, setSelectedPreference] = useState<string>("all");

  const handlePreferenceChange = (value: string) => {
    setSelectedPreference(value);
  };

  const [addNotification, { isLoading }] = useAddNotificationMutation();

  const handleStudentSubmit = async (values: any) => {
    try {
      // console.log(values);
      const res = await addNotification(values).unwrap();
      console.log(res);
      if (res.id) {
        message.success("Notification Send Successfully");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

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
            link: "/admin",
          },
          {
            label: "Send Notification",
            link: "/dashboard/admin/sendNotification",
          },
        ]}
      />
      {/* <h1>Send Notification</h1> */}
      <Form
        submitHandler={onSubmit}
        resolver={yupResolver(sendNotificationSchema)}
      >
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={24}>
            <div style={{ margin: "10px 20px" }}>
              <FormInput name="title" label="Title" />
            </div>
            <div style={{ margin: "10px 20px" }}>
              <Col span={24}>
                <FormTextArea name="description" label="Description" rows={4} />
              </Col>
            </div>
          </Col>
        </Row>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col
            span={8}
            style={{
              margin: "10px 20px",
            }}
          >
            <div>
              <FormToggleButton name="sendPush" label="Send Push" />
            </div>
          </Col>
          <Col span={8} style={{ margin: "10px 20px" }}>
            <div>
              <FormToggleButton name="sendEmail" label="Send Email" />
            </div>
          </Col>
        </Row>

        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 20px" }}>
            <div>
              <FormSelectField
                size="large"
                name="preference"
                options={sendPreference}
                label="Preference"
                placeholder="Select"
                handleChange={(value: any) => handlePreferenceChange(value)}
              />
            </div>
          </Col>

          {["employee", "department"].includes(selectedPreference) && (
            <Col span={8} style={{ margin: "10px 20px" }}>
              <div>
                <FormMultiSelectField
                  options={sendPreference as SelectOptions[]}
                  name="person"
                  label="multi-select"
                />
              </div>
            </Col>
          )}
        </Row>

        <Button
          htmlType="submit"
          className="bg-[#00674A] text-white flex justify-end item-end"
          style={{ margin: "10px 20px", borderRadius: "10px" }}
          onClick={(value) => {
            handleStudentSubmit(value);
          }}
        >
          Send Notification
        </Button>
      </Form>
    </div>
  );
};

export default SendNotification;
