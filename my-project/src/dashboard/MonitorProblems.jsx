// src/dashboard/MonitorProblems.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const tabs = [
  { name: 'Problem Solved', current: true },
  { name: 'On-Progress', current: false },
  { name: 'Not Verified', current: false },
];

const problemsSolved = [
  { id: 1, name: 'Solved Problem 1', reportId: '111111', status: 'Problem Solved' },
  { id: 2, name: 'Solved Problem 2', reportId: '222222', status: 'Problem Solved' },
  { id: 3, name: 'Solved Problem 3', reportId: '333333', status: 'Problem Solved' },
];

const problemsOnProgress = [
  { id: 4, name: 'On-Progress Problem 1', reportId: '444444', status: 'On-Progress' },
  { id: 5, name: 'On-Progress Problem 2', reportId: '555555', status: 'On-Progress' },
  { id: 6, name: 'On-Progress Problem 3', reportId: '666666', status: 'On-Progress' },
];

const problemsNotVerified = [
  { id: 7, name: 'Not Verified Problem 1', reportId: '777777', status: 'Not Verified' },
  { id: 8, name: 'Not Verified Problem 2', reportId: '888888', status: 'Not Verified' },
  { id: 9, name: 'Not Verified Problem 3', reportId: '999999', status: 'Not Verified' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function MonitorProblems() {
  const [selectedTab, setSelectedTab] = useState(tabs[0].name);
  const navigate = useNavigate();

  const getProblems = () => {
    switch (selectedTab) {
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

  const handleProblemClick = (id, status) => {
    navigate(`/edit-problem/${id}`, { state: { status } });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold text-white bg-green-700 p-2">Monitor Problem</h2>
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setSelectedTab(tab.name)}
            className={classNames(
              tab.name === selectedTab
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
        {getProblems().map((problem) => (
          <div key={problem.id} className="border p-4 mb-2 cursor-pointer" onClick={() => handleProblemClick(problem.id, problem.status)}>
            <span className="text-blue-500 hover:underline">
              {problem.name}
            </span>
            <div>Report Id: {problem.reportId}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
