import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaBuilding,
  FaCalendarAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  const companyInfo = {
    founded: "2022",
    size: "2-10 employees",
    industry: "Agricultural Chemical Manufacturing",
    specialties: [
      "Organic fertilizer production",
      "Natural pesticides",
      "Soil amendments",
      "Sustainable farming",
      "Agricultural innovation",
      "Eco-friendly solutions",
    ],
    headquarters: "Cape Coast, Akotokyer",
    address: "UCC, Cape Coast, Akotokyer 00023, GH",
    description:
      "JAASGROW is a pioneering agricultural technology company specializing in organic farming solutions. Our innovative Asaase Aduane product helps farmers increase yields while promoting sustainable practices.",
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Contact JAASGROW
          </h1>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Let's discuss how our innovative organic solutions can transform
            your farming practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Company Information */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-green-800 mb-6">
              Company Information
            </h2>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaBuilding className="text-green-600 text-xl mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">About Us</h3>
                  <p className="text-gray-600">{companyInfo.description}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-green-600 text-xl" />
                <div>
                  <h3 className="font-semibold text-gray-800">Headquarters</h3>
                  <p className="text-gray-600">{companyInfo.address}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <FaPhone className="text-green-600 text-xl" />
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <a
                    href="tel:+233249567921"
                    className="text-gray-600 hover:text-green-600"
                  >
                    +233 24 956 7921
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-green-600 text-xl" />
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <a
                    href="mailto:jaagrow@yahoo.com"
                    className="text-gray-600 hover:text-green-600"
                  >
                    jaagrow@yahoo.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <FaGlobe className="text-green-600 text-xl" />
                <div>
                  <h3 className="font-semibold text-gray-800">Website</h3>
                  <a
                    href="https://jaasgrow.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-green-600"
                  >
                    www.jaasgrow.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <FaCalendarAlt className="text-green-600 text-xl" />
                <div>
                  <h3 className="font-semibold text-gray-800">Established</h3>
                  <p className="text-gray-600">{companyInfo.founded}</p>
                </div>
              </div>
            </div>

            {/* Specialties */}
            <div className="mt-8">
              <h3 className="font-semibold text-gray-800 mb-3">Specialties</h3>
              <div className="flex flex-wrap gap-2">
                {companyInfo.specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* Map Section */}
            <div className="mt-8">
              <h3 className="font-semibold text-gray-800 mb-3">Location</h3>
              <div className="rounded-lg overflow-hidden h-48">
                <iframe
                  title="JAASGROW Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.4376088774307!2d-1.2886111!3d5.1149999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdd6e2f6a75b3e3%3A0x7c0d3d37d3c7b8a1!2sUniversity%20of%20Cape%20Coast!5e0!3m2!1sen!2sgh!4v1629789012345!5m2!1sen!2sgh"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-green-800 mb-6">
              Send Us a Message
            </h2>
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = `mailto:jaagrow@yahoo.com?subject=${
                  document.getElementById("subject").value
                }&body=${document.getElementById("message").value}`;
              }}
            >
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Your email address"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Message subject"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                Connect With Us
              </h3>
              <div className="flex justify-center space-x-6">
                <SocialLink
                  icon={<FaFacebookF />}
                  href="#"
                  color="text-blue-600"
                />
                <SocialLink
                  icon={<FaInstagram />}
                  href="#"
                  color="text-pink-600"
                />
                <SocialLink
                  icon={<FaLinkedinIn />}
                  href="#"
                  color="text-blue-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialLink = ({ icon, href, color }) => (
  <Link
    to={href}
    className={`${color} hover:opacity-80 transition-opacity duration-200 text-2xl`}
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </Link>
);

export default Contact;
