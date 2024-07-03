// src/dashboard/EditProblem.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

export default function EditProblem() {
  const { id } = useParams();
  const location = useLocation();
  const { status: initialStatus } = location.state || { status: 'On-Progress' };

  const [status, setStatus] = useState(initialStatus);

  useEffect(() => {
    setStatus(initialStatus);
  }, [initialStatus]);

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic to handle form submission and update the status
    console.log(`Status updated to: ${status}`);
    // You can also make an API call here to save the updated status
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'Problem Solved':
        return 'text-green-600 font-bold';
      case 'On-Progress':
        return 'text-yellow-600 font-bold';
      case 'Not Verified':
        return 'text-red-600 font-bold';
      default:
        return 'text-gray-600 font-bold';
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Details Problem</h2>
      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <div className="mb-2 flex justify-between items-center">
          <span className="text-gray-700 font-medium">Report Id:</span>
          <span className="text-gray-900">{id}</span>
        </div>
        <div className="mb-2 flex justify-between items-center">
          <span className="text-gray-700 font-medium">Status:</span>
          <span className={getStatusClass(status)}>{status}</span>
        </div>
        <div className="mb-2">
          <span className="text-gray-700 font-medium">Location:</span>
          <span className="text-gray-900 ml-2">Sukolilo, Pati, Jawa Tengah</span>
        </div>
        <div className="mb-2">
          <span className="text-gray-700 font-medium">Reported By:</span>
          <span className="text-gray-900 ml-2">Xiarong</span>
        </div>
      </div>
      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <div className="mb-2">
          <span className="text-gray-700 font-medium">Complaint:</span>
          <p className="text-gray-900">Complaint garbage on the park</p>
        </div>
        <div className="mb-2">
          <p className="text-gray-700">Description:</p>
          <p className="text-gray-900">
            lorem ipsum sjkn uiwniotb nqioioqtnqcsdjittulizjnwahwhthahirohbitwumtbi
            hiwhwbiehtwhtbuihewbituhwbiehtwiuehbtwuiehtuiehwbithweukthwiejtkwenktw
            nwjent nwejitn wkeoe wbiotiwoeijbtoiwe mboiwej tbmwieobmtwe
          </p>
        </div>
      </div>
      <div className="bg-gray-100 p-4 rounded-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="status" className="block text-gray-700 font-medium mb-2">Status:</label>
            <select
              id="status"
              name="status"
              value={status}
              onChange={handleStatusChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="Problem Solved">Problem Solved</option>
              <option value="On-Progress">On-Progress</option>
              <option value="Not Verified">Not Verified</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="solution" className="block text-gray-700 font-medium mb-2">Description:</label>
            <textarea
              id="solution"
              name="solution"
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter the solution here..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
