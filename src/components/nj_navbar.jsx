'use client'

import {
  Disclosure,
  Popover,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  DocumentChartBarIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const getCurrentDateTime = () => {
  const now = new Date()
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }
  return now.toLocaleDateString(undefined, options)
}

const menuItems = [
  {
    name: 'Commercial Banking',
    items: [
      {
        name: 'Deposit Accounts',
        href: '#',
        description:
          'Explore our range of deposit accounts, including checking and money market options, and find the right fit for your business.',
        icon: ChartPieIcon,
      },
      {
        name: 'Treasury Management',
        href: '#',
        description:
          'Utilize our treasury management services, such as online banking, bill pay, and remote deposits, to streamline your finances.',
        icon: SquaresPlusIcon,
      },
      {
        name: 'Account Services',
        href: '#',
        description:
          'Manage your business finances effectively with check reordering, credit card options, and other account services.',
        icon: CursorArrowRaysIcon,
      },
    ],
  },
  {
    name: 'Private Banking',
    items: [
      {
        name: 'Deposit Accounts',
        href: '#',
        description:
          'Open a private checking or money market account with tailored requirements and competitive rates.',
        icon: ArrowPathIcon,
      },
      {
        name: 'Online Services',
        href: '#',
        description:
          'Access our secure online banking, bill pay, and mobile banking solutions anytime, anywhere.',
        icon: FingerPrintIcon,
      },
      {
        name: 'Account Services',
        href: '#',
        description:
          'Order checks, monitor your debit card, and utilize other convenient account services.',
        icon: DocumentChartBarIcon,
      },
    ],
  },
  {
    name: 'Personal Banking',
    items: [
      {
        name: 'Deposit Accounts',
        href: '#',
        description:
          'Choose from our selection of checking, savings, and money market accounts, all with straightforward terms and requirements.',
        icon: ChartPieIcon,
      },
      {
        name: 'Online Services',
        href: '#',
        description:
          'Enjoy the convenience of online and mobile banking, with features like bill pay and eStatements.',
        icon: SquaresPlusIcon,
      },
      {
        name: 'Account Services',
        href: '#',
        description:
          'Stay on top of your finances with check reordering, debit card monitoring, and other valuable services.',
        icon: CursorArrowRaysIcon,
      },
    ],
  },
  {
    name: 'Lending Services',
    items: [
      {
        name: 'Personal Lending',
        href: '#',
        description:
          'Apply for a mortgage loan or a personal credit card tailored to your individual financial needs.',
        icon: ArrowPathIcon,
      },
      {
        name: 'Business Lending',
        href: '#',
        description:
          'Support your business growth with small business loans and business credit card options.',
        icon: FingerPrintIcon,
      },
    ],
  },
  {
    name: 'Credit Card Services',
    items: [
      {
        name: 'Commercial Purchasing Card',
        href: '#',
        description:
          'Optimize your purchasing with our commercial purchasing card solutions.',
        icon: DocumentChartBarIcon,
      },
      {
        name: 'Business Credit Card',
        href: '#',
        description:
          'Leverage credit card solutions designed specifically for business expenses.',
        icon: ChartPieIcon,
      },
      {
        name: 'Personal Credit Card',
        href: '#',
        description:
          'Select a personal credit card that suits your lifestyle and spending habits.',
        icon: SquaresPlusIcon,
      },
      {
        name: 'Merchant Services',
        href: '#',
        description:
          'Enhance your payment processing with our merchant services, designed for seamless transactions.',
        icon: CursorArrowRaysIcon,
      },
      {
        name: 'Credit Card Privacy Notice',
        href: '#',
        description:
          'Review our commitment to protecting your credit card information.',
        icon: FingerPrintIcon,
      },
    ],
  },
  {
    name: 'Correspondent Banking',
    items: [
      {
        name: 'Correspondent Services',
        href: '#',
        description:
          'Access correspondent services, including settlement solutions and Servis1st Access.',
        icon: ArrowPathIcon,
      },
      {
        name: 'Helpful Info',
        href: '#',
        description:
          'Learn more about us through our history, locations, testimonials, and ways to connect.',
        icon: DocumentChartBarIcon,
      },
    ],
  },
  {
    name: 'About Us',
    items: [
      {
        name: 'About Us',
        href: '#',
        description:
          'Get to know ServisFirst Bank, our values, and our mission to serve you better.',
        icon: ChartPieIcon,
      },
      {
        name: 'Our History',
        href: '#',
        description:
          'Discover our history and how we have grown to serve our community.',
        icon: SquaresPlusIcon,
      },
      {
        name: 'News',
        href: '#',
        description:
          'Stay informed with the latest news from ServisFirst Bank.',
        icon: CursorArrowRaysIcon,
      },
      {
        name: 'Locations',
        href: '#',
        description:
          'Find a ServisFirst Bank location near you for all your banking needs.',
        icon: ArrowPathIcon,
      },
      {
        name: 'Contact Us',
        href: '#',
        description:
          'Reach out to our team for assistance or with any questions.',
        icon: FingerPrintIcon,
      },
    ],
  },
  // ... add other categories here
]

