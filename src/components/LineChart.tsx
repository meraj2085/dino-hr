import { Tooltip } from 'antd';
import React from 'react';
import { Line, LineChart, CartesianGrid, Legend, XAxis, YAxis } from 'recharts';

const LineChartComponent = ({
  activeByDate,
}: {
  activeByDate: { date: string; count: number }[];
}) => {
  return (
    <div className="overflow-hidden flex justify-center mt-6">
      <div>
        <LineChart
          width={window.innerWidth - 300}
          height={260}
          data={activeByDate}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="count"
            stroke="#00674A"
            activeDot={{ r: 8 }}
          />
        </LineChart>
        <p className='text-center '>Date vs Active Employee</p>
      </div>
    </div>
  );
};

export default LineChartComponent;