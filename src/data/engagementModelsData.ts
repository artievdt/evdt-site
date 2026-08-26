import { EngagementModelItem } from '../types';

export const comparisonMatrix = [
  {
    criteria: 'Core Focus',
    dedicatedTeam: 'Continuous product roadmap & agile iteration',
    fixedPrice: 'Fixed feature scope & defined deliverable',
    odc: 'Permanent offshore engineering division',
    amc: '24/7 SLA maintenance & cloud reliability'
  },
  {
    criteria: 'Scope Flexibility',
    dedicatedTeam: 'High (sprint-by-sprint backlog adjustments)',
    fixedPrice: 'Strict (controlled by Change Request procedure)',
    odc: 'Maximum (long-term strategic team development)',
    amc: 'Support & operational task scope'
  },
  {
    criteria: 'Billing Structure',
    dedicatedTeam: 'Predictable Monthly Rate per Engineer',
    fixedPrice: 'Milestone-based Staged Payments',
    odc: 'Transparent Cost-Plus Monthly Model',
    amc: 'Tiered Monthly / Annual SLA Retainer'
  },
  {
    criteria: 'Management Overhead',
    dedicatedTeam: 'Low to Medium (Direct or EVD Tech Lead)',
    fixedPrice: 'Zero to Low (Turnkey EVD Project Management)',
    odc: 'Low (Managed infrastructure & HR operations)',
    amc: 'Zero (Proactive automated monitoring)'
  },
  {
    criteria: 'IP & Source Ownership',
    dedicatedTeam: '100% Client Ownership from Day 1',
    fixedPrice: '100% Client Ownership upon milestone signoff',
    odc: '100% Client Ownership with isolated IP security',
    amc: '100% Client Ownership preserved'
  },
  {
    criteria: 'Ramp-up Timeline',
    dedicatedTeam: '1 to 2 Weeks',
    fixedPrice: '3 to 5 Days after SOW signoff',
    odc: '3 to 6 Weeks setup',
    amc: '2 to 3 Days setup'
  }
];

