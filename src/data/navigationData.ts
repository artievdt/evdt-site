import { NavMegaMenuSection } from '../types';

export const servicesMegaMenu: NavMegaMenuSection[] = [
  {
    title: 'Core Software Engineering',
    items: [
      { label: 'Custom Software Development', href: '/services/custom-software-development', description: 'Bespoke enterprise software, workflows & legacy modernization' },
      { label: 'SaaS Product Engineering', href: '/services/saas-product-engineering', description: 'Multi-tenant architecture, billing & MVP discovery' },
      { label: 'Web Application Development', href: '/services/web-development', description: 'High-speed Next.js / React apps & customer portals' },
      { label: 'Mobile App Development', href: '/services/mobile-app-development', description: 'Cross-platform iOS & Android apps with Flutter' }
    ]
  },
  {
    title: 'Enterprise & Digital Solutions',
    items: [
      { label: 'Custom ERP & CRM Systems', href: '/services/erp-crm', description: 'Unified operational backbone with zero user seat fees' },
      { label: 'E-Commerce & Marketplaces', href: '/services/ecommerce-marketplace', description: 'B2C/B2B stores, multi-vendor commission engines' },
      { label: 'Government Tech & Public Sector', href: '/services/government-tech', description: 'CERT-In certified citizen portals & state dashboards' },
      { label: 'UI/UX & Design Systems', href: '/services/ui-ux', description: 'User research, Figma design tokens & accessible UI' }
    ]
  },
  {
    title: 'Emerging Tech & Growth',
    items: [
      { label: 'Artificial Intelligence & ML', href: '/services/ai-ml', description: 'Enterprise RAG, GenAI agents & computer vision' },
      { label: 'Data Analytics & BI', href: '/services/data-analytics-bi', description: 'Centralized ETL pipelines & executive KPI centers' },
      { label: 'Cloud Migration & DevOps', href: '/services/cloud-devops', description: 'AWS / GCP architectures, Kubernetes & CI/CD' },
      { label: 'SEO & Performance Marketing', href: '/services/seo', description: 'Technical search optimization & B2B paid growth' }
    ]
  },
  {
    title: 'Add-on Services & Integrations',
    items: [
      { label: 'Zoho Implementation', href: '/add-on-services/zoho', description: 'Zoho One customization & Deluge API sync' },
      { label: 'Vyapar Accounting Sync', href: '/add-on-services/vyapar', description: 'Automated invoice & retail stock sync' },
      { label: 'Tally ERP / Prime Integration', href: '/add-on-services/tally', description: 'XML/TDL bi-directional voucher posting' },
      { label: 'Busy Accounting Bridge', href: '/add-on-services/busy', description: 'Wholesale order booking & ledger lookup' },
      { label: 'Google Cloud Solutions', href: '/add-on-services/google-cloud', description: 'Cloud Run, BigQuery & workspace deployment' }
    ]
  }
];

export const productsMegaMenu = [
  { name: 'EVD Academy', slug: 'evd-academy', tagline: 'EdTech LMS & Anti-Piracy DRM Video Live Classroom Suite', badge: 'Flagship' },
  { name: 'EVD Enterprise ERP/CRM', slug: 'erp-crm-suite', tagline: 'Unified business operations with zero per-user licensing fees', badge: 'Enterprise' },
  { name: 'Transport Management (TMS)', slug: 'transport-management-system', tagline: 'Fleet dispatching, FASTag tracking & digital e-PODs', badge: 'Logistics' },
  { name: 'Petrol Pump Management', slug: 'petrol-pump-management', tagline: 'Nozzle meter settlements & credit customer ledger', badge: 'Fuel Tech' },
  { name: 'Quick Commerce Platform', slug: 'quick-commerce', tagline: 'Sub-15-minute delivery, dark store pickers & rider dispatch', badge: 'Hyperlocal' },
  { name: 'Inventory & WMS Suite', slug: 'inventory-management', tagline: 'Multi-warehouse bin mapping & barcode traceability', badge: 'Supply Chain' },
  { name: 'AI Tele Caller', slug: 'ai-tele-caller', tagline: 'Conversational voice AI for qualification & reminders', badge: 'GenAI Voice' },
  { name: 'EVD Construction ERP', slug: 'construction-erp', tagline: 'Site DPRs, BOQ material variance & contractor billing', badge: 'Infra Suite' },
  { name: 'EVD Manufacturing ERP', slug: 'manufacturing-erp', tagline: 'Multi-level BOM, machine OEE & shop floor job cards', badge: 'Industrial' }
];

export const industriesMegaMenu = [
  { name: 'EdTech & Digital Learning', slug: 'edtech', tagline: 'LMS, DRM video streaming, student apps & mock exam engines' },
  { name: 'Healthcare & Telemedicine', slug: 'healthcare', tagline: 'Patient portals, doctor appointments & diagnostic workflows' },
  { name: 'Government & Public Sector', slug: 'govtech', tagline: 'State citizen portals, DBT workflows & executive dashboards' },
  { name: 'Retail & E-Commerce', slug: 'retail-ecommerce', tagline: 'Headless storefronts, multi-vendor marketplaces & POS sync' },
  { name: 'Travel & Hospitality', slug: 'travel-hospitality', tagline: 'Eco-tourism portals, direct booking engines & guide directories' },
  { name: 'Manufacturing & AgriTech', slug: 'manufacturing-agritech', tagline: 'Shop floor automation, supply chain traceability & IoT' }
];
