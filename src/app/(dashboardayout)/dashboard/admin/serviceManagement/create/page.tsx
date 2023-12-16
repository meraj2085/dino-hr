"use client";

import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import BreadCrumb from "@/components/ui/BreadCrumb";
import UploadImage from "@/components/ui/UploadImage";
import { IUser } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { Button, Col, Row, message } from "antd";
import { useAddServiceMutation } from "@/redux/api/serviceApi";
import PPCategoryFields from "@/components/Forms/PPCategoryFields";
import { useState } from "react";
import { serviceSchema } from "@/schema/service";

const CreateServicePage = () => {
  const [ppCategoryId, setPpCategoryId] = useState<string>();
  const [addService] = useAddServiceMutation();
  const router = useRouter();

  const onSubmit = async (values: any) => {
    values.image_url =
      "https://res.cloudinary.com/dn163fium/image/upload/v1697264013/ebej6gnvmtxfc7g6xy6h.jpg";
    values.price = parseInt(values.price);
    values.category_id = ppCategoryId;
    try {
      const response = await addService(values).unwrap();
      if (response?._id) {
        router.push("/dashboard/admin/serviceManagement");
        message.success("Service created successfully!");
      } else {
        message.error("Failed to create service");
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
            label: "Services",
            link: "/dashboard/admin/serviceManagement",
          },
          {
            label: "Create",
            link: "/dashboard/admin/serviceManagement/create",
          },
        ]}
      />

      <div>
        <h1 className="text-center text-4xl font-bold leadi">Add Service</h1>
        <div className="max-w-[300px] mx-auto mt-3">
          <hr className="border-t-1 border-gray-500" />
        </div>
      </div>

      <div className="mt-10">
        <Form submitHandler={onSubmit} resolver={yupResolver(serviceSchema)}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              Admin Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  name="name"
                  type="text"
                  size="large"
                  label="Service Name"
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
                  name="price"
                  type="text"
                  size="large"
                  label="Service Price"
                />
              </Col>

              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <PPCategoryFields
                  name="category_id"
                  label="Category"
                  onChange={(e) => setPpCategoryId(e)}
                />
              </Col>

              <Col
                className="gutter-row"
                span={24}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormTextArea name="description" label="Description" />
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

export default CreateServicePage;
