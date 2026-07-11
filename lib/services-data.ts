export type PricingTier = 'moderate' | 'premium' | 'executive'

export interface ServiceItem {
  id: string
  slug: string
  category: string
  title: string
  description: string
  price: string
  pricingTier: PricingTier
  features: string[]
  scope: string[]
  deliverables: string[]
  timeline: string
  engagementType: string
}

export interface Category {
  id: string
  label: string
  icon: string
}

export const categories: Category[] = [
  { id: 'tech', label: 'Engineering & Tech', icon: 'Cpu' },
  { id: 'consulting', label: 'Consulting & Ops', icon: 'Briefcase' },
  { id: 'marketing', label: 'Digital Marketing', icon: 'TrendingUp' },
]

export const featuredServices: ServiceItem[] = [
  {
    id: 'full-stack-dev',
    slug: 'full-stack-web-development',
    category: 'tech',
    title: 'Full-Stack Web Development',
    description: 'End-to-end web applications using modern frameworks — optimized for speed, scalability, and conversion from day one.',
    price: '$65/hr',
    pricingTier: 'moderate',
    features: ['Next.js / React architecture', 'API design & integration', 'Database modeling & optimization', 'CI/CD & production deployment'],
    scope: [
      'Discovery & requirements gathering',
      'Technical architecture design',
      'Frontend development (React / Next.js)',
      'Backend API development & integration',
      'Database schema design & optimization',
      'Authentication & authorization systems',
      'Testing, QA, and performance tuning',
      'Production deployment & CI/CD pipeline',
    ],
    deliverables: ['Production-ready web application', 'Source code repository', 'Technical documentation', 'Deployment pipeline configuration'],
    timeline: '4–12 weeks depending on scope',
    engagementType: 'Hourly — $65/hr',
  },
  {
    id: 'bpa',
    slug: 'business-process-automation',
    category: 'consulting',
    title: 'Business Process Automation',
    description: 'Identify and automate repetitive processes using modern workflow engines, AI, and API integration — reclaim hours every week.',
    price: '$65/hr',
    pricingTier: 'moderate',
    features: ['Process mapping & analysis', 'Workflow automation design', 'Tool integration & orchestration', 'ROI measurement & reporting'],
    scope: [
      'Current-state process audit',
      'Bottleneck identification & prioritization',
      'Automation workflow design',
      'Tool selection & API integration',
      'Zapier / n8n / custom script implementation',
      'Staff training & handoff documentation',
      'Performance monitoring & iteration',
    ],
    deliverables: ['Process automation blueprint', 'Implemented workflow automations', 'Integration documentation', 'ROI measurement dashboard'],
    timeline: '2–6 weeks depending on complexity',
    engagementType: 'Hourly — $65/hr',
  },
  {
    id: 'brand-positioning',
    slug: 'brand-identity-digital-positioning',
    category: 'marketing',
    title: 'Brand Identity & Digital Positioning',
    description: 'Define and execute a digital brand identity that cuts through — from visual identity to brand voice and messaging architecture.',
    price: '$65/hr',
    pricingTier: 'moderate',
    features: ['Brand strategy & positioning', 'Visual identity design', 'Messaging guidelines', 'Asset library & brand system'],
    scope: [
      'Brand audit & competitive analysis',
      'Brand strategy & positioning framework',
      'Visual identity design (logo, color, typography)',
      'Brand voice & messaging architecture',
      'Style guide & brand book creation',
      'Digital asset library setup',
      'Social media brand guidelines',
    ],
    deliverables: ['Brand identity system', 'Brand guidelines document', 'Digital asset library', 'Social media templates'],
    timeline: '3–8 weeks depending on depth',
    engagementType: 'Hourly — $65/hr',
  },
  {
    id: 'ai-agent-dev',
    slug: 'ai-agent-development',
    category: 'tech',
    title: 'AI Agent Development',
    description: 'Design and deploy autonomous AI agents purpose-built for your business domain — from customer-facing chatbots to internal workflow automation.',
    price: '$125/hr',
    pricingTier: 'premium',
    features: ['Domain-specific agent training', 'Multi-agent orchestration', 'Human-in-the-loop validation', 'Production deployment & monitoring'],
    scope: [
      'Domain analysis & agent capability mapping',
      'LLM selection & prompt architecture',
      'RAG pipeline design & implementation',
      'Agent tooling & function-calling integration',
      'Multi-agent orchestration framework',
      'Human-in-the-loop validation layer',
      'Production deployment & monitoring setup',
      'Performance tuning & cost optimization',
    ],
    deliverables: ['Deployed AI agent system', 'RAG pipeline configuration', 'Monitoring & observability dashboard', 'Technical documentation & training'],
    timeline: '6–16 weeks depending on complexity',
    engagementType: 'Hourly — $125/hr',
  },
  {
    id: 'fractional-cto',
    slug: 'fractional-cto-leadership',
    category: 'consulting',
    title: 'Fractional CTO Leadership',
    description: 'Part-time CTO leadership — high-caliber technical direction, architecture authority, and stakeholder management without the full-time commitment.',
    price: '$125/hr',
    pricingTier: 'premium',
    features: ['Engineering team leadership', 'Architecture authority & review', 'Technical roadmap & planning', 'Stakeholder & investor management'],
    scope: [
      'Technical assessment & audit',
      'Engineering team structure & hiring guidance',
      'Architecture review & modernization planning',
      'Technical roadmap development',
      'Sprint planning & engineering process optimization',
      'Stakeholder & investor technical presentations',
      'Vendor evaluation & technology procurement',
      'Ongoing technical advisory & mentoring',
    ],
    deliverables: ['Technical assessment report', 'Engineering roadmap', 'Architecture documentation', 'Ongoing advisory sessions'],
    timeline: 'Monthly retainer — 3+ month engagement',
    engagementType: 'Hourly — $125/hr',
  },
  {
    id: 'growth-strategy',
    slug: 'growth-strategy-funnel-design',
    category: 'marketing',
    title: 'Growth Strategy & Funnel Design',
    description: 'Data-driven growth strategies and conversion funnels that turn visitors into customers and customers into evangelists.',
    price: '$125/hr',
    pricingTier: 'premium',
    features: ['Funnel audit & optimization', 'Customer journey mapping', 'A/B testing framework', 'KPI dashboards & attribution'],
    scope: [
      'Growth audit & baseline metrics',
      'Customer journey mapping & segmentation',
      'Funnel architecture design',
      'A/B testing framework setup',
      'Conversion optimization strategy',
      'Attribution model & KPI dashboards',
      'Campaign execution & iteration',
      'Monthly performance reporting',
    ],
    deliverables: ['Growth strategy playbook', 'Funnel architecture diagrams', 'A/B testing framework', 'Performance dashboards'],
    timeline: '4–12 weeks initial engagement',
    engagementType: 'Hourly — $125/hr',
  },
  {
    id: 'exec-strategy',
    slug: 'executive-tech-strategy',
    category: 'consulting',
    title: 'Executive Tech Strategy',
    description: 'C-suite technical guidance for organizations navigating digital transformation, platform modernization, and technology strategy at the highest level.',
    price: 'Semi-Annual Fee',
    pricingTier: 'executive',
    features: ['Technology roadmap & vision', 'Build vs. buy analysis', 'Vendor evaluation & negotiation', 'Board-level presentations & advisory'],
    scope: [
      'Organizational technology assessment',
      'Digital transformation roadmap',
      'Build vs. buy decision framework',
      'Vendor landscape analysis & negotiation support',
      'Technology risk assessment & mitigation planning',
      'Board-level presentations & quarterly reviews',
      'M&A technical due diligence advisory',
      'Executive coaching & technical mentoring',
    ],
    deliverables: ['Technology strategy document', 'Digital transformation roadmap', 'Quarterly board presentations', 'Ongoing executive advisory'],
    timeline: 'Semi-annual engagement — flat fee',
    engagementType: 'Semi-Annual Flat Fee',
  },
  {
    id: 'saas-architecture',
    slug: 'saas-architecture-build-out',
    category: 'tech',
    title: 'SaaS Architecture & Build-Out',
    description: 'End-to-end SaaS platform development — multi-tenancy, billing integration, role-based access, and scalable architecture for production.',
    price: 'Semi-Annual Fee',
    pricingTier: 'executive',
    features: ['Multi-tenant architecture design', 'Stripe billing & subscription logic', 'RBAC & permissions system', 'Usage metering & analytics'],
    scope: [
      'Product requirements & technical specification',
      'Multi-tenant architecture design & implementation',
      'Stripe billing, subscription & metering integration',
      'Role-based access control (RBAC) system',
      'Usage analytics & reporting dashboard',
      'Infrastructure provisioning & CI/CD pipeline',
      'Security audit & compliance framework',
      'Production deployment & scaling strategy',
    ],
    deliverables: ['Production SaaS platform', 'Multi-tenant architecture', 'Billing & subscription system', 'Admin dashboard & analytics'],
    timeline: 'Semi-annual engagement — flat fee',
    engagementType: 'Semi-Annual Flat Fee',
  },
  {
    id: 'cro',
    slug: 'conversion-rate-optimization',
    category: 'marketing',
    title: 'Conversion Rate Optimization',
    description: 'Systematic CRO through data analysis, user research, and iterative experimentation — maximizing every visitor across your entire funnel.',
    price: 'Semi-Annual Fee',
    pricingTier: 'executive',
    features: ['Full-funnel analysis & audit', 'User behavior analytics', 'Landing page optimization', 'A/B & multivariate testing'],
    scope: [
      'Full-funnel conversion audit',
      'User behavior analytics & heatmapping',
      'Landing page optimization strategy',
      'A/B & multivariate testing framework',
      'Copy & UX optimization recommendations',
      'Technical performance audit (Core Web Vitals)',
      'Iterative experimentation & reporting',
      'Quarterly performance reviews',
    ],
    deliverables: ['CRO audit report', 'Testing roadmap & framework', 'Optimized landing pages', 'Quarterly performance reports'],
    timeline: 'Semi-annual engagement — flat fee',
    engagementType: 'Semi-Annual Flat Fee',
  },
]

export const tierLabels: Record<string, string> = {
  moderate: 'Moderate',
  premium: 'Premium',
  executive: 'Executive',
}
