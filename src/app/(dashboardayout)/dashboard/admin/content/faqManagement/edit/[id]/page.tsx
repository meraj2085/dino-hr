"use client";

import Loading from "@/app/loading";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { useGetSingleFaqQuery, useUpdateFaqMutation } from "@/redux/api/faqApi";
import { blogSchema } from "@/schema/blog";
import { faqSchema } from "@/schema/faq";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

type IDProps = {
  params: any;
};

const EditFAQPage = ({ params }: IDProps) => {
  const { id } = params;
  const router = useRouter();
  const { data, isLoading } = useGetSingleFaqQuery(id);
  const [updateFaq] = useUpdateFaqMutation();

  const onSubmit = async (values: any) => {
    try {
      const data = { id: id, data: values };
      const response = await updateFaq(data).unwrap();
      if (response?._id) {
        router.push("/dashboard/admin/content/faqManagement");
        message.success("FAQ updated successfully");
      } else {
        message.error("Failed to update FAQ");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  const defaultValues = {
    question: data?.question || "",
    answer: data?.answer || "",
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
            label: "FAQ",
            link: "/dashboard/admin/content/faqManagement",
          },
          {
            label: "Edit",
            link: `/dashboard/admin/content/faqManagement/edit/${id}`,
          },
        ]}
      />

      <ActionBar title="Update FAQ" />
      <div className="flex justify-center">
        <Form
          submitHandler={onSubmit}
          defaultValues={defaultValues}
          resolver={yupResolver(faqSchema)}
        >
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
              <Col xs={24} sm={12} md={24} lg={24} style={{ margin: "10px 0" }}>
                <FormInput
                  name="question"
                  type="text"
                  size="large"
                  label="Question"
                />
              </Col>
              <Col xs={24} sm={12} md={24} lg={24} style={{ margin: "10px 0" }}>
                <FormTextArea name="answer" label="Answer" />
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

export default EditFAQPage;
