"use client";

import Loading from "@/app/loading";
import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { useAddEventMutation } from "@/redux/api/eventApi";
import { eventSchema } from "@/schema/event";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

const AddEvent = () => {
  const router = useRouter();
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

  const [addEvent, { isLoading }] = useAddEventMutation();

  const onSubmit = async (data: any) => {
    try {
      const res = await addEvent(data).unwrap();
      if (res._id) {
        router.push("/dashboard/admin/events/viewEvents");
        message.success("Event Added Successfully");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="background">
      <BreadCrumb
        items={[
          {
            label: "Admin",
            link: "/admin",
          },
          {
            label: "Events / Add Event",
            link: "/dashboard/admin/events/addEvent",
          },
        ]}
      />
      <ActionBar title="Add Event" />
      <Form submitHandler={onSubmit} resolver={yupResolver(eventSchema)}>
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

        <div className="flex justify-end">
          <Button
            htmlType="submit"
            className="bg-[#00674A] text-white hover:text-white"
            style={{ margin: "10px 0px" }}
          >
            Add Event
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddEvent;
