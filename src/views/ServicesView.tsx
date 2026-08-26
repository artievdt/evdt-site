import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeader } from '../components/common/SectionHeader';
import { servicesData, addOnServicesData } from '../data/servicesData';
import { ServiceItem } from '../types';
import {
  Code2,
  Building2,
  Cpu,
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  Search,
  ArrowLeft
} from 'lucide-react';

interface ServicesViewProps {
  selectedServiceSlug?: string;
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  selectedServiceSlug,
  onNavigate,
  onOpenConsultation
}) => {
  const allServices = [...servicesData, ...addOnServicesData];
  const activeService = selectedServiceSlug
    ? allServices.find(s => s.slug === selectedServiceSlug)
    : null;

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Core Software Engineering',
    'Enterprise & Digital Solutions',
    'Emerging Tech & Cloud',
    'Add-on Services'
  ];

  const filteredServices = allServices.filter(s => {
    const matchesCat = activeCategory === 'All' || s.category === activeCategory;
    const matchesSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  // DETAIL VIEW FOR A SPECIFIC SERVICE
  if (activeService) {
    return (
      <div id="service-detail-root" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Back navigation & Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center justify-between"
        >
          <button
            onClick={() => onNavigate('/services')}
            className="inline-flex items-center gap-2 text-xs font-bold text-red-600 hover:text-red-800 cursor-pointer transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </button>
          <span className="text-xs text-slate-500 font-mono">
            Services / {activeService.category} / {activeService.title}
          </span>
        </motion.div>

        {/* Hero Banner for Selected Service */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-red-50 via-rose-50/60 to-slate-100 border border-red-200/90 shadow-sm space-y-6 relative overflow-hidden"
        >
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] uppercase font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-red-100 text-red-800 border border-red-300">
              {activeService.category}
            </span>
            <span className="text-xs text-emerald-700 font-bold flex items-center gap-1 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5" /> 100% Client IP Ownership
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            {activeService.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-700 max-w-3xl leading-relaxed">
            {activeService.fullDescription}
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenConsultation}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-700 hover:to-rose-800 text-white font-bold text-xs shadow-lg shadow-red-600/25 flex items-center gap-2 cursor-pointer transition-all"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Request Architecture Proposal & Pricing</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Strategic Grid: Problem Statement vs EVD Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-3xl bg-white border border-red-200 shadow-2xs space-y-4 hover:shadow-lg transition-all"
          >
            <div className="text-red-600 font-mono font-bold text-xs uppercase tracking-wider">The Operational Bottleneck</div>
            <h3 className="text-lg font-display font-bold text-slate-900">Common Industry Challenges</h3>
            <ul className="space-y-2 text-xs text-slate-700">
              {activeService.businessProblems.map((prob, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>{prob}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-4 hover:shadow-lg transition-all"
          >
            <div className="text-red-600 font-mono font-bold text-xs uppercase tracking-wider">The EVD Engineering Solution</div>
            <h3 className="text-lg font-display font-bold text-slate-900">Our Architectural Approach</h3>
            <ul className="space-y-2 text-xs text-slate-700">
              {activeService.keySolutions.map((sol, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                  <span>{sol}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Deliverables & Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6"
        >
          <h3 className="text-xl font-display font-bold text-slate-900">
            Core Technical Capabilities & Deliverables
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeService.deliverables.map((d, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -2 }}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 hover:border-red-300 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-slate-800">{d}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack & Related Deliverables */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4">
            <h3 className="text-base font-display font-bold text-slate-900">Primary Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {activeService.technologies.map((t, idx) => (
                <span key={idx} className="px-3 py-1 rounded-xl bg-red-50 border border-red-200 text-xs font-mono font-bold text-red-700">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4">
            <h3 className="text-base font-display font-bold text-slate-900">Enterprise Guarantees</h3>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Client Source Code & Git History Ownership</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Automated CI/CD Deployment Pipelines (AWS / GCP)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>60-Day Post-Launch Technical Defect Warranty</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>SLA-backed AMC Maintenance & 24/7 Monitoring</span>
              </li>
            </ul>
          </div>
        </div>

        {/* FAQs */}
        {activeService.faqs && activeService.faqs.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-xl font-display font-bold text-slate-900">Frequently Asked Technical Questions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeService.faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -2 }}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2 hover:border-red-300 transition-colors"
                >
                  <h4 className="font-bold text-xs text-slate-900">{faq.question}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <motion.div
          whileInView={{ scale: [0.98, 1], opacity: [0.8, 1] }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl bg-gradient-to-r from-red-600 via-rose-600 to-[#0B132B] text-center space-y-4 shadow-xl text-white"
        >
          <h3 className="text-2xl font-display font-extrabold text-white">
            Ready to build with this architecture?
          </h3>
          <p className="text-xs sm:text-sm text-red-100 max-w-xl mx-auto">
            Schedule a technical discovery session with our Lead Architect to review your schema requirements and deployment timeline.
          </p>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3 rounded-full bg-white text-slate-900 hover:bg-slate-50 font-bold text-xs shadow-lg inline-flex items-center gap-2 cursor-pointer transition-all hover:scale-105"
          >
            <span>Consult an Architect for {activeService.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    );
  }

  // OVERVIEW DIRECTORY VIEW
  return (
    <div id="services-overview-root" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <SectionHeader
        badge="13 Core & Emerging Capabilities"
        title="Enterprise Software Engineering &"
        highlightedWord="Technology Services"
        subtitle="End-to-end software engineering, SaaS product development, custom ERP/CRM systems, artificial intelligence, and cloud DevOps."
      />

      {/* Filter and Search Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-6">
        {/* Category Tabs */}
        <div className="flex items-center flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-red-600 text-white font-bold shadow-md shadow-red-600/25 scale-102'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Quick Search */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Filter services or tech..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-red-600 transition-colors shadow-2xs"
          />
        </div>
      </div>

      {/* Services Grid with Motion Stagger */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredServices.map((service) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              key={service.id}
              className="rounded-3xl bg-white border border-slate-200/90 p-6 flex flex-col justify-between hover:border-red-300 hover:shadow-xl hover:shadow-red-500/10 transition-all group card-hover-lift"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">
                    {service.category}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">100% Client IP</span>
                </div>

                <h3 className="text-base font-display font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
                  {service.shortDescription}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {service.technologies.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate(service.category === 'Add-on Services' ? `/add-on-services/${service.slug}` : `/services/${service.slug}`)}
                  className="text-xs font-bold text-red-600 hover:text-red-800 flex items-center gap-1 cursor-pointer"
                >
                  <span>View Full Architecture Spec</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

