import React from "react";
import '../index.css'; // Create this file for custom styles
import logo1 from './img.jpg'; // Replace with actual paths to your logo images
import logo2 from './img.jpg';
import logo3 from './img.jpg';
import logo4 from './img.jpg';
import logo5 from './img.jpg';
import logo6 from './img.jpg';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

export default function Tape() {
  return (
    <div className="bg-gray-100 py-10">
      <h2 className="text-center text-xl font-bold mb-6">Trusted by leading organizations</h2>
      <div className="overflow-hidden relative">
        <div className="flex animate-scroll">
          {logos.map((logo, index) => (
            <div key={index} className="flex-none mx-4 w-32">
              <img src={logo} alt={`Logo ${index}`} className="opacity-60 hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
          {/* Duplicate the logos for seamless scrolling */}
          {logos.map((logo, index) => (
            <div key={index + logos.length} className="flex-none mx-4 w-32">
              <img src={logo} alt={`Logo ${index}`} className="opacity-60 hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
