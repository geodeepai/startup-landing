const steps = [
  {
    number: "01",
    title: "Take the skill assessment",
    description:
      "Answer a 5-minute adaptive quiz and our AI builds a personalized learning roadmap tailored to your goals — web dev, data science, ML, or backend engineering.",
  },
  {
    number: "02",
    title: "Learn by building",
    description:
      "Work through interactive lessons in our browser IDE. Your AI tutor explains concepts in real time, reviews your code instantly, and nudges you when you're stuck.",
  },
  {
    number: "03",
    title: "Ship real projects",
    description:
      "Complete capstone projects that go straight into your portfolio. Get certified, apply to jobs, or unlock advanced tracks — all inside one platform.",
  },
];

const tracks = [
  { label: "Full-Stack Web", color: "bg-violet-100 text-violet-700" },
  { label: "Data Science", color: "bg-blue-100 text-blue-700" },
  { label: "Machine Learning", color: "bg-emerald-100 text-emerald-700" },
  { label: "DevOps & Cloud", color: "bg-orange-100 text-orange-700" },
  { label: "Mobile (React Native)", color: "bg-pink-100 text-pink-700" },
  { label: "System Design", color: "bg-amber-100 text-amber-700" },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-violet-600">How It Works</span>
          <h2 className="mt-3 text-4xl font-extrabold text-gray-900 tracking-tight">
            From zero to job-ready in 3 steps
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            Most learners complete their first project within their first week.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="hidden md:block absolute top-10 left-[calc(16.67%)] right-[calc(16.67%)] h-px bg-gradient-to-r from-transparent via-violet-200 to-transparent" />
          {steps.map((step) => (
            <div key={step.number} className="relative flex flex-col items-center text-center p-8">
              <div className="relative z-10 mb-6 flex items-center justify-center w-16 h-16 rounded-full border-2 border-violet-200 bg-white text-violet-600 text-xl font-black shadow-sm">
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div id="courses" className="text-center">
          <p className="text-sm font-semibold text-gray-500 mb-5">Available learning tracks</p>
          <div className="flex flex-wrap justify-center gap-3">
            {tracks.map((t) => (
              <span
                key={t.label}
                className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold ${t.color}`}
              >
                {t.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
