"use client";

import { SelectOptions } from "@/types";
import { getErrorMessageByPropertyName } from "@/utils/schemaValidator";
import { Select } from "antd";
import { useFormContext, Controller } from "react-hook-form";

type SelectFieldProps = {
  options: SelectOptions[];
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  placeholder?: string;
  label?: string;
  defaultValue?: SelectOptions;
};

const FormMultiSelectField = ({
  name,
  size = "large",
  value,
  placeholder = "select",
  options,
  label,
  defaultValue,
}: SelectFieldProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            onChange={onChange}
            size={size}
            options={options}
            value={value}
            style={{ width: "100%" }}
            placeholder={placeholder}
            allowClear
            mode="multiple"
          />
        )}
      />
      <small style={{ color: "red" }}>{errorMessage}</small>
    </>
  );
};

export default FormMultiSelectField;
