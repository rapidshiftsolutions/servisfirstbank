'use client'

import {
  LockClosedIcon,
  MinusIcon,
  PhoneIcon,
  PlusIcon,
} from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'

import Link from 'next/link';


const StickyButtons = () => {
  const [fontSize, setFontSize] = useState(100) // Set base font size percentage
  const [showCallOptions, setShowCallOptions] = useState(false)

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`
  }, [fontSize])

  const increaseFontSize = () => {
    setFontSize((prevSize) => Math.min(prevSize + 10, 150)) // Cap font size at 150%
  }

  const resetFontSize = () => {
    setFontSize(100) // Reset font size to 100%
  }

  const toggleCallOptions = () => {
    setShowCallOptions(!showCallOptions)
  }

  return (
    <div className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 transform flex-col gap-3 md:flex">
      <div className="group relative">
        <button
          className="flex h-12 w-12 transform items-center justify-center rounded-md bg-primary-600 text-white shadow-md shadow-accent-900 transition duration-200 hover:scale-105 hover:shadow-md"
          onClick={increaseFontSize}
          title="Increase font size"
        >
          <PlusIcon className="h-6 w-6" />
        </button>
        <span className="absolute right-14 top-1/2 -translate-y-1/2 transform rounded-md bg-primary-600 px-2 py-1 text-white opacity-0 shadow-md shadow-accent-900 transition-opacity duration-300 group-hover:opacity-100">
          Larger
        </span>
      </div>
      <div className="group relative">
        <button
          className="flex h-12 w-12 transform items-center justify-center rounded-md bg-primary-600 text-white shadow-md shadow-accent-900 transition duration-200 hover:scale-105 hover:shadow-md"
          onClick={resetFontSize}
          title="Reset font size"
        >
          <MinusIcon className="h-6 w-6" />
        </button>
        <span className="absolute right-14 top-1/2 -translate-y-1/2 transform rounded-md bg-primary-600 px-2 py-1 text-white opacity-0 shadow-md shadow-accent-900 transition-opacity duration-300 group-hover:opacity-100">
          Smaller
        </span>
      </div>
      <div className="group relative">
        <button
          onClick={toggleCallOptions}
          className="flex h-12 w-12 transform items-center justify-center rounded-md bg-primary-600 text-white shadow-md shadow-accent-900 transition duration-200 hover:scale-105 hover:shadow-md"
          title="Call us"
        >
          <PhoneIcon className="h-6 w-6" />
        </button>
        <span className="absolute right-14 top-1/2 -translate-y-1/2 transform rounded-md bg-primary-600 px-2 py-1 text-white opacity-0 shadow-md shadow-accent-900 transition-opacity duration-300 group-hover:opacity-100">
          Call
        </span>
        {showCallOptions && (
          <div className="absolute -left-[280px] -top-2 w-64 rounded-lg bg-primary-600 p-4 text-white shadow-md shadow-accent-900">
            <h3 className="mb-2 text-lg font-semibold">Questions?</h3>
            <p className="text-sm">We are here to help you!</p>
            <Link href="/contact">
              <button className="mt-2 w-full rounded-md bg-primary-400 py-2 font-semibold text-white hover:bg-primary-600">
                Contact Us
              </button>
            </Link>
            <div className="mt-4 space-y-2 text-sm">
              <p>
                Toll-Free:{' '}
                <a href="tel:8663170810" className="hover:underline">
                  866.317.0810
                </a>
              </p>
              <p>
                Client Support:{' '}
                <a href="tel:8669225794" className="hover:underline">
                  866.922.5794
                </a>
              </p>
              <p>
                Telephone Banking:{' '}
                <a href="tel:8664989758" className="hover:underline">
                  866.498.9758
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="group relative">
        <a
          href="https://secure.servisfirstbank.com/login"
          className="flex h-12 w-12 transform items-center justify-center rounded-md bg-primary-600 text-white shadow-md shadow-accent-900 transition duration-200 hover:scale-105 hover:shadow-md"
          title="Login"
        >
          <LockClosedIcon className="h-6 w-6" />
        </a>
        <span className="absolute right-14 top-1/2 -translate-y-1/2 transform rounded-md bg-primary-600 px-2 py-1 text-white opacity-0 shadow-md shadow-accent-900 transition-opacity duration-300 group-hover:opacity-100">
          Login
        </span>
      </div>
    </div>
  )
}

export default StickyButtons
