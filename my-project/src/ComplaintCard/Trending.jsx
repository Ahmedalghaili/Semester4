import React from 'react';
import ComplaintCard from './ComplaintCard'; // Assuming ComplaintCard is in the same folder

const trendingComplaints = [
    // Define your trending complaints here
];

const Trending = () => (
    <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-4 sm:p-6 lg:p-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">Trending Complaints</h2>
        {trendingComplaints.map((complaint, index) => (
            <ComplaintCard key={index} complaint={complaint} />
        ))}
    </div>
);

export default Trending;
