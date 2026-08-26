import React, { useState } from 'react';
import { EVDLogo } from '../common/EVDLogo';
import { servicesMegaMenu, productsMegaMenu, industriesMegaMenu } from '../../data/navigationData';
import { X, ChevronDown, Phone, Mail, Sparkles, ArrowRight } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
  currentPath: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenConsultation,
  currentPath
}) => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleNav = (href: string) => {
    onNavigate(href);
    onClose();
  };

  return (
    <div id="mobile-navigation-drawer" className="fixed inset-0 z-50 bg-white/98 backdrop-blur-2xl flex flex-col text-slate-900 overflow-y-auto animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-white/90 sticky top-0 z-10 backdrop-blur-md">
        <div className="flex items-center">
          <EVDLogo variant="full" size="sm" />
        </div>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:text-slate-950 hover:bg-slate-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Menu Links */}
      <div className="flex-1 p-4 space-y-2">
        <button
          onClick={() => handleNav('/')}
          className={`w-full text-left px-4 py-3 rounded-xl font-semibold text-sm transition-all ${
            currentPath === '/' ? 'bg-red-50 text-red-700 border border-red-200' : 'text-slate-700 hover:bg-slate-100'
          }`}
        >
          Home
        </button>

        {/* About Section */}
        <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/60">
          <button
            onClick={() => toggleSection('about')}
            className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-800"
          >
            <span>About Us (10+ Years)</span>
            <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${openSection === 'about' ? 'rotate-180 text-red-600' : ''}`} />
          </button>
          {openSection === 'about' && (
            <div className="px-4 pb-3 space-y-1.5 border-t border-slate-200/80 pt-2 text-xs bg-white">
              <button onClick={() => handleNav('/about')} className="w-full text-left py-1.5 text-slate-600 hover:text-red-600 font-medium">
                Company Overview & Legacy Timeline
              </button>
              <button onClick={() => handleNav('/about#why-evd')} className="w-full text-left py-1.5 text-slate-600 hover:text-red-600 font-medium">
                Why Choose EVD Technology
              </button>
              <button onClick={() => handleNav('/about#delivery-model')} className="w-full text-left py-1.5 text-slate-600 hover:text-red-600 font-medium">
                Global Delivery & Security Framework
              </button>
              <button onClick={() => handleNav('/about#leadership')} className="w-full text-left py-1.5 text-slate-600 hover:text-red-600 font-medium">
                Leadership & Mission Values
              </button>
            </div>
          )}
        </div>

        {/* Services Accordion */}
        <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/60">
          <button
            onClick={() => toggleSection('services')}
            className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-800"
          >
            <span>Services (13 Core & Emerging)</span>
            <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${openSection === 'services' ? 'rotate-180 text-red-600' : ''}`} />
          </button>
          {openSection === 'services' && (
            <div className="px-4 pb-3 space-y-3 border-t border-slate-200/80 pt-2 text-xs bg-white">
              {servicesMegaMenu.map((cat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="font-bold text-blue-700 text-[11px] uppercase tracking-wider">{cat.title}</div>
                  <div className="pl-2 space-y-1 border-l border-slate-200">
                    {cat.items.map((item, itemIdx) => (
                      <button
                        key={itemIdx}
                        onClick={() => handleNav(item.href)}
                        className="w-full text-left py-1 text-slate-600 hover:text-blue-600 block truncate font-medium"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Products Accordion */}
        <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/60">
          <button
            onClick={() => toggleSection('products')}
            className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-800"
          >
            <span>Products & Accelerators (9)</span>
            <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${openSection === 'products' ? 'rotate-180 text-blue-600' : ''}`} />
          </button>
          {openSection === 'products' && (
            <div className="px-4 pb-3 space-y-1.5 border-t border-slate-200/80 pt-2 text-xs bg-white">
              {productsMegaMenu.map((prod, idx) => (
                <button
                  key={idx}
                  onClick={() => handleNav(`/products/${prod.slug}`)}
                  className="w-full text-left py-1.5 flex items-center justify-between text-slate-700 hover:text-blue-600 font-medium"
                >
                  <span>{prod.name}</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 font-bold">{prod.badge}</span>
                </button>
              ))}
              <button
                onClick={() => handleNav('/products')}
                className="w-full text-left pt-2 font-bold text-blue-600 flex items-center gap-1 border-t border-slate-200"
              >
                <span>View All 9 Products</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>

        {/* Industries Accordion */}
        <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/60">
          <button
            onClick={() => toggleSection('industries')}
            className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-800"
          >
            <span>Industries (6 Verticals)</span>
            <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${openSection === 'industries' ? 'rotate-180 text-blue-600' : ''}`} />
          </button>
          {openSection === 'industries' && (
            <div className="px-4 pb-3 space-y-1.5 border-t border-slate-200/80 pt-2 text-xs bg-white">
              {industriesMegaMenu.map((ind, idx) => (
                <button
                  key={idx}
                  onClick={() => handleNav(`/industries/${ind.slug}`)}
                  className="w-full text-left py-1.5 text-slate-700 hover:text-blue-600 font-medium"
                >
                  {ind.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Engagement Models */}
        <button
          onClick={() => handleNav('/engagement-models')}
          className={`w-full text-left px-4 py-3 rounded-xl font-semibold text-sm transition-all ${
            currentPath.startsWith('/engagement-models') ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'text-slate-700 hover:bg-slate-100'
          }`}
        >
          Engagement Models
        </button>

        {/* Case Studies */}
        <button
          onClick={() => handleNav('/case-studies')}
          className={`w-full text-left px-4 py-3 rounded-xl font-semibold text-sm transition-all ${
            currentPath.startsWith('/case-studies') ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'text-slate-700 hover:bg-slate-100'
          }`}
        >
          Portfolio & Case Studies
        </button>

        {/* Resources */}
        <button
          onClick={() => handleNav('/resources')}
          className={`w-full text-left px-4 py-3 rounded-xl font-semibold text-sm transition-all ${
            currentPath.startsWith('/resources') ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'text-slate-700 hover:bg-slate-100'
          }`}
        >
          Resources & Insights
        </button>

        {/* Careers */}
        <button
          onClick={() => handleNav('/careers')}
          className={`w-full text-left px-4 py-3 rounded-xl font-semibold text-sm transition-all ${
            currentPath.startsWith('/careers') ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'text-slate-700 hover:bg-slate-100'
          }`}
        >
          Careers at EVD
        </button>

        {/* Contact Us */}
        <button
          onClick={() => handleNav('/contact')}
          className={`w-full text-left px-4 py-3 rounded-xl font-semibold text-sm transition-all ${
            currentPath === '/contact' ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'text-slate-700 hover:bg-slate-100'
          }`}
        >
          Contact & Locations
        </button>
      </div>

      {/* Footer CTAs */}
      <div className="p-4 border-t border-slate-200 bg-slate-50 space-y-3">
        <button
          onClick={() => {
            onClose();
            onOpenConsultation();
          }}
          className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white font-bold text-sm shadow-md shadow-red-500/25 flex items-center justify-center gap-2 cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-white" />
          <span>Start a Project / Free Consultation</span>
        </button>

        <div className="flex items-center justify-between text-xs text-slate-600 pt-1 font-medium">
          <a href="tel:+919179944409" className="flex items-center gap-1.5 text-slate-700 hover:text-red-600">
            <Phone className="w-3.5 h-3.5 text-red-600" />
            <span>+91 91799 44409</span>
          </a>
          <a href="mailto:contact@evdtechnology.com" className="flex items-center gap-1.5 text-slate-700 hover:text-red-600">
            <Mail className="w-3.5 h-3.5 text-red-600" />
            <span>Email Us</span>
          </a>
        </div>
      </div>
    </div>
  );
};
