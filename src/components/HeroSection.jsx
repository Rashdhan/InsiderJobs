import React from "react";
import bulb from "../assets/bulb.png";
import arrow from "../assets/arrow.png";

const HeroSection = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Image */}
        <div className="w-full md:w-1/4 mb-8 md:mb-0 flex justify-center">
          <img src={bulb} alt="Bulb" className="w-3/4 md:w-full h-auto" />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left flex-1 mb-8 md:mb-0 px-4 sm:px-0">
          {/* Heading */}
          <div className="flex justify-center items-center space-x-4 mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Find Your Dream Job <br />
              with Insider Jobs.
            </h1>
          </div>

         {/* Subheading */}
<p className="text-gray-600 mb-8 text-center ">
  Start your journey today! Explore top opportunities tailored to your skills or post a job to find the ideal match for your team. <br />
  Your next step to success begins here!
</p>


          {/* Buttons */}
          <div className="flex justify-center space-x-4 mb-10">
            <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all">
              Browse Jobs
            </button>
            <button className="flex items-center bg-gray-100 px-6 py-3 rounded-lg hover:bg-gray-200 transition-all">
              Post a Job
            </button>
          </div>

          {/* Search Bar */}
          <div className="bg-white shadow-md rounded-lg flex flex-col sm:flex-row items-center justify-center space-x-2 p-2">
            <input
              type="text"
              placeholder="Job Title, keywords..."
              className="w-full sm:w-auto text-sm border-none focus:outline-none px-2 py-1 rounded-lg mb-2 sm:mb-0"
            />
            <input
              type="text"
              placeholder="Type Your Location"
              className="w-full sm:w-auto text-sm border-none focus:outline-none px-2 py-1 rounded-lg mb-2 sm:mb-0"
            />
            <select className="w-full sm:w-auto text-sm border-none focus:outline-none px-2 py-1 rounded-lg bg-gray-100 mb-2 sm:mb-0">
              <option value="">Job Category</option>
              <option value="IT">IT</option>
              <option value="Marketing">Marketing</option>
              <option value="Finance">Finance</option>
            </select>
            <button className="bg-black text-white text-sm px-4 py-1 rounded-lg hover:bg-gray-800 transition-all w-full sm:w-auto">
              Search
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/4 flex justify-center">
          <img src={arrow} alt="Arrow" className="w-3/4 md:w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
