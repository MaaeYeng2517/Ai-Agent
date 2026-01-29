"use client";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from "recharts";

export default function Chart({ data }: any) {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <XAxis dataKey="day" />
        <Tooltip />
        <Line type="monotone" dataKey="progress" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
}
