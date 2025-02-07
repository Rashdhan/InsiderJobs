import React from "react";

const ContactUs = () => {
  return (
    <section className="bg-gray-50 py-8 sm:py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6 sm:mb-8">
          Contact Us
        </h2>

        <form className="bg-white shadow-lg rounded-lg p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* First Name */}
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                className="block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-black focus:border-black"
              />
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                className="block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-black focus:border-black"
              />
            </div>

            {/* Email Address */}
            <div className="col-span-1 sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                className="block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-black focus:border-black"
              />
            </div>

            {/* Location */}
            <div className="col-span-1 sm:col-span-2">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                placeholder="Location"
                className="block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-black focus:border-black"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Write your message here..."
              className="block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-black focus:border-black"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center sm:text-right">
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition duration-300"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
