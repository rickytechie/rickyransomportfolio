export type PricingTier = 'moderate' | 'premium' | 'executive'

export interface ServiceItem {
  id: string
  category: string
  title: string
  description: string
  price: string
  pricingTier: PricingTier
  features: string[]
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
    category: 'tech',
    title: 'Full-Stack Web Development',
    description: 'End-to-end web applications using modern frameworks — optimized for speed, scalability, and conversion from day one.',
    price: '$65/hr',
    pricingTier: 'moderate',
    features: ['Next.js / React architecture', 'API design & integration', 'Database modeling & optimization', 'CI/CD & production deployment'],
  },
  {
    id: 'bpa',
    category: 'consulting',
    title: 'Business Process Automation',
    description: 'Identify and automate repetitive processes using modern workflow engines, AI, and API integration — reclaim hours every week.',
    price: '$65/hr',
    pricingTier: 'moderate',
    features: ['Process mapping & analysis', 'Workflow automation design', 'Tool integration & orchestration', 'ROI measurement & reporting'],
  },
  {
    id: 'brand-positioning',
    category: 'marketing',
    title: 'Brand Identity & Digital Positioning',
    description: 'Define and execute a digital brand identity that cuts through — from visual identity to brand voice and messaging architecture.',
    price: '$65/hr',
    pricingTier: 'moderate',
    features: ['Brand strategy & positioning', 'Visual identity design', 'Messaging guidelines', 'Asset library & brand system'],
  },
  {
    id: 'ai-agent-dev',
    category: 'tech',
    title: 'AI Agent Development',
    description: 'Design and deploy autonomous AI agents purpose-built for your business domain — from customer-facing chatbots to internal workflow automation.',
    price: '$125/hr',
    pricingTier: 'premium',
    features: ['Domain-specific agent training', 'Multi-agent orchestration', 'Human-in-the-loop validation', 'Production deployment & monitoring'],
  },
  {
    id: 'fractional-cto',
    category: 'consulting',
    title: 'Fractional CTO Leadership',
    description: 'Part-time CTO leadership — high-caliber technical direction, architecture authority, and stakeholder management without the full-time commitment.',
    price: '$125/hr',
    pricingTier: 'premium',
    features: ['Engineering team leadership', 'Architecture authority & review', 'Technical roadmap & planning', 'Stakeholder & investor management'],
  },
  {
    id: 'growth-strategy',
    category: 'marketing',
    title: 'Growth Strategy & Funnel Design',
    description: 'Data-driven growth strategies and conversion funnels that turn visitors into customers and customers into evangelists.',
    price: '$125/hr',
    pricingTier: 'premium',
    features: ['Funnel audit & optimization', 'Customer journey mapping', 'A/B testing framework', 'KPI dashboards & attribution'],
  },
  {
    id: 'exec-strategy',
    category: 'consulting',
    title: 'Executive Tech Strategy',
    description: 'C-suite technical guidance for organizations navigating digital transformation, platform modernization, and technology strategy at the highest level.',
    price: 'Semi-Annual Fee',
    pricingTier: 'executive',
    features: ['Technology roadmap & vision', 'Build vs. buy analysis', 'Vendor evaluation & negotiation', 'Board-level presentations & advisory'],
  },
  {
    id: 'saas-architecture',
    category: 'tech',
    title: 'SaaS Architecture & Build-Out',
    description: 'End-to-end SaaS platform development — multi-tenancy, billing integration, role-based access, and scalable architecture for production.',
    price: 'Semi-Annual Fee',
    pricingTier: 'executive',
    features: ['Multi-tenant architecture design', 'Stripe billing & subscription logic', 'RBAC & permissions system', 'Usage metering & analytics'],
  },
  {
    id: 'cro',
    category: 'marketing',
    title: 'Conversion Rate Optimization',
    description: 'Systematic CRO through data analysis, user research, and iterative experimentation — maximizing every visitor across your entire funnel.',
    price: 'Semi-Annual Fee',
    pricingTier: 'executive',
    features: ['Full-funnel analysis & audit', 'User behavior analytics', 'Landing page optimization', 'A/B & multivariate testing'],
  },
]

export const tierLabels: Record<string, string> = {
  moderate: 'Moderate',
  premium: 'Premium',
  executive: 'Executive',
}
