"use client";

import Loading from "@/app/loading";
import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTimePicker from "@/components/Forms/FormTimePicker";
import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";
import {
  useSingleAppointmentQuery,
  useUpdateScheduleAndStatusMutation,
} from "@/redux/api/appointmentApi";
import { Button, Col, Row, message } from "antd";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";

type IDProps = {
  params: any;
};

const EditBookingPage = ({ params }: IDProps) => {
  const { id } = params;
  const router = useRouter();
  const { data, isLoading } = useSingleAppointmentQuery(id);
  const [updateScheduleAndStatus] = useUpdateScheduleAndStatusMutation();

  const onSubmit = async (values: any) => {
    const originalDate = new Date(values.appointment_date);
    const formattedDate = originalDate?.toISOString();
    values.appointment_date = formattedDate;
    try {
      const data = { id: id, ...values };
      const response = await updateScheduleAndStatus(data).unwrap();
      if (response?._id) {
        router.push("/dashboard/super_admin/bookings");
        message.success("Booking updated successfully");
      } else {
        message.error("Failed to update booking");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  const defaultValues = {
    appointment_date:
      dayjs(data?.appointment_date).format("YYYY-MM-DD HH:mm:ss.SSS") || "",
    appointment_time: data?.appointment_time || "",
    appointment_status: data?.appointment_status || "",
  };

  const appointmentStatusOptions = [
    {
      label: "Pending",
      value: "pending",
    },
    {
      label: "Completed",
      value: "completed",
    },
  ];

  if (isLoading) return <Loading />;

  return (
    <div>
      <BreadCrumb
        items={[
          {
            label: "Dashboard",
            link: "/dashboard/super_admin",
          },
          {
            label: "Bookings",
            link: "/dashboard/super_admin/bookings",
          },
          {
            label: "Update",
            link: `/dashboard/super_admin/bookings/edit/${data?.id}`,
          },
        ]}
      />

      <ActionBar title="Update Booking" />
      <div className="flex justify-center">
        <Form submitHandler={onSubmit} defaultValues={defaultValues}>
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
                <FormDatePicker
                  name="appointment_date"
                  label="Appointment Date"
                  size="large"
                />
              </Col>
              <Col xs={24} sm={12} md={12} lg={12} style={{ margin: "10px 0" }}>
                <FormTimePicker
                  name="appointment_time"
                  label="Appointment time"
                />
              </Col>
            </Row>

            <Row>
              <Col xs={24} style={{ margin: "10px 0" }}>
                <FormSelectField
                  size="large"
                  name="appointment_status"
                  options={appointmentStatusOptions}
                  label="Appointment Status"
                  placeholder="Select"
                />
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

export default EditBookingPage;
