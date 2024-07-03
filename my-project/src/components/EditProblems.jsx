import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const dummyData = {
  1: { id: 1, location: 'Location 1', reportedBy: 'User 1', complaint: 'Complaint 1', description: 'Description 1', status: 'Problem Solved' },
  2: { id: 2, location: 'Location 2', reportedBy: 'User 2', complaint: 'Complaint 2', description: 'Description 2', status: 'Problem Solved' },
  3: { id: 3, location: 'Location 3', reportedBy: 'User 3', complaint: 'Complaint 3', description: 'Description 3', status: 'Problem Solved' },
  4: { id: 4, location: 'Location 4', reportedBy: 'User 4', complaint: 'Complaint 4', description: 'Description 4', status: 'On-Progress' },
  5: { id: 5, location: 'Location 5', reportedBy: 'User 5', complaint: 'Complaint 5', description: 'Description 5', status: 'On-Progress' },
  6: { id: 6, location: 'Location 6', reportedBy: 'User 6', complaint: 'Complaint 6', description: 'Description 6', status: 'On-Progress' },
  7: { id: 7, location: 'Location 7', reportedBy: 'User 7', complaint: 'Complaint 7', description: 'Description 7', status: 'Not Verified' },
  8: { id: 8, location: 'Location 8', reportedBy: 'User 8', complaint: 'Complaint 8', description: 'Description 8', status: 'Not Verified' },
  9: { id: 9, location: 'Location 9', reportedBy: 'User 9', complaint: 'Complaint 9', description: 'Description 9', status: 'Not Verified' },
};

function getStatusClass(status) {
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
}

export default function EditProblem() {
  const { id } = useParams();
  const location = useLocation();
  const { status: initialStatus } = location.state || { status: 'On-Progress' };

  const [problem, setProblem] = useState(null);
  const [status, setStatus] = useState(initialStatus);

  useEffect(() => {
    // Simulate fetching data from a server
    const fetchData = async () => {
      try {
        // Assuming the data is fetched based on the id
        const result = dummyData[id];
        if (result) {
          setProblem(result);
          setStatus(result.status || initialStatus);
        } else {
          console.error(`Problem with id ${id} not found.`);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id, initialStatus]);

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here, e.g., update status
    console.log(`Updated status to: ${status}`);
    // You can also make an API call here to save the updated status
  };

  if (!problem) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Edit Problem Details</h2>
      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <div className="mb-2 flex justify-between items-center">
          <span className="text-gray-700 font-medium">Report Id:</span>
          <span className="text-gray-900">{problem.reportId}</span>
        </div>
        <div className="mb-2 flex justify-between items-center">
          <span className="text-gray-700 font-medium">Status:</span>
          <span className={getStatusClass(status)}>{status}</span>
        </div>
        <div className="mb-2">
          <span className="text-gray-700 font-medium">Location:</span>
          <span className="text-gray-900 ml-2">{problem.location}</span>
        </div>
        <div className="mb-2">
          <span className="text-gray-700 font-medium">Reported By:</span>
          <span className="text-gray-900 ml-2">{problem.reportedBy}</span>
        </div>
      </div>
      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <div className="mb-2">
          <span className="text-gray-700 font-medium">Complaint:</span>
          <p className="text-gray-900">{problem.complaint}</p>
        </div>
        <div className="mb-2">
          <p className="text-gray-700">Description:</p>
          <p className="text-gray-900">{problem.description}</p>
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
            <label htmlFor="solution" className="block text-gray-700 font-medium mb-2">Solution:</label>
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
