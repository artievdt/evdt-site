import React from 'react';
import { ShieldCheck, Award, Users, CheckCircle2 } from 'lucide-react';

export const TrustBadgeBar: React.FC = () => {
  const verifiedStats = [
    { value: '10+', label: 'Years Legacy', sub: 'Est. 2014 • Raipur HQ', icon: Award, color: 'text-blue-600', bg: 'bg-blue-50 border-blue-200' },
    { value: '100k+', label: 'Concurrent Users', sub: 'High-Scale EdTech & SaaS', icon: Users, color: 'text-indigo-600', bg: 'bg-indigo-50 border-indigo-200' },
    { value: 'CERT-In', label: 'Security Standard', sub: 'GovTech Audited & Compliant', icon: ShieldCheck, color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-200' },
    { value: '100%', label: 'IP Ownership', sub: 'Zero Vendor Lock-in', icon: CheckCircle2, color: 'text-sky-600', bg: 'bg-sky-50 border-sky-200' }
  ];

  const featuredClients = [
    { name: 'Government of Assam', category: 'Citizen Governance' },
    { name: 'Government of Chhattisgarh', category: 'Public Sector Ops' },
    { name: 'Vedanta Limited', category: 'Industrial Telemetry' },
    { name: 'Major Kalshi Classes', category: 'Defence EdTech' },
    { name: 'Deliver My Tune', category: 'Global Music SaaS' },
    { name: 'DoveMed Healthcare', category: 'Medical Portal' }
  ];

  return (
    <div id="trust-social-proof" className="w-full border-y border-slate-200/80 bg-white/80 backdrop-blur-md py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Core Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {verifiedStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-300 flex items-center gap-3.5"
              >
                <div className={`w-11 h-11 rounded-xl ${stat.bg} border flex items-center justify-center ${stat.color} shrink-0 shadow-2xs`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-slate-700 -mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    {stat.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verified Enterprise & Government Client Marquee / Grid */}
        <div className="pt-2">
          <div className="text-center mb-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Trusted by State Governments, Enterprise Leaders & High-Growth Platforms
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {featuredClients.map((client, idx) => (
              <div
                key={idx}
                className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200/90 hover:border-blue-300 hover:bg-blue-50/40 transition-all flex items-center gap-2 text-xs shadow-2xs"
              >
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span className="font-semibold text-slate-800">{client.name}</span>
                <span className="text-[10px] text-slate-500 hidden sm:inline">({client.category})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
