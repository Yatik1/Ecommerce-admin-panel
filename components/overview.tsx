"use client";

import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
  Tooltip,
} from "recharts";


interface OverviewProps {
  data: {
    name: string;
    total: number;
  }[];
}

const Overview: React.FC<OverviewProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart 
        accessibilityLayer
        data={data} 
        margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}>
        {/* <CartesianGrid strokeDasharray="3 3" color="#000000" /> */}
        <XAxis
          dataKey="name"
          stroke="#e6e6e6"
          fontSize={10}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip />
        <YAxis
          stroke="#e6e6e6"
          fontSize={10}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Area
          type="monotone"
          dataKey="total"
          stroke="#3498db"
          fill="#3498db"
          strokeWidth={2}
          dot={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Overview;
