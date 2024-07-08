import React, { useState } from 'react';
import Top from './with_shared_borders';
import Sidebar from '../components/Sidebar';
import { Chart } from './Chart';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='flex h-screen '>
      <div className={`fixed inset-0 z-40 ${sidebarOpen ? 'block' : 'hidden'} lg:block lg:relative lg:z-auto lg:w-64`}>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>
      <div className='flex-1 flex flex-col'>
        <h1 className="text-2xl font-semibold text-gray-900 p-6 flex-none">Dashboard</h1>
        <div className='flex-1 flex flex-col p-6 overflow-hidden'>
          <div className='flex-1 flex flex-col'>
            <Top />
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
