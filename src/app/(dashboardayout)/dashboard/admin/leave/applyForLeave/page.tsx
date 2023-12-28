import BreadCrumb from "@/components/ui/BreadCrumb";

const ApplyForLeave = () => {
  return (
    <div>
      <BreadCrumb
        items={[
          {
            label: "Admin",
            link: "/admin",
          },
          {
            label: "Leave / Apply For Leave",
            link: "/dashboard/admin/leave/applyForLeave",
          },
        ]}
      />
      <h2>apply For Leave</h2>
    </div>
  );
};

export default ApplyForLeave;
