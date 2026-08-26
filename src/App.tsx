import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MobileMenu } from './components/layout/MobileMenu';
import { GlobalSearchModal } from './components/common/GlobalSearchModal';
import { ConsultationModal } from './components/common/ConsultationModal';
import { SolutionEstimatorModal } from './components/common/SolutionEstimatorModal';
import { FloatingArchitectWidget } from './components/common/FloatingArchitectWidget';
import { ArrowUp } from 'lucide-react';

// Views
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ServicesView } from './views/ServicesView';
import { ProductsView } from './views/ProductsView';
import { IndustriesView } from './views/IndustriesView';
import { EngagementModelsView } from './views/EngagementModelsView';
import { CaseStudiesView } from './views/CaseStudiesView';
import { ResourcesView } from './views/ResourcesView';
import { CareersView } from './views/CareersView';
import { ContactView } from './views/ContactView';
import { LegalView } from './views/LegalView';

export default function App() {
  // State for current route path
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  // Scroll Progress and Back-to-top
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Modal States
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle browser back/forward buttons & scroll listener
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / (windowHeight || 1)) * 100}`;
      setScrollProgress(Number(scroll));
      setShowBackToTop(totalScroll > 400);
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Navigation handler
  const handleNavigate = (path: string) => {
    let cleanPath = path;
    let hash = '';
    if (path.includes('#')) {
      const parts = path.split('#');
      cleanPath = parts[0] || '/';
      hash = parts[1];
    }

    if (cleanPath !== currentPath) {
      window.history.pushState({}, '', cleanPath + (hash ? `#${hash}` : ''));
      setCurrentPath(cleanPath);
    }

    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Route Dispatcher
  const renderCurrentView = () => {
    // 1. Home
    if (currentPath === '/' || currentPath === '') {
      return (
        <HomeView
          onNavigate={handleNavigate}
          onOpenConsultation={() => setIsConsultationOpen(true)}
          onOpenEstimator={() => setIsEstimatorOpen(true)}
        />
      );
    }

    // 2. About
    if (currentPath === '/about' || currentPath.startsWith('/about')) {
      return (
        <AboutView
          onNavigate={handleNavigate}
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />
      );
    }

    // 3. Services / Add-on Services
    if (currentPath.startsWith('/services/') || currentPath.startsWith('/add-on-services/')) {
      const slug = currentPath.split('/')[2];
      return (
        <ServicesView
          selectedServiceSlug={slug}
          onNavigate={handleNavigate}
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />
      );
    }
    if (currentPath === '/services' || currentPath === '/add-on-services') {
      return (
        <ServicesView
          onNavigate={handleNavigate}
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />
      );
    }

    // 4. Products
    if (currentPath.startsWith('/products/')) {
      const slug = currentPath.split('/')[2];
      return (
        <ProductsView
          selectedProductSlug={slug}
          onNavigate={handleNavigate}
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />
      );
    }
    if (currentPath === '/products') {
      return (
        <ProductsView
          onNavigate={handleNavigate}
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />
      );
    }

    // 5. Industries
    if (currentPath.startsWith('/industries/')) {
      const slug = currentPath.split('/')[2];
      return (
        <IndustriesView
          selectedIndustrySlug={slug}
          onNavigate={handleNavigate}
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />
      );
    }
    if (currentPath === '/industries') {
      return (
        <IndustriesView
          onNavigate={handleNavigate}
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />
      );
    }

    // 6. Engagement Models
    if (currentPath === '/engagement-models' || currentPath.startsWith('/engagement-models')) {
      return (
        <EngagementModelsView
          onNavigate={handleNavigate}
          onOpenConsultation={() => setIsConsultationOpen(true)}
          onOpenEstimator={() => setIsEstimatorOpen(true)}
        />
      );
    }

    // 7. Case Studies
    if (currentPath.startsWith('/case-studies/')) {
      const slug = currentPath.split('/')[2];
      return (
        <CaseStudiesView
          selectedCaseStudySlug={slug}
          onNavigate={handleNavigate}
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />
      );
    }
    if (currentPath === '/case-studies') {
      return (
        <CaseStudiesView
          onNavigate={handleNavigate}
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />
      );
    }

    // 8. Resources / Tech Directory / FAQs
    if (currentPath === '/resources' || currentPath.startsWith('/resources')) {
      return (
        <ResourcesView
          onNavigate={handleNavigate}
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />
      );
    }

    // 9. Careers
    if (currentPath === '/careers' || currentPath.startsWith('/careers')) {
      return (
        <CareersView
          onNavigate={handleNavigate}
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />
      );
    }

    // 10. Contact
    if (currentPath === '/contact' || currentPath.startsWith('/contact')) {
      return (
        <ContactView
          onNavigate={handleNavigate}
        />
      );
    }

    // 11. Legal Docs & Sitemap
    if (currentPath === '/privacy-policy') {
      return <LegalView type="privacy" onNavigate={handleNavigate} />;
    }
    if (currentPath === '/terms') {
      return <LegalView type="terms" onNavigate={handleNavigate} />;
    }
    if (currentPath === '/data-security-policy') {
      return <LegalView type="security" onNavigate={handleNavigate} />;
    }
    if (currentPath === '/sitemap') {
      return <LegalView type="sitemap" onNavigate={handleNavigate} />;
    }

    // Fallback to Home
    return (
      <HomeView
        onNavigate={handleNavigate}
        onOpenConsultation={() => setIsConsultationOpen(true)}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
      />
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-red-600 selection:text-white relative">
      {/* Scroll Progress Bar at the Top */}
      <div className="fixed top-0 left-0 right-0 h-1 z-60 bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 transition-all duration-150 ease-out shadow-sm"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Top Announcement Bar */}
      <AnnouncementBar
        onOpenConsultation={() => setIsConsultationOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Sticky Main Header with Mega Menus */}
      <Header
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenConsultation={() => setIsConsultationOpen(true)}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
        onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />

      {/* Main View Container with Smooth AnimatePresence Transitions */}
      <main className="flex-1 w-full relative overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentPath}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            {renderCurrentView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Enterprise Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Floating Back To Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="fixed bottom-24 left-6 z-40 w-11 h-11 rounded-full bg-slate-900/90 text-white shadow-xl hover:bg-red-600 border border-slate-700/60 backdrop-blur-md flex items-center justify-center cursor-pointer transition-colors group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Modals & Dialogs */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavigate={handleNavigate}
        onOpenConsultation={() => setIsConsultationOpen(true)}
        currentPath={currentPath}
      />

      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      <SolutionEstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
        onOpenConsultation={() => {
          setIsEstimatorOpen(false);
          setIsConsultationOpen(true);
        }}
      />

      {/* Interactive AI Solution Architect Floating Widget */}
      <FloatingArchitectWidget
        onOpenConsultation={() => setIsConsultationOpen(true)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
