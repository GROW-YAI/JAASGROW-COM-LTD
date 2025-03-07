import React, { useState } from "react";
import {
  FaSeedling,
  FaLeaf,
  FaHandHoldingWater,
  FaRecycle,
} from "react-icons/fa";
import fert from "@/assets/images/prdt2.jpg";
import fert2 from "@/assets/images/prdt1.jpg";
import fert3 from "@/assets/images/image3.png";
import { FaSpaghettiMonsterFlying } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(0);

  

  // const services = [
  //   {
  //     icon: <FaSeedling className="text-4xl text-green-600" />,
  //     title: "Organic Fertilizer",
  //     description:
  //       "Our flagship 3-in-1 organic fertilizer enhances soil health and boosts crop yields naturally.",
  //   },
  //   {
  //     icon: <FaSpaghettiMonsterFlying className="text-4xl text-green-600" />,
  //     title: "Natural Pesticide",
  //     description:
  //       "Eco-friendly pest control solution integrated into our organic fertilizer for comprehensive crop protection.",
  //   },
  //   {
  //     icon: <FaRecycle className="text-4xl text-green-600" />,
  //     title: "Soil Amendment",
  //     description:
  //       "Innovative soil enhancement technology that improves soil structure and nutrient retention.",
  //   },
  //   {
  //     icon: <FaHandHoldingWater className="text-4xl text-green-600" />,
  //     title: "Agricultural Consulting",
  //     description:
  //       "Expert guidance on sustainable farming practices and optimal product application.",
  //   },
  // ];

  const products = [
    {
      image: fert2,
      title: "Asaase Aduane",
      description:
        "Our premium 3-in-1 organic solution that functions as fertilizer, pesticide, and soil amendment.",
      features: [
        "Increases yield by up to 50%",
        "100% organic",
        "Cost-effective",
      ],
      details: {
        composition: "100% Organic Materials",
        application: "Easy to apply - mix with soil or use as top dressing",
        benefits: [
          "Enhanced soil fertility",
          "Natural pest control",
          "Improved water retention",
          "Increased crop yield",
          "Better produce quality",
        ],
        recommended_for: "All types of crops and farming practices",
      },
    },
    {
      image: fert,
      title: "Organic Growth Booster",
      description:
        "Specialized formula for enhanced crop development and stronger root systems.",
      features: [
        "Rapid nutrient absorption",
        "Improved crop quality",
        "Extended shelf life",
      ],
      details: {
        composition: "Natural Growth Enhancers",
        application: "Foliar spray or soil application",
        benefits: [
          "Faster growth rate",
          "Stronger root development",
          "Enhanced nutrient uptake",
          "Better fruit formation",
        ],
        recommended_for: "Vegetables and fruit crops",
      },
    },
   
  ];

  return (
    <section className="bg-green-100 py-16">
      <div className="max-w-6xl mx-auto px-4 mt-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Our Product
          </h2>
          <div className="w-40 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover JAASGROW's revolutionary organic farming solutions
          </p>
        </div>

        {/* Products and Description Layout */}
        <div >
          <div className="flex flex-col md:flex-col gap-10">
            {/* Products List - up */}

            <motion.div className="flex gap-10 justify-center  "
             initial={{ x: -100 }}
             animate={{ x: 0 }}
             transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}>
              <div className="w-64 h-64 md:w-80 md:h-80 flex items-center  ">
                <img
                  src={fert2}
                  alt={"Assase Aduane"}
                  className="w-full h-full overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 rounded-lg border-4 border-green-800 m-0.5  "
                />
              </div>
              <div className="w-64 h-64 md:w-80 md:h-80 flex items-center">
                <img
                  src={fert}
                  alt={"Assase Aduane"}
                  className="w-full h-full overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 rounded-lg border-4 border-green-800 m-0.5"
                />
               </div>
               <div className="w-64 h-64 md:w-80 md:h-80 flex items-center ">
                <img
                  src={fert2}
                  alt={"Assase Aduane"}
                  className="w-full h-full overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 rounded-lg border-4 border-green-800 m-0.5 "
                />
              </div>
              <div className="w-64 h-64 md:w-80 md:h-80 flex items-center">
                <img
                  src={fert}
                  alt={"Assase Aduane"}
                  className="w-full h-full overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 rounded-lg border-4 border-green-800 m-0.5"
                />
               </div>
               </motion.div>


            {/* Product Details - down */}
            <div className="mt-2 mx-auto ">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-green-800 mb-4">
                    {products[selectedProduct].title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {products[selectedProduct].description}
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Features Section */}
                  <div className="bg-green-50/50 p-6 rounded-xl border border-green-100">
                    <h4 className="text-xl font-semibold text-green-800 mb-4">
                      Key Features
                    </h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      {products[selectedProduct].features.map(
                        (feature, index) => (
                          <div
                            key={index}
                            className="bg-white p-4 rounded-lg shadow-lg"
                          >
                            <p className="text-gray-700">{feature}</p>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Technical Details */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold text-green-800 mb-3">
                        Composition
                      </h4>
                      <p className="bg-white p-4 rounded-lg shadow-lg">
                        {products[selectedProduct].details.composition}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-green-800 mb-3">
                        Application
                      </h4>
                      <p className="bg-white p-4 rounded-lg shadow-lg">
                        {products[selectedProduct].details.application}
                      </p>
                    </div>
                  </div>

                  {/* Benefits Section */}
                  <div>
                    <h4 className="text-xl font-semibold text-green-800 mb-4">
                      Key Benefits
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {products[selectedProduct].details.benefits.map(
                        (benefit, index) => (
                          <div
                            key={index}
                            className="bg-gray-50 p-3 rounded-lg shadow-md"
                          >
                            <p className="text-gray-700">{benefit}</p>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div>
                    <h4 className="text-xl font-semibold text-green-800 mb-3">
                      Recommended For
                    </h4>
                    <p className="text-gray-700">
                      {products[selectedProduct].details.recommended_for}
                    </p>
                  </div>

                  {/* Call to Action */}
                  <div className="pt-6 border-t">
                    <Link to='/contact'>
                    <button className="w-full bg-green-600 text-white py-4 rounded-xl hover:bg-green-700 transition-colors duration-300 text-lg font-semibold">
                      Request Product Information
                    </button>
                    </Link>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
