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
          className="w-full h-full object-cover transform scale-105 motion-safe:animate-subtle-zoom"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-green-50/20" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl text-white mt-16 md:mt-32 lg:mt-0">
          {/* Main Heading */}
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-200 text-2xl sm:text-3xl md:text-5xl font-bold">
            JAASGROW Limited Company{" "}
            <span className="block text-green-100 text-lg sm:text-xl md:text-2xl pb-2 sm:pb-6 md:pb-8 mt-2">
              The Farmers' Choice
            </span>
          </h1>

          {/* Mission Statement */}
          <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 md:mb-8 text-gray-200 max-w-2xl leading-relaxed pr-4 sm:pr-8">
            Nurture the Earth, Empower Farmers, Promote Environmentally
            Sustainable Agriculture
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full sm:w-[90vw] md:w-[60vw] mb-8 sm:mb-12">
            {[
              {
                icon: "🌱",
                title: "Organic Solution",
                desc: "100% natural and eco-friendly",
              },
              {
                icon: "🛡️",
                title: "Triple Effect",
                desc: "Fertilizer, pesticide & soil amendment combined",
              },
              {
                icon: "📈",
                title: "Proven Results",
                desc: "Up to 50% yield increase",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20 transition hover:scale-105"
              >
                <div className="text-xl sm:text-2xl mb-1 sm:mb-2">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-sm sm:text-base">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="absolute bottom-0 left-0 right-0 z-10 ">
        <div className="bg-gradient-to-r from-green-800 to-green-700 rounded-lg  w-full sm:w-[80%] md:w-[50%] p-3 sm:p-4 ">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0 px-4">
            <span className="text-green-200 text-sm sm:text-base md:text-xl text-center sm:text-left">
              "Do Not Waste The Waste"
            </span>
            <Link to="/contact">
              <button className="w-full sm:w-auto bg-white text-green-800 px-6 py-2 rounded-full hover:bg-green-100 transition-colors duration-300 text-sm sm:text-base font-semibold shadow-lg">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
