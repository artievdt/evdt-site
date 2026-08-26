import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeader } from '../components/common/SectionHeader';
import { productsData } from '../data/productsData';
import { ProductItem } from '../types';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  ArrowLeft,
  Building2,
  Smartphone,
  Layers,
  Cpu,
  BarChart3,
  Server,
  Play
} from 'lucide-react';

interface ProductsViewProps {
  selectedProductSlug?: string;
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const ProductsView: React.FC<ProductsViewProps> = ({
  selectedProductSlug,
  onNavigate,
  onOpenConsultation
}) => {
  const activeProduct = selectedProductSlug
    ? productsData.find(p => p.slug === selectedProductSlug)
    : null;

  const [activeDemoTab, setActiveDemoTab] = useState<number>(0);

  // PRODUCT DEEP DIVE VIEW
  if (activeProduct) {
    return (
      <div id="product-detail-root" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Navigation Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center justify-between"
        >
          <button
            onClick={() => onNavigate('/products')}
            className="inline-flex items-center gap-2 text-xs font-bold text-red-600 hover:text-red-800 cursor-pointer transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Products</span>
          </button>
          <span className="text-xs text-slate-500 font-mono">
            Products / {activeProduct.category} / {activeProduct.name}
          </span>
        </motion.div>

        {/* Hero Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-red-50 via-rose-50/60 to-slate-100 border border-red-200/90 shadow-sm space-y-6 relative overflow-hidden"
        >
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] uppercase font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-red-100 text-red-800 border border-red-300">
              {activeProduct.badge} • {activeProduct.category}
            </span>
            <span className="text-xs text-emerald-700 font-bold flex items-center gap-1 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5" /> 100% White-Label & Source Code Included
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            {activeProduct.name}
          </h1>

          <p className="text-base sm:text-lg text-red-700 font-bold max-w-3xl">
            {activeProduct.tagline}
          </p>

          <p className="text-sm sm:text-base text-slate-700 max-w-3xl leading-relaxed">
            {activeProduct.fullDescription}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenConsultation}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-700 hover:to-rose-800 text-white font-bold text-xs shadow-lg shadow-red-600/25 flex items-center gap-2 cursor-pointer transition-all"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Book Live Interactive Product Demo</span>
            </motion.button>
            <span className="text-xs text-slate-600 font-medium">Zero Per-User Licensing Taxes</span>
          </div>
        </motion.div>

        {/* Business Impact Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {activeProduct.businessBenefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1 text-center sm:text-left card-hover-lift"
            >
              <div className="text-2xl font-display font-extrabold text-red-700">{benefit.metric || '100%'}</div>
              <div className="text-xs font-bold text-slate-900">{benefit.title}</div>
              <div className="text-[11px] text-slate-600 leading-relaxed">{benefit.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Mock UI Console Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xl space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <div className="text-xs uppercase font-mono font-bold text-red-600 tracking-wider flex items-center gap-1.5">
                <Play className="w-3.5 h-3.5 fill-red-600" />
                Live Architecture & Workflow Simulator
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900 mt-0.5">
                {activeProduct.name} - System Operator Console
              </h3>
            </div>

            {/* Feature Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              {activeProduct.keyFeatures.slice(0, 4).map((f, fIdx) => (
                <button
                  key={fIdx}
                  onClick={() => setActiveDemoTab(fIdx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    activeDemoTab === fIdx
                      ? 'bg-red-600 text-white font-bold shadow-md shadow-red-600/20'
                      : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
                  }`}
                >
                  {f.title}
                </button>
              ))}
            </div>
          </div>

          {/* Active Tab Simulation Screen */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDemoTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-2xl bg-red-50/40 border border-red-200/70 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-slate-900">
                  {activeProduct.keyFeatures[activeDemoTab]?.title || activeProduct.keyFeatures[0]?.title}
                </span>
                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold">
                  Active Simulation Engine
                </span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-normal">
                {activeProduct.keyFeatures[activeDemoTab]?.description || activeProduct.keyFeatures[0]?.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-red-200/50 text-xs">
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <span className="text-[10px] text-slate-500 uppercase font-mono font-bold block">Latency SLA</span>
                  <span className="text-sm font-bold text-red-700 font-mono">&lt; 150ms Response</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <span className="text-[10px] text-slate-500 uppercase font-mono font-bold block">Security Standard</span>
                  <span className="text-sm font-bold text-emerald-700 font-mono">AES-256 / DRM Encrypted</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <span className="text-[10px] text-slate-500 uppercase font-mono font-bold block">Integrations</span>
                  <span className="text-sm font-bold text-slate-800 font-mono">REST / Webhooks Ready</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* All Features Grid */}
        <div className="space-y-6">
          <h3 className="text-xl font-display font-bold text-slate-900">
            Comprehensive Module Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeProduct.keyFeatures.map((feat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -3 }}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-2xs space-y-2 card-hover-lift hover:border-red-300 transition-all"
              >
                <div className="flex items-center gap-2 text-red-600">
                  <CheckCircle2 className="w-4 h-4" />
                  <h4 className="font-bold text-sm text-slate-900">{feat.title}</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{feat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Target Industries & Workflow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4">
            <h3 className="text-base font-display font-bold text-slate-900">Deployment Workflows & Stages</h3>
            <div className="space-y-3">
              {activeProduct.workflow.map((w, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 font-bold flex items-center justify-center shrink-0 text-[10px]">
                    {w.step || idx + 1}
                  </span>
                  <span className="text-slate-700"><strong>{w.title}:</strong> {w.description}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4">
            <h3 className="text-base font-display font-bold text-slate-900">Target Roles & Verticals</h3>
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 block mb-2">Designed For:</span>
              <div className="flex flex-wrap gap-2">
                {activeProduct.targetIndustries.map((t, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-800 font-semibold">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-3 border-t border-slate-100 text-xs text-slate-600">
              <strong className="text-slate-800">Delivery Model:</strong> Available as a fully managed turnkey deployment or full source-code transfer with white-label IP rights.
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          whileInView={{ scale: [0.98, 1], opacity: [0.8, 1] }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl bg-gradient-to-r from-red-600 via-rose-600 to-[#0B132B] text-center space-y-4 shadow-xl text-white"
        >
          <h3 className="text-2xl font-display font-extrabold text-white">
            Deploy {activeProduct.name} for your organization
          </h3>
          <p className="text-xs sm:text-sm text-red-100 max-w-xl mx-auto">
            Get a tailored architecture roadmap and customized pilot instance set up within 7 business days.
          </p>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3 rounded-full bg-white text-slate-900 hover:bg-slate-50 font-bold text-xs shadow-lg inline-flex items-center gap-2 cursor-pointer transition-all hover:scale-105"
          >
            <span>Request {activeProduct.name} Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    );
  }

  // ALL PRODUCTS OVERVIEW VIEW
  return (
    <div id="products-overview-root" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <SectionHeader
        badge="Enterprise Accelerators"
        title="Ready-to-Deploy Proprietary"
        highlightedWord="Product Ecosystem"
        subtitle="Accelerate your time-to-market by 50% with our customizable enterprise platforms, backed by 100% IP ownership."
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
        {productsData.map((product) => (
          <motion.div
            key={product.id}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 }
            }}
            className="rounded-3xl bg-white border border-slate-200/90 p-6 flex flex-col justify-between hover:border-red-300 hover:shadow-xl hover:shadow-red-500/10 transition-all group card-hover-lift"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">
                  {product.badge}
                </span>
                <span className="text-xs text-slate-500 font-medium">{product.category}</span>
              </div>

              <h3 className="text-lg font-display font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                {product.name}
              </h3>

              <p className="text-xs text-red-600 font-bold mt-1">
                {product.tagline}
              </p>

              <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
                {product.shortDescription}
              </p>

              <div className="mt-4 space-y-1.5 border-t border-slate-100 pt-3 text-xs">
                {product.businessBenefits.slice(0, 2).map((b, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-700 text-[11px]">
                    <span className="text-red-600 font-mono font-bold">{b.metric || '•'}</span>
                    <span>{b.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => onNavigate(`/products/${product.slug}`)}
                className="text-xs font-bold text-red-600 hover:text-red-800 flex items-center gap-1 cursor-pointer"
              >
                <span>Full Feature & Workflow Spec</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

