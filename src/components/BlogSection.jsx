import React from "react";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";

const BlogSection = () => {
  const blogs = [
    {
      image: blog1,
      title: "Unlock Your Potential: Find Your Dream Job Today",
      description:
        "Looking for an opportunity to grow your career? Discover a wide range of jobs tailored to your skills and aspirations.",
      link: "#",
    },
    {
      image: blog2,
      title: "Your Career Journey Starts Here",
      description:
        "Explore exciting career opportunities in various industries. Whether you're a fresh graduate or an experienced professional, the perfect role awaits you.",
      link: "#",
    },
    {
      image: blog3,
      title: "Redefine Recruitment: Simplify Your Hiring Process",
      description:
        "Time to enhance your hiring strategy? Post your vacancies and reach a larger pool of talented professionals ready to make an impact.",
      link: "#",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8">
          Our Blogs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 sm:h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  {blog.description}
                </p>
                <a
                  href={blog.link}
                  className="text-black font-medium flex items-center space-x-1 hover:underline"
                >
                  <span>READ MORE</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
