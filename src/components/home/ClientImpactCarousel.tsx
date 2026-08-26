import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Award,
  Building2,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Quote
} from 'lucide-react';

export const ClientImpactCarousel: React.FC<{
  onOpenConsultation: () => void;
  onNavigate: (path: string) => void;
}> = ({ onOpenConsultation, onNavigate }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const impacts = [
    {
      company: 'Logistics & Supply Chain Group',
      industry: 'Fleet & Cold-Chain TMS',
      metric: '74%',
      metricLabel: 'Reduction in route dispatch overhead',
      quote: 'EVD Technology delivered our custom TMS and mobile driver telemetry in just 8 weeks. What used to require 14 manual coordinators is now 100% automated with zero route deviation.',
      author: 'Head of Digital Transformation',
      techStack: ['Next.js', 'Flutter GPS SDK', 'PostgreSQL', 'AWS ECS']
    },
    {
      company: 'Premier EdTech & Assessment Institute',
      industry: 'High-Stakes Online Testing',
      metric: '50k+',
      metricLabel: 'Concurrent candidates during peak exams',
      quote: 'Our previous LMS crashed during 10,000 student mock tests. EVD rebuilt our assessment engine with DRM anti-leak protection and autoscaled it to support 50,000 students without a single second of latency.',
      author: 'Director of Academic Technology',
      techStack: ['DRM Video Player', 'Redis Cluster', 'Kubernetes', 'WebSockets']
    },
    {
      company: 'State Government Urban Directorate',
      industry: 'Public Citizen Services Portal',
      metric: '1.2M+',
      metricLabel: 'Citizen transactions processed seamlessly',
      quote: 'The unified municipal portal engineered by EVD Technology streamlined property tax, water billing, and grievance tracking across the entire state. High security and absolute uptime.',
      author: 'Superintending IT Consultant',
      techStack: ['React', 'Spring Boot Core', 'CERT-In Hardened', 'NIC Cloud']
    },
    {
      company: 'National Retail & Quick-Commerce Brand',
      industry: 'Omnichannel ERP & Quick Commerce',
      metric: '9.8 min',
      metricLabel: 'Average order-to-dispatch fulfillment time',
      quote: 'EVD eliminated our reliance on third-party SaaS tools that were taking 3% off every order. We now own our custom ERP and multi-store dispatch system 100%.',
      author: 'Chief Operating Officer',
      techStack: ['Custom ERP', 'Thermal Printing SDK', 'Go Microservices', 'GCP']
    }
  ];

  const current = impacts[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % impacts.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + impacts.length) % impacts.length);
  };

  return (
    <section id="client-impact-carousel" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4"
      >
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-mono font-bold text-red-700">
            <Award className="w-3.5 h-3.5 text-red-600" />
            <span>MEASURABLE BUSINESS IMPACT</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight mt-3">
            From discovery to deployment.{' '}
            <span className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 bg-clip-text text-transparent">
              EVD delivers what others promise.
            </span>
          </h2>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handlePrev}
            className="w-11 h-11 rounded-2xl bg-white border border-slate-200 hover:border-red-400 hover:bg-red-50 text-slate-700 hover:text-red-700 flex items-center justify-center transition-all cursor-pointer shadow-xs hover:scale-105 active:scale-95"
            aria-label="Previous case study"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-11 h-11 rounded-2xl bg-white border border-slate-200 hover:border-red-400 hover:bg-red-50 text-slate-700 hover:text-red-700 flex items-center justify-center transition-all cursor-pointer shadow-xs hover:scale-105 active:scale-95"
            aria-label="Next case study"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </motion.div>

      {/* Main Impact Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl relative overflow-hidden card-hover-lift"
      >
        {/* Subtle background blur accent */}
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-red-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Metric Highlight */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0B132B] via-[#111C3A] to-[#1C2541] text-white space-y-4 shadow-xl relative overflow-hidden">
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-red-600/20 rounded-full blur-2xl" />
            <div className="flex items-center justify-between relative z-10">
              <span className="text-[10px] uppercase font-mono font-bold text-red-300 bg-red-500/20 px-2.5 py-0.5 rounded-full border border-red-500/30">
                {current.industry}
              </span>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>

            <div className="pt-2 relative z-10">
              <div className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
                {current.metric}
              </div>
              <p className="text-xs text-slate-300 font-medium mt-1 leading-snug">
                {current.metricLabel}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-700/60 text-[11px] text-slate-400 relative z-10 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Verified production deployment benchmark</span>
            </div>
          </div>

          {/* Right Column: Quote & Architecture */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-display font-bold text-slate-900">
                {current.company}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic border-l-3 border-red-600 pl-4 py-1">
                &ldquo;{current.quote}&rdquo;
              </p>
              <div className="text-xs font-bold text-slate-800 pt-1 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                <span>{current.author}</span>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="space-y-2 pt-3 border-t border-slate-100">
              <span className="text-[11px] font-mono uppercase font-bold text-slate-500 block">
                Production Stack Deployed:
              </span>
              <div className="flex flex-wrap gap-2">
                {current.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-xs font-mono font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => onNavigate('/case-studies')}
                className="text-xs font-bold text-red-600 hover:text-red-800 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Read Full Technical Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="flex gap-1.5">
                {impacts.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      activeIndex === idx ? 'w-8 bg-red-600' : 'w-2 bg-slate-200 hover:bg-slate-300'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

