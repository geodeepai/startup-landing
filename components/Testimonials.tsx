const testimonials = [
  {
    quote:
      "I went from zero coding experience to landing a front-end role at a Series B startup in 7 months. The AI tutor is like having a senior dev sitting beside you 24/7.",
    name: "James Okafor",
    role: "Frontend Engineer, Fintech Startup",
    initials: "JO",
    color: "bg-violet-100 text-violet-700",
  },
  {
    quote:
      "I tried three other platforms before CodeMindAI. The difference is the AI actually understands *my* code and explains *my* bugs — not generic documentation.",
    name: "Amara Singh",
    role: "Data Scientist, Healthcare AI",
    initials: "AS",
    color: "bg-blue-100 text-blue-700",
  },
  {
    quote:
      "The adaptive curriculum is magic. It noticed I was struggling with async/await and immediately adjusted my path to reinforce those fundamentals before moving on.",
    name: "Carlos Mendez",
    role: "Backend Developer, E-commerce",
    initials: "CM",
    color: "bg-emerald-100 text-emerald-700",
  },
];

const stats = [
  { value: "50K+", label: "Active learners" },
  { value: "94%", label: "Completion rate" },
  { value: "4.9/5", label: "Average rating" },
  { value: "12K+", label: "Jobs landed" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-violet-600">Learner Stories</span>
          <h2 className="mt-3 text-4xl font-extrabold text-gray-900 tracking-tight">
            Real developers, real results
          </h2>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-6 rounded-2xl bg-violet-50 border border-violet-100">
              <p className="text-3xl font-extrabold text-violet-700 mb-1">{s.value}</p>
              <p className="text-sm text-gray-500 font-medium">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
              </div>
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-xs font-bold flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
