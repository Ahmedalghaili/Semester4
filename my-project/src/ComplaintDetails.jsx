import React from 'react';
import logo from './Home/Icon.png'; // Replace with the correct path to your logo
import userImage from './Home/Icon.png'; // Replace with the correct path to your user image

const ComplaintDetails = () => {
  return (
    <div className="p-8">
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-6">
          <img src={logo} alt="Logo" className="h-8" />
          <nav className="flex space-x-4">
            <a href="/report" className="text-gray-700 hover:text-green-600 font-medium">Report</a>
            <a href="/statistics" className="text-gray-700 hover:text-green-600 font-medium">Statistics</a>
            <a href="/complaints" className="text-gray-700 hover:text-green-600 font-medium">Complaints</a>
            <a href="/about" className="text-gray-700 hover:text-green-600 font-medium">About</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-700">Diego</span>
          <img src={userImage} alt="User Profile" className="h-8 w-8 rounded-full" />
        </div>
      </header>

      <div className="mb-8">
        <a href="/complaints" className="text-green-600 font-bold uppercase">Complaints</a>
        <h1 className="text-2xl font-bold mt-2">Complaints Details</h1>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex items-center space-x-4 mb-4">
          <img src={userImage} alt="Yuri Sara" className="h-10 w-10 rounded-full" />
          <div>
            <p className="font-semibold">Yuri Sara</p>
            <p className="text-sm text-gray-500">7 min ago</p>
          </div>
          <span className="text-red-500 text-sm font-semibold">Report is Being Verified</span>
        </div>

        <h2 className="text-xl font-bold mb-2">Road hole never been fixed over a decade!</h2>
        <p className="text-gray-700 mb-4">
          Tracking ID: <span className="font-semibold">#274234362</span>
        </p>
        <p className="text-gray-700 mb-4">
          I would like to report some concerning the treatment of lecturers by DPT executives at this institution. There are several issues that have infringed upon our rights as lecturers, including reduced teaching privileges, delayed honorarium payments, and lack of transparency in academic policies affecting our overall working conditions.
        </p>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Attached Files</h3>
          <div className="flex space-x-2">
            <img src="file1.png" alt="File 1" className="h-20 w-20 object-cover rounded-md" />
            <img src="file2.png" alt="File 2" className="h-20 w-20 object-cover rounded-md" />
            <img src="file3.png" alt="File 3" className="h-20 w-20 object-cover rounded-md" />
          </div>
        </div>

        <div className="flex items-center space-x-4 mb-6">
          <button className="text-gray-700 hover:text-green-600">Progress</button>
          <button className="text-gray-700 hover:text-green-600">Comment</button>
          <button className="text-gray-700 hover:text-green-600">Up Vote</button>
          <button className="text-gray-700 hover:text-green-600">Share</button>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="font-semibold mb-4">Monitor the progress of this report</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-4 w-4 bg-black rounded-full"></div>
              <span>The report is being verified</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
              <span>The report is being followed up by the relevant parties</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
              <span>The problems in this report have been resolved by the relevant parties</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
              <span>Completed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintDetails;
