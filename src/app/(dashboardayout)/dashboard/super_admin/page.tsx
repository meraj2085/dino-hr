import PiChart from "@/components/PiChart";
import { PieChartOutlined } from "@ant-design/icons";

const Card = ({
  icon,
  title,
  value,
}: {
  icon: any;
  title: string;
  value: number;
}) => {
  return (
    <div className="flex grow gap-3  border border-gray-300  bg-white text-[#00674A] rounded-md p-4 my-6">
      <div className=" flex justify-center items-center">
        <p className="text-5xl">{icon}</p>
      </div>
      <div className="overflow-hidden flex items-center">
        <div>
          <p className="text-xl">{title}</p>
          <p className="text-lg">{value}</p>
        </div>
      </div>
    </div>
  );
};

const AdminPage = () => {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: "20px",
        padding: "24px 24px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        overflowX: "auto",
      }}
    >
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <div className="w-full md:w-1/4 order-1 gap-4 flex flex-col justify-center">
          <div>
          <Card
            icon={<PieChartOutlined />}
            title="Total Employee"
            value={100}
          />
          <Card
            icon={<PieChartOutlined />}
            title="Total Employee"
            value={100}
          />
          </div>
        </div>
        <div className="w-full md:w-1/2 order-0 md:order-1 bg-white rounded-md py-4">
          <p className="text-lg mb-2 text-center ">Employee Summery</p>
          <div className="flex justify-center">
            <PiChart />
          </div>
          <div className="text-center">
            <span className="mr-4">
              <span className="text-[#FF8F8F] text-[20px] mr-1">●</span>
              Man
            </span>
            <span>
              <span className="text-[#FF8F8F] text-[20px] mr-1">●</span>
              Woman
            </span>
          </div>
        </div>
        <div className="w-full md:w-1/4 order-1 gap-4 flex flex-col justify-center">
          <div>
            <Card
              icon={<PieChartOutlined />}
              title="Total Employee"
              value={100}
            />
            <Card
              icon={<PieChartOutlined />}
              title="Total Employee"
              value={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
