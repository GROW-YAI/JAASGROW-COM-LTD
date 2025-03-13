// import React from 'react'
// // import PropTypes from 'prop-types' // Add if you're using prop-types
// import aboutImg from '../assets/images/image1.png'
// import { FaBolt, FaEye, FaEnvelope,  FaBrain } from 'react-icons/fa' // Import React Icons

// const AboutServices= () => {
//   const handleContactClick = () => {
//     // Add your contact button click handler here
//     console.log('Contact button clicked')
//   }

//   return (
//     // <div> <Navbar/>
//     <div className="min-h-screen bg-white  w-full py-16">
//       <div className="   sm:px-6 ">

//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <h1 className="text-3xl sm:text-4xl font-mono font-bold italic text-gray-900 mb-4 pt-10">About Us</h1>

//         </div>

//         {/* Main Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Image Section */}
//           <div className="relative h-full rounded-lg overflow-hidden shadow-xl">
//             <img
//               src={aboutImg}
//               alt="Car Service"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Text Content */}
//           <div className="space-y-6 bg-green-400">
//             {/* Mission Section */}
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h2 className="text-md sm:text-lg font-bold text-gray-900 mb-4 flex items-center">
//                 <span className="text-green-600 mr-2">
//                   <FaBolt className="h-6 w-6" />
//                 </span>
//                 Our Mission
//               </h2>
//               <p className="text-gray-600 leading-relaxed text-sm">
//                 {/* We don't just sell cars—we keep them running at their best. From top-quality vehicle sales to expert repairs,
//                 we ensure every ride is smooth, safe, and reliable! */}
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quia voluptatum laudantium odio maiores nostrum!
//               </p>
//             </div>

//             {/* Vision Section */}
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h2 className="text-lg sm:text-lg font-bold text-gray-900 mb-4 flex items-center">
//                 <span className="text-green-600 mr-2">
//                   <FaEye className="h-6 w-6" />
//                 </span>
//                 Our Vision
//               </h2>
//               <p className="text-gray-600 leading-relaxed text-sm">
//                 {/* To be the leading automotive service provider, known for excellence, integrity, and customer satisfaction.
//                 We aim to revolutionize the car buying and servicing experience through innovation and dedication. */}
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, fugiat natus rerum qui recusandae quos.
//               </p>
//             </div>

//             {/* why choose us */}
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h2 className="text-lg sm:text-lg font-bold text-gray-900 mb-4 flex items-center">
//                 <span className="text-green-600 mr-2">
//                   <FaBrain className="h-6 w-6" />
//                 </span>
//                 Why Choose Us
//               </h2>
//               <p className="text-gray-600 leading-relaxed text-sm">
//               {/* We don't just sell cars, we keep them running at their best. From top-quality vehicle sales to expert repairs, we ensure every ride is smooth, safe, and reliable" */}
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quod minima soluta alias, voluptatem cum cumque quae explicabo debitis dolorum.
//               </p>
//             </div>

//             {/* Contact Section */}
//             <div className="bg-[hsla(125,71%,31%,1)] p-6 rounded-lg shadow-md text-white">
//               <h2 className="text-lg sm:text-lg font-bold mb-4 flex items-center">
//                 <span className="mr-2">
//                   <FaEnvelope className="h-6 w-6" />
//                 </span>
//                 Get in Touch
//               </h2>
//               <p className="leading-relaxed">
//                 {/* Ready to experience our exceptional service? Contact us today to schedule an appointment or learn more about our offerings. */}
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem mollitia cupiditate quam magnam dolorum nihil at quis!
//               </p>
//               <button
//                 type="button"
//                 onClick={handleContactClick}
//                 className="mt-4 bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300"
//               >
//                 Contact Us
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//   )
// }

// // AboutInnovator.propTypes = {
// //   // Add any props if needed
// // }

// export default AboutServices

import React from "react";
import aboutImg from "@/assets/images/about1.jpg"; 
import { FaLeaf, FaLightbulb, FaCheck, FaSeedling } from "react-icons/fa";

import owner from "@/assets/images/innovator3.jpg";
import cofounder1 from "@/assets/images/cofounder1.jpg";
import cofounder2 from "@/assets/images/cofounder2.jpg";
import cofounder3 from "@/assets/images/cofounder3.jpg";
import { FaHandshake } from "react-icons/fa";

