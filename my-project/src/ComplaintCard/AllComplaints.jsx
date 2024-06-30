import React from 'react';
import ComplaintCard from './ComplaintCard'; // Assuming ComplaintCard is in the same folder

const complaints = [
    { user: 'Kucing_Pelesirku', status: 'Report has been recorded', time: '12 min ago', category: 'Road Damage', statusColor: 'text-red-500' },
    { user: 'RajawaliGanas07', status: 'Report is being verified', time: '12 min ago', category: 'Road Damage', statusColor: 'text-yellow-500' },
    { user: 'SumKingkong', status: 'Report is in', time: '12 min ago', category: 'Road Damage', statusColor: 'text-green-500' },
    { user: 'Saki', status: 'Report is in', time: '12 min ago', category: 'Road Damage', statusColor: 'text-blue-500' },
];

const AllComplaints = () => (
    <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-4 sm:p-6 lg:p-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">All Complaints</h2>
        {complaints.map((complaint, index) => (
            <ComplaintCard key={index} complaint={complaint} />
        ))}
    </div>
);

export default AllComplaints;
