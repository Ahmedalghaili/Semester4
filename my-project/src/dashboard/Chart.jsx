import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Number of Complaints per Category',
    },
  },
};

export function Chart() {
  const [data, setData] = useState({
    labels: [],
    datasets: [],
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost/semester4/my-project/src/dashboard/chart.php')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (!data.success) {
          throw new Error(data.message);
        }

        setData(data.data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        setError(error.message);
      });
  }, []);

  return (
    <div className="flex-1 h-full">
      {error ? (
        <div className="text-red-500">
          Error loading chart data: {error}
        </div>
      ) : (
        <div className="h-full">
          <Line options={options} data={data} />
        </div>
      )}
    </div>
  );
}
