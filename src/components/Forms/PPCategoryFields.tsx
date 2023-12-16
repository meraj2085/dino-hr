import { useGetAllCategoryQuery } from "@/redux/api/categoryApi";
import FormSelectField, { SelectOptions } from "./FormSelectField";

type PPCategoryFields = {
  name: string;
  label?: string;
  onChange: (value: string) => void;
};

const PPCategoryFields = ({ name, label, onChange }: PPCategoryFields) => {
  const { data, isLoading } = useGetAllCategoryQuery({});
  const acDepartmentOptions = data?.map((category: any) => {
    return {
      label: category?.name,
      value: category?.id,
      key: category?.id,
    };
  });

  return (
    <FormSelectField
      name={name}
      label={label}
      options={acDepartmentOptions as SelectOptions[]}
      handleChange={(e) => onChange(e)}
    />
  );
};

export default PPCategoryFields;
