"use client";

import Loading from "@/app/loading";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";
import {
  useGetSingleBlogQuery,
  useUpdateBlogMutation,
} from "@/redux/api/blogApi";
import { blogSchema } from "@/schema/blog";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

type IDProps = {
  params: any;
};

const EditBlogPage = ({ params }: IDProps) => {
  const { id } = params;
  const router = useRouter();
  const { data, isLoading } = useGetSingleBlogQuery(id);
  const [updateBlog] = useUpdateBlogMutation();

  const onSubmit = async (values: any) => {
    try {
      values.views = JSON.stringify(values.views);
      const data = { id: id, data: values };
      const response = await updateBlog(data).unwrap();
      if (response?._id) {
        router.push("/dashboard/admin/content/blogManagement");
        message.success("Blog updated successfully");
      } else {
        message.error("Failed to update blog");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  const defaultValues = {
    title: data?.title || "",
    description: data?.description || "",
    views: data?.views || "",
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
            label: "Blog",
            link: "/dashboard/admin/content/blogManagement",
          },
          {
            label: "Edit",
            link: `/dashboard/admin/content/blogManagement/edit/${id}`,
          },
        ]}
      />

      <ActionBar title="Update Blog" />
      <div className="flex justify-center">
        <Form
          submitHandler={onSubmit}
          defaultValues={defaultValues}
          resolver={yupResolver(blogSchema)}
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
              <Col xs={24} sm={12} md={12} lg={12} style={{ margin: "10px 0" }}>
                <FormInput
                  name="title"
                  type="text"
                  size="large"
                  label="Title"
                />
              </Col>
              <Col xs={24} sm={12} md={12} lg={12} style={{ margin: "10px 0" }}>
                <FormInput
                  name="description"
                  type="text"
                  size="large"
                  label="Description"
                />
              </Col>
              <Col xs={24} sm={12} md={24} lg={24} style={{ margin: "10px 0" }}>
                <FormInput
                  name="views"
                  type="text"
                  size="large"
                  label="Views"
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

export default EditBlogPage;
