import React from "react";
import './Index1.css';
import Icon from "../Home/Icon.png";
export default function Login1() {

    return (
        <>



            <div className="grid grid-cols-2  lg:grid-cols-2 gap-4" id="">
                <div className="\ bg-primary text-white bg-green-800 w-full p-7 h-full lg:h-screen  text-left " >
                    <div className='flex flex-col space-y-2  p-7	 '>
                        <h3 className='text-3xl font-bold  text-black sm:text-6xl'>Welcome to MitraKota</h3>
                        <p className='text-2xl '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>

                    <div className='flex flex-col space-y-2 p-7 '>
                        <h1 className='text-3xl font-bold  sm:text-6xl'>Better Community</h1>
                        <p className='text-2xl'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eget</p>
                    </div>
                    <div className='flex flex-col space-y-2 p-7'>
                        <h1 className='text-3xl font-bold  sm:text-6xl'>Better Life</h1>
                        <p className='text-2xl'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eget</p>
                    </div>
                </div>

                <div className="d-inline  bg-dark text-white bg-white h-full  " >

                    <div className="sm:mx-auto sm:w-full sm:max-w-sm pt-20 ">
                        <img
                            className="mx-auto h-10 w-auto"
                            src={Icon}
                            alt="Your Company"
                        />
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Not a member?{' '}
                            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Start a 14 day free trial
                            </a>
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}
