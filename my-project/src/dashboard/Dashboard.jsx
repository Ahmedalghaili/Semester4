// Dashboard.jsx
import React from 'react';
import {Chart} from './Chart.jsx' 
import Top from './with_shared_borders.jsx'

function Dashboard() {
  return (
    <div>
                      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>

      <Top/>
      <Chart />
    </div>
  );
}

export default Dashboard;
