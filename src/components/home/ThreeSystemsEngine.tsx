import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Brain,
  Cpu,
  Activity,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  FileCode2,
  Terminal,
  ShieldCheck,
  Zap,
  Play,
  RotateCw,
  Server,
  Cloud,
  Check,
  Code2
} from 'lucide-react';

export const ThreeSystemsEngine: React.FC<{
  onOpenConsultation: () => void;
  onNavigate: (path: string) => void;
}> = ({ onOpenConsultation, onNavigate }) => {
  const [activeSystem, setActiveSystem] = useState<'aura' | 'cosmos' | 'horizon'>('aura');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulatedLogs, setSimulatedLogs] = useState<string[]>([
    'Initialized secure sandbox environment [VPC-Prod-01]',
    'Synthesizing Next.js 15 App Router & Tailwind design tokens',
    'PostgreSQL 16 relational schema migration completed',
    'Applied CERT-In security hardening & JWT session guard',
    'All 142 automated unit & E2E tests passing [100%]'
  ]);

  // Live wave points for Horizon
  const [waveSeed, setWaveSeed] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setWaveSeed(prev => (prev + 1) % 100);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setSimulatedLogs(['Starting fresh multi-agent swarm compilation...']);
    const steps = [
      'Agent @Architecture: Generating clean domain entities & VPC boundary...',
      'Agent @UI/UX: Compiling responsive design tokens & micro-interactions...',
      'Agent @Code-Gen: Building type-safe API controllers & Prisma ORM client...',
      'Agent @Security: Running SAST/DAST vulnerability scan -> 0 Vulnerabilities.',
      'Agent @DevOps: Zero-downtime container rollout package ready for AWS ECS!'
    ];

    steps.forEach((step, idx) => {
      setTimeout(() => {
        setSimulatedLogs(prev => [...prev, step]);
        if (idx === steps.length - 1) {
          setIsSimulating(false);
        }
      }, (idx + 1) * 600);
    });
  };

  return (
    <section id="three-systems-engine" className="w-full bg-[#070D1E] py-16 sm:py-24 border-y border-slate-800 text-white relative overflow-hidden">
      {/* Dynamic Cyber Ambient Lights */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Title & Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/15 border border-red-500/30 text-xs font-mono font-bold text-red-400">
            <Sparkles className="w-3.5 h-3.5 text-red-400" />
            <span>INTEGRATED ENGINEERING ECOSYSTEM</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Three systems.{' '}
            <span className="bg-gradient-to-r from-red-500 via-rose-400 to-amber-400 bg-clip-text text-transparent">
              One delivery engine.
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Three connected intelligence layers engineered into one delivery backbone. From business requirements to self-healing production code.
          </p>
        </motion.div>

        {/* 3 Interactive Cards Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: Aura */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onClick={() => setActiveSystem('aura')}
            className={`p-6 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden card-hover-lift ${
              activeSystem === 'aura'
                ? 'bg-slate-900/90 border-red-500 shadow-xl shadow-red-500/20 ring-2 ring-red-500/40'
                : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-red-400 bg-red-500/15 px-2.5 py-0.5 rounded-full border border-red-500/30">
                  Engineered to Think
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              </div>
              <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
                Aura
                <Brain className="w-5 h-5 text-red-400" />
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Autonomous technical consultant. Translates complex business problems into fully scoped, architected milestone plans in days.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-red-400">
              <span>Explore Discovery Engine</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>

          {/* Card 2: CosmOS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => setActiveSystem('cosmos')}
            className={`p-6 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden card-hover-lift ${
              activeSystem === 'cosmos'
                ? 'bg-slate-900/90 border-emerald-500 shadow-xl shadow-emerald-500/20 ring-2 ring-emerald-500/40'
                : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/15 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  Built to Deliver
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
                CosmOS
                <Cpu className="w-5 h-5 text-emerald-400" />
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Multi-agent swarm execution. Handles every layer of the build: architecture, UI/UX, microservices, and regression testing in weeks.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-emerald-400">
              <span>Explore Build System</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>

          {/* Card 3: Horizon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={() => setActiveSystem('horizon')}
            className={`p-6 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden card-hover-lift ${
              activeSystem === 'horizon'
                ? 'bg-slate-900/90 border-indigo-500 shadow-xl shadow-indigo-500/20 ring-2 ring-indigo-500/40'
                : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/15 px-2.5 py-0.5 rounded-full border border-indigo-500/30">
                  Made to Evolve
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
              </div>
              <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
                Horizon
                <Activity className="w-5 h-5 text-indigo-400" />
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Continuous APM & Self-Healing. Real-time telemetry, automated database vacuuming, and SLA-governed health 24/7.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-indigo-400">
              <span>Explore 24/7 APM</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>
        </div>

        {/* 3D Visual + Live Interactive Console */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl p-6 sm:p-8 overflow-hidden"
        >
          {/* SYSTEM 1: AURA */}
          {activeSystem === 'aura' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-red-400 bg-red-500/15 px-3 py-1 rounded-full border border-red-500/30">
                  <Brain className="w-4 h-4" />
                  <span>AURA SCOPING & ARCHITECTURE</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white leading-tight">
                  The brain behind every EVD build.
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Aura ingests your business constraints, models data relations, configures security boundaries, and outputs a type-safe blueprint with sprint milestones in days.
                </p>

                {/* 3D Visual Asset for Aura */}
                <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl relative max-h-48">
                  <img
                    src="/src/assets/images/evd_three_systems_1787745842984.jpg"
                    alt="EVD Autonomous Three Systems Neural Core"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-3 text-[10px] font-mono text-red-400">
                    Neural SOW Generator v4.9
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenConsultation}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold text-xs shadow-lg shadow-red-500/25 flex items-center gap-2 cursor-pointer transition-all hover:scale-102"
                  >
                    <span>Request Aura Architecture Blueprint</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Interactive Scope Matrix Visualizer */}
              <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-900/90 text-white shadow-xl space-y-5 border border-slate-800">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="font-mono text-slate-300">Live Scoping: Enterprise Migration & Next.js Engine</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold">
                    SOW READY
                  </span>
                </div>

                {/* 4 Scope Items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-200">Problem Definition</span>
                      <span className="text-emerald-400 font-mono font-bold text-[11px]">100% Complete</span>
                    </div>
                    <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-400 h-full w-full" />
                    </div>
                    <p className="text-[10px] text-slate-400">Audited 12 legacy database tables & 4 external APIs</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-200">Solution Architecture</span>
                      <span className="text-emerald-400 font-mono font-bold text-[11px]">95% Complete</span>
                    </div>
                    <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-400 h-full w-[95%]" />
                    </div>
                    <p className="text-[10px] text-slate-400">Configured VPC isolated boundary & Redis caching</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-200">Integration Plan</span>
                      <span className="text-blue-400 font-mono font-bold text-[11px]">75% Complete</span>
                    </div>
                    <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-blue-400 h-full w-[75%]" />
                    </div>
                    <p className="text-[10px] text-slate-400">Payment gateway webhooks & ERP syncing hooks</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-200">SOW & Milestone Roadmap</span>
                      <span className="text-cyan-300 font-mono font-bold text-[11px]">Auto-Generated</span>
                    </div>
                    <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-cyan-400 h-full w-full" />
                    </div>
                    <p className="text-[10px] text-slate-400">Sprint 1–4 deliverables, SLA, and mutual NDA</p>
                  </div>
                </div>

                {/* Bottom Quick Metric Pills */}
                <div className="pt-2 flex items-center justify-between flex-wrap gap-2 text-[11px] text-slate-400 border-t border-slate-800">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Mutual NDA Protected</span>
                  </span>
                  <span className="font-mono text-cyan-300">Generated in 1.4s</span>
                </div>
              </div>
            </div>
          )}

          {/* SYSTEM 2: COSMOS */}
          {activeSystem === 'cosmos' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 bg-emerald-500/15 px-3 py-1 rounded-full border border-emerald-500/30">
                  <Cpu className="w-4 h-4" />
                  <span>COSMOS MULTI-AGENT SWARM HUB</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white leading-tight">
                  The engine behind every EVD build.
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  CosmOS orchestrates specialized AI agents alongside senior engineering leads, transforming verified architecture into production-grade systems in weeks.
                </p>

                {/* Delivery flow stages */}
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-[10px]">1</span>
                    <span><strong>Scope of Work:</strong> Automated parsing into modular sprint tickets</span>
                  </div>
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-[10px]">2</span>
                    <span><strong>Squad Assignment:</strong> Full-stack, mobile, & DevOps engineers</span>
                  </div>
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-[10px]">3</span>
                    <span><strong>Build & Integrate:</strong> APIs, ERP, CRM, Cloud Infrastructure</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleRunSimulation}
                    disabled={isSimulating}
                    className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-lg shadow-emerald-500/25 flex items-center gap-2 cursor-pointer transition-all hover:scale-102"
                  >
                    <Play className="w-4 h-4" />
                    <span>{isSimulating ? 'Simulating Swarm Build...' : 'Simulate Live Agent Build'}</span>
                  </button>
                </div>
              </div>

              {/* Live Agent Pods Visualizer */}
              <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-900 text-white shadow-xl space-y-4 border border-slate-800">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-slate-200">Active Squad Pods: 8 Specialized Agents</span>
                  </div>
                  <span className="font-mono text-[10px] text-emerald-400">10x Faster Sprint Cycle</span>
                </div>

                {/* Agent Pods Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                    <span className="text-[10px] uppercase font-mono font-bold text-red-400 block">Development</span>
                    <div className="space-y-1 text-[11px] text-slate-300">
                      <div className="flex items-center justify-between">
                        <span>@Architecture</span>
                        <span className="text-emerald-400 text-[10px]">● Ready</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>@UI/UX Design</span>
                        <span className="text-emerald-400 text-[10px]">● Active</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>@Code-Gen</span>
                        <span className="text-emerald-400 text-[10px]">● Sync</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                    <span className="text-[10px] uppercase font-mono font-bold text-indigo-400 block">Deployment</span>
                    <div className="space-y-1 text-[11px] text-slate-300">
                      <div className="flex items-center justify-between">
                        <span>@DevOps</span>
                        <span className="text-emerald-400 text-[10px]">● Synced</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>@Monitoring</span>
                        <span className="text-emerald-400 text-[10px]">● 99.9%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>@Docs</span>
                        <span className="text-emerald-400 text-[10px]">● Auto</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                    <span className="text-[10px] uppercase font-mono font-bold text-emerald-400 block">Testing & QA</span>
                    <div className="space-y-1 text-[11px] text-slate-300">
                      <div className="flex items-center justify-between">
                        <span>@Test-Gen</span>
                        <span className="text-emerald-400 text-[10px]">● Pass</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>@Security</span>
                        <span className="text-emerald-400 text-[10px]">● CERT-In</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>@Performance</span>
                        <span className="text-emerald-400 text-[10px]">● 42ms</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Terminal Logs Window */}
                <div className="p-3.5 rounded-xl bg-black/90 border border-slate-800 font-mono text-[11px] text-slate-300 space-y-1.5 max-h-36 overflow-y-auto">
                  <div className="text-slate-500 text-[10px] flex items-center justify-between border-b border-slate-800/80 pb-1">
                    <span>TERMINAL LOG STREAM</span>
                    <span className="text-emerald-400">Node: aws-ap-south-1</span>
                  </div>
                  {simulatedLogs.map((log, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-400 select-none">❯</span>
                      <span className="text-slate-200">{log}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* SYSTEM 3: HORIZON */}
          {activeSystem === 'horizon' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-indigo-400 bg-indigo-500/15 px-3 py-1 rounded-full border border-indigo-500/30">
                  <Activity className="w-4 h-4" />
                  <span>HORIZON 24/7 APM OBSERVATORY</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white leading-tight">
                  The pulse behind every EVD build.
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Horizon provides real-time observability, built to monitor and continuously elevate production systems. It tracks performance, detects anomalies, and automatically tunes code for peak efficiency.
                </p>

                {/* Live feature bullets */}
                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Live Performance:</strong> Accuracy telemetry tracked in real time across edge CDN nodes.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Anomaly Detection:</strong> Catches latency spikes before they impact end users.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Continuous AMC Support:</strong> SLA-backed proactive patches and database vacuuming.
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('/engagement-models')}
                    className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-lg shadow-indigo-500/25 flex items-center gap-2 cursor-pointer transition-all hover:scale-102"
                  >
                    <span>View AMC & SLA Packages</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Live Waveform & Telemetry Dashboard */}
              <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-900 text-white shadow-xl space-y-4 border border-slate-800">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-ping" />
                    <span className="font-mono text-slate-200">Telemetry Stream: All 24 Nodes Operational</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono text-[10px] font-bold">
                    24/7 SLA 99.99%
                  </span>
                </div>

                {/* Animated Waveform Graph */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>API Response Latency (p99)</span>
                    <span className="text-emerald-400 font-mono font-bold">38ms Avg</span>
                  </div>
                  <div className="h-20 w-full flex items-end gap-1 pt-2">
                    {[45, 52, 48, 60, 55, 40, 38, 42, 50, 47, 44, 52, 60, 48, 42, 46, 50, 42, 39, 45, 48, 52, 40, 38].map((val, i) => {
                      const dynamicHeight = Math.min(100, Math.max(20, val + Math.sin((i + waveSeed) * 0.8) * 15));
                      return (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-indigo-600 to-cyan-400 rounded-t-sm transition-all duration-500"
                          style={{ height: `${dynamicHeight}%` }}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* Metric Indicators */}
                <div className="grid grid-cols-3 gap-3 text-center text-xs">
                  <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700">
                    <div className="text-base font-bold font-mono text-emerald-400">99.99%</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Uptime Index</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700">
                    <div className="text-base font-bold font-mono text-cyan-400">0.001%</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Error Rate</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700">
                    <div className="text-base font-bold font-mono text-indigo-400">&lt; 40ms</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Edge Latency</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
