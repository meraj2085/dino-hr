import { SelectOptions } from "@/types";
import FormSelectField from "../FormSelectField";

type DesignationFieldsProps = {
  name: string;
  label?: string;
  orgData: any;
  isOrgDataLoading: boolean;
  required?: boolean;
  placeholder?: string;
};

const DesignationFields = ({
  name,
  label,
  orgData,
  isOrgDataLoading,
  required,
  placeholder,
}: DesignationFieldsProps) => {
  const roles = orgData?.org_designations;
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

export default DesignationFields;
