import React, { useEffect, useState } from 'react';

function UserReport() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost/semester4/my-project/src/Home/data.php')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

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
         
        </button>
        <div className="flex flex-wrap justify-center space-x-8 m-7">
          {data.map((item, index) => (
            <Circle key={index} percentage={item.percentage} label={item.category} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserReport;
