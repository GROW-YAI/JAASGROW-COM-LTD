import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import farmer1 from "@/assets/images/image1.png";
import farmer2 from "@/assets/images/image2.png";
import farmer3 from "@/assets/images/image3.png";
import farmer4 from "@/assets/images/image4.png";
import farmer5 from "@/assets/images/image5.png";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Farmer Group 1",
      role: "3 acres farm",
      image: farmer1,
      quote:
        "After using JAASGROW's Asaase Aduane, our yield increased from 13,000kg to 54,000kg. The results are incredible!",
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
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Our Success Stories
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how JAASGROW is transforming farms and improving yields across
            Ghana
          </p>
        </div>

        {/* Results Overview */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-green-800 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-6">Proven Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-green-200 mb-2">Average Yield Increase</p>
                <p className="text-4xl font-bold">326%</p>
              </div>
              <div>
                <p className="text-green-200 mb-2">Farms Impacted</p>
                <p className="text-4xl font-bold">5+</p>
              </div>
              <div>
                <p className="text-green-200 mb-2">Success Rate</p>
                <p className="text-4xl font-bold">100%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials List - Full Width */}
        <div className="max-w-6xl mx-auto space-y-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image Section - Left Side */}
                <div className="md:w-1/3 p-6 flex items-center justify-center">
                  <div className="w-full aspect-square max-w-sm rounded-xl overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content Section - Right Side */}
                <div className="md:w-2/3 p-8 bg-white rounded-r-xl">
                  <div className="flex items-center mb-4">
                    <div>
                      <p className="font-semibold text-2xl text-gray-800 mb-1">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-500 text-lg">{testimonial.role}</p>
                    </div>
                    <div className="flex text-yellow-400 ml-auto">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-xl" />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start mb-6">
                    <FaQuoteLeft className="text-green-500 text-3xl mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {testimonial.quote}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="bg-green-50 rounded-lg p-6 mt-auto">
                    <div className="grid grid-cols-3 gap-8 text-center">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Before</p>
                        <p className="font-bold text-xl text-green-800">
                          {testimonial.stats.before}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">After</p>
                        <p className="font-bold text-xl text-green-800">
                          {testimonial.stats.after}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Increase</p>
                        <p className="font-bold text-xl text-green-600">
                          +{testimonial.stats.increase}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Join these successful farmers and transform your yield today
          </p>
          <Link to="/contact">
            <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors duration-300 font-semibold">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
