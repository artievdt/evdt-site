import { IndustryItem } from '../types';

export const industriesData: IndustryItem[] = [
  {
    id: 'edtech',
    slug: 'edtech',
    title: 'EdTech & Digital Learning',
    tagline: 'High-concurrency live classrooms, anti-piracy DRM video delivery, and adaptive AI test engines.',
    shortDescription: 'Scalable learning platforms, student information systems, automated test assessment engines, and digital academies trusted by premier institutions.',
    overview: 'The modern education sector demands rock-solid streaming infrastructure capable of handling hundreds of thousands of concurrent students during live lectures and exam results. EVD Technology designs and engineers scalable LMS architectures, dynamic DRM content protection, automated fee payment gateways, and AI-powered diagnostic test series.',
    icon: 'GraduationCap',
    challenges: [
      'Piracy and unauthorized screen recording of proprietary video courses and notes.',
      'Server crashes during peak live lecture broadcasts or mock test result declarations.',
      'Low student completion rates due to non-interactive, passive video players.',
      'Disjointed administrative tools for fee collection, attendance, and branch management.'
    ],
    solutions: [
      { title: 'Anti-Piracy DRM Video Streaming', description: 'AES-128 dynamic encryption with dynamic student watermark overlay and root/jailbreak detection.' },
      { title: 'Interactive Live Classrooms', description: 'Sub-second latency video, real-time live polls, hand-raising, and moderated live chat.' },
      { title: 'National-Standard Mock Exam Engine', description: 'Simulated exam interfaces matching NTA / JEE / NEET / Defence exam formats with detailed performance analytics.' },
      { title: 'Multi-Branch Administration', description: 'Centralized ERP for student admissions, fee instalment tracking, faculty payroll, and batch timetables.' }
    ],
    capabilities: ['LMS Development', 'DRM Video Protection', 'Live Video Streaming', 'Mock Test Engine', 'Student Mobile Apps (iOS/Android)', 'Automated WhatsApp Notifications'],
    featuredTech: ['React.js', 'Next.js', 'Node.js', 'Flutter', 'AWS CloudFront & IVS', 'PostgreSQL', 'Redis'],
    caseStudySlugs: ['major-kalshi-classes', 'veda-academy-lms'],
    faqs: [
      { question: 'How do you prevent course video piracy on mobile and web?', answer: 'We employ multi-layered video DRM: encrypted HLS chunks, tokenized time-expiring URLs, dynamic watermark overlays with the student’s phone number, and hardware-level screen recording blocking.' }
    ]
  },
  {
    id: 'healthcare',
    slug: 'healthcare',
    title: 'Healthcare & Telemedicine',
    tagline: 'Secure patient portals, doctor consultation platforms, appointment booking, and diagnostic workflows.',
    shortDescription: 'HIPAA/data-privacy conscious digital healthcare software, telemedicine consultation apps, electronic health records (EHR), and lab information systems.',
    overview: 'Healthcare applications demand uncompromising data privacy, ultra-reliable appointment scheduling, intuitive doctor-patient video consultations, and seamless medical record access. We build compliant, intuitive digital healthcare platforms that streamline clinical workflows and improve patient engagement.',
    icon: 'Activity',
    challenges: [
      'Strict medical data privacy and compliance standards for patient health records.',
      'High patient no-show rates and fragmented communication channels.',
      'Complex doctor scheduling across multiple clinics, hospitals, and virtual teleconsult slots.',
      'Difficulty exchanging diagnostic reports and medical imaging securely.'
    ],
    solutions: [
      { title: 'WebRTC Telemedicine & Video Consultations', description: 'Encrypted, HD video consultations with in-call prescription generation and document sharing.' },
      { title: 'Smart Appointment & Queue Management', description: 'Automated SMS/WhatsApp reminders, token systems, and multi-location doctor scheduling.' },
      { title: 'Secure Patient Portals & EHR', description: 'Encrypted storage of lab reports, medical histories, vaccination schedules, and prescription archives.' },
      { title: 'Diagnostic Lab & Sample Logistics', description: 'Phlebotomist home-sample collection routing, barcode vial tracking, and automated PDF report dispatch.' }
    ],
    capabilities: ['Telemedicine Platforms', 'EHR / EMR Integration', 'Doctor-Patient Mobile Apps', 'Diagnostic Lab Management', 'Medical Billing & Invoicing'],
    featuredTech: ['React.js', 'WebRTC', 'Python', 'PostgreSQL', 'Docker', 'AWS HealthLake / HIPAA-ready Cloud'],
    caseStudySlugs: ['dovemed-healthcare-saas'],
    faqs: [
      { question: 'How is patient medical data kept confidential and secure?', answer: 'All data is encrypted both in transit (TLS 1.3) and at rest (AES-256), with role-based access ensuring only authorized medical practitioners and the patient can access clinical notes.' }
    ]
  },
  {
    id: 'govtech',
    slug: 'govtech',
    title: 'Government & Public Sector (GovTech)',
    tagline: 'Mission-critical citizen portals, direct benefit transfers, transparent governance dashboards, and CERT-In compliance.',
    shortDescription: 'Delivering secure, multi-lingual, and scalable public sector digital solutions empowering state and central departments to serve millions of citizens.',
    overview: 'Public sector initiatives require rock-solid security, complete auditability, multi-language localization, and resilience under massive traffic surges. EVD Technology has partnered with multiple state governments to build citizen-facing portals, direct benefit transfer (DBT) workflows, and state command centers.',
    icon: 'Landmark',
    challenges: [
      'Massive traffic spikes during public scheme announcements or exam result releases.',
      'Complex multi-tiered bureaucratic approval matrices (Maker-Checker workflows).',
      'Stringent CERT-In security audits and strict data sovereignty requirements.',
      'Ensuring accessibility for citizens with basic smartphones and limited internet connectivity.'
    ],
    solutions: [
      { title: 'Paperless Citizen Service Portals (G2C)', description: 'End-to-end digital application submission, Aadhaar/e-KYC verification, and digital certificate downloads.' },
      { title: 'Direct Benefit Transfer (DBT) & PFMS Sync', description: 'Automated beneficiary eligibility validation, bank account verification, and disbursement tracking.' },
      { title: 'Executive State & District Dashboards', description: 'Real-time GIS mapping, scheme saturation metrics, grievance heatmaps, and officer KPI tracking.' },
      { title: 'Public Grievance Redressal Mechanisms', description: 'Automated multi-channel grievance ticket routing with SLA escalation triggers.' }
    ],
    capabilities: ['Citizen Portals', 'DBT Workflows', 'CERT-In Security Hardening', 'GIS Data Dashboards', 'Multi-Lingual Localization', 'High-Concurrency Cloud Architecture'],
    featuredTech: ['Python / Django', 'React.js', 'PostgreSQL', 'Redis', 'Docker', 'NIC Cloud / MeitY-empaneled Cloud'],
    caseStudySlugs: ['govt-of-assam', 'govt-of-chhattisgarh', 'travel-bastar-portal'],
    faqs: [
      { question: 'Have your platforms successfully cleared CERT-In security audits?', answer: 'Yes, our government systems regularly undergo and clear comprehensive third-party CERT-In empaneled vulnerability assessments and penetration testing before going live.' }
    ]
  },
  {
    id: 'retail-ecommerce',
    slug: 'retail-ecommerce',
    title: 'Retail & E-Commerce',
    tagline: 'Sub-second headless storefronts, multi-vendor marketplace engines, and omnichannel inventory management.',
    shortDescription: 'Modern B2C online shopping experiences, B2B wholesale portals, hyperlocal delivery networks, and automated shipping logistics integrations.',
    overview: 'In e-commerce, every 100ms delay in page load time costs revenue. EVD Technology engineers high-speed commerce platforms that combine sub-second catalog discovery, frictionless 1-click checkouts, multi-warehouse stock synchronization, and automated courier routing.',
    icon: 'ShoppingCart',
    challenges: [
      'Cart abandonment caused by slow storefront rendering and cluttered checkout forms.',
      'Inventory mismatches between physical retail stores and online sales channels.',
      'High shipping return rates (RTO) on Cash-on-Delivery (COD) orders.',
      'Managing complex vendor commissions and automated payouts in multi-seller marketplaces.'
    ],
    solutions: [
      { title: 'Headless Next.js Storefronts', description: 'Blazing-fast page loads with instant product filtering, dynamic search, and optimized Core Web Vitals.' },
      { title: 'Omnichannel POS & Inventory Sync', description: 'Real-time stock balance synchronization across central warehouses and physical retail stores.' },
      { title: 'Smart COD Verification & RTO Reduction', description: 'Automated OTP verification on COD orders and algorithmic fraud scoring.' },
      { title: 'Multi-Carrier Shipping Aggregation', description: 'Automated courier rate comparison, AWB generation, and live customer tracking.' }
    ],
    capabilities: ['Headless E-Commerce', 'B2B Wholesale Portals', 'Multi-Vendor Marketplaces', 'Payment & Logistics Integration', 'Loyalty & Discount Engines'],
    featuredTech: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'ElasticSearch', 'Stripe', 'Razorpay'],
    caseStudySlugs: ['chhattisgarh-herbals', 'deliver-my-tune-music-saas'],
    faqs: [
      { question: 'Can you integrate our custom storefront with existing warehouse and accounting ERPs?', answer: 'Yes! We build bi-directional API bridges connecting storefront orders with Tally, SAP, Zoho, and custom warehouse management systems.' }
    ]
  },
  {
    id: 'travel-hospitality',
    slug: 'travel-hospitality',
    title: 'Travel & Hospitality',
    tagline: 'Eco-tourism portals, hotel booking engines, tour itinerary builders, and verified guide directories.',
    shortDescription: 'Empowering tourism boards, travel operators, and hotel chains with seamless online booking engines, interactive destination guides, and secure payment processing.',
    overview: 'Travelers expect visually captivating, lightning-fast digital experiences with instant room and tour availability, transparent pricing, and effortless mobile booking. We engineer interactive travel platforms that drive direct bookings and showcase destinations.',
    icon: 'Compass',
    challenges: [
      'High commissions paid to Online Travel Agencies (OTAs) cutting into operator margins.',
      'Double-booking risks due to lack of real-time channel manager synchronization.',
      'Difficulties promoting remote eco-tourism destinations with limited physical infrastructure.',
      'Fragmented guide booking, homestay reservations, and local transport coordination.'
    ],
    solutions: [
      { title: 'Direct Booking Engine & Channel Sync', description: 'Commission-free direct booking engine with instant calendar availability and room rate management.' },
      { title: 'Interactive Destination Guides & Maps', description: 'Visual photo/video galleries, curated multi-day itineraries, and GPS-guided trail maps.' },
      { title: 'Local Guide & Homestay Verification', description: 'Marketplace platform connecting travelers directly with verified local homestay owners and guides.' },
      { title: 'Multi-Currency & Secure Payments', description: 'Seamless checkout supporting international credit cards, UPI, and instant digital booking vouchers.' }
    ],
    capabilities: ['Tourism Portals', 'Booking Engines', 'Itinerary Builders', 'Guide & Homestay Marketplaces', 'Payment Gateway Integration'],
    featuredTech: ['React.js', 'Next.js', 'Node.js', 'PostgreSQL', 'Leaflet Maps', 'Cloudflare CDN'],
    caseStudySlugs: ['travel-bastar-portal'],
    faqs: [
      { question: 'Can the tourism portal support multi-language content for international tourists?', answer: 'Yes! We build localized multilingual portals with automatic browser language detection and seamless translation workflows.' }
    ]
  },
  {
    id: 'manufacturing-agritech',
    slug: 'manufacturing-agritech',
    title: 'Manufacturing & AgriTech',
    tagline: 'Shop floor automation, supply chain traceability, IoT industrial monitoring, and agricultural trade platforms.',
    shortDescription: 'Industrial software solutions connecting production machinery, raw material procurement, farm-to-factory traceability, and enterprise resource planning.',
    overview: 'From discrete manufacturing facilities seeking to reduce machine downtime to agriculture platforms tracking farm produce procurement, EVD Technology delivers resilient industrial software that provides transparency from the source to the final consumer.',
    icon: 'Factory',
    challenges: [
      'Lack of real-time visibility into shop floor machine utilization and production bottlenecks.',
      'Manual, error-prone scrap calculations and inaccurate per-unit cost accounting.',
      'Difficulties tracking agricultural produce batch origin and quality parameters.',
      'Poor internet connectivity in remote industrial manufacturing and farming hubs.'
    ],
    solutions: [
      { title: 'Shop Floor & Machine OEE Tracking', description: 'Digital job cards, machine uptime monitoring, and stage-wise production tracking.' },
      { title: 'End-to-End Batch Traceability', description: 'QR/barcode tracking from raw material intake through processing to finished packaging.' },
      { title: 'Farmer Procurement & Weighbridge Sync', description: 'Automated weighbridge data capture, moisture testing logs, and instant farmer payment receipts.' },
      { title: 'Preventive Maintenance Scheduling', description: 'Automated machine servicing alerts based on running hours to eliminate unexpected breakdowns.' }
    ],
    capabilities: ['Industrial Manufacturing ERP', 'AgriTech Supply Chain Platforms', 'Weighbridge Integration', 'Traceability Systems', 'IoT Machine Telemetry'],
    featuredTech: ['React.js', 'Node.js', 'Python', 'PostgreSQL', 'MQTT / IoT Protocols', 'Docker'],
    caseStudySlugs: ['vedanta-industrial-monitoring', 'chhattisgarh-herbals', 'indpotrace-poultry'],
    faqs: [
      { question: 'How do you handle automated data capture from weighbridges and testing machines?', answer: 'We build lightweight local IoT edge gateways that connect via serial/RS232 or IP protocols to capture weight and sensor readings directly without manual entry.' }
    ]
  }
];
