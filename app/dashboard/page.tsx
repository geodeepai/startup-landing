"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  { label: "Courses in Progress", value: "4", icon: "📚", color: "bg-indigo-50 text-indigo-600" },
  { label: "Lessons Completed",   value: "38", icon: "✅", color: "bg-emerald-50 text-emerald-600" },
  { label: "Day Streak",          value: "12", icon: "🔥", color: "bg-orange-50 text-orange-600" },
  { label: "AI Sessions",         value: "27", icon: "🤖", color: "bg-violet-50 text-violet-600" },
];

const courses = [
  { title: "React & Next.js Mastery",       progress: 72, lessons: 48, tag: "Frontend",  color: "bg-indigo-500" },
  { title: "Node.js & REST APIs",           progress: 45, lessons: 36, tag: "Backend",   color: "bg-emerald-500" },
  { title: "TypeScript Deep Dive",          progress: 31, lessons: 24, tag: "Language",  color: "bg-violet-500" },
  { title: "System Design for Engineers",   progress: 18, lessons: 30, tag: "Advanced",  color: "bg-orange-500" },
];

const activity = [
  { action: "Completed lesson",  detail: "React Hooks — useEffect",      time: "2h ago",   icon: "✅" },
  { action: "AI Tutor session",  detail: "Debugging async/await patterns", time: "4h ago",  icon: "🤖" },
  { action: "Quiz passed",       detail: "TypeScript Generics — 90%",     time: "Yesterday", icon: "🏆" },
  { action: "Started lesson",    detail: "Node.js Streams",               time: "Yesterday", icon: "▶️" },
];

const navItems = [
  { label: "Dashboard",  icon: "⊞", active: true  },
  { label: "Courses",    icon: "📚", active: false },
  { label: "AI Tutor",   icon: "🤖", active: false },
  { label: "Projects",   icon: "🗂️", active: false },
  { label: "Community",  icon: "👥", active: false },
  { label: "Settings",   icon: "⚙️", active: false },
];

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-60 bg-white border-r border-gray-100 flex flex-col transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
        {/* Logo */}
        <div className="h-16 flex items-center px-5 border-b border-gray-100 flex-shrink-0">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="#4F46E5" />
              <path d="M9 22l4-12 4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.5 18.5h5" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <circle cx="22" cy="11" r="3.5" fill="#C4B5FD" />
              <path d="M22 9.5v1.5l1 1" stroke="#4F46E5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-gray-900">CodeMind</span>
            <span className="text-indigo-500 font-extrabold">AI</span>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                item.active
                  ? "bg-indigo-50 text-indigo-700"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <span className="text-base">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* User */}
        <div className="p-3 border-t border-gray-100">
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">G</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">geodeepai</p>
              <p className="text-xs text-gray-400 truncate">Free Plan</p>
            </div>
            <Link href="/" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">↩</Link>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-30 bg-black/20 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main content */}
      <div className="flex-1 lg:ml-60 flex flex-col min-w-0">

        {/* Top bar */}
        <header className="sticky top-0 z-20 h-16 bg-white border-b border-gray-100 flex items-center px-6 gap-4">
          <button
            className="lg:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-50"
            onClick={() => setSidebarOpen(true)}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="flex-1">
            <h1 className="text-base font-semibold text-gray-900">Dashboard</h1>
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-sm shadow-indigo-200/60 transition-colors"
          >
            <span>🤖</span> Ask AI Tutor
          </motion.button>
        </header>

        {/* Page body */}
        <main className="flex-1 p-6 space-y-6 overflow-y-auto">

          {/* Welcome */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-xl font-bold text-gray-900">Good morning, geodeepai 👋</h2>
            <p className="text-sm text-gray-500 mt-0.5">You're on a 12-day streak. Keep it going!</p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {stats.map((s) => (
              <div key={s.label} className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg mb-3 ${s.color}`}>
                  {s.icon}
                </div>
                <p className="text-2xl font-bold text-gray-900">{s.value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Courses + Activity */}
          <div className="grid lg:grid-cols-3 gap-6">

            {/* Active courses */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-5"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Active Courses</h3>
                <button className="text-xs text-indigo-600 hover:text-indigo-700 font-medium transition-colors">View all</button>
              </div>
              <div className="space-y-4">
                {courses.map((c) => (
                  <div key={c.title} className="group cursor-pointer">
                    <div className="flex items-start justify-between mb-1.5">
                      <div>
                        <p className="text-sm font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">{c.title}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className={`inline-block text-[10px] font-semibold px-1.5 py-0.5 rounded-md text-white ${c.color}`}>{c.tag}</span>
                          <span className="text-xs text-gray-400">{c.lessons} lessons</span>
                        </div>
                      </div>
                      <span className="text-sm font-bold text-gray-900 ml-4">{c.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${c.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${c.progress}%` }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent activity */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5"
            >
              <h3 className="font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {activity.map((a, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center text-sm flex-shrink-0">{a.icon}</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-gray-900">{a.action}</p>
                      <p className="text-xs text-gray-500 truncate">{a.detail}</p>
                      <p className="text-[10px] text-gray-400 mt-0.5">{a.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Upgrade banner */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl p-5 flex items-center justify-between gap-4"
          >
            <div>
              <p className="font-semibold text-white">Upgrade to Pro</p>
              <p className="text-sm text-indigo-200 mt-0.5">Unlock unlimited AI sessions, all courses, and certificates.</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              className="flex-shrink-0 bg-white text-indigo-700 font-semibold text-sm px-5 py-2.5 rounded-xl shadow-sm hover:bg-indigo-50 transition-colors"
            >
              Upgrade →
            </motion.button>
          </motion.div>

        </main>
      </div>
    </div>
  );
}
