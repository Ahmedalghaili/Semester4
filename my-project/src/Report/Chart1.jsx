import React from "react";
import { Doughnut } from "react-chartjs-2";
import 'chart.js/auto';
import logo from '../Home/Icon.png'; // Replace with the correct path to your logo
import userImage from '../Home/Icon.png'; // Replace with the correct path to your user image
import { Link } from 'react-router-dom';

const data = {
    labels: ["Road Damage", "Unmaintained Park", "Streetlight Out", "Damaged Sidewalk", "Clogged Drain"],
    datasets: [
        {
            label: "Reports",
            data: [20, 30, 15, 10, 25],
            backgroundColor: ["#4BC0C0", "#36A2EB", "#FF6384", "#FFCE56", "#9966FF"],
            hoverBackgroundColor: ["#4BC0C0", "#36A2EB", "#FF6384", "#FFCE56", "#9966FF"]
        }
    ]
};

export default function Chart1() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <header className="flex justify-between items-center p-4 bg-white shadow-md">
                <img src={logo} alt="Logo" className="h-8 w-auto" />
                <nav className="space-x-4 text-sm">
                    <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Report</a>
                    <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Statistics</a>
                    <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Complaints</a>
                    <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
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

                    <div className="flex justify-center mb-6 sm:mb-8 h-80 w-full">
                        <Doughnut data={data} />
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 text-xs sm:text-sm">
                            <thead className="bg-green-600">
                                <tr>
                                    <th className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-white uppercase tracking-wider">
                                        Category Name
                                    </th>
                                    <th className="px-3 py-2 sm:px-6 sm:py-3 text-right text-xs sm:text-sm font-medium text-white uppercase tracking-wider">
                                        Number of Reports
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap">Road Damage</td>
                                    <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-right">1,000</td>
                                </tr>
                                <tr>
                                    <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap">Unmaintained Park</td>
                                    <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-right">1,000</td>
                                </tr>
                                <tr>
                                    <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap">Streetlight Out</td>
                                    <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-right">1,000</td>
                                </tr>
                                <tr>
                                    <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap">Damaged Sidewalk</td>
                                    <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-right">1,000</td>
                                </tr>
                                <tr>
                                    <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap">Clogged Drain</td>
                                    <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-right">1,000</td>
                                </tr>
                            </tbody>
                        </table>
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
}
