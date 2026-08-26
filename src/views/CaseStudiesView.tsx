import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeader } from '../components/common/SectionHeader';
import { caseStudiesData } from '../data/caseStudiesData';
import { CaseStudyItem } from '../types';
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Building2,
  Cpu,
  BarChart3,
  Calendar,
  Layers,
  Search
} from 'lucide-react';

interface CaseStudiesViewProps {
  selectedCaseStudySlug?: string;
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const CaseStudiesView: React.FC<CaseStudiesViewProps> = ({
  selectedCaseStudySlug,
  onNavigate,
  onOpenConsultation
}) => {
  const activeCaseStudy = selectedCaseStudySlug
    ? caseStudiesData.find(c => c.slug === selectedCaseStudySlug)
    : null;

  const [activeIndustryFilter, setActiveIndustryFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const industries = ['All', 'EdTech', 'GovTech', 'SaaS', 'Industrial', 'Logistics', 'Healthcare'];

  const filteredCaseStudies = caseStudiesData.filter(cs => {
    const matchesIndustry = activeIndustryFilter === 'All' || cs.industry.toLowerCase().includes(activeIndustryFilter.toLowerCase()) || cs.category.toLowerCase().includes(activeIndustryFilter.toLowerCase());
    const matchesSearch = cs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesIndustry && matchesSearch;
  });

  // CASE STUDY DEEP DIVE VIEW
  if (activeCaseStudy) {
    return (
      <div id="case-study-detail-root" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Navigation Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center justify-between"
        >
          <button
            onClick={() => onNavigate('/case-studies')}
            className="inline-flex items-center gap-2 text-xs font-bold text-red-600 hover:text-red-800 cursor-pointer transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Case Studies</span>
          </button>
          <span className="text-xs text-slate-500 font-mono">
            Portfolio / {activeCaseStudy.industry} / {activeCaseStudy.client}
          </span>
        </motion.div>

        {/* Hero Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-red-50 via-rose-50/60 to-slate-100 border border-red-200/90 shadow-sm space-y-6 relative overflow-hidden"
        >
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] uppercase font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-red-100 text-red-800 border border-red-300">
              {activeCaseStudy.category} • {activeCaseStudy.industry}
            </span>
            <span className="text-xs text-emerald-700 font-bold flex items-center gap-1 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5" /> Verified Production Deployment
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            {activeCaseStudy.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-700 max-w-3xl leading-relaxed">
            {activeCaseStudy.summary}
          </p>

          <div className="pt-2 flex items-center gap-6 text-xs text-slate-600 border-t border-slate-200 pt-4 flex-wrap">
            <div><strong className="text-slate-900">Client:</strong> {activeCaseStudy.client}</div>
            <div><strong className="text-slate-900">Industry:</strong> {activeCaseStudy.industry}</div>
            <div><strong className="text-slate-900">Role:</strong> End-to-End Architecture & Engineering</div>
          </div>
        </motion.div>

        {/* Impact Metrics Banner */}
        {activeCaseStudy.impactMetrics && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {activeCaseStudy.impactMetrics.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-3xl bg-white border border-red-200/80 shadow-2xs text-center space-y-1 card-hover-lift hover:border-red-300 transition-all"
              >
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-red-700 tracking-tight">{m.value}</div>
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">{m.label}</div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Challenge vs Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-3xl bg-white border border-red-200 shadow-2xs space-y-4"
          >
            <h3 className="text-base font-display font-bold text-red-600 uppercase tracking-wider font-mono">The Business Challenge</h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeCaseStudy.challenge}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-4"
          >
            <h3 className="text-base font-display font-bold text-slate-900 uppercase tracking-wider font-mono">The Engineering Solution</h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeCaseStudy.solution}
            </p>
          </motion.div>
        </div>

        {/* Architectural Highlights & Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4"
          >
            <h3 className="text-lg font-display font-bold text-slate-900">Technical Architecture Highlights</h3>
            <ul className="space-y-2.5 text-xs text-slate-700">
              {activeCaseStudy.architectureHighlights.map((h, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4"
          >
            <h3 className="text-lg font-display font-bold text-slate-900">Measurable Business Results</h3>
            <ul className="space-y-2.5 text-xs text-slate-700">
              {activeCaseStudy.impactQualitative.map((r, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Tech Stack Employed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4"
        >
          <h3 className="text-base font-display font-bold text-slate-900">Technology Stack Implemented</h3>
          <div className="flex flex-wrap gap-2">
            {activeCaseStudy.techStack.map((tech, idx) => (
              <span key={idx} className="px-3.5 py-1.5 rounded-xl bg-red-50 border border-red-200 text-xs font-mono font-bold text-red-700">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Client Quote if available */}
        {activeCaseStudy.testimonial && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-red-50/60 border border-red-200 text-center space-y-4 max-w-3xl mx-auto shadow-2xs"
          >
            <div className="text-red-600 font-serif text-4xl">&ldquo;</div>
            <p className="text-sm sm:text-base text-slate-800 italic leading-relaxed">
              {activeCaseStudy.testimonial.quote}
            </p>
            <div className="text-xs font-bold text-red-700 font-display">
              — {activeCaseStudy.testimonial.author} ({activeCaseStudy.testimonial.role}, {activeCaseStudy.testimonial.organization})
            </div>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          whileInView={{ scale: [0.98, 1], opacity: [0.8, 1] }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl bg-gradient-to-r from-red-600 via-rose-600 to-[#0B132B] text-center space-y-4 shadow-xl text-white"
        >
          <h3 className="text-2xl font-display font-extrabold text-white">
            Need similar enterprise architecture for your project?
          </h3>
          <p className="text-xs sm:text-sm text-red-100 max-w-xl mx-auto">
            Consult our Solution Architects for a tailored schema audit and project roadmap.
          </p>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3 rounded-full bg-white text-slate-900 hover:bg-slate-50 font-bold text-xs shadow-lg inline-flex items-center gap-2 cursor-pointer transition-all hover:scale-105"
          >
            <span>Request Technical Architecture Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    );
  }

  // ALL CASE STUDIES OVERVIEW
  return (
    <div id="case-studies-overview-root" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <SectionHeader
        badge="Proven Track Record"
        title="Enterprise Case Studies &"
        highlightedWord="Client Success"
        subtitle="Explore how EVD Technology builds mission-critical systems for state governments, nationwide EdTech leaders, and scalable SaaS platforms."
      />

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div className="flex items-center flex-wrap gap-2">
          {industries.map((ind) => (
            <button
              key={ind}
              onClick={() => setActiveIndustryFilter(ind)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeIndustryFilter === ind
                  ? 'bg-red-600 text-white font-bold shadow-md shadow-red-600/25 scale-102'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {ind}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search client, tech, or scope..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-red-600 transition-colors shadow-2xs"
          />
        </div>
      </div>

      {/* Case Studies Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <AnimatePresence>
          {filteredCaseStudies.map((cs) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              key={cs.id}
              className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between hover:border-red-300 hover:shadow-xl hover:shadow-red-500/10 transition-all group card-hover-lift"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">
                    {cs.category} • {cs.industry}
                  </span>
                  <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Verified
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                  {cs.title}
                </h3>

                <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
                  {cs.summary}
                </p>

                {/* Impact stats */}
                {cs.impactMetrics && (
                  <div className="grid grid-cols-3 gap-2 my-4 p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                    {cs.impactMetrics.map((m, idx) => (
                      <div key={idx}>
                        <div className="text-sm font-extrabold text-red-700 font-display">{m.value}</div>
                        <div className="text-[9px] text-slate-500 font-semibold">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {cs.techStack.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate(`/case-studies/${cs.slug}`)}
                  className="text-xs font-bold text-red-600 hover:text-red-800 flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Read Full Technical Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
                <span className="text-[11px] text-slate-500 font-medium">{cs.client}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

