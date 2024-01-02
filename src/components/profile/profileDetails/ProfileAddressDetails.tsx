import { Avatar, Button, Card, Col, Divider, Flex, Row } from "antd";

const ProfileAddressDetails = ({ userData }: any) => {
  const {
    phone_number,
    personal_email,
    office_email,
    other_phone_number,
    emergency_contact,
  } = userData;
  console.log(userData);
  return (
    <div>
      <Row gutter={10}>
        <Col xs={24} sm={18} md={16} lg={12}>
          <Card title="Personal Information" bordered={false} className="mb-2">
            <div className="flex">
              {/* input */}
              <div className="text-md font-bold mr-10">
                <h1>Phone No.</h1>
                <h1>secondary Phone No.</h1>
                <h1>Email: </h1>
                <h1>Office Email: </h1>
              </div>
              {/* value */}
              <div>
                <h2>{phone_number}</h2>
                <h2>{other_phone_number}</h2>
                <h2>{personal_email}</h2>
                <h2>{office_email}</h2>
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={18} md={16} lg={12}>
          <Card title="Emergency Contact" bordered={false} className="mb-2">
            <div className="flex">
              {/* input */}
              <div className="text-md font-bold mr-10">
                <h1>Name: </h1>
                <h1>Relation:</h1>
              </div>
              {/* value */}
              <div>
                <h2>{emergency_contact?.name}</h2>
                <h2>{emergency_contact?.relationship}</h2>
              </div>
            </div>
            {/* <Divider dashed style={{ borderWidth: 2 }} />
            <div className="flex">
             
              <div className="text-md font-bold mr-10">
                <h1>Passport No.</h1>
                <h1>Passport Exp Date</h1>
                <h1>Telephone No.</h1>
              </div>
              
              <div>
                <h2>849584958583</h2>
                <h2>849584958583</h2>
                <h2>849584958583</h2>
              </div>
            </div> */}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProfileAddressDetails;
