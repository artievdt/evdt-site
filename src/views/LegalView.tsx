import React from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { servicesMegaMenu, productsMegaMenu, industriesMegaMenu } from '../data/navigationData';
import { ShieldCheck, Lock, FileText, Globe, ArrowRight } from 'lucide-react';

interface LegalViewProps {
  type: 'privacy' | 'terms' | 'security' | 'sitemap';
  onNavigate: (path: string) => void;
}

export const LegalView: React.FC<LegalViewProps> = ({ type, onNavigate }) => {
  if (type === 'sitemap') {
    return (
      <div id="sitemap-root" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <SectionHeader
          badge="Complete Architecture Index"
          title="EVD Technology"
          highlightedWord="Website Sitemap"
          subtitle="Explore all pages, services, products, vertical solutions, and resources across the portal."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Pages */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3 card-hover-lift">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs border-b border-slate-100 pb-2">Main Navigation</h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li><button onClick={() => onNavigate('/')} className="hover:text-blue-600 cursor-pointer">Home Page</button></li>
              <li><button onClick={() => onNavigate('/about')} className="hover:text-blue-600 cursor-pointer">About Us (10+ Years Legacy)</button></li>
              <li><button onClick={() => onNavigate('/engagement-models')} className="hover:text-blue-600 cursor-pointer">Engagement Models & ODC</button></li>
              <li><button onClick={() => onNavigate('/case-studies')} className="hover:text-blue-600 cursor-pointer">Case Studies & Government Portfolio</button></li>
              <li><button onClick={() => onNavigate('/resources')} className="hover:text-blue-600 cursor-pointer">Engineering Resources & Tech Stack</button></li>
              <li><button onClick={() => onNavigate('/careers')} className="hover:text-blue-600 cursor-pointer">Careers & Internships</button></li>
              <li><button onClick={() => onNavigate('/contact')} className="hover:text-blue-600 cursor-pointer">Contact & Raipur Headquarters</button></li>
            </ul>
          </div>

          {/* Services */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3 card-hover-lift">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs border-b border-slate-100 pb-2">Core Services (13)</h4>
            <ul className="space-y-2 text-xs text-slate-600">
              {servicesMegaMenu.flatMap(s => s.items).map((item, idx) => (
                <li key={idx}>
                  <button onClick={() => onNavigate(item.href)} className="hover:text-blue-600 text-left cursor-pointer">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Verticals */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3 card-hover-lift">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs border-b border-slate-100 pb-2">Products & Verticals</h4>
            <div className="space-y-3">
              <div>
                <span className="text-[11px] font-bold text-blue-700 block mb-1">Products (9)</span>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {productsMegaMenu.map((p, idx) => (
                    <li key={idx}><button onClick={() => onNavigate(`/products/${p.slug}`)} className="hover:text-blue-600 cursor-pointer">{p.name}</button></li>
                  ))}
                </ul>
              </div>
              <div className="pt-2 border-t border-slate-100">
                <span className="text-[11px] font-bold text-blue-700 block mb-1">Industry Verticals (6)</span>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {industriesMegaMenu.map((i, idx) => (
                    <li key={idx}><button onClick={() => onNavigate(`/industries/${i.slug}`)} className="hover:text-blue-600 cursor-pointer">{i.name}</button></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // PRIVACY POLICY / TERMS / SECURITY POLICY
  const titles = {
    privacy: 'Privacy Policy',
    terms: 'Terms and Conditions',
    security: 'Data Security & Compliance Policy'
  };

  return (
    <div id="legal-doc-root" className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-slate-700 text-xs sm:text-sm leading-relaxed">
      <div className="space-y-3 border-b border-slate-200 pb-6">
        <span className="text-xs uppercase font-bold tracking-wider text-blue-700">Legal Governance</span>
        <h1 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">{titles[type]}</h1>
        <p className="text-xs text-slate-500">Last updated: January 2026 • EVD Technology Legal & Information Security Directorate</p>
      </div>

      {type === 'privacy' && (
        <div className="space-y-6">
          <section className="space-y-2">
            <h3 className="text-base font-bold text-slate-900">1. Commitment to Client Confidentiality</h3>
            <p>
              EVD Technology (&ldquo;EVD&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) respects the privacy and confidentiality of our website visitors, prospective partners, and corporate clients. We do not sell, lease, or monetize personal or business contact data under any circumstances.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-bold text-slate-900">2. Scope of Collected Information</h3>
            <p>
              When you submit an architectural inquiry, request a live product demo, or contact our engineering team, we collect your name, business email, phone/WhatsApp number, organization name, and provided project scope. This information is utilized strictly to evaluate technical feasibility, provide estimates, and conduct discovery calls.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-bold text-slate-900">3. Intellectual Property and Source Code</h3>
            <p>
              All software engineered under contracted client engagements is transferred 100% to the client upon milestone settlement. EVD retains zero secondary licensing claims or residual intellectual property over proprietary custom builds.
            </p>
          </section>
        </div>
      )}

      {type === 'terms' && (
        <div className="space-y-6">
          <section className="space-y-2">
            <h3 className="text-base font-bold text-slate-900">1. Agreement to Terms</h3>
            <p>
              By accessing the website or utilizing EVD Technology consulting services, you agree to comply with these terms, our mutual non-disclosure standards, and applicable IT governance laws in India and international client jurisdictions.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-bold text-slate-900">2. Engineering Proposals & Scope of Work (SOW)</h3>
            <p>
              Formal contractual relationships are governed by executed Master Services Agreements (MSA) and project-specific Statements of Work (SOW) which supersede preliminary website estimates.
            </p>
          </section>
        </div>
      )}

      {type === 'security' && (
        <div className="space-y-6">
          <section className="space-y-2">
            <h3 className="text-base font-bold text-slate-900">1. Information Security Standard</h3>
            <p>
              EVD Technology enforces strict cryptographic encryption for data at rest (AES-256) and data in transit (TLS 1.3). Our engineering infrastructure is configured to comply with OWASP Top 10 guidelines and is prepared for CERT-In empanelled security audits for government and enterprise deployments.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-bold text-slate-900">2. Physical & Virtual Network Safeguards</h3>
            <p>
              All dedicated offshore squad engineers operate within isolated VPC boundaries with multi-factor biometric authentication, encrypted work hardware, and automated Git commit logging.
            </p>
          </section>
        </div>
      )}
    </div>
  );
};
