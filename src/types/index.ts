export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  description?: string;
  icon?: string;
  category?: string;
}

export interface NavMegaMenuSection {
  title: string;
  items: NavItem[];
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: 'Core Software Engineering' | 'Enterprise & Digital Solutions' | 'Emerging Technologies & Data' | 'Marketing & Growth' | 'Add-on Services';
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  bannerGradient: string;
  businessProblems: string[];
  keySolutions: string[];
  features: { title: string; description: string }[];
  technologies: string[];
  deliverables: string[];
  processSteps: { step: string; title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  caseStudySlugs?: string[];
  relatedIndustries?: string[];
}

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: string;
  badge?: string;
  shortDescription: string;
  fullDescription: string;
  problemStatement: string;
  solutionOverview: string;
  keyFeatures: { title: string; description: string; icon?: string }[];
  businessBenefits: { metric?: string; title: string; description: string }[];
  userRoles: { role: string; description: string; permissions: string[] }[];
  workflow: { step: number; title: string; description: string }[];
  integrations: string[];
  techStack: string[];
  securitySpecs: string[];
  targetIndustries: string[];
  faqs: { question: string; answer: string }[];
  demoCapabilities: string[];
}

export interface IndustryItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  overview: string;
  icon: string;
  challenges: string[];
  solutions: { title: string; description: string }[];
  capabilities: string[];
  featuredTech: string[];
  caseStudySlugs: string[];
  faqs: { question: string; answer: string }[];
}

export interface CaseStudyItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: 'Government' | 'Enterprise' | 'EdTech' | 'Commercial & SaaS' | 'Healthcare' | 'Logistics';
  industry: string;
  tagline: string;
  summary: string;
  clientOverview: string;
  challenge: string;
  objectives: string[];
  solution: string;
  architectureHighlights: string[];
  keyFeatures: string[];
  techStack: string[];
  developmentApproach: string[];
  impactQualitative: string[];
  impactMetrics?: { label: string; value: string }[];
  testimonial?: { quote: string; author: string; role: string; organization: string };
  verified: boolean;
}

export interface EngagementModelItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  idealFor: string[];
  keyHighlights: string[];
  governance: string[];
  billingModel: string;
  rampUpTime: string;
  pros: string[];
}

export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  author: string;
  authorRole: string;
  publishDate: string;
  readTime: string;
  excerpt: string;
  content: string[];
  tags: string[];
}

export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Mobile' | 'Cloud & DevOps' | 'Database' | 'AI & Data';
  experienceYears: string;
  description: string;
  popularFor: string[];
  icon: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  experience: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Hybrid' | 'Internship';
  skills: string[];
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export interface OfficeLocation {
  city: string;
  role: string;
  address: string;
  phone: string;
  email: string;
  timings: string;
  isHQ: boolean;
}
