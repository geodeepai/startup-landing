const companies = [
  "Google", "Meta", "Stripe", "Shopify", "Airbnb", "Netflix",
];

export default function LogoBar() {
  return (
    <section className="py-14 border-y border-gray-100 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
          Our graduates work at top tech companies worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {companies.map((name) => (
            <span
              key={name}
              className="text-lg font-bold text-gray-300 tracking-tight select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
