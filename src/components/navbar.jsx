import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import menuIcon from '../assets/menuicon.png'; // Import your menu icon image

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-md relative">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="Insider Jobs Logo"
          className="w-16 h-16"
        />
      </div>

      {/* Links Section (Only visible on Desktop) */}
      <ul className="hidden md:flex space-x-8 text-gray-600">
        <li className="hover:text-gray-900 cursor-pointer">Home</li>
        <li className="hover:text-gray-900 cursor-pointer">Jobs</li>
        <li className="hover:text-gray-900 cursor-pointer">About Us</li>
        <li className="hover:text-gray-900 cursor-pointer">Contact Us</li>
      </ul>

      {/* Buttons Section (Visible on Desktop) */}
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-900">Sign In</button>
        <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
          Sign Up
        </button>
      </div>

      {/* Hamburger Icon (Visible on Mobile) */}
      <div className="md:hidden flex items-center cursor-pointer ml-4" onClick={toggleMenu}>
        <img src={menuIcon} alt="Menu" className="w-8 h-8" />
      </div>

      {/* Dropdown Menu (Visible when Menu is Open) */}
      {isMenuOpen && (
        <div className="absolute right-0 top-16 bg-white shadow-lg rounded-md w-48 py-4 px-6 space-y-4 z-10">
          <ul className="text-gray-600 space-y-2">
            <li className="hover:text-gray-900 cursor-pointer">Home</li>
            <li className="hover:text-gray-900 cursor-pointer">Jobs</li>
            <li className="hover:text-gray-900 cursor-pointer">About Us</li>
            <li className="hover:text-gray-900 cursor-pointer">Contact Us</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
