import React from "react";
import owner from "@/assets/images/innovator3.jpg";
import cofounder1 from "@/assets/images/cofounder1.jpg";
import cofounder2 from "@/assets/images/cofounder2.jpg";
import cofounder3 from "@/assets/images/cofounder3.jpg";
import { FaLeaf, FaLightbulb, FaHandshake } from "react-icons/fa";

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

  const founders = [
    {
      name: "Suleman Mohammed",
      role: "Biomedical Researcher",
      image: cofounder1,
      description: "Data Analyst, CoBreg fellow, IBM Certified Data Analyst",
      expertise: ["Digital Marketing", "Content Strategy", "Market Research"],
      education: "BSc. Agriculture Technology",
    },
    {
      name: "Abdul Mueez Owusu",
      role: "CEO of MIEL 247 ENTERPRISE",
      image: cofounder2,
      description: "Operations & Technical Manager",
      expertise: ["Operations", "Technical Management", "Business Development"],
      education: "BSc. Agriculture Science",
    },
    {
      name: "Ayishatu Ameen",
      role: "ESG Analyst",
      image: cofounder3,
      description: "Climate Action| Environmental Sustainability Specialist",
      expertise: [
        "Environmental Sustainability",
        "Climate Action",
        "ESG Analysis",
      ],
      education: "BSc. Environmental Science",
    },
  ];

  return (
    <div className="bg-green-50  ">
      {/* Header Section with Background Pattern */}
      <div className="container mx-auto px-4 pt-5 pb-10 relative ">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-4">
          Meet The Innovator
        </h1>
        <div className="w-64 h-1 bg-gradient-to-r from-green-500 to-green-700 mx-auto"></div>
      </div>

      {/* Profile Section */}
      <div className="container mx-auto px-4 mb-10 ">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row  items-center gap-10">
          {/* Image Container with Enhanced Styling */}
          <div className="md:w-[40%] flex justify-center">
            <div className="relative w-64 h-64 md:w-full md:h-[54vh]">
              <img
                src={owner}
                alt="Justice Kwadwo Turzin"
                className=" w-full h-full object-cover shadow-2xl border-4 border-green-600 p-1 rounded-lg"
              />
              <div className="absolute bottom-5 left-[16%] transform -translate-x-1/2 bg-green-100 text-from-green-600 text-green-700 py-1 px-1  text-sm font-semibold shadow-lg ">
                Founder & CEO
              </div>
            </div>
          </div>

          {/* Bio Container with Quote */}
          <div className="md:w-2/3">
            <div className="relative">
              <h2 className="text-2xl font-bold text-green-800 mb-6">
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

           {/* Achievements Section */}
           <div className="bg-50  py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-green-800 mb-4">
              Achievements
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Driving innovation in sustainable agriculture through leadership
              and dedication
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group "
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-700 rounded-bl-full -mr-16 -mt-16 transition-all duration-300 group-hover:bg-green-100"></div>
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

      {/* Co-founders Section */}
      <div className="bg-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                Meet The Team
              </h2>
              <div className="w-40 h-1 bg-green-600 mx-auto mb-6"></div>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Meet the visionaries helping drive JAASGROW's innovation in
                sustainable agriculture
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {founders.map((founder, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Header Background */}
                  <div className="h-2 bg-green-500 "></div>

                  {/* Profile Section */}
                  <div className="px-4 relative">
                    <div className="relative ">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-32 h-32 rounded-full border-2 border-white shadow-lg object-cover "
                      />
                    </div>

                    <div className="pt-3">
                      <h3 className="text-xl font-bold text-gray-900">
                        {founder.name}
                      </h3>
                      <p className="text-gray-600 font-medium">
                        {founder.role}
                      </p>
                      <p className="text-gray-500 text-sm mt-1">
                        {founder.description}
                      </p>
                    </div>

                    <div className="mt-4 space-y-3">
                      <div>
                        <p className="text-sm text-gray-500 font-medium">
                          Education
                        </p>
                        <p className="text-gray-700">{founder.education}</p>
                      </div>

                      <div>
                        <p className="text-sm text-gray-500 font-medium">
                          Expertise
                        </p>
                        <div className="flex flex-wrap gap-2 mt-1 mb-2">
                          {founder.expertise.map((skill, i) => (
                            <span
                              key={i}
                              className="bg-green-50 text-green-700 px-2 py-1 rounded-full text-xs shadow-lg"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
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
