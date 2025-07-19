export default function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for individual users getting started with bookmark sharing.",
      features: [
        "Up to 5 collections",
        "Basic sharing features",
        "Cross-device sync",
        "Community support",
        "Standard security"
      ],
      popular: false,
      cta: "Get Started Free",
      href: "https://chromewebstore.google.com/detail/marquer-bookmark-sharer/nnjafiphfgecelkgfiedpbemffhcbmjn"
    },
    {
      name: "Pro",
      price: "$9",
      period: "per month",
      description: "For power users and small teams who need advanced features.",
      features: [
        "Unlimited collections",
        "Advanced sharing options",
        "Team collaboration",
        "Priority support",
        "Enhanced security",
        "Analytics & insights",
        "Custom branding"
      ],
      popular: true,
      cta: "Start Pro Trial",
      href: "https://chromewebstore.google.com/detail/marquer-bookmark-sharer/nnjafiphfgecelkgfiedpbemffhcbmjn"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "per month",
      description: "For large organizations with advanced security and compliance needs.",
      features: [
        "Everything in Pro",
        "SSO integration",
        "Advanced analytics",
        "Dedicated support",
        "Custom integrations",
        "Compliance features",
        "SLA guarantees"
      ],
      popular: false,
      cta: "Contact Sales",
      href: "mailto:sales@marquer.com"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your needs. Start free and upgrade when you&apos;re ready.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                plan.popular ? 'ring-2 ring-[#3769FF] scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#3769FF] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-gray-600 ml-1">
                      /{plan.period}
                    </span>
                  )}
                </div>
                <p className="text-gray-600">
                  {plan.description}
                </p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href={plan.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-[#3769FF] text-white hover:bg-[#2d5ae8]'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              All plans include:
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>30-day money back</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 