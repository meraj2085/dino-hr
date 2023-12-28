import BreadCrumb from "@/components/ui/BreadCrumb";

const AddAttendance = () => {
  return (
    <div>
      <BreadCrumb
        items={[
          {
            label: "Admin",
            link: "/admin",
          },
          {
            label: "Attendance / Add Attendance",
            link: "/dashboard/admin/attendance/addAttendance",
          },
        ]}
      />
      <h2>add Attendance</h2>
    </div>
  );
};

export default AddAttendance;
