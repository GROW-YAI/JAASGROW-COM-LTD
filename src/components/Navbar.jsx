import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../assets/images/logo.png";
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

     const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[rgba(24,99,6,1)] fixed w-full shadow-lg flex justify-between  z-10  md:px-10 rounded-md ">
      <div className="flex -center items-center h-16">
        <img
          src={logo}
          alt="logo"
          className="h-12 w-12 md:h-16 md:w-32 object-contain"
        />
        <div className="ml-3">
          <span className="font-bold font-mono text-[#fbf4d8] text-lg md:text-2xl">
            Jaas<span className="text-[#bef79d]">GROW</span>
          </span>{" "}
          <span className="font-bold font-mono text-lg md:text-2xl text-[#fbf4d8] pl-3">
            LIMITED
          </span>
        </div>
      </div>

       {/* Desktop Navigation */}
       <div className="hidden md:flex items-center space-x-6 pl-36">
        <ul className="flex space-x-2">
          <NavLink
            to="/"
            className="py-4 px-2 text-[#fbf4d8] font-medium text-sm hover:text-[#97d495] transition duration-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/About"
            className="py-4 px-2 text-[#fbf4d8] font-medium text-sm hover:text-[#97d495] transition duration-300"
          >
            About Us
          </NavLink>
          <NavLink
            to="/Services"
            className="py-4 px-2 text-[#fbf4d8] font-medium text-sm hover:text-[#97d495] transition duration-300"
          >
            Product
          </NavLink>
          <NavLink
            to="/Cars"
            className="py-4 px-2 text-[#fbf4d8] font-medium text-sm hover:text-[#97d495] transition duration-300"
          >
            Services
          </NavLink>
          <NavLink
            to="/Contact"
            className="py-4 px-2 text-[#fbf4d8] font-medium text-sm hover:text-[#97d495] transition duration-300"
          >
            Contact
          </NavLink>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isOpen ? (
            <FaTimes className="h-8 w-8" />
          ) : (
            <FaBars className="h-8 w-8" />
          )}
        </button>
      </div> 

       {/* Mobile Navigation */}
       {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[rgb(23,79,133)] p-4 md:hidden">
          <ul className="flex flex-col space-y-4">
            <NavLink
              to="/"
              className="text-gray-300 font-medium text-sm hover:text-[#97d495] transition duration-300"
            >
              Home
            </NavLink>
            <NavLink
              to="/About"
              className="text-gray-300 font-medium text-sm hover:text-[#97d495] transition duration-300"
            >
              About Us
            </NavLink>
            <NavLink
              to="/Services"
              className="text-gray-300 font-medium text-sm hover:text-[#97d495] transition duration-300"
            >
              Products
            </NavLink>
            <NavLink
              to="/Cars"
              className="text-gray-300 font-medium text-sm hover:text-[#97d495] transition duration-300"
            >
              Services
            </NavLink>
            <NavLink
              to="/Contact"
              className="text-gray-300 font-medium text-sm hover:text-[#97d495] transition duration-300"
            >
              Contact
            </NavLink>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar