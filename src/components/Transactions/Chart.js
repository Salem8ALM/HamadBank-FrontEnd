import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

export default function Chart({ data }) {
  const data01 = [
    {
      name: "Deposit",
      value: data
        .filter((item) => item.type === "deposit")
        .reduce((acc, item) => acc + item.amount, 0),
      fill: "#00C49F",
    },
    {
      name: "Withdraw",
      value: data
        .filter((item) => item.type === "withdraw")
        .reduce((acc, item) => acc + item.amount, 0),
      fill: "#FF8042",
    },
    {
      name: "Transfer",
      value: data
        .filter((item) => item.type === "transfer")
        .reduce((acc, item) => acc + item.amount, 0),
      fill: "#0088FE",
    },
  ];
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data01}
        dataKey="value"
        nameKey="name"
        cx={200}
        cy={200}
        outerRadius={140}
        fill="#8884d8"
        label
      />

      <Tooltip />
    </PieChart>
  );
}
