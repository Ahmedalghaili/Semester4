import React from "react";
import '../index.css'; // Ensure this imports Tailwind CSS
import logo1 from './123213.png'; // Correct paths to your logo images
import logo2 from './Jatim1.png';
import logo3 from './Bali1.png';
import logo4 from './Banten1.png';
import logo5 from './Di.png';

const logos = [logo1, logo2, logo3, logo4, logo5];

export default function Tape() {
  return (
    <div className="scrolling-container">
      <div className="scrolling-inner" role="marquee">
        <div className="flex animate-scroll-left">
          {logos.map((logo, index) => (
            <div key={index} className="scrolling-item">
              <img src={logo} alt={`Logo ${index}`} className="w-full h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div key={index + logos.length} className="scrolling-item">
              <img src={logo} alt={`Logo ${index}`} className="w-full h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
        <div className="flex animate-scroll-left">
          {logos.map((logo, index) => (
            <div key={index} className="scrolling-item">
              <img src={logo} alt={`Logo ${index}`} className="w-full h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div key={index + logos.length} className="scrolling-item">
              <img src={logo} alt={`Logo ${index}`} className="w-full h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
