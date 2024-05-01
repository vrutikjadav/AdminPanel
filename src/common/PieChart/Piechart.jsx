import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./Piechart.css"

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          "rgba(255,99,132,0.6)",
          "rgba(54,162,235,0.6)",
          "rgba(255,206,86,0.6)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="chart">
      <div className="chartHeader">
        <span className="chartHeading">Sales Summary</span>
        <span className="viewReport">View Report</span>
      </div>
      <div className="pieChart">
      <Pie data={data} />
      </div>
    </div>
  );
};

export default PieChart;
