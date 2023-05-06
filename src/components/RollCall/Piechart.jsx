import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const PieChart = ({ data }) => {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (chartInstance) {
      chartInstance.destroy(); // Destroy existing chart instance
    }

    if (data && data.length > 0) {
      const total = data.reduce((sum, value) => sum + value, 0);
      const percentages = data.map((value) => ((value / total) * 100).toFixed(2));

      chartInstance = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Present', 'Present & Voting', 'Absent'],
          datasets: [
            {
              data,
              backgroundColor: [
                '#74C5FF',
                '#2194FF',
                '#838383',
              ],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            tooltip: {
              callbacks: {
                label: (context) => {
                  const dataset = context.dataset;
                  const value = dataset.data[context.dataIndex];
                  const percentage = percentages[context.dataIndex];
                  return `${dataset.label}: ${percentage}% (${value})`;
                },
              },
            },
          },
        },
      });
    }
  }, [data]);

  return (
    <div className='flex justify-center'>
      <div style={{ width: '270px', height: '270px' }}>
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default PieChart;
