import { TimePicker } from "antd";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import dayjs from "dayjs";

type FormTimePickerProps = {
  name: string;
  label?: string;
  defaultValue?: string; // Add default value prop
};

export default function FormTimePicker({
  name,
  label,
  defaultValue,
}: FormTimePickerProps) {
  const { control, watch } = useFormContext();

  // Use `watch` to dynamically get the current value
  const currentValue = watch(name) || defaultValue; // Use defaultValue if there's no current value

  return (
    <>
      {label ? label : null}
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue} // Set the default value for the form
        render={({ field }) => (
          <TimePicker
            size="large"
            value={currentValue ? dayjs(currentValue, "HH:mm") : null}
            format={"HH:mm"}
            onChange={(el, value) => {
              field.onChange(value);
            }}
            style={{ width: "100%" }}
          />
        )}
      />
    </>
  );
}
