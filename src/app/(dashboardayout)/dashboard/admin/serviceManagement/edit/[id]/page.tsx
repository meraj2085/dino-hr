"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import PPCategoryFields from "@/components/Forms/PPCategoryFields";
import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";
import {
  useSingleServiceQuery,
  useUpdateServiceMutation,
} from "@/redux/api/serviceApi";
import { serviceSchema } from "@/schema/service";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

type IDProps = {
  params: any;
};

const EditServicePage = ({ params }: IDProps) => {
  const { id } = params;
  const router = useRouter();
  const { data, isLoading } = useSingleServiceQuery(id);
  const [updateService] = useUpdateServiceMutation();

  const [ppCategoryId, setPpCategoryId] = useState<string>();
  const onSubmit = async (values: any) => {
    values.price = Number(values.price);
    values.availability = values.availability === "true" ? true : false;
    values.category_id = ppCategoryId;
    try {
      const data = { id: id, data: values };
      const response = await updateService(data).unwrap();
      if (response?._id) {
        router.push("/dashboard/admin/serviceManagement");
        message.success("Service updated successfully");
      } else {
        message.error("Failed to update service");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  const defaultValues = {
    name: data?.name || "",
    price: data?.price || "",
    description: data?.description || "",
    availability: String(data?.availability) || "",
    // category_id: data?.category_id || "",
  };

  const availabilityStatus = [
    {
      label: "Available",
      value: "true",
    },
    {
      label: "Not Available",
      value: "false",
    },
  ];

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
            label: "Update",
            link: `/dashboard/admin/serviceManagement/edit/${data?.id}`,
          },
        ]}
      />

      <ActionBar title="Update Service" />
      <div className="flex justify-center">
        <Form
          submitHandler={onSubmit}
          defaultValues={defaultValues}
          resolver={yupResolver(serviceSchema)}
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
                  name="name"
                  type="text"
                  size="large"
                  label="Service Name"
                />
              </Col>
              <Col xs={24} sm={12} md={12} lg={12} style={{ margin: "10px 0" }}>
                <PPCategoryFields
                  name="category_id"
                  label="Category"
                  onChange={(e) => setPpCategoryId(e)}
                />
              </Col>
              <Col xs={24} sm={12} md={12} lg={12} style={{ margin: "10px 0" }}>
                <FormSelectField
                  size="large"
                  name="availability"
                  options={availabilityStatus}
                  label="Availability"
                  placeholder="Select"
                />
              </Col>
              <Col xs={24} sm={12} md={12} lg={12} style={{ margin: "10px 0" }}>
                <FormInput
                  name="price"
                  type="text"
                  size="large"
                  label="Service Price"
                />
              </Col>
              <Col xs={24} sm={12} md={24} lg={24} style={{ margin: "10px 0" }}>
                <FormInput
                  name="description"
                  type="text"
                  size="large"
                  label="Description"
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

export default EditServicePage;
