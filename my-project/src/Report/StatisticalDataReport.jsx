import React, { useEffect, useState } from 'react';
import ApexCharts from 'react-apexcharts';
import { Link } from 'react-router-dom';
import Header from './Header';

const StatisticalDataReport = () => {
  const [series, setSeries] = useState([]);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    fetch('http://localhost/semester4/my-project/src/Report/statisticalDataReport.php')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data);  // Log fetched data for debugging
        if (data.length > 0) {
          setSeries([{
            name: 'Reports',
            data: data.map(item => item.count)
          }]);
          setDates(data.map(item => item.date));
        } else {
          setSeries([]);
          setDates([]);
        }
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  const options = {
    chart: {
      type: 'line',
      height: 350,
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    xaxis: {
      type: 'datetime',
      categories: dates,
      labels: {
        format: 'MMM dd'
      }
    },
    yaxis: {
      title: {
        text: 'Number of Reports'
      }
    },
    tooltip: {
      x: {
        format: 'dd MMM yyyy'
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center py-4 px-2 sm:px-4 lg:px-6">
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-4 sm:p-6 lg:p-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">Statistical Data Report</h2>
          <div className="flex flex-col sm:flex-row justify-around mb-6 sm:mb-8">
            <Link to="/chart1" className="px-3 py-1 sm:px-4 sm:py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-xs sm:text-sm">Reports by Category</Link>
            <Link to="/chart2" className="px-3 py-1 sm:px-4 sm:py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-xs sm:text-sm">Reports Completion Status</Link>
            <Link to="/statistical-data-report" className="px-3 py-1 sm:px-4 sm:py-2 bg-green-600 text-white rounded-md hover:bg-green-400 text-xs sm:text-sm">Number of Reports per Month</Link>
          </div>
          <div className="mt-4">
            {series.length > 0 && (
              <ApexCharts options={options} series={series} type="line" height={350} />
            )}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {dates.map((date, index) => (
              <div key={index} className="bg-white shadow p-4 rounded">
                {date} <span className="text-2xl">{series[0]?.data[index]}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="p-4 bg-white shadow-md mt-4 flex justify-between text-xs sm:text-sm">
        <div className="space-x-2 sm:space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">Liputan6 News</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">MetroTv</a>
        </div>
        <div className="space-x-2 sm:space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">Privacy policy</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Terms & Condition</a>
        </div>
      </footer>
    </div>
  );
};

export default StatisticalDataReport;
