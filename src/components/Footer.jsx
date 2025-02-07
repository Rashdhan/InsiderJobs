import React from "react";
import emailIcon from "../assets/email.png";
import phoneIcon from "../assets/phone.png";
import socialIcon from "../assets/icon.png"; 
import arrowIcon from "../assets/arrow2.png"; 
import logo from "../assets/logo2.png"; 

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 relative">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section - Links */}
        <div className="space-y-3">
          <a href="#" className="block text-gray-400 hover:text-white transition-all">About Us</a>
          <a href="#" className="block text-gray-400 hover:text-white transition-all">Privacy Policy</a>
          <a href="#" className="block text-gray-400 hover:text-white transition-all">Terms of Service</a>
          <a href="#" className="block text-gray-400 hover:text-white transition-all">Contact Us</a>
        </div>

        {/* Center Section - Contact */}
        <div className="space-y-4">
          <div className="flex items-center">
            <img src={emailIcon} alt="Email" className="w-5 h-5 mr-2" />
            <span>insiderjobs@gmail.com</span>
          </div>
          <div className="flex items-center">
            <img src={phoneIcon} alt="Phone" className="w-5 h-5 mr-2" />
            <span>+123 45 678 90</span>
          </div>
        </div>

        {/* Right Section - Arrow */}
        <div className="flex justify-end relative">
          <img src={arrowIcon} alt="Arrow" className="w-52 absolute right-0 bottom-0 hidden md:block"/>
        </div>
      </div>

      {/* Bottom Section - Logo on Left, Copyright in Center, Social Icons on Right */}
      <div className="mt-8 flex flex-col sm:flex-row justify-between items-center px-4 max-w-6xl mx-auto relative">
        {/* Logo on Left Bottom Corner */}
        <img src={logo} alt="Insider Jobs Logo" className="w-36 mb-4 sm:mb-0 sm:absolute sm:left-0 sm:bottom-4" />

        {/* Copyright in Center */}
        <p className="text-gray-400 text-sm mx-auto">
          © Copyright 2024, All Rights Reserved by Insider Jobs
        </p>

        {/* Social Icons (Right Side) */}
        <img src={socialIcon} alt="Social Media Icons" className="w-28 mb-4 sm:mb-0 sm:absolute sm:right-0 sm:bottom-4" />
      </div>
    </footer>
  );
};

export default Footer;
