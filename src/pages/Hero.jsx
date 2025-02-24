import React from "react";
import { FaWrench, FaLeaf, FaArrowRight } from "react-icons/fa";
import heroimg from "@/assets/images/about.png";

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <img
          src={heroimg}
          alt="Sustainable Farming"
          className="w-full h-full object-cover transform scale-105 motion-safe:animate-subtle-zoom"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-700/20 to-black/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl text-white">
       
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-100">
              JAASGROW
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white max-w-2xl leading-relaxed">
            Enhancing crop yields by up to 50% with our innovative organic
            solutions. Experience the future of sustainable farming today.
          </p>

         
          {/* Key Features */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
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
                className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/20"
              >
                <div className="text-2xl mb-2">{feature.icon}</div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="bg-gradient-to-r from-green-800 to-green-700 rounded-tl-3xl w-full sm:w-[60%]">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between text-white">
              <div className="flex items-center space-x-3">
                <FaWrench className="text-2xl text-green-300" />
                <div>
                  <span className="font-bold">
                    Ready to Transform Your Farm?{" "}
                  </span>
                  <span className="text-green-200 text-lg sm:text-xl">
                    Start growing better today!
                  </span>
                </div>
              </div>
              <button className="mt-4 sm:mt-0 bg-white text-green-800 px-6 py-3 rounded-full hover:bg-green-100 transition-colors duration-300 font-semibold shadow-lg transform hover:scale-105">
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      {/* <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce bg-white/30 p-2 rounded-full backdrop-blur-sm">
          <FaArrowRight className="text-white transform rotate-90" />
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
