"use client";

import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import dynamic from "next/dynamic";

// Dynamically import AntdRegistry to prevent SSR issues
const DynamicAntdRegistry = dynamic(
  () => import("@ant-design/nextjs-registry").then((mod) => mod.AntdRegistry),
  { ssr: false }
);

const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#00674A",
          },
        }}
      >
        <DynamicAntdRegistry>{children}</DynamicAntdRegistry>
      </ConfigProvider>
    </Provider>
  );
};

export default Providers;
