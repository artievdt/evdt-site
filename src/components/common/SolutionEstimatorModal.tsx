import React, { useState } from 'react';
import { X, Calculator, Check, Sparkles, ArrowRight, ShieldCheck, Cpu, Layers } from 'lucide-react';

interface SolutionEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const SolutionEstimatorModal: React.FC<SolutionEstimatorModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation
}) => {
  const [projectType, setProjectType] = useState<'custom-software' | 'saas-product' | 'mobile-app' | 'erp-crm' | 'ai-solution'>('custom-software');
  const [scale, setScale] = useState<'mvp' | 'growth' | 'enterprise'>('growth');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'auth-rbac',
    'admin-dashboard',
    'rest-apis',
    'database-modeling'
  ]);
  const [includeAI, setIncludeAI] = useState(false);
  const [includeMobile, setIncludeMobile] = useState(false);

  if (!isOpen) return null;

  const featureOptions = [
    { id: 'auth-rbac', label: 'Auth & Role-Based Access Control (RBAC)', weeks: 1 },
    { id: 'admin-dashboard', label: 'Interactive Admin Management Console', weeks: 2 },
    { id: 'rest-apis', label: 'Secure REST / GraphQL API Gateway', weeks: 1.5 },
    { id: 'database-modeling', label: 'High-Scale Relational Database Architecture', weeks: 1.5 },
    { id: 'payment-gateway', label: 'Payment Gateway & Invoicing Engine', weeks: 1 },
    { id: 'realtime-notifs', label: 'Real-time WebSocket & WhatsApp Notifications', weeks: 1 },
    { id: 'reports-export', label: 'Advanced Data Visualizations & PDF/Excel Export', weeks: 1 },
    { id: 'ci-cd-devops', label: 'Automated CI/CD & Cloud Infrastructure (IaC)', weeks: 1 }
  ];

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  // Calculations
  const baseWeeks = scale === 'mvp' ? 4 : scale === 'growth' ? 8 : 14;
  const featureWeeks = selectedFeatures.reduce((acc, fId) => {
    const f = featureOptions.find(opt => opt.id === fId);
    return acc + (f ? f.weeks : 0);
  }, 0);
  const aiWeeks = includeAI ? 3 : 0;
  const mobileWeeks = includeMobile ? 3.5 : 0;

  const totalEstimatedWeeks = Math.ceil(baseWeeks + featureWeeks + aiWeeks + mobileWeeks);
  const estimatedMonths = (totalEstimatedWeeks / 4.2).toFixed(1);

  const teamSquad = [
    '1 Senior Solution Architect',
    scale === 'enterprise' ? '3 Full-Stack Engineers' : '2 Full-Stack Engineers',
    includeMobile ? '1 Dedicated Flutter Mobile Engineer' : null,
    includeAI ? '1 AI / Machine Learning Specialist' : null,
    '1 Senior QA Automation Engineer',
    '1 Agile Project Manager & DevOps Lead'
  ].filter(Boolean);

  return (
    <div id="solution-estimator-dialog" className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="w-full max-w-3xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden text-slate-800 relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-200 bg-slate-50/80">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-md shadow-blue-500/20">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-slate-900">
                Interactive Project Scope & Timeline Estimator
              </h3>
              <p className="text-xs text-slate-500">
                Configure your architectural requirements to generate an engineering timeline and recommended squad.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 space-y-6 text-xs max-h-[75vh] overflow-y-auto">
          {/* Step 1: Project Type */}
          <div className="space-y-2">
            <label className="text-slate-800 font-bold uppercase tracking-wider text-[11px] block">
              1. Select Project Domain
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {[
                { id: 'custom-software', label: 'Custom Software' },
                { id: 'saas-product', label: 'SaaS Platform' },
                { id: 'mobile-app', label: 'Mobile App' },
                { id: 'erp-crm', label: 'ERP / CRM Suite' },
                { id: 'ai-solution', label: 'AI & Data Engine' }
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setProjectType(t.id as any)}
                  className={`p-2.5 rounded-xl border text-center font-semibold transition-all cursor-pointer ${
                    projectType === t.id
                      ? 'bg-blue-50 border-blue-500 text-blue-700 shadow-2xs font-bold'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Complexity Scale */}
          <div className="space-y-2">
            <label className="text-slate-800 font-bold uppercase tracking-wider text-[11px] block">
              2. Complexity & Readiness Level
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { id: 'mvp', label: 'MVP / Fast Launch', desc: 'Core feature loop to validate users and achieve early revenue fast.' },
                { id: 'growth', label: 'Growth / Scale Platform', desc: 'Multi-role workflows, robust integrations, and high-performance DB.' },
                { id: 'enterprise', label: 'Enterprise / Mission-Critical', desc: 'Multi-branch ERP, extreme concurrency, CERT-In security, and high SLA.' }
              ].map((s) => (
                <button
                  key={s.id}
                  onClick={() => setScale(s.id as any)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    scale === s.id
                      ? 'bg-blue-50/90 border-blue-500 text-slate-900 shadow-2xs'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <div className="font-bold text-xs text-slate-900 flex items-center justify-between">
                    <span>{s.label}</span>
                    {scale === s.id && <span className="w-2 h-2 rounded-full bg-blue-600" />}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1 leading-relaxed">{s.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Architecture Capabilities */}
          <div className="space-y-2">
            <label className="text-slate-800 font-bold uppercase tracking-wider text-[11px] block">
              3. Architectural Modules & Capabilities
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {featureOptions.map((f) => {
                const checked = selectedFeatures.includes(f.id);
                return (
                  <button
                    key={f.id}
                    onClick={() => toggleFeature(f.id)}
                    className={`p-2.5 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                      checked
                        ? 'bg-blue-50/80 border-blue-400 text-slate-900 font-semibold'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <span className="font-medium text-xs">{f.label}</span>
                    <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                      checked ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300 bg-white'
                    }`}>
                      {checked && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Add-on Toggles: AI & Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <button
              onClick={() => setIncludeAI(!includeAI)}
              className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                includeAI
                  ? 'bg-purple-50 border-purple-400 text-slate-900'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              <div>
                <div className="font-bold text-xs text-purple-700 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Include AI / LLM / Vector Engine
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">Enterprise RAG, document parsing or smart chat agent</div>
              </div>
              <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                includeAI ? 'bg-purple-600 border-purple-600 text-white' : 'border-slate-300 bg-white'
              }`}>
                {includeAI && <Check className="w-3 h-3 stroke-[3]" />}
              </div>
            </button>

            <button
              onClick={() => setIncludeMobile(!includeMobile)}
              className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                includeMobile
                  ? 'bg-emerald-50 border-emerald-400 text-slate-900'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              <div>
                <div className="font-bold text-xs text-emerald-700 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" />
                  Include Native Mobile Apps (Flutter)
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">Cross-platform iOS & Android apps with offline sync</div>
              </div>
              <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                includeMobile ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-300 bg-white'
              }`}>
                {includeMobile && <Check className="w-3 h-3 stroke-[3]" />}
              </div>
            </button>
          </div>

          {/* Results Summary Box */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50/60 to-sky-50 border border-blue-200 space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2 border-b border-blue-200/80 pb-3">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-blue-700 block">
                  Estimated Timeline
                </span>
                <span className="text-lg sm:text-xl font-display font-extrabold text-slate-900">
                  ~{estimatedMonths} Months ({totalEstimatedWeeks} Sprint Weeks)
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">
                  Code & IP Ownership
                </span>
                <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  100% Client Retained
                </span>
              </div>
            </div>

            <div>
              <span className="text-[11px] font-bold text-slate-800 block mb-1.5">
                Recommended Dedicated Squad Composition:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] text-slate-600">
                {teamSquad.map((member, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    <span>{member}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between flex-wrap gap-3">
          <span className="text-[11px] text-slate-500">
            *Estimates are calculated based on agile sprint benchmarks.
          </span>
          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold text-xs shadow-md shadow-blue-500/25 flex items-center gap-2 cursor-pointer"
          >
            <span>Request Exact Formal Proposal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
