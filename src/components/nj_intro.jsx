export default function Example() {
    return (
      <div className="overflow-hidden bg-light-50 py-16 md:py-32 z-auto">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2 className="text-2xl font-serif font-semibold tracking-tight text-primary-900 md:text-4xl">Our Name is <b className="font-black text-primary-500">Our Mission</b>.</h2>
              <p className="mt-6 text-xl leading-8 text-accent-700">
                At ServisFirst Bank, we believe that banking is about relationships. We are dedicated to helping you achieve financial success through reliable, innovative, and relationship-driven banking solutions.
              </p>
              <div className="mt-10 flex -mb-24 md:-mb-0">
                <a
                  href="/contact"
                  className="rounded-md bg-primary-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                >
                  Let's Get Started <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents -mb-96 md:-mb-0">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <img
                  alt="Team member at ServisFirst Bank"
                  src="/SFB/marketing/pexels-fauxels-3184416.webp"
                  className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-accent-100 object-cover"
                />
              </div>
              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                  <img
                    alt="Team meeting at ServisFirst Bank"
                    src="/SFB/marketing/pexels-wildlittlethingsphoto-933964.webp"
                    className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-accent-100 object-cover"
                  />
                </div>
                <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                  <img
                    alt="ServisFirst Bank office"
                    src="/SFB/marketing/pexels-shvetsa-3727464.webp"
                    className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-accent-100 object-cover"
                  />
                </div>
                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                  <img
                    alt="ServisFirst Bank team members"
                    src="/SFB/marketing/pexels-nappy-936043.webp"
                    className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-accent-100 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }