import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import farmer1 from "@/assets/images/image1.png";
import farmer2 from "@/assets/images/image2.png";
import farmer3 from "@/assets/images/image3.png";
import farmer4 from "@/assets/images/about.png";
import farmer5 from "@/assets/images/image5.png";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Farmer Group 1",
      role: "3 acres farm",
      image: farmer1,
      quote:
        "After using  Asaase Aduane, our yield increased from 13,000kg to 54,000kg. The results are incredible!",
      stats: {
        before: "13,000kg",
        after: "54,000kg",
        increase: "315%",
      },
    },
    {
      name: "Farmer Group 2",
      role: "5 acres farm",
      image: farmer2,
      quote:
        "The dual-action formula helped us achieve nearly 90,000kg yield, up from our previous 20,000kg harvest.",
      stats: {
        before: "20,000kg",
        after: "89,000kg",
        increase: "345%",
      },
    },
    {
      name: "Farmer Group 3",
      role: "1 acre farm",
      image: farmer3,
      quote:
        "Even with our small farm, JAASGROW helped us increase our yield from 4,000kg to 19,000kg!",
      stats: {
        before: "4,000kg",
        after: "19,000kg",
        increase: "375%",
      },
    },
    {
      name: "Farmer Group 4",
      role: "4 acres farm",
      image: farmer4,
      quote:
        "JAASGROW's solution transformed our farming practices. Our yield jumped from 20,000kg to 65,000kg!",
      stats: {
        before: "20,000kg",
        after: "65,000kg",
        increase: "225%",
      },
    },
    {
      name: "Farmer Group 5",
      role: "2.5 acres farm",
      image: farmer5,
      quote:
        "The results speak for themselves. We went from 10,000kg to 47,000kg harvest after using Asaase Aduane.",
      stats: {
        before: "10,000kg",
        after: "47,000kg",
        increase: "370%",
      },
    },
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4 mt-16 ">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Success Stories
          </h2>
          <div className="w-32 sm:w-40 h-1 bg-green-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            See how JAASGROW has transformed farming practices and improved
            yields
          </p>
        </div>

      {/* Results Overview */}
      <div className="max-w-3xl mx-auto mb-10 
        ">
          <div className="bg-white rounded-xl 
          p-4 text-center text-gray-900 
          shadow-lg">
            <h3 className="text-xl font-bold 
            mb-4">Proven Results</h3>
            <div className="grid grid-cols-1 
            md:grid-cols-3 gap-8">
              <div>
                <p className="text-gray-900 
                mb-2">Average Yield Increase</p>
                <div className="flex 
                justify-center">
                <p className="text-2xl 
                font-bold border-green-800 
                rounded-full h-20  border-2 
                text-center items-center 
                text-green-800 justify-center 
                flex  w-20">326%</p>
                </div>
                
              </div>
              <div>
                <p className="text-gray-900 
                mb-2 ">Farms Impacted</p>
                <div className="flex 
                justify-center">
                <p className="text-2xl 
                font-bold border-green-800 
                rounded-full h-20  border-2 
                text-center items-center 
                text-green-800 justify-center 
                flex  w-20">5+</p>
                </div>
              </div>
              <div>
                <p className="text-gray-900 
                mb-2 ">Success Rate</p>
                <div className="flex 
                justify-center">
                <p className="text-2xl 
                font-bold border-green-800 
                rounded-full h-20  border-2 
                text-center items-center 
                text-green-800 justify-center 
                flex  w-20">100%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Profile Section */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg sm:text-xl mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500 text-sm sm:text-base">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <div className="mb-6">
                <FaQuoteLeft className="text-green-500 text-xl sm:text-3xl mb-3" />
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>

              {/* Stats */}
              <div className="bg-green-50 rounded-lg p-4 sm:p-5">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-sm sm:text-base text-gray-600 mb-2">
                      Before
                    </p>
                    <p className="font-bold text-base sm:text-lg text-green-800">
                      {testimonial.stats.before}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm sm:text-base text-gray-600 mb-2">
                      After
                    </p>
                    <p className="font-bold text-base sm:text-lg text-green-800">
                      {testimonial.stats.after}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm sm:text-base text-gray-600 mb-2">
                      Increase
                    </p>
                    <p className="font-bold text-base sm:text-lg text-green-800">
                      +{testimonial.stats.increase}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Join these successful farmers and transform your yield today
          </p>
          <Link to="/contact">
            <button className="bg-green-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-green-700 transition-colors duration-300 text-sm sm:text-base font-semibold shadow-lg">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
