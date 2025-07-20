export default function PricingSection() {
  const plans = [
    {
      name: "The Only Plan",
      price: "FREE",
      period: "forever & ever",
      description:
        "Because good things should be free. No catch, no strings attached.",
      features: [
        "Export any bookmark folder and subfolders",
        "Import JSON bookmark files",
        "Cross-browser support (Chrome, Edge, Brave, Firefox)",
        "Secure file-based sharing",
        "No cloud storage needed",
        "Instant export and import",
        "Everything else we ship",
      ],
      popular: true,
      cta: "Get It Now (It's Free!)",
      href: "https://chromewebstore.google.com/detail/marquer-bookmark-sharer/nnjafiphfgecelkgfiedpbemffhcbmjn",
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Pricing? What Pricing?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe great tools should be accessible to everyone. That&apos;s
            why Marquer is completely free. Forever.
          </p>
        </div>

        <div className="flex justify-center px-4 sm:px-0">
          <div className="max-w-sm w-full">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl shadow-lg p-8 ring-2 ring-[#3769FF] scale-105"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#3769FF] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-1">/{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors bg-[#3769FF] text-white hover:bg-[#2d5ae8]"
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
