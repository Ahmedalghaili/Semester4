import React, { useState } from "react";
import img from './image.png';
import { Link } from "react-router-dom";

export default function Peg2() {
    console.log("Peg2 component rendered"); // Debug log

    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="lg:flex sm:inline">
            {/* Box Container */}
            <div className="lg:w-1/2 p-5 border border-gray-300 shadow-lg rounded-lg sm:w-auto">
                {/* Image Section */}
                <div
                    style={{ backgroundImage: `url(${img})` }}
                    className="relative bg-cover bg-center lg:w-full h-80 rounded-lg"
                >
                    {/* Overlay to make the image shaded */}
                    <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                </div>
            </div>

            {/* Text Content Section */}
            <div className="lg:w-1/2 flex items-center justify-center p-10">
                <div>
                    <h1 className="text-3xl font-bold mb-4">Make some Reports!</h1>
                    <p className="text-gray-700 mb-6">
                   
                             "Our new web platform empowers communities by providing a streamlined way to report issues with public facilities"
                    </p> 
                    <Link to='/about' >
                    <button className="bg-green-500 text-black  py-2 px-4 rounded-full" >
                      <h1>Read more</h1>
                       
                           
                        
                    </button></Link>
                </div>
            </div>
        </div>
    );
}
