import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '../components/common/SectionHeader';
import { officeLocations } from '../data/locationsData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Sparkles,
  Send,
  CheckCircle2,
  ShieldCheck,
  Building2,
  MessageSquare
} from 'lucide-react';

interface ContactViewProps {
  onNavigate: (path: string) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: 'Custom Software Development',
    budgetRange: '$5,000 – $15,000 (₹4L – ₹12L)',
    timeline: '1–2 Months',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div id="contact-view-root" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <SectionHeader
        badge="Direct Technical Inquiries"
        title="Start Your Project with"
        highlightedWord="EVD Technology"
        subtitle="Speak directly with our senior technology architects. We evaluate your requirements under strict mutual NDA and provide an architectural blueprint within 24 hours."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xl space-y-6"
        >
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <h3 className="text-lg font-display font-bold text-slate-900">Project Scope & Consultation Form</h3>
              <p className="text-xs text-slate-500">All submissions are protected by strict Non-Disclosure Agreements.</p>
            </div>
            <span className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> 100% Confidential
            </span>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 text-center space-y-4"
            >
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-display font-bold text-slate-900">Thank You, {formData.fullName}!</h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Your inquiry has been routed to our Lead Architecture squad. You will receive a formal response and discovery call invite within <span className="text-red-700 font-bold">4 business hours</span>.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 cursor-pointer"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-slate-700 font-bold">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Patel"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-slate-700 font-bold">Company / Organization *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Skyline Logistics Ltd."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-slate-700 font-bold">Business Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="ramesh@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-slate-700 font-bold">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 91799 44409"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-slate-700 font-bold">Area of Service</label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-red-600"
                  >
                    <option value="Custom Software Development">Custom Software Development</option>
                    <option value="SaaS Product Engineering">SaaS Product Engineering</option>
                    <option value="Web / Mobile App Development">Web & Mobile Apps</option>
                    <option value="Custom ERP & CRM Suite">Custom ERP & CRM Suite</option>
                    <option value="AI & Machine Learning">AI, LLM & RAG Engine</option>
                    <option value="EVD Academy (LMS)">EVD Academy LMS & DRM</option>
                    <option value="Dedicated Engineering Squad">Dedicated Squad / ODC</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-slate-700 font-bold">Budget Range</label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-red-600"
                  >
                    <option value="Under $5,000 (< ₹4 Lakhs)">Under $5,000 (&lt; ₹4 Lakhs)</option>
                    <option value="$5,000 – $15,000 (₹4L – ₹12L)">$5,000 – $15,000 (₹4L – ₹12L)</option>
                    <option value="$15,000 – $35,000 (₹12L – ₹30L)">$15,000 – $35,000 (₹12L – ₹30L)</option>
                    <option value="$35,000+ (₹30L+ Enterprise)">$35,000+ (₹30L+ Enterprise)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-slate-700 font-bold">Expected Timeline</label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-red-600"
                  >
                    <option value="Immediate (Under 1 Month)">Immediate (&lt; 1 Month)</option>
                    <option value="1–2 Months">1–2 Months</option>
                    <option value="2–4 Months">2–4 Months</option>
                    <option value="4+ Months / Continuous">4+ Months / Continuous</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-slate-700 font-bold">Describe Your Technical Scope or Bottleneck</label>
                <textarea
                  rows={4}
                  placeholder="Outline key system features, target user volume, legacy system integration requirements, or architectural objectives..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-700 hover:to-rose-800 text-white font-bold text-xs shadow-md shadow-red-600/25 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-101"
              >
                <span>Submit Technical Scope Inquiry</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </motion.div>

        {/* Right Column: Office Info & Direct Channels */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-5 space-y-6"
        >
          {/* Raipur HQ Card */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">
                Corporate Headquarters & Tech Hub
              </span>
              <span className="text-xs text-slate-500 font-medium">Raipur, CG, India</span>
            </div>

            <h4 className="text-lg font-display font-bold text-slate-900">
              EVD Technology Hub
            </h4>

            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span>EVD Technology Hub, Raipur, Chhattisgarh, India - 492001</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-red-600 shrink-0" />
                <a href="tel:+919179944409" className="hover:text-red-600 font-bold text-slate-900 transition-colors">+91 91799 44409</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-red-600 shrink-0" />
                <a href="mailto:contact@evdtechnology.com" className="hover:text-red-600 transition-colors">contact@evdtechnology.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-red-600 shrink-0" />
                <a href="mailto:arti.evdt@gmail.com" className="hover:text-red-600 transition-colors">arti.evdt@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-red-600 shrink-0" />
                <span>Monday – Saturday: 9:30 AM – 6:30 PM IST</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <a
                href="https://wa.me/919179944409"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp (+91 91799 44409)</span>
              </a>
            </div>
          </div>

          {/* Quick FAQ / Assurances */}
          <div className="p-6 rounded-3xl bg-red-50/40 border border-red-200/80 space-y-3 text-xs text-slate-700 shadow-2xs">
            <h5 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] font-mono">What Happens Next?</h5>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="font-mono text-red-600 font-bold">1.</span>
                <span>We review your requirements and sign a mutual NDA.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-red-600 font-bold">2.</span>
                <span>A 30-minute technical discovery call with our Lead Architect.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-red-600 font-bold">3.</span>
                <span>You receive a structured architectural proposal and sprint roadmap.</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

