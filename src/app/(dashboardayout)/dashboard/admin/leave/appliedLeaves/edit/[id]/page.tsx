"use client";
import Loading from "@/app/loading";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import NormalDatePicker from "@/components/Forms/NormalDatePicker";
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
};

const EditForLeaves = ({ params }: IDProps) => {
  const id = params?.id;
  const { data: leave, isLoading } = useSingleLeaveQuery(id);
  const router = useRouter();
  const { organization_id, userId } = getUserInfo() as any;
  const [updateLeave] = useUpdateLeaveMutation();
  const onSubmit = async (data: any) => {
    const leaveData = {
      leave_type: data?.leave_type,
      reason: data?.reason,
      from_date: data?.from_date,
      to_date: data?.to_date,
      user_id: userId,
      organization_id: organization_id,
    };
    try {
      const res = await updateLeave({ id, body: leaveData }).unwrap();
      if (res._id) {
        message.success("Leave update Successfully");
        router.push("/dashboard/admin/leave/appliedLeaves");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };
  if (isLoading) return <Loading />;
  return (
    <div>
      <BreadCrumb
        items={[
          {
            label: "Admin",
            link: "/dashboard/admin",
          },
          {
            label: "Applied Leaves",
            link: "/dashboard/admin/leave/appliedLeaves",
          },
          {
            label: "Edit Leaves",
            link: "/dashboard/admin/leave/appliedLeaves/edit",
          },
        ]}
      />
      <h1 className="text-center text-4xl font-bold leadi">Edit leave</h1>
      <div className="max-w-[400px] mx-auto mt-3">
        <hr className="border-t-1 border-gray-500" />
      </div>
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 4, md: 20 }}>
          <Col xs={24} md={12} lg={12} className="mt-3">
            <div>
              <FormSelectField
                size="large"
                name="leave_type"
                options={leaveType}
                label="Leave Types"
                placeholder="Select"
                defaultValue={leave?.leave_type}
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
                defaultValue={leave?.reason}
              />
            </div>
          </Col>
          <Col xs={24} md={12} lg={12} className="mt-3">
            <div>
              <NormalDatePicker
                name="from_date"
                label="From Date"
                size="large"
                // defaultValue={leave?.from_date}
              />
            </div>
          </Col>

          <Col xs={24} md={12} lg={12} className="mt-3">
            <div>
              <NormalDatePicker
                name="to_date"
                label="To Date"
                size="large"
                // defaultValue={leave?.to_date}
              />
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

export default EditForLeaves;
