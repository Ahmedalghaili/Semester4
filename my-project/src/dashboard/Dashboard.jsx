// src/dashboard/Dashboard.jsx
import React from 'react';
import Top from './with_shared_borders';
import Sidebar from '../components/Sidebar';
import { Chart } from './Chart';
import { useState } from 'react';


function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='flex h-screen'>
      <div className={`fixed inset-0 z-40 ${sidebarOpen ? 'block' : 'hidden'} lg:block lg:relative lg:z-auto lg:w-64`}>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>
      <div className='flex-1 p-1 lg:ml-55'>
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">Dashbord</h1>
        <Top />
        <Chart />
      </div>
    </div>
  );
}

export default Dashboard;
