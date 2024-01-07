"use client";

import { useState } from "react";
import { PieChart, Pie, Sector } from "recharts";

const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={8}
        textAnchor="middle"
        fill={payload.name === "Male" ? "#a7daff" : "#f5558d"}
        className={`text-xl`}
        style={{ fontWeight: "bold" }}
      >
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill="#f5558d"
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill="#f5558d"
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke="#f5558d"
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill="#f5558d" stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#f5558d"
      >{`Total ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const PiChart = ({
  employeesByGender,
}: {
  employeesByGender: { name: string; value: number }[];
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  return (
    // <ResponsiveContainer width="100%" height="100%">
    <PieChart width={400} height={400}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={employeesByGender}
        cx="50%"
        cy="50%"
        innerRadius={90}
        outerRadius={140}
        fill="#a7daff"
        dataKey="value"
        onMouseEnter={onPieEnter}
      />
    </PieChart>
  );
};

export default PiChart;
