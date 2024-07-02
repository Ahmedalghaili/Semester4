import React from "react"
import { Link } from "react-router-dom";
import logo from '../Home/Icon.jpeg'; // Replace with the correct path to your logo
import userImage from '../Home/Icon.jpeg'; // Replace with the correct path to your user image
export default function Header() {
    return (
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

    );
}