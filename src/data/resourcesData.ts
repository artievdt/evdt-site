import { BlogPostItem, TechItem } from '../types';

export const blogPostsData: BlogPostItem[] = [
  {
    id: 'building-multi-tenant-saas-architecture',
    slug: 'building-multi-tenant-saas-architecture',
    title: 'Architecting Scalable Multi-Tenant SaaS Platforms: Database Isolation, Schema Routing & Security',
    category: 'Software Engineering',
    author: 'EVD Engineering Team',
    authorRole: 'Cloud & SaaS Architecture',
    publishDate: 'August 2026',
    readTime: '7 min read',
    excerpt: 'A comprehensive engineering guide on designing multi-tenant SaaS platforms comparing shared database vs. isolated schema patterns, row-level security (RLS), and tenant-aware caching.',
    tags: ['SaaS', 'PostgreSQL', 'Multi-Tenancy', 'Cloud Architecture'],
    content: [
      'Multi-tenancy is the architectural cornerstone of scalable software-as-a-service businesses. When engineering a B2B SaaS platform, the primary architectural decision revolves around tenancy isolation models: pooled databases with Row-Level Security (RLS), schema-per-tenant, or isolated database-per-tenant.',
      'For 90% of early to mid-market SaaS platforms, a shared database with PostgreSQL Row-Level Security provides the optimal balance of resource utilization, cost efficiency, and automated tenant isolation.',
      'By enforcing tenant_id checks at the database connection pool layer and utilizing tenant-scoped Redis namespaces, engineering teams can eliminate cross-tenant data leakage risks while keeping cloud infrastructure lean.'
    ]
  },
  {
    id: 'anti-piracy-drm-video-streaming-edtech',
    slug: 'anti-piracy-drm-video-streaming-edtech',
    title: 'How to Prevent Video Piracy & Screen Recording in High-Concurrency EdTech Applications',
    category: 'EdTech & Video Systems',
    author: 'EVD Media Engineering',
    authorRole: 'Video DRM & Security Specialist',
    publishDate: 'July 2026',
    readTime: '6 min read',
    excerpt: 'Examining encrypted HLS streaming, dynamic canvas watermarking, device binding limits, and screen capture prevention for proprietary course content.',
    tags: ['EdTech', 'Video DRM', 'HLS Encryption', 'AWS CloudFront'],
    content: [
      'In the competitive digital coaching and certification market, course videos represent a company’s most valuable intellectual property. Standard video players are vulnerable to browser extensions and screen recorders.',
      'A true enterprise DRM strategy combines AES-128 HLS chunk encryption, signed tokenized URLs with 60-second expiration windows, dynamic watermarking rendering the student’s phone number at pseudo-random screen coordinates, and native OS-level secure surface views (FLAG_SECURE on Android).',
      'This multi-layered approach ensures that even if a student attempts unauthorized capture, the visual watermark creates immediate accountability, while automated token expiration blocks link sharing.'
    ]
  },
  {
    id: 'enterprise-rag-generative-ai-playbook',
    slug: 'enterprise-rag-generative-ai-playbook',
    title: 'Beyond the AI Hype: Implementing Production-Ready RAG & Guardrailed Enterprise Knowledge Assistants',
    category: 'Artificial Intelligence',
    author: 'EVD AI Labs',
    authorRole: 'Principal AI Architect',
    publishDate: 'June 2026',
    readTime: '8 min read',
    excerpt: 'How enterprises can implement Retrieval-Augmented Generation (RAG) over private operational manuals, ERP databases, and customer records with zero data hallucinations.',
    tags: ['Generative AI', 'RAG', 'Vector Search', 'Enterprise AI'],
    content: [
      'While generic LLMs are impressive in open conversations, enterprises require exact factual grounding, citation verifiability, and strict role-based access control.',
      'Retrieval-Augmented Generation (RAG) solves this by separating factual retrieval from language synthesis. Enterprise documents are chunked with semantic boundary awareness, converted into vector embeddings, and stored in high-speed vector databases (Qdrant / pgvector).',
      'When an employee queries the system, the platform retrieves only the top relevant, authorized chunks, passing them as grounded context to the model with strict instructions to cite sources or declare lack of information.'
    ]
  },
  {
    id: 'legacy-monolith-to-modular-services-migration',
    slug: 'legacy-monolith-to-modular-services-migration',
    title: 'Migrating Mission-Critical Legacy Monoliths to Modular Cloud Architectures Without Downtime',
    category: 'Digital Transformation',
    author: 'EVD Architecture Board',
    authorRole: 'Enterprise Modernization',
    publishDate: 'May 2026',
    readTime: '9 min read',
    excerpt: 'The Strangler Fig pattern in action: step-by-step roadmap for decomposing aging monolithic enterprise applications into modular, maintainable microservices.',
    tags: ['Legacy Modernization', 'Microservices', 'DevOps', 'Cloud Migration'],
    content: [
      'Rewriting a large enterprise monolith from scratch in a "big bang" release is notoriously prone to budget overruns and operational disruption. The Strangler Fig pattern provides a proven, zero-downtime alternative.',
      'By placing an API gateway in front of the existing legacy system, engineering teams can intercept specific high-value workflows (such as reporting, notification, or checkout) and route them to new cloud-native microservices while the legacy core continues running untouched.',
      'Over successive sprints, services are gradually extracted until the legacy monolith is safely decommissioned.'
    ]
  }
];

export const techDirectoryData: TechItem[] = [
  // Frontend
  { name: 'React.js', category: 'Frontend', experienceYears: '10+ Years', description: 'Declarative component architecture for high-performance web applications and rich enterprise dashboards.', popularFor: ['Enterprise Dashboards', 'SaaS Portals', 'SPA Applications'], icon: 'Code' },
  { name: 'Next.js', category: 'Frontend', experienceYears: '6+ Years', description: 'Server-side rendering, static site generation, and optimized Core Web Vitals for maximum SEO performance.', popularFor: ['Headless Commerce', 'Public Web Apps', 'High-Traffic Portals'], icon: 'Globe' },
  { name: 'TypeScript', category: 'Frontend', experienceYears: '8+ Years', description: 'Strongly typed JavaScript providing robust compile-time safety, refactoring ease, and bug prevention.', popularFor: ['All Modern Codebases', 'Shared Enterprise Types', 'Full-Stack Apps'], icon: 'FileCode' },
  { name: 'Tailwind CSS', category: 'Frontend', experienceYears: '5+ Years', description: 'Utility-first CSS framework enabling fast, consistent, and mathematically sound design systems.', popularFor: ['Responsive Design', 'Design Tokens', 'Clean UI Layouts'], icon: 'Palette' },
  { name: 'Angular', category: 'Frontend', experienceYears: '8+ Years', description: 'Structured TypeScript framework for large-scale enterprise portals with deep dependency injection.', popularFor: ['Enterprise ERP UIs', 'Banking & Financial Portals'], icon: 'Layout' },
  
  // Backend
  { name: 'Node.js', category: 'Backend', experienceYears: '10+ Years', description: 'Event-driven, non-blocking I/O runtime powering scalable REST APIs, microservices, and WebSockets.', popularFor: ['High-Throughput APIs', 'Real-Time Apps', 'Microservices'], icon: 'Server' },
  { name: 'Python', category: 'Backend', experienceYears: '9+ Years', description: 'Powering robust data pipelines, machine learning models, Django backends, and FastAPI microservices.', popularFor: ['AI/ML Systems', 'GovTech Platforms', 'Data Automation'], icon: 'Terminal' },
  { name: 'FastAPI', category: 'Backend', experienceYears: '5+ Years', description: 'High-performance Python async web framework with automatic OpenAPI documentation and data validation.', popularFor: ['AI Microservices', 'High-Speed REST APIs'], icon: 'Zap' },
  { name: 'Django', category: 'Backend', experienceYears: '8+ Years', description: 'Batteries-included secure Python framework ideal for enterprise and public sector web systems.', popularFor: ['Government Portals', 'Data Management Suites'], icon: 'Shield' },
  
  // Mobile
  { name: 'Flutter', category: 'Mobile', experienceYears: '6+ Years', description: 'Google’s UI toolkit for building natively compiled iOS and Android applications from a single codebase.', popularFor: ['Cross-Platform Apps', 'Offline Field Force Apps', 'EdTech Mobile Apps'], icon: 'Smartphone' },
  { name: 'React Native', category: 'Mobile', experienceYears: '7+ Years', description: 'Native mobile app development leveraging React principles for rapid cross-platform deployment.', popularFor: ['E-Commerce Apps', 'SaaS Companion Apps'], icon: 'Tablet' },
  { name: 'Swift (iOS)', category: 'Mobile', experienceYears: '8+ Years', description: 'Native iOS engineering for high-performance camera, biometric, and hardware-accelerated features.', popularFor: ['Native iOS Apps', 'Apple Ecosystem'], icon: 'Apple' },
  { name: 'Kotlin (Android)', category: 'Mobile', experienceYears: '8+ Years', description: 'Modern native Android development with coroutines and Jetpack Compose for enterprise field apps.', popularFor: ['Native Android Apps', 'POS & Handheld Devices'], icon: 'Cpu' },
  
  // Cloud & DevOps
  { name: 'AWS (Amazon Web Services)', category: 'Cloud & DevOps', experienceYears: '9+ Years', description: 'Comprehensive cloud architecture: EC2, ECS, S3, RDS, CloudFront, Lambda, and IAM security.', popularFor: ['Global Cloud Hosting', 'Video DRM CDN', 'Enterprise Infrastructure'], icon: 'Cloud' },
  { name: 'Google Cloud Platform (GCP)', category: 'Cloud & DevOps', experienceYears: '7+ Years', description: 'Serverless Cloud Run, BigQuery analytics, Google Kubernetes Engine (GKE), and Firebase.', popularFor: ['Big Data Warehousing', 'Serverless Microservices'], icon: 'CloudRain' },
  { name: 'Docker', category: 'Cloud & DevOps', experienceYears: '8+ Years', description: 'Containerization standardizing environments across local development, staging, and production.', popularFor: ['Containerized Apps', 'Microservices Isolation'], icon: 'Box' },
  { name: 'Kubernetes', category: 'Cloud & DevOps', experienceYears: '5+ Years', description: 'Automated container orchestration, autoscaling, and self-healing for high-concurrency workloads.', popularFor: ['High-Scale Enterprise Clusters'], icon: 'Share2' },
  { name: 'GitHub Actions / CI/CD', category: 'Cloud & DevOps', experienceYears: '6+ Years', description: 'Automated build, test, lint, security vulnerability scan, and zero-downtime deployment pipelines.', popularFor: ['Automated Deployments', 'Continuous Integration'], icon: 'GitBranch' },
  
  // Database
  { name: 'PostgreSQL', category: 'Database', experienceYears: '10+ Years', description: 'Advanced relational database with ACID compliance, JSONB support, row-level security, and pgvector.', popularFor: ['Enterprise Core DB', 'Multi-Tenant SaaS', 'Financial Records'], icon: 'Database' },
  { name: 'Redis', category: 'Database', experienceYears: '8+ Years', description: 'In-memory key-value data structure store used as a database, cache, session store, and message broker.', popularFor: ['Session Caching', 'Rate Limiting', 'Real-Time Leaderboards'], icon: 'Layers' },
  { name: 'ElasticSearch', category: 'Database', experienceYears: '7+ Years', description: 'Distributed JSON-based search engine for sub-second full-text search across millions of records.', popularFor: ['Catalog Search', 'Log Analysis', 'Physician/Gov Directory Search'], icon: 'Search' },
  { name: 'ClickHouse', category: 'Database', experienceYears: '4+ Years', description: 'Column-oriented DBMS for real-time analytical reporting (OLAP) processing billions of rows.', popularFor: ['Real-Time BI Dashboards', 'Telemetry Telemetry Logs'], icon: 'BarChart' },
  
  // AI & Data
  { name: 'Generative AI & LLMs', category: 'AI & Data', experienceYears: '3+ Years', description: 'Orchestrating Gemini, OpenAI, and open-source models for enterprise automation and document analysis.', popularFor: ['Enterprise RAG', 'AI Chatbots', 'Workflow Automation'], icon: 'Sparkles' },
  { name: 'LangChain & Vector DBs', category: 'AI & Data', experienceYears: '3+ Years', description: 'Frameworks for connecting LLMs to private corporate data with semantic vector indexing.', popularFor: ['Knowledge Base Search', 'Private Q&A Systems'], icon: 'Cpu' }
];

export const faqsData = [
  {
    category: 'General & Engagement',
    items: [
      { question: 'What makes EVD Technology different from generic web development agencies?', answer: 'We are a dedicated software engineering and product accelerator company with a 10+ year track record. We don’t just build templates; we architect scalable multi-tenant SaaS platforms, mission-critical GovTech systems, industrial ERPs, and custom AI engines with 100% client source code ownership.' },
      { question: 'How do you structure project engagement and contracts?', answer: 'We offer flexible engagement models tailored to your requirements: Dedicated Engineering Squads (staff augmentation with monthly retainers), Fixed-Price Milestone Deliveries (for defined scope projects), and long-term Offshore Development Centers (ODC).' },
      { question: 'Who retains the intellectual property (IP) and code rights?', answer: 'You retain 100% ownership of all source code, database architectures, proprietary designs, and digital assets upon milestone completion. We provide clean Git repositories with comprehensive documentation.' }
    ]
  },
  {
    category: 'Engineering & Security',
    items: [
      { question: 'How do you ensure application security and compliance?', answer: 'We follow strict secure-by-design principles: OWASP Top 10 mitigation, TLS 1.3 encryption in transit, AES-256 encryption at rest, role-based access control (RBAC), sanitized queries, and automated security vulnerability scanning in CI/CD pipelines.' },
      { question: 'What is your typical project delivery methodology?', answer: 'We operate on Agile two-week sprint cycles. Every sprint includes a live demonstration of working functional software, continuous QA, and transparent progress tracking on Jira or GitHub.' },
      { question: 'Do you provide post-launch support and maintenance?', answer: 'Yes! All custom projects include a complimentary 60-day hypercare warranty. Beyond that, we provide structured SLA-driven Managed IT & AMC support contracts with 24/7 proactive monitoring.' }
    ]
  }
];

export const companyNewsData = [
  {
    id: '10-years-anniversary-milestone',
    title: 'EVD Technology Celebrates 10+ Years of Engineering Excellence & Digital Transformation',
    date: 'August 2026',
    category: 'Company Milestone',
    summary: 'Marking over a decade of continuous technology leadership, delivering enterprise software, public sector platforms, and proprietary product accelerators across India and international markets.'
  },
  {
    id: 'product-accelerators-launch',
    title: 'Launch of Next-Gen Enterprise Product Accelerators for LMS, Logistics & AI Tele-Calling',
    date: 'June 2026',
    category: 'Product Release',
    summary: 'Unveiling modular, white-label product frameworks that cut enterprise time-to-market by up to 50% across EdTech, Fleet Logistics, and Conversational Voice AI.'
  },
  {
    id: 'govtech-state-impact',
    title: 'EVD Technology Recognized for Delivering High-Impact Citizen Service Infrastructure',
    date: 'April 2026',
    category: 'GovTech Achievement',
    summary: 'Highlighting public sector digital systems that have streamlined administrative workflows and empowered hundreds of thousands of citizens with transparent digital governance.'
  }
];
