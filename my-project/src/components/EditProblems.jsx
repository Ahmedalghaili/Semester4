import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function EditProblems() {
  const location = useLocation();
  const { problem } = location.state;
  const [currentProblem, setCurrentProblem] = useState(problem);
  const [message, setMessage] = useState('');

  const handleStatusChange = (event) => {
    const newStatus = event.target.value;
    setCurrentProblem({ ...currentProblem, state: newStatus });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost/semester4/my-project/src/components/update_problem.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(currentProblem),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.success) {
          setMessage('Problem updated successfully');
        } else {
          setMessage(`Failed to update problem: ${data.error}`);
        }
      })
      .catch(error => setMessage(`Error updating problem: ${error.message}`));
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Edit Problems Details</h2>
      {message && <div className="mb-4 text-center text-green-600">{message}</div>}
      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <div className="mb-2 flex justify-between items-center">
          <span className="text-gray-700 font-medium">Report Id:</span>
          <span className="text-gray-900">{currentProblem.id}</span>
        </div>
        <div className="mb-2 flex justify-between items-center">
          <span className="text-gray-700 font-medium">Category:</span>
          <span className="text-gray-900">{currentProblem.category}</span>
        </div>
        <div className="mb-2 flex justify-between items-center">
          <span className="text-gray-700 font-medium">Title:</span>
          <span className="text-gray-900">{currentProblem.title}</span>
        </div>
        <div className="mb-2 flex justify-between items-center">
          <span className="text-gray-700 font-medium">Region:</span>
          <span className="text-gray-900">{currentProblem.region}</span>
        </div>
        <div className="mb-2 flex justify-between items-center">
          <span className="text-gray-700 font-medium">Description:</span>
          <span className="text-gray-900">{currentProblem.description}</span>
        </div>
        <div className="mb-2 flex justify-between items-center">
          <span className="text-gray-700 font-medium">Image Path:</span>
          <span className="text-gray-900">{currentProblem.image_path}</span>
        </div>
        <div className="mb-2 flex justify-between items-center">
          <span className="text-gray-700 font-medium">Created At:</span>
          <span className="text-gray-900">{currentProblem.created_at}</span>
        </div>
        <div className="mb-2 flex justify-between items-center">
          <span className="text-gray-700 font-medium">User Id:</span>
          <span className="text-gray-900">{currentProblem.user_id}</span>
        </div>
        <div className="mb-2 flex justify-between items-center">
          <span className="text-gray-700 font-medium">State:</span>
          <span className="text-gray-900">{currentProblem.state}</span>
        </div>
        <div className="mb-2 flex justify-between items-center">
          <span className="text-gray-700 font-medium">Likes:</span>
          <span className="text-gray-900">{currentProblem.likes}</span>
        </div>
        <div className="mb-2 flex justify-between items-center">
          <span className="text-gray-700 font-medium">Comments:</span>
          <span className="text-gray-900">{currentProblem.comments}</span>
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="status" className="block text-gray-700 font-medium mb-2">Status:</label>
              <select
                id="status"
                name="status"
                value={currentProblem.state}
                onChange={handleStatusChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="solved">Solved</option>
                <option value="on-progress">On-Progress</option>
                <option value="verified">Verified</option>
              </select>
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
    </div>
  );
}
