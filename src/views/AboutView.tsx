import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '../components/common/SectionHeader';
import { TrustBadgeBar } from '../components/common/TrustBadgeBar';
import { legacyMilestones, whyChooseEVD, coreValues, securityAndDelivery, leadershipTeam } from '../data/aboutData';
import { officeLocations } from '../data/locationsData';
import {
  Award,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Users,
  Target,
  Eye,
  Heart,
  Building2,
  ArrowRight,
  MapPin,
  Lock,
  Server,
  Layers
} from 'lucide-react';

interface AboutViewProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div id="about-view-root" className="w-full space-y-20 sm:space-y-28 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-xs font-mono font-bold text-red-700 shadow-2xs"
        >
          <Award className="w-4 h-4 text-red-600" />
          <span>Established 2014 • Over A Decade of Engineering Rigor</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto"
        >
          We engineer software that powers{' '}
          <span className="bg-gradient-to-r from-red-600 via-rose-600 to-[#0B132B] bg-clip-text text-transparent">
            critical enterprises and public systems.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm sm:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed"
        >
          EVD Technology is an enterprise software engineering, AI, and digital transformation company. We bridge complex domain problems with robust, scalable software architectures — guaranteeing complete code ownership and zero vendor lock-in.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-4 flex items-center justify-center gap-4 flex-wrap"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenConsultation}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-700 hover:to-rose-800 text-white font-bold text-xs shadow-lg shadow-red-600/25 flex items-center gap-2 cursor-pointer transition-all"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span>Consult Our Architects</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onNavigate('/case-studies')}
            className="px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-xs transition-all cursor-pointer shadow-2xs hover:border-red-300"
          >
            <span>View Verified Case Studies</span>
          </motion.button>
        </motion.div>
      </section>

      {/* Trust Proof Bar */}
      <TrustBadgeBar />

      {/* 2. MISSION, VISION & CORE VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4 card-hover-lift hover:border-red-300 transition-colors"
          >
            <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display font-bold text-slate-900">Our Mission</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To deliver resilient, enterprise-grade software products and AI systems that solve real operational bottlenecks, accelerate business growth, and grant organizations 100% intellectual property sovereignty.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4 card-hover-lift hover:border-slate-300 transition-colors"
          >
            <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-900">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display font-bold text-slate-900">Our Vision</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To be the most trusted global technology partner for ambitious enterprises and state institutions — recognized for technical discipline, zero-defect engineering, and transformative product accelerators.
            </p>
          </motion.div>
        </div>

        {/* 4 Values */}
        <div className="space-y-6">
          <SectionHeader
            badge="Engineering DNA"
            title="Our Foundational"
            highlightedWord="Core Values"
            subtitle="The principles that guide every architecture decision, code review, and customer partnership."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={{
              visible: { transition: { staggerChildren: 0.08 } }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"
          >
            {coreValues.map((val, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-2xs space-y-3 card-hover-lift hover:border-red-300 transition-all"
              >
                <div className="text-red-600 font-bold text-sm font-mono">0{idx + 1}.</div>
                <h4 className="text-base font-display font-bold text-slate-900">{val.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{val.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. 10+ YEARS LEGACY & MILESTONES */}
      <section id="legacy-timeline" className="w-full bg-slate-100/70 border-y border-slate-200/80 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <SectionHeader
            badge="The EVD Journey"
            title="A Decade of"
            highlightedWord="Verified Milestones"
            subtitle="How we evolved from foundational software engineering into high-concurrency public sector platforms, proprietary SaaS engines, and enterprise AI."
          />

          <div className="relative border-l-2 border-slate-300 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
            {legacyMilestones.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-4 h-4 rounded-full bg-white border-2 border-red-600 group-hover:bg-red-600 transition-colors shadow-xs" />

                <div className="p-5 rounded-3xl bg-white border border-slate-200/90 hover:border-red-300 shadow-2xs hover:shadow-md transition-all space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-red-700 bg-red-50 px-2.5 py-0.5 rounded border border-red-200">
                      {m.year}
                    </span>
                    <h4 className="text-base font-display font-bold text-slate-900">{m.title}</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{m.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GLOBAL DELIVERY & SECURITY FRAMEWORK */}
      <section id="delivery-model" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          badge="Operational Rigor"
          title="Global Delivery &"
          highlightedWord="Security Framework"
          subtitle="How EVD Technology ensures enterprise data confidentiality, uptime guarantees, and agile velocity."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-2xs space-y-3 card-hover-lift hover:border-red-300 transition-colors"
          >
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-base font-display font-bold text-slate-900">CERT-In & Data Compliance</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              All production architectures undergo strict vulnerability assessment and penetration testing (VAPT), adhere to OWASP Top 10 security standards, and are prepared for CERT-In empanelled audits.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-2xs space-y-3 card-hover-lift hover:border-red-300 transition-colors"
          >
            <div className="w-10 h-10 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600">
              <Server className="w-5 h-5" />
            </div>
            <h4 className="text-base font-display font-bold text-slate-900">Dedicated ODC & Offshore Squads</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Seamlessly extend your engineering bandwidth with pre-vetted senior architects, full-stack engineers, and QA leads operating inside secure virtual private networks (VPC) with biometric office controls.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-2xs space-y-3 card-hover-lift hover:border-slate-400 transition-colors"
          >
            <div className="w-10 h-10 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800">
              <Lock className="w-5 h-5" />
            </div>
            <h4 className="text-base font-display font-bold text-slate-900">100% IP & Source Ownership</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              From day one, all repositories, cloud credentials, database assets, and proprietary logic belong 100% to our client. We sign binding NDAs and IP assignment deeds prior to kickoff.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. LOCATIONS & HEADQUARTERS */}
      <section className="w-full bg-slate-100/70 border-t border-slate-200/80 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <SectionHeader
            badge="Physical Presence"
            title="Our Development Center &"
            highlightedWord="Global Operations"
            subtitle="Headquartered in Raipur, Chhattisgarh, delivering software engineering solutions worldwide."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {officeLocations.map((loc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-2xs space-y-3 hover:border-red-300 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold font-display text-slate-900">{loc.city}</span>
                  {loc.isHQ && (
                    <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-red-50 text-red-700 border border-red-200">
                      Corporate HQ
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-600">{loc.address}</p>
                <div className="pt-2 border-t border-slate-100 text-xs text-slate-600 space-y-1">
                  <div><strong>Phone:</strong> {loc.phone}</div>
                  <div><strong>Email:</strong> {loc.email}</div>
                  <div><strong>Working Hours:</strong> {loc.timings}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

