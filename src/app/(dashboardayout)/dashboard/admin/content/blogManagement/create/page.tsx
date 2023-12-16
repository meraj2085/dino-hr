"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { IUser } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { Button, Col, Row, message } from "antd";
import { useAddBlogMutation } from "@/redux/api/blogApi";
import { blogSchema } from "@/schema/blog";

const CreateBlogPage = () => {
  const [addBlog] = useAddBlogMutation();
  const router = useRouter();

  const onSubmit = async (values: any) => {
    values.views = JSON.stringify(values.views);
    values.image_url = "https://example.com/painting-blog10.jpg";
    try {
      const response = await addBlog(values).unwrap();
      if (response?._id) {
        router.push("/dashboard/admin/content/blogManagement");
        message.success("Blog created successfully!");
      } else {
        message.error("Failed to create blog");
      }
    } catch (err: any) {
      console.error(err.message);
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
            label: "Blog",
            link: "/dashboard/admin/content/blogManagement",
          },
          {
            label: "Add",
            link: "/dashboard/admin/content/blogManagement/create",
          },
        ]}
      />

      <div>
        <h1 className="text-center text-4xl font-bold leadi">Add Blog</h1>
        <div className="max-w-[300px] mx-auto mt-3">
          <hr className="border-t-1 border-gray-500" />
        </div>
      </div>

      <div className="mt-10">
        <Form submitHandler={onSubmit} resolver={yupResolver(blogSchema)}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  name="title"
                  type="text"
                  size="large"
                  label="Title"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  name="description"
                  type="text"
                  size="large"
                  label="Description"
                />
              </Col>

              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  name="views"
                  type="text"
                  size="large"
                  label="Views"
                />
              </Col>
            </Row>
            <div className="flex justify-end">
              <Button htmlType="submit">Create</Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CreateBlogPage;
