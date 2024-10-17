"use client";

import { getErrorMessageByPropertyName } from "@/utils/schemaValidator";
import { Divider, Input, Select, Space, Button, InputRef } from "antd";
import { useFormContext, Controller } from "react-hook-form";
import { PlusOutlined } from "@ant-design/icons";
import { useRef, useState } from "react";

export type SelectOption = {
  label: string;
  value: string;
};

type FormMultiSelectCreateProps = {
  name: string;
  size?: "large" | "small" | "middle";
  value?: string[];
  placeholder?: string;
  selectOptions?: SelectOption[];
  label?: string;
  defaultValue?: SelectOption[];
};

const FormMultiSelectCreate = ({
  name,
  size = "large",
  value,
  placeholder = "Select",
  selectOptions = [],
  label,
  defaultValue,
}: FormMultiSelectCreateProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const [options, setOptions] = useState(selectOptions);
  const [newName, setNewName] = useState("");
  const inputRef = useRef<InputRef>(null);

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value);
  };

  const addItem = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    if (!newName) return;
    setOptions([...options, { value: newName, label: newName }]);
    setNewName("");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const errorMessage = getErrorMessageByPropertyName(errors, newName);
  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            onChange={onChange}
            size={size}
            options={options}
            value={value}
            style={{ width: "100%" }}
            placeholder={placeholder}
            allowClear
            mode="multiple"
            dropdownRender={(menu) => (
              <>
                {menu}
                <Divider style={{ margin: "8px 0" }} />
                <Space style={{ padding: "0 8px 4px" }}>
                  <Input
                    placeholder="Please enter item"
                    ref={inputRef}
                    value={newName}
                    onChange={onNameChange}
                    onKeyDown={(e) => e.stopPropagation()}
                  />
                  <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
                    Add item
                  </Button>
                </Space>
              </>
            )}
          />
        )}
      />
      <small style={{ color: "red" }}>{errorMessage}</small>
    </>
  );
};

export default FormMultiSelectCreate;

// selectOptions = [
//   { value: "value 1", label: "Label 1" },
//   { value: "value 2", label: "Label 2" },
//   { value: "value 3", label: "Label 3" },
// ];
