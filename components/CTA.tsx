export default function CTA() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="rounded-3xl bg-violet-600 px-8 py-16 shadow-2xl shadow-violet-200 relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_bottom_right,_#c4b5fd,_transparent_60%)]"
          />
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-400 bg-violet-500/30 px-4 py-1.5 text-xs font-semibold text-violet-100 mb-6">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
              </svg>
              Your AI tutor is ready
            </span>
            <h2 className="text-4xl font-extrabold text-white tracking-tight mb-4">
              Start your coding journey today
            </h2>
            <p className="text-violet-100 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Join 50,000+ developers learning with AI. Free to start — no credit card, no fluff,
              just real skills that get you hired.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-violet-700 font-semibold text-base px-8 py-3.5 hover:bg-violet-50 transition-colors shadow-lg"
              >
                Begin for free — no card needed
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-violet-400 text-violet-100 font-semibold text-base px-8 py-3.5 hover:bg-violet-500 transition-colors"
              >
                Explore courses
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
