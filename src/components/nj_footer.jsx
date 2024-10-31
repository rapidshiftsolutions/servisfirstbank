const navigation = {
  getInTouch: [
    { name: 'Contact Us', href: '#' },
    { name: 'Locations', href: '#' },
  ],
  help: [
    { name: 'Check Reorder', href: '#' },
    { name: 'Lost or Stolen Card', href: '#' },
  ],
  importantInfo: [
    { name: 'Disclosures', href: '#' },
    { name: 'Terms of Use', href: '#' },
    { name: 'Privacy Notice', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-accent-900 text-light-50">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          <div className="flex items-center justify-center xl:col-span-1">
            <img
              alt="ServisFirst Bank Logo"
              src="/SFB/logo.svg" // Update with the actual logo path
              className="h-16"
            />
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 xl:col-span-3 xl:mt-0">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
              <div>
                <h3 className="text-lg font-semibold text-light-50">Get In Touch</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.getInTouch.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm text-gray-300 hover:text-light-50">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-light-50">How Can We Help?</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.help.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm text-gray-300 hover:text-light-50">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-light-50">Important Info</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.importantInfo.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm text-gray-300 hover:text-light-50">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 flex justify-between items-center border-t border-gray-700 pt-8">
          <div className="flex items-center space-x-4">
            <img src="/SFB/FDIC-Logo.svg" alt="FDIC" className="h-6" /> {/* Update paths */}
            <img src="/SFB/Equalhousinglender.svg" alt="Equal Housing Lender" className="h-6" />
            <span className="text-sm text-gray-400">© 2024 ServisFirst Bank.</span>
          </div>
          <div>
            <a href="#" className="text-sm font-semibold text-light-50 hover:text-primary-500">
              My Money
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}