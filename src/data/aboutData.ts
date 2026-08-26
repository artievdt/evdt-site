export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  badge: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  focus: string[];
}

export const legacyMilestones: TimelineMilestone[] = [
  {
    year: '2014',
    title: 'Founding & Engineering Inception',
    description: 'EVD Technology was founded with a foundational commitment to high-craft software engineering, clean architecture, and reliable digital product execution.',
    badge: 'Inception'
  },
  {
    year: '2016',
    title: 'Enterprise ERP & Custom Solutions Expansion',
    description: 'Scaled enterprise software capabilities, architecting bespoke ERP, CRM, and automated inventory systems for industrial manufacturing and distribution clients.',
    badge: 'Enterprise Growth'
  },
  {
    year: '2018',
    title: 'EdTech & High-Concurrency Platforms',
    description: 'Engineered high-scale digital learning ecosystems, anti-piracy DRM video engines, and mock test platforms serving 100,000+ students nationwide.',
    badge: 'Scale Milestone'
  },
  {
    year: '2020',
    title: 'GovTech & Mission-Critical Public Sector Solutions',
    description: 'Partnered with state government departments to deliver certified, secure citizen service platforms, welfare registries, and state command monitoring centers.',
    badge: 'GovTech Excellence'
  },
  {
    year: '2022',
    title: 'Global SaaS & Cloud-Native Modernization',
    description: 'Expanded global engineering delivery, building international SaaS platforms, multi-tenant cloud architectures on AWS/GCP, and headless commerce platforms.',
    badge: 'Global Footprint'
  },
  {
    year: '2024–Present',
    title: 'Enterprise AI, Product Accelerators & 10+ Year Legacy',
    description: 'Celebrating 10+ years of engineering excellence with proprietary business product accelerators, enterprise AI/ML solutions, and expanded global delivery.',
    badge: '10+ Year Legacy'
  }
];

export const coreValues = [
  {
    title: 'Integrity & Transparency',
    description: 'We believe in transparent engineering: honest technical estimations, clear code ownership, unambiguous architecture, and zero hidden costs.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Engineering Craftsmanship',
    description: 'We do not take shortcuts. We build maintainable, well-documented, test-covered, and secure code designed to scale reliably over years.',
    icon: 'Code2'
  },
  {
    title: 'Business-First Thinking',
    description: 'Technology is an enabler of business value. We align every architectural decision with real-world ROI, operational efficiency, and user adoption.',
    icon: 'TrendingUp'
  },
  {
    title: 'Long-Term Partnership',
    description: 'We measure success not by project completion, but by the multi-year growth, stability, and scale of the software platforms we build and maintain.',
    icon: 'Users'
  }
];

export const leadershipTeam: TeamMember[] = [
  {
    name: 'Executive Leadership',
    role: 'Principal Technology & Strategy Board',
    bio: 'Guided by seasoned software architects, product strategists, and enterprise consultants bringing over a decade of hands-on delivery excellence in software engineering and digital transformation.',
    focus: ['Enterprise Architecture', 'Product Strategy', 'GovTech Governance', 'Global Operations']
  },
  {
    name: 'Software Engineering Directorate',
    role: 'Full-Stack, Cloud & Mobile Architecture',
    bio: 'Directing our dedicated engineering squads across TypeScript, React, Next.js, Node.js, Python, Flutter, and cloud-native infrastructure on AWS & GCP.',
    focus: ['Scalable Architecture', 'DRM & Video Systems', 'API Microservices', 'DevOps CI/CD']
  },
  {
    name: 'AI & Data Solutions Directorate',
    role: 'Machine Learning & Data Intelligence',
    bio: 'Spearheading enterprise Generative AI integrations, Retrieval-Augmented Generation (RAG) knowledge systems, intelligent document processing, and real-time BI pipelines.',
    focus: ['LLM Orchestration', 'Vector Search', 'Predictive Modeling', 'Business Intelligence']
  }
];

export const whyChooseEVD = [
  {
    title: '10+ Years of Proven Delivery',
    description: 'Over a decade of continuous software delivery excellence across state governments, enterprises, fast-growing SaaS startups, and premier educational institutions.',
    icon: 'Award'
  },
  {
    title: 'Product Engineering Mindset',
    description: 'We do not build throwaway code. We treat every client engagement as a long-term software product with clean domain separation and modular scalability.',
    icon: 'Layers'
  },
  {
    title: '100% IP & Source Code Ownership',
    description: 'You own the full intellectual property, source repositories, documentation, and database schemas with zero vendor lock-in or recurring per-user licensing.',
    icon: 'Key'
  },
  {
    title: 'Security-Conscious Development',
    description: 'Adhering to strict OWASP Top 10 guidelines, encrypted data at rest and in transit, role-based access control, and CERT-In audit compliance preparedness.',
    icon: 'Lock'
  },
  {
    title: 'Predictable Agile Governance',
    description: 'Structured two-week sprint cycles with transparent demos, real-time Jira/Git tracking, clear milestone deliverables, and dedicated project managers.',
    icon: 'Clock'
  },
  {
    title: 'Proprietary Product Accelerators',
    description: 'Our battle-tested enterprise product engines (LMS, ERP, TMS, Quick Commerce, AI Voice) accelerate your time-to-market by up to 50%.',
    icon: 'Zap'
  }
];

export const securityAndDelivery = {
  deliveryMethodology: [
    { phase: '01. Discovery & Requirement Engineering', details: 'Stakeholder interviews, workflow mapping, SRS/FRD documentation, and technical feasibility analysis.' },
    { phase: '02. System Architecture & UI/UX', details: 'Database schema modeling, API interface definitions, clickable Figma prototypes, and security threat modeling.' },
    { phase: '03. Iterative Sprint Execution', details: 'Bi-weekly sprints with working demo deployments, automated unit tests, and continuous peer code reviews.' },
    { phase: '04. Rigorous Quality Assurance & Security Audit', details: 'Automated regression testing, cross-device QA, load stress testing, and vulnerability scanning.' },
    { phase: '05. Production Deployment & Hypercare', details: 'Zero-downtime blue/green cutover, real-time APM telemetry setup, and dedicated 60-day hypercare support.' }
  ],
  securityStandards: [
    { title: 'End-to-End Encryption', description: 'TLS 1.3 encryption for all network traffic and AES-256 for persistent database storage and backups.' },
    { title: 'Role-Based Access Control (RBAC)', description: 'Granular permissions, field-level data masking, and immutable tamper-evident audit logs.' },
    { title: 'OWASP Top 10 Mitigation', description: 'Automated CI/CD security scanning preventing SQL injection, XSS, CSRF, and broken access controls.' },
    { title: 'Data Sovereignty & Privacy', description: 'Dedicated cloud hosting within client-specified geographical boundaries with strict data isolation.' }
  ]
};
