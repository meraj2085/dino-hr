import BreadCrumb from "@/components/ui/BreadCrumb";

const AppliedLeaves = () => {
  return (
    <div>
      <BreadCrumb
        items={[
          {
            label: "Admin",
            link: "/admin",
          },
          {
            label: "Leave / Applied Leaves",
            link: "/dashboard/admin/leave/appliedLeaves",
          },
        ]}
      />
      <h2>applied Leaves</h2>
    </div>
  );
};

export default AppliedLeaves;
