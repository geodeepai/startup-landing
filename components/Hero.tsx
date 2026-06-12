/* ─── floating background words ─── */
const bgWords = [
  { text: "Python",            top: "8%",  left: "4%",   size: "text-6xl", anim: "animate-float-a", delay: "0s",    dur: "10s" },
  { text: "React.js",          top: "15%", left: "72%",  size: "text-5xl", anim: "animate-float-b", delay: "1.2s",  dur: "13s" },
  { text: "LLM",               top: "60%", left: "6%",   size: "text-7xl", anim: "animate-float-c", delay: "0.5s",  dur: "8s"  },
  { text: "TypeScript",        top: "72%", left: "70%",  size: "text-5xl", anim: "animate-float-a", delay: "2s",    dur: "11s" },
  { text: "Neural Networks",   top: "42%", left: "80%",  size: "text-3xl", anim: "animate-float-b", delay: "0.8s",  dur: "14s" },
  { text: "SQL",               top: "30%", left: "2%",   size: "text-4xl", anim: "animate-float-c", delay: "1.5s",  dur: "9s"  },
  { text: "Docker",            top: "85%", left: "40%",  size: "text-4xl", anim: "animate-float-a", delay: "3s",    dur: "12s" },
  { text: "Next.js",           top: "20%", left: "38%",  size: "text-3xl", anim: "animate-float-b", delay: "0.3s",  dur: "10s" },
  { text: "AWS",               top: "55%", left: "55%",  size: "text-5xl", anim: "animate-float-c", delay: "2.5s",  dur: "7s"  },
  { text: "GraphQL",           top: "78%", left: "18%",  size: "text-3xl", anim: "animate-float-a", delay: "1s",    dur: "15s" },
  { text: "Transformers",      top: "5%",  left: "52%",  size: "text-3xl", anim: "animate-float-b", delay: "0.7s",  dur: "11s" },
  { text: "RAG",               top: "48%", left: "28%",  size: "text-4xl", anim: "animate-float-c", delay: "1.8s",  dur: "9s"  },
];

/* ─── course cards for two marquee rows ─── */
const row1 = [
  { emoji: "🤖", title: "LLM Engineering",      level: "Advanced",     lessons: 38, color: "from-violet-500 to-purple-700" },
  { emoji: "🐍", title: "Python for AI",         level: "Beginner",     lessons: 52, color: "from-blue-500 to-blue-700"    },
  { emoji: "⚛️",  title: "React.js Mastery",      level: "Intermediate", lessons: 64, color: "from-cyan-500 to-teal-700"   },
  { emoji: "🧠", title: "Deep Learning",          level: "Advanced",     lessons: 44, color: "from-pink-500 to-rose-700"   },
  { emoji: "📊", title: "Data Science",           level: "Intermediate", lessons: 58, color: "from-amber-500 to-orange-600"},
  { emoji: "🔷", title: "TypeScript",             level: "Intermediate", lessons: 36, color: "from-sky-500 to-indigo-700"  },
  { emoji: "☁️",  title: "AWS Cloud",              level: "Advanced",     lessons: 48, color: "from-orange-400 to-red-600"  },
  { emoji: "🔬", title: "Prompt Engineering",     level: "Beginner",     lessons: 22, color: "from-emerald-500 to-green-700"},
];

const row2 = [
  { emoji: "🖼️",  title: "Computer Vision",        level: "Advanced",     lessons: 40, color: "from-fuchsia-500 to-purple-700"},
  { emoji: "📱", title: "React Native",            level: "Intermediate", lessons: 55, color: "from-indigo-500 to-violet-700" },
  { emoji: "🔗", title: "GraphQL & APIs",          level: "Intermediate", lessons: 32, color: "from-teal-500 to-cyan-700"    },
  { emoji: "🐳", title: "Docker & Kubernetes",     level: "Advanced",     lessons: 46, color: "from-blue-600 to-sky-700"     },
  { emoji: "🛠️",  title: "System Design",           level: "Advanced",     lessons: 30, color: "from-slate-500 to-gray-700"  },
  { emoji: "🔤", title: "NLP Fundamentals",        level: "Intermediate", lessons: 42, color: "from-rose-500 to-pink-700"   },
  { emoji: "⚡", title: "Next.js Full-Stack",      level: "Intermediate", lessons: 60, color: "from-yellow-500 to-amber-700" },
  { emoji: "📐", title: "Data Structures & Algos", level: "Beginner",     lessons: 72, color: "from-green-500 to-emerald-700"},
];

