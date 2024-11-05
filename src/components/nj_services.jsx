import { BriefcaseIcon, UserIcon, BanknotesIcon } from '@heroicons/react/24/outline';

const bankingFeatures = [
  {
    name: 'Personal Banking',
    description:
      'Success starts with individual attention. Enjoy interest-bearing accounts, foreign ATM reimbursements, and free Internet Banking with Bill Pay tailored to fit your personal needs.',
    href: '/personal-banking',
    icon: UserIcon,
  },
  {
    name: 'Private Banking',
    description:
      'Tailored for executives and professionals. Our Private Bankers draw from extensive knowledge to create customized solutions that bridge personal and business needs.',
    href: '/private-banking',
    icon: BriefcaseIcon,
  },
  {
    name: 'Commercial Banking',
    description:
      'We go beyond account numbers. Our Commercial Bankers understand your vision, offering direct support and customized banking services to drive your business forward.',
    href: '/commercial-banking',
    icon: BanknotesIcon,
  },
];

export default function BankingOverview() {
  return (
    <div className="bg-primary-500 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-white text-4xl tracking-tight sm:text-5xl">
            Banking Solutions <b>Tailored for You</b>.
          </h2>
          <p className="mt-6 text-lg text-gray-100">
            Whether personal, private, or commercial, we offer banking solutions designed to meet your unique needs.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {bankingFeatures.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-lg font-semibold text-white">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-800">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base text-gray-100">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-sm font-semibold text-primary-200 hover:text-primary-100">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
