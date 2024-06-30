import React from 'react';
import ComplaintCard from './ComplaintCard'; // Assuming ComplaintCard is in the same folder

const myReports = [
    // Define your reports here
];

const MyReports = () => (
    <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-4 sm:p-6 lg:p-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">My Reports</h2>
        {myReports.map((complaint, index) => (
            <ComplaintCard key={index} complaint={complaint} />
        ))}
    </div>
);

export default MyReports;
