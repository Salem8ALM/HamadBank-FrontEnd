import React, { useState, useEffect } from "react";
import { PieChart, Pie, Tooltip } from "recharts";

export default function Chart({ data, width = 400, height = 400 }) {
  const [outerRadius, setOuterRadius] = useState(140);

  // Update outerRadius based on screen width
  useEffect(() => {
    const updateOuterRadius = () => {
      const screenWidth = window.innerWidth;
      const newRadius = screenWidth < 768 ? 80 : 140; // scale down on smaller screens
      setOuterRadius(newRadius);
    };

    // Initial radius setting
    updateOuterRadius();

    // Add event listener for resizing
    window.addEventListener("resize", updateOuterRadius);
    return () => window.removeEventListener("resize", updateOuterRadius);
  }, []);

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
    <PieChart width={width} height={height}>
      <Pie
        data={data01}
        dataKey="value"
        nameKey="name"
        cx={width / 2}
        cy={height / 2}
        outerRadius={outerRadius}
        fill="#8884d8"
        label
      />
      <Tooltip />
    </PieChart>
  );
}
