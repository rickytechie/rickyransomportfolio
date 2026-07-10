export type PricingTier = 'basic' | 'mid' | 'high'

export interface ServiceItem {
  id: string
  category: 'tech' | 'consulting' | 'education'
  title: string
  description: string
  pricingTier: PricingTier
  features: string[]
}

export const pricingDisplay: Record<PricingTier, string> = {
  basic: '$45/hr',
  mid: '$3,500/project',
  high: 'Inquire for Pricing',
}

export const categories = [
  {
    id: 'tech' as const,
    label: 'Tech Stack',
    subtitle: 'AI / Automation / Architecture',
  },
  {
    id: 'consulting' as const,
    label: 'Consulting / Marketing',
    subtitle: 'Strategy & Growth',
  },
  {
    id: 'education' as const,
    label: 'Education / Speaking',
    subtitle: 'Workshops & Keynotes',
  },
]

export const services: ServiceItem[] = [
  {
    id: 'ai-automation',
    category: 'tech',
    title: 'AI Pipeline Automation',
    description:
      'Design and deploy intelligent automation pipelines that eliminate busywork and accelerate delivery across your entire operation.',
    pricingTier: 'basic',
    features: ['Workflow audit & roadmap', 'Custom AI agent integration', 'API orchestration', 'Monitoring & analytics'],
  },
  {
    id: 'system-architecture',
    category: 'tech',
    title: 'System Architecture Design',
    description:
      'Full-stack architecture planning and implementation — from serverless backends to high-performance frontends built to scale.',
    pricingTier: 'mid',
    features: ['Stack evaluation & selection', 'Scalable infrastructure design', 'CI/CD pipeline setup', 'Security audit'],
  },
  {
    id: 'custom-ai-agents',
    category: 'tech',
    title: 'Custom AI Agent Development',
    description:
      'Build bespoke AI agents trained on your data and workflows — purpose-built for your specific business domain.',
    pricingTier: 'high',
    features: ['Domain-specific training', 'Multi-agent coordination', 'Human-in-the-loop validation', 'Ongoing optimization'],
  },
  {
    id: 'growth-strategy',
    category: 'consulting',
    title: 'Growth Strategy Session',
    description:
      'Intensive one-on-one strategy sessions to identify bottlenecks, uncover opportunities, and build a roadmap to your next revenue milestone.',
    pricingTier: 'basic',
    features: ['Competitive analysis', 'Conversion funnel audit', 'Growth opportunity mapping', 'Actionable playbook'],
  },
  {
    id: 'full-stack-consulting',
    category: 'consulting',
    title: 'Full-Stack Consulting',
    description:
      'Hands-on technical consulting for teams that need to move faster — from codebase audits to production-grade architecture.',
    pricingTier: 'mid',
    features: ['Codebase audit & remediation', 'Performance optimization', 'Team mentorship', 'Architecture review'],
  },
  {
    id: 'enterprise-transformation',
    category: 'consulting',
    title: 'Enterprise Digital Transformation',
    description:
      'End-to-end digital transformation consulting for organizations ready to modernize their tech stack, culture, and delivery pipeline.',
    pricingTier: 'high',
    features: ['Maturity assessment', 'Technology roadmap', 'Change management', 'Executive coaching'],
  },
  {
    id: 'workshops',
    category: 'education',
    title: 'Engineering Workshops',
    description:
      'Intensive, hands-on workshops covering modern full-stack development — from Next.js to deployment pipelines and everything in between.',
    pricingTier: 'basic',
    features: ['Live coding sessions', 'Real-world projects', 'Q&A & office hours', 'Take-home resources'],
  },
  {
    id: 'keynote-speaking',
    category: 'education',
    title: 'Keynote Speaking',
    description:
      'High-energy keynotes on engineering discipline, entrepreneurial grit, and the intersection of culture and functional code.',
    pricingTier: 'mid',
    features: ['Customized presentation', 'Audience engagement', 'Post-talk Q&A', 'Follow-up resources'],
  },
  {
    id: 'masterclass-series',
    category: 'education',
    title: 'Masterclass Series',
    description:
      'Multi-session deep-dives designed for teams and organizations looking to build institutional knowledge across engineering and product disciplines.',
    pricingTier: 'high',
    features: ['Curriculum design', 'Hands-on exercises', 'Team assessments', 'Ongoing support'],
  },
]
