import React from "react";
// Replace with the correct path to your user image
import { Link } from "react-router-dom";
import Footer from "../Home/Footer";
import Header from "./Header";
export default function SubmitComplaint() {
  return (
    <div className="min-h-screen bg-gray-50">
     <Header/>

      <main className="flex justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8 space-y-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Submit Your Complaint</h2>
            <p className="mt-2 text-sm text-gray-600">
              On this page, you can submit a complaint regarding the problem you are facing.
              Please fill out the following form with complete and accurate information to help us handle your complaint quickly and effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Report category
                </label>
                <div className="mt-1">
                  <select
                    id="category"
                    name="category"
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option>Select a category</option>
                    <option>Category 1</option>
                    <option>Category 2</option>
                    <option>Category 3</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Write report title
                </label>
                <div className="mt-1">
                  <input
                    id="title"
                    name="title"
                    type="text"
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                  Region
                </label>
                <div className="mt-1">
                  <select
                    id="region"
                    name="region"
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option>Select a region</option>
                    <option>Region 1</option>
                    <option>Region 2</option>
                    <option>Region 3</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description problem
                </label>
                <div className="mt-1">
                  <textarea
                    id="description"
                    name="description"
                    rows="4"
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  ></textarea>
                </div>
              </div>
            </form>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Attach image</label>
                <div className="mt-1 flex items-center justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path d="M28 8H20l-8 8v24h24V16l-8-8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8 24h32M16 16l-8 8M40 32l-8 8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                        <span>Attach image</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500">Please attach image for related problem*</p>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Submit Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
      {/* <footer className="p-6 bg-white shadow-md mt-8 flex justify-between">
        <div className="space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">Liputan6 News</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Liputan6 News</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">MetroTv</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">MetroTv</a>
        </div>
        <div className="space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">Privacy policy</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Terms & Condition</a>
        </div>
      </footer> */}
    </div>
  );
}
