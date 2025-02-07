import React from 'react';
import vectorImage from '../assets/vectorimage.png';
import microsoft from '../assets/microsoft.png';
import google from '../assets/google.png';
import meta from '../assets/meta.png';
import spotify from '../assets/spotify.png';
import pinterest from '../assets/pinterest.png';
import amazon from '../assets/amazon.png';

const TrustedSection = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Vector Image */}
        <div className="flex justify-center mb-6">
          <img
            src={vectorImage}
            alt="Office Illustration"
            className="w-full max-w-screen-lg" 
          />
        </div>

        {/* Trusted By Section */}
        <div className="bg-white shadow-md py-3 px-4 rounded-lg flex flex-wrap justify-center items-center max-w-4xl mx-auto">
          <p className="text-gray-500 text-sm font-medium mr-4 mb-4 sm:mb-0">Trusted by</p>
          <div className="flex flex-wrap justify-center">
            <img src={microsoft} alt="Microsoft" className="h-8 mx-4 mb-4 sm:mb-0" />
            <img src={google} alt="Google" className="h-8 mx-4 mb-4 sm:mb-0" />
            <img src={meta} alt="Meta" className="h-8 mx-4 mb-4 sm:mb-0" />
            <img src={spotify} alt="Spotify" className="h-8 mx-4 mb-4 sm:mb-0" />
            <img src={pinterest} alt="Pinterest" className="h-8 mx-4 mb-4 sm:mb-0" />
            <img src={amazon} alt="Amazon" className="h-8 mx-4 mb-4 sm:mb-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
