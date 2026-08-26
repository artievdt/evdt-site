import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '../components/common/SectionHeader';
import { industriesData } from '../data/industriesData';
import {
  Globe,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
  ArrowLeft,
  Sparkles,
  FileText
} from 'lucide-react';

interface IndustriesViewProps {
  selectedIndustrySlug?: string;
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const IndustriesView: React.FC<IndustriesViewProps> = ({
  selectedIndustrySlug,
  onNavigate,
  onOpenConsultation
}) => {
  const activeIndustry = selectedIndustrySlug
    ? industriesData.find(i => i.slug === selectedIndustrySlug)
    : null;

  // DETAIL VIEW FOR A SPECIFIC INDUSTRY
  if (activeIndustry) {
    return (
      <div id="industry-detail-root" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center justify-between"
        >
          <button
            onClick={() => onNavigate('/industries')}
            className="inline-flex items-center gap-2 text-xs font-bold text-red-600 hover:text-red-800 cursor-pointer transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Industries</span>
          </button>
          <span className="text-xs text-slate-500 font-mono">
            Industries / {activeIndustry.title}
          </span>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-red-50 via-rose-50/60 to-slate-100 border border-red-200/90 shadow-sm space-y-6 relative overflow-hidden"
        >
          <div className="flex items-center gap-2">
            <span className="text-[11px] uppercase font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-red-100 text-red-800 border border-red-300">
              Domain Expertise
            </span>
            <span className="text-xs text-emerald-700 font-bold flex items-center gap-1 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5" /> Domain-Specific Regulatory Readiness
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            {activeIndustry.title}
          </h1>

          <p className="text-base sm:text-lg text-red-700 font-bold max-w-3xl">
            {activeIndustry.tagline}
          </p>

          <p className="text-sm sm:text-base text-slate-700 max-w-3xl leading-relaxed">
            {activeIndustry.overview}
          </p>

          <div className="pt-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenConsultation}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-700 hover:to-rose-800 text-white font-bold text-xs shadow-lg shadow-red-600/25 flex items-center gap-2 cursor-pointer transition-all"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Consult Domain Specialist Architect</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Industry Challenges & Our Architectural Approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-3xl bg-white border border-red-200 shadow-2xs space-y-4"
          >
            <h3 className="text-base font-display font-bold text-slate-900">Sector Pain Points & Bottlenecks</h3>
            <ul className="space-y-3 text-xs text-slate-700">
              {activeIndustry.challenges.map((ch, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">•</span>
                  <span>{ch}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-4"
          >
            <h3 className="text-base font-display font-bold text-slate-900">Tailored Solutions & Deliverables</h3>
            <ul className="space-y-3 text-xs text-slate-700">
              {activeIndustry.solutions.map((sol, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span>{sol}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Capabilities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6"
        >
          <h3 className="text-xl font-display font-bold text-slate-900">
            Specialized Engineering Modules for {activeIndustry.title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeIndustry.capabilities.map((cap, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -2 }}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3 hover:border-red-300 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-800">{cap}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          whileInView={{ scale: [0.98, 1], opacity: [0.8, 1] }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl bg-gradient-to-r from-red-600 via-rose-600 to-[#0B132B] text-center space-y-4 shadow-xl text-white"
        >
          <h3 className="text-2xl font-display font-extrabold text-white">
            Build with our {activeIndustry.title} domain squad
          </h3>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3 rounded-full bg-white text-slate-900 hover:bg-slate-50 font-bold text-xs shadow-lg inline-flex items-center gap-2 cursor-pointer transition-all hover:scale-105"
          >
            <span>Schedule Industry Strategy Call</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    );
  }

  // ALL INDUSTRIES OVERVIEW
  return (
    <div id="industries-overview-root" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <SectionHeader
        badge="Specialized Domain Practice"
        title="Engineering Solutions Across"
        highlightedWord="Key Industry Verticals"
        subtitle="We build high-availability software customized to the regulatory, operational, and user experience requirements of specific sectors."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={{
          visible: { transition: { staggerChildren: 0.08 } }
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {industriesData.map((ind) => (
          <motion.div
            key={ind.id}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 }
            }}
            className="rounded-3xl bg-white border border-slate-200/90 p-6 flex flex-col justify-between hover:border-red-300 hover:shadow-xl hover:shadow-red-500/10 transition-all group card-hover-lift"
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 mb-4 group-hover:scale-110 transition-transform">
                <Globe className="w-5 h-5" />
              </div>

              <h3 className="text-lg font-display font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                {ind.title}
              </h3>

              <p className="text-xs text-red-600 font-bold mt-1">
                {ind.tagline}
              </p>

              <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
                {ind.shortDescription}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-100">
                <span className="text-[10px] uppercase font-mono font-bold text-slate-500 block mb-1.5">Core Features:</span>
                <div className="flex flex-wrap gap-1.5">
                  {ind.capabilities.slice(0, 3).map((cap, idx) => (
                    <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-700">
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => onNavigate(`/industries/${ind.slug}`)}
                className="text-xs font-bold text-red-600 hover:text-red-800 flex items-center gap-1 cursor-pointer"
              >
                <span>Read Industry Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