export const engagementModelsData: EngagementModelItem[] = [
  {
    id: 'dedicated-team',
    slug: 'dedicated-team',
    title: 'Dedicated Engineering Team',
    subtitle: 'Staff Augmentation & Dedicated Squads',
    tagline: 'Scale your engineering bandwidth with hand-picked senior software developers, QA engineers, and architects fully integrated into your workflow.',
    description: 'Our Dedicated Team model provides you with dedicated full-time engineers who work exclusively on your product roadmap. Managed directly by your product managers or our technical lead, they operate as a seamless extension of your in-house team with daily standups, shared Git repositories, and synchronized time zones.',
    idealFor: [
      'Fast-growing tech startups needing to accelerate roadmap velocity without lengthy local recruitment cycles.',
      'Enterprises modernizing complex software platforms requiring sustained multi-quarter development.',
      'Companies with evolving technical scopes where agile adaptability is essential.'
    ],
    keyHighlights: [
      '100% dedicated talent committed exclusively to your project.',
      'Direct communication via Slack, Teams, Jira, and GitHub.',
      'Flexible team scaling: easily add or rotate specialists (e.g. AI/ML, DevOps) as needs shift.',
      'Transparent monthly per-developer billing with zero hidden recruitment or hardware fees.'
    ],
    governance: [
      'Daily agile standups and bi-weekly sprint planning sessions.',
      'Real-time access to source code commits, pull requests, and CI/CD pipelines.',
      'Monthly engineering productivity and velocity reviews.'
    ],
    billingModel: 'Monthly Retainer per dedicated engineer based on seniority and tech stack.',
    rampUpTime: '1 to 2 Weeks for candidate selection, technical interviews, and onboarding.',
    pros: [
      'Full control over daily task prioritization and sprint backlogs.',
      'Deep domain knowledge retention inside the dedicated squad.',
      'Significantly lower operational overhead compared to in-house hiring.'
    ]
  },
  {
    id: 'fixed-price',
    slug: 'fixed-price',
    title: 'Fixed-Price Project Delivery',
    subtitle: 'Milestone-Based Milestone Commitments',
    tagline: 'Predictable budgeting and guaranteed delivery timelines for well-defined software projects and MVPs.',
    description: 'Our Fixed-Price model is optimal for projects with clearly defined requirements, functional specifications, and delivery milestones. We take full accountability for architecture, execution, QA, and deployment within an agreed budget and timeline, mitigating your financial risk.',
    idealFor: [
      'MVP builds for new software products with fixed initial feature scopes.',
      'Enterprise workflow tools with clear functional specifications (FRD).',
      'Organizations with strict annual budget allocations requiring cost certainty.'
    ],
    keyHighlights: [
      'Clear, detailed Scope of Work (SOW) and technical milestone roadmap.',
      'Guaranteed pricing with zero budget overrun risk for agreed scope.',
      'Milestone-linked payment disbursements upon verified UAT signoff.',
      'Complimentary 60-day post-launch warranty and bug-fix support.'
    ],
    governance: [
      'Dedicated Project Manager acting as your single point of contact.',
      'Weekly progress demonstrations and milestone sign-off reviews.',
      'Formal Change Request (CR) management for any scope modifications.'
    ],
    billingModel: 'Milestone-based staged payments (e.g. 20% kickoff, 30% alpha build, 30% beta UAT, 20% launch).',
    rampUpTime: '3 to 5 Days following scope finalization and kickoff signoff.',
    pros: [
      'Complete cost predictability with zero financial surprises.',
      'Minimal day-to-day management required from your internal team.',
      'Clear contractual accountability for delivery dates and quality standards.'
    ]
  },
  {
    id: 'odc',
    slug: 'odc',
    title: 'Offshore Development Center (ODC)',
    subtitle: 'Long-Term Strategic Engineering Hub',
    tagline: 'Establish your own dedicated offshore technology center with secure infrastructure, talent retention, and custom IP governance.',
    description: 'The Offshore Development Center (ODC) model is a strategic partnership designed for established companies looking to build a high-performing offshore engineering division. We manage workspace infrastructure, high-spec hardware, continuous talent recruitment, HR, payroll, and security compliance while you drive the technical vision.',
    idealFor: [
      'Mid-market and enterprise technology firms seeking a permanent global engineering hub.',
      'Companies scaling teams from 10 to 50+ engineers over multiple years.',
      'Organizations requiring dedicated physical security zones, isolated VPN networks, and strict compliance.'
    ],
    keyHighlights: [
      'Custom-built physical & digital engineering center branded for your organization.',
      'Dedicated talent acquisition pipeline recruiting top engineers in your specific domain.',
      'Strict security isolation: dedicated VLANs, biometric entry, and NDA enforcement.',
      'Seamless knowledge transfer, career progression paths, and low attrition management.'
    ],
    governance: [
      'Dedicated Delivery Director and Technical Architects overseeing quality.',
      'Quarterly executive governance meetings and strategic capacity planning.',
      'Continuous compliance auditing (data security, access logs, and code quality).'
    ],
    billingModel: 'Transparent Cost-Plus model (Developer compensation + infrastructure/management fee).',
    rampUpTime: '3 to 6 Weeks to establish infrastructure, legal frameworks, and core initial team.',
    pros: [
      'Maximum long-term cost efficiency (up to 60% savings compared to Western or tier-1 hub hiring).',
      'True cultural integration and long-term institutional knowledge retention.',
      'Scalable to dozens of engineers across backend, frontend, mobile, QA, and AI.'
    ]
  },
  {
    id: 'managed-it-amc',
    slug: 'managed-it-amc',
    title: 'Managed IT & AMC Support',
    subtitle: '24/7 SLA-Driven Maintenance & Optimization',
    tagline: 'Proactive server monitoring, vulnerability patching, continuous performance optimization, and SLA-guaranteed bug remediation.',
    description: 'Ensure your mission-critical applications remain fast, secure, and always available. Our Managed IT and Annual Maintenance Contract (AMC) services provide continuous cloud monitoring, security patch management, database indexing, and dedicated support hours for ongoing feature enhancements.',
    idealFor: [
      'Live enterprise web and mobile applications requiring 99.9% uptime guarantees.',
      'E-commerce, EdTech, and GovTech platforms requiring continuous security patches.',
      'Companies needing expert DevOps and support without hiring full-time operational engineers.'
    ],
    keyHighlights: [
      'Guaranteed Response SLAs (Critical: < 1 Hour, High: < 4 Hours).',
      '24/7 automated server, database, and API telemetry monitoring with instant alerting.',
      'Regular security audits, OS/package vulnerability patching, and SSL management.',
      'Bundled development hours each month for feature enhancements and UI updates.'
    ],
    governance: [
      'Dedicated ticketing portal (Jira Service Desk) for instant issue logging.',
      'Monthly system health, uptime percentage, and incident analysis reports.',
      'Scheduled monthly database vacuuming, backup testing, and query optimization.'
    ],
    billingModel: 'Tiered monthly or annual AMC retainer based on system complexity and SLA requirements.',
    rampUpTime: '2 to 3 Days for application audit, monitoring setup, and runbook ingestion.',
    pros: [
      'Peace of mind knowing senior engineers are actively guarding your applications.',
      'Prevent costly downtime and customer data breaches proactively.',
      'Predictable operational maintenance budget.'
    ]
  }
];
