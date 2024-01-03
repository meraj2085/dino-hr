"use client";

import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "@/utils/localStorage";
import { Button, ConfigProvider, message, Steps } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

interface ISteps {
  title?: string;
  content?: React.ReactElement | React.ReactNode;
}

interface IStepsProps {
  steps: ISteps[];
  persistKey?: string;
  submitHandler: (el: any) => void;
  navigateLink?: string;
  defaultValues?: Record<string, any>;
  resolver?: any;
}

const StepperForm = ({
  steps,
  submitHandler,
  navigateLink,
  persistKey,
  defaultValues,
  resolver,
}: IStepsProps) => {
  const router = useRouter();

  const [current, setCurrent] = useState<number>(
    !!getFromLocalStorage("step")
      ? Number(JSON.parse(getFromLocalStorage("step") as string).step)
      : 0
  );

  const [savedValues, setSavedValues] = useState(
    persistKey && !!getFromLocalStorage(persistKey)
      ? JSON.parse(getFromLocalStorage(persistKey) as string)
      : ""
  );

  useEffect(() => {
    setToLocalStorage("step", JSON.stringify({ step: current }));
  }, [current]);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const methods = useForm({
    defaultValues: defaultValues || savedValues,
    resolver,
    mode: "all",
  });
  const watch = methods.watch();

  useEffect(() => {
    persistKey && setToLocalStorage(persistKey, JSON.stringify(watch));
  }, [watch, persistKey, methods]);

  const { handleSubmit, reset } = methods;

  const handleOnSubmit = (data: any) => {
    submitHandler(data);
    reset();
    removeFromLocalStorage("step");
    persistKey && removeFromLocalStorage(persistKey);
    navigateLink && router.push(navigateLink);
  };

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#00674A",
          },
        }}
      >
        <Steps current={current} items={items} />
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(handleOnSubmit)}>
            <div>{steps[current]?.content}</div>
            <div style={{ marginTop: 24 }}>
              <Button
                disabled={!(current > 0)}
                className="mr-5"
                onClick={() => prev()}
              >
                <span>
                  <LeftOutlined /> Previous
                </span>
              </Button>

              {current < steps.length - 1 && (
                <Button onClick={() => next()}>
                  <span>
                    Next <RightOutlined />
                  </span>
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button
                  type="primary"
                  className="bg-[#00674A]"
                  htmlType="submit"
                  onClick={() => message.success("Processing complete!")}
                >
                  Done
                </Button>
              )}
            </div>
          </form>
        </FormProvider>
      </ConfigProvider>
    </>
  );
};

export default StepperForm;
