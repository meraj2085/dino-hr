import { TimePicker } from "antd";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import dayjs from "dayjs";

type FormTimePickerProps = {
  name: string;
  label?: string;
};
export default function FormTimePicker({ name, label }: FormTimePickerProps) {
  const { control, watch } = useFormContext();

  // Use `watch` to dynamically get the current value
  const currentValue = watch(name);

  return (
    <>
      {label ? label : null}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TimePicker
            size="large"
            value={dayjs(currentValue, "HH:mm")}
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
