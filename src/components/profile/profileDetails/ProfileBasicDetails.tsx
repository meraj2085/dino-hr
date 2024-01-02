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

const ProfileBasicDetails = ({ userData }: any) => {
  const {
    first_name,
    middle_name,
    last_name,
    designation,
    employee_code,
    phone_number,
    personal_email,
    permanent_address,
    date_of_birth,
    gender,
  } = userData;
  return (
    <div>
      <Card className="mt-5">
        <Flex className="flex flex-col md:flex-row lg:gap-40">
          {/* left  */}
          <div className="flex">
            {" "}
            <Avatar
              size={{ xs: 24, sm: 32, md: 40, lg: 80, xl: 100, xxl: 120 }}
              src="https://smarthr.dreamstechnologies.com/html/template/assets/img/profiles/avatar-02.jpg"
            />
            <div className="pl-4">
              <h1 className="text-xl font-bold">
                {first_name} {middle_name} {last_name}
              </h1>
              <h1 className="text-md font-bold">{designation}</h1>
              <h1 className="text-md font-bold">{employee_code}</h1>
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
              <h2 className="text-blue-500"> {phone_number}</h2>
              <h2 className="text-blue-500">{personal_email}</h2>
              <h2>{date_of_birth}</h2>
              <h2>
                {permanent_address?.flat_number} {permanent_address?.street},
                {permanent_address?.state}, {permanent_address?.country}
              </h2>
              <h2>{gender}</h2>
            </div>
          </div>
        </Flex>
      </Card>
      {/* </Col> */}

      {/* 2nd section  */}
      <br />

      {/* Personal-Emergency row  */}

      {/* Bank-family information */}
      <Row gutter={10}>
        <Col xs={24} sm={18} md={16} lg={12}>
          <Card title="Bank Information" bordered={false} className="mb-2">
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
          <Card title="Family Contact" bordered={false} className="mb-2">
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
      <Row gutter={10}>
        <Col xs={24} sm={18} md={16} lg={12}>
          <Card title="Education Information" bordered={false} className="mb-2">
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
          <Card title="Experience" bordered={false} className="mb-2">
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

export default ProfileBasicDetails;
