import React from "react";
import spotifyLogo from "../assets/spotifylogo.png";
import pinterestLogo from "../assets/pinterestlogo.png";
import googleLogo from "../assets/googlelogo.png";
import appleLogo from "../assets/applelogo.png";
import whatsappLogo from "../assets/whatsapplogo.png";
import uiLogo from "../assets/uilogo.png";

const FeaturedJobs = () => {
  const jobs = [
    { logo: spotifyLogo, title: "Product Manager", type: "Full Time", location: "Kandy", category: "Marketing", salary: "LKR 120,000", buttonStyle: "bg-black text-white hover:bg-gray-800" },
    { logo: pinterestLogo, title: "Product Designer", type: "Part Time", location: "Anuradhapura", category: "Designer", salary: "LKR 80,000", buttonStyle: "border border-black text-black hover:bg-black hover:text-white" },
    { logo: googleLogo, title: "Recruiting Coordinator", type: "Part Time", location: "Kandy", category: "Customer Service", salary: "LKR 90,000", buttonStyle: "border border-black text-black hover:bg-black hover:text-white" },
    { logo: appleLogo, title: "Software Engineer", type: "Part Time", location: "Colombo", category: "Developer", salary: "LKR 150,000", buttonStyle: "border border-black text-black hover:bg-black hover:text-white" },
    { logo: whatsappLogo, title: "Customer Support", type: "Part Time", location: "Colombo", category: "Support", salary: "LKR 50,000", buttonStyle: "border border-black text-black hover:bg-black hover:text-white" },
    { logo: uiLogo, title: "UI/UX Designer", type: "Part Time", location: "Kandy", category: "Designer", salary: "LKR 950,000", buttonStyle: "border border-black text-black hover:bg-black hover:text-white" },
  ];

  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center sm:text-left">Our Featured Jobs</h2>
          <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-all mt-4 sm:mt-0">
            View All →
          </button>
        </div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 relative hover:shadow-lg transition-all">
              {/* Job Type and Location */}
              <div className="absolute top-3 left-3 space-x-2 text-xs">
                <span className="bg-gray-200 px-3 py-1 rounded-full text-gray-700">{job.type}</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-gray-700">{job.location}</span>
              </div>

              {/* Logo and Title */}
              <div className="flex items-center space-x-4 mt-10">
                <img src={job.logo} alt={job.title} className="h-12 w-12 rounded-full" />
                <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
              </div>

              {/* Job Details */}
              <p className="text-gray-600 mt-4">{job.category} | {job.salary} / Monthly</p>

              {/* Apply Button */}
              <button className={`mt-6 w-full py-2 rounded-lg transition-all ${job.buttonStyle}`}>
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
