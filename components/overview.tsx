"use client";

import { useTheme } from "next-themes";
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
  const { theme } = useTheme()

  let isDark = theme === "dark"
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
        <XAxis
          dataKey="name"
          stroke="#000000"
          fontSize={10}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip contentStyle={{height:70, minWidth:"fit-content", width:100, backgroundColor:isDark ? "#020817" : "white",color:isDark ? "white" : "black", border:"0.2px solid #1E293B", borderRadius:"10px", gap:1}}/>
        <YAxis
          stroke="#000000"
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