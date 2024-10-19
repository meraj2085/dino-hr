import { Col, Row } from "antd";
import {
  departmentOptions,
  designationOptions,
  employmentStatus,
  roleOptions,
  teamOptions,
} from "@/constants/global";
import { IUser } from "@/types";
import dayjs from "dayjs";
import { useGetAllUsersQuery } from "@/redux/api/userApi";

const EmployeeEmploymentInfo = ({ user }: { user: IUser }) => {
  const { data, isLoading } = useGetAllUsersQuery({});

  const managerOptions: any = data?.users.map((user: any) => ({
    label: user.first_name + " " + user.last_name,
    value: user._id,
  }));
  
  return (
    <div className="bg-white border border-gray-300 rounded-md p-4 my-4">
      <Row gutter={{ xs: 4, md: 20 }}>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Employment Status</h4>
          <p>
            {
              employmentStatus.find(
                (status) => status.value === user?.employment_status
              )?.label
            }
          </p>
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Date of Joining</h4>
          <p>{dayjs(user?.date_of_joining).format("DD MMM YYYY")}</p>
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Employee Code</h4>
          <p>{user?.employee_code}</p>
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Department</h4>
          <p>
            {
              departmentOptions.find(
                (department) => department.value === user?.department
              )?.label
            }
          </p>
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Designation</h4>
          <p>
            {
              designationOptions.find(
                (designation) => designation.value === user?.designation
              )?.label
            }
          </p>
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Team</h4>
          <p>{teamOptions.find((team) => team.value === user?.team)?.label}</p>
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Role</h4>
          <p>{roleOptions.find((role) => role.value === user?.role)?.label}</p>
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Manager</h4>
          <p>
            {
              managerOptions?.find(
                (manager: { label: string; value: string }) =>
                  manager.value === user?.manager_id
              )?.label
            }
          </p>
        </Col>
        <Col xs={24} md={12} lg={6} className="mt-3">
          <h4 className="text-[16px]">Contract Date</h4>
          <p>{dayjs(user?.contract_date).format("DD MMM YYYY")}</p>
        </Col>
      </Row>
    </div>
  );
};

export default EmployeeEmploymentInfo;
