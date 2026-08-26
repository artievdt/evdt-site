import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Layers, Building2, Globe, FileText, Cpu, Briefcase, ChevronRight } from 'lucide-react';
import { servicesData, addOnServicesData } from '../../data/servicesData';
import { productsData } from '../../data/productsData';
import { industriesData } from '../../data/industriesData';
import { caseStudiesData } from '../../data/caseStudiesData';
import { techDirectoryData, blogPostsData } from '../../data/resourcesData';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  // Search Results
  const matchingServices = [...servicesData, ...addOnServicesData].filter(s =>
    s.title.toLowerCase().includes(normalizedQuery) ||
    s.shortDescription.toLowerCase().includes(normalizedQuery) ||
    s.technologies.some(t => t.toLowerCase().includes(normalizedQuery))
  );

  const matchingProducts = productsData.filter(p =>
    p.name.toLowerCase().includes(normalizedQuery) ||
    p.tagline.toLowerCase().includes(normalizedQuery) ||
    p.shortDescription.toLowerCase().includes(normalizedQuery) ||
    p.targetIndustries.some(ti => ti.toLowerCase().includes(normalizedQuery))
  );

  const matchingIndustries = industriesData.filter(i =>
    i.title.toLowerCase().includes(normalizedQuery) ||
    i.tagline.toLowerCase().includes(normalizedQuery) ||
    i.overview.toLowerCase().includes(normalizedQuery)
  );

  const matchingCaseStudies = caseStudiesData.filter(c =>
    c.title.toLowerCase().includes(normalizedQuery) ||
    c.client.toLowerCase().includes(normalizedQuery) ||
    c.industry.toLowerCase().includes(normalizedQuery) ||
    c.summary.toLowerCase().includes(normalizedQuery)
  );

  const matchingTech = techDirectoryData.filter(t =>
    t.name.toLowerCase().includes(normalizedQuery) ||
    t.description.toLowerCase().includes(normalizedQuery) ||
    t.popularFor.some(pf => pf.toLowerCase().includes(normalizedQuery))
  );

  const matchingBlogs = blogPostsData.filter(b =>
    b.title.toLowerCase().includes(normalizedQuery) ||
    b.excerpt.toLowerCase().includes(normalizedQuery) ||
    b.tags.some(tg => tg.toLowerCase().includes(normalizedQuery))
  );

  const totalResults =
    matchingServices.length +
    matchingProducts.length +
    matchingIndustries.length +
    matchingCaseStudies.length +
    matchingTech.length +
    matchingBlogs.length;

  const handleSelect = (path: string) => {
    onNavigate(path);
    onClose();
  };

  return (
    <div id="global-search-dialog" className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-start justify-center pt-16 sm:pt-24 px-4 p-4 animate-in fade-in duration-200">
      <div 
        className="w-full max-w-3xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden text-slate-800 flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 bg-slate-50/80">
          <Search className="w-5 h-5 text-blue-600 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search all services, products, case studies, technologies, or guides..."
            className="w-full bg-transparent border-none text-slate-900 placeholder-slate-400 text-sm focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-slate-500 hover:text-slate-800 mr-2 px-1.5 py-0.5 rounded bg-slate-200"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-5 text-xs">
          {!query.trim() ? (
            <div className="space-y-4 py-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Quick Navigation Suggestions</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  onClick={() => handleSelect('/services/custom-software-development')}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-blue-50/40 text-left cursor-pointer transition-all"
                >
                  <span className="font-semibold text-slate-800">Custom Software Development</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
                <button
                  onClick={() => handleSelect('/products/evd-academy')}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-blue-50/40 text-left cursor-pointer transition-all"
                >
                  <span className="font-semibold text-slate-800">EVD Academy (LMS & DRM)</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
                <button
                  onClick={() => handleSelect('/case-studies')}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-blue-50/40 text-left cursor-pointer transition-all"
                >
                  <span className="font-semibold text-slate-800">Case Studies & Government Projects</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
                <button
                  onClick={() => handleSelect('/engagement-models')}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-blue-50/40 text-left cursor-pointer transition-all"
                >
                  <span className="font-semibold text-slate-800">Dedicated Engineering & ODC</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="text-center py-12 text-slate-500">
              <p className="text-sm font-semibold text-slate-800">No results found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs mt-1">Try searching for terms like &ldquo;SaaS&rdquo;, &ldquo;ERP&rdquo;, &ldquo;GovTech&rdquo;, &ldquo;React&rdquo;, or &ldquo;LMS&rdquo;.</p>
            </div>
          ) : (
            <>
              {/* Services Results */}
              {matchingServices.length > 0 && (
                <div className="space-y-2">
                  <h5 className="font-bold text-blue-700 text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    Services ({matchingServices.length})
                  </h5>
                  <div className="space-y-1.5">
                    {matchingServices.map(s => (
                      <button
                        key={s.id}
                        onClick={() => handleSelect(s.category === 'Add-on Services' ? `/add-on-services/${s.slug}` : `/services/${s.slug}`)}
                        className="w-full p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50/70 border border-slate-200 hover:border-blue-300 text-left flex items-center justify-between group cursor-pointer transition-all"
                      >
                        <div>
                          <span className="font-semibold text-slate-800 group-hover:text-blue-600">{s.title}</span>
                          <span className="text-[11px] text-slate-500 block line-clamp-1">{s.shortDescription}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Products Results */}
              {matchingProducts.length > 0 && (
                <div className="space-y-2">
                  <h5 className="font-bold text-indigo-700 text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5" />
                    Products & Accelerators ({matchingProducts.length})
                  </h5>
                  <div className="space-y-1.5">
                    {matchingProducts.map(p => (
                      <button
                        key={p.id}
                        onClick={() => handleSelect(`/products/${p.slug}`)}
                        className="w-full p-2.5 rounded-xl bg-slate-50 hover:bg-indigo-50/70 border border-slate-200 hover:border-indigo-300 text-left flex items-center justify-between group cursor-pointer transition-all"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-slate-800 group-hover:text-indigo-600">{p.name}</span>
                            <span className="text-[9px] px-1.5 py-0.2 rounded bg-indigo-100 text-indigo-700 font-bold">{p.badge}</span>
                          </div>
                          <span className="text-[11px] text-slate-500 block line-clamp-1">{p.tagline}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Case Studies Results */}
              {matchingCaseStudies.length > 0 && (
                <div className="space-y-2">
                  <h5 className="font-bold text-emerald-700 text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" />
                    Case Studies ({matchingCaseStudies.length})
                  </h5>
                  <div className="space-y-1.5">
                    {matchingCaseStudies.map(c => (
                      <button
                        key={c.id}
                        onClick={() => handleSelect(`/case-studies/${c.slug}`)}
                        className="w-full p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50/70 border border-slate-200 hover:border-emerald-300 text-left flex items-center justify-between group cursor-pointer transition-all"
                      >
                        <div>
                          <span className="font-semibold text-slate-800 group-hover:text-emerald-700">{c.title}</span>
                          <span className="text-[11px] text-slate-500 block line-clamp-1">{c.summary}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              {matchingTech.length > 0 && (
                <div className="space-y-2">
                  <h5 className="font-bold text-sky-700 text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" />
                    Technologies ({matchingTech.length})
                  </h5>
                  <div className="grid grid-cols-2 gap-2">
                    {matchingTech.map((t, idx) => (
                      <div key={idx} className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                        <div className="font-semibold text-slate-800">{t.name} ({t.category})</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">{t.experienceYears} Experience</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-[11px] text-slate-500">
          <span>Press <kbd className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 font-mono text-[10px]">ESC</kbd> to close</span>
          <button
            onClick={() => handleSelect('/contact')}
            className="text-blue-600 hover:underline font-semibold"
          >
            Have a custom requirement? Talk to us →
          </button>
        </div>
      </div>
    </div>
  );
};