export default function NewNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dateTime, setDateTime] = useState(getCurrentDateTime())

  useEffect(() => {
    const intervalId = setInterval(
      () => setDateTime(getCurrentDateTime()),
      60000,
    )
    return () => clearInterval(intervalId)
  }, [])

  return (
    <>
      <div className="relative z-50 bg-primary-500 py-6 shadow">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <img
              src="/SFB/logo-whitebox.svg"
              alt="ServisFirst Bank Logo"
              className="ml-4 h-8 w-auto"
            />
          </div>
          <div className="hidden items-center space-x-6 text-sm text-white lg:flex">
            <span>{dateTime}</span>
            <span>NYSE: SFBS</span>
            <span>866.317.0810</span>
            <a href="#" className="hover:text-primary-50">
              Locations
            </a>
            <a href="#" className="hover:text-primary-50">
              Contact
            </a>
            <a href="#" className="hover:text-primary-50">
              Investor Relations
            </a>
            <a
              href="#"
              className="flex items-center rounded bg-white px-3 py-1 text-black font-black hover:bg-accent-50"
            >
              <span className="mr-1">🔒</span> Login
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-40 bg-gray-100 shadow-sm">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="hidden justify-center py-2 lg:flex lg:space-x-8">
            {menuItems.map((menu) => (
              <Popover key={menu.name} className="relative">
                {({ open }) => (
                  <>
                    <PopoverButton className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-primary-600">
                      {menu.name}
                      <ChevronDownIcon className="h-5 w-5" />
                    </PopoverButton>
                    <PopoverPanel
                      as={motion.div}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: open ? 1 : 0, y: open ? 0 : -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute z-20 mt-2 w-80 rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5"
                    >
                      <div className="p-4">
                        {menu.items.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                          >
                            <div className="flex items-start gap-3">
                              {/* Apply fixed width and height to icons */}
                              <div>
                                <p>{item.name}</p>
                                <p className="text-xs text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </PopoverPanel>
                  </>
                )}
              </Popover>
            ))}
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <Disclosure as="div" className="bg-white shadow-md lg:hidden">
          <div className="space-y-2 px-4 pb-4 pt-2">
            {menuItems.map((menu) => (
              <Disclosure key={menu.name}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100">
                      {menu.name}
                      <ChevronDownIcon
                        className={clsx('h-5 w-5 transform', {
                          'rotate-180': open,
                        })}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="space-y-1">
                      {menu.items.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        >
                          <div className="flex items-center gap-3">
                            <item.icon className="h-5 w-5 text-gray-600" />
                            <span>{item.name}</span>
                          </div>
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

      <div className="flex items-center justify-end px-4 py-2 lg:hidden">
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
    </>
  )
}
