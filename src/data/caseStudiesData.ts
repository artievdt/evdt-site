import { CaseStudyItem } from '../types';

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: 'govt-of-assam',
    slug: 'govt-of-assam',
    title: 'Government of Assam Digital Governance & Citizen Service Delivery Platform',
    client: 'Government of Assam',
    category: 'Government',
    industry: 'Public Sector & GovTech',
    tagline: 'Empowering transparent public service delivery, automated citizen workflows, and high-concurrency public welfare tracking.',
    summary: 'EVD Technology architected and deployed a mission-critical digital governance solution for the Government of Assam, streamlining citizen applications, departmental verification hierarchies, and real-time public milestone dashboards.',
    clientOverview: 'The Government of Assam required a modern, highly secure digital governance platform to transition traditional manual paper-based citizen schemes and administrative tracking into an audit-proof, transparent digital ecosystem.',
    challenge: 'Previous manual processes resulted in long turnaround times for citizen service approvals, paper-trail losses, and a lack of real-time visibility for district commissioners and state-level directors into scheme saturation and bottlenecked files.',
    objectives: [
      'Build a unified, citizen-facing portal accessible across low-bandwidth mobile networks.',
      'Implement multi-tier administrative approval workflows (Maker-Checker hierarchy).',
      'Ensure strict data security adhering to state data policies and CERT-In compliance.',
      'Provide real-time district-wise KPI dashboards for executive decision-makers.'
    ],
    solution: 'We engineered a resilient web portal and administrative workflow engine with role-based access control, automated SMS alerts for status updates, localized multi-language support, and interactive GIS-linked dashboards for state monitoring.',
    architectureHighlights: [
      'High-availability load-balanced cloud deployment with automated failover.',
      'PostgreSQL relational database with strict schema constraints and audit log triggers.',
      'RESTful microservices layer decoupling public citizen intake from internal departmental processing.',
      'End-to-end encrypted file vault for citizen identity proofs and scheme documents.'
    ],
    keyFeatures: [
      'Self-serve citizen application portal with Aadhaar/OTP authentication.',
      'Departmental verification console with digital signature signoff.',
      'District-wise progress heatmaps and saturation analytics.',
      'Automated SMS & WhatsApp status notification engine.',
      'CERT-In hardened security posture with immutable audit logs.'
    ],
    techStack: ['Python / Django', 'React.js', 'PostgreSQL', 'Redis', 'Docker', 'Nginx', 'MeitY-Empaneled Cloud'],
    developmentApproach: [
      'Comprehensive stakeholder discovery with state departmental heads.',
      'Prototyping responsive, accessible UI compliant with GIGW (Guidelines for Indian Government Websites).',
      'Rigorous security hardening, SQL-injection prevention, and penetration testing.',
      'Departmental officer onboarding and training workshops.'
    ],
    impactQualitative: [
      'Completely eliminated paper file movement for citizen service applications.',
      'Drastically reduced application processing times from weeks to verified digital days.',
      'Empowered state leaders with real-time district performance visibility on interactive maps.',
      'Successfully cleared rigorous CERT-In security audits with zero high-severity findings.'
    ],
    impactMetrics: [
      { label: 'Public Processing', value: '100% Digital' },
      { label: 'Security Clearance', value: 'CERT-In Certified' },
      { label: 'Uptime SLA', value: '99.9%' }
    ],
    testimonial: {
      quote: 'EVD Technology delivered a secure, reliable, and user-friendly digital governance system that has transformed our citizen workflow efficiency.',
      author: 'Administrative Directorate',
      role: 'Public Sector Initiative',
      organization: 'Government of Assam'
    },
    verified: true
  },
  {
    id: 'govt-of-chhattisgarh',
    slug: 'govt-of-chhattisgarh',
    title: 'Government of Chhattisgarh Public Sector Operations & Citizen Empowerment Portal',
    client: 'Government of Chhattisgarh',
    category: 'Government',
    industry: 'Public Sector & Citizen Services',
    tagline: 'Scalable citizen registry, welfare tracking, and departmental monitoring system serving state-wide initiatives.',
    summary: 'A secure, scalable public sector digital infrastructure facilitating citizen registrations, multi-tiered field verification, direct beneficiary tracking, and executive analytics for state initiatives.',
    clientOverview: 'State departments needed a robust digital infrastructure to register beneficiaries, verify ground-level data through field officers, and coordinate inter-departmental welfare operations seamlessly.',
    challenge: 'Managing massive data volume across diverse geographical districts with variable connectivity, preventing duplicate beneficiary entries, and establishing a single source of truth for public reporting.',
    objectives: [
      'Eliminate duplicate records through automated algorithmic verification.',
      'Enable field verification on mobile devices with offline caching.',
      'Provide executive leadership with transparent district-wise saturation reports.',
      'Guarantee 100% uptime during high-volume public enrollment drives.'
    ],
    solution: 'EVD Technology built a unified portal and field-ready mobile web architecture with automated deduplication algorithms, secure cloud storage, and state-wide operational dashboards.',
    architectureHighlights: [
      'PostgreSQL multi-schema architecture with row-level security.',
      'Automated background jobs processing bulk verifications and daily digest reports.',
      'ElasticSearch clustering for sub-second beneficiary record lookups across millions of entries.'
    ],
    keyFeatures: [
      'Beneficiary registration and document upload module.',
      'Field officer verification mobile interface.',
      'Executive dashboard with real-time district drill-downs.',
      'Automated deduplication and anomaly detection algorithms.'
    ],
    techStack: ['React.js', 'Python', 'PostgreSQL', 'ElasticSearch', 'Redis', 'Docker'],
    developmentApproach: [
      'Collaborative requirements gathering with state nodal officers.',
      'Agile sprints with weekly functional demonstrations.',
      'Load testing simulating hundreds of concurrent officer verifications.'
    ],
    impactQualitative: [
      'Provided absolute transparency in beneficiary records across all state districts.',
      'Prevented duplicate registrations through automated algorithmic validation.',
      'Accelerated field officer verification cycles with intuitive mobile workflows.'
    ],
    impactMetrics: [
      { label: 'Record Search Speed', value: '< 200ms' },
      { label: 'Data Accuracy', value: '99.9%' },
      { label: 'Availability', value: 'High Scale' }
    ],
    verified: true
  },
  {
    id: 'vedanta-industrial-monitoring',
    slug: 'vedanta-industrial-monitoring',
    title: 'Vedanta Enterprise Industrial Monitoring & Operational Dashboard System',
    client: 'Vedanta Limited',
    category: 'Enterprise',
    industry: 'Metals, Mining & Industrial Manufacturing',
    tagline: 'Real-time industrial operational intelligence, asset monitoring, and plant telemetry dashboards.',
    summary: 'Engineered an enterprise data visualization and industrial tracking platform for Vedanta, unifying complex plant metrics, shift logs, and operational KPIs into high-impact visual command centers.',
    clientOverview: 'Vedanta Limited is a globally diversified natural resources major. Their industrial operations require continuous tracking of plant parameters, equipment utilization, and compliance reporting.',
    challenge: 'Plant managers and operational executives were relying on disconnected shift reports and disparate SCADA logs, making it difficult to spot real-time bottlenecks and equipment downtime trends across units.',
    objectives: [
      'Centralize plant performance data into unified real-time executive dashboards.',
      'Automate daily shift operational summaries and anomaly alerts.',
      'Ensure responsive viewing on control room displays, desktop monitors, and tablets.'
    ],
    solution: 'EVD Technology developed a modern industrial dashboard suite with dynamic charting, role-based departmental filters, automated threshold alerting, and historical trend comparison tools.',
    architectureHighlights: [
      'Time-series data aggregation layer optimized for rapid analytical queries.',
      'High-performance React frontend rendering 50+ live telemetry graphs without UI frame drops.',
      'Secure on-premise/hybrid cloud gateway interfacing with industrial data historians.'
    ],
    keyFeatures: [
      'Live plant parameter telemetry and KPI cards.',
      'Shift-wise production and downtime analysis graphs.',
      'Automated email digests and escalation alerts for out-of-bound parameters.',
      'Custom report generation with one-click Excel and PDF exports.'
    ],
    techStack: ['React.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'TimescaleDB', 'Docker', 'Tailwind CSS'],
    developmentApproach: [
      'On-site understanding of plant operator workflows and control room ergonomics.',
      'High-contrast, eye-safe dark mode UI designed specifically for 24/7 monitoring screens.',
      'Iterative data validation against live industrial telemetry streams.'
    ],
    impactQualitative: [
      'Empowered plant leadership with instant, visual visibility into shop-floor parameters.',
      'Significantly reduced time spent compiling manual end-of-shift operational reports.',
      'Enabled proactive identification of machinery downtime patterns.'
    ],
    impactMetrics: [
      { label: 'Reporting Velocity', value: 'Real-Time' },
      { label: 'Data Latency', value: '< 1 sec' },
      { label: 'Monitoring', value: '24/7 Live' }
    ],
    verified: true
  },
  {
    id: 'major-kalshi-classes',
    slug: 'major-kalshi-classes',
    title: 'Major Kalshi Classes High-Scale EdTech & Live Online Learning Ecosystem',
    client: 'Major Kalshi Classes (MKC)',
    category: 'EdTech',
    industry: 'Defence EdTech & Coaching',
    tagline: 'Serving 100,000+ defence aspirants with secure DRM video lectures, live interactive classes, and simulated mock exams.',
    summary: 'EVD Technology engineered the complete digital learning ecosystem for Major Kalshi Classes, India’s premier defence coaching institute, powering their web learning portal, Android app, video streaming infrastructure, and all-India test series.',
    clientOverview: 'Major Kalshi Classes prepares tens of thousands of students across India for NDA, CDS, AFCAT, CAPF, and SSB defence exams. As student enrollment grew nationwide, they required a high-capacity digital learning platform.',
    challenge: 'Previous streaming setups suffered from rampant video screen-recording piracy, high cloud egress bills, and server crashes when thousands of students logged in simultaneously for Sunday mock exams.',
    objectives: [
      'Implement bulletproof video DRM preventing unauthorized screen recording and downloads.',
      'Deliver seamless live interactive classes with sub-second latency and student chat.',
      'Support 50,000+ concurrent students taking timed all-India mock tests without latency.',
      'Automate student fee collections, batch allocations, and study material distribution.'
    ],
    solution: 'We engineered an integrated web and Flutter mobile application with encrypted HLS video streaming, dynamic student watermark overlays, cloud autoscaling, and a real-time exam scoring engine.',
    architectureHighlights: [
      'AWS CloudFront CDN and tokenized S3 storage with AES-128 DRM video encryption.',
      'Autoscaling ECS container cluster handling massive Sunday mock test concurrency surges.',
      'Redis in-memory caching for real-time exam leaderboard calculation and question retrieval.'
    ],
    keyFeatures: [
      'Anti-piracy video player with dynamic user phone-number watermarking.',
      'Timed mock exam engine with negative marking and all-India rank percentiles.',
      'Offline video download capability inside the encrypted mobile container.',
      'Integrated payment gateway with EMI and automated fee receipt generation.'
    ],
    techStack: ['Flutter (iOS & Android)', 'React.js', 'Node.js', 'PostgreSQL', 'Redis', 'AWS CloudFront', 'AWS S3 DRM'],
    developmentApproach: [
      'Designing an intuitive student mobile UX tailored for distraction-free learning.',
      'Simulating 50,000 concurrent exam submissions during load testing.',
      'Deploying continuous CI/CD pipelines for zero-downtime course updates.'
    ],
    impactQualitative: [
      'Completely eliminated course video piracy leaks across online forums.',
      'Seamlessly scaled to support massive all-India mock test series without a single outage.',
      'Expanded MKC’s student footprint from regional offline centers to a nationwide digital academy.'
    ],
    impactMetrics: [
      { label: 'Active Students', value: '100k+' },
      { label: 'Video Piracy', value: 'Zero Leaks' },
      { label: 'Exam Concurrency', value: '50k+ Live' }
    ],
    testimonial: {
      quote: 'EVD Technology built an exceptional learning platform for MKC. The video security and test series performance have allowed us to scale nationwide with absolute confidence.',
      author: 'Academic Leadership',
      role: 'Directorate of Education',
      organization: 'Major Kalshi Classes'
    },
    verified: true
  },
  {
    id: 'deliver-my-tune-music-saas',
    slug: 'deliver-my-tune',
    title: 'Deliver My Tune Global Digital Music Distribution SaaS Platform',
    client: 'Deliver My Tune',
    category: 'Commercial & SaaS',
    industry: 'Digital Media & SaaS Platforms',
    tagline: 'Connecting independent musicians worldwide to Spotify, Apple Music, and global streaming DSPs with automated royalties.',
    summary: 'Engineered a scalable multi-tenant digital music distribution SaaS enabling independent artists to upload audio tracks, distribute globally to 50+ streaming platforms, and receive automated royalty payouts.',
    clientOverview: 'Deliver My Tune is a leading music distribution platform helping independent artists and record labels publish, monetize, and protect their musical releases worldwide.',
    challenge: 'Handling multi-gigabyte lossless audio file uploads (FLAC/WAV), validating ISRC and UPC metadata, automating ingestion feeds for international DSPs (Spotify, Apple Music, Amazon Music), and calculating split royalty payouts across multiple collaborators.',
    objectives: [
      'Build a frictionless web platform for artists to upload albums and metadata.',
      'Automate DDEX XML feed generation and distribution pipelines.',
      'Provide transparent royalty analytics and automated multi-currency payouts.'
    ],
    solution: 'EVD Technology designed and developed a high-throughput SaaS web platform featuring chunked cloud audio uploads, automated audio transcoding, automated DSP ingestion pipelines, and interactive royalty dashboards.',
    architectureHighlights: [
      'Direct-to-S3 chunked multipart upload pipeline with automated background FFmpeg transcoding.',
      'Automated DDEX (Digital Audio Exchange) XML feed generation and SFTP delivery queues.',
      'Microservice-driven royalty reconciliation engine calculating fractional percentage payouts.'
    ],
    keyFeatures: [
      'Artist release manager with automated artwork validation and ISRC generation.',
      'Interactive streaming analytics dashboard with country-wise and platform-wise breakdown.',
      'Split royalty configuration between artists, producers, and lyricists.',
      'Automated wallet withdrawal and payout gateway integration.'
    ],
    techStack: ['React.js', 'Next.js', 'Node.js', 'PostgreSQL', 'FFmpeg', 'AWS S3 & CloudFront', 'Docker'],
    developmentApproach: [
      'Close collaboration with music industry veterans to understand strict DSP delivery standards.',
      'Stress testing multi-gigabyte album uploads under varied network conditions.',
      'Designing a sleek, dark-themed UI tailored to the creative music community.'
    ],
    impactQualitative: [
      'Empowered thousands of independent artists to distribute music worldwide seamlessly.',
      'Reduced manual ingestion and metadata validation workload by over 80%.',
      'Established a trusted, automated financial accounting and royalty payout engine.'
    ],
    impactMetrics: [
      { label: 'Global DSPs', value: '50+ Connected' },
      { label: 'Audio Ingestion', value: 'Automated' },
      { label: 'Royalty Accuracy', value: '100%' }
    ],
    verified: true
  },
  {
    id: 'travel-bastar-portal',
    slug: 'travel-bastar-portal',
    title: 'Travel Bastar Eco-Tourism & Destination Experience Portal',
    client: 'District Administration / Tourism Department',
    category: 'Commercial & SaaS',
    industry: 'Tourism & Hospitality',
    tagline: 'Showcasing tribal heritage, waterfalls, certified homestays, and local tour guide bookings.',
    summary: 'A visually rich, multilingual tourism portal and verified homestay booking engine designed to promote sustainable eco-tourism in the Bastar region.',
    clientOverview: 'The regional administration sought to transform Bastar’s digital tourism presence, highlighting untouched natural attractions, tribal handicrafts, and providing direct livelihood to local homestay operators and certified guides.',
    challenge: 'Lack of centralized, authentic digital tourism information, absence of an online verified homestay directory, and difficulties in coordinating tribal tour experiences for national and international travelers.',
    objectives: [
      'Create an immersive, visually captivating destination discovery portal.',
      'Build a verified booking and inquiry system for local homestays and guides.',
      'Provide interactive GPS trail maps and multi-day itinerary planners.'
    ],
    solution: 'EVD Technology designed an editorial-grade tourism website featuring HD photo/video galleries, interactive attraction maps, verified homestay profiles, and direct traveler booking workflows.',
    architectureHighlights: [
      'Next.js static site generation with edge caching for instant global page loads.',
      'Interactive Leaflet/OpenStreetMap integration with custom geo-tagged tourist attraction pins.',
      'Lightweight progressive web app (PWA) functionality allowing tourists to access offline destination guides.'
    ],
    keyFeatures: [
      'Interactive tourist map with category filters (Waterfalls, Caves, Temples, Handicrafts).',
      'Verified homestay directory with room amenities, local food menus, and direct host contact.',
      'Certified local guide booking and tribal cultural tour packages.',
      'Curated 2-day, 3-day, and 5-day itinerary builders.'
    ],
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'PostgreSQL', 'Node.js', 'Leaflet Maps'],
    developmentApproach: [
      'Curating authentic on-ground imagery and tribal culture stories.',
      'Designing an earth-toned, modern aesthetic reflecting the region’s natural beauty.',
      'Ensuring mobile-first accessibility for travelers on 4G connections.'
    ],
    impactQualitative: [
      'Significantly amplified digital visibility for regional eco-tourism attractions.',
      'Generated direct economic opportunities for local tribal homestay owners and guides.',
      'Provided tourists with a safe, verified, and transparent travel planning platform.'
    ],
    impactMetrics: [
      { label: 'Verified Homestays', value: '100% Onboarded' },
      { label: 'Page Load Speed', value: '< 1.2 sec' },
      { label: 'Mobile Optimization', value: 'PWA Ready' }
    ],
    verified: true
  },
  {
    id: 'dovemed-healthcare-saas',
    slug: 'dovemed-healthcare-saas',
    title: 'DoveMed Comprehensive Digital Healthcare Knowledge & Hospital Network Portal',
    client: 'DoveMed',
    category: 'Healthcare',
    industry: 'Healthcare & Medical SaaS',
    tagline: 'Verified physician directory, hospital search, medical articles, and health system engagement platform.',
    summary: 'Engineered responsive web modules, physician rating directories, and medical content portals for DoveMed, connecting patients with verified healthcare practitioners and clinical insights.',
    clientOverview: 'DoveMed is a major digital healthcare information and provider directory platform helping consumers make informed healthcare decisions through physician-reviewed medical content.',
    challenge: 'Structuring vast medical taxonomies, physician specialties, hospital networks, and health articles into an intuitive, search-optimized, and lightning-fast web experience.',
    objectives: [
      'Deliver high-speed search and filtering across thousands of medical specialties and physicians.',
      'Ensure strict adherence to medical content presentation standards and accessibility.',
      'Build responsive UI components that load seamlessly on all mobile and desktop browsers.'
    ],
    solution: 'EVD Technology built modern frontend architecture, structured data schemas, physician profile engines, and interactive health quiz modules with optimized Core Web Vitals.',
    architectureHighlights: [
      'Server-Side Rendered (SSR) React components for maximum SEO indexability.',
      'ElasticSearch indexing enabling sub-100ms multi-parameter physician searches (by location, insurance, specialty).',
      'Strict Schema.org MedicalWebPage and Physician JSON-LD structured data.'
    ],
    keyFeatures: [
      'Physician directory with verified credentials, hospital affiliations, and patient reviews.',
      'Interactive health assessment quizzes and symptom checker interfaces.',
      'Hospital and clinic facility search with geo-proximity filters.',
      'Medical editorial CMS publishing peer-reviewed clinical articles.'
    ],
    techStack: ['React.js', 'Next.js', 'TypeScript', 'Node.js', 'ElasticSearch', 'PostgreSQL', 'Tailwind CSS'],
    developmentApproach: [
      'Collaborating with medical editorial teams to structure clinical metadata.',
      'Implementing strict accessibility (WCAG AA) for patients with diverse abilities.',
      'Optimizing LCP and INP web performance metrics.'
    ],
    impactQualitative: [
      'Enhanced physician discovery experience for millions of monthly healthcare seekers.',
      'Boosted organic search rankings through comprehensive medical schema markup.',
      'Delivered an ultra-clean, trustworthy, and modern healthcare aesthetic.'
    ],
    impactMetrics: [
      { label: 'Search Latency', value: '< 100ms' },
      { label: 'SEO Schema', value: '100% Validated' },
      { label: 'Accessibility', value: 'WCAG 2.1 AA' }
    ],
    verified: true
  },
  {
    id: 'pcmw-workflow-automation',
    slug: 'pcmw-workflow-automation',
    title: 'PCMW Industrial Engineering Workflow & Operations Management Suite',
    client: 'PCMW Industrial Group',
    category: 'Enterprise',
    industry: 'Heavy Engineering & Industrial Fabrication',
    tagline: 'Custom ERP and operational workflow platform automating fabrication job cards, raw material tracking, and dispatching.',
    summary: 'A bespoke enterprise operational ERP replacing fragmented spreadsheets with real-time job-card tracking, raw steel inventory control, and multi-tier purchase order approvals.',
    clientOverview: 'PCMW is a heavy industrial fabrication and engineering firm executing large-scale structural steel and manufacturing contracts.',
    challenge: 'Manual job-card tracking on the shop floor resulted in delivery delays, untracked steel scrap losses, and inaccurate customer billing calculations.',
    objectives: [
      'Digitize shop-floor job cards from raw material issue to finished fabrication.',
      'Implement real-time steel inventory tracking with heat number and test certificate traceability.',
      'Automate client milestone billing and delivery challan generation.'
    ],
    solution: 'EVD Technology engineered a tailored web ERP suite with barcode-scanned stage tracking, automated Bill of Materials (BOM) reconciliation, and instant dispatch logging.',
    architectureHighlights: [
      'Modular Node.js and PostgreSQL architecture with transactional integrity.',
      'Touchscreen-friendly shop floor terminal views designed for industrial environments.',
      'Automated PDF generation for Dispatch Challans, Mill Test Certificates, and Tax Invoices.'
    ],
    keyFeatures: [
      'Multi-stage fabrication job card tracking (Cutting, Welding, Machining, Painting, QC).',
      'Raw material inventory with batch and Mill Test Certificate (MTC) linking.',
      'Customer order progress tracker with expected dispatch milestones.',
      'Executive profitability analysis per manufacturing project.'
    ],
    techStack: ['React.js', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Tailwind CSS'],
    developmentApproach: [
      'Conducting workflow studies on the fabrication shop floor.',
      'Staged rollout of inventory modules followed by fabrication tracking.',
      'Hands-on training for floor supervisors and quality inspection staff.'
    ],
    impactQualitative: [
      'Transformed shop-floor operational transparency from estimation to verified reality.',
      'Significantly reduced raw material scrap wastage and untracked inventory.',
      'Accelerated client dispatch and invoice generation cycles.'
    ],
    impactMetrics: [
      { label: 'Shop Floor Visibility', value: '100% Real-Time' },
      { label: 'Scrap Reduction', value: '14%' },
      { label: 'Invoice Generation', value: 'Instant' }
    ],
    verified: true
  }
];
