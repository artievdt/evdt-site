import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Building2,
  Car,
  Landmark,
  Cpu,
  GraduationCap,
  HeartPulse,
  Hotel,
  ShoppingCart,
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export const IndustrySectorsGrid: React.FC<{
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}> = ({ onNavigate, onOpenConsultation }) => {
  const [hoveredSector, setHoveredSector] = useState<number | null>(null);

  const sectors = [
    {
      id: 'gov',
      title: 'Government & Public Sector',
      slug: 'govtech-smart-cities',
      desc: 'Citizen grievance portals, municipal tax automation, smart city dashboards, and CERT-In empanelled compliant systems.',
      icon: Building2,
      metrics: '1.2M+ Citizen Records',
      color: 'from-red-600 to-rose-700'
    },
    {
      id: 'fin',
      title: 'Banking, FinTech & NBFCs',
      slug: 'fintech-bfsi',
      desc: 'Video KYC, automated loan underwriting algorithms, payment gateway reconciliations, and PCI-DSS hardened ledgers.',
      icon: Landmark,
      metrics: 'Sub-2s Real-Time KYC',
      color: 'from-emerald-600 to-teal-700'
    },
    {
      id: 'edtech',
      title: 'Education & Online LMS',
      slug: 'edtech-elearning',
      desc: 'EVD Academy LMS, anti-piracy DRM encrypted video streaming, proctored mock testing, and student fee management.',
      icon: GraduationCap,
      metrics: '50k+ Concurrent Exams',
      color: 'from-purple-600 to-indigo-700'
    },
    {
      id: 'retail',
      title: 'Retail & Quick-Commerce',
      slug: 'retail-e-commerce',
      desc: 'Omnichannel custom ERP, POS thermal printing sync, multi-store dispatch hubs, and sub-10 minute dark store routing.',
      icon: ShoppingCart,
      metrics: '100% Tax Compliant ERP',
      color: 'from-amber-600 to-orange-700'
    },
    {
      id: 'health',
      title: 'Healthcare & Diagnostics',
      slug: 'healthcare-healthtech',
      desc: 'HIPAA compliant patient telemetry, diagnostic lab PACS integration, electronic health records (EHR), and telemedicine apps.',
      icon: HeartPulse,
      metrics: 'Zero-Leak Patient Vault',
      color: 'from-rose-600 to-pink-700'
    },
    {
      id: 'logistics',
      title: 'Fleet & Supply Chain TMS',
      slug: 'manufacturing-logistics',
      desc: 'Live IoT GPS tracking, automated freight rate calculation, digital proof of delivery (e-POD), and cold-chain temperature alerts.',
      icon: Car,
      metrics: '74% Dispatch Optimization',
      color: 'from-cyan-600 to-blue-700'
    }
  ];

  return (
    <section id="industry-sectors-grid" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto space-y-3"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-mono font-bold text-red-700">
          <Sparkles className="w-3.5 h-3.5 text-red-600" />
          <span>DOMAIN SPECIALIZATIONS</span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
          Engineered for your industry&rsquo;s{' '}
          <span className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 bg-clip-text text-transparent">
            exact compliance & scale
          </span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Bespoke software architecture customized with deep domain understanding, regulatory compliance, and high concurrency.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.08
            }
          }
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {sectors.map((sector, idx) => {
          const Icon = sector.icon;
          return (
            <motion.div
              key={sector.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              onMouseEnter={() => setHoveredSector(idx)}
              onMouseLeave={() => setHoveredSector(null)}
              onClick={() => onNavigate(`/industries/${sector.slug}`)}
              className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-red-400 flex flex-col justify-between transition-all cursor-pointer card-hover-lift group relative overflow-hidden"
            >
              {/* Subtle top accent gradient */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${sector.color}`} />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-red-50/80 border border-red-100 flex items-center justify-center text-red-600 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                    {sector.metrics}
                  </span>
                </div>

                <h3 className="text-lg font-display font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                  {sector.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {sector.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-red-600 group-hover:text-red-700">
                <span>Explore Industry Architecture</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

