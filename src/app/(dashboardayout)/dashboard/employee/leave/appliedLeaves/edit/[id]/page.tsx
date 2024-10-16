"use client";
import EditLeaves from "@/app/sharedComponents/leave/EditLeaves";
import { getUserInfo } from "@/services/auth.service";

type IDProps = {
  params: any;
};

const EditLeavesPage = ({ params }: IDProps) => {
  const { user_type } = getUserInfo() as any;
  return <EditLeaves params={params} user_type={user_type} />;
};

export default EditLeavesPage;
