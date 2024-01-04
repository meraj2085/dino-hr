import BreadCrumb from "@/components/ui/BreadCrumb";

const TeamManagement = () => {
  return (
    <div>
      <BreadCrumb
        items={[
          {
            label: "Admin",
            link: "/admin",
          },
          {
            label: "Attendance / Team Management",
            link: "/dashboard/admin/attendance/teamManagement",
          },
        ]}
      />
      <h2>team Management</h2>
    </div>
  );
};

export default TeamManagement;
