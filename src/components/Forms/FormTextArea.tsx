import { getErrorMessageByPropertyName } from "@/utils/schemaValidator";
import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TextAreaProps = {
  name: string;
  label?: string;
  rows?: number;
  value?: string;
  placeholder?: string;
};

const FormTextArea = ({
  name,
  label,
  rows,
  value,
  placeholder,
}: TextAreaProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const errorMessage = getErrorMessageByPropertyName(errors, name);
  return (
    <>
      <div className={`flex flex-col  w-full`}>
        {label ? label : null}
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Input.TextArea
              style={{ height: 120 }}
              rows={rows}
              placeholder={placeholder}
              {...field}
              defaultValue={value}
            />
          )}
        />
      </div>
      <small style={{ color: "red" }}>{errorMessage}</small>
    </>
  );
};

export default FormTextArea;
