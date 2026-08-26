import { JobOpening } from '../types';

export const lifeAtEVD = {
  headline: 'Build High-Impact Software Alongside Exceptional Engineers',
  description: 'At EVD Technology, we cultivate a culture of deep engineering craft, intellectual curiosity, and continuous learning. We work on mission-critical platforms that serve millions of citizens, power nationwide education, and orchestrate complex enterprise supply chains.',
  perks: [
    { title: 'Challenging High-Scale Work', description: 'Work on architectures handling millions of daily transactions, high-concurrency video DRM, and real-time AI systems.', icon: 'Cpu' },
    { title: 'Continuous Learning & Upskilling', description: 'Access to top technical courses, internal architecture masterclasses, and hands-on AI/cloud certifications.', icon: 'BookOpen' },
    { title: 'Work-Life Balance & Flexibility', description: 'Collaborative hybrid work options, flexible hours, and an environment that respects personal time.', icon: 'Smile' },
    { title: 'Direct Impact & Fast Growth', description: 'Flat hierarchy where merit and engineering craftsmanship determine your career trajectory, not office politics.', icon: 'TrendingUp' },
    { title: 'Cutting-Edge Tech Stack', description: 'Work daily with modern TypeScript, React, Next.js, Flutter, Python, Go, Docker, AWS, and GenAI tooling.', icon: 'Code' },
    { title: 'Generous Health & Wellness', description: 'Comprehensive medical coverage, team sports days, tech hackathons, and annual celebration retreats.', icon: 'Heart' }
  ]
};

export const jobOpeningsData: JobOpening[] = [
  {
    id: 'senior-full-stack-engineer',
    title: 'Senior Full-Stack Engineer (React + Node.js / Python)',
    department: 'Software Engineering',
    experience: '4–7 Years',
    location: 'Raipur (HQ) / Hybrid',
    type: 'Full-time',
    skills: ['TypeScript', 'React.js', 'Next.js', 'Node.js', 'PostgreSQL', 'Docker'],
    description: 'We are seeking an experienced Full-Stack Engineer to architect and build high-performance web applications, enterprise portals, and scalable REST/GraphQL microservices.',
    responsibilities: [
      'Architect robust, type-safe frontend and backend systems with clean domain separation.',
      'Optimize database queries and schema designs in PostgreSQL for high-concurrency applications.',
      'Participate in architecture reviews and mentor junior engineering team members.',
      'Collaborate with product designers to implement pixel-perfect, accessible UI components.'
    ],
    requirements: [
      'Strong proficiency in TypeScript, React.js, Node.js, and relational database systems (PostgreSQL).',
      'Solid understanding of state management, SSR/SSG patterns in Next.js, and REST API design.',
      'Experience with Docker, Redis caching, and automated CI/CD pipelines.'
    ]
  },
  {
    id: 'flutter-mobile-engineer',
    title: 'Lead Mobile Application Developer (Flutter / iOS & Android)',
    department: 'Mobile Engineering',
    experience: '3–6 Years',
    location: 'Raipur (HQ) / Hybrid',
    type: 'Full-time',
    skills: ['Flutter', 'Dart', 'iOS / Swift', 'Android / Kotlin', 'State Management (Bloc/Riverpod)', 'Offline-First DBs'],
    description: 'Lead mobile app development across our flagship EdTech, Logistics, and Enterprise mobility solutions, focusing on offline sync, video DRM, and high-FPS UI rendering.',
    responsibilities: [
      'Develop clean, responsive Flutter applications for Android and iOS devices.',
      'Implement offline-first SQLite/Realm database caching and background synchronization.',
      'Integrate video streaming players (HLS/DASH) with dynamic DRM watermarking overlays.',
      'Publish and maintain builds across Google Play Store and Apple App Store.'
    ],
    requirements: [
      'Proven track record publishing 3+ production mobile apps built with Flutter.',
      'Deep understanding of Flutter architecture, native platform channels, and memory optimization.',
      'Experience with push notifications, biometric auth, and camera/GPS hardware APIs.'
    ]
  },
  {
    id: 'ai-ml-engineer',
    title: 'AI / Machine Learning Engineer (LLMs, RAG & Vector Systems)',
    department: 'Emerging Tech & AI Labs',
    experience: '2–5 Years',
    location: 'Raipur (HQ) / Remote',
    type: 'Full-time',
    skills: ['Python', 'LangChain', 'FastAPI', 'Vector Databases (Qdrant/Pinecone)', 'PyTorch', 'Prompt Engineering'],
    description: 'Design and deploy production-grade AI systems, Retrieval-Augmented Generation (RAG) knowledge pipelines, conversational voice agents, and predictive ML models.',
    responsibilities: [
      'Engineer semantic search and RAG pipelines over complex corporate document repositories.',
      'Build low-latency conversational AI agents with WebRTC audio streaming integrations.',
      'Implement guardrail mechanisms to eliminate hallucinations in enterprise AI deployments.',
      'Deploy scalable Python microservices containerized with Docker.'
    ],
    requirements: [
      'Hands-on experience building production applications with LLMs, embeddings, and vector databases.',
      'Strong coding skills in Python, FastAPI, and data manipulation libraries (Pandas, NumPy).',
      'Familiarity with fine-tuning, evaluation benchmarks, and semantic retrieval algorithms.'
    ]
  },
  {
    id: 'devops-cloud-architect',
    title: 'DevOps & Cloud Infrastructure Engineer (AWS / GCP)',
    department: 'Cloud & Infrastructure',
    experience: '3–6 Years',
    location: 'Raipur (HQ) / Hybrid',
    type: 'Full-time',
    skills: ['AWS', 'Google Cloud', 'Terraform', 'Docker', 'Kubernetes', 'GitHub Actions', 'Prometheus/Grafana'],
    description: 'Manage high-availability cloud infrastructure, automate deployment pipelines, implement security hardening, and ensure 99.9% uptime for enterprise and GovTech clients.',
    responsibilities: [
      'Architect and provision multi-region cloud infrastructure using Terraform (IaC).',
      'Build zero-downtime CI/CD deployment pipelines using GitHub Actions.',
      'Set up proactive APM telemetry, log aggregation, and real-time alert triggers.',
      'Conduct regular security audits, vulnerability remediation, and cloud cost optimization.'
    ],
    requirements: [
      'Deep hands-on expertise with AWS services (EC2, ECS, RDS, CloudFront, S3, IAM) or GCP.',
      'Strong knowledge of Linux systems administration, networking, SSL, and Nginx reverse proxies.',
      'Experience in disaster recovery planning and automated database backup routines.'
    ]
  }
];

export const internshipPrograms = [
  {
    role: 'Software Engineering Trainee / Intern',
    duration: '6 Months (PPO based on performance)',
    stipend: 'Competitive Monthly Stipend + Full-Time Placement Opportunity',
    tracks: ['Full-Stack Web (React & Node)', 'Mobile Apps (Flutter)', 'Python & AI Engineering', 'Cloud & DevOps'],
    description: 'Work directly on live client projects under the 1-on-1 mentorship of senior architects. Learn production coding standards, Git workflows, clean code architecture, and database design.'
  },
  {
    role: 'UI/UX & Product Design Intern',
    duration: '6 Months (PPO Opportunity)',
    stipend: 'Competitive Monthly Stipend',
    tracks: ['Figma Design Systems', 'User Research & Wireframing', 'Interactive Prototyping', 'Design Tokens'],
    description: 'Craft real-world interfaces for enterprise platforms, mobile apps, and SaaS dashboards. Learn how to transform complex business logic into intuitive user experiences.'
  }
];
