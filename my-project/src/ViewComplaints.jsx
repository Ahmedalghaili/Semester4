import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Home/Icon.png'; // Replace with the correct path to your logo
import userImage from './Home/Icon.png'; // Replace with the correct path to your user image

const complaints = [
    { user: 'Kucing_Pelesirku', status: 'Report has been recorded', time: '12 min ago', category: 'Road Damage' },
    { user: 'RajawaliGanas07', status: 'Report is being verified', time: '12 min ago', category: 'Road Damage' },
    { user: 'SumKingkong', status: 'Report is in', time: '12 min ago', category: 'Road Damage' },
    { user: 'Saki', status: 'Report is in', time: '12 min ago', category: 'Road Damage' },
];

const ComplaintCard = ({ complaint }) => (
    <div className="border-b border-gray-200 py-4">
        <div className="flex justify-between items-center">
            <span className="text-gray-500 text-sm">{complaint.time}</span>
            <span className="text-gray-500 text-sm">{complaint.category}</span>
            <span className="text-red-500 text-sm">{complaint.status}</span>
        </div>
        <h3 className="text-lg font-semibold mt-2">
            Complaints and Complaints about Old PT Operators Which Harm Lecturers' Rights
        </h3>
        <p className="text-gray-700 mt-2">
            I would like to report issues concerning the treatment of lecturers by old PT operators at this institution. There are several issues that have infringed upon our rights as lecturers, including reduced teaching privileges, delayed honorarium payments, and lack of transparency in academic policies affecting our overall working conditions.
        </p>
        <div className="flex justify-between items-center mt-2">
            <div className="flex space-x-4 text-sm">
                <button className="text-blue-600">Comment</button>
                <button className="text-blue-600">Up Vote</button>
                <button className="text-blue-600">Share</button>
            </div>
        </div>
    </div>
);

const ViewComplaints = () => (
    <div className="min-h-screen bg-gray-50 flex flex-col">
        <header className="flex justify-between items-center p-4 bg-white shadow-md">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
            <nav className="space-x-4 text-sm">
                <Link to="#" className="text-gray-700 hover:text-blue-600 font-medium">Report</Link>
                <Link to="#" className="text-gray-700 hover:text-blue-600 font-medium">Statistics</Link>
                <Link to="#" className="text-gray-700 hover:text-blue-600 font-medium">Complaints</Link>
                <Link to="#" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
            </nav>
            <div className="flex items-center space-x-2 text-sm">
                <span className="text-gray-700 font-medium">Dirga</span>
                <img src={userImage} alt="User" className="h-6 w-6 rounded-full border-2 border-gray-300" />
            </div>
        </header>

        <main className="flex-grow flex flex-col items-center py-4 px-2 sm:px-4 lg:px-6">
            <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-4 sm:p-6 lg:p-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">View Complaints</h2>

                <div className="flex justify-between mb-6 sm:mb-8">
                    <Link to="#" className="text-gray-700 hover:text-blue-600 font-medium">All Complaints</Link>
                    <Link to="#" className="text-gray-700 hover:text-blue-600 font-medium">Trending</Link>
                    <Link to="#" className="text-gray-700 hover:text-blue-600 font-medium">My Reports</Link>
                </div>

                {complaints.map((complaint, index) => (
                    <ComplaintCard key={index} complaint={complaint} />
                ))}
            </div>
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

export default ViewComplaints;
