import React from 'react';
import { servicesMegaMenu, productsMegaMenu, industriesMegaMenu } from '../../data/navigationData';
import { ArrowRight, Sparkles, ChevronRight, Layers, Building2, Code2, Globe, Cpu } from 'lucide-react';

interface MegaMenuProps {
  type: 'services' | 'products' | 'industries' | 'about' | 'resources';
  onNavigate: (path: string) => void;
  onClose: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ type, onNavigate, onClose }) => {
  const handleItemClick = (href: string) => {
    onNavigate(href);
    onClose();
  };

  if (type === 'services') {
    return (
      <div 
        id="mega-menu-services"
        className="absolute top-full left-1/2 -translate-x-1/2 w-[94vw] max-w-6xl mt-2 bg-white/98 backdrop-blur-2xl border border-slate-200 rounded-2xl p-6 shadow-2xl z-50 text-slate-800 animate-in fade-in slide-in-from-top-2 duration-200"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {servicesMegaMenu.map((section, idx) => (
            <div key={idx} className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700 border-b border-slate-200 pb-2 flex items-center gap-1.5">
                {idx === 0 && <Code2 className="w-3.5 h-3.5" />}
                {idx === 1 && <Building2 className="w-3.5 h-3.5" />}
                {idx === 2 && <Cpu className="w-3.5 h-3.5" />}
                {idx === 3 && <Layers className="w-3.5 h-3.5" />}
                {section.title}
              </h4>
              <ul className="space-y-1.5">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <button
                      onClick={() => handleItemClick(item.href)}
                      className="w-full text-left p-2 rounded-lg hover:bg-blue-50/80 transition-all group flex flex-col cursor-pointer border border-transparent hover:border-blue-200/60"
                    >
                      <div className="flex items-center justify-between text-xs font-semibold text-slate-800 group-hover:text-blue-600">
                        <span>{item.label}</span>
                        <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:translate-x-0.5" />
                      </div>
                      {item.description && (
                        <span className="text-[11px] text-slate-500 mt-0.5 line-clamp-1 group-hover:text-slate-700">
                          {item.description}
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between flex-wrap gap-3 bg-slate-50/80 -mx-6 -mb-6 p-4 rounded-b-2xl">
          <div className="flex items-center gap-2 text-xs text-slate-700">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="font-semibold text-slate-800">100% Client Source Code & IP Ownership Guaranteed</span>
          </div>
          <button
            onClick={() => handleItemClick('/services')}
            className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1.5 cursor-pointer"
          >
            <span>Explore All 13 Core & Emerging Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    );
  }

  if (type === 'products') {
    return (
      <div 
        id="mega-menu-products"
        className="absolute top-full left-1/2 -translate-x-1/2 w-[94vw] max-w-5xl mt-2 bg-white/98 backdrop-blur-2xl border border-slate-200 rounded-2xl p-6 shadow-2xl z-50 text-slate-800 animate-in fade-in slide-in-from-top-2 duration-200"
      >
        <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              EVD Product Ecosystem & Accelerators
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">Pre-built, customizable enterprise software engines accelerating time-to-market by 50%.</p>
          </div>
          <button
            onClick={() => handleItemClick('/products')}
            className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
          >
            <span>View All Products</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {productsMegaMenu.map((prod, idx) => (
            <button
              key={idx}
              onClick={() => handleItemClick(`/products/${prod.slug}`)}
              className="text-left p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/60 transition-all group flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {prod.name}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 border border-blue-200">
                    {prod.badge}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                  {prod.tagline}
                </p>
              </div>
              <div className="mt-2 text-[11px] font-semibold text-blue-600 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>View Product Details</span>
                <ChevronRight className="w-3 h-3" />
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (type === 'industries') {
    return (
      <div 
        id="mega-menu-industries"
        className="absolute top-full left-1/2 -translate-x-1/2 w-[90vw] max-w-4xl mt-2 bg-white/98 backdrop-blur-2xl border border-slate-200 rounded-2xl p-6 shadow-2xl z-50 text-slate-800 animate-in fade-in slide-in-from-top-2 duration-200"
      >
        <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" />
              Domain-Specific Industry Solutions
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">Deep engineering expertise tailored to unique regulatory and operational workflows.</p>
          </div>
          <button
            onClick={() => handleItemClick('/industries')}
            className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
          >
            <span>All Verticals</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {industriesMegaMenu.map((ind, idx) => (
            <button
              key={idx}
              onClick={() => handleItemClick(`/industries/${ind.slug}`)}
              className="text-left p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/60 transition-all group cursor-pointer"
            >
              <div className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                <span>{ind.name}</span>
                <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-blue-600" />
              </div>
              <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                {ind.tagline}
              </p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return null;
};
