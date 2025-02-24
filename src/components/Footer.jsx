import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaLeaf,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "@/assets/images/logo.png";

const Footer = () => {
  const companyLinks = [
    { name: "About Us", path: "/about" },
    { name: "Our Products", path: "/services" },
    { name: "Services", path: "/cars" },
    { name: "Contact", path: "/contact" },
  ];

  const productLinks = [
    { name: "Asaase Aduane", path: "/services" },
    { name: "Organic Fertilizer", path: "/services" },
    { name: "Soil Amendment", path: "/services" },
    { name: "Natural Pesticide", path: "/services" },
  ];

  return (
    <footer className="bg-gradient-to-b from-green-900 to-green-950 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="JAASGROW" className="h-12 w-12" />
              <div>
                <h3 className="text-xl font-bold">
                  Jaas<span className="text-green-400">GROW</span>
                </h3>
                <p className="text-sm text-green-200">
                  Agricultural Innovation
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Revolutionizing agriculture through innovative organic solutions.
              Enhancing crop yields by up to 50% while promoting sustainable
              farming practices.
            </p>
            <div className="flex space-x-4">
              <SocialLink
                href="https://www.facebook.com/profile.php?id=100063974685967"
                icon={<FaFacebook />}
              />
              <SocialLink href="#" icon={<FaInstagram />} />
              <SocialLink href="#" icon={<FaLinkedin />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <FaLeaf className="mr-2 text-green-400" />
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm flex items-center"
                  >
                    <span className="mr-2">›</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <FaLeaf className="mr-2 text-green-400" />
              Products
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm flex items-center"
                  >
                    <span className="mr-2">›</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <FaLeaf className="mr-2 text-green-400" />
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  <FaMapMarkerAlt className="mt-1" />
                  <span className="text-sm">
                    UCC, Cape Coast, Akotokyer 00023, GH
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+233249567921"
                  className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  <FaPhone />
                  <span className="text-sm">+233 24 956 7921</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:jaagrow@yahoo.com"
                  className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  <FaEnvelope />
                  <span className="text-sm">jaagrow@yahoo.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} JAASGROW Limited. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="hover:text-green-400 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-green-400 transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-800 p-2 rounded-full hover:bg-green-700 transition-colors duration-200 text-green-200 hover:text-white"
  >
    {icon}
  </a>
);

export default Footer;
