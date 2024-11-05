'use client';

import React from 'react';

const Hero = () => {
  return (
    <section
      className="relative flex items-center h-screen md:h-[600px] bg-cover bg-center"
      style={{
        backgroundImage: "url('/SFB/marketing/pexels-jopwell-2422286.webp')",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 px-6 md:pl-16 text-left max-w-lg md:max-w-none w-full md:w-1/2">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Times Change, Modern Banking Solutions Will Help.
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Our experienced Private Bankers will create customized solutions to fit your needs.
        </p>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
