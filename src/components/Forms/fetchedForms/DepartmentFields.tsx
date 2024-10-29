import { SelectOptions } from "@/types";
import FormSelectField from "../FormSelectField";

type DepartmentFieldsProps = {
  name: string;
  label?: string;
  orgData: any;
  isOrgDataLoading: boolean;
  required?: boolean;
  placeholder?: string;
};

const DepartmentFields = ({
  name,
  label,
  orgData,
  isOrgDataLoading,
  required,
  placeholder,
}: DepartmentFieldsProps) => {
  const roles = orgData?.org_departments;
  const acDepartmentOptions = roles?.map((role: string) => ({
    label: role,
    value: role,
  }));

  const options: SelectOptions[] = isOrgDataLoading
    ? [{ label: "Loading...", value: "Loading", disabled: true }]
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

export default DepartmentFields;
