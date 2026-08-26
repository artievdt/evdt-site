import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Cpu,
  Layers,
  CheckCircle2,
  Terminal,
  Activity,
  Code2,
  Database,
  Lock,
  Boxes
} from 'lucide-react';

interface HeroDeliveryEngineProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
  onOpenEstimator: () => void;
}

export const HeroDeliveryEngine: React.FC<HeroDeliveryEngineProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenEstimator
}) => {
  const [activeLayer, setActiveLayer] = useState<'arch' | 'frontend' | 'backend' | 'security'>('arch');

  const stats = [
    {
      id: 'projects',
      value: '3,250+',
      label: 'Projects Delivered',
      sublabel: 'Enterprise web, mobile, & ERP',
      accent: 'border-red-500/30 text-red-600'
    },
    {
      id: 'countries',
      value: '23+',
      label: 'Regions & States Served',
      sublabel: 'Global clients & India public sector',
      accent: 'border-slate-700/30 text-slate-900'
    },
    {
      id: 'engineers',
      value: '5,000+',
      label: 'Vetted Engineering Sprints',
      sublabel: 'Dedicated squads & turnkey builds',
      accent: 'border-rose-500/30 text-rose-600'
    },
    {
      id: 'ontime',
      value: '>99.4%',
      label: 'On-Time SLA Delivery',
      sublabel: 'Milestone-governed execution',
      accent: 'border-emerald-500/30 text-emerald-600'
    }
  ];

  const layerData = {
    arch: {
      title: 'Microservices & Event-Driven Topology',
      desc: 'Decoupled domain modules, zero single-point-of-failure clusters, and asynchronous event streaming.',
      tech: ['Kubernetes EKS', 'Apache Kafka', 'Redis 7 Cluster', 'Terraform VPC'],
      metric: 'Sub-30ms P99 Latency'
    },
    frontend: {
      title: 'Next.js 15 & Type-Safe Client Engineering',
      desc: 'Edge-rendered interfaces with zero hydration lag, accessible design tokens, and fluid 60fps micro-animations.',
      tech: ['React 19', 'Next.js 15 App Router', 'Tailwind CSS', 'Motion'],
      metric: '100/100 Lighthouse Perf'
    },
    backend: {
      title: 'High-Concurrency Database & Distributed APIs',
      desc: 'Partitioned PostgreSQL / CockroachDB nodes with connection pooling and automated query plan indexing.',
      tech: ['Go / Node.js Core', 'PostgreSQL 16', 'pgvector', 'GraphQL Federation'],
      metric: '50k+ Req/Sec Concurrency'
    },
    security: {
      title: 'CERT-In Empanelled Defense & Zero-Leak Vault',
      desc: 'End-to-end TLS 1.3 encryption, automated SAST/DAST CI gates, and role-based privilege isolation.',
      tech: ['OAuth 2.1 / mTLS', 'AES-256 GCM', 'WAF Anti-DDoS', 'SOC2 / HIPAA'],
      metric: '0 Zero-Day Vulnerabilities'
    }
  };

  return (
    <section id="hero-delivery-engine" className="relative pt-6 sm:pt-10 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] sm:w-[950px] h-[500px] bg-gradient-to-tr from-red-200/40 via-rose-100/25 to-slate-200/30 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute -top-10 right-10 w-80 h-80 bg-red-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Hero Header & Headline */}
      <div className="text-center max-w-4xl mx-auto space-y-6">
        {/* Top Innovation Pill */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-red-200 shadow-xs text-xs font-semibold text-red-700 backdrop-blur-md hover:border-red-400 transition-colors"
        >
          <span className="flex h-2 w-2 rounded-full bg-red-600 animate-pulse" />
          <span className="font-mono uppercase tracking-wider text-[11px] text-slate-500">Autonomous Architecture</span>
          <span className="text-slate-300">|</span>
          <span>10+ Years of Enterprise Software & AI</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.12]"
        >
          The software & AI delivery engine for{' '}
          <span className="bg-gradient-to-r from-red-600 via-rose-600 to-slate-900 bg-clip-text text-transparent">
            enterprises
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
        >
          We partner with ambitious enterprises on their most critical software challenges. Our delivery ecosystem scopes in days, builds in weeks, and ships production-grade code with 100% intellectual property ownership.
        </motion.p>

        {/* Flagship Animated Pill CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onOpenConsultation}
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-700 hover:to-rose-800 text-white font-bold text-sm shadow-xl shadow-red-500/25 flex items-center gap-3 cursor-pointer transition-all hover:scale-103 hover:shadow-2xl active:scale-98"
          >
            <span>See what we can build for you</span>
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </button>

          <button
            onClick={onOpenEstimator}
            className="px-6 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-sm shadow-xs hover:border-red-400 flex items-center gap-2 cursor-pointer transition-all hover:scale-102"
          >
            <Zap className="w-4 h-4 text-red-600" />
            <span>Interactive Scope & Timeline Estimator</span>
          </button>
        </motion.div>
      </div>

      {/* Interactive 3D Architecture Visual Showcase & Layer Inspector */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-12 rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden"
      >
        {/* Top Cockpit Bar */}
        <div className="bg-slate-900 text-white px-5 py-3.5 border-b border-slate-800 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-mono text-xs font-bold text-slate-200">
              EVD Autonomous Architecture Engine v5.0
            </span>
            <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30">
              Production Verified
            </span>
          </div>

          {/* Layer Selector Chips */}
          <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
            <button
              onClick={() => setActiveLayer('arch')}
              className={`px-3 py-1 rounded-lg font-mono text-[11px] font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeLayer === 'arch'
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Boxes className="w-3.5 h-3.5" />
              <span>Topology</span>
            </button>
            <button
              onClick={() => setActiveLayer('frontend')}
              className={`px-3 py-1 rounded-lg font-mono text-[11px] font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeLayer === 'frontend'
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Next.js 15</span>
            </button>
            <button
              onClick={() => setActiveLayer('backend')}
              className={`px-3 py-1 rounded-lg font-mono text-[11px] font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeLayer === 'backend'
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              <span>Core DB</span>
            </button>
            <button
              onClick={() => setActiveLayer('security')}
              className={`px-3 py-1 rounded-lg font-mono text-[11px] font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeLayer === 'security'
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Lock className="w-3.5 h-3.5" />
              <span>CERT-In</span>
            </button>
          </div>
        </div>

        {/* Cockpit Body: 3D Illustration Graphic + Layer Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
          {/* Left Column: Bespoke 3D Isometric Software Engine Graphic */}
          <div className="lg:col-span-7 relative bg-slate-950 flex items-center justify-center p-4 sm:p-6 overflow-hidden min-h-[320px] sm:min-h-[380px]">
            {/* 3D Generated Isometric Art */}
            <img
              src="/src/assets/images/evd_hero_engine_1787745830380.jpg"
              alt="EVD Enterprise Software and AI Delivery Engine Isometric Architecture"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-2xl border border-slate-800 shadow-2xl transition-transform duration-700 hover:scale-102"
            />

            {/* Floating Live Telemetry Chip */}
            <div className="absolute bottom-7 left-7 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-white shadow-xl max-w-xs space-y-1">
              <div className="flex items-center justify-between text-[10px] font-mono text-red-400">
                <span>ACTIVE BUILD PIPELINE</span>
                <span className="text-emerald-400">● 100% HEALTH</span>
              </div>
              <div className="text-xs font-bold text-slate-100">Multi-Cloud Orchestration</div>
              <div className="text-[10px] text-slate-400">Zero downtime blue/green container rollout</div>
            </div>

            {/* Floating Metric Badge */}
            <div className="absolute top-7 right-7 px-3 py-1.5 rounded-xl bg-red-600/90 backdrop-blur-md text-white font-mono text-xs font-bold shadow-lg border border-red-400/40">
              ⚡ 50% Faster Delivery
            </div>
          </div>

          {/* Right Column: Interactive Layer Inspector */}
          <div className="lg:col-span-5 p-6 sm:p-8 space-y-5 bg-gradient-to-b from-slate-50 to-white">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-red-700 bg-red-50 px-2.5 py-1 rounded-md border border-red-200">
                <span>Active Layer Specification</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 leading-tight">
                {layerData[activeLayer].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {layerData[activeLayer].desc}
              </p>
            </div>

            {/* Verified Stack Chips */}
            <div className="space-y-2 pt-2 border-t border-slate-200">
              <span className="text-[11px] font-mono font-bold uppercase text-slate-500 block">
                Standard Enterprise Stack:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {layerData[activeLayer].tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-white border border-slate-300 text-slate-800 text-xs font-mono font-medium shadow-2xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Metric Banner */}
            <div className="p-3.5 rounded-2xl bg-slate-900 text-white flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono text-slate-400">BENCHMARK GUARANTEE</div>
                <div className="text-sm font-bold font-mono text-red-400">
                  {layerData[activeLayer].metric}
                </div>
              </div>
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            </div>

            <div className="pt-2 flex items-center justify-between text-xs">
              <button
                onClick={onOpenConsultation}
                className="font-bold text-red-600 hover:text-red-700 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Request Custom Architecture SOW</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 4 Stats Cards with Glowing Borders & Motion Reveal */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-8">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`p-4 sm:p-5 rounded-2xl bg-white/95 border ${stat.accent} shadow-sm backdrop-blur-sm space-y-1 hover:shadow-lg transition-all card-hover-lift text-left`}
          >
            <div className="text-xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              {stat.value}
            </div>
            <div className="text-xs font-bold text-slate-800">{stat.label}</div>
            <div className="text-[10px] text-slate-500">{stat.sublabel}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