const levelColors: Record<string, string> = {
  Beginner:     "bg-emerald-100 text-emerald-700",
  Intermediate: "bg-amber-100   text-amber-700",
  Advanced:     "bg-red-100     text-red-700",
};

function CourseCard({ emoji, title, level, lessons, color }: (typeof row1)[0]) {
  return (
    <div className="flex-shrink-0 w-52 rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer mx-2.5">
      <div className={`bg-gradient-to-br ${color} h-20 flex items-center justify-center text-4xl`}>
        {emoji}
      </div>
      <div className="p-3.5">
        <p className="text-sm font-bold text-gray-900 leading-snug mb-2">{title}</p>
        <div className="flex items-center justify-between">
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${levelColors[level]}`}>{level}</span>
          <span className="text-[10px] text-gray-400 font-medium">{lessons} lessons</span>
        </div>
      </div>
    </div>
  );
}

const codeSnippet = [
  { line: 1, tokens: [{ t: "// AI explains every line in real-time", c: "text-gray-500" }] },
  { line: 2, tokens: [] },
  { line: 3, tokens: [{ t: "function ", c: "text-violet-400" }, { t: "fibonacci", c: "text-yellow-300" }, { t: "(n: ", c: "text-gray-300" }, { t: "number", c: "text-cyan-400" }, { t: "): ", c: "text-gray-300" }, { t: "number", c: "text-cyan-400" }, { t: " {", c: "text-gray-300" }] },
  { line: 4, tokens: [{ t: "  if", c: "text-violet-400" }, { t: " (n <= ", c: "text-gray-300" }, { t: "1", c: "text-orange-400" }, { t: ")", c: "text-gray-300" }, { t: " return", c: "text-violet-400" }, { t: " n;", c: "text-gray-300" }] },
  { line: 5, tokens: [{ t: "  return", c: "text-violet-400" }, { t: " fibonacci(n - ", c: "text-gray-300" }, { t: "1", c: "text-orange-400" }, { t: ") + fibonacci(n - ", c: "text-gray-300" }, { t: "2", c: "text-orange-400" }, { t: ");", c: "text-gray-300" }] },
  { line: 6, tokens: [{ t: "}", c: "text-gray-300" }] },
];

export default function Hero() {
  const row1doubled = [...row1, ...row1];
  const row2doubled = [...row2, ...row2];

  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-0">

      {/* ── Animated gradient background ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,_#f5f3ff_0%,_transparent_70%)]"
      />

      {/* ── Floating background words ── */}
      {bgWords.map((w, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={`absolute select-none font-extrabold tracking-tight text-violet-900 pointer-events-none ${w.size} ${w.anim}`}
          style={{
            top: w.top,
            left: w.left,
            animationDelay: w.delay,
            animationDuration: w.dur,
            opacity: 0,          /* overridden by keyframe */
            filter: "blur(0.5px)",
          }}
        >
          {w.text}
        </span>
      ))}

      {/* ── Main hero copy ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-10 pb-16">
        <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-xs font-semibold text-violet-700 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
          AI-powered learning — used by 50,000+ developers
        </span>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-6">
          Learn software dev{" "}
          <span className="text-violet-600">10x faster</span>{" "}
          with AI
        </h1>

        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          CodeMindAI adapts to your skill level, explains code as you write it,
          and guides you from beginner to job-ready developer.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-600 hover:bg-violet-700 text-white font-semibold text-base px-8 py-3.5 transition-colors shadow-lg shadow-violet-200"
          >
            Start learning for free
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 hover:border-violet-300 hover:bg-violet-50 text-gray-700 font-semibold text-base px-8 py-3.5 transition-colors"
          >
            <svg className="w-5 h-5 text-violet-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch demo
          </a>
        </div>

        <p className="mt-5 text-sm text-gray-400">
          No credit card required &nbsp;·&nbsp; Free plan available &nbsp;·&nbsp; Cancel anytime
        </p>
      </div>

      {/* ── Horizontal course strips ── */}
      <div className="relative z-10 pb-16 space-y-4">

        {/* row 1 — scrolls left */}
        <div className="overflow-hidden marquee-track" aria-label="Course previews">
          <div className="flex animate-marquee-left" style={{ width: "max-content" }}>
            {row1doubled.map((c, i) => (
              <CourseCard key={i} {...c} />
            ))}
          </div>
        </div>

        {/* row 2 — scrolls right */}
        <div className="overflow-hidden marquee-track" aria-label="More course previews">
          <div className="flex animate-marquee-right" style={{ width: "max-content" }}>
            {row2doubled.map((c, i) => (
              <CourseCard key={i} {...c} />
            ))}
          </div>
        </div>
      </div>

      {/* ── AI editor teaser ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
          Inside the CodeMindAI editor
        </p>
        <div className="rounded-2xl border border-gray-200 shadow-2xl shadow-violet-100 overflow-hidden">
          <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-900 border-b border-gray-700">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-400" />
            <span className="ml-3 text-xs text-gray-400 font-mono">fibonacci.ts — CodeMindAI Editor</span>
            <span className="ml-auto flex items-center gap-1.5 text-xs text-violet-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              AI Tutor active
            </span>
          </div>
          <div className="grid grid-cols-5 bg-gray-900">
            <div className="col-span-3 p-5 font-mono text-sm">
              {codeSnippet.map((row) => (
                <div key={row.line} className="flex items-start gap-4 leading-7">
                  <span className="text-gray-600 select-none w-4 text-right flex-shrink-0">{row.line}</span>
                  <span>
                    {row.tokens.map((tok, i) => (
                      <span key={i} className={tok.c}>{tok.t}</span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
            <div className="col-span-2 border-l border-gray-700 p-5 flex flex-col gap-4">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 rounded-full bg-violet-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 14a6 6 0 110-12 6 6 0 010 12zm-1-5h2v2H9v-2zm0-6h2v4H9V5z" />
                  </svg>
                </div>
                <p className="text-xs font-bold text-violet-400 uppercase tracking-wide">AI Explanation</p>
              </div>
              <div className="text-xs text-gray-300 leading-relaxed bg-gray-800 rounded-xl p-3">
                <p className="font-semibold text-violet-300 mb-1">Recursion detected</p>
                <p>This function calls itself with a smaller value. Base case <span className="text-orange-300 font-mono">n &lt;= 1</span> stops infinite recursion.</p>
              </div>
              <div className="text-xs text-gray-300 leading-relaxed bg-gray-800 rounded-xl p-3">
                <p className="font-semibold text-emerald-300 mb-1">Time complexity: O(2ⁿ)</p>
                <p>Want to optimize? Try <span className="text-cyan-300 font-mono">memoization</span> to reduce to O(n).</p>
              </div>
              <button className="mt-auto text-xs font-semibold text-violet-400 border border-violet-800 hover:bg-violet-900/40 rounded-lg px-3 py-2 transition-colors text-left">
                Show me the optimized version →
              </button>
            </div>
          </div>
          <div className="bg-gray-800 border-t border-gray-700 px-5 py-2 flex items-center gap-6 text-xs text-gray-400">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400" /> Tests passing</span>
            <span>Lesson 4 of 12 — Recursion</span>
            <span className="ml-auto text-violet-400">+50 XP earned</span>
          </div>
        </div>
      </div>
    </section>
  );
}
