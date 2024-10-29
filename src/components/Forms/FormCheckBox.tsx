"use client";

import React from "react";
import { Checkbox } from "antd";
import { getErrorMessageByPropertyName } from "@/utils/schemaValidator";
import { useFormContext, Controller } from "react-hook-form";

interface ICheckBox {
  name: string;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  defaultValue?: boolean;
  validation?: object;
}

const FormCheckBox = ({
  name,
  label,
  disabled,
  required,
  defaultValue = false,
  validation,
}: ICheckBox) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <div className="flex flex-col">
      {label && (
        <label>
          {label} {required && <span style={{ color: "red" }}>*</span>}
        </label>
      )}
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        rules={validation}
        render={({ field }) => (
          <Checkbox
            {...field}
            checked={field.value}
            disabled={disabled}
            onChange={(e) => field.onChange(e.target.checked)}
          />
        )}
      />
      {errorMessage && <small style={{ color: "red" }}>{errorMessage}</small>}
    </div>
  );
};

export default FormCheckBox;
