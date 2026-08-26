import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'custom-software',
    slug: 'custom-software-development',
    title: 'Custom Software Development',
    category: 'Core Software Engineering',
    tagline: 'Tailored enterprise software built for specific operational workflows, high reliability, and limitless scale.',
    shortDescription: 'End-to-end bespoke software engineering designed to automate complex workflows, modernize legacy systems, and build proprietary business assets.',
    fullDescription: 'EVD Technology engineers robust, secure, and scalable custom software platforms tailored to your distinct business operations. From enterprise workflow automation and specialized portals to distributed microservices and mission-critical systems, we turn intricate business logic into seamless digital software assets.',
    icon: 'Code2',
    bannerGradient: 'from-blue-600/20 via-cyan-500/10 to-transparent',
    businessProblems: [
      'Off-the-shelf software fails to match your exact business logic and organizational hierarchy.',
      'Siloed departments relying on manual spreadsheets and repetitive data entry.',
      'Aging legacy systems that are expensive to maintain, vulnerable, and difficult to scale.',
      'Fragmented tools without unified APIs causing data discrepancies and delayed decisions.'
    ],
    keySolutions: [
      'Bespoke Business Process Automation (BPA) platforms tailored to company hierarchies.',
      'Custom Enterprise Applications with role-based access control (RBAC) and audit logs.',
      'Scalable REST & GraphQL API development for multi-system enterprise orchestration.',
      'Legacy modernization: decoupling monoliths into modular services without downtime.'
    ],
    features: [
      { title: 'Business Process Automation', description: 'Automate multi-step approval workflows, document routing, and automated compliance logging.' },
      { title: 'Custom Enterprise Applications', description: 'Bespoke dashboards, operational control centers, and internal resource management tools.' },
      { title: 'Workflow Management Systems', description: 'Real-time pipeline monitoring, task automation, and intelligent escalation triggers.' },
      { title: 'API & Middleware Architecture', description: 'High-throughput secure APIs connecting ERPs, CRMs, payment gateways, and third-party services.' },
      { title: 'Legacy Modernization', description: 'Gradual, zero-loss migration from legacy stacks to modern cloud-native architectures.' },
      { title: 'Enterprise Support & SLA', description: '24/7 proactive monitoring, vulnerability patching, and continuous performance tuning.' }
    ],
    technologies: ['Node.js', 'Python', 'React.js', 'PostgreSQL', 'Docker', 'Redis', 'TypeScript', 'AWS'],
    deliverables: [
      'Software Architecture Design Document (SADD)',
      'Fully tested, production-ready codebase with CI/CD pipelines',
      'Interactive Admin & Operational Dashboards',
      'API documentation (OpenAPI / Swagger spec)',
      'Security audit report & deployment runbook'
    ],
    processSteps: [
      { step: '01', title: 'Discovery & Workflow Audit', desc: 'In-depth analysis of existing processes, user personas, and technical constraints.' },
      { step: '02', title: 'System Architecture', desc: 'Data modeling, schema design, security boundaries, and modular service mapping.' },
      { step: '03', title: 'Agile Sprint Engineering', desc: 'Bi-weekly sprint demos with working functional modules and automated test suites.' },
      { step: '04', title: 'UAT & Security Hardening', desc: 'End-to-end load testing, vulnerability scanning, and user acceptance signoff.' },
      { step: '05', title: 'Deployment & SLA Support', desc: 'Production rollout with zero-downtime cutover, telemetry setup, and ongoing AMC.' }
    ],
    faqs: [
      { question: 'How do you ensure data security in custom software?', answer: 'We implement end-to-end encryption (TLS 1.3 in transit, AES-256 at rest), strict Role-Based Access Control (RBAC), sanitized database queries to prevent SQL injections, and automated vulnerability scanning in our CI/CD pipelines.' },
      { question: 'Can custom software integrate with our existing accounting/ERP tools?', answer: 'Yes. We build custom API connectors and middleware for Zoho, Tally, SAP, Salesforce, Busy, and bespoke legacy databases.' },
      { question: 'Who owns the intellectual property (IP) and source code?', answer: 'You own 100% of the proprietary source code, database schemas, and intellectual property upon project completion.' }
    ],
    caseStudySlugs: ['govt-of-chhattisgarh', 'vedanta-industrial-monitoring', 'pcmw-workflow-automation'],
    relatedIndustries: ['govtech', 'manufacturing-agritech', 'retail-ecommerce']
  },
  {
    id: 'saas-product-engineering',
    slug: 'saas-product-engineering',
    title: 'SaaS Product Engineering',
    category: 'Core Software Engineering',
    tagline: 'From product discovery and MVP to high-velocity, multi-tenant global SaaS platforms.',
    shortDescription: 'Full-lifecycle SaaS engineering including multi-tenant architecture, automated subscription billing, granular tenancy isolation, and rapid MVP iteration.',
    fullDescription: 'We help founders and enterprise innovators design, architect, launch, and scale modern cloud-native SaaS platforms. Leveraging a product-first engineering mindset, we ensure your SaaS platform achieves high availability, frictionless onboarding, automated billing, and rock-solid multi-tenancy.',
    icon: 'Layers',
    bannerGradient: 'from-purple-600/20 via-indigo-500/10 to-transparent',
    businessProblems: [
      'Slow time-to-market risking missed market opportunities.',
      'Complex multi-tenancy architecture resulting in data leakage risks and high infrastructure costs.',
      'Churn caused by clunky onboarding, unintuitive UX, and performance bottlenecks under peak load.',
      'Difficulty managing flexible pricing models, recurring billing, and tiered subscriptions.'
    ],
    keySolutions: [
      'Rapid MVP development delivering market-ready core value in 8-12 weeks.',
      'Multi-tenant cloud architecture with isolated schemas, row-level security, and autoscaling.',
      'Automated recurring billing integration (Stripe, Razorpay, Lemon Squeezy, Paddle).',
      'Comprehensive product analytics, user onboarding flows, and telemetry observability.'
    ],
    features: [
      { title: 'Multi-Tenant SaaS Architecture', description: 'Secure tenant isolation with dedicated or shared databases, tenant routing, and pooled compute.' },
      { title: 'MVP Discovery & Rapid Launch', description: 'Iterative lean scoping to validate product-market fit fast with real paying users.' },
      { title: 'Subscription & Tiered Billing', description: 'Usage-based metering, monthly/annual recurring subscriptions, invoices, and automated dunning.' },
      { title: 'Self-Serve Tenant Onboarding', description: 'Automated organization creation, team invitations, SSO/SAML login, and role provisioning.' },
      { title: 'In-App Analytics & Telemetry', description: 'Customer health scores, feature adoption heatmaps, and retention cohort tracking.' },
      { title: 'SaaS Modernization & Scale', description: 'Re-architecting single-tenant web apps into scalable multi-tenant SaaS platforms.' }
    ],
    technologies: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS ECS', 'Stripe'],
    deliverables: [
      'Full Multi-tenant SaaS Web Platform',
      'Tenant Admin Portal & Superadmin Master Console',
      'Automated Billing, Invoicing & Subscription Engine',
      'Developer API & Webhook Dispatcher',
      'Automated CI/CD Deployment to AWS / GCP'
    ],
    processSteps: [
      { step: '01', title: 'Product Discovery & Spec', desc: 'Define core value loop, user personas, tenancy boundaries, and feature priority matrix.' },
      { step: '02', title: 'UX & Clickable Prototype', desc: 'Design clean user flows, self-serve onboarding, and superadmin management views.' },
      { step: '03', title: 'Multi-Tenant Core Build', desc: 'Engineer data schemas, tenant resolvers, authentication, and core workflow engine.' },
      { step: '04', title: 'Billing & Integration', desc: 'Connect payment gateways, email/SMS triggers, webhook infrastructure, and analytics.' },
      { step: '05', title: 'Beta Launch & Scale', desc: 'Staged rollout to early adopters, real-time error logging, and performance optimization.' }
    ],
    faqs: [
      { question: 'What is the typical timeline for an MVP SaaS build?', answer: 'A focused, production-ready MVP typically takes 8 to 12 weeks from initial product discovery to live beta deployment.' },
      { question: 'How do you prevent data leaks between different SaaS tenants?', answer: 'We enforce tenant isolation at multiple layers: tenant-scoped connection pools, Row Level Security (RLS) policies in PostgreSQL, and strict authorization middleware on every API call.' }
    ],
    caseStudySlugs: ['deliver-my-tune-music-saas', 'dovemed-healthcare-saas', 'veda-academy-lms'],
    relatedIndustries: ['edtech', 'healthcare', 'retail-ecommerce']
  },
  {
    id: 'web-application-development',
    slug: 'web-application-development',
    title: 'Web Application Development',
    category: 'Core Software Engineering',
    tagline: 'High-performance, secure, and modern web applications built on Next.js, React, and cloud backends.',
    shortDescription: 'Developing lightning-fast, accessible, and responsive web applications, customer portals, and real-time administrative platforms.',
    fullDescription: 'From high-traffic customer-facing web applications to data-heavy enterprise portals and real-time collaboration tools, EVD Technology builds lightning-fast web applications with clean TypeScript architectures, sub-second load times, and fluid UI experiences.',
    icon: 'Globe',
    bannerGradient: 'from-cyan-600/20 via-blue-500/10 to-transparent',
    businessProblems: [
      'Slow, bloated web applications that hurt user retention, SEO rankings, and conversion rates.',
      'Unresponsive or broken layouts on mobile, tablet, and ultra-wide devices.',
      'Security vulnerabilities in legacy web frameworks risking customer data breaches.',
      'Inability to handle spikes in concurrent traffic during product launches or peak hours.'
    ],
    keySolutions: [
      'Modern Server-Side Rendered (SSR) & Static Site Generated (SSG) architectures via Next.js.',
      'Optimized Core Web Vitals achieving 95+ PageSpeed scores and sub-second First Contentful Paint.',
      'Real-time data streaming and WebSocket infrastructure for instantaneous collaborative updates.',
      'Enterprise customer portals with granular self-service features and audit logging.'
    ],
    features: [
      { title: 'Enterprise Web Portals', description: 'Secure member dashboards, document management, and self-service account portals.' },
      { title: 'Real-Time Web Applications', description: 'Live notification hubs, interactive analytics charts, and multi-user collaborative editors.' },
      { title: 'Customer & Partner Portals', description: 'Streamlined vendor management, B2B order entry, and ticket resolution portals.' },
      { title: 'Progressive Web Apps (PWA)', description: 'Installable web apps with offline caching, push notifications, and native-like speed.' },
      { title: 'Admin & Operational Consoles', description: 'Data-dense tables, advanced multi-parameter filtering, CSV/Excel export, and action auditing.' }
    ],
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Python', 'GraphQL', 'Vercel'],
    deliverables: ['Production Web Application', 'Responsive Layout System (Mobile, Tablet, Desktop)', 'Component Library & Design Tokens', 'SEO Metadata & Sitemap Integration', 'Web Security Headers & CSP Setup'],
    processSteps: [
      { step: '01', title: 'Architecture Planning', desc: 'Selecting optimal rendering strategies (SSR, SSG, ISR) and state management patterns.' },
      { step: '02', title: 'Component Design System', desc: 'Building modular, accessible, and responsive UI components in TypeScript.' },
      { step: '03', title: 'Full-Stack Integration', desc: 'Connecting frontend interfaces with backend APIs, authentication, and databases.' },
      { step: '04', title: 'Performance Optimization', desc: 'Asset compression, code-splitting, tree-shaking, and Core Web Vitals tuning.' }
    ],
    faqs: [
      { question: 'Do you build SEO-friendly web applications?', answer: 'Yes! We leverage Next.js Server Components, dynamic Open Graph generation, structured JSON-LD schemas, and pre-rendered HTML to maximize search engine visibility.' }
    ],
    caseStudySlugs: ['major-kalshi-classes', 'travel-bastar-portal'],
    relatedIndustries: ['edtech', 'travel-hospitality', 'retail-ecommerce']
  },
  {
    id: 'mobile-app-development',
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    category: 'Core Software Engineering',
    tagline: 'Native and cross-platform mobile apps for iOS and Android delivering seamless touch experiences.',
    shortDescription: 'Engineering high-performance mobile applications using Flutter, React Native, and native SDKs with offline support, biometric security, and real-time sync.',
    fullDescription: 'EVD Technology builds consumer-grade and enterprise-grade mobile applications for iOS and Android. Whether building a high-engagement consumer application or a field-force enterprise tool, we craft responsive, touch-optimized experiences with offline data sync, push notification pipelines, and robust security.',
    icon: 'Smartphone',
    bannerGradient: 'from-emerald-600/20 via-teal-500/10 to-transparent',
    businessProblems: [
      'High development cost maintaining separate native codebases for iOS and Android.',
      'Poor offline functionality frustrating field workers and remote users.',
      'High battery drain, laggy scroll performance, and frequent app store rejection.',
      'Weak mobile security exposing local tokens, cached data, and API keys.'
    ],
    keySolutions: [
      'Cross-platform development via Flutter & React Native reducing time-to-market by 40%.',
      'Robust offline-first architecture with local SQLite/Realm persistence and background sync.',
      'Smooth 60/120 FPS animations, lightweight state management, and optimized native bridges.',
      'Biometric authentication (FaceID/TouchID), encrypted local keychains, and SSL pinning.'
    ],
    features: [
      { title: 'Cross-Platform iOS & Android', description: 'Single performant codebase delivering native look, feel, and hardware acceleration.' },
      { title: 'Field-Force & Enterprise Apps', description: 'Geolocation check-ins, barcode/QR scanning, offline task logging, and supervisor approvals.' },
      { title: 'Real-Time Location & Tracking', description: 'Live GPS routing, geofencing triggers, ETA calculation, and driver tracking engines.' },
      { title: 'Push Notification Pipelines', description: 'Targeted rich push notifications, deep links, in-app messaging, and automated campaigns.' },
      { title: 'App Store Optimization & Deployment', description: 'Full release management, compliance checks, screenshots, and App Store / Play Store approvals.' }
    ],
    technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'SQLite', 'GraphQL', 'Fastlane'],
    deliverables: ['Compiled iOS (.ipa) and Android (.apk/.aab) builds', 'App Store and Google Play listing assets', 'Backend API Gateway & Push Notification Engine', 'Source Code repository & CI/CD deployment scripts'],
    processSteps: [
      { step: '01', title: 'Mobile UX & Wireframing', desc: 'Platform-specific ergonomics, gesture navigation, and touch-target optimization.' },
      { step: '02', title: 'Offline-First Architecture', desc: 'Designing local caching, conflict resolution, and background sync adapters.' },
      { step: '03', title: 'Hardware & Sensor Integration', desc: 'Camera, GPS, Bluetooth, biometric, and accelerometer hardware interfacing.' },
      { step: '04', title: 'Device Matrix QA', desc: 'Testing across 30+ physical screen sizes, OS versions, and network throttling conditions.' },
      { step: '05', title: 'Store Deployment', desc: 'Publishing to Apple App Store & Google Play with compliance guarantees.' }
    ],
    faqs: [
      { question: 'Should we choose Flutter or React Native for our mobile app?', answer: 'We evaluate your ecosystem: Flutter is ideal for highly custom canvas UIs and high-fps rendering; React Native is optimal when sharing significant code and state with an existing React web platform.' }
    ],
    caseStudySlugs: ['major-kalshi-classes', 'travel-bastar-portal', 'dovemed-healthcare-saas'],
    relatedIndustries: ['edtech', 'healthcare', 'travel-hospitality']
  },
  {
    id: 'custom-erp-crm',
    slug: 'erp-crm',
    title: 'Custom ERP & CRM Systems',
    category: 'Enterprise & Digital Solutions',
    tagline: 'Centralized operational intelligence connecting sales, inventory, finance, HR, and supply chain.',
    shortDescription: 'Unifying fragmented corporate operations with bespoke ERP, CRM, HRMS, and automated reporting systems tailored to your specific organizational hierarchy.',
    fullDescription: 'Generic ERP and CRM systems force companies into rigid workflows that do not match real-world operations. EVD Technology designs and implements custom ERP and CRM solutions that mirror your actual business hierarchies, approval matrices, warehouse layouts, and customer journeys.',
    icon: 'Building2',
    bannerGradient: 'from-amber-600/20 via-orange-500/10 to-transparent',
    businessProblems: [
      'Expensive per-user licensing fees for off-the-shelf ERPs with 80% unused features.',
      'Disconnected departments leading to inventory stockouts, billing delays, and lost leads.',
      'Manual paperwork and lack of transparent audit trails for management.',
      'Inability to customize multi-level approvals, tax rules, and regional compliance.'
    ],
    keySolutions: [
      'Zero per-user recurring license fees with custom-built, company-owned ERP platforms.',
      'Real-time unified dashboard combining sales pipelines, warehouse stock, and cash flow.',
      'Automated multi-level approval workflows with email, SMS, and WhatsApp alerts.',
      'Integrated GST, TDS, e-Invoicing, and multi-currency accounting modules.'
    ],
    features: [
      { title: 'End-to-End CRM & Lead Pipeline', description: 'Lead auto-capture, call logging, automated follow-up cadences, and conversion analytics.' },
      { title: 'Inventory & Multi-Warehouse Control', description: 'Batch tracking, serialized items, barcode scanning, reorder triggers, and stock transfer logs.' },
      { title: 'HRMS & Payroll Management', description: 'Biometric attendance sync, leave management, automated salary slips, PF/ESI compliance.' },
      { title: 'Procurement & Vendor Portal', description: 'Purchase requisition (PR), Purchase Order (PO) approvals, vendor quotations, and 3-way matching.' },
      { title: 'Financial Accounting & Tax Invoicing', description: 'Automated ledger posting, profit & loss, balance sheet, GST/e-way bill generation.' }
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Python', 'Redis', 'Docker', 'Metabase', 'Tailwind CSS'],
    deliverables: ['Custom ERP / CRM Web Application', 'Role-based Mobile Companion App for Field Staff', 'Automated GST / Invoice PDF Generation Engine', 'Historical Data Migration Scripts', 'Staff Training Manuals & Video Guides'],
    processSteps: [
      { step: '01', title: 'Departmental Workflow Audit', desc: 'Documenting every form, approval chain, inventory checkpoint, and report requirement.' },
      { step: '02', title: 'Relational Schema Modeling', desc: 'Designing ACID-compliant relational schemas for millions of transaction records.' },
      { step: '03', title: 'Module-by-Module Delivery', desc: 'Staged deployment starting from CRM/Sales, moving to Inventory, then Finance.' },
      { step: '04', title: 'Legacy Data Migration', desc: 'Cleaning, validating, and migrating historical data from Excel / Tally / legacy systems.' }
    ],
    faqs: [
      { question: 'Can you migrate data from our existing Tally or Excel sheets?', answer: 'Yes. We build automated data validation and migration pipelines to import historical customer data, opening balances, inventory items, and transaction logs with zero data loss.' }
    ],
    caseStudySlugs: ['pcmw-workflow-automation', 'vedanta-industrial-monitoring'],
    relatedIndustries: ['manufacturing-agritech', 'retail-ecommerce', 'govtech']
  },
  {
    id: 'ecommerce-marketplace',
    slug: 'ecommerce-marketplace',
    title: 'E-Commerce & Marketplace Platforms',
    category: 'Enterprise & Digital Solutions',
    tagline: 'High-converting B2C e-commerce, B2B wholesale portals, and multi-vendor marketplace engines.',
    shortDescription: 'Scalable commerce architectures supporting instant checkouts, multi-vendor commission splits, dynamic pricing, and deep logistics integrations.',
    fullDescription: 'We engineer modern e-commerce storefronts and multi-vendor marketplaces built for speed, conversion, and complex fulfillment. From lightning-fast headless commerce frontends to multi-vendor commission engines and automated warehouse routing, our platforms scale reliably through flash sales and high-volume order surges.',
    icon: 'ShoppingCart',
    bannerGradient: 'from-pink-600/20 via-rose-500/10 to-transparent',
    businessProblems: [
      'High cart abandonment due to slow page loads and complex multi-step checkout forms.',
      'Difficulty orchestrating orders across multiple third-party logistics (3PL) partners.',
      'Complex commission calculations, vendor payouts, and return reconciliations in multi-vendor models.',
      'Platform crashes during holiday flash sales and marketing campaign traffic surges.'
    ],
    keySolutions: [
      'Sub-second Headless Commerce frontends powered by Next.js and optimized CDN edge caching.',
      'Multi-Vendor Marketplace engine with vendor dashboards, automated commission splits, and payouts.',
      'Unified shipping aggregator integration (Shiprocket, Delhivery, Bluedart, FedEx) with live tracking.',
      'High-concurrency checkout microservice capable of processing 10,000+ orders per minute.'
    ],
    features: [
      { title: 'B2C Fast-Checkout Stores', description: 'One-click checkout, address auto-fill, OTP logins, and personalized product recommendations.' },
      { title: 'B2B Wholesale & Credit Portals', description: 'Tiered wholesale pricing, minimum order quantities (MOQ), credit lines, and bulk quote requests.' },
      { title: 'Multi-Vendor Marketplace Engine', description: 'Vendor onboarding, commission rule engines, vendor payout automation, and rating systems.' },
      { title: 'Omnichannel Inventory & POS Sync', description: 'Sync online store inventory with physical retail stores and warehouse management systems.' },
      { title: 'Promotions, Coupons & Loyalty Engine', description: 'Dynamic discount rules, gift cards, referral rewards, and flash sale countdown timers.' }
    ],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'ElasticSearch', 'Stripe', 'Razorpay', 'AWS'],
    deliverables: ['Customer Web Storefront & Mobile App', 'Vendor Management & Settlement Portal', 'Superadmin Master Control Panel', 'Payment & Shipping Gateway Integrations', 'Automated Transactional Email & WhatsApp triggers'],
    processSteps: [
      { step: '01', title: 'Commerce Flow & UX Architecture', desc: 'Designing frictionless catalog discovery, search filters, and checkout funnels.' },
      { step: '02', title: 'Catalog & Inventory Setup', desc: 'Configuring variants, SKU structures, localized taxes, and warehouse mapping.' },
      { step: '03', title: 'Payment & Logistics Integration', desc: 'Connecting multi-gateway failover, COD verification, and shipping APIs.' },
      { step: '04', title: 'Stress & Load Testing', desc: 'Simulating 50,000 concurrent cart additions to guarantee zero-downtime flash sales.' }
    ],
    faqs: [
      { question: 'Do you support multi-vendor commission payouts?', answer: 'Yes. Our marketplace engine automatically calculates marketplace commissions, deducts gateway charges, generates vendor GST invoices, and executes automated payouts.' }
    ],
    caseStudySlugs: ['chhattisgarh-herbals', 'deliver-my-tune-music-saas'],
    relatedIndustries: ['retail-ecommerce', 'manufacturing-agritech']
  },
  {
    id: 'government-tech',
    slug: 'government-tech',
    title: 'Government Tech & Public Sector Solutions',
    category: 'Enterprise & Digital Solutions',
    tagline: 'Secure, accessible, and high-impact digital governance platforms serving millions of citizens.',
    shortDescription: 'Building mission-critical public sector portals, citizen service delivery workflows, direct benefit transfer (DBT) systems, and transparent governance dashboards.',
    fullDescription: 'EVD Technology has a proven track record delivering mission-critical digital governance systems for state and central government departments. We understand the rigorous security, accessibility, multi-language localization, auditability, and massive concurrency requirements demanded by public sector initiatives.',
    icon: 'Landmark',
    bannerGradient: 'from-amber-700/20 via-orange-600/10 to-transparent',
    businessProblems: [
      'Citizens facing long physical queues and paper-heavy application processes.',
      'Lack of real-time visibility into public scheme disbursements and project milestones.',
      'Stringent security, CERT-In compliance, and data sovereignty requirements.',
      'Massive traffic spikes during public exam results or scheme registration deadlines.'
    ],
    keySolutions: [
      'End-to-end paperless citizen portals with Aadhaar/e-KYC verification and SMS/WhatsApp notifications.',
      'Real-time administrative dashboards showing district-level KPIs, budgets, and beneficiary progress.',
      'Hardened cloud architectures adhering to Government Data Security & CERT-In guidelines.',
      'Autoscaling infrastructure capable of handling millions of simultaneous citizen requests.'
    ],
    features: [
      { title: 'Citizen Service Portals (G2C)', description: 'Application submission, document uploading, tracking, digital certificate issuance, and payments.' },
      { title: 'Direct Benefit Transfer (DBT) Workflows', description: 'Beneficiary validation, eligibility checking, PFMS integration, and disbursement tracking.' },
      { title: 'State & District Command Dashboards', description: 'Visual GIS maps, scheme saturation metrics, grievance heatmaps, and officer performance.' },
      { title: 'Public Grievance Redressal Systems', description: 'Multi-channel grievance lodging (Web, Mobile, IVR), automated routing, and SLA tracking.' },
      { title: 'Multi-Lingual & Accessibility (WCAG 2.1)', description: 'Full support for regional Indian languages, screen-reader compliance, and low-bandwidth modes.' }
    ],
    technologies: ['React.js', 'Python / Django', 'PostgreSQL', 'Redis', 'Docker', 'NIC Cloud / MeitY-empaneled Cloud', 'ElasticSearch'],
    deliverables: ['Fully Certified GovTech Web & Mobile Application', 'Security Audit Clearance & Vulnerability Assessment Report', 'District & State Level KPI Command Center', 'Complete Source Code, Schema DDL & Deployment Runbooks'],
    processSteps: [
      { step: '01', title: 'Departmental Scoping & Compliance Review', desc: 'Understanding departmental workflows, GFR rules, and data privacy protocols.' },
      { step: '02', title: 'Accessible UX & Multi-lingual Design', desc: 'Designing simple interfaces accessible on basic mobile devices and regional languages.' },
      { step: '03', title: 'Security Hardening & Role Segregation', desc: 'Strict separation of Maker-Checker roles, digital signatures, and audit logs.' },
      { step: '04', title: 'Third-Party Security Audit', desc: 'Undergoing rigorous CERT-In empaneled security testing prior to public launch.' }
    ],
    faqs: [
      { question: 'Do your government platforms comply with CERT-In security standards?', answer: 'Yes. All our public sector platforms are architected to meet CERT-In security audit standards, including OWASP Top 10 mitigation, encryption at rest, and tamper-proof audit trails.' }
    ],
    caseStudySlugs: ['govt-of-assam', 'govt-of-chhattisgarh', 'travel-bastar-portal'],
    relatedIndustries: ['govtech', 'edtech']
  },
  {
    id: 'ui-ux-design',
    slug: 'ui-ux',
    title: 'UI/UX & Graphic Design',
    category: 'Enterprise & Digital Solutions',
    tagline: 'Human-centric user experience research, design systems, and conversion-focused interfaces.',
    shortDescription: 'Transforming complex data and operational workflows into intuitive, beautiful, and accessible digital interfaces that users love.',
    fullDescription: 'Great enterprise software must be intuitive, accessible, and fast. Our product designers combine deep user research, cognitive psychology, and modern design systems to craft interfaces that reduce cognitive friction, accelerate user onboarding, and drive business outcomes.',
    icon: 'Palette',
    bannerGradient: 'from-violet-600/20 via-fuchsia-500/10 to-transparent',
    businessProblems: [
      'High software training costs caused by cluttered, confusing legacy enterprise screens.',
      'Low user adoption and high drop-off rates in customer-facing applications.',
      'Inconsistent visual brand identity and UI components across different product lines.',
      'Lack of accessibility standards excluding users with visual or physical impairments.'
    ],
    keySolutions: [
      'Enterprise UX Audits identifying bottlenecks, friction points, and navigation inefficiencies.',
      'Comprehensive Design Systems with tokenized typography, colors, and reusable Figma components.',
      'Interactive clickable prototypes allowing stakeholder validation before writing a line of code.',
      'Full WCAG 2.1 AA accessibility compliance across contrast, focus states, and screen readers.'
    ],
    features: [
      { title: 'User Research & Journey Mapping', description: 'User interviews, task analysis, workflow friction mapping, and persona synthesis.' },
      { title: 'Wireframing & Interactive Prototyping', description: 'Low and high-fidelity prototypes tested with real users to validate UX flows.' },
      { title: 'Enterprise Design Systems', description: 'Complete Figma UI component libraries synchronized with React / Tailwind design tokens.' },
      { title: 'Complex Data Dashboard Design', description: 'Visual hierarchy for data-dense tables, charts, live telemetry, and filtering widgets.' },
      { title: 'Brand Identity & Visual Assets', description: 'Typography guidelines, iconography systems, marketing collateral, and brand assets.' }
    ],
    technologies: ['Figma', 'Adobe Creative Suite', 'Tailwind CSS', 'Framer', 'Storybook', 'Lottie'],
    deliverables: ['Full Figma Design File with Design System', 'Clickable High-Fidelity Prototype', 'Developer Handover Specs with Tokenized CSS', 'Iconography & Vector Illustration Pack'],
    processSteps: [
      { step: '01', title: 'UX Research & Heuristic Evaluation', desc: 'Auditing existing screens and studying target user workflows.' },
      { step: '02', title: 'Information Architecture & Wireframes', desc: 'Structuring user flows, screen hierarchies, and core interaction patterns.' },
      { step: '03', title: 'Visual UI Design & Tokenization', desc: 'Applying color psychology, typography hierarchy, and enterprise brand aesthetics.' },
      { step: '04', title: 'Interactive Prototyping & Usability Testing', desc: 'Testing edge-cases with real stakeholders to eliminate confusion.' }
    ],
    faqs: [
      { question: 'Do you provide developer-ready Figma files?', answer: 'Yes! Our Figma files include auto-layout, complete design tokens (colors, typography, spacing), responsive variants, hover states, and Storybook integration guidelines.' }
    ],
    caseStudySlugs: ['dovemed-healthcare-saas', 'travel-bastar-portal'],
    relatedIndustries: ['healthcare', 'edtech', 'retail-ecommerce']
  },
  {
    id: 'ai-ml',
    slug: 'ai-ml',
    title: 'Artificial Intelligence & Machine Learning',
    category: 'Emerging Technologies & Data',
    tagline: 'Practical AI, GenAI agents, predictive intelligence, and workflow automation tailored for real ROI.',
    shortDescription: 'Implementing production-grade AI solutions including Retrieval-Augmented Generation (RAG), intelligent document processing, predictive models, and conversational AI.',
    fullDescription: 'We move beyond AI hype to build secure, reliable, and high-ROI artificial intelligence systems for enterprise operations. From LLM-powered knowledge assistants and automated document extraction to predictive maintenance and intelligent lead routing, we integrate AI directly into your existing software workflows.',
    icon: 'Sparkles',
    bannerGradient: 'from-blue-600/20 via-indigo-600/10 to-transparent',
    businessProblems: [
      'Manual, repetitive data entry and document validation consuming thousands of team hours.',
      'Enterprise knowledge locked in siloed PDFs, manuals, and internal databases.',
      'Customer support teams overwhelmed with routine repetitive inquiries.',
      'Unstructured data failing to provide actionable predictive insights for decision-makers.'
    ],
    keySolutions: [
      'Enterprise RAG Knowledge Systems enabling natural language queries over private company data.',
      'Intelligent Document Processing (IDP) extracting structured data from invoices, forms, and IDs.',
      'Autonomous AI Agents capable of multi-step task execution, scheduling, and database lookups.',
      'Predictive Machine Learning models for demand forecasting, churn prevention, and anomaly detection.'
    ],
    features: [
      { title: 'Generative AI & Enterprise RAG', description: 'Private, hallucination-guarded AI search over corporate documents and databases.' },
      { title: 'AI Chatbots & Virtual Assistants', description: 'Omnichannel customer support bots with human handoff, CRM sync, and sentiment analysis.' },
      { title: 'Computer Vision & OCR Automation', description: 'Automated invoice digitization, license plate recognition, and visual defect inspection.' },
      { title: 'Predictive Analytics & Churn Models', description: 'Statistical ML pipelines forecasting customer lifetime value, inventory needs, and demand.' },
      { title: 'AI Voice & Tele-Calling Automation', description: 'Intelligent conversational voice agents for lead qualification, payment reminders, and surveys.' }
    ],
    technologies: ['Python', 'PyTorch', 'LangChain', 'OpenAI / Gemini API', 'Qdrant / Pinecone Vector DB', 'FastAPI', 'Docker', 'AWS SageMaker'],
    deliverables: ['Custom AI / ML Pipeline & API Service', 'Enterprise Vector Search Database Setup', 'Guardrail & Prompt Governance Layer', 'Admin Fine-Tuning & Prompt Analytics Console'],
    processSteps: [
      { step: '01', title: 'Data Audit & Feasibility', desc: 'Evaluating existing data assets, privacy constraints, and business ROI.' },
      { step: '02', title: 'Data Pipeline & Chunking', desc: 'Cleaning, anonymizing, embedding, and indexing corporate data into vector stores.' },
      { step: '03', title: 'Model Orchestration & RAG', desc: 'Building prompt templates, retrieval algorithms, and factual grounding guardrails.' },
      { step: '04', title: 'Evaluation & Human-in-the-Loop', desc: 'Benchmarking accuracy, latency, hallucinations, and fallback triggers.' }
    ],
    faqs: [
      { question: 'How do you prevent AI from hallucinating or exposing confidential data?', answer: 'We employ strict Retrieval-Augmented Generation (RAG) with source citations, semantic vector filtering, role-based document access controls, and prompt-injection guardrails.' }
    ],
    caseStudySlugs: ['dovemed-healthcare-saas', 'vedanta-industrial-monitoring'],
    relatedIndustries: ['healthcare', 'manufacturing-agritech', 'edtech']
  },
  {
    id: 'data-analytics-bi',
    slug: 'data-analytics-bi',
    title: 'Data Analytics & Business Intelligence',
    category: 'Emerging Technologies & Data',
    tagline: 'Transform raw operational data into interactive, real-time executive decision intelligence.',
    shortDescription: 'Building centralized data pipelines, automated ETL workflows, real-time KPI dashboards, and self-serve reporting suites.',
    fullDescription: 'We help enterprise leadership eliminate guesswork by unifying disparate data streams into high-impact interactive dashboards and automated reporting pipelines. Our BI architectures provide real-time visibility into revenue, customer retention, operational bottlenecks, and unit economics.',
    icon: 'BarChart3',
    bannerGradient: 'from-cyan-600/20 via-emerald-600/10 to-transparent',
    businessProblems: [
      'Leaders waiting days or weeks for manual Excel reports from different teams.',
      'Inconsistent numbers across marketing, sales, and accounting creating decision deadlock.',
      'Slow database queries caused by analytical reports running directly on production OLTP databases.',
      'Inability to track real-time operational metrics during active business hours.'
    ],
    keySolutions: [
      'Automated ETL / ELT data pipelines unifying databases, CRMs, ad platforms, and payment gateways.',
      'Dedicated Data Warehouse / Data Lake architecture (ClickHouse, BigQuery, Snowflake, PostgreSQL).',
      'Real-time Executive KPI dashboards with drill-down capabilities and automated email digests.',
      'Role-based reporting portals giving managers instant access to their unit’s metrics.'
    ],
    features: [
      { title: 'Executive KPI Command Centers', description: 'Single-screen overview of revenue, MRR, churn, CAC, margins, and operational health.' },
      { title: 'Automated ETL & Data Warehousing', description: 'Nightly or real-time data extraction, transformation, and denormalization pipelines.' },
      { title: 'Embedded Analytics for Portals', description: 'Customer-facing interactive charts and downloadable analytical PDF reports.' },
      { title: 'Operational Anomaly Alerts', description: 'Automated Slack/Email triggers when metrics drop below thresholds or spike unexpectedly.' }
    ],
    technologies: ['PostgreSQL', 'ClickHouse', 'Google BigQuery', 'Python', 'Apache Superset', 'Metabase', 'Power BI', 'dbt'],
    deliverables: ['Custom Interactive BI Dashboard', 'Data Warehouse Schema & ETL Scripts', 'Automated Daily / Weekly Email Digest Service', 'Data Dictionary & Governance Documentation'],
    processSteps: [
      { step: '01', title: 'Metric Definition Workshop', desc: 'Establishing single source of truth definitions for all key performance indicators.' },
      { step: '02', title: 'Data Pipeline Engineering', desc: 'Building robust connectors to extract data from operational DBs without performance impact.' },
      { step: '03', title: 'Dashboard UX & Visualizations', desc: 'Designing scannable, intuitive charts tailored to executive and operational roles.' }
    ],
    faqs: [
      { question: 'Will running analytical dashboards slow down our live production database?', answer: 'No. We configure read-replicas or dedicated analytical data warehouses (like ClickHouse or BigQuery) so analytical queries never impact production user transactions.' }
    ],
    caseStudySlugs: ['vedanta-industrial-monitoring', 'govt-of-chhattisgarh'],
    relatedIndustries: ['manufacturing-agritech', 'govtech', 'retail-ecommerce']
  },
  {
    id: 'cloud-devops',
    slug: 'cloud-devops',
    title: 'Cloud Migration & DevOps',
    category: 'Emerging Technologies & Data',
    tagline: 'High-availability cloud infrastructure, automated CI/CD pipelines, and proactive DevOps monitoring.',
    shortDescription: 'Migrating legacy on-premise infrastructure to AWS and Google Cloud with containerization, Kubernetes, infrastructure-as-code, and 99.9% uptime SLAs.',
    fullDescription: 'EVD Technology architects, optimizes, and manages resilient cloud infrastructure on AWS and Google Cloud. We implement automated CI/CD release pipelines, Docker/Kubernetes container orchestration, proactive observability, and cloud cost optimization to keep your applications fast, secure, and always online.',
    icon: 'Cloud',
    bannerGradient: 'from-blue-600/20 via-sky-500/10 to-transparent',
    businessProblems: [
      'Frequent server downtime during unexpected traffic surges causing revenue loss.',
      'Manual, error-prone software deployments taking hours and requiring late-night maintenance windows.',
      'Skyrocketing cloud bills with unmonitored over-provisioned idle resources.',
      'Lack of automated disaster recovery and backup verification risking catastrophic data loss.'
    ],
    keySolutions: [
      'Zero-downtime Blue/Green and Canary automated CI/CD deployment pipelines.',
      'Autoscaling container clusters (Docker, Kubernetes, AWS ECS, Google Cloud Run).',
      'Infrastructure as Code (Terraform) ensuring 100% reproducible and audit-ready cloud setups.',
      'FinOps cloud cost audits reducing infrastructure spend by 25% to 45% without performance loss.'
    ],
    features: [
      { title: 'Zero-Downtime Cloud Migration', description: 'Database and compute migration from on-premise or shared hosting to modern cloud.' },
      { title: 'Automated CI/CD Release Pipelines', description: 'GitHub Actions / GitLab CI automating unit tests, security scans, and production rollouts.' },
      { title: 'Container Orchestration', description: 'Dockerizing applications for consistent execution across development, staging, and production.' },
      { title: '24/7 Monitoring & APM Telemetry', description: 'Prometheus, Grafana, Datadog setup tracking server CPU, RAM, latencies, and error rates.' },
      { title: 'Disaster Recovery & Automated Backups', description: 'Multi-region point-in-time database backups and automated failover testing.' }
    ],
    technologies: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Nginx', 'Prometheus & Grafana'],
    deliverables: ['Terraform Infrastructure-as-Code scripts', 'Automated GitHub Actions CI/CD pipeline', 'Grafana Observability & Alerting Dashboard', 'Disaster Recovery Runbook & SLA Guarantee'],
    processSteps: [
      { step: '01', title: 'Infrastructure Audit & Sizing', desc: 'Analyzing current compute utilization, network bottlenecks, and security vulnerabilities.' },
      { step: '02', title: 'Architecture Blueprint', desc: 'Designing VPC networks, private subnets, security groups, and autoscaling triggers.' },
      { step: '03', title: 'Staging & Load Testing', desc: 'Deploying staging environments to stress-test failovers and auto-recovery mechanisms.' },
      { step: '04', title: 'Production Cutover', desc: 'Executing DNS switch with zero customer disruption and immediate post-launch telemetry.' }
    ],
    faqs: [
      { question: 'How do you handle cloud cost optimization (FinOps)?', answer: 'We eliminate orphaned volumes, rightsized underutilized EC2/RDS instances, configure spot/reserved instances, implement auto-sleep for non-prod environments, and enable automated S3 lifecycle tiering.' }
    ],
    caseStudySlugs: ['major-kalshi-classes', 'vedanta-industrial-monitoring'],
    relatedIndustries: ['edtech', 'manufacturing-agritech', 'healthcare']
  },
  {
    id: 'seo',
    slug: 'seo',
    title: 'Search Engine Optimization (SEO)',
    category: 'Marketing & Growth',
    tagline: 'Technical SEO, programmatic architecture, and high-intent keyword strategies that drive organic inbound growth.',
    shortDescription: 'Comprehensive technical and on-page SEO services designed to establish search authority, optimize Core Web Vitals, and generate sustainable qualified inbound leads.',
    fullDescription: 'We combine deep technical engineering expertise with strategic content architecture to dominate high-intent search rankings. From optimizing JavaScript rendering and Core Web Vitals to executing programmatic SEO frameworks and structured data markup, we turn search engines into your most profitable acquisition channel.',
    icon: 'Search',
    bannerGradient: 'from-emerald-600/20 via-green-500/10 to-transparent',
    businessProblems: [
      'Low organic visibility forcing total reliance on expensive paid advertisements.',
      'JavaScript-heavy frameworks failing to get indexed properly by Google and Bing bots.',
      'Technical crawl errors, slow page speeds, and missing schema markup suppressing rankings.',
      'Content ranking for low-intent traffic that fails to convert into sales inquiries.'
    ],
    keySolutions: [
      'Comprehensive Technical SEO Audits fixing crawlability, indexation, and Core Web Vitals.',
      'Schema.org JSON-LD structured data implementation for Rich Snippets and Knowledge Panels.',
      'Programmatic SEO architecture generating thousands of high-converting localized/category landing pages.',
      'Conversion-focused content strategy targeting high commercial-intent search queries.'
    ],
    features: [
      { title: 'Technical SEO & Crawl Optimization', description: 'Robots.txt, XML sitemaps, canonicals, hreflang tags, and crawl budget maximization.' },
      { title: 'Core Web Vitals & Speed Tuning', description: 'Eliminating layout shifts (CLS), improving responsiveness (INP), and speeding up LCP.' },
      { title: 'Structured Data & Schema Markup', description: 'Product, Organization, FAQ, Article, LocalBusiness, and Breadcrumb structured schemas.' },
      { title: 'High-Intent Keyword Architecture', description: 'Targeting bottom-of-funnel search terms with ready-to-buy commercial intent.' }
    ],
    technologies: ['Google Search Console', 'Ahrefs', 'SEMrush', 'Screaming Frog', 'Next.js SSR', 'JSON-LD'],
    deliverables: ['Comprehensive 50-point Technical SEO Audit', 'Keyword Opportunity & Content Roadmap', 'Structured Data Schema Validation Suite', 'Monthly Organic Traffic & Ranking Reports'],
    processSteps: [
      { step: '01', title: 'Technical Audit & Error Remediation', desc: 'Fixing 404s, redirect loops, crawl blocks, and render bottlenecks.' },
      { step: '02', title: 'Keyword Mapping & Intent Clustering', desc: 'Mapping search keywords directly to high-converting service and product pages.' },
      { step: '03', title: 'On-Page Optimization', desc: 'Optimizing title tags, meta descriptions, semantic H1-H3 headings, and internal linking.' }
    ],
    faqs: [
      { question: 'How long does it take to see tangible SEO results?', answer: 'Technical SEO fixes and schema improvements often yield crawl improvements within 2 to 4 weeks, with compounding organic rankings and lead growth typically maturing over 3 to 6 months.' }
    ],
    caseStudySlugs: ['major-kalshi-classes', 'travel-bastar-portal'],
    relatedIndustries: ['edtech', 'travel-hospitality', 'retail-ecommerce']
  },
  {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    title: 'Digital Marketing & Performance Marketing',
    category: 'Marketing & Growth',
    tagline: 'Data-driven performance campaigns, lead generation funnels, and conversion rate optimization (CRO).',
    shortDescription: 'High-ROI Google Ads, Meta advertising, B2B LinkedIn campaigns, and automated email nurturing funnels engineered for measurable pipeline growth.',
    fullDescription: 'We engineer precision digital marketing campaigns focused strictly on qualified lead acquisition and positive return on ad spend (ROAS). By aligning high-converting landing pages with targeted audience segmentations, we help B2B enterprises and tech companies scale customer acquisition predictably.',
    icon: 'TrendingUp',
    bannerGradient: 'from-amber-600/20 via-red-500/10 to-transparent',
    businessProblems: [
      'High Cost Per Acquisition (CPA) on Google and Meta ads with low lead quality.',
      'Landing pages with high bounce rates that fail to convert expensive paid traffic.',
      'Lack of full-funnel attribution obscuring which campaigns actually close revenue.',
      'Leads going cold due to lack of immediate automated follow-up cadences.'
    ],
    keySolutions: [
      'High-Intent Google Search & LinkedIn B2B campaigns targeting qualified decision-makers.',
      'Conversion Rate Optimization (CRO) with A/B tested headlines, forms, and social proof.',
      'Multi-touch conversion tracking integrating Google Analytics 4, Meta Pixel, and CRM pipelines.',
      'Automated WhatsApp & Email lead nurturing sequences converting cold prospects into meetings.'
    ],
    features: [
      { title: 'Google Search & Performance Max Ads', description: 'Targeting exact commercial keywords with negative-keyword scrubbing and smart bidding.' },
      { title: 'LinkedIn B2B Account-Based Marketing', description: 'Reaching CXOs, IT Directors, and procurement heads with hyper-targeted sponsored content.' },
      { title: 'Landing Page Conversion Optimization', description: 'Fast-loading, focused landing pages engineered to maximize form completion rates.' },
      { title: 'Automated CRM Lead Routing', description: 'Instantly delivering new leads to sales reps via WhatsApp, Email, and CRM task alerts.' }
    ],
    technologies: ['Google Ads', 'Meta Ads Manager', 'LinkedIn Campaign Manager', 'Google Tag Manager', 'GA4', 'HubSpot'],
    deliverables: ['Custom Paid Campaign Architecture', 'High-Converting Dedicated Landing Pages', 'Full-Funnel GA4 & GTM Conversion Tracking', 'Weekly Performance & CAC Dashboards'],
    processSteps: [
      { step: '01', title: 'Audience & Competitor Intelligence', desc: 'Analyzing competitor ad copy, keyword bids, and identifying high-intent buyer niches.' },
      { step: '02', title: 'Funnel & Creative Engineering', desc: 'Crafting persuasive ad creatives, compelling offers, and high-speed landing pages.' },
      { step: '03', title: 'Bid Management & Optimization', desc: 'Continuous negative keyword pruning, budget reallocation, and ROAS scaling.' }
    ],
    faqs: [
      { question: 'How do you measure marketing campaign success?', answer: 'We track concrete business metrics: Cost Per Qualified Lead (CPL), Customer Acquisition Cost (CAC), Pipeline Value Generated, and Return on Ad Spend (ROAS).' }
    ],
    caseStudySlugs: ['major-kalshi-classes', 'chhattisgarh-herbals'],
    relatedIndustries: ['edtech', 'retail-ecommerce']
  }
];

