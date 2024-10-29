"use client";

import React from "react";
import { Switch } from "antd";
import { getErrorMessageByPropertyName } from "@/utils/schemaValidator";
import { useFormContext, Controller } from "react-hook-form";

interface IFormSwitch {
  name: string;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  defaultValue?: boolean;
  validation?: object;
}

const FormSwitch = ({
  name,
  label,
  disabled,
  required,
  defaultValue = false,
  validation,
}: IFormSwitch) => {
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
          <div style={{ maxWidth: "60px" }}>
            <Switch
              {...field}
              checked={field.value}
              disabled={disabled}
              onChange={(checked) => field.onChange(checked)}
              checkedChildren="Yes"
              unCheckedChildren="No"
              style={{ width: "100%", backgroundColor: "#00674A" }}
            />
          </div>
        )}
      />
      {errorMessage && <small style={{ color: "red" }}>{errorMessage}</small>}
    </div>
  );
};

export default FormSwitch;
