import { Avatar, Button, Card, Col, Divider, Flex, Row } from "antd";

const ProfileAddressDetails = ({ userData }: any) => {
  return (
    <div>
      <Row gutter={10}>
        <Col xs={24} sm={18} md={16} lg={12}>
          <Card title="Personal Information" bordered={false} className="mb-2">
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
          <Card title="Emergency Contact" bordered={false} className="mb-2">
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
    </div>
  );
};

export default ProfileAddressDetails;
