"use client";
import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";
import {
  useGetSingleEventQuery,
  useUpdateEventMutation,
} from "@/redux/api/eventApi";
import { eventSchema } from "@/schema/event";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";

type IDProps = {
  params: any;
};
const EditEventPage = ({ params }: IDProps) => {
  const { id } = params;
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

  const { data, isLoading } = useGetSingleEventQuery(id);

  const [updateEvent] = useUpdateEventMutation();

  const defaultValues = {
    from_date: dayjs(data?.from_date).format("YYYY-MM-DD HH:mm:ss.SSS") || "",
    to_date: data?.to_date || "",
    title: data?.title || "",
    type: data?.type || "",
  };

  const onSubmit = async (values: any) => {
    try {
      const data = { id: id, ...values };
      const response = await updateEvent(data).unwrap();
      if (response?._id) {
        router.push("/dashboard/admin/events/viewEvents");
        message.success("Event updated successfully");
      } else {
        message.error("Failed to update Event");
      }
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
            link: "/dashboard/admin/events/viewEvents",
          },
        ]}
      />

      <ActionBar title="Update Events" />

      <Form
        submitHandler={onSubmit}
        defaultValues={defaultValues}
        resolver={yupResolver(eventSchema)}
      >
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
        >
          Update Event
        </Button>
      </Form>
    </div>
  );
};

export default EditEventPage;
