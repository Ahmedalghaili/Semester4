import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import ApexChart from "./ApexChart";

ChartJS.register(ArcElement, Tooltip, Legend);

const CircularProgress = ({ completedColor, remainingColor }) => {
    const [value, setValue] = useState(30); // Initial value set to 30

    const handleInputChange = (event) => {
        const newValue = parseInt(event.target.value, 10);
        if (!isNaN(newValue) && newValue >= 0 && newValue <= 100) {
            setValue(newValue);
        }
    };



    return (
        <div className='flex space-x-2 p-20 h-screen sm:inline'>
            <form>
                <div className="  space-y-12 col-span-2 flex sm:pl-8">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            This information will be displayed publicly so be careful what you share.
                        </p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span>
                                        <input
                                            type="email"
                                            name="username"
                                            id="username"
                                            autoComplete="email"
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-green-700"
                                            placeholder="janesmith@.......com"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                    About
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="about"
                                        name="about"
                                        rows={3}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-green-700"
                                        defaultValue={''}
                                    />
                                </div>
                                <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                                    Cover photo
                                </label>
                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 bg-green-700">
                                    <div className="text-center ">
                                        <PhotoIcon className="mx-auto h-12 w-12 text-gray-300 " aria-hidden="true " />
                                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                            >
                                                <span>Upload a file</span>
                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label htmlFor="progress" className="block text-sm font-medium leading-6 text-gray-900">
                                    Progress Value
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="number"
                                        name="progress"
                                        id="progress"
                                        autoComplete="progress"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-green-700"
                                        value={value}
                                        onChange={handleInputChange}
                                        min="0"
                                        max="100"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className='lg:flex-1 '>
                <ApexChart />
            </div>
        </div>
    );
};

export default CircularProgress;
