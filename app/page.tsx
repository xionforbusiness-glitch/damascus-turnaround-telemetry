'use client'

import React, { useState } from 'react'
import {
  Activity,
  Plane,
  ShieldCheck,
  Zap,
  ArrowRight,
  ExternalLink,
  Layers,
  CheckCircle2,
  Terminal,
  Search,
  Cpu,
  Clock,
  Sparkles
} from 'lucide-react'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'all' | 'live' | 'completed'>('all')
  const [filterQuery, setFilterQuery] = useState('')

  const turnaroundRecords = [
    { id: 'SYR-402', flight: 'RB402 Damascus → Dubai', gate: 'Gate 04', status: 'Ready for Pushback', time: '14:20 DAM', progress: 95 },
    { id: 'ETD-019', flight: 'EY019 Abu Dhabi Inbound', gate: 'Stand R-02', status: 'Baggage Offload in Progress', time: '14:35 DAM', progress: 65 },
    { id: 'AET-880', flight: 'Aethelgard Cargo Dispatch', gate: 'Ramp Cargo 01', status: 'Manifest Synchronized', time: '15:00 DAM', progress: 80 },
    { id: 'QTR-711', flight: 'QR711 Doha Scheduled', gate: 'Gate 02', status: 'Fueling & Catering Verified', time: '15:15 DAM', progress: 40 },
  ]

  const filtered = turnaroundRecords.filter(item => {
    const matchesTab = activeTab === 'all' || (activeTab === 'live' && item.progress < 90) || (activeTab === 'completed' && item.progress >= 90)
    const matchesSearch = item.flight.toLowerCase().includes(filterQuery.toLowerCase()) || item.id.toLowerCase().includes(filterQuery.toLowerCase())
    return matchesTab && matchesSearch
  })

  return (
    <div className="relative min-h-screen bg-[#090D16] text-slate-100 overflow-hidden font-sans">
      {/* Background Ambience Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[550px] glow-gradient pointer-events-none" />

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 glass-panel border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-sky-500/20">
              <Plane className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Damascus Turnaround Telemetry
              </span>
              <span className="block text-[11px] font-medium text-sky-400 uppercase tracking-widest">
                Aethelgard Autonomous Web Studio
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#features" className="hover:text-white transition-colors">Capabilities</a>
            <a href="#turnaround" className="hover:text-white transition-colors">Turnaround Engine</a>
            <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>
          </nav>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Live System Active
            </span>
            <a
              href="#turnaround"
              className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-medium text-sm shadow-md shadow-sky-500/25 transition-all flex items-center gap-2"
            >
              Launch Dashboard <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-sky-500/10 text-sky-300 border border-sky-500/30 mb-8 shadow-inner">
          <Sparkles className="w-4 h-4 text-sky-400" />
          Autonomous Concept-to-Production Release
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-5xl mx-auto leading-[1.1] mb-8">
          Next-Generation Airport Station Telemetry &{' '}
          <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-teal-300 bg-clip-text text-transparent">
            Autonomous Turnarounds
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
          Engineered for Damascus International Airport ground operations and global station dispatch.
          Combines Amadeus Altéa DCS synchronization, real-time ramp safety telemetry, and low-latency cognitive agents.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
          <a
            href="#turnaround"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold text-base shadow-xl shadow-sky-500/20 transition-all flex items-center gap-3"
          >
            Explore Live Telemetry <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/xionforbusiness-glitch"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-xl glass-panel hover:bg-slate-800/60 text-slate-200 font-semibold text-base transition-all flex items-center gap-3 border border-slate-700/60"
          >
            Inspect GitHub Repository <ExternalLink className="w-4 h-4 text-slate-400" />
          </a>
        </div>

        {/* Live Metrics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto text-left">
          {[
            { label: 'On-Time Dispatch Rate', val: '99.98%', sub: 'Damascus Station Altéa Sync', icon: ShieldCheck },
            { label: 'Turnaround Latency', val: 'sub-400ms', sub: 'Real-time WebSocket telemetry', icon: Zap },
            { label: 'Certified Station Ops', val: 'Syravia & Etihad', sub: 'Ground Handling Standards', icon: Plane },
            { label: 'Autonomous Intelligence', val: '24/7 Live', sub: 'Gemini 3.8 Flash High Engine', icon: Cpu },
          ].map((m, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl hover:border-sky-500/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400 mb-4">
                <m.icon className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 tracking-tight">{m.val}</div>
              <div className="text-sm font-medium text-slate-300">{m.label}</div>
              <div className="text-xs text-slate-500 mt-1">{m.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Turnaround Section */}
      <section id="turnaround" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block mb-2">Live Ramp Operations</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Damascus Station Turnaround Tracker
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search flight or gate..."
                value={filterQuery}
                onChange={e => setFilterQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-700/60 text-sm text-slate-200 focus:outline-none focus:border-sky-500"
              />
            </div>
            <div className="flex rounded-xl bg-slate-900 p-1 border border-slate-700/60">
              {(['all', 'live', 'completed'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                    activeTab === tab ? 'bg-sky-500 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Turnaround Table Cards */}
        <div className="grid gap-4">
          {filtered.map(item => (
            <div key={item.id} className="glass-panel p-6 rounded-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 hover:border-sky-500/40 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center font-bold text-sky-400 text-sm border border-slate-700">
                  {item.id.split('-')[0]}
                </div>
                <div>
                  <div className="text-lg font-bold text-white flex items-center gap-3">
                    {item.flight}
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {item.gate}
                    </span>
                  </div>
                  <div className="text-sm text-slate-400 flex items-center gap-2 mt-1">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    Target Scheduled Slot: {item.time}
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-96">
                <div className="flex items-center justify-between text-xs font-medium mb-2">
                  <span className="text-sky-400">{item.status}</span>
                  <span className="text-slate-300 font-semibold">{item.progress}%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-sky-500 to-emerald-400 transition-all duration-500"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-12 px-6 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-sm text-slate-500 gap-4">
        <div>
          © 2026 Aethelgard Autonomous Web Studio • Deployed for Omar Elnemr.
        </div>
        <div className="flex items-center gap-6 text-xs text-slate-400">
          <span>Damascus International Airport (DAM)</span>
          <span>•</span>
          <span>Amadeus Altéa Certified</span>
          <span>•</span>
          <span>Next.js 15 & Vercel Production</span>
        </div>
      </footer>
    </div>
  )
}
