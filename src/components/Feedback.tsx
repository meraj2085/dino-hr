"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import { Button, Col, Row } from "antd";
const Feedback = () => {
  const adminOnSubmit = async (values: any) => {
    console.log(values);

    // try {
    //   if (!!res) {
    //     message.success("");
    //   }
    // } catch (err: any) {
    //   console.error(err.message);
    // }
  };

  return (
    <div className="max-w-[1200px] mx-auto my-10">
    <>
      <Form submitHandler={adminOnSubmit}>
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
            borderColor: '#00674A',
          }}
        >
          <p style={{ fontSize: "18px", fontWeight: "500", margin: "5px 0px" }}>
            Give your Feedback
          </p>
          <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
            <Col span={6} style={{ margin: "10px 0" }}>
              <FormInput name="name" label="Name" type="text" size="large" />
            </Col>
            <Col span={6} style={{ margin: "10px 0" }}>
              <FormInput name="email" label="Email" type="email" size="large" />
            </Col>
            <Col span={12} style={{ margin: "10px 0" }}>
              <FormTextArea name="feedback" label="Feedback" rows={4} />
            </Col>
          </Row>
        </div>

        <Button
          type="primary"
          style={{ background: "#00EC64", borderColor: "#C8E6C9" }}
          htmlType="submit"
        >
          Submit
        </Button>
      </Form>
    </>
    </div>
  );
};

export default Feedback;
