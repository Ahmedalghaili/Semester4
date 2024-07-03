import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const tabs = [
  { name: 'Problem Solved', current: true },
  { name: 'On-Progress', current: false },
  { name: 'Not Verified', current: false },
];

const problemsSolved = [
  { id: 1, name: 'Solved Problem 1', reportId: '111111', status: 'Problem Solved', location: 'Location 1', reportedBy: 'User 1', complaint: 'Complaint 1', description: 'Description 1' },
  { id: 2, name: 'Solved Problem 2', reportId: '222222', status: 'Problem Solved', location: 'Location 2', reportedBy: 'User 2', complaint: 'Complaint 2', description: 'Description 2' },
  { id: 3, name: 'Solved Problem 3', reportId: '333333', status: 'Problem Solved', location: 'Location 3', reportedBy: 'User 3', complaint: 'Complaint 3', description: 'Description 3' },
];

const problemsOnProgress = [
  { id: 4, name: 'On-Progress Problem 1', reportId: '444444', status: 'On-Progress', location: 'Location 4', reportedBy: 'User 4', complaint: 'Complaint 4', description: 'Description 4' },
  { id: 5, name: 'On-Progress Problem 2', reportId: '555555', status: 'On-Progress', location: 'Location 5', reportedBy: 'User 5', complaint: 'Complaint 5', description: 'Description 5' },
  { id: 6, name: 'On-Progress Problem 3', reportId: '666666', status: 'On-Progress', location: 'Location 6', reportedBy: 'User 6', complaint: 'Complaint 6', description: 'Description 6' },
];

const problemsNotVerified = [
  { id: 7, name: 'Not Verified Problem 1', reportId: '777777', status: 'Not Verified', location: 'Location 7', reportedBy: 'User 7', complaint: 'Complaint 7', description: 'Description 7' },
  { id: 8, name: 'Not Verified Problem 2', reportId: '888888', status: 'Not Verified', location: 'Location 8', reportedBy: 'User 8', complaint: 'Complaint 8', description: 'Description 8' },
  { id: 9, name: 'Not Verified Problem 3', reportId: '999999', status: 'Not Verified', location: 'Location 9', reportedBy: 'User 9', complaint: 'Complaint 9', description: 'Description 9' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function MonitorProblems() {
  const navigate = useNavigate();

  const handleProblemClick = (id, status) => {
    navigate(`/admin/edit-problem/${id}`, { state: { status } });
  };

  const getProblems = () => {
    switch (tabs.find(tab => tab.current).name) {
      case 'Problem Solved':
        return problemsSolved;
      case 'On-Progress':
        return problemsOnProgress;
      case 'Not Verified':
        return problemsNotVerified;
      default:
        return [];
    }
  };

  const problems = getProblems();

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold text-white bg-green-700 p-2">Monitor Problem</h2>
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => handleProblemClick(problems.find(problem => problem.status === tab.name).id, tab.name)}
            className={classNames(
              tab.name === tabs.find(tab => tab.current).name
                ? 'border-green-500 text-green-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
              'w-full py-4 px-1 text-center border-b-2 font-medium text-sm'
            )}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {problems.length > 0 ? (
          problems.map((problem) => (
            <div key={problem.id} className="border p-4 mb-2 cursor-pointer" onClick={() => handleProblemClick(problem.id, problem.status)}>
              <span className="text-blue-500 hover:underline">
                {problem.name}
              </span>
              <div>Report Id: {problem.reportId}</div>
            </div>
          ))
        ) : (
          <div>No problems found for the selected tab.</div>
        )}
      </div>
    </div>
  );
}
