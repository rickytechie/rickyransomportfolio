export type PricingTier = 'basic' | 'mid' | 'premium' | 'expert' | 'next-level'

export interface ServiceItem {
  id: string
  category: string
  title: string
  description: string
  price: string
  pricingTier: PricingTier
  features: string[]
}

export interface CourseItem {
  id: string
  title: string
  description: string
  price: string
  pricingTier: 'entry' | 'mid' | 'expert' | 'next-level'
  modules: string[]
}

export interface Category {
  id: string
  label: string
  subtitle: string
  icon: string
}

export const categories: Category[] = [
  { id: 'tech', label: 'Engineering & Tech', subtitle: 'AI / Full-Stack / DevOps', icon: 'Cpu' },
  { id: 'consulting', label: 'Consulting & Ops', subtitle: 'Strategy / Leadership / Automation', icon: 'Briefcase' },
  { id: 'marketing', label: 'Digital Marketing', subtitle: 'Growth / Brand / Conversion', icon: 'TrendingUp' },
  { id: 'courses', label: 'Growth Mindset Courses', subtitle: 'Mindset / Systems / Legacy', icon: 'BookOpen' },
]

export const techServices: ServiceItem[] = [
  {
    id: 'ai-agent-dev',
    category: 'tech',
    title: 'AI Agent Development',
    description: 'Design and deploy autonomous AI agents purpose-built for your business domain — from customer-facing chatbots to internal workflow automation.',
    price: '$125/hr',
    pricingTier: 'premium',
    features: ['Domain-specific agent training', 'Multi-agent orchestration', 'Human-in-the-loop validation', 'Production deployment'],
  },
  {
    id: 'full-stack-dev',
    category: 'tech',
    title: 'Full-Stack Web Development',
    description: 'End-to-end web applications using modern frameworks — optimized for speed, scalability, and conversion from day one.',
    price: '$65/hr',
    pricingTier: 'mid',
    features: ['Next.js / React architecture', 'API design & integration', 'Database modeling', 'CI/CD & deployment'],
  },
  {
    id: 'api-integration',
    category: 'tech',
    title: 'API Design & System Integration',
    description: 'Robust RESTful and GraphQL APIs with third-party integrations, webhooks, and real-time data pipelines.',
    price: '$65/hr',
    pricingTier: 'mid',
    features: ['API contract design', 'Auth & authorization', 'Rate limiting & caching', 'Testing & documentation'],
  },
  {
    id: 'cicd-devops',
    category: 'tech',
    title: 'CI/CD & DevOps Automation',
    description: 'Automated deployment pipelines that eliminate manual overhead and ensure reliable, repeatable releases.',
    price: '$30/hr',
    pricingTier: 'basic',
    features: ['GitHub Actions / CI setup', 'Automated testing', 'Staging → production workflows', 'Monitoring & alerting'],
  },
]

export const consultingServices: ServiceItem[] = [
  {
    id: 'exec-strategy',
    category: 'consulting',
    title: 'Executive Tech Strategy',
    description: 'C-suite technical guidance for organizations navigating digital transformation, platform modernization, and technology strategy.',
    price: '$125/hr',
    pricingTier: 'premium',
    features: ['Technology roadmap', 'Build vs. buy analysis', 'Vendor evaluation', 'Board-level presentations'],
  },
  {
    id: 'fractional-cto',
    category: 'consulting',
    title: 'Fractional CTO Leadership',
    description: 'Part-time CTO leadership — high-caliber technical direction without the full-time commitment.',
    price: '$125/hr',
    pricingTier: 'premium',
    features: ['Engineering team leadership', 'Architecture authority', 'Technical roadmap', 'Stakeholder management'],
  },
  {
    id: 'bpa',
    category: 'consulting',
    title: 'Business Process Automation',
    description: 'Identify and automate repetitive processes using modern workflow engines, AI, and API integration.',
    price: '$65/hr',
    pricingTier: 'mid',
    features: ['Process mapping & analysis', 'Workflow automation design', 'Tool integration', 'ROI measurement'],
  },
  {
    id: 'ops-workflow',
    category: 'consulting',
    title: 'Operations & Workflow Design',
    description: 'Design scalable operations workflows that reduce friction, improve accountability, and accelerate delivery.',
    price: '$30/hr',
    pricingTier: 'basic',
    features: ['Workflow mapping', 'Toolchain optimization', 'SOP development', 'Team training'],
  },
]

