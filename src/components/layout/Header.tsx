import React, { useState, useEffect, useRef } from "react";
import { MegaMenu } from "./MegaMenu";
import { Search, ChevronDown, Menu, Sparkles, Calculator } from "lucide-react";
import evdLogo from "/images/evdt-logo.webp";

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
  onToggleMobileMenu,
}) => {
  const [activeMegaMenu, setActiveMegaMenu] = useState<
    "services" | "products" | "industries" | null
  >(null);

  const [isScrolled, setIsScrolled] = useState(false);

  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (menuTimeoutRef.current) {
        clearTimeout(menuTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (type: "services" | "products" | "industries") => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
    }

    setActiveMegaMenu(type);
  };

  const handleMouseLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 150);
  };

  const isActive = (prefix: string) => {
    if (prefix === "/") return currentPath === "/";
    return currentPath.startsWith(prefix);
  };

  const navItemClass = (active: boolean) =>
    `px-2.5 xl:px-3 py-2 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
      active
        ? "text-red-600 bg-red-50/90 font-bold border border-red-200/70"
        : "hover:text-red-600 hover:bg-slate-100/80"
    }`;

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-md py-2"
          : "bg-white/95 backdrop-blur-md border-b border-slate-200/70 py-2.5"
      }`}
    >
      <div
        className="
          max-w-[1600px]
          mx-auto
          px-3
          sm:px-5
          lg:px-6
          xl:px-8
          flex
          items-center
          justify-between
          gap-3
        "
      >
        {/* =========================
            LOGO
        ========================== */}
        <button
          onClick={() => onNavigate("/")}
          className="
            flex
            items-center
            shrink-0
            cursor-pointer
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-red-500
            focus-visible:ring-offset-2
            rounded-md
            transition-transform
            hover:scale-[1.02]
          "
          aria-label="EVD Technology Home"
        >
          <img
            src={evdLogo}
            alt="EVD Technology"
            className="
              block
              w-[105px]
              h-auto
              sm:w-[125px]
              md:w-[145px]
              lg:w-[150px]
              xl:w-[165px]
              2xl:w-[175px]
              object-contain
            "
          />
        </button>

        {/* =========================
            DESKTOP NAVIGATION
        ========================== */}
        <nav
          className="
            hidden
            lg:flex
            items-center
            justify-center
            flex-1
            min-w-0
            gap-0.5
            xl:gap-1
            text-[11px]
            xl:text-xs
            font-semibold
            text-slate-700
          "
          aria-label="Main navigation"
        >
          {/* Home */}
          <button
            onClick={() => onNavigate("/")}
            className={navItemClass(currentPath === "/")}
          >
            Home
          </button>

          {/* About */}
          <button
            onClick={() => onNavigate("/about")}
            className={navItemClass(isActive("/about"))}
          >
            About Us
          </button>

          {/* Services */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => onNavigate("/services")}
              className={`${navItemClass(
                isActive("/services") || isActive("/add-on-services"),
              )} flex items-center gap-1`}
            >
              <span>Services</span>

              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeMegaMenu === "services"
                    ? "rotate-180 text-red-600"
                    : "text-slate-400"
                }`}
              />
            </button>

            {activeMegaMenu === "services" && (
              <MegaMenu
                type="services"
                onNavigate={onNavigate}
                onClose={() => setActiveMegaMenu(null)}
              />
            )}
          </div>

          {/* Products */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("products")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => onNavigate("/products")}
              className={`${navItemClass(
                isActive("/products"),
              )} flex items-center gap-1`}
            >
              <span>Products</span>

              <span className="bg-red-100 text-red-700 text-[9px] xl:text-[10px] px-1.5 py-0.5 rounded-full font-bold border border-red-200">
                9
              </span>

              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeMegaMenu === "products"
                    ? "rotate-180 text-red-600"
                    : "text-slate-400"
                }`}
              />
            </button>

            {activeMegaMenu === "products" && (
              <MegaMenu
                type="products"
                onNavigate={onNavigate}
                onClose={() => setActiveMegaMenu(null)}
              />
            )}
          </div>

          {/* Industries */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("industries")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => onNavigate("/industries")}
              className={`${navItemClass(
                isActive("/industries"),
              )} flex items-center gap-1`}
            >
              <span>Industries</span>

              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeMegaMenu === "industries"
                    ? "rotate-180 text-red-600"
                    : "text-slate-400"
                }`}
              />
            </button>

            {activeMegaMenu === "industries" && (
              <MegaMenu
                type="industries"
                onNavigate={onNavigate}
                onClose={() => setActiveMegaMenu(null)}
              />
            )}
          </div>

          {/* Engagement Models */}
          <button
            onClick={() => onNavigate("/engagement-models")}
            className={navItemClass(isActive("/engagement-models"))}
          >
            Engagement Models
          </button>

          {/* Portfolio */}
          <button
            onClick={() => onNavigate("/case-studies")}
            className={navItemClass(isActive("/case-studies"))}
          >
            Portfolio
          </button>

          {/* Resources */}
          <button
            onClick={() => onNavigate("/resources")}
            className={navItemClass(isActive("/resources"))}
          >
            Resources
          </button>

          {/* Careers */}
          <button
            onClick={() => onNavigate("/careers")}
            className={navItemClass(isActive("/careers"))}
          >
            Careers
          </button>

          {/* Contact */}
          <button
            onClick={() => onNavigate("/contact")}
            className={navItemClass(currentPath === "/contact")}
          >
            Contact
          </button>
        </nav>

        {/* =========================
            ACTION BUTTONS
        ========================== */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Search */}
          <button
            onClick={onOpenSearch}
            className="
              p-2
              sm:px-2.5
              sm:py-1.5
              rounded-lg
              bg-slate-100
              hover:bg-slate-200
              text-slate-700
              border
              border-slate-200
              transition-all
              flex
              items-center
              gap-2
              cursor-pointer
            "
            title="Global Search"
            aria-label="Global Search"
          >
            <Search className="w-4 h-4 text-red-600" />

            <span className="hidden 2xl:inline text-[11px] text-slate-500 font-medium">
              Search
            </span>
          </button>

          {/* Estimator */}
          <button
            onClick={onOpenEstimator}
            className="
              hidden
              xl:flex
              items-center
              gap-1.5
              px-2.5
              py-1.5
              rounded-lg
              bg-red-50
              hover:bg-red-100
              text-red-700
              border
              border-red-200
              transition-all
              text-[11px]
              font-semibold
              cursor-pointer
            "
            title="Estimate project timeline and budget"
          >
            <Calculator className="w-3.5 h-3.5 text-red-600" />
            <span>Estimator</span>
          </button>

          {/* Start Project */}
          <button
            onClick={onOpenConsultation}
            className="
              hidden
              sm:flex
              items-center
              gap-1.5
              px-3
              py-1.5
              lg:px-3.5
              lg:py-2
              rounded-xl
              bg-gradient-to-r
              from-red-600
              via-rose-600
              to-red-700
              hover:from-red-700
              hover:to-rose-800
              text-white
              font-bold
              text-[11px]
              lg:text-xs
              shadow-md
              shadow-red-500/25
              hover:shadow-red-500/40
              transition-all
              duration-200
              cursor-pointer
              whitespace-nowrap
              hover:-translate-y-0.5
            "
          >
            <Sparkles className="w-3.5 h-3.5 text-white" />

            <span>Start a Project</span>
          </button>

          {/* Mobile Consultation */}
          <button
            onClick={onOpenConsultation}
            className="
              sm:hidden
              p-2
              rounded-lg
              bg-red-600
              hover:bg-red-700
              text-white
              transition-all
              cursor-pointer
            "
            aria-label="Start a Project"
          >
            <Sparkles className="w-4 h-4" />
          </button>

          {/* Mobile Menu */}
          <button
            onClick={onToggleMobileMenu}
            className="
              lg:hidden
              p-2
              rounded-lg
              bg-slate-100
              text-slate-700
              hover:bg-slate-200
              hover:text-red-600
              border
              border-slate-200
              transition-all
              cursor-pointer
            "
            aria-label="Toggle navigation menu"
            aria-haspopup="true"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
