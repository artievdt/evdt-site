import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '../components/common/SectionHeader';
import { HeroDeliveryEngine } from '../components/home/HeroDeliveryEngine';
import { LogoMarquee } from '../components/home/LogoMarquee';
import { ThreeSystemsEngine } from '../components/home/ThreeSystemsEngine';
import { OperatingSystemPreview } from '../components/home/OperatingSystemPreview';
import { IndustrySectorsGrid } from '../components/home/IndustrySectorsGrid';
import { ClientImpactCarousel } from '../components/home/ClientImpactCarousel';
import { servicesData } from '../data/servicesData';
import { productsData } from '../data/productsData';
import { techDirectoryData, blogPostsData } from '../data/resourcesData';
import { whyChooseEVD } from '../data/aboutData';
import {
  ArrowRight,
  Sparkles,
  Code2,
  Layers,
  Building2,
  Cpu,
  Globe,
  CheckCircle2,
  ShieldCheck,
  ChevronRight,
  Zap,
  TrendingUp,
  Award,
  Users,
  Server,
  Cloud,
  Lock,
  GitBranch,
  Terminal
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
  onOpenEstimator: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenEstimator
}) => {
  const [selectedTechCategory, setSelectedTechCategory] = useState<'All' | 'Frontend' | 'Backend' | 'Mobile' | 'Cloud & DevOps' | 'AI & Data'>('All');
  const [activeProcessStep, setActiveProcessStep] = useState(0);

  const processSteps = [
    { num: '01', title: 'Discover', desc: 'Deep architectural discovery, technical constraint auditing, user persona definition, and SRS/FRD specification.', deliverable: 'Technical Discovery SRS & Roadmap' },
    { num: '02', title: 'Define', desc: 'Data schema modeling, cloud VPC boundary setup, security threat modeling, and milestone roadmap alignment.', deliverable: 'VPC Architecture & DB Schema Model' },
    { num: '03', title: 'Design', desc: 'High-fidelity Figma UI design systems, tokenized design variables, and accessible user interaction prototyping.', deliverable: 'Interactive Figma Prototype & Design Tokens' },
    { num: '04', title: 'Develop', desc: 'Type-safe sprint engineering across frontend, backend, and mobile with bi-weekly working demonstrations.', deliverable: 'Bi-Weekly Live Demos & Clean Commits' },
    { num: '05', title: 'Test', desc: 'Automated regression suites, load testing up to 50k concurrency, and CERT-In vulnerability assessments.', deliverable: 'Automated Test Suites & Security Report' },
    { num: '06', title: 'Deploy', desc: 'Zero-downtime blue/green cloud rollout on AWS/GCP with automated DNS cutover and APM telemetry.', deliverable: 'Zero-Downtime Blue/Green Production Cutover' },
    { num: '07', title: 'Scale', desc: 'Continuous performance profiling, SLA-backed 24/7 AMC maintenance, and agile roadmap enhancements.', deliverable: '24/7 SLA Telemetry & Optimization' }
  ];

  const fourPillars = [
    {
      title: 'Core Software Engineering',
      desc: 'Bespoke enterprise applications, scalable Next.js web platforms, cross-platform Flutter mobile apps, and legacy monolith decoupling.',
      icon: Code2,
      href: '/services/custom-software-development',
      color: 'text-red-600',
      bg: 'bg-red-50 border-red-200'
    },
    {
      title: 'Enterprise ERP & CRM Systems',
      desc: 'Custom operational control suites uniting multi-warehouse inventory, automated procurement, GST invoicing, and payroll without user seat taxes.',
      icon: Building2,
      href: '/services/erp-crm',
      color: 'text-indigo-600',
      bg: 'bg-indigo-50 border-indigo-200'
    },
    {
      title: 'AI, Data & Cloud Architecture',
      desc: 'Enterprise RAG knowledge assistants, predictive machine learning pipelines, high-availability AWS/GCP cloud, and real-time BI telemetry.',
      icon: Cpu,
      href: '/services/ai-ml',
      color: 'text-amber-600',
      bg: 'bg-amber-50 border-amber-200'
    },
    {
      title: 'Products & Digital Growth',
      desc: 'Proprietary product engines (LMS, Fleet TMS, Quick Commerce, AI Voice) plus technical SEO and high-ROI B2B performance marketing.',
      icon: TrendingUp,
      href: '/products',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50 border-emerald-200'
    }
  ];

  const filteredTech = selectedTechCategory === 'All'
    ? techDirectoryData.slice(0, 12)
    : techDirectoryData.filter(t => t.category === selectedTechCategory);

  return (
    <div id="homepage-root" className="w-full space-y-16 sm:space-y-24 overflow-hidden pb-16">
      {/* 1. HERO DELIVERY ENGINE */}
      <HeroDeliveryEngine
        onNavigate={onNavigate}
        onOpenConsultation={onOpenConsultation}
        onOpenEstimator={onOpenEstimator}
      />

      {/* 2. INFINITE LOGO MARQUEE */}
      <LogoMarquee />

      {/* 3. THREE CORE SYSTEMS ENGINE (Dark Cyber Console: Aura, CosmOS, Horizon) */}
      <ThreeSystemsEngine
        onOpenConsultation={onOpenConsultation}
        onNavigate={onNavigate}
      />

      {/* 4. ENTERPRISE OPERATING SYSTEM & CX SIMULATOR (Dark Midnight OS Mode with 3D Illustration) */}
      <OperatingSystemPreview
        onOpenConsultation={onOpenConsultation}
        onNavigate={onNavigate}
      />

      {/* 5. MEASURABLE CLIENT IMPACT & SUCCESS STORIES CAROUSEL (Light Mode) */}
      <ClientImpactCarousel
        onOpenConsultation={onOpenConsultation}
        onNavigate={onNavigate}
      />

      {/* 6. DOMAIN VERTICALS & INDUSTRY SECTORS (Light Mode) */}
      <IndustrySectorsGrid
        onNavigate={onNavigate}
        onOpenConsultation={onOpenConsultation}
      />

      {/* 7. FOUR STRATEGIC PILLARS (Light Mode with Motion) */}
      <section id="what-we-do" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Enterprise Capabilities"
          title="Engineered for"
          highlightedWord="Business Impact"
          subtitle="Four core engineering pillars uniting bespoke software, operational ERPs, artificial intelligence, and proprietary product accelerators."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {fourPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="rounded-3xl bg-white border border-slate-200/90 p-6 flex flex-col justify-between hover:border-red-400 hover:shadow-xl hover:shadow-red-500/10 transition-all group card-hover-lift"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${pillar.bg} border flex items-center justify-center ${pillar.color} mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <button
                  onClick={() => onNavigate(pillar.href)}
                  className="mt-6 text-xs font-bold text-red-600 hover:text-red-800 flex items-center gap-1.5 cursor-pointer pt-4 border-t border-slate-100"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* 8. FEATURED SERVICES (Light Mode) */}
      <section id="featured-services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            badge="Engineering Portfolio"
            title="Comprehensive"
            highlightedWord="Technology Services"
            subtitle="From bespoke software engineering to GenAI agents and cloud modernization, we deliver end-to-end technical excellence."
            align="left"
          />
          <button
            onClick={() => onNavigate('/services')}
            className="self-start md:self-auto px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-red-700 border border-slate-300 shadow-2xs text-xs font-bold transition-all flex items-center gap-2 cursor-pointer hover:border-red-400"
          >
            <span>View All 13 Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            visible: { transition: { staggerChildren: 0.08 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesData.slice(0, 6).map((service) => (
            <motion.div
              key={service.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="rounded-3xl bg-white border border-slate-200/90 p-6 flex flex-col justify-between hover:border-red-300 hover:shadow-xl hover:shadow-red-500/10 transition-all group card-hover-lift"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2.5 py-1 rounded-full bg-red-50 text-red-700 border border-red-200">
                    {service.category}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-600">
                    <Code2 className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base font-display font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
                  {service.shortDescription}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {service.technologies.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-700 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate(`/services/${service.slug}`)}
                  className="text-xs font-bold text-red-600 hover:text-red-800 flex items-center gap-1 cursor-pointer"
                >
                  <span>Deep Dive Spec</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
                <span className="text-[10px] text-slate-500 font-mono font-medium">100% Client IP</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 9. READY-TO-DEPLOY PRODUCTS & ACCELERATORS (DARK THEME SECTION) */}
      <section id="products-accelerators" className="w-full bg-[#0B132B] text-white py-16 sm:py-24 border-y border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeader
              isDark={true}
              badge="Ready-to-Deploy Accelerators"
              title="Battle-Tested"
              highlightedWord="Enterprise Products"
              subtitle="Proprietary white-label software frameworks that accelerate delivery by 50% without per-user licensing restrictions."
              align="left"
            />
            <button
              onClick={() => onNavigate('/products')}
              className="self-start md:self-auto px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-700 hover:to-rose-800 text-white font-bold text-xs shadow-lg shadow-red-600/30 flex items-center gap-2 cursor-pointer transition-all hover:scale-102"
            >
              <span>Explore All 9 Products</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {productsData.slice(0, 3).map((product) => (
              <motion.div
                key={product.id}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 flex flex-col justify-between hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/10 transition-all group card-hover-lift"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/30">
                      {product.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">{product.category}</span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-white group-hover:text-red-400 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {product.shortDescription}
                  </p>

                  <div className="mt-4 space-y-2 border-t border-slate-800 pt-3 text-xs">
                    {product.businessBenefits.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-2 text-slate-300">
                        <span className="font-mono font-bold text-red-400 text-[11px] shrink-0">{b.metric || '•'}</span>
                        <span className="text-[11px]">{b.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate(`/products/${product.slug}`)}
                    className="text-xs font-bold text-red-400 hover:text-red-300 flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={onOpenConsultation}
                    className="text-[11px] font-mono font-bold text-slate-300 hover:text-white px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 hover:border-red-500/50 cursor-pointer transition-all"
                  >
                    Live Demo
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 10. AGILE METHODOLOGY 7-STAGE PROCESS (LIGHT THEME WITH 3D ILLUSTRATION INTEGRATION) */}
      <section id="engineering-process" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SectionHeader
          badge="Agile Methodology"
          title="From Concept to"
          highlightedWord="Continuous Scale"
          subtitle="Our 7-stage engineering lifecycle guarantees predictable milestones, rigorous automated testing, and transparent progress."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Process Steps */}
          <div className="lg:col-span-5 space-y-2.5">
            {processSteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveProcessStep(idx)}
                className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                  activeProcessStep === idx
                    ? 'bg-red-50/90 border-red-500 text-slate-900 shadow-sm font-semibold scale-101'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`font-mono font-bold text-xs ${activeProcessStep === idx ? 'text-red-600' : 'text-slate-400'}`}>
                    {step.num}
                  </span>
                  <span className="font-bold text-sm text-slate-900">{step.title}</span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${activeProcessStep === idx ? 'rotate-90 text-red-600' : 'text-slate-400'}`} />
              </button>
            ))}
          </div>

          {/* Right Column: Detailed Phase with 3D Visual */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top 3D Lifecycle Illustration Card */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg relative bg-slate-950 group">
              <img
                src="/src/assets/images/evd_agile_lifecycle_1787745869605.jpg"
                alt="EVD Agile 7-Stage Engineering Lifecycle 3D Diagram"
                referrerPolicy="no-referrer"
                className="w-full h-56 sm:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-white font-mono">
                <span className="font-bold text-red-400 flex items-center gap-1.5">
                  <GitBranch className="w-4 h-4 text-red-500" />
                  EVD Agile Framework
                </span>
                <span className="bg-white/20 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px]">
                  Bi-Weekly Sprints & CI/CD
                </span>
              </div>
            </div>

            {/* Bottom Active Phase Details */}
            <motion.div
              key={activeProcessStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-wider bg-red-50 px-2.5 py-1 rounded-md border border-red-200">
                    Phase {processSteps[activeProcessStep].num} • {processSteps[activeProcessStep].title}
                  </span>
                  <span className="text-xs font-mono text-slate-400">7-Day Sprint Cycles</span>
                </div>

                <h3 className="text-2xl font-display font-extrabold text-slate-900">
                  {processSteps[activeProcessStep].title} Phase Architecture
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {processSteps[activeProcessStep].desc}
                </p>

                <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-red-600" />
                    <span>Primary Milestone Output:</span>
                    <span className="font-mono text-red-700 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                      {processSteps[activeProcessStep].deliverable}
                    </span>
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    onClick={onOpenConsultation}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold text-xs shadow-md shadow-red-500/25 flex items-center gap-2 cursor-pointer transition-all hover:scale-102"
                  >
                    <span>Discuss Your Project Timeline</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 11. TECHNOLOGY ECOSYSTEM & CLOUD INFRASTRUCTURE (DARK THEME WITH 3D ILLUSTRATION) */}
      <section id="technology-ecosystem" className="w-full bg-[#060B18] text-white py-16 sm:py-24 border-y border-slate-800 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          <SectionHeader
            isDark={true}
            badge="Engineering Stack"
            title="Battle-Tested"
            highlightedWord="Modern Technology Stack"
            subtitle="We engineer across verified modern frameworks, multi-cloud architectures (AWS, GCP), and scalable databases with zero vendor lock-in."
          />

          {/* 3D Isometric Technology & Cloud Architecture Visual */}
          <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative bg-slate-950 group">
            <img
              src="/src/assets/images/evd_tech_cloud_1787745883193.jpg"
              alt="EVD Multi-Cloud and Modern Tech Architecture 3D Ecosystem"
              referrerPolicy="no-referrer"
              className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060B18] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-2 bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-slate-700">
                <Server className="w-4 h-4 text-cyan-400" />
                <span className="text-slate-200">AWS ECS • Google Cloud Kubernetes • Cloudflare Edge</span>
              </div>
              <div className="flex items-center gap-2 bg-red-500/20 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-red-500/30 text-red-300">
                <Lock className="w-4 h-4 text-red-400" />
                <span>Zero-Trust Security & SOC2 Compliant</span>
              </div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center flex-wrap gap-2">
            {(['All', 'Frontend', 'Backend', 'Mobile', 'Cloud & DevOps', 'AI & Data'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedTechCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                  selectedTechCategory === cat
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Filtered Technology Cards */}
          <motion.div
            key={selectedTechCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {filteredTech.map((tech, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg hover:border-red-500/50 hover:shadow-red-500/10 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-xs text-white group-hover:text-red-400 transition-colors">{tech.name}</span>
                    <span className="text-[10px] font-mono text-red-300 bg-red-500/20 px-2 py-0.5 rounded border border-red-500/30 font-bold">
                      {tech.experienceYears}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-800 flex flex-wrap gap-1">
                  {tech.popularFor.slice(0, 2).map((pf, pIdx) => (
                    <span key={pIdx} className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-slate-950 text-slate-400 border border-slate-800">
                      {pf}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          <div className="text-center pt-2">
            <button
              onClick={() => onNavigate('/resources')}
              className="text-xs font-bold text-red-400 hover:text-red-300 inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>Explore Full 24+ Technology Directory & Benchmarks</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 12. FINAL CONVERSION CTA BANNER */}
      <section id="final-cta" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-gradient-to-r from-red-600 via-rose-600 to-[#0B132B] p-8 sm:p-12 lg:p-16 text-center space-y-6 relative overflow-hidden shadow-2xl text-white"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/15 text-white border border-white/25 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Have an Engineering Challenge?</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Let&apos;s Build Something Scalable & Groundbreaking Together.
          </h2>

          <p className="text-xs sm:text-sm text-red-100 max-w-2xl mx-auto leading-relaxed">
            Talk directly to our Senior Technical Architects. We provide complete milestone roadmaps, fixed-price or dedicated team flexibility, and 100% intellectual property sovereignty.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-900 hover:bg-slate-50 font-extrabold text-sm shadow-xl transition-all cursor-pointer hover:scale-105 active:scale-95"
            >
              Book Free Discovery Call
            </button>
            <button
              onClick={() => onNavigate('/contact')}
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold text-sm transition-all cursor-pointer hover:scale-105 active:scale-95"
            >
              Contact Our Engineers
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

