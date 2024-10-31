'use client'

import { useState } from 'react'
import { Popover, PopoverButton, PopoverPanel, Disclosure } from '@headlessui/react'
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'
import clsx from 'clsx'

const menuItems = [
  {
    name: 'Commercial Banking',
    items: [
      { name: 'Deposit Accounts', href: '#', description: 'Explore our range of deposit accounts, including checking and money market options, and find the right fit for your business.' },
      { name: 'Treasury Management', href: '#', description: 'Utilize our treasury management services, such as online banking, bill pay, and remote deposits, to streamline your finances.' },
      { name: 'Account Services', href: '#', description: 'Manage your business finances effectively with check reordering, credit card options, and other account services.' },
    ],
  },
  {
    name: 'Private Banking',
    items: [
      { name: 'Deposit Accounts', href: '#', description: 'Open a private checking or money market account with tailored requirements and competitive rates.' },
      { name: 'Online Services', href: '#', description: 'Access our secure online banking, bill pay, and mobile banking solutions anytime, anywhere.' },
      { name: 'Account Services', href: '#', description: 'Order checks, monitor your debit card, and utilize other convenient account services.' },
    ],
  },
  {
    name: 'Personal Banking',
    items: [
      { name: 'Deposit Accounts', href: '#', description: 'Choose from our selection of checking, savings, and money market accounts, all with straightforward terms and requirements.' },
      { name: 'Online Services', href: '#', description: 'Enjoy the convenience of online and mobile banking, with features like bill pay and eStatements.' },
      { name: 'Account Services', href: '#', description: 'Stay on top of your finances with check reordering, debit card monitoring, and other valuable services.' },
    ],
  },
  {
    name: 'Lending Services',
    items: [
      { name: 'Personal Lending', href: '#', description: 'Apply for a mortgage loan or a personal credit card tailored to your individual financial needs.' },
      { name: 'Business Lending', href: '#', description: 'Support your business growth with small business loans and business credit card options.' },
    ],
  },
  {
    name: 'Credit Card Services',
    items: [
      { name: 'Commercial Purchasing Card', href: '#', description: 'Optimize your purchasing with our commercial purchasing card solutions.' },
      { name: 'Business Credit Card', href: '#', description: 'Leverage credit card solutions designed specifically for business expenses.' },
      { name: 'Personal Credit Card', href: '#', description: 'Select a personal credit card that suits your lifestyle and spending habits.' },
      { name: 'Merchant Services', href: '#', description: 'Enhance your payment processing with our merchant services, designed for seamless transactions.' },
      { name: 'Credit Card Privacy Notice', href: '#', description: 'Review our commitment to protecting your credit card information.' },
    ],
  },
  {
    name: 'Correspondent Banking',
    items: [
      { name: 'Correspondent Services', href: '#', description: 'Access correspondent services, including settlement solutions and Servis1st Access.' },
      { name: 'Helpful Info', href: '#', description: 'Learn more about us through our history, locations, testimonials, and ways to connect.' },
    ],
  },
  {
    name: 'About Us',
    items: [
      { name: 'About Us', href: '#', description: 'Get to know ServisFirst Bank, our values, and our mission to serve you better.' },
      { name: 'Our History', href: '#', description: 'Discover our history and how we have grown to serve our community.' },
      { name: 'News', href: '#', description: 'Stay informed with the latest news from ServisFirst Bank.' },
      { name: 'Locations', href: '#', description: 'Find a ServisFirst Bank location near you for all your banking needs.' },
      { name: 'Contact Us', href: '#', description: 'Reach out to our team for assistance or with any questions.' },
    ],
  },
  // Other categories (e.g., Private Banking, Personal Banking, Lending Services, etc.) follow here

]

export default function NewNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/SFB/logo.svg" alt="ServisFirst Bank Logo" className="h-8 w-auto ml-4" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:space-x-8">
          {menuItems.map((menu) => (
            <Popover className="relative" key={menu.name}>
              {({ open }) => (
                <>
                  <PopoverButton className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-blue-600">
                    {menu.name}
                    <ChevronDownIcon className="h-5 w-5" />
                  </PopoverButton>
                  <PopoverPanel
                    as={motion.div}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: open ? 1 : 0, y: open ? 0 : -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 z-10 mt-2 w-80 -translate-x-1/2 rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5"
                  >
                    <div className="p-4">
                      {menu.items.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                        >
                          {item.name}
                          <p className="text-xs text-gray-500">{item.description}</p>
                        </a>
                      ))}
                    </div>
                  </PopoverPanel>
                </>
              )}
            </Popover>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <Disclosure as="div" className="lg:hidden bg-white shadow-md">
          <div className="px-4 pb-4 pt-2 space-y-2">
            {menuItems.map((menu) => (
              <Disclosure key={menu.name}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between items-center px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 rounded-lg">
                      {menu.name}
                      <ChevronDownIcon
                        className={clsx('h-5 w-5 transform', { 'rotate-180': open })}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="space-y-1">
                      {menu.items.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        >
                          {item.name}
                          <p className="text-xs text-gray-500">{item.description}</p>
                        </a>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </Disclosure>
      )}
    </nav>
  )
}