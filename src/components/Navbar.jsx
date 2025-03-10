import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "@/assets/images/logo.png";
import { FaBars, FaTimes, FaPhone, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Active link style
  const getLinkClass = (path) => {
    const baseClass =
      "py-2 px-4 font-medium text-sm transition-all duration-300 relative";
    const isActive = location.pathname === path;

    return `${baseClass} ${
      isActive
        ? "text-green-400 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-green-400"
        : "text-[#fbf4d8] hover:text-green-400"
    }`;
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="w-full z-30 top-0 left-0 fixed md:block bg-black/70 text-white h-[8vh] pt-4 hidden">
        <div className="container mx-auto px-2 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4 overflow-x-auto">
            <Link
              to="tel:+233246887818"
              className="flex items-center space-x-2 hover:text-green-300 whitespace-nowrap"
            >
              <FaPhone className="text-xs" />
              <span className="text-xs md:text-sm">
                +233 246 887 818, +233 553 115 662
              </span>
            </Link>
            <Link
              to="mailto:jaasgrowcompanyltd@gmail.com"
              className="flex items-center space-x-2 hover:text-green-300 whitespace-nowrap"
            >
              <FaEnvelope className="text-xs" />
              <span className="text-xs md:text-sm">
                jaasgrowcompanyltd@gmail.com
              </span>
            </Link>
          </div>
          <div className="text-green-200 text-xs md:text-sm hidden md:block">
            Transforming Agriculture Through Innovation
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`fixed w-full ${
          isScrolled ? "mt-0" : "mt-0 md:mt-10"
        } top-0 left-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-green-900/85 backdrop-blur-sm shadow-lg py-2"
            : "bg-green-900 py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center space-x-2">
              <img
                src={logo}
                alt="JAASGROW"
                className="h-8 w-8 md:h-12 md:w-12 object-contain"
              />
              <div>
                <span className="font-bold text-[#fbf4d8] text-sm md:text-xl">
                  JAAS
                  <span className="text-[rgb(40,230,88)] italic">
                    GROW
                  </span>{" "}
                  <span className="hidden md:inline">Company Limited</span>
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <NavLink to="/" className={getLinkClass("/")}>
                Home
              </NavLink>
              <NavLink to="/about" className={getLinkClass("/about")}>
                About Us
              </NavLink>
              <NavLink to="/products" className={getLinkClass("/products")}>
                Products
              </NavLink>
              <NavLink to="/products" className={getLinkClass("/products")}>
                Services
              </NavLink>
              <NavLink
                to="/testimonials"
                className={getLinkClass("/testimonials")}
              >
                Testimonials
              </NavLink>
              <NavLink to="/contact" className={getLinkClass("/contact")}>
                Contact
              </NavLink>
              {/* <button className="ml-4 bg-green-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-colors duration-300 shadow-md">
                Get Started
              </button> */}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="h-5 w-5" />
              ) : (
                <FaBars className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 absolute w-full ${
            isOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2"
          }`}
        >
          <div className="bg-green-800 px-4 py-2 space-y-1 shadow-lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-3 px-4 text-sm ${
                  isActive
                    ? "text-white bg-green-700"
                    : "text-gray-200 hover:text-white hover:bg-green-700"
                } rounded transition-colors duration-200`
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block py-3 px-4 text-sm ${
                  isActive
                    ? "text-white bg-green-700"
                    : "text-gray-200 hover:text-white hover:bg-green-700"
                } rounded transition-colors duration-200`
              }
              onClick={() => setIsOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `block py-3 px-4 text-sm ${
                  isActive
                    ? "text-white bg-green-700"
                    : "text-gray-200 hover:text-white hover:bg-green-700"
                } rounded transition-colors duration-200`
              }
              onClick={() => setIsOpen(false)}
            >
              Products
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `block py-3 px-4 text-sm ${
                  isActive
                    ? "text-white bg-green-700"
                    : "text-gray-200 hover:text-white hover:bg-green-700"
                } rounded transition-colors duration-200`
              }
              onClick={() => setIsOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/testimonials"
              className={({ isActive }) =>
                `block py-3 px-4 text-sm ${
                  isActive
                    ? "text-white bg-green-700"
                    : "text-gray-200 hover:text-white hover:bg-green-700"
                } rounded transition-colors duration-200`
              }
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block py-3 px-4 text-sm ${
                  isActive
                    ? "text-white bg-green-700"
                    : "text-gray-200 hover:text-white hover:bg-green-700"
                } rounded transition-colors duration-200`
              }
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
