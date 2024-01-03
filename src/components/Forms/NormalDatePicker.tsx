import { DatePicker, DatePickerProps, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";
import { RangePickerProps } from "antd/es/date-picker";
import { getErrorMessageByPropertyName } from "@/utils/schemaValidator";

type DatePikerProps = {
  onChange?: (valOne: Dayjs | null, valTwo: string) => void;
  name: string;
  label?: string;
  value?: Dayjs;
  size?: "large" | "small";
};

const NormalDatePicker = ({
  name,
  label,
  onChange,
  size = "large",
  value,
}: DatePikerProps) => {
  const { control, setValue, formState:{errors} } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  const handleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
    onChange ? onChange(date, dateString) : null;
    setValue(name, date);
  };

  // const disabledDate: RangePickerProps["disabledDate"] = (current) => {
  //   return current && current < dayjs().endOf("day");
  // };

  return (
    <div>
      {label ? label : null}
      <br />
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            value={field.value ? dayjs(field.value) : undefined}
            size={size}
            onChange={handleOnChange}
            onBlur={field.onBlur}
            style={{ width: "100%" }}
            // disabledDate={disabledDate}
          />
        )}
      />
      <small style={{ color: "red" }}>{errorMessage}</small>
    </div>
  );
};

export default NormalDatePicker;
