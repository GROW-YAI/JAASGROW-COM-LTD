import React from "react";
import { FaLeaf } from "react-icons/fa";
import herovideo from "@/assets/video/cropgrow.gif";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <img
          src={herovideo}
          alt="Sustainable Farming"
          className="w-full h-full object-cover transform scale-105  motion-safe:animate-subtle-zoom"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-green-50/20" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl text-white">
          {/* Tagline */}

          {/* Main Heading */}
         
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-200 text-3xl md:text-5xl">
              JAASGROW Limited Company{" " }
              <span className="inline-block  text-green-100 md:text-2xl  text-3xl  pb-14">
                    The Farmers' Choice
                  </span>
            </h1>
           

          {/* Mission Statement */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl leading-relaxed">
            Nurture the Earth, Empower Farmers, Promote Environmentally
            Sustainable Agriculture
          </p>

          {/* Key Features */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🌱",
                title: "Organic Solution",
                desc: "100% natural and eco-friendly",
              },
              {
                icon: "🛡️",
                title: "Dual Action",
                desc: "Fertilizer & pesticide combined",
              },
              {
                icon: "📈",
                title: "Proven Results",
                desc: "Up to 50% yield increase",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
              >
                <div className="text-2xl mb-2 ">{feature.icon}</div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="bg-gradient-to-r from-green-800 to-green-700 rounded-lg w-full sm:w-[60%]">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between text-white">
              <div className="flex items-center space-x-3">
               
                <div>
                  
                  <span className="text-green-200 text-lg sm:text-xl">
                    "Do Not Waste The Waste"
                  </span>
                </div>
              </div>
              <Link to='/contact'>
              <button className="mt-4 sm:mt-0 bg-white text-green-800 px-6 py-3 rounded-full hover:bg-green-100 transition-colors duration-300 font-semibold shadow-lg">
                Contact Us
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
