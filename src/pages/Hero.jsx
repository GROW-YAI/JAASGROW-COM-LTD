import React from "react";
import { FaWrench } from "react-icons/fa";
import heroimg from '../assets/images/about.png'

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="absolute inset-0">
        <img 
          src={heroimg}
          alt="Hero" 
          className="w-full h-full object-fit"
        />
        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Welcome to Jaasgrow
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Your trusted partner in agricultural innovation
          </p>
          {/* Add any call-to-action buttons here */}
        </div>
      </div>

      {/* Banner CTA - Added z-index to ensure visibility */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="bg-white rounded-tl-lg rounded-r-lg w-full sm:w-[50%]">
          <div className="max-w-7xl mx-auto px-4 pr-10">
            <div className="flex flex-col sm:flex-row items-center justify-between text-green-900 py-4">
              <div className="flex items-center space-x-3">
                <FaWrench className="text-2xl" />
                <div>
                  <span className="font-bold">Are you ready? </span>
                  <span className="text-green-900 text-lg sm:text-2xl">
                    Let's grow it now!
                  </span>
                </div>
              </div>
              <button className="mt-4 sm:mt-0 bg-green-600 text-center hover:bg-green-800 px-6 py-3 rounded-md transition-colors duration-300 text-white">
                Book an Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
