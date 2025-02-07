import React from "react";
import starImage from "../assets/star.png";

const ReviewSection = () => {
  const testimonials = [
    {
      name: "Jeeva Jeeva",
      role: "Designer",
      review:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
    },
    {
      name: "Mohamed Farzan",
      role: "Designer",
      review:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
    },
    {
      name: "Mohomed Nuzrath",
      role: "Designer",
      review:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
    },
    {
      name: "Shane",
      role: "Designer",
      review:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center space-y-4"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
              {/* Star Image */}
              <img
                src={starImage}
                alt="Stars"
                className="h-8 w-auto my-2"  // Adjusted size for better visual balance
              />
              <p className="text-sm text-gray-600 leading-relaxed">{testimonial.review}</p> {/* Added line-height */}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800">
            See More →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
