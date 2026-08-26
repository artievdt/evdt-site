import React from 'react';
import { Building2, ShieldCheck, Award, Globe, Cpu } from 'lucide-react';

export const LogoMarquee: React.FC = () => {
  const partners = [
    { name: 'Government of Chhattisgarh', tag: 'Public Sector Governance', icon: Building2 },
    { name: 'Skyline Logistics Ltd.', tag: 'Fleet TMS & Automation', icon: Globe },
    { name: 'Apex EdTech Portal', tag: '50k+ Concurrent LMS', icon: Award },
    { name: 'Nagar Nigam Raipur', tag: 'Digital Citizen Services', icon: ShieldCheck },
    { name: 'Central India Steel & Mines', tag: 'Custom ERP & Procurement', icon: Cpu },
    { name: 'HealthCare Diagnostics AI', tag: 'HIPAA & Telemedicine', icon: ShieldCheck },
    { name: 'FinFlow Payment Gateway', tag: 'PCI-DSS Compliant Core', icon: Globe },
    { name: 'Bharat Quick-Commerce', tag: 'Sub-10 Min Order Engine', icon: Building2 }
  ];

  return (
    <section id="partner-marquee" className="w-full py-8 border-y border-slate-200/80 bg-white/70 backdrop-blur-md overflow-hidden space-y-4">
      <div className="text-center text-[11px] uppercase tracking-widest font-mono font-bold text-slate-500">
        TRUSTED BY LEADING ENTERPRISES, GOVERNMENTS & DIGITAL INNOVATORS
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Left & Right gradient fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee space-x-8">
          {[...partners, ...partners].map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs shrink-0 hover:border-blue-400 hover:bg-blue-50/40 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-100/80 text-blue-700 flex items-center justify-center">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-display font-bold text-slate-900">{p.name}</div>
                  <div className="text-[10px] text-slate-500 font-mono">{p.tag}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
