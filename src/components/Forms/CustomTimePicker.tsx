import { TimePicker } from "antd";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";

type FormTimePickerProps = {
  name: string;
  label?: string;
  onChange?: (valOne: Dayjs | null, valTwo: string) => void;
};

export default function CustomTimePicker({ name, label }: FormTimePickerProps) {
  const { control, setValue } = useFormContext();
  const currentTime = dayjs(); // Get current time

  return (
    <>
      {label && <label>{label}</label>}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TimePicker
            size="large"
            value={field.value ? dayjs(field.value) : currentTime} // Set default value to current time
            disabled // Make it read-only
            format={"HH:mm"}
            onChange={(el, value) => {
              setValue(name, value);
            }}
            style={{ width: "100%" }}
          />
        )}
      />
    </>
  );
}
