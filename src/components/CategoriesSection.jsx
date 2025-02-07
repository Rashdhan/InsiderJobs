import React from "react";
import webdesign from "../assets/webdesign.png";
import webdevelopment from "../assets/webdevelopment.png";
import marketing from "../assets/marketing.png";
import dataentry from "../assets/dataentry.png";
import softwareengineer from "../assets/softwareengineer.png";
import graphicdesigner from "../assets/graphicdesigner.png";

const CategoriesSection = () => {
  const categories = [
    { icon: webdesign, name: "Web Design" },
    { icon: webdevelopment, name: "Web Development" },
    { icon: marketing, name: "Marketing" },
    { icon: dataentry, name: "Data Entry" },
    { icon: softwareengineer, name: "Software Engineer" },
    { icon: graphicdesigner, name: "Graphic Designer" },
  ];

  return (
    <section className="bg-gray-50 py-8 sm:py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
          Our Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white shadow-md rounded-lg py-4 sm:py-6 hover:bg-gray-100 transition duration-300"
            >
              <img
                src={category.icon}
                alt={category.name}
                className="h-10 w-10 sm:h-12 sm:w-12 mb-2 sm:mb-4"
              />
              <p className="text-gray-800 text-sm sm:text-base font-medium">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
