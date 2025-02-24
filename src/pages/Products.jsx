import React from "react";
import {
  FaSeedling,
  FaLeaf,
  FaHandHoldingWater,
  FaRecycle,
} from "react-icons/fa";
import fert from "@/assets/images/image4.png";
import fert2 from "@/assets/images/image3.png";

const Products = () => {
  const services = [
    {
      icon: <FaSeedling className="text-4xl text-green-600" />,
      title: "Organic Fertilizer",
      description:
        "Our flagship 3-in-1 organic fertilizer enhances soil health and boosts crop yields naturally.",
    },
    {
      icon: <FaLeaf className="text-4xl text-green-600" />,
      title: "Natural Pesticide",
      description:
        "Eco-friendly pest control solution integrated into our organic fertilizer for comprehensive crop protection.",
    },
    {
      icon: <FaRecycle className="text-4xl text-green-600" />,
      title: "Soil Amendment",
      description:
        "Innovative soil enhancement technology that improves soil structure and nutrient retention.",
    },
    {
      icon: <FaHandHoldingWater className="text-4xl text-green-600" />,
      title: "Agricultural Consulting",
      description:
        "Expert guidance on sustainable farming practices and optimal product application.",
    },
  ];

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
    },
    {
      image: fert2,
      title: "Soil Revitalizer",
      description:
        "Advanced soil conditioning solution for optimal growing conditions.",
      features: [
        "Better water retention",
        "Enhanced soil structure",
        "Increased fertility",
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Innovative Agricultural Solutions
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover JAASGROW's revolutionary organic farming solutions,
            designed to enhance crop yields while promoting sustainable
            agriculture practices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 bg-green-50 p-4 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Products Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-green-800 mb-12">
            Featured Products
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="h-56 relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-green-900 opacity-10"></div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-xl text-green-800 mb-3">
                    {product.title}
                  </h4>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <FaLeaf className="text-green-500 mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-colors duration-300 shadow-md hover:shadow-lg">
            Request Product Information
          </button>
          <p className="mt-4 text-gray-600">
            Learn how our products can transform your farming practices
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
