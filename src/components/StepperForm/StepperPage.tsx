"use client";

import { getFromLocalStorage, setToLocalStorage } from "@/utils/localStorage";
import { Button, ConfigProvider, message, Steps } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

interface ISteps {
  title?: string;
  content?: React.ReactElement | React.ReactNode;
}

interface IStepsProps {
  steps: ISteps[];
}

const StepperPage = ({ steps }: IStepsProps) => {
  const [current, setCurrent] = useState<number>(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

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
        <div>{steps[current].content}</div>
        <div style={{ marginTop: 24 }}>
          {
            <Button
              disabled={!(current > 0)}
              className="mr-5"
              onClick={() => prev()}
            >
              <span>
                <LeftOutlined /> Previous
              </span>
            </Button>
          }

          {
            <Button
              disabled={!(current < steps.length - 1)}
              onClick={() => next()}
            >
              <span>
                Next <RightOutlined />
              </span>
            </Button>
          }
        </div>
      </ConfigProvider>
    </>
  );
};

export default StepperPage;
