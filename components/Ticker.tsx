const items = [
  "🤖 LLM Engineering",
  "🐍 Python for AI",
  "⚛️  React.js Mastery",
  "🧠 Neural Networks",
  "📊 Data Science",
  "🔷 TypeScript Deep Dive",
  "☁️  AWS Cloud Architect",
  "🖼️  Computer Vision",
  "📱 React Native",
  "🔗 GraphQL & APIs",
  "🐳 Docker & Kubernetes",
  "🛠️  System Design",
  "🔤 Natural Language Processing",
  "⚡ Next.js Full-Stack",
  "📐 Data Structures & Algorithms",
  "🔬 Prompt Engineering",
];

export default function Ticker() {
  const doubled = [...items, ...items];

  return (
    <div className="bg-violet-600 overflow-hidden py-2 border-b border-violet-500">
      <div className="flex whitespace-nowrap animate-ticker">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-1 text-xs font-semibold text-violet-100 mx-5"
          >
            {item}
            <span className="mx-3 text-violet-400 select-none">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
