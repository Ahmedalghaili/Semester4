import React from 'react';
import ApexCharts from 'react-apexcharts';
import { Link } from 'react-router-dom';
import logo from '../Home/Icon.png'; // Replace with the correct path to your logo
import userImage from '../Home/Icon.png'; // Replace with the correct path to your user image

const StatisticalDataReport = () => {
  const options = {
    chart: {
      type: 'area',
      height: 350,
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'category',
      categories: ['January', 'February', 'March', 'April', 'May']
    },
    yaxis: {
      title: {
        text: 'Number of Reports'
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100]
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
  };

  const series = [{
    name: 'Reports',
    data: [10, 55, 10, 12.5, 12.5]
  }];

  const months = ['January', 'February', 'March', 'April', 'May'];
  const reportData = series[0].data;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <img src={logo} alt="Logo" className="h-8 w-auto" />
        <nav className="space-x-4 text-sm">
          <Link to="/report" className="text-gray-700 hover:text-blue-600 font-medium">Report</Link>
          <Link to="/chart1" className="text-gray-700 hover:text-blue-600 font-medium">Statistics</Link>
          <Link to="/view-complaints" className="text-gray-700 hover:text-blue-600 font-medium">Complaints</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
        </nav>
        <div className="flex items-center space-x-2 text-sm">
          <span className="text-gray-700 font-medium">Dirga</span>
          <img src={userImage} alt="User" className="h-6 w-6 rounded-full border-2 border-gray-300" />
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center py-4 px-2 sm:px-4 lg:px-6">
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-4 sm:p-6 lg:p-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">Statistical Data Report</h2>

          <div className="flex flex-col sm:flex-row justify-around mb-6 sm:mb-8">
            <Link to="/chart1" className="px-3 py-1 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-xs sm:text-sm">Reports by Category</Link>
            <Link to="/chart2" className="px-3 py-1 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-xs sm:text-sm">Reports Completion Status</Link>
            <Link to="/statistical-data-report" className="px-3 py-1 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-xs sm:text-sm">Number of Reports per Month</Link>
          </div>

          <div className="mt-4">
            <ApexCharts options={options} series={series} type="area" height={350} />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {months.map((month, index) => (
              <div key={index} className="bg-white shadow p-4 rounded">
                {month} <span className="text-2xl">{reportData[index]}</span>
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
