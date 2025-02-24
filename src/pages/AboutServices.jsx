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

const AboutServices = () => {
  return (
    <div className="bg-white text-gray-900 py-12 px-6 md:px-16">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-8">
        About JAASGROW
      </h2>

      {/* Overview */}
      <p className="text-lg text-center max-w-2xl mx-auto mb-8">
        At <strong>JAASGROW</strong>, we help farmers enhance their yield by up to{" "}
        <span className="font-semibold text-green-700">50%</span> with our{" "}
        <span className="font-semibold">organic fertilizer</span> that also serves as 
        a <span className="font-semibold">natural pesticide</span>. Our solution, 
        made from <strong>organic waste</strong>, supports <strong>sustainable farming</strong> 
        while being environmentally friendly.
      </p>

      {/* Mission, Vision, Why Choose Us */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Mission */}
        <div className="bg-green-100 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-green-800 mb-3">🌱 Our Mission</h3>
          <p>
            To assist farmers in achieving <strong>higher yields</strong> and 
            <strong> sustainable farming</strong> by providing <strong>affordable, 
            organic agricultural solutions</strong> that improve soil health and 
            protect crops naturally.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-green-200 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-green-900 mb-3">🌿 Our Vision</h3>
          <p>
            To be a <strong>leading force</strong> in <strong>organic agriculture</strong> 
            across Africa, promoting <strong>eco-friendly farming</strong> while ensuring 
            food security and sustainability.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="bg-green-300 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-green-900 mb-3">✅ Why Choose Us?</h3>
          <ul className="list-disc list-inside">
            <li>Maximized Crop Yields – Up to <strong>50%</strong> increase.</li>
            <li>Dual-Purpose Product – Fertilizer & Pesticide.</li>
            <li>Eco-Friendly – Made from <strong>organic waste</strong>.</li>
            <li>Pest Protection – Natural & effective.</li>
            <li>Farmer-Focused – Ideal for all farmers.</li>
          </ul>
        </div>
      </div>

      {/* Contact & Website
      <div className="text-center mt-12">
        <p className="text-lg font-semibold">📍 Headquarters: Cape Coast, Akotokyer</p>
        <p className="text-lg font-semibold">📞 Phone: +233 24 956 7921</p>
        <a
          href="https://jaasgrow.com"
          className="text-green-700 font-semibold underline mt-2 inline-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          🌍 Visit our website
        </a>
      </div> */}
    </div>
  );
};

export default AboutServices;
