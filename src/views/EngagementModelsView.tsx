import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '../components/common/SectionHeader';
import { engagementModelsData, comparisonMatrix } from '../data/engagementModelsData';
import {
  Users,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
  Sparkles,
  Layers,
  Clock,
  Award,
  Zap,
  Calculator
} from 'lucide-react';

interface EngagementModelsViewProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
  onOpenEstimator: () => void;
}

export const EngagementModelsView: React.FC<EngagementModelsViewProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenEstimator
}) => {
  return (
    <div id="engagement-models-root" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <SectionHeader
        badge="Flexible Partnership Structures"
        title="Predictable, Transparent"
        highlightedWord="Engagement Models"
        subtitle="Scale your software capabilities with zero friction. From agile dedicated squads to milestone-governed fixed contracts and enterprise ODCs."
      />

      {/* 4 Models Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {engagementModelsData.map((model) => (
          <motion.div
            key={model.id}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 }
            }}
            className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:shadow-red-500/10 hover:border-red-300 flex flex-col justify-between transition-all space-y-6 card-hover-lift"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-700 bg-red-50 px-3 py-1 rounded-full border border-red-200">
                  {model.subtitle}
                </span>
                <span className="text-xs text-emerald-700 font-bold flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5" /> 100% Client IP
                </span>
              </div>

              <h3 className="text-xl font-display font-bold text-slate-900">
                {model.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {model.description}
              </p>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                <strong className="text-slate-900">Ideal For:</strong> {model.idealFor[0]}
              </div>

              <div className="space-y-2 pt-2">
                <span className="text-[11px] uppercase font-mono font-bold text-slate-500 block tracking-wider">Key Model Advantages:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {model.keyHighlights.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0" />
                      <span className="text-[11px]">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
              <button
                onClick={onOpenConsultation}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-700 hover:to-rose-800 text-white font-bold text-xs shadow-md shadow-red-600/25 flex items-center gap-2 cursor-pointer transition-all hover:scale-102"
              >
                <span>Hire Under this Model</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onOpenEstimator}
                className="text-xs text-red-600 hover:text-red-800 font-bold cursor-pointer transition-colors"
              >
                Estimate Squad Timeline →
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Engagement Comparison Matrix Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <SectionHeader
          badge="Side-by-Side Analysis"
          title="Engagement Model"
          highlightedWord="Comparison Matrix"
          subtitle="Select the right commercial engagement model for your project scope, budget, and management preferences."
        />

        <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-slate-50 text-slate-900 font-display font-bold uppercase tracking-wider text-[11px] border-b border-slate-200">
              <tr>
                <th className="p-4">Criteria</th>
                <th className="p-4 text-red-700">Dedicated Team</th>
                <th className="p-4 text-rose-700">Fixed Price</th>
                <th className="p-4 text-slate-900">Offshore ODC</th>
                <th className="p-4 text-emerald-700">AMC / Support</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {comparisonMatrix.map((row, idx) => (
                <tr key={idx} className="hover:bg-red-50/40 transition-colors">
                  <td className="p-4 font-bold text-slate-900 whitespace-nowrap">{row.criteria}</td>
                  <td className="p-4 font-medium">{row.dedicatedTeam}</td>
                  <td className="p-4 font-medium">{row.fixedPrice}</td>
                  <td className="p-4 font-medium">{row.odc}</td>
                  <td className="p-4 font-medium">{row.amc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Interactive Squad Builder CTA Banner */}
      <motion.div
        whileInView={{ scale: [0.98, 1], opacity: [0.8, 1] }}
        viewport={{ once: true }}
        className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-red-600 via-rose-600 to-[#0B132B] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <div className="space-y-2 text-center md:text-left">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-200">Custom Engineering Retainer</span>
          <h3 className="text-2xl font-display font-extrabold text-white">Need a customized hybrid team structure?</h3>
          <p className="text-xs sm:text-sm text-red-100 max-w-xl">
            We assemble custom combinations of full-stack engineers, cloud architects, and dedicated QA automation specialists matched to your exact sprint cadence.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3 rounded-full bg-white text-slate-900 hover:bg-slate-50 font-bold text-xs shadow-lg flex items-center gap-2 cursor-pointer transition-all hover:scale-105"
          >
            <Sparkles className="w-4 h-4 text-red-600" />
            <span>Schedule Discovery Call</span>
          </button>
          <button
            onClick={onOpenEstimator}
            className="px-5 py-3 rounded-full bg-red-950/60 hover:bg-red-950 text-white border border-red-400/40 font-semibold text-xs transition-all cursor-pointer hover:scale-105"
          >
            Scope Estimator
          </button>
        </div>
      </motion.div>
    </div>
  );
};

