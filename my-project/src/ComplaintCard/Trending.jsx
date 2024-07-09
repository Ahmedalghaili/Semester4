import React, { useState, useEffect } from 'react';
import ComplaintCard from './ComplaintCard';
import axios from 'axios';

const Trending = () => {
    const [complaints, setComplaints] = useState([]);

    useEffect(() => {
        axios.get('http://localhost/semester4/my-project/src/ComplaintCard/fetch_complaints.php')
            .then(response => {
                if (Array.isArray(response.data)) {
                    setComplaints(response.data);
                } else {
                    console.error("Unexpected response format:", response.data);
                }
            })
            .catch(error => {
                console.error("There was an error fetching the complaints!", error);
            });
    }, []);

    return (
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-4 sm:p-6 lg:p-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">Trending Complaints</h2>
            {complaints.length > 0 ? (
                complaints.map((complaint, index) => (
                    <ComplaintCard key={index} complaint={complaint} />
                ))
            ) : (
                <p>No complaints found.</p>
            )}
        </div>
    );
};

export default Trending;
