import { getErrorMessageByPropertyName } from "@/utils/schemaValidator";
import { Switch } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
type TextAreaProps = {
  name: string;
  label?: string;
  value?: boolean;
};

const FormToggleButton = ({ name, label, value }: TextAreaProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const errorMessage = getErrorMessageByPropertyName(errors, name);
  return (
    <>
      <div className={` flex gap-4 `}>
        {label ? label : null}
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Switch
            className="bg-gray-300"
              defaultChecked={value ? value : field.value}
              {...field}
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
            />
          )}
        />
      </div>
      <small style={{ color: "red" }}>{errorMessage}</small>
    </>
  );
};

export default FormToggleButton;
