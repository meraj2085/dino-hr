import { DatePicker, DatePickerProps } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";

type DatePikerProps = {
  onChange?: (valOne: Dayjs | null, valTwo: string) => void;
  name: string;
  label?: string;
  size?: "large" | "small";
};

const CustomDatePicker = ({
  name,
  label,
  onChange,
  size = "large",
}: DatePikerProps) => {
  const { control, setValue } = useFormContext();
  const today = dayjs(); // Get today's date

  const handleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
    onChange && onChange(date, dateString);
    setValue(name, date);
  };

  const disabledDate = (current: Dayjs | undefined) => {
    return current && current.isBefore(today.startOf("day"));
  };

  return (
    <div>
      {label && (
        <>
          <label>{label}</label>
          <br />
        </>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            value={field.value ? dayjs(field.value) : today} // Set default value to today's date
            size={size}
            onChange={handleOnChange}
            style={{ width: "100%" }}
            // disabledDate={disabledDate}
            disabled
          />
        )}
      />
    </div>
  );
};

export default CustomDatePicker;
