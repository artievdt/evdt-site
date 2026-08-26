import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Layers,
  MessageSquare,
  Building2,
  Cpu,
  BarChart3,
  CheckCircle2,
  Users,
  Clock,
  TrendingUp,
  Globe,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Activity,
  PhoneCall,
  Smartphone,
  Server,
  Database
} from 'lucide-react';

export const OperatingSystemPreview: React.FC<{
  onOpenConsultation: () => void;
  onNavigate: (path: string) => void;
}> = ({ onOpenConsultation, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'cx' | 'erp' | 'ai' | 'automation'>('cx');
  const [liveEventsCount, setLiveEventsCount] = useState(14820);

  useEffect(() => {
    const timer = setInterval(() => {
      setLiveEventsCount(prev => prev + Math.floor(Math.random() * 5) + 1);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="enterprise-os-preview" className="w-full bg-[#0a0f1d] py-16 sm:py-24 border-y border-slate-800 text-white relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/15 border border-red-500/30 text-xs font-mono font-bold text-red-400">
            <Zap className="w-3.5 h-3.5 text-red-400" />
            <span>UNIFIED ENTERPRISE BACKBONE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Next-Gen Operating System for{' '}
            <span className="bg-gradient-to-r from-red-500 via-rose-400 to-amber-400 bg-clip-text text-transparent">
              Enterprise Operations
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            From AI-driven customer experience hubs to mission-critical multi-warehouse ERPs — experience the connected software backbone engineered by EVD Technology.
          </p>
        </motion.div>

        {/* Interactive OS Dashboard Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-slate-800 bg-slate-950 text-white shadow-2xl overflow-hidden"
        >
          {/* Top OS Window Titlebar */}
          <div className="p-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
              </div>
              <div className="text-xs font-mono font-bold text-slate-300 flex items-center gap-2">
                <span>EVD Enterprise Control Hub v5.0</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
                  ● Live • {liveEventsCount.toLocaleString()} telemetry events/hr
                </span>
              </div>
            </div>

            {/* OS Navigation Tabs */}
            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
              <button
                onClick={() => setActiveTab('cx')}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'cx'
                    ? 'bg-red-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Omnichannel CX
              </button>
              <button
                onClick={() => setActiveTab('erp')}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'erp'
                    ? 'bg-red-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Custom ERP Node
              </button>
              <button
                onClick={() => setActiveTab('ai')}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'ai'
                    ? 'bg-red-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                AI & Vector RAG
              </button>
              <button
                onClick={() => setActiveTab('automation')}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'automation'
                    ? 'bg-red-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Cloud Scale
              </button>
            </div>
          </div>

          {/* Dynamic OS Screen Content with 3D Illustration Graphic Integration */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Left 3D Isometric Ecosystem Visual */}
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
                <img
                  src="/src/assets/images/evd_erp_ecosystem_1787745856164.jpg"
                  alt="EVD Enterprise ERP & Omnichannel Operations Ecosystem"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-slate-300">
                  <span className="text-red-400 font-bold">Multi-Warehouse Sync Active</span>
                  <span className="text-emerald-400">0.0s Drift</span>
                </div>
              </div>

              {/* Right Tab Content */}
              <div className="lg:col-span-7">
                {/* 1. CX OPERATING SYSTEM */}
                {activeTab === 'cx' && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                        <div className="text-[10px] text-slate-400 font-mono">ACTIVE CONVERSATIONS</div>
                        <div className="text-xl sm:text-2xl font-bold font-display text-emerald-400">1,256</div>
                        <div className="text-[10px] text-slate-500">WhatsApp & Web Chat</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                        <div className="text-[10px] text-slate-400 font-mono">FIRST RESOLUTION SLA</div>
                        <div className="text-xl sm:text-2xl font-bold font-display text-cyan-400">98.2%</div>
                        <div className="text-[10px] text-slate-500">Sub-12s response</div>
                      </div>
                    </div>

                    {/* Multi-Channel Distribution visual */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                        <span className="text-xs font-bold text-slate-200 flex items-center gap-2">
                          <MessageSquare className="w-4 h-4 text-emerald-400" />
                          WhatsApp Business Gateway
                        </span>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          Automated catalog inquiries, instant payment links, and transactional order updates.
                        </p>
                        <span className="text-[10px] font-mono text-emerald-400 block">Status: 100% Throughput</span>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                        <span className="text-xs font-bold text-slate-200 flex items-center gap-2">
                          <PhoneCall className="w-4 h-4 text-cyan-400" />
                          AI Voice Agent & IVR
                        </span>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          Multilingual conversational IVR supporting Hindi, English, and regional dialects.
                        </p>
                        <span className="text-[10px] font-mono text-cyan-400 block">Latency: &lt; 280ms</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. ERP OPERATING SYSTEM */}
                {activeTab === 'erp' && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                        <span className="text-xs font-bold text-slate-200 flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-red-400" />
                          Multi-Warehouse Inventory
                        </span>
                        <div className="text-lg font-bold font-mono text-red-400">6 Depots Synchronized</div>
                        <p className="text-[11px] text-slate-400">Automated buffer threshold re-orders and live barcode dispatch tracking.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                        <span className="text-xs font-bold text-slate-200 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-emerald-400" />
                          GST Automated Invoicing
                        </span>
                        <div className="text-lg font-bold font-mono text-emerald-400">100% Compliant</div>
                        <p className="text-[11px] text-slate-400">Instant e-Way bill and IRN QR code generation in sub-second API cycles.</p>
                      </div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                      <span className="font-mono text-slate-300">Self-Hosted Deployment</span>
                      <span className="text-red-400 font-bold">$0 Recurring Seat Taxes</span>
                    </div>
                  </div>
                )}

                {/* 3. AI & RAG */}
                {activeTab === 'ai' && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                      <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2">
                        <span className="font-bold text-amber-300 flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-amber-400" />
                          Enterprise RAG Knowledge Vector Engine
                        </span>
                        <span className="text-emerald-400 font-mono text-[10px]">4.2M Vectors</span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        Connect company documentation, SOP manuals, and CRM data to grounded LLMs with strict zero-hallucination guardrails.
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                          <div className="text-slate-500 text-[10px]">Retrieval Latency</div>
                          <div className="text-xs font-bold text-white font-mono">18ms (pgvector)</div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                          <div className="text-slate-500 text-[10px]">Hallucination Guard</div>
                          <div className="text-xs font-bold text-white font-mono">99.8% Grounded</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. CLOUD AUTOMATION */}
                {activeTab === 'automation' && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                      <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2">
                        <span className="font-bold text-indigo-300 flex items-center gap-2">
                          <Activity className="w-4 h-4 text-indigo-400" />
                          High-Concurrency Auto-Scaling Cluster
                        </span>
                        <span className="text-emerald-400 font-mono text-[10px]">50,000 Concurrency</span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        Kubernetes EKS/GKE horizontal pod auto-scalers expand infrastructure dynamically during peak traffic loads.
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                          <div className="text-slate-500 text-[10px]">Failover Recovery</div>
                          <div className="text-xs font-bold text-white font-mono">&lt; 3s Auto-heal</div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                          <div className="text-slate-500 text-[10px]">DDoS Protection</div>
                          <div className="text-xs font-bold text-white font-mono">Cloudflare WAF</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Action Footer */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between flex-wrap gap-4 text-xs">
              <div className="text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Full Source Code Ownership • Deployed to Your Cloud VPC</span>
              </div>
              <button
                onClick={onOpenConsultation}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold flex items-center gap-2 cursor-pointer transition-all hover:scale-102"
              >
                <span>Schedule Live Architecture Walkthrough</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

