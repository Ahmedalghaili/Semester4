import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProblemSolved from './ProblemSolved';
import OnProgress from './OnProgress';
import NotVerified from './NotVerified';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function MonitorProblems() {
  const [problems, setProblems] = useState([]);
  const [currentTab, setCurrentTab] = useState('solved');
  const navigate = useNavigate();

  useEffect(() => {
    fetchProblems(currentTab);
  }, [currentTab]);

  const fetchProblems = (status) => {
    fetch(`http://localhost/semester4/my-project/src/components/fetchProblems.php?status=${status}`)
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data); // Log fetched data
        setProblems(data);
      })
      .catch(error => console.error('Error fetching problems:', error));
  };

  const handleProblemClick = (id, status) => {
    const selectedProblem = problems.find(problem => problem.id === id);
    navigate(`/admin/edit-problem/${id}`, { state: { problem: selectedProblem } });
  };

  const countProblems = (state) => {
    return problems.filter(problem => problem.status === state).length;
  };

  const tabs = [
    { name: 'solved', displayName: `Problem Solved `, current: currentTab === 'solved' },
    { name: 'on-progress', displayName: `On-Progress `, current: currentTab === 'on-progress' },
    { name: 'verified', displayName: `Not Verified `, current: currentTab === 'verified' },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold text-white bg-green-700 p-2">Monitor Problem</h2>
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setCurrentTab(tab.name)}
            className={classNames(
              tab.current
                ? 'border-green-500 text-green-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
              'w-full py-4 px-1 text-center border-b-2 font-medium text-sm'
            )}
          >
            {tab.displayName}
          </button>
        ))}
      </div>
      {currentTab === 'solved' && <ProblemSolved problems={problems} handleProblemClick={handleProblemClick} />}
      {currentTab === 'on-progress' && <OnProgress problems={problems} handleProblemClick={handleProblemClick} />}
      {currentTab === 'verified' && <NotVerified problems={problems} handleProblemClick={handleProblemClick} />}
    </div>
  );
}
