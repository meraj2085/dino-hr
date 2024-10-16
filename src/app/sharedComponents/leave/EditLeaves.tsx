"use client";
import Loading from "@/app/loading";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import NormalDatePicker from "@/components/Forms/NormalDatePicker";
import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { leaveType } from "@/constants/global";
import {
  useSingleLeaveQuery,
  useUpdateLeaveMutation,
} from "@/redux/api/leaveApi";
import { getUserInfo } from "@/services/auth.service";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

type IDProps = {
  params: any;
  user_type?: string;
};

const EditLeaves = ({ params, user_type }: IDProps) => {
  const id = params?.id;
  const router = useRouter();
  const { organization_id, userId } = getUserInfo() as any;
  const { data, isLoading } = useSingleLeaveQuery(id);
  const [updateLeave, { isLoading: loading }] = useUpdateLeaveMutation();

  const defaultValues = {
    leave_type: data?.leave_type || "",
    reason: data?.reason || "",
    from_date: data?.from_date || "",
    to_date: data?.to_date || "",
    user_id: userId || "",
    organization_id: organization_id || "",
  };

  const onSubmit = async (values: any) => {
    try {
      const res = await updateLeave({ id, body: values }).unwrap();
      if (res._id) {
        message.success("Leave update Successfully");
        router.push(`/dashboard/${user_type}/leave/appliedLeaves`);
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  if (isLoading || loading) return <Loading />;

  return (
    <div className="background">
      <BreadCrumb
        items={[
          {
            label: `${user_type === "employee" ? "Employee" : "Admin"}`,
            link: `${user_type}`,
          },
          {
            label: "Applied Leaves",
            link: `/dashboard/${user_type}/leave/appliedLeaves`,
          },
          {
            label: "Edit",
            link: `/dashboard/${user_type}/leave/appliedLeaves/edit/${id}`,
          },
        ]}
      />
      <ActionBar title="Edit Leave" />
      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <Row gutter={{ xs: 4, md: 20 }}>
          <Col xs={24} md={12} lg={12} className="mt-3">
            <div>
              <FormSelectField
                size="large"
                name="leave_type"
                options={leaveType}
                label="Leave Types"
                placeholder="Select"
              />
            </div>
          </Col>
          <Col xs={24} md={12} lg={12} className="mt-3">
            <div>
              <FormInput
                name="reason"
                type="text"
                size="large"
                label="Reason"
                placeholder="Write reason"
              />
            </div>
          </Col>
          <Col xs={24} md={12} lg={12} className="mt-3">
            <div>
              <NormalDatePicker
                name="from_date"
                label="From Date"
                size="large"
              />
            </div>
          </Col>

          <Col xs={24} md={12} lg={12} className="mt-3">
            <div>
              <NormalDatePicker name="to_date" label="To Date" size="large" />
            </div>
          </Col>
        </Row>

        <Button
          htmlType="submit"
          className="bg-[#00674A] text-white hover:text-white flex justify-end item-end"
          style={{ margin: "10px 0px" }}
        >
          Update
        </Button>
      </Form>
    </div>
  );
};

export default EditLeaves;