const AboutServices = () => {

  const achievements = [
      {
        icon: <FaLeaf />,
        title: "Innovation Leader and Business Developer",
        description:
          "Created Asaase Aduane, a revolutionary 3-in-1 organic farming solution",
        highlight: "50% yield increase",
      },
      {
        icon: <FaLightbulb />,
        title: "Agricultural Expert",
        description:
          "Pioneering sustainable farming practices in Ghana's agricultural sector with 6 years experience in pest and insect control",
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
  
    // const founders = [
    //   {
    //     name: "Abdul Mueez Otoo",
    //     role: "Operations/ Technical",
    //     image: cofounder2,
    //     expertise: [" Entrpreneur Digatal Marketing"],
    //   },
    //   {
       
    //     name: "Sulemana Mohammed",
    //     role: "Product Development",
    //     image: cofounder1,
    //     expertise: ["Biomedical Scientist", "Quality Control and Product Development"],
    //   },
    //   {
    //     name: "Ayishatu Ameen",
    //     role: "Sales/ Marketing",
    //     image: cofounder3,
    //     expertise: [
    //       "Youth Advocate",
    //       "Agricultural Economist",
         
    //     ],
       
    //   },
    // ];

  return (
    <div className="bg-green-100 py-20">
      {/* About Section */}
      <div className="container mx-auto px-4 mt-16 ">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
            About JAASGROW
          </h1>
          <div className="w-52 h-1 bg-green-600 mx-auto rounded-full"></div>
        </div>

        {/* Overview Section */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Description Container */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-8">
              The Farmers’ Choice
            </h2>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                At{" "}
                <span className="font-semibold text-green-700">
                  JAASGROW LIMITED COMPANY
                </span>
                , we revolutionize farming with solutions that enhance yields by
                up to <span className="font-semibold text-green-700">50%</span>.
              </p>
              <p className="text-lg leading-relaxed">
                Our innovative{" "}
                <span className="font-semibold text-green-700">
                  organic fertilizer
                </span>{" "}
                doubles as a natural pesticide, providing comprehensive crop
                protection while maintaining ecological balance.
              </p>
              <p className="text-lg leading-relaxed">
                {" "}
                We Nurture the Earth, Empower Farmers, Promote Environmentally
                Sustainable Agriculture, and a Genuine and Safe Food System for
                the Future.
              </p>
            </div>
          </div>

          {/* Image Container */}
          <div className="md:w-1/2 relative ">
            <div className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 ">
              <img
                src={aboutImg}
                alt="Agriculture"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pt-5 text-lg text-gray-800 font-bold">
              <h1>
                so we say{" "}
                <span className="font-semibold text-green-700">
                  "DO NOT WASTE THE WASTE"
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid Section */}
      <div className="py-20 bg-green-100">
        <div className="container mx-auto px-4 ">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-green-900 mb-16">
              Our Approach
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Mission */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="text-green-600 text-4xl mb-2">
                  <FaLeaf />
                </div>
                <h3 className="text-2xl font-bold text-green-900 mb-2">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To produce the highest quality organic fertilizer possible
                  through highly skilled and dedicated management and a rigorous
                  manufacturing process, as well as to put fertilizers within
                  reach of every farmer and agrochemical seller both locally and
                  internationally, in order to inspire and nurture the plant and
                  farmer spirit.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="text-green-600 text-4xl mb2">
                  <FaLightbulb />
                </div>
                <h3 className="text-2xl font-bold text-green-900 mb-2">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Centred on three key players; the farmer, the crops and the
                  soil. We hope to be a world class manufacturer of fertilizer
                  with focus on safety, quality and effectiveness, thereby
                  serving as a gateway to sustaining environmentally friendly
                  agriculture and genuine and safe food system
                </p>
              </div>

              {/* Values */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="text-green-600 text-4xl ">
                  <FaSeedling />
                </div>
                <h3 className="text-2xl font-bold text-green-900 mb-2">
                  Our Values
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Commitment to sustainability, innovation, and farmer success
                  drives everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-green-100 ">
        <div className="container mx-auto px-4 py-10  ">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-green-900 mb-16">
              Why Choose JAASGROW?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Up to 50% yield increase",
                "Natural pest control",
                "Eco-friendly solutions",
                "Cost-effective farming",
                "Improved soil health",
                "Sustainable practices",
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <FaCheck className="text-green-600 w-6 h-6 flex-shrink-0" />
                  <span className="text-lg text-gray-800 font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

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
          {/* Image Container  */}
          <div className="md:w-[40%] flex justify-center group overflow-hidden relative">
            <div className=" w-64 h-64 md:w-full md:h-[54vh] ">
              <img
                src={owner}
                alt="Justice Kwadwo Turzin"
                className=" w-full h-full object-cover shadow-2xl border-2 border-green-600 p-0.5 rounded-md object-top transition-transform duration-300 ease-in-out group-hover:scale-[2] group-hover:translate-x-[-10px] group-hover:translate-y-[50px]"
              />
              <div className="absolute  bottom-1 left-[24%] md:left-[24%] sm:left-[24%]  transform -translate-x-1/2 bg-green-100 text-from-green-600 text-green-700 py-1 px-1  text-sm font-semibold shadow-lg ">
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
                  A <span className="font-semibold text-green-700">
                  Biomedical Researcher{" "} 
                    </span> 
                    and  visionary agricultural innovator {" "}
                  {/* <span className="font-semibold text-green-700">
                    Cape Coast, Central Region
                  </span> */}
               revolutionizing farming practices through
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
            </div>
            </div>

        

<div className="grid md:grid-cols-3 gap-6 container mx-auto px-8">
            
                <div
                  className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="h-2 bg-green-500 "></div>

                  {/* Profile Section */}
                  <div className="px-4 relative py-2">
                    <div className="relative w-32 h-32 group overflow-hidden rounded-full border-2 border-green-400 shadow-lg">
                      <img
                        src={cofounder1}
                        alt={"Abdul"}
                        className="w-full h-full object-cover object-top transition-transform duration-300 ease-in-out group-hover:scale-[3] group-hover:translate-x-[50px] group-hover:translate-y-[20px] "
                      />
                    </div>
                    <div className="pt-3">
                      <h3 className="text-xl font-bold text-gray-900">
                      Abdul Mueez Otoo
                      </h3>
                      <p className="text-gray-600 font-medium">
                      Operations/ Technical
                      </p>
                     
                    </div>
                    <div className="mt-4 space-y-3">
                      <div>
                        <p className="text-sm text-gray-500 font-medium">
                          Expertise
                        </p>
                        <div className="flex flex-wrap gap-2 mt-1 mb-4 ">
                            <p
                           
                              className="bg-green-50 text-green-700 px-2 py-1 rounded-full text-xs shadow-lg"
                            > Entrepreneur
                            </p>
                            <p
                           
                              className="bg-green-50 text-green-700 px-2 py-1 rounded-full text-xs shadow-lg"
                            > Digatal Marketing
                            </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
               
                <div
                  className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="h-2 bg-green-500 "></div>

                  {/* Profile Section */}
                  <div className="px-4 relative py-2">
                    <div className="relative w-32 h-32 group overflow-hidden rounded-full border-2 border-green-400 shadow-lg">
                      <img
                        src={cofounder3}
                        alt={"Ayisha"}
                        className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-[3] group-hover:translate-x-[20px] group-hover:translate-y-[100px] "
                      />
                    </div>
                    <div className="pt-3">
                      <h3 className="text-xl font-bold text-gray-900">
                      Ayishatu Ameen
                      </h3>
                      <p className="text-gray-600 font-medium">
                      Sales/ Marketing
                      </p>
                    </div>
                    <div className="mt-4 space-y-3">
                      <div>
                        <p className="text-sm text-gray-500 font-medium">
                          Expertise
                        </p>
                        <div className="flex flex-wrap gap-2 mt-1 mb-4 ">
                            <p
                           
                              className="bg-green-50 text-green-700 px-2 py-1 rounded-full text-xs shadow-lg"
                            > Youth Advocate
                            </p>
                            <p
                           
                              className="bg-green-50 text-green-700 px-2 py-1 rounded-full text-xs shadow-lg"
                            > Agricultural Economist
                            </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="h-2 bg-green-500 "></div>

                  {/* Profile Section */}
                  <div className="px-4 relative py-2">
                    <div className="relative w-32 h-32 group overflow-hidden rounded-full border-2 border-green-400 shadow-lg">
                      <img
                        src={cofounder2}
                        alt={"Sulemana"}
                        className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-[7] group-hover:translate-x-[10px] group-hover:translate-y-[280px] "
                      />
                    </div>
                    <div className="pt-3">
                      <h3 className="text-xl font-bold text-gray-900">
                      Sulemana Mohammed
                      </h3>
                      <p className="text-gray-600 font-medium">
                      Product Development
                      </p>
                     
                    </div>
                    <div className="mt-4 space-y-3">
                      <div>
                        <p className="text-sm text-gray-500 font-medium">
                          Expertise
                        </p>
                        <div className="flex flex-wrap gap-2 mt-1 mb-4 ">
                            <p
                           
                              className="bg-green-50 text-green-700 px-2 py-1 rounded-full text-xs shadow-lg"
                            > Biomedical Scientist
                            </p>
                            <p
                           
                              className="bg-green-50 text-green-700 px-2 py-1 rounded-full text-xs shadow-lg"
                            >Quality Control and Product Development
                            </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                </div>
                </div>
         

          
  );
};

export default AboutServices;
