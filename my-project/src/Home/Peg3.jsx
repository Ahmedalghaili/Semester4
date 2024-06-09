import React from 'react';

function Peg3() {
  const Circle = ({ percentage }) => (
    <div className="flex flex-col items-center">
      <div className="relative flex justify-center items-center w-24 h-24 rounded-full border-4 border-green-700 bg-gray-200">
        <span className="text-xl font-bold">{percentage}%</span>
      </div>
      <div className="w-24 border-t mt-4"></div>
    </div>
  );

  return (
    <div className="h-80 bg-gray-100 flex items-center justify-center">
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-2xl font-bold mb-4">Results So Far</h1>
        <button className="bg-green-300 text-black py-2 px-7 rounded-full mb-8">
          See More Results
        </button>
        <div className="flex justify-center space-x-8 m-7">
          <Circle percentage={2} />
          <Circle percentage={30} />
          <Circle percentage={20} />
        </div>
      </div>
    </div>
  );
}

export default Peg3;
