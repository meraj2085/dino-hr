import BreadCrumb from "@/components/ui/BreadCrumb";

const ApproveLeaves = () => {
  return (
    <div>
      <BreadCrumb
        items={[
          {
            label: "Admin",
            link: "/admin",
          },
          {
            label: "Leave / Approve Leaves",
            link: "/dashboard/admin/leave/approveLeaves",
          },
        ]}
      />
      <h2>approve Leaves</h2>
    </div>
  );
};

export default ApproveLeaves;
