'use client';

import React, { useState } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import { Autocomplete } from '@react-google-maps/api';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    reason: '',
    name: '',
    email: '',
    company: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    comments: '',
  });
  const [captchaValid, setCaptchaValid] = useState(false);
  const [autoComplete, setAutoComplete] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAgGO-4UJ1-wS6aua__cpo1uVcefrlPaGg', // Replace with your actual API key
    libraries: ['places'],
  });

  const handlePlaceChanged = () => {
    if (autoComplete !== null) {
      const place = autoComplete.getPlace();
      let addressComponents = {
        addressLine1: place.formatted_address,
        city: '',
        state: '',
        zipCode: '',
      };

      place.address_components.forEach((component) => {
        const types = component.types;
        if (types.includes('locality')) {
          addressComponents.city = component.long_name;
        }
        if (types.includes('administrative_area_level_1')) {
          addressComponents.state = component.short_name;
        }
        if (types.includes('postal_code')) {
          addressComponents.zipCode = component.long_name;
        }
      });

      setFormData((prevData) => ({
        ...prevData,
        ...addressComponents,
      }));
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleCaptchaChange = (value) => {
    if (value) setCaptchaValid(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaValid) {
      alert('Please complete the CAPTCHA verification.');
      return;
    }

    try {
      await fetch('https://hooks.zapier.com/hooks/catch/19076579/25fzdpk/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      alert('Thank you for contacting us! We will get back to you shortly.');
      setFormData({
        reason: '',
        name: '',
        email: '',
        company: '',
        phone: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zipCode: '',
        comments: '',
      });
    } catch (error) {
      alert('There was an error submitting the form. Please try again.');
    }
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0 lg:left-1/2">
        <img
          alt=""
          src="/SFB/marketing/pexels-jopwell-2422293.webp"
          className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full"
        />
      </div>
      <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Let's work together
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Fill in the details below and we will get back to you shortly.
            </p>
            <form onSubmit={handleSubmit} className="mt-16 space-y-6">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="reason" className="block text-sm font-semibold text-gray-900">
                    Reason for Inquiry
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      id="reason"
                      value={formData.reason}
                      onChange={handleInputChange}
                      required
                      placeholder="E.g., Service Inquiry"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900">
                    Name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="E.g., John Doe"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="E.g., john.doe@example.com"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-900">
                    Company
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="E.g., ABC Corp"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900">
                    Phone
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="E.g., (123) 456-7890"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="addressLine1" className="block text-sm font-semibold text-gray-900">
                    Address Line 1
                  </label>
                  <div className="mt-2.5">
                    <Autocomplete onLoad={(autocomplete) => setAutoComplete(autocomplete)} onPlaceChanged={handlePlaceChanged}>
                      <input
                        type="text"
                        id="addressLine1"
                        value={formData.addressLine1}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your address"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm"
                      />
                    </Autocomplete>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="addressLine2" className="block text-sm font-semibold text-gray-900">
                    Address Line 2
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      id="addressLine2"
                      value={formData.addressLine2}
                      onChange={handleInputChange}
                      placeholder="Apt, Suite, etc."
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2 grid grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-semibold text-gray-900">
                      City
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        id="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-semibold text-gray-900">
                      State
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        id="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-semibold text-gray-900">
                      ZIP Code
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        id="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        required
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="comments" className="block text-sm font-semibold text-gray-900">
                    Questions / Comments
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="comments"
                      value={formData.comments}
                      onChange={handleInputChange}
                      rows="4"
                      required
                      placeholder="Tell us how we can assist you."
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-6">
                <ReCAPTCHA
                  sitekey="6LcaNXkqAAAAAHy7hfy7eyh0Wh2GkYL4GNJTSP8d" // Replace with actual ReCAPTCHA key
                  onChange={handleCaptchaChange}
                />
              </div>
              <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
                <button
                  type="submit"
                  className="rounded-md bg-primary-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