export const addOnServicesData: ServiceItem[] = [
  {
    id: 'addon-zoho',
    slug: 'zoho',
    title: 'Zoho Implementation & Integration',
    category: 'Add-on Services',
    tagline: 'Custom Zoho One, CRM, Books, Creator, and Analytics deployment tailored to your business.',
    shortDescription: 'End-to-end Zoho setup, custom Deluge scripting, workflow automation, and custom API integration with your existing business software.',
    fullDescription: 'EVD Technology provides comprehensive Zoho consulting, custom configuration, Deluge scripting, and bi-directional integration. We connect Zoho CRM, Books, Inventory, and Desk with your proprietary web portals and mobile applications for a single unified operational ecosystem.',
    icon: 'Briefcase',
    bannerGradient: 'from-yellow-600/20 via-amber-500/10 to-transparent',
    businessProblems: ['Standard Zoho setup failing to capture unique company approval hierarchies', 'Data trapped in Zoho without real-time sync to web/mobile portals', 'Manual data entry across Zoho Books and warehouse tools'],
    keySolutions: ['Custom Zoho Deluge script automation', 'Bi-directional REST API synchronization with custom apps', 'Automated tax invoice generation and ledger sync'],
    features: [
      { title: 'Zoho CRM Customization', description: 'Custom modules, blueprints, validation rules, and automated lead allocation.' },
      { title: 'Zoho Books & GST Automation', description: 'Automated recurring billing, e-Invoicing, and bank reconciliation.' },
      { title: 'Zoho Creator Custom Apps', description: 'Low-code departmental internal tools integrated into your corporate database.' }
    ],
    technologies: ['Zoho One', 'Zoho CRM', 'Zoho Books', 'Deluge Scripting', 'REST APIs', 'Webhooks'],
    deliverables: ['Custom Configured Zoho Suite', 'API Connectors with Custom Portals', 'Automated Workflow Blueprints', 'Staff Training & Video Documentation'],
    processSteps: [
      { step: '01', title: 'Workflow Scoping', desc: 'Mapping exact business processes to Zoho modules.' },
      { step: '02', title: 'Deluge Development & API Sync', desc: 'Writing custom automation scripts and connecting databases.' },
      { step: '03', title: 'User Training & Go-Live', desc: 'Testing end-to-end transactions and training sales and accounts staff.' }
    ],
    faqs: [{ question: 'Can Zoho sync automatically with our custom web portal?', answer: 'Yes! We build real-time webhook and REST API connectors so leads, orders, and payments sync instantaneously between your custom apps and Zoho.' }]
  },
  {
    id: 'addon-vyapar',
    slug: 'vyapar',
    title: 'Vyapar Accounting Integration',
    category: 'Add-on Services',
    tagline: 'Streamlined billing, GST invoicing, and inventory sync for Indian SMEs and retail distribution.',
    shortDescription: 'Integrating Vyapar billing software with e-commerce platforms, customer portals, and barcode inventory management.',
    fullDescription: 'We help growing businesses synchronize Vyapar billing and accounting software with their online e-commerce stores, warehouse inventory systems, and customer loyalty databases.',
    icon: 'Receipt',
    bannerGradient: 'from-red-600/20 via-orange-500/10 to-transparent',
    businessProblems: ['Manual double-entry between online orders and offline Vyapar billing', 'Stock mismatches leading to overselling across retail counters'],
    keySolutions: ['Automated order-to-invoice sync', 'Real-time stock level synchronization', 'Automated GST report preparation'],
    features: [
      { title: 'E-Commerce Order Sync', description: 'Automatic generation of Vyapar invoices when orders are placed online.' },
      { title: 'Inventory Reconciliation', description: 'Bi-directional stock updates preventing inventory discrepancies.' }
    ],
    technologies: ['Vyapar API', 'Node.js', 'PostgreSQL', 'Webhooks'],
    deliverables: ['Automated Sync Bridge', 'Inventory Sync Engine', 'Error Logging Portal'],
    processSteps: [{ step: '01', title: 'Setup', desc: 'Configuring SKU mapping and tax rules.' }, { step: '02', title: 'Integration', desc: 'Connecting webhooks to Vyapar database.' }],
    faqs: [{ question: 'Does this eliminate manual invoice creation for online sales?', answer: 'Yes, every completed online order automatically creates a corresponding GST invoice in Vyapar.' }]
  },
  {
    id: 'addon-tally',
    slug: 'tally',
    title: 'Tally ERP / Prime Integration',
    category: 'Add-on Services',
    tagline: 'Automated XML / TDL bi-directional synchronization connecting Tally with modern web platforms.',
    shortDescription: 'Enterprise Tally integration for automated sales voucher posting, bank ledger sync, master inventory updates, and multi-branch consolidation.',
    fullDescription: 'We engineer secure middleware to bridge Tally Prime / ERP 9 with your custom enterprise web applications, mobile field apps, and e-commerce stores using automated XML data exchange and TDL connectors.',
    icon: 'Calculator',
    bannerGradient: 'from-emerald-600/20 via-teal-500/10 to-transparent',
    businessProblems: ['Accountants spending hours manually entering sales and purchase orders into Tally', 'Delayed financial reporting across multiple remote warehouse branches'],
    keySolutions: ['Automated Tally XML voucher generation', 'Scheduled background sync without manual intervention', 'Multi-branch ledger consolidation'],
    features: [
      { title: 'Automated Sales & Purchase Vouchers', description: 'Direct XML injection of invoices, debit/credit notes, and receipts into Tally.' },
      { title: 'Master Ledger & Stock Item Sync', description: 'Automatic creation of new customer accounts and product SKUs in Tally.' }
    ],
    technologies: ['Tally Prime', 'TDL', 'XML Data Exchange', 'Python', 'Node.js'],
    deliverables: ['Tally Connector Middleware', 'Scheduled Background Sync Service', 'Audit Log Viewer'],
    processSteps: [{ step: '01', title: 'TDL Mapping', desc: 'Mapping company chart of accounts and tax ledgers.' }, { step: '02', title: 'Middleware Deployment', desc: 'Installing secure local/cloud sync bridge.' }],
    faqs: [{ question: 'Does this work with Tally Prime on local network servers?', answer: 'Yes, our lightweight sync agent securely communicates with on-premise Tally servers via encrypted channels.' }]
  },
  {
    id: 'addon-busy',
    slug: 'busy',
    title: 'Busy Accounting Integration',
    category: 'Add-on Services',
    tagline: 'Seamless data interchange with Busy Accounting software for manufacturing and wholesale trading.',
    shortDescription: 'Connecting Busy Accounting software with mobile order booking apps, B2B customer portals, and manufacturing batch tracking.',
    fullDescription: 'We deliver custom software bridges and API integrations connecting Busy Accounting with your company web portal, sales rep mobile apps, and automated e-way bill workflows.',
    icon: 'FileSpreadsheet',
    bannerGradient: 'from-blue-600/20 via-indigo-500/10 to-transparent',
    businessProblems: ['Field sales reps unable to check real-time customer outstanding balances in Busy', 'Manual order booking causing delivery delays'],
    keySolutions: ['Real-time outstanding balance lookup on mobile apps', 'Direct order-to-voucher posting into Busy'],
    features: [
      { title: 'Mobile Order Booking Sync', description: 'Orders booked by field reps automatically create sales orders in Busy.' },
      { title: 'Outstanding & Ledger Lookup', description: 'Sales reps can view real-time customer ledger balances and payment status.' }
    ],
    technologies: ['Busy Accounting', 'MS Access / SQL', 'REST APIs', 'Node.js'],
    deliverables: ['Busy Sync Agent', 'Mobile API Service', 'Admin Configuration Panel'],
    processSteps: [{ step: '01', title: 'Schema Analysis', desc: 'Connecting to Busy SQL/Access database.' }, { step: '02', title: 'API Gateway', desc: 'Exposing secure REST endpoints for mobile/web apps.' }],
    faqs: [{ question: 'Can field reps view customer credit limits on their phones?', answer: 'Yes, our mobile integration fetches live credit limits and outstanding dues from Busy before booking new orders.' }]
  },
  {
    id: 'addon-google-cloud',
    slug: 'google-cloud',
    title: 'Google Cloud Solutions',
    category: 'Add-on Services',
    tagline: 'Modern cloud infrastructure, Google Workspace, BigQuery analytics, and Cloud Run deployments.',
    shortDescription: 'Deploying, managing, and optimizing Google Cloud Platform (GCP) infrastructure for enterprise workloads, containerized services, and data pipelines.',
    fullDescription: 'As experienced cloud architects, we help organizations leverage Google Cloud Platform (GCP) for containerized application hosting (Cloud Run, GKE), high-speed analytics (BigQuery), and secure enterprise identity management.',
    icon: 'CloudRain',
    bannerGradient: 'from-sky-600/20 via-blue-500/10 to-transparent',
    businessProblems: ['High latency and poor scalability on traditional hosting providers', 'Complex data analytics taking hours to process large datasets'],
    keySolutions: ['Serverless Cloud Run deployment for zero idle cost', 'BigQuery analytics processing billions of rows in seconds', 'Enterprise Google Workspace integration'],
    features: [
      { title: 'Google Cloud Run & GKE Setup', description: 'Serverless container orchestration with automatic scaling to zero.' },
      { title: 'BigQuery Data Warehousing', description: 'High-speed SQL data analytics and real-time streaming ingestion.' },
      { title: 'Cloud Storage & CDN Distribution', description: 'Fast global asset delivery and encrypted object storage.' }
    ],
    technologies: ['Google Cloud Platform', 'Cloud Run', 'BigQuery', 'GKE', 'Cloud SQL', 'Firebase'],
    deliverables: ['Fully Configured GCP Project & VPC Architecture', 'Automated CI/CD Deployment Scripts', 'Cost Monitoring & Alerting Setup'],
    processSteps: [{ step: '01', title: 'Architecture Sizing', desc: 'Designing secure GCP project topology.' }, { step: '02', title: 'Deployment & Migration', desc: 'Migrating containers, databases, and assets to GCP.' }],
    faqs: [{ question: 'Why choose Google Cloud Run for web apps?', answer: 'Cloud Run provides automatic autoscaling (including scaling to zero when idle), zero server maintenance, and ultra-fast container cold starts.' }]
  }
];
