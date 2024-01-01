import BreadCrumb from "@/components/ui/BreadCrumb";
import {
  Avatar,
  Button,
  Card,
  Col,
  Divider,
  Flex,
  Row,
  Table,
  Timeline,
} from "antd";
import { EditOutlined } from "@ant-design/icons";
import React from "react";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    relationship: "brother",
    birthDate: "Feb 16th, 2019",
    phone: "0182398398",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Relationship",
    dataIndex: "relationship",
    key: "Relationship",
  },
  {
    title: "Birth Date",
    dataIndex: "birthDate",
    key: "birthDate",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
];

const profile = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold pb-1">Profile</h1>
      <BreadCrumb
        items={[
          {
            label: "Dashboard",
            link: "/dashboard/admin",
          },
          {
            label: "Profile",
            link: "/dashboard/profile",
          },
        ]}
      />
      {/* profile SECTION */}
        <Card>
          <Flex className="flex flex-col md:flex-row lg:gap-40">

            {/* left  */}
            <div className="flex">
              {" "}
              <Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 80, xl: 100, xxl: 120 }}
                src="https://smarthr.dreamstechnologies.com/html/template/assets/img/profiles/avatar-02.jpg"
              />
              <div className="pl-4">
                <h1 className="text-xl font-bold">John Due</h1>
                <h1 className="text-md font-bold">Web Developer</h1>
                <h1 className="text-md font-bold">Employee ID:FT-0001</h1>
                <Button className="my-2" type="primary" danger>
                  Sent Message
                </Button>
              </div>
            </div>

              {/* right */}
              <div className="flex border-dashed lg:border-l-2 border-gray-500 pl-4">
                {/* input */}
                <div className="text-md font-bold mr-10">
                  <h1>Phone:</h1>
                  <h1>Email:</h1>
                  <h1>Birthday:</h1>
                  <h1>Address:</h1>
                  <h1>Gender:</h1>
                </div>
                {/* value */}
                <div>
                  <h2 className="text-blue-500">3847234784</h2>
                  <h2 className="text-blue-500">johndoe@example.com</h2>
                  <h2>24th July</h2>
                  <h2>1861 Bayonne Ave, NY, US</h2>
                  <h2>Male</h2>
                </div>
              </div>
          </Flex>
        </Card>
        {/* </Col> */}
 
      {/* 2nd section  */}
      <br />

      {/* Personal-Emergency row  */}

      <Row gutter={30}>
        <Col xs={24} sm={18} md={16} lg={12}>
          <Card
            title="Personal Information"
            extra={<EditOutlined key="edit" />}
            bordered={false}
            className="mb-2"
          >
            <div className="flex">
              {/* input */}
              <div className="text-md font-bold mr-10">
                <h1>Passport No.</h1>
                <h1>Passport Exp Date</h1>
                <h1>Telephone No.</h1>
                <h1>Nationality</h1>
                <h1>Religion</h1>
                <h1>Marital status</h1>
                <h1>Employment of spouse No</h1>
                <h1>No. of children</h1>
              </div>
              {/* value */}
              <div>
                <h2>849584958583</h2>
                <h2>849584958583</h2>
                <h2>849584958583</h2>
                <h2>Indian</h2>
                <h2>Islam</h2>
                <h2>Married</h2>
                <h2>2</h2>
                <h2>2</h2>
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={18} md={16} lg={12}>
          <Card
            title="Emergency Contact"
            extra={<EditOutlined key="edit" />}
            bordered={false}
            className="mb-2"
          >
            <div className="flex">
              {/* input */}
              <div className="text-md font-bold mr-10">
                <h1>Passport No.</h1>
                <h1>Passport Exp Date</h1>
                <h1>Telephone No.</h1>
              </div>
              {/* value */}
              <div>
                <h2>849584958583</h2>
                <h2>849584958583</h2>
                <h2>849584958583</h2>
              </div>
            </div>
            <Divider dashed style={{ borderWidth: 2 }} />
            <div className="flex">
              {/* input */}
              <div className="text-md font-bold mr-10">
                <h1>Passport No.</h1>
                <h1>Passport Exp Date</h1>
                <h1>Telephone No.</h1>
              </div>
              {/* value */}
              <div>
                <h2>849584958583</h2>
                <h2>849584958583</h2>
                <h2>849584958583</h2>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      {/* Bank-family information */}
      <Row gutter={30}>
        <Col xs={24} sm={18} md={16} lg={12}>
          <Card
            title="Bank Information"
            extra={<EditOutlined key="edit" />}
            bordered={false}
            className="mb-2"
          >
            <div className="flex">
              {/* input */}
              <div className="text-md font-bold mr-10">
                <h1>Passport No.</h1>
                <h1>Passport Exp Date</h1>
                <h1>Telephone No.</h1>
                <h1>Telephone No.</h1>
              </div>
              {/* value */}
              <div>
                <h2>849584958583</h2>
                <h2>849584958583</h2>
                <h2>849584958583</h2>
                <h2>849584958583</h2>
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={18} md={16} lg={12}>
          <Card
            title="Family Contact"
            extra={<EditOutlined key="edit" />}
            bordered={false}
            className="mb-2"
          >
            <Table
              dataSource={dataSource}
              columns={columns}
              pagination={false}
              bordered={false}
            />
          </Card>
        </Col>
      </Row>
      {/* Education-Experience Information */}
      <Row gutter={30}>
        <Col xs={24} sm={18} md={16} lg={12}>
          <Card
            title="Education Information"
            extra={<EditOutlined key="edit" />}
            bordered={false}
            className="mb-2"
          >
            <Timeline
              items={[
                {
                  children: (
                    <>
                      <p>Technical testing 1</p>
                      <p>Technical testing 2</p>
                      <p>Technical testing 3</p>
                    </>
                  ),
                },
                {
                  children: (
                    <>
                      <p>Technical testing 1</p>
                      <p>Technical testing 2</p>
                      <p>Technical testing 3</p>
                    </>
                  ),
                },
              ]}
            />
          </Card>
        </Col>
        <Col xs={24} sm={18} md={16} lg={12}>
          <Card
            title="Experience"
            extra={<EditOutlined key="edit" />}
            bordered={false}
            className="mb-2"
          >
            <Timeline
              items={[
                {
                  children: (
                    <>
                      <p>Technical testing 1</p>
                      <p>Technical testing 2</p>
                      <p>Technical testing 3</p>
                    </>
                  ),
                },
                {
                  children: (
                    <>
                      <p>Technical testing 1</p>
                      <p>Technical testing 2</p>
                      <p>Technical testing 3</p>
                    </>
                  ),
                },
              ]}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default profile;
