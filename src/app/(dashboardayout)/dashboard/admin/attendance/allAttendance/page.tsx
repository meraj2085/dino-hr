import BreadCrumb from "@/components/ui/BreadCrumb";

const AllAttendance = () => {
  return (
    <div>
      <BreadCrumb
        items={[
          {
            label: "Admin",
            link: "/admin",
          },
          {
            label: "All Attendance",
            link: "/dashboard/admin/attendance/allAttendance",
          },
        ]}
      />
      <h2>All Attendance</h2>
    </div>
  );
};

export default AllAttendance;
