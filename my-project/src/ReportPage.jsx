import React from 'react';

const ReportPage = () => {
  return (
    <div className="flex flex-col items-center  min-h-screen">
      <header className="w-full bg-white py-4 shadow ">
        <div className="container mx-auto flex justify-between items-center px-4 ">
          <div className="flex flex-grow items-center justify-center space-x-4">
            <h1 className="text-2xl font-bold text-red-600">LAPOR!</h1>
            <nav className="flex space-x-4">
              <a href="#" className="text-gray-700">About LAPOR!</a>
              <a href="#" className="text-gray-700">Statistics</a>
              <a href="#" className="text-gray-700">Reports</a>
              <a href="#" className="text-gray-700">Search Complaints</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-gray-700">Muhammad Rifqi</span>
              <div className="bg-purple-500 w-8 h-8 rounded-full text-white flex items-center justify-center text-xl">
                R
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Red Banner Section */}
      <div className="w-full bg-red-600 py-4 h-20 ">
        <div className="container mx-auto items-center justify-center p-5">
          <h2 className="text-white text-xl font-bold"></h2>
        </div>


        {/* Main Content Area */}
        <main className="container mx-auto mt-4 flex justify-center">
          <div className="w-full max-w-5xl flex">
            <div className="bg-white p-8 shadow-md rounded-md w-2/3 mr-8">
              <h2 className="text-xl font-semibold mb-4">Submit Your Report</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700">Select Report Classification</label>
                  <div className="flex space-x-4 mt-2">
                    <button type="button" className="bg-red-600 text-white px-4 py-2 rounded">Complaint</button>
                    <button type="button" className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Aspiration</button>
                    <button type="button" className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Information Request</button>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Report Title</label>
                  <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Report Details</label>
                  <textarea className="w-full p-2 border border-gray-300 rounded" rows="4"></textarea>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Date of Incident</label>
                  <input type="date" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Location of Incident</label>
                  <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Report Category</label>
                  <select className="w-full p-2 border border-gray-300 rounded">
                    <option value="">Select Category</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <option value="category3">Category 3</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Upload Attachment</label>
                  <input type="file" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="flex items-center mb-4">
                  <input type="checkbox" id="anonymous" className="mr-2" />
                  <label htmlFor="anonymous" className="text-gray-700">Anonymous</label>
                  <input type="checkbox" id="confidential" className="ml-4 mr-2" />
                  <label htmlFor="confidential" className="text-gray-700">Confidential</label>
                </div>
                <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded">SUBMIT REPORT</button>
              </form>
            </div>
            <div className="w-1/3">
              <div className="max-w-xs mx-auto bg-red-500 rounded-lg shadow-lg overflow-hidden">
                <div className="flex flex-col items-center bg-white py-6 px-4">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                    R
                  </div>
                  <h2 className="text-red-500 text-xl font-semibold mt-2">Muhammad Rifqi</h2>
                  <p className="text-red-500 text-sm">@yourusername</p>
                  <button className="mt-2 bg-gray-300 text-gray-800 rounded-full px-4 py-1 text-sm">Edit</button>
                </div>
                <div className="flex justify-between p-4 text-white text-sm bg-red-500">
                  <div className="text-center">
                    <p>Verified</p>
                    <p>0</p>
                  </div>
                  <div className="text-center">
                    <p>In Process</p>
                    <p>0</p>
                  </div>
                  <div className="text-center">
                    <p>Completed</p>
                    <p>0</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-7 m-4 shadow-md rounded-md max-w-xs mx-auto ">
                <h3 className="font-semibold mb-4">Top Institutions</h3>
                <ul>
                  <li className="mb-2">Police of the Republic of Indonesia <span className="text-gray-500">97.5k</span></li>
                  <li className="mb-2">Ministry of Education <span className="text-gray-500">82.6k</span></li>
                  <li className="mb-2">Jakarta Provincial Government <span className="text-gray-500">67.7k</span></li>
                  <li className="mb-2">Ministry of Social Affairs <span className="text-gray-500">52k</span></li>
                  <li className="mb-2">Social Security Team <span className="text-gray-500">50.7k</span></li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ReportPage;
