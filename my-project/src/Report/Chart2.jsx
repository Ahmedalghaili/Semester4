import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import 'chart.js/auto';
import { Link } from 'react-router-dom';
import Header from './Header';

export default function Chart2() {
    const [data, setData] = useState({
        labels: [],
        datasets: [{
            label: 'Reports',
            data: [],
            backgroundColor: ["#FFCE56", "#FF6384", "#4BC0C0"],
            hoverBackgroundColor: ["#FFCE56", "#FF6384", "#4BC0C0"]
        }]
    });

    useEffect(() => {
     fetch('http://localhost/semester4/my-project/src/Report/Chart2.php')     
            .then(response => response.json())
            .then(data => {
                setData({
                    labels: data.map(item => item.state),
                    datasets: [{
                        label: 'Reports',
                        data: data.map(item => item.count),
                        backgroundColor: ["#FFCE56", "#FF6384", "#4BC0C0"],
                        hoverBackgroundColor: ["#FFCE56", "#FF6384", "#4BC0C0"]
                    }]
                });
            })
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

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
                    <div className="flex justify-center mb-6 sm:mb-8 h-80 w-full">
                        <Doughnut data={data} />
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 text-xs sm:text-sm">
                            <thead className="bg-green-600">
                                <tr>
                                    <th className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-white uppercase tracking-wider">Category Name</th>
                                    <th className="px-3 py-2 sm:px-6 sm:py-3 text-right text-xs sm:text-sm font-medium text-white uppercase tracking-wider">Number of Reports</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {data.labels.map((label, index) => (
                                    <tr key={index}>
                                        <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap">{label}</td>
                                        <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-right">{data.datasets[0].data[index]}</td>
                                    </tr>
                                ))}
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
