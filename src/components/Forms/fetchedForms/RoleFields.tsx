import { SelectOptions } from "@/types";
import FormSelectField from "../FormSelectField";

type RoleFieldsProps = {
  name: string;
  label?: string;
  orgData: any;
  isOrgDataLoading: boolean;
  required?: boolean;
  placeholder?: string;
};

const RoleFields = ({
  name,
  label,
  orgData,
  isOrgDataLoading,
  required,
  placeholder,
}: RoleFieldsProps) => {
  const roles = orgData?.org_roles;
  const acDepartmentOptions = roles?.map((role: string) => ({
    label: role,
    value: role,
  }));

  const options: SelectOptions[] = isOrgDataLoading
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
