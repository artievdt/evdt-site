import React from "react";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Award,
  Heart,
  Sparkles,
} from "lucide-react";
import evdLogo from "../../../public/images/evdt-logo.webp";

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}




export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="main-footer"
      className="bg-slate-950 border-t border-slate-800 text-slate-300 text-xs relative overflow-hidden"
    >
      {/* Top Pre-Footer Enterprise Banner */}
      <div className="border-b border-slate-800/80 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-red-400" />
              10+ Years of Verified Delivery Excellence
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white tracking-tight">
              Ready to engineer your next software breakthrough?
            </h3>
            <p className="text-slate-400 mt-1.5 max-w-2xl text-xs sm:text-sm leading-relaxed">
              Schedule a technical discovery session with our senior solution
              architects. 100% intellectual property ownership, zero vendor
              lock-in.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-red-500/25 transition-all flex items-center gap-2 cursor-pointer hover:-translate-y-0.5"
            >
              <span>Schedule Free Technical Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate("/contact")}
              className="px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-xs sm:text-sm transition-all cursor-pointer"
            >
              Contact Our Offices
            </button>
          </div>
        </div>
      </div>

      {/* Main 5-Column Navigation Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 xl:gap-10">
          {/* Column 1: Company Profile */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate("/")}
                className="inline-flex items-center rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                aria-label="EVD Technology Home"
              >
                <img
                  src={evdLogo}
                  alt="EVD Technology"
                  className="
        w-[140px]
        sm:w-[155px]
        md:w-[170px]
        lg:w-[180px]
        h-auto
        object-contain
      "
                />
              </button>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs">
              EVD Technology is a premier software engineering, enterprise
              platforms, cloud, and artificial intelligence company. With over
              10 years of delivery excellence, we empower enterprises, state
              governments, fast-growing SaaS startups, and institutions to
              automate operations and scale with confidence.
            </p>

            <div className="space-y-2 pt-2 border-t border-slate-900 text-xs">
              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>
                  EVD Technology Hub, Raipur, Chhattisgarh, India - 492001
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-red-400 shrink-0" />
                <a
                  href="tel:+919179944409"
                  className="hover:text-red-400 transition-colors"
                >
                  +91 91799 44409
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-red-400 shrink-0" />
                <a
                  href="mailto:contact@evdtechnology.com"
                  className="hover:text-red-400 transition-colors"
                >
                  contact@evdtechnology.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 flex-wrap">
              <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-1 rounded-md font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                CERT-In Compliance Ready
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] text-red-400 bg-red-950/40 border border-red-500/30 px-2.5 py-1 rounded-md font-medium">
                <Award className="w-3.5 h-3.5" />
                10+ Years Legacy
              </span>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-wider border-b border-slate-800 pb-2">
              Core Services
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() =>
                    onNavigate("/services/custom-software-development")
                  }
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Custom Software Dev
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    onNavigate("/services/saas-product-engineering")
                  }
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  SaaS Product Engineering
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/services/web-development")}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Web Application Dev
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/services/mobile-app-development")}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Mobile App Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/services/erp-crm")}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Custom ERP & CRM
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/services/ai-ml")}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  AI & Machine Learning
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/services/cloud-devops")}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Cloud & DevOps
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/services/government-tech")}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Government Tech
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/services")}
                  className="text-blue-400 font-semibold hover:underline text-left cursor-pointer"
                >
                  View All 13 Services →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Products & Accelerators */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-wider border-b border-slate-800 pb-2">
              Products
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate("/products/evd-academy")}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  EVD Academy (LMS)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/products/erp-crm-suite")}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  EVD ERP/CRM Suite
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    onNavigate("/products/transport-management-system")
                  }
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Transport TMS
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/products/petrol-pump-management")}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Petrol Pump Solution
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/products/quick-commerce")}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Quick Commerce Suite
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/products/ai-tele-caller")}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  AI Tele Caller Voice
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/products/construction-erp")}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Construction ERP
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/products/manufacturing-erp")}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Manufacturing ERP
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/products")}
                  className="text-blue-400 font-semibold hover:underline text-left cursor-pointer"
                >
                  Explore All 9 Products →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Industries & Engagement */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-wider border-b border-slate-800 pb-2">
              Industries
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate("/industries/edtech")}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  EdTech & Learning
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/industries/healthcare")}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Healthcare & Medical
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/industries/govtech")}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Government & GovTech
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/industries/retail-ecommerce")}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Retail & E-Commerce
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/industries/travel-hospitality")}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Travel & Hospitality
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    onNavigate("/industries/manufacturing-agritech")
                  }
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Manufacturing & AgriTech
                </button>
              </li>
              <li className="pt-2 border-t border-slate-900">
                <button
                  onClick={() => onNavigate("/engagement-models")}
                  className="text-blue-400 font-semibold hover:underline text-left cursor-pointer"
                >
                  Engagement Models & ODC →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Company & Legal */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-wider border-b border-slate-800 pb-2">
              Company & Legal
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate("/about")}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  About Us (10+ Years)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/case-studies")}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Case Studies & Proof
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/resources")}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Tech Blog & Insights
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/careers")}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Careers & Hiring
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/contact")}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Contact & Locations
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/privacy-policy")}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/terms")}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/data-security-policy")}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Data Security Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/sitemap")}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  HTML & XML Sitemap
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="border-t border-slate-900 bg-slate-950 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {currentYear} EVD Technology. All Rights Reserved. Built with
            enterprise software engineering discipline.
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <button
              onClick={() => onNavigate("/privacy-policy")}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate("/terms")}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate("/data-security-policy")}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Security
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate("/sitemap")}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Sitemap
            </button>
            <span>•</span>
            <span className="text-blue-400 font-mono">Raipur, CG, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
