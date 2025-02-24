import React from "react";
import { FaSeedling, FaTools, FaLeaf, FaHandHoldingWater } from "react-icons/fa";

const Products = () => {
  const services = [
    {
      icon: <FaSeedling className="text-4xl text-green-600" />,
      title: "Quality Seeds",
      description: "Premium agricultural seeds for optimal crop yield and quality harvests."
    },
    {
      icon: <FaTools className="text-4xl text-green-600" />,
      title: "Modern Equipment",
      description: "State-of-the-art farming equipment and tools for efficient agriculture."
    },
    {
      icon: <FaLeaf className="text-4xl text-green-600" />,
      title: "Organic Solutions",
      description: "Eco-friendly and sustainable agricultural products and practices."
    },
    {
      icon: <FaHandHoldingWater className="text-4xl text-green-600" />,
      title: "Expert Consultation",
      description: "Professional guidance for maximizing your agricultural success."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Products & Services
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of agricultural solutions designed to enhance your farming experience and maximize productivity.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Products Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8">
            Featured Products
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-green-100"></div>
              <div className="p-6">
                <h4 className="font-semibold text-xl mb-2">Agricultural Seeds</h4>
                <p className="text-gray-600">High-quality seeds for various crops, ensuring better yield and resistance.</p>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-green-100"></div>
              <div className="p-6">
                <h4 className="font-semibold text-xl mb-2">Farming Equipment</h4>
                <p className="text-gray-600">Modern tools and machinery for efficient farming operations.</p>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-green-100"></div>
              <div className="p-6">
                <h4 className="font-semibold text-xl mb-2">Organic Fertilizers</h4>
                <p className="text-gray-600">Natural and eco-friendly fertilizers for sustainable agriculture.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition-colors duration-300">
            Explore All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
