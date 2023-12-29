"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import NormalDatePicker from "@/components/Forms/NormalDatePicker";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { leaveType } from "@/constants/global";
import { Button, Col, Row } from "antd";

const ApplyForLeaves = () => {
  const onSubmit = async (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <BreadCrumb
        items={[
          {
            label: "Admin",
            link: "/admin",
          },
          {
            label: "Applied Leaves",
            link: "/dashboard/admin/leave/appliedLeaves",
          },
        ]}
      />
      <h1 className="text-center text-4xl font-bold leadi">Apply for leave</h1>
      <div className="max-w-[400px] mx-auto mt-3">
        <hr className="border-t-1 border-gray-500" />
      </div>
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 4, md: 20 }}>
          <Col xs={24} md={12} lg={12} className="mt-3">
            <div>
              <FormSelectField
                size="large"
                name="leave_types"
                options={leaveType}
                label="Leave Types"
                placeholder="Select"
              />
            </div>
          </Col>
          <Col xs={24} md={12} lg={12} className="mt-3">
            <div>
              <FormInput
                name="note"
                type="text"
                size="large"
                label="Note"
                placeholder="Note"
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
              <NormalDatePicker name="end_date" label="End Date" size="large" />
            </div>
          </Col>
        </Row>

        <Button
          htmlType="submit"
          className="bg-[#00674A] text-white hover:text-white flex justify-end item-end"
          style={{ margin: "10px 0px" }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ApplyForLeaves;
