// chart-line.js
import Chart from "chart.js/auto";

export function renderSalesChart() {
  const ctx = document.getElementById("salesChart").getContext("2d");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["월", "화", "수", "목", "금", "토", "일"],
      datasets: [
        {
          label: "매출액 (₩)",
          data: [1200000, 1500000, 1000000, 1800000, 2000000, 1700000, 2200000],
          borderColor: "#3b82f6",
          backgroundColor: "rgba(59, 130, 246, 0.2)",
          fill: true,
          tension: 0.3,
        },
      ],
    },
    options: {
      responsive: true,
    },
  });
}
