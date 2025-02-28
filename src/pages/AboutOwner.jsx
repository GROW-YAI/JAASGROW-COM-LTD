import React from "react";
import owner from "@/assets/images/about.png";
import { FaLeaf, FaLightbulb, FaHandshake, FaQuoteLeft } from "react-icons/fa";

const AboutOwner = () => {
  const achievements = [
    {
      icon: <FaLeaf />,
      title: "Innovation Leader",
      description:
        "Created Asaase Aduane, a revolutionary 3-in-1 organic farming solution",
      highlight: "50% yield increase",
    },
    {
      icon: <FaLightbulb />,
      title: "Agricultural Expert",
      description:
        "Pioneering sustainable farming practices in Ghana's agricultural sector",
      highlight: "Eco-friendly solutions",
    },
    {
      icon: <FaHandshake />,
      title: "Community Impact",
      description:
        "Empowering local farmers with eco-friendly agricultural solutions",
      highlight: "Farmer-focused approach",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Header Section with Background Pattern */}
      <div className="container mx-auto px-4 pt-20 pb-16 relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-5"></div>
        <h1 className="text-4xl md:text-5xl font-bold text-center text-green-800 mb-4">
          Meet Our Innovator
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-700 mx-auto"></div>
      </div>

      {/* Profile Section */}
      <div className="container mx-auto px-4 mb-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Image Container with Enhanced Styling */}
          <div className="md:w-1/3 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-full blur-lg opacity-20 transform -translate-x-2 translate-y-2"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <img
                  src={owner}
                  alt="Justice Kwadwo Turzin"
                  className="rounded-full w-full h-full object-cover shadow-2xl border-4 border-white"
                />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-600 to-green-700 text-white py-2 px-8 rounded-full text-sm font-semibold shadow-lg">
                  Founder & CEO
                </div>
              </div>
            </div>
          </div>

          {/* Bio Container with Quote */}
          <div className="md:w-2/3">
            <div className="relative">
              
              <h2 className="text-3xl font-bold text-green-800 mb-6">
                Justice Kwadwo Turzin
              </h2>
              <div className="space-y-4 text-gray-700 relative z-10">
                <p className="leading-relaxed text-lg">
                  A visionary agricultural innovator from{" "}
                  <span className="font-semibold text-green-700">
                    Cape Coast, Central Region
                  </span>
                  , Justice is revolutionizing farming practices through
                  sustainable solutions. His dedication to agricultural
                  innovation has led to the development of groundbreaking
                  organic farming technologies.
                </p>
                <p className="leading-relaxed text-lg">
                  Through his flagship innovation{" "}
                  <span className="font-semibold text-green-700">
                    Asaase Aduane
                  </span>
                  , a 3-in-1 climate-smart product, he's helping farmers achieve
                  up to{" "}
                  <span className="font-bold text-green-700">50% increase</span>{" "}
                  in crop yields while promoting environmental sustainability.
                </p>
                <p className="leading-relaxed text-lg">
                  Founded in 2022, JAASGROW under his leadership has grown to
                  become a trusted name in organic agricultural solutions,
                  serving farmers across Ghana with eco-friendly and
                  cost-effective farming inputs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section with Enhanced Cards */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-green-800 mb-4">
              Leadership & Achievements
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Driving innovation in sustainable agriculture through leadership
              and dedication
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full -mr-16 -mt-16 transition-all duration-300 group-hover:bg-green-100"></div>
                  <div className="relative z-10">
                    <div className="text-green-600 text-3xl mb-4 bg-green-50 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-green-100 transition-all duration-300">
                      {achievement.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {achievement.description}
                    </p>
                    <div className="text-sm font-semibold text-green-700 bg-green-50 inline-block px-3 py-1 rounded-full">
                      {achievement.highlight}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOwner;
