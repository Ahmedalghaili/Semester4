import React, { useEffect, useState } from 'react';
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/solid';

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

export default function StatsExample() {
  const [stats, setStats] = useState([
    { name: 'Total Verified', stat: '0' },
    { name: 'Total Solved', stat: '0' },
    { name: 'Total On-Progress', stat: '0' },
  ]);

  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost/semester4/my-project/src/dashboard/stats.php')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched data:', data); // Add this line to debug the fetched data
        if (!data.success) {
          throw new Error(data.message);
        }

        setStats([
          { name: 'Total Verified', stat: data.data.TotalVerified },
          { name: 'Total Solved', stat: data.data.TotalSolved },
          { name: 'Total On-Progress', stat: data.data.TotalOnProgress },
        ]);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        setError(error.message);
      });
  }, []);

  return (
    <div>
      {error ? (
        <div className="text-red-500">
          Error loading stats: {error}
        </div>
      ) : (
        <dl className="w-200 ml-10 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x">
          {stats.map((item) => (
            <div key={item.name} className="px-4 py-5 sm:p-6">
              <dt className="text-base font-normal text-gray-900">{item.name}</dt>
              <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                  {item.stat}
                </div>
              </dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}
