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
  {
    id: 'rag-pipelines',
    category: 'tech',
    title: 'RAG Pipeline Engineering',
    description: 'Build retrieval-augmented generation systems that ground LLM outputs in your proprietary data — accurate, auditable, production-grade.',
    price: '$125/hr',
    pricingTier: 'premium',
    features: ['Vector DB architecture', 'Chunking strategies', 'Embedding optimization', 'Citation & provenance tracking'],
  },
  {
    id: 'blockchain-web3',
    category: 'tech',
    title: 'Blockchain & Web3 Development',
    description: 'Smart contracts, dApp architecture, and decentralized infrastructure that bridge traditional business with Web3.',
    price: '$125/hr',
    pricingTier: 'premium',
    features: ['Solidity / smart contracts', 'dApp frontend integration', 'Wallet & auth flows', 'Token economics design'],
  },
  {
    id: 'mobile-dev',
    category: 'tech',
    title: 'Cross-Platform Mobile Development',
    description: 'React Native and Flutter applications that ship once and perform natively across iOS and Android.',
    price: '$65/hr',
    pricingTier: 'mid',
    features: ['React Native / Flutter', 'Offline-first architecture', 'Push notifications', 'App Store deployment'],
  },
  {
    id: 'database-architecture',
    category: 'tech',
    title: 'Database Architecture & Optimization',
    description: 'Schema design, query optimization, and data modeling for PostgreSQL, MongoDB, Redis, and beyond.',
    price: '$30/hr',
    pricingTier: 'basic',
    features: ['Schema design & migration', 'Query performance tuning', 'Replication & sharding', 'Backup & recovery'],
  },
  {
    id: 'cloud-infra',
    category: 'tech',
    title: 'Cloud Infrastructure & Deployment',
    description: 'AWS, GCP, and Vercel infrastructure designed for reliability, cost-efficiency, and auto-scaling under load.',
    price: '$65/hr',
    pricingTier: 'mid',
    features: ['AWS / GCP architecture', 'Serverless deployment', 'Container orchestration', 'Cost optimization'],
  },
  {
    id: 'saas-architecture',
    category: 'tech',
    title: 'SaaS Architecture & Build-Out',
    description: 'End-to-end SaaS platform development — multi-tenancy, billing integration, role-based access, and scalable architecture.',
    price: '$125/hr',
    pricingTier: 'premium',
    features: ['Multi-tenant architecture', 'Stripe billing integration', 'RBAC & permissions', 'Usage metering & analytics'],
  },
  {
    id: 'realtime-systems',
    category: 'tech',
    title: 'Real-Time Systems & WebSockets',
    description: 'Live data feeds, collaborative editing, real-time notifications, and event-driven architectures that feel instant.',
    price: '$30/hr',
    pricingTier: 'basic',
    features: ['WebSocket implementation', 'Event-driven architecture', 'Real-time sync', 'Presence & status systems'],
  },
  {
    id: 'technical-audit',
    category: 'tech',
    title: 'Technical Code Audit & Remediation',
    description: 'Deep-dive codebase audits covering security, performance, architecture, and technical debt — with actionable remediation plans.',
    price: '$30/hr',
    pricingTier: 'basic',
    features: ['Security vulnerability scan', 'Performance profiling', 'Architecture review', 'Technical debt roadmap'],
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
  {
    id: 'startup-advisory',
    category: 'consulting',
    title: 'Startup Technical Advisory',
    description: 'From idea to MVP to Series A — technical due diligence, architecture decisions, and engineering roadmap for founders.',
    price: '$125/hr',
    pricingTier: 'premium',
    features: ['Technical due diligence', 'MVP scoping & planning', 'Investor-ready architecture', 'Engineering hiring guidance'],
  },
  {
    id: 'digital-transformation',
    category: 'consulting',
    title: 'Digital Transformation Consulting',
    description: 'Modernize legacy systems and digitize manual operations — from paper-based workflows to cloud-native platforms.',
    price: '$65/hr',
    pricingTier: 'mid',
    features: ['Legacy system assessment', 'Migration planning', 'Change management', 'Digital-first process design'],
  },
  {
    id: 'team-scaling',
    category: 'consulting',
    title: 'Engineering Team Scaling',
    description: 'Build, structure, and scale engineering teams — hiring playbooks, org design, and performance frameworks.',
    price: '$65/hr',
    pricingTier: 'mid',
    features: ['Org structure design', 'Hiring playbook creation', 'Performance frameworks', 'Culture & process alignment'],
  },
  {
    id: 'security-compliance',
    category: 'consulting',
    title: 'Security & Compliance Consulting',
    description: 'SOC 2, HIPAA, GDPR readiness — security architecture, policy creation, and compliance audit preparation.',
    price: '$125/hr',
    pricingTier: 'premium',
    features: ['Security architecture review', 'Compliance roadmap', 'Policy & documentation', 'Audit preparation'],
  },
  {
    id: 'data-strategy',
    category: 'consulting',
    title: 'Data Strategy & Analytics Architecture',
    description: 'Turn raw data into strategic advantage — warehouse design, ETL pipelines, dashboards, and decision intelligence.',
    price: '$65/hr',
    pricingTier: 'mid',
    features: ['Data warehouse design', 'ETL pipeline architecture', 'Dashboard & BI tooling', 'Data governance framework'],
  },
  {
    id: 'product-strategy',
    category: 'consulting',
    title: 'Product Strategy & Roadmapping',
    description: 'Define product vision, prioritize ruthlessly, and build roadmaps that align engineering output with business outcomes.',
    price: '$30/hr',
    pricingTier: 'basic',
    features: ['Product vision workshops', 'Feature prioritization', 'Roadmap creation', 'Stakeholder alignment'],
  },
  {
    id: 'vendor-selection',
    category: 'consulting',
    title: 'Vendor & Technology Evaluation',
    description: 'Objective evaluation of SaaS, APIs, and platform vendors — technical fit, cost analysis, and migration risk assessment.',
    price: '$30/hr',
    pricingTier: 'basic',
    features: ['Requirements gathering', 'Vendor comparison matrix', 'Proof of concept oversight', 'Contract negotiation support'],
  },
  {
    id: 'crisis-tech-consulting',
    category: 'consulting',
    title: 'Crisis & Turnaround Tech Consulting',
    description: 'When systems are failing and deadlines are burning — emergency triage, rapid stabilization, and strategic recovery plans.',
    price: '$125/hr',
    pricingTier: 'premium',
    features: ['Incident triage & root cause', 'System stabilization', 'Recovery roadmap', 'Post-mortem & prevention'],
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
  {
    id: 'paid-ads',
    category: 'marketing',
    title: 'Paid Media & Ad Campaign Management',
    description: 'Google Ads, Meta Ads, and programmatic campaigns engineered for maximum ROAS with data-driven budget allocation.',
    price: '$65/hr',
    pricingTier: 'mid',
    features: ['Campaign architecture', 'Audience targeting & segmentation', 'Creative testing framework', 'Budget optimization & reporting'],
  },
  {
    id: 'email-automation',
    category: 'marketing',
    title: 'Email Marketing & Automation',
    description: 'Lifecycle email sequences, drip campaigns, and behavioral triggers that nurture leads and retain customers at scale.',
    price: '$30/hr',
    pricingTier: 'basic',
    features: ['Email sequence design', 'Behavioral trigger setup', 'List segmentation', 'Deliverability optimization'],
  },
  {
    id: 'social-media',
    category: 'marketing',
    title: 'Social Media Strategy & Execution',
    description: 'Platform-native content strategies, community management, and engagement systems across Instagram, TikTok, LinkedIn, and X.',
    price: '$30/hr',
    pricingTier: 'basic',
    features: ['Content calendar creation', 'Platform-specific strategy', 'Community engagement', 'Analytics & reporting'],
  },
  {
    id: 'event-marketing',
    category: 'marketing',
    title: 'Event & Launch Marketing',
    description: 'End-to-end event marketing — from pre-event buzz campaigns to on-site activations and post-event nurture sequences.',
    price: '$65/hr',
    pricingTier: 'mid',
    features: ['Launch campaign design', 'Event funnel architecture', 'On-site activation strategy', 'Post-event retargeting'],
  },
  {
    id: 'influencer-partnerships',
    category: 'marketing',
    title: 'Influencer & Partnership Marketing',
    description: 'Identify, negotiate, and manage influencer partnerships and brand collaborations that drive authentic reach and conversion.',
    price: '$65/hr',
    pricingTier: 'mid',
    features: ['Influencer identification & vetting', 'Partnership negotiation', 'Campaign brief design', 'ROI tracking & attribution'],
  },
  {
    id: 'analytics-attribution',
    category: 'marketing',
    title: 'Marketing Analytics & Attribution',
    description: 'Full-funnel attribution modeling, UTM architecture, and dashboards that reveal exactly where revenue originates.',
    price: '$30/hr',
    pricingTier: 'basic',
    features: ['UTM framework design', 'Attribution model setup', 'Dashboard creation', 'Cross-channel reporting'],
  },
  {
    id: 'copywriting',
    category: 'marketing',
    title: 'Conversion Copywriting',
    description: 'Website copy, landing pages, and ad copy engineered for persuasion — data-informed, A/B-tested, conversion-focused.',
    price: '$30/hr',
    pricingTier: 'basic',
    features: ['Website & landing page copy', 'Ad copywriting', 'Value proposition frameworks', 'CRO copy audits'],
  },
  {
    id: 'referral-viral',
    category: 'marketing',
    title: 'Referral & Viral Loop Design',
    description: 'Engineer organic growth loops — referral programs, sharing mechanics, and viral coefficients that compound user acquisition.',
    price: '$125/hr',
    pricingTier: 'premium',
    features: ['Referral program architecture', 'Viral coefficient modeling', 'Incentive design', 'Growth loop analytics'],
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
  {
    id: 'financial-literacy',
    title: 'Financial Literacy & Wealth Building',
    description: 'From budgeting to investing to building passive income streams — the financial operating system every entrepreneur needs.',
    price: '$497',
    pricingTier: 'mid',
    modules: ['Personal Finance Operating System', 'Investment Fundamentals', 'Passive Income Architecture', 'Tax Strategy Basics'],
  },
  {
    id: 'public-speaking',
    title: 'Public Speaking & Keynote Mastery',
    description: 'Command any room — from stage presence to storytelling to handling Q&A like a seasoned executive.',
    price: '$997',
    pricingTier: 'expert',
    modules: ['Stage Presence & Delivery', 'Narrative Architecture', 'Audience Psychology', 'Improvisation & Q&A Mastery'],
  },
  {
    id: 'leadership-exec',
    title: 'Leadership & Executive Presence',
    description: 'Develop the presence, decision-making framework, and communication style of a high-impact leader.',
    price: '$997',
    pricingTier: 'expert',
    modules: ['Executive Presence Foundations', 'Decision-Making Under Pressure', 'Conflict Resolution', 'Leading Through Change'],
  },
  {
    id: 'tech-for-founders',
    title: 'Tech Literacy for Non-Technical Founders',
    description: 'Understand enough technology to make smart hiring decisions, evaluate vendors, and speak the language of your engineering team.',
    price: '$197',
    pricingTier: 'entry',
    modules: ['How Software Is Built', 'Hiring & Managing Engineers', 'Technical Due Diligence Basics', 'Platform & Architecture Decisions'],
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
