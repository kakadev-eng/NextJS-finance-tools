"use client";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from "recharts";

type Props = {
  data: {
    day: string;
    price: number;
  }[];
};

export function StockChart({
  data,
}: Props) {
  return (
    <div className="h-[350px] w-full">
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <LineChart data={data}>
          <XAxis dataKey="day" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="price"
            strokeWidth={3}
            stroke="#22c55e"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}