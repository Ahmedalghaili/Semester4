import React from "react";
import { Doughnut } from "react-chartjs-2";
import 'chart.js/auto';
import logo from '../Home/Icon.png'; // Replace with the correct path to your logo
import userImage from '../Home/Icon.png'; // Replace with the correct path to your user image

const data = {
    labels: ["July", "August", "September", "October", "November", "December"],
    datasets: [
        {
            label: "Total of Reports",
            data: [50, 100, 150, 200, 250, 10],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40"]
        }
    ]
};

const reportData = [
    { month: "July", reports: 50 },
    { month: "August", reports: 100 },
    { month: "September", reports: 150 },
    { month: "October", reports: 200 },
    { month: "November", reports: 250 },
    { month: "December", reports: 10 }
];

export default function Chart3() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <header className="flex justify-between items-center p-6 bg-white shadow-md">
                <img src={logo} alt="Logo" className="h-10 w-auto" />
                <nav className="space-x-6 text-sm">
                    <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Report</a>
                    <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Statistics</a>
                    <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Complaints</a>
                    <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
                </nav>
                <div className="flex items-center space-x-2 text-sm">
                    <span className="text-gray-700 font-medium">Dirga</span>
                    <img src={userImage} alt="User" className="h-8 w-8 rounded-full border-2 border-gray-300" />
                </div>
            </header>
            <div className="max-w-6xl mx-auto mt-4">
                    <h2 className="text-xl font-bold " >Statistical Data Report</h2>
                    <div className="flex space-x-4 mt-2">
                        <a href="#" className="text-blue-600 font-medium">Reports by Category</a>
                        <a href="#" className="font-medium text-gray-700 hover:text-blue-600">Reports Completion Status</a>
                        <a href="#" className="font-medium text-gray-700 hover:text-blue-600">Number of Report per Months</a>
                    </div>
                </div>
            <main className="flex-grow flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg p-6 sm:p-8 flex flex-col lg:flex-row">
                    <div className="flex-1 flex flex-col items-center">
                        <Doughnut data={data} options={{ cutout: "70%" }} />
                        <div className="mt-4 text-center">
                            <h3 className="text-xl font-bold">Total Reports</h3>
                            <p className="text-gray-500">July to December</p>
                        </div>
                    </div>
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 lg:mt-0 lg:ml-8">
                        {reportData.map((item, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                                <h4 className="font-bold text-lg">{item.month}</h4>
                                <p className="text-gray-500 mt-2">
                                    Number of Reports: {item.reports}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <footer className="p-6 bg-white shadow-md flex justify-between text-xs sm:text-sm">
                <div className="space-x-4">
                    <a href="#" className="text-gray-600 hover:text-gray-800">Liputan6 News</a>
                    <a href="#" className="text-gray-600 hover:text-gray-800">Liputan6 News</a>
                    <a href="#" className="text-gray-600 hover:text-gray-800">MetroTv</a>
                    <a href="#" className="text-gray-600 hover:text-gray-800">MetroTv</a>
                </div>
                <div className="space-x-4">
                    <a href="#" className="text-gray-600 hover:text-gray-800">Privacy policy</a>
                    <a href="#" className="text-gray-600 hover:text-gray-800">Terms & Condition</a>
                </div>
            </footer>
        </div>
    );
}
