import { useGetAllEmployeeQuery } from "@/redux/api/employeeApi";
import { SelectOptions } from "@/types";
import FormMultiSelectField from "./FormMultiSelectField";

type DSNotificationFieldProps = {
  name: string;
  label: string;
};

interface Employee {
  first_name: string;
  last_name: string;
  _id: string;
}

interface QueryData {
  employees: Employee[];
  // Add other properties as needed
}

const DSNotificationField = ({ name, label }: DSNotificationFieldProps) => {
  const { data, isLoading } = useGetAllEmployeeQuery({
    limit: 100,
    page: 1,
  });
  // Use the explicitly typed data
  const employees = (data as QueryData)?.employees || [];

  const DNNotificationOptions = employees.map((empData: Employee) => {
    return {
      label: `${empData?.first_name} ${empData?.last_name}`,
      value: empData?._id,
    };
  });

  return (
    <FormMultiSelectField
      options={DNNotificationOptions as SelectOptions[]}
      name={name}
      label={label}
    />
  );
};

export default DSNotificationField;
