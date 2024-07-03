import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import EditProblem from '../components/EditProblems';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='flex h-screen'>
      <div className={`fixed inset-0 z-40 ${sidebarOpen ? 'block' : 'hidden'} lg:block lg:relative lg:z-auto lg:w-64`}>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>
      <div className='flex-1 p-4 lg:ml-55'>
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">Edit Problems</h1>
        <EditProblem />
      </div>
    </div>
  );
}

export default Dashboard;
