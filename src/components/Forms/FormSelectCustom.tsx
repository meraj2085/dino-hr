"use client";

import { getErrorMessageByPropertyName } from "@/utils/schemaValidator";
import { useFormContext, Controller } from "react-hook-form";

export type SelectOption = {
  label: string;
  value: string;
};

type FormSelectCustomProps = {
  name: string;
  placeholder?: string;
  selectOptions: SelectOption[];
  label?: string;
  defaultValue?: string;
  handleChange?: (value: string) => void;
  required?: boolean;
};

const FormSelectCustom = ({
  name,
  placeholder = "select",
  selectOptions,
  label,
  defaultValue,
  handleChange,
  required,
}: FormSelectCustomProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <>
      {required && (
        <span
          style={{
            color: "red",
          }}
        >
          *
        </span>
      )}
      {label && <label>{label}</label>}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange, onBlur } }) => (
          <select
            className="px-3 border py-[9px] w-full custom-select rounded-lg border-gray-300 text-gray-700 sm:text-sm"
            onChange={handleChange ? (e) => handleChange(e.target.value) : onChange}
            onBlur={onBlur}
            defaultValue={defaultValue}
            value={value}
            style={{ width: "100%" }}
            placeholder={placeholder}
          >
            {selectOptions.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}
      />
      <small style={{ color: "red" }}>{errorMessage}</small>
    </>
  );
};

export default FormSelectCustom;
