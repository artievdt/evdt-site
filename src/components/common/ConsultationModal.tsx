import React, { useState } from 'react';
import { X, Send, Sparkles, CheckCircle2, ShieldCheck, Clock, Phone, Mail } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialProduct?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialService,
  initialProduct
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    interest: initialService || initialProduct || 'Custom Software Engineering',
    budget: '$5,000 – $15,000 (₹4L – ₹12L)',
    timeline: '1–2 Months',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div id="consultation-booking-modal" className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden text-slate-800 relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-200 bg-slate-50/80">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-red-600 to-rose-600 flex items-center justify-center text-white font-bold shadow-md shadow-red-500/25">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-slate-900">
                Schedule a Free Technical Consultation
              </h3>
              <p className="text-xs text-slate-500">
                Connect directly with a Senior Solution Architect. 100% Confidential NDA.
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

        {/* Modal Content */}
        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-display font-bold text-slate-900">
              Thank You, {formData.fullName}!
            </h4>
            <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
              We have received your technical requirement. One of our Senior Technology Architects will review your details and reach out to you within <span className="text-blue-600 font-bold">4 business hours</span> via email and WhatsApp.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-left max-w-md mx-auto space-y-1 text-slate-600">
              <div><strong className="text-slate-800">Interest:</strong> {formData.interest}</div>
              <div><strong className="text-slate-800">Timeline:</strong> {formData.timeline}</div>
              <div><strong className="text-slate-800">Direct Contact:</strong> +91 91799 44409 | contact@evdtechnology.com</div>
            </div>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/25 cursor-pointer hover:from-blue-700 hover:to-indigo-800"
            >
              Done & Return to Website
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-slate-700 font-semibold">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-blue-600"
                />
              </div>
              <div className="space-y-1">
                <label className="text-slate-700 font-semibold">Company / Organization *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Enterprises"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-slate-700 font-semibold">Business Email *</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-blue-600"
                />
              </div>
              <div className="space-y-1">
                <label className="text-slate-700 font-semibold">Phone / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label className="text-slate-700 font-semibold">Area of Interest</label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600"
                >
                  <option value="Custom Software Engineering">Custom Software Development</option>
                  <option value="SaaS Product Engineering">SaaS Product Engineering</option>
                  <option value="Web / Mobile App Development">Web & Mobile Apps</option>
                  <option value="Custom ERP & CRM Suite">Custom ERP & CRM Suite</option>
                  <option value="AI & Machine Learning">AI, LLM & RAG Solutions</option>
                  <option value="EVD Academy (LMS)">EVD Academy (EdTech LMS)</option>
                  <option value="Transport Management (TMS)">Transport Management (TMS)</option>
                  <option value="Quick Commerce Platform">Quick Commerce Platform</option>
                  <option value="AI Tele Caller Voice Agent">AI Tele Caller Voice Agent</option>
                  <option value="Dedicated Engineering Squad">Dedicated Team / Staff Augmentation</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-slate-700 font-semibold">Budget Range</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600"
                >
                  <option value="Under $5,000 (< ₹4 Lakhs)">Under $5,000 (&lt; ₹4 Lakhs)</option>
                  <option value="$5,000 – $15,000 (₹4L – ₹12L)">$5,000 – $15,000 (₹4L – ₹12L)</option>
                  <option value="$15,000 – $35,000 (₹12L – ₹30L)">$15,000 – $35,000 (₹12L – ₹30L)</option>
                  <option value="$35,000+ (₹30L+ Enterprise)">$35,000+ (₹30L+ Enterprise)</option>
                  <option value="Dedicated Monthly Retainer">Dedicated Monthly Retainer</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-slate-700 font-semibold">Expected Timeline</label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600"
                >
                  <option value="Immediate (Under 1 Month)">Immediate (&lt; 1 Month)</option>
                  <option value="1–2 Months">1–2 Months</option>
                  <option value="2–4 Months">2–4 Months</option>
                  <option value="4+ Months / Continuous">4+ Months / Continuous</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-slate-700 font-semibold">Brief Project Details / Problem Statement</label>
              <textarea
                rows={3}
                placeholder="Describe your operational bottleneck, desired features, or tech stack preference..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-blue-600 resize-none"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2 text-[11px] text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Non-Disclosure Agreement (NDA) Protected</span>
              </div>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-700 hover:to-rose-800 text-white font-bold text-xs shadow-md shadow-red-500/25 flex items-center gap-2 cursor-pointer"
              >
                <span>Submit Technical Inquiry</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
