import React from 'react';

export default function ProblemSolved({ problems, handleProblemClick }) {
  return (
    <div className="mt-4">
      {problems.length > 0 ? (
        problems.map((problem) => (
          <div key={problem.id} className="border p-4 mb-2 cursor-pointer" onClick={() => handleProblemClick(problem.id, problem.status)}>
            <span className="text-blue-500 hover:underline">
              {problem.title}
            </span>
            <div>Category: {problem.category}</div>
            <div>Region: {problem.region}</div>
            <div>Description: {problem.description}</div>
          </div>
        ))
      ) : (
        <div>No problems found for the selected tab.</div>
      )}
    </div>
  );
}
