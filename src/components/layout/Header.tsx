import React, { useState, useEffect, useRef } from 'react';
import { MegaMenu } from './MegaMenu';
import { EVDLogo } from '../common/EVDLogo';
import { Search, ChevronDown, Menu, Sparkles, Calculator } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
  onOpenConsultation: () => void;
  onOpenEstimator: () => void;
  onToggleMobileMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  onNavigate,
  onOpenSearch,
  onOpenConsultation,
  onOpenEstimator,
  onToggleMobileMenu
}) => {
  const [activeMegaMenu, setActiveMegaMenu] = useState<'services' | 'products' | 'industries' | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (type: 'services' | 'products' | 'industries') => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setActiveMegaMenu(type);
  };

  const handleMouseLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 150);
  };

  const isActive = (prefix: string) => {
    if (prefix === '/') return currentPath === '/';
    return currentPath.startsWith(prefix);
  };

  return (
    <header 
      id="main-header"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-md py-2.5'
          : 'bg-white/90 backdrop-blur-md border-b border-slate-200/70 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Official EVD Logo */}
        <button
          onClick={() => onNavigate('/')}
          className="flex items-center text-left group cursor-pointer focus:outline-none transition-transform hover:scale-102"
          aria-label="EVD Technology Home"
        >
          <EVDLogo variant="full" size="md" className="py-0.5" />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 text-xs font-semibold text-slate-700">
          <button
            onClick={() => onNavigate('/')}
            className={`px-3 py-2 rounded-lg transition-all cursor-pointer ${
              isActive('/') && currentPath === '/'
                ? 'text-red-600 bg-red-50/90 font-bold border border-red-200/70'
                : 'hover:text-red-600 hover:bg-slate-100/80'
            }`}
          >
            Home
          </button>

          <button
            onClick={() => onNavigate('/about')}
            className={`px-3 py-2 rounded-lg transition-all cursor-pointer ${
              isActive('/about')
                ? 'text-red-600 bg-red-50/90 font-bold border border-red-200/70'
                : 'hover:text-red-600 hover:bg-slate-100/80'
            }`}
          >
            About Us
          </button>

          {/* Services with Mega Menu */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => onNavigate('/services')}
              className={`px-3 py-2 rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
                isActive('/services') || isActive('/add-on-services')
                  ? 'text-red-600 bg-red-50/90 font-bold border border-red-200/70'
                  : 'hover:text-red-600 hover:bg-slate-100/80'
              }`}
            >
              <span>Services</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === 'services' ? 'rotate-180 text-red-600' : 'text-slate-400'}`} />
            </button>
            {activeMegaMenu === 'services' && (
              <MegaMenu
                type="services"
                onNavigate={onNavigate}
                onClose={() => setActiveMegaMenu(null)}
              />
            )}
          </div>

          {/* Products with Mega Menu */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('products')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => onNavigate('/products')}
              className={`px-3 py-2 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                isActive('/products')
                  ? 'text-red-600 bg-red-50/90 font-bold border border-red-200/70'
                  : 'hover:text-red-600 hover:bg-slate-100/80'
              }`}
            >
              <span>Products & Accelerators</span>
              <span className="bg-red-100 text-red-700 text-[10px] px-1.5 py-0.2 rounded-full font-bold border border-red-200">9</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === 'products' ? 'rotate-180 text-red-600' : 'text-slate-400'}`} />
            </button>
            {activeMegaMenu === 'products' && (
              <MegaMenu
                type="products"
                onNavigate={onNavigate}
                onClose={() => setActiveMegaMenu(null)}
              />
            )}
          </div>

          {/* Industries with Mega Menu */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('industries')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => onNavigate('/industries')}
              className={`px-3 py-2 rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
                isActive('/industries')
                  ? 'text-red-600 bg-red-50/90 font-bold border border-red-200/70'
                  : 'hover:text-red-600 hover:bg-slate-100/80'
              }`}
            >
              <span>Industries</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === 'industries' ? 'rotate-180 text-red-600' : 'text-slate-400'}`} />
            </button>
            {activeMegaMenu === 'industries' && (
              <MegaMenu
                type="industries"
                onNavigate={onNavigate}
                onClose={() => setActiveMegaMenu(null)}
              />
            )}
          </div>

          <button
            onClick={() => onNavigate('/engagement-models')}
            className={`px-3 py-2 rounded-lg transition-all cursor-pointer ${
              isActive('/engagement-models')
                ? 'text-red-600 bg-red-50/90 font-bold border border-red-200/70'
                : 'hover:text-red-600 hover:bg-slate-100/80'
            }`}
          >
            Engagement Models
          </button>

          <button
            onClick={() => onNavigate('/case-studies')}
            className={`px-3 py-2 rounded-lg transition-all cursor-pointer ${
              isActive('/case-studies')
                ? 'text-red-600 bg-red-50/90 font-bold border border-red-200/70'
                : 'hover:text-red-600 hover:bg-slate-100/80'
            }`}
          >
            Portfolio
          </button>

          <button
            onClick={() => onNavigate('/resources')}
            className={`px-3 py-2 rounded-lg transition-all cursor-pointer ${
              isActive('/resources')
                ? 'text-red-600 bg-red-50/90 font-bold border border-red-200/70'
                : 'hover:text-red-600 hover:bg-slate-100/80'
            }`}
          >
            Resources
          </button>

          <button
            onClick={() => onNavigate('/careers')}
            className={`px-3 py-2 rounded-lg transition-all cursor-pointer ${
              isActive('/careers')
                ? 'text-red-600 bg-red-50/90 font-bold border border-red-200/70'
                : 'hover:text-red-600 hover:bg-slate-100/80'
            }`}
          >
            Careers
          </button>

          <button
            onClick={() => onNavigate('/contact')}
            className={`px-3 py-2 rounded-lg transition-all cursor-pointer ${
              currentPath === '/contact'
                ? 'text-red-600 bg-red-50/90 font-bold border border-red-200/70'
                : 'hover:text-red-600 hover:bg-slate-100/80'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Action Controls (Search, Cost Estimator, Free Consultation CTA, Mobile Menu Toggle) */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Quick Search Button */}
          <button
            onClick={onOpenSearch}
            className="p-2 sm:px-3 sm:py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200/80 text-slate-700 border border-slate-200 transition-all flex items-center gap-2 cursor-pointer text-xs"
            title="Search all Services, Products, Case Studies & Guides (Cmd + K)"
            aria-label="Global Search"
          >
            <Search className="w-4 h-4 text-red-600" />
            <span className="hidden xl:inline text-slate-500 font-medium">Search (Cmd+K)</span>
          </button>

          {/* Project Cost & Scope Estimator */}
          <button
            onClick={onOpenEstimator}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50/80 hover:bg-red-100 text-red-700 border border-red-200 transition-all text-xs font-semibold cursor-pointer"
            title="Estimate project timeline & tech stack budget"
          >
            <Calculator className="w-3.5 h-3.5 text-red-600" />
            <span>Estimator</span>
          </button>

          {/* Primary Consultation Button - EVD Red Brand Gradient */}
          <button
            onClick={onOpenConsultation}
            className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-700 hover:to-rose-800 text-white font-bold text-xs shadow-md shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-200 flex items-center gap-1.5 cursor-pointer hover:-translate-y-0.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span className="hidden sm:inline">Start a Project</span>
            <span className="sm:hidden">Consult</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={onToggleMobileMenu}
            className="lg:hidden p-2 rounded-lg bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 transition-colors"
            aria-label="Toggle navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
