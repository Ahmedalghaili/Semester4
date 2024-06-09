import React from "react";
import img from './image.png';

export default function Peg2() {
    console.log("Peg2 component rendered"); // Debug log

    return (
        <div className="flex">
            {/* Box Container */}
            <div className="w-1/2 h-screen p-5 border border-gray-300 shadow-lg rounded-lg ">
                {/* Image Section */}
                <div
                    style={{ backgroundImage: `url(${img})` }}
                    className="bg-cover bg-center w-full h-full rounded-lg "
                >
                    {/* Optional: Add any content or overlay on the image if needed */}
                </div>
            </div>

            {/* Text Content Section */}
            <div className="w-1/2 flex items-center justify-center p-10">
                <div>
                    <h1 className="text-3xl font-bold mb-4">Make some Reports!</h1>
                    <p className="text-gray-700 mb-6">
                        Our new web platform empowers communities by providing a streamlined way to report issues with public facilities, such as broken streetlights or potholes. Residents can easily submit reports, which are then tracked and addressed by the appropriate municipal departments. This platform not only facilitates quicker resolutions but also enhances community engagement by allowing residents to actively participate in the upkeep of their neighborhoods....
                    </p>
                    <button className="bg-green-500 text-white py-2 px-4 rounded-full">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
}
