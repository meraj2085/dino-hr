import { SelectOptions } from "@/types";
import FormSelectField from "../FormSelectField";

type TeamFieldsProps = {
  name: string;
  label?: string;
  orgData: any;
  isOrgDataLoading: boolean;
  required?: boolean;
  placeholder?: string;
};

const TeamFields = ({
  name,
  label,
  orgData,
  isOrgDataLoading,
  required,
  placeholder,
}: TeamFieldsProps) => {
  const roles = orgData?.org_teams;
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

export default TeamFields;
