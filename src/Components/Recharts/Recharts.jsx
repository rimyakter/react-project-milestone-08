import React from "react";
import { LineChart, Line } from "recharts";
const results = [
  {
    id: 1,
    name: "Alice",
    physics: 85,
    chemistry: 78,
    maths: 92,
  },
  {
    id: 2,
    name: "Bob",
    physics: 74,
    chemistry: 81,
    maths: 88,
  },
  {
    id: 3,
    name: "Charlie",
    physics: 90,
    chemistry: 89,
    maths: 94,
  },
  {
    id: 4,
    name: "David",
    physics: 67,
    chemistry: 72,
    maths: 70,
  },
  {
    id: 5,
    name: "Eve",
    physics: 95,
    chemistry: 91,
    maths: 98,
  },
];

const Recharts = () => {
  return (
    <div>
      <LineChart width={400} height={400} data={results}>
        <Line type="monotone" dataKey="chemistry" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default Recharts;
