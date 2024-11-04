import React, { useState, useEffect } from "react";
import { PieChart, Pie, Tooltip } from "recharts";

export default function Chart({ data }) {
  const [outerRadius, setOuterRadius] = useState(140);
  const [chartSize, setChartSize] = useState({ width: 400, height: 400 });

  // Update chart size and outer radius based on screen width
  useEffect(() => {
    const updateChartSize = () => {
      const screenWidth = window.innerWidth;
      const newRadius = screenWidth < 768 ? 80 : 140;
      const newSize =
        screenWidth < 768
          ? { width: 300, height: 300 }
          : { width: 400, height: 400 };

      setOuterRadius(newRadius);
      setChartSize(newSize);
    };

    // Initial setting
    updateChartSize();

    // Add event listener for resizing
    window.addEventListener("resize", updateChartSize);
    return () => window.removeEventListener("resize", updateChartSize);
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
    <PieChart width={chartSize.width} height={chartSize.height}>
      <Pie
        data={data01}
        dataKey="value"
        nameKey="name"
        cx={chartSize.width / 2}
        cy={chartSize.height / 2}
        outerRadius={outerRadius}
        fill="#8884d8"
        label
      />
      <Tooltip />
    </PieChart>
  );
}
