import { useGetSingleOrganizationQuery } from "@/redux/api/organizationApi";
import { SelectOptions } from "@/types";
import FormSelectField from "../FormSelectField";

type RoleFieldsProps = {
  name: string;
  label?: string;
  orgId: string;
  required?: boolean;
  placeholder?: string;
};

const RoleFields = ({
  name,
  label,
  orgId,
  required,
  placeholder,
}: RoleFieldsProps) => {
  const { data, isLoading } = useGetSingleOrganizationQuery(orgId);
  const roles = data?.org_roles;
  const acDepartmentOptions = roles?.map((role: string) => ({
    label: role,
    value: role,
  }));

  const options: SelectOptions[] = isLoading
    ? [{ label: "Loading...", value: "loading", disabled: true }]
    : acDepartmentOptions || [];

  return (
    <FormSelectField
      name={name}
      label={label}
      options={options}
      placeholder={placeholder}
      required={required}
    />
  );
};

export default RoleFields;
