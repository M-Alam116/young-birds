import { PieChart, Pie, Legend, Tooltip, Cell, Label, ResponsiveContainer} from "recharts";

const data = [
  { y: 4, label: "Launch Contributors 1 4B", color: 'rgba(249, 223, 159, 1)' },
  { y: 10, label: "Soar Labs 10B", color: 'rgba(82, 245, 147, 1)' },
  { y: 10, label: "YBC Staking Rewards 10B", color: 'rgba(139, 82, 245, 1)' },
  { y: 5, label: "Strategic Acquisitions 5B", color: 'rgba(255, 194, 39, 1)' },
  { y: 10, label: "Community Sale 10B", color: 'rgba(36, 118, 255, 1)' },
  { y: 36, label: "Soar DAO 36B", color: 'rgba(0, 255, 255, 1)' },
  { y: 2, label: "Advisory Board 2B", color: 'rgba(238, 28, 230, 1)' },
  { y: 14, label: "Launch Contributors 3 14B", color: 'rgba(255, 127, 0, 1)' },
  { y: 9, label: "Launch Contributors 2 9B", color: 'rgba(167, 167, 167, 1)' },
];


export default function App() {
  return (
    <div style={{ width: "65%", height: '30rem'}}>
    <ResponsiveContainer >
    <PieChart >
      <Pie
        dataKey="y"
        isAnimationActive={true}
        data={data}
        cx={350}
        cy={250}
        outerRadius={180}
        labelLine={true} 
        stroke="none"
        label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
          const RADIAN = Math.PI / 180;
          const radius = 25 + innerRadius + (outerRadius - innerRadius);
          const x = cx + radius * Math.cos(-midAngle * RADIAN);
          const y = cy + radius * Math.sin(-midAngle * RADIAN);

          return (
            <text
              x={x}
              y={y}
              fill={"rgba(0, 255, 255, 1)"}
              textAnchor={x > cx ? "start" : "end"}
              dominantBaseline="central"
            >
              {`${data[index].label}: ${data[index].y}%`}
            </text>
          );
        }}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
    </ResponsiveContainer>
    </div>
  );
}
