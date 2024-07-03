import React from 'react';

function UserReport() {
  const Circle = ({ percentage, label }) => (
    <div className="flex flex-col items-center">
      <div className="relative flex justify-center items-center w-24 h-24 rounded-full border-4 border-green-700 bg-gray-200">
        <span className="text-xl font-bold">{percentage}%</span>
      </div>
      <div className="w-24 border-t mt-4"></div>
      <p className="mt-2 text-center">{label}</p>
    </div>
  );

  return (
    <div className="h-full bg-gray-100 flex items-center justify-center">
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-2xl font-bold mb-4">User Submitted Result Report</h1>
        <button className="bg-green-300 text-black py-2 px-7 rounded-full mb-8">
          See More Details
        </button>
        <div className="flex justify-center space-x-8 m-7">
          <Circle percentage={5} label="Users who report road markings" />
          <Circle percentage={12} label="Users who reported broken lighting" />
          <Circle percentage={22} label="Users who report traffic jams" />
          <Circle percentage={63} label="Users who report damaged roads" />
        </div>
        <div className="flex justify-center space-x-8 m-7">
          <Circle percentage={80} label="Reports that have been handled" />
        </div>
      </div>
    </div>
  );
}

export default UserReport;
