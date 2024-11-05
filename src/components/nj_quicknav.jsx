'use client';

import React, { useState, useEffect } from 'react';
import { PlusIcon, MinusIcon, EnvelopeIcon, PhoneIcon, LockClosedIcon } from '@heroicons/react/24/solid';

const StickyButtons = () => {
  const [fontSize, setFontSize] = useState(100); // Set base font size percentage
  const [showCallOptions, setShowCallOptions] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  const increaseFontSize = () => {
    setFontSize((prevSize) => Math.min(prevSize + 10, 150)); // Cap font size at 150%
  };

  const resetFontSize = () => {
    setFontSize(100); // Reset font size to 100%
  };

  const toggleCallOptions = () => {
    setShowCallOptions(!showCallOptions);
  };

  return (
    <div className="hidden md:flex flex-col gap-3 fixed top-1/2 right-4 transform -translate-y-1/2 z-50">
      <div className="group relative">
        <button
          className="w-12 h-12 bg-blue-600 text-white rounded-md shadow-lg hover:scale-105 hover:shadow-xl transition transform duration-200 flex items-center justify-center"
          onClick={increaseFontSize}
          title="Increase font size"
        >
          <PlusIcon className="h-6 w-6" />
        </button>
        <span className="absolute right-14 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-600 text-white px-2 py-1 rounded-md shadow-lg">
          Larger
        </span>
      </div>
      <div className="group relative">
        <button
          className="w-12 h-12 bg-blue-600 text-white rounded-md shadow-lg hover:scale-105 hover:shadow-xl transition transform duration-200 flex items-center justify-center"
          onClick={resetFontSize}
          title="Reset font size"
        >
          <MinusIcon className="h-6 w-6" />
        </button>
        <span className="absolute right-14 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-600 text-white px-2 py-1 rounded-md shadow-lg">
          Smaller
        </span>
      </div>
      <div className="group relative">
        <a
          href="mailto:support@yourcompany.com"
          className="w-12 h-12 bg-blue-600 text-white rounded-md shadow-lg hover:scale-105 hover:shadow-xl transition transform duration-200 flex items-center justify-center"
          title="Email us"
        >
          <EnvelopeIcon className="h-6 w-6" />
        </a>
        <span className="absolute right-14 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-600 text-white px-2 py-1 rounded-md shadow-lg">
          Email
        </span>
      </div>
      <div className="group relative">
        <button
          onClick={toggleCallOptions}
          className="w-12 h-12 bg-blue-600 text-white rounded-md shadow-lg hover:scale-105 hover:shadow-xl transition transform duration-200 flex items-center justify-center"
          title="Call us"
        >
          <PhoneIcon className="h-6 w-6" />
        </button>
        <span className="absolute right-14 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-600 text-white px-2 py-1 rounded-md shadow-lg">
          Call
        </span>
        {showCallOptions && (
          <div className="absolute -left-[280px] -top-2 w-64 bg-blue-600 text-white rounded-lg shadow-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Questions?</h3>
            <p className="text-sm">We are here to help you!</p>
            <button className="bg-blue-700 mt-2 w-full py-2 rounded-md text-white font-semibold hover:bg-blue-800">
              Contact Us
            </button>
            <div className="mt-4 text-sm space-y-2">
              <p>Toll-Free: <a href="tel:8663170810" className="hover:underline">866.317.0810</a></p>
              <p>Client Support: <a href="tel:8669225794" className="hover:underline">866.922.5794</a></p>
              <p>Telephone Banking: <a href="tel:8664989758" className="hover:underline">866.498.9758</a></p>
            </div>
          </div>
        )}
      </div>
      <div className="group relative">
        <a
          href="/login"
          className="w-12 h-12 bg-blue-600 text-white rounded-md shadow-lg hover:scale-105 hover:shadow-xl transition transform duration-200 flex items-center justify-center"
          title="Login"
        >
          <LockClosedIcon className="h-6 w-6" />
        </a>
        <span className="absolute right-14 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-600 text-white px-2 py-1 rounded-md shadow-lg">
          Login
        </span>
      </div>
    </div>
  );
};

export default StickyButtons;