export const marketingServices: ServiceItem[] = [
  {
    id: 'growth-strategy',
    category: 'marketing',
    title: 'Growth Strategy & Funnel Design',
    description: 'Data-driven growth strategies and conversion funnels that turn visitors into customers and customers into evangelists.',
    price: '$125/hr',
    pricingTier: 'premium',
    features: ['Funnel audit & optimization', 'Customer journey mapping', 'A/B testing framework', 'KPI dashboards'],
  },
  {
    id: 'brand-positioning',
    category: 'marketing',
    title: 'Brand Identity & Digital Positioning',
    description: 'Define and execute a digital brand identity that cuts through — from visual identity to brand voice and messaging.',
    price: '$65/hr',
    pricingTier: 'mid',
    features: ['Brand strategy', 'Visual identity design', 'Messaging guidelines', 'Asset library'],
  },
  {
    id: 'cro',
    category: 'marketing',
    title: 'Conversion Rate Optimization',
    description: 'Systematic CRO through data analysis, user research, and iterative experimentation to maximize every visitor.',
    price: '$125/hr',
    pricingTier: 'premium',
    features: ['Funnel analysis', 'User behavior analytics', 'Landing page optimization', 'A/B & multivariate testing'],
  },
  {
    id: 'seo-content',
    category: 'marketing',
    title: 'SEO & Content Architecture',
    description: 'Technical SEO audits, content strategy, and information architecture that drive organic traffic and search rankings.',
    price: '$30/hr',
    pricingTier: 'basic',
    features: ['Technical SEO audit', 'Keyword strategy', 'Content calendar', 'Performance tracking'],
  },
]

export const growthCourses: CourseItem[] = [
  {
    id: 'resilience-faith',
    title: 'Resilience & Faith Foundation',
    description: 'Build an unshakeable foundation of resilience and faith that fuels consistency, courage, and long-term vision.',
    price: '$197',
    pricingTier: 'entry',
    modules: ['The Anatomy of Resilience', 'Faith as a Performance Multiplier', 'Overcoming Setbacks', 'Daily Resilience Rituals'],
  },
  {
    id: 'affirmations-mindset',
    title: 'Daily Affirmations & Mindset Mastery',
    description: 'Master intentional mindset programming through daily affirmations, visualization, and cognitive reframing.',
    price: '$497',
    pricingTier: 'mid',
    modules: ['The Science of Affirmations', 'Personal Mantras', 'Visualization & Mental Rehearsal', 'Cognitive Reframing'],
  },
  {
    id: 'productivity-time',
    title: 'Productivity & Time Asset Management',
    description: 'Treat time as your most valuable asset — design systems that maximize output while protecting energy.',
    price: '$497',
    pricingTier: 'mid',
    modules: ['Time Auditing & Energy Mapping', 'Deep Work Protocols', 'The 80/20 System', 'Automation Frameworks'],
  },
  {
    id: 'goal-digging',
    title: 'Goal Digging & Ruthless Execution',
    description: 'Break ambitious goals into executable systems. Learn ruthless execution without burnout.',
    price: '$997',
    pricingTier: 'expert',
    modules: ['Goal Cascading & Decomposition', 'The Execution OS', 'Accountability Architecture', 'Review Cycles'],
  },
  {
    id: 'systems-architecture',
    title: 'Systems Architecture for Life & Business',
    description: 'Apply systems thinking across life and business — from daily routines to multi-year strategic planning.',
    price: '$997',
    pricingTier: 'expert',
    modules: ['Systems Thinking Fundamentals', 'Life Architecture Design', 'Business Systems Mapping', 'Continuous Improvement'],
  },
  {
    id: 'spiritual-awareness',
    title: 'Spiritual Awareness & Alignment',
    description: 'Deepen spiritual awareness and align inner purpose with outer mission for authentic, sustainable success.',
    price: '$1,997',
    pricingTier: 'next-level',
    modules: ['Purpose Discovery', 'Meditation & Mindfulness', 'Energy Management', 'Legacy-First Decisions'],
  },
  {
    id: 'building-public',
    title: 'Building In Public',
    description: 'Build ventures, skills, and brand in public — transparency as a competitive advantage.',
    price: '$1,997',
    pricingTier: 'next-level',
    modules: ['The Build-in-Public Manifesto', 'Content Engine Design', 'Community Building', 'Monetization'],
  },
  {
    id: 'legacy-vision',
    title: 'Legacy Architecture & Long-Term Vision',
    description: 'Design your legacy with intentionality — systems, relationships, and ventures that outlast you.',
    price: '$1,997',
    pricingTier: 'next-level',
    modules: ['Legacy Thinking Frameworks', 'Multi-Generational Planning', 'Mentorship & Transfer', 'Ecosystem Building'],
  },
]

export const allServices: ServiceItem[] = [
  ...techServices,
  ...consultingServices,
  ...marketingServices,
]

export const tierLabels: Record<string, string> = {
  basic: 'Basic',
  mid: 'Mid',
  premium: 'Premium',
  entry: 'Entry',
  expert: 'Expert',
  'next-level': 'Next Level',
}
