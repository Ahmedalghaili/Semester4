import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AllComplaints from './AllComplaints';
import ComplaintDetails from './ComplaintDetails';
import Trending from './Trending';
import MyReports from './MyReports';
import Footer from '../Home/Footer';
import Header from '../Report/Header'; // Make sure this path is correct

function ViewComplaints() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="flex-grow flex flex-col items-center py-4 px-2 sm:px-4 lg:px-6">
                <nav className="flex justify-between mb-6 sm:mb-8 bg-green-100 p-4 rounded-lg shadow-lg space-x-4">
                    <Link to="all-complaints" className="text-green-800 hover:text-green-600 font-semibold transition duration-300 ease-in-out transform hover:scale-105">
                        All Complaints
                    </Link>
                    <Link to="trending" className="text-green-800 hover:text-green-600 font-semibold transition duration-300 ease-in-out transform hover:scale-105">
                        Trending
                    </Link>
                   
                </nav>

                <Routes>
                    <Route path="all-complaints" element={<AllComplaints />} />
                    <Route path="complaint/:id" element={<ComplaintDetails />} />
                    <Route path="trending" element={<Trending />} />
                    <Route path="my-reports" element={<MyReports />} />
                    <Route path="/" element={<AllComplaints />} /> {/* Default route */}
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default ViewComplaints;
