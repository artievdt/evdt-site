import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeader } from '../components/common/SectionHeader';
import { lifeAtEVD, jobOpeningsData, internshipPrograms } from '../data/careersData';
import { JobOpening } from '../types';
import {
  Briefcase,
  Sparkles,
  MapPin,
  Clock,
  CheckCircle2,
  Send,
  X,
  ArrowRight,
  Code,
  GraduationCap,
  Heart,
  Smile,
  TrendingUp,
  Cpu,
  BookOpen
} from 'lucide-react';

interface CareersViewProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const CareersView: React.FC<CareersViewProps> = ({ onNavigate, onOpenConsultation }) => {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [applySuccess, setApplySuccess] = useState(false);
  const [applicantForm, setApplicantForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    portfolio: '',
    experience: '3–5 Years',
    coverNote: ''
  });

  const handleApply = (job: JobOpening) => {
    setSelectedJob(job);
    setApplySuccess(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplySuccess(true);
  };

  return (
    <div id="careers-view-root" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Hero */}
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-xs font-mono font-bold text-red-700 shadow-2xs"
        >
          <Sparkles className="w-4 h-4 text-red-600" />
          <span>Engineering Careers at EVD Technology</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight"
        >
          Build Mission-Critical Software Alongside Exceptional Engineers
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-sm sm:text-base text-slate-600 leading-relaxed"
        >
          {lifeAtEVD.description}
        </motion.p>
      </div>

      {/* Perks & Culture */}
      <div className="space-y-6">
        <SectionHeader
          badge="Life at EVD"
          title="Why Exceptional Builders"
          highlightedWord="Thrive Here"
          subtitle="A high-trust engineering culture focused on craft, autonomy, and continuous intellectual development."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            visible: { transition: { staggerChildren: 0.08 } }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {lifeAtEVD.perks.map((perk, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-2xs space-y-2 card-hover-lift hover:border-red-300 transition-all"
            >
              <div className="w-10 h-10 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 mb-3">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-slate-900 font-display">{perk.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{perk.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Open Positions */}
      <div className="space-y-6">
        <SectionHeader
          badge="Current Openings"
          title="Explore High-Impact"
          highlightedWord="Engineering Roles"
          subtitle="Join our core development center in Raipur or collaborate in our hybrid engineering squads."
        />

        <div className="space-y-4">
          {jobOpeningsData.map((job) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-red-300 shadow-2xs hover:shadow-xl hover:shadow-red-500/10 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 card-hover-lift"
            >
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">
                    {job.department}
                  </span>
                  <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-red-600" /> {job.location}
                  </span>
                  <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3 text-red-600" /> {job.experience}
                  </span>
                </div>

                <h3 className="text-lg font-display font-bold text-slate-900">
                  {job.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {job.skills.map((s, sIdx) => (
                    <span key={sIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-700 font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="shrink-0">
                <button
                  onClick={() => handleApply(job)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-700 hover:to-rose-800 text-white font-bold text-xs shadow-md shadow-red-600/25 flex items-center gap-2 cursor-pointer transition-all hover:scale-102 w-full md:w-auto justify-center"
                >
                  <span>Apply for this Role</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Internship & Trainee Academy */}
      <div className="space-y-6">
        <SectionHeader
          badge="Future Talent"
          title="Engineering Trainee &"
          highlightedWord="Internship Tracks"
          subtitle="Structured 6-month intensive training on live enterprise systems with pre-placement offers (PPO)."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {internshipPrograms.map((prog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4 card-hover-lift hover:border-red-300 transition-colors"
            >
              <div className="flex items-center gap-2 text-red-600">
                <GraduationCap className="w-5 h-5" />
                <h4 className="font-bold text-base text-slate-900 font-display">{prog.role}</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{prog.description}</p>
              <div className="space-y-1.5 text-xs text-slate-600">
                <div><strong className="text-slate-900">Duration:</strong> {prog.duration}</div>
                <div><strong className="text-slate-900">Perks:</strong> {prog.stipend}</div>
              </div>
              <div className="pt-2">
                <span className="text-[10px] uppercase font-mono font-bold text-slate-500 block mb-1.5">Learning Tracks:</span>
                <div className="flex flex-wrap gap-1.5">
                  {prog.tracks.map((t, tIdx) => (
                    <span key={tIdx} className="text-[10px] px-2 py-0.5 rounded bg-red-50 border border-red-200 text-red-700 font-mono font-bold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Apply Modal */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden text-slate-900 relative"
            >
              <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-slate-50/80">
                <div>
                  <h3 className="font-display font-bold text-sm text-slate-900">
                    Apply: {selectedJob.title}
                  </h3>
                  <p className="text-xs text-red-600 font-medium">{selectedJob.location} • {selectedJob.experience}</p>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-700 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {applySuccess ? (
                <div className="p-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Application Received!</h4>
                  <p className="text-xs text-slate-600">
                    Thank you, {applicantForm.fullName}. Our engineering hiring team will review your portfolio and reach out for the initial technical screening.
                  </p>
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="px-5 py-2 rounded-xl bg-red-600 text-white font-bold text-xs shadow-md shadow-red-500/25 cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="p-6 space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-slate-700 font-bold">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Aman Verma"
                        value={applicantForm.fullName}
                        onChange={(e) => setApplicantForm({ ...applicantForm, fullName: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-red-600"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-slate-700 font-bold">Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="aman@example.com"
                        value={applicantForm.email}
                        onChange={(e) => setApplicantForm({ ...applicantForm, email: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-red-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-slate-700 font-bold">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={applicantForm.phone}
                        onChange={(e) => setApplicantForm({ ...applicantForm, phone: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-red-600"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-slate-700 font-bold">GitHub / Portfolio / LinkedIn URL *</label>
                      <input
                        type="url"
                        required
                        placeholder="https://github.com/..."
                        value={applicantForm.portfolio}
                        onChange={(e) => setApplicantForm({ ...applicantForm, portfolio: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-red-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-slate-700 font-bold">Brief Introduction / Tech Stack Experience</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about the most complex system or application you have built..."
                      value={applicantForm.coverNote}
                      onChange={(e) => setApplicantForm({ ...applicantForm, coverNote: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-red-600 resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedJob(null)}
                      className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-semibold cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white font-bold text-xs flex items-center gap-2 shadow-md shadow-red-600/25 cursor-pointer hover:scale-102 transition-all"
                    >
                      <span>Submit Application</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

