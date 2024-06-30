import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Import Routes and Route
import AllComplaints from './AllComplaints';
import Trending from './Trending';
import MyReports from './MyReports';
import logo from '../Home/Icon.png'; // Replace with the correct path to your logo
import userImage from '../Home/Icon.png'; // Replace with the correct path to your user image

function ViewComplaints() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <header className="flex justify-between items-center p-6 bg-white shadow-md">
                <img src={logo} alt="Logo" className="h-12 w-auto" />
                <nav className="space-x-6">
                    <Link to="/report" className="text-gray-700 hover:text-blue-600 font-medium">Report</Link>
                    <Link to="/chart1" className="text-gray-700 hover:text-blue-600 font-medium">Statistics</Link>
                    <Link to="/view-complaints" className="text-gray-700 hover:text-blue-600 font-medium">Complaints</Link>
                    <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
                </nav>
                <div className="flex items-center space-x-2">
                    <span className="text-gray-700 font-medium">Dirga</span>
                    <img src={userImage} alt="User" className="h-8 w-8 rounded-full border-2 border-gray-300" />
                </div>
            </header>
            <main className="flex-grow flex flex-col items-center py-4 px-2 sm:px-4 lg:px-6">
                <nav className="flex justify-between mb-6 sm:mb-8">
                    <Link to="/all-complaints" className="text-gray-700 hover:text-blue-600 font-medium">All Complaints</Link>
                    <Link to="/trending" className="text-gray-700 hover:text-blue-600 font-medium">Trending</Link>
                    <Link to="/my-reports" className="text-gray-700 hover:text-blue-600 font-medium">My Reports</Link>
                </nav>
                <Routes>
                    <Route path="/all-complaints" element={<AllComplaints />} />
                    <Route path="/" element={<AllComplaints />} />

                    <Route path="/trending" element={<Trending />} />
                    <Route path="/my-reports" element={<MyReports />} />
                </Routes>
            </main>
            <footer className="p-4 bg-white shadow-md mt-4 flex justify-between text-xs sm:text-sm">
                <div className="space-x-2 sm:space-x-4">
                    <Link to="#" className="text-gray-600 hover:text-gray-800">Liputan6 News</Link>
                    <Link to="#" className="text-gray-600 hover:text-gray-800">MetroTv</Link>
                </div>
                <div className="space-x-2 sm:space-x-4">
                    <Link to="#" className="text-gray-600 hover:text-gray-800">Privacy policy</Link>
                    <Link to="#" className="text-gray-600 hover:text-gray-800">Terms & Condition</Link>
                </div>
            </footer>
        </div>
    );
}

export default ViewComplaints;
