"use client";
import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { Button, Col, Row, message } from "antd";
import React from "react";

type IDProps = {
  params: any;
};
const EditEventPage = ({ params }: IDProps) => {
  const { id } = params;
  console.log({ id });
  const typeData = [
    {
      label: "Event",
      value: "event",
    },
    {
      label: "Holiday",
      value: "holiday",
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
  return (
    <div>
      <BreadCrumb
        items={[
          {
            label: "Admin",
            link: "/dashboard/admin",
          },
          {
            label: "View Events",
            link: "/dashboard/admin/event/viewEvents",
          },
        ]}
      />

      <ActionBar title="Update Events" />

      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 4, md: 20 }}>
          <Col xs={24} md={12} lg={12} className="mt-3">
            <div>
              <FormDatePicker name="from_date" label="From Date" size="large" />
            </div>
          </Col>

          <Col xs={24} md={12} lg={12} className="mt-3">
            <div>
              <FormDatePicker name="to_date" label="To Date" size="large" />
            </div>
          </Col>

          <Col xs={24} md={12} lg={12} className="mt-3">
            <div>
              <FormInput name="title" type="text" size="large" label="Title" />
            </div>
          </Col>

          <Col xs={24} md={12} lg={12} className="mt-3">
            <div>
              <FormSelectField
                size="large"
                name="type"
                options={typeData}
                label="Type"
                placeholder="Select"
              />
            </div>
          </Col>
        </Row>

        <Button
          htmlType="submit"
          className="bg-[#00674A] text-white hover:text-white flex justify-end item-end"
          style={{ margin: "10px 0px" }}
          onClick={() => message.success(" complete!")}
        >
          Add Event
        </Button>
      </Form>
    </div>
  );
};

export default EditEventPage;
