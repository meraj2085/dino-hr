import BreadCrumb from "@/components/ui/BreadCrumb";

const ViewAttendance = () => {
  return (
    <div>
      <BreadCrumb
        items={[
          {
            label: "Admin",
            link: "/admin",
          },
          {
            label: "View Attendance",
            link: "/dashboard/admin/attendance/viewAttendance",
          },
        ]}
      />
      <h2>view Attendance</h2>
    </div>
  );
};

export default ViewAttendance;
