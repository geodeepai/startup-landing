const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Explore the platform and complete your first learning track.",
    features: [
      "1 learning track",
      "AI tutor (10 questions/day)",
      "Browser-based IDE",
      "Community access",
      "2 guided projects",
    ],
    cta: "Start for free",
    highlighted: false,
  },
  {
    name: "Pro Learner",
    price: "$29",
    period: "/month",
    description: "Everything you need to go from beginner to job-ready developer.",
    features: [
      "All 6 learning tracks",
      "Unlimited AI tutor access",
      "Unlimited AI code reviews",
      "10 capstone projects",
      "Completion certificates",
      "Career prep & mock interviews",
      "Priority support",
    ],
    cta: "Start 7-day free trial",
    highlighted: true,
  },
  {
    name: "Teams",
    price: "Custom",
    period: "",
    description: "Upskill your engineering team with managed learning paths.",
    features: [
      "Everything in Pro",
      "Custom learning tracks",
      "Team analytics dashboard",
      "Admin controls & SSO",
      "Dedicated success manager",
      "Volume licensing",
      "API access",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-violet-600">Pricing</span>
          <h2 className="mt-3 text-4xl font-extrabold text-gray-900 tracking-tight">
            Invest in your skills
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            Start free and upgrade when you are ready to go all-in. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col gap-6 ${
                plan.highlighted
                  ? "bg-violet-600 text-white shadow-2xl shadow-violet-200 scale-105"
                  : "bg-white border border-gray-200"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1.5 shadow">
                  Most Popular
                </span>
              )}
              <div>
                <p className={`text-sm font-semibold uppercase tracking-wider mb-1 ${plan.highlighted ? "text-violet-200" : "text-gray-400"}`}>
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  {plan.period && (
                    <span className={`text-sm font-medium ${plan.highlighted ? "text-violet-200" : "text-gray-400"}`}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className={`mt-2 text-sm leading-relaxed ${plan.highlighted ? "text-violet-100" : "text-gray-500"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <svg
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlighted ? "text-violet-200" : "text-violet-500"}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.highlighted ? "text-violet-50" : "text-gray-600"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-2 block text-center rounded-full font-semibold py-3 text-sm transition-colors ${
                  plan.highlighted
                    ? "bg-white text-violet-700 hover:bg-violet-50"
                    : "bg-violet-600 text-white hover:bg-violet-700"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
