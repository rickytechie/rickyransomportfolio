export type PricingTier = 'entry' | 'mid' | 'premium' | 'expert' | 'next-level'

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
  { id: 'engineering', label: 'Engineering & Tech', subtitle: 'AI / Automation / Architecture', icon: 'Cpu' },
  { id: 'consulting', label: 'Consulting & Ops', subtitle: 'Strategy / Leadership / Execution', icon: 'Briefcase' },
  { id: 'marketing', label: 'Digital Marketing', subtitle: 'Growth / Brand / Conversion', icon: 'TrendingUp' },
  { id: 'workshops', label: 'Workshops & Masterclasses', subtitle: 'Interactive Deep Dives', icon: 'GraduationCap' },
  { id: 'courses', label: 'Growth Mindset Courses', subtitle: 'Mindset / Systems / Legacy', icon: 'BookOpen' },
]

export const engineeringServices: ServiceItem[] = [
  {
    id: 'ai-agent-dev',
    category: 'engineering',
    title: 'AI Agent Development',
    description: 'Design, train, and deploy autonomous AI agents purpose-built for your business domain — from customer-facing chatbots to internal workflow automation.',
    price: '$125/hr',
    pricingTier: 'premium',
    features: ['Domain-specific agent training', 'Multi-agent orchestration', 'Human-in-the-loop validation', 'Production deployment & monitoring'],
  },
  {
    id: 'full-stack-dev',
    category: 'engineering',
    title: 'Full-Stack Web Development',
    description: 'End-to-end development of high-performance web applications using modern frameworks, optimized for speed, scalability, and conversion.',
    price: '$65/hr',
    pricingTier: 'mid',
    features: ['Next.js / React architecture', 'API design & integration', 'Database modeling', 'CI/CD & Vercel deployment'],
  },
  {
    id: 'api-integration',
    category: 'engineering',
    title: 'API Design & Integration',
    description: 'Design and implement robust RESTful and GraphQL APIs, including third-party integrations, webhooks, and real-time data pipelines.',
    price: '$65/hr',
    pricingTier: 'mid',
    features: ['API contract design', 'Authentication & authorization', 'Rate limiting & caching', 'Documentation & testing'],
  },
  {
    id: 'database-arch',
    category: 'engineering',
    title: 'Database Architecture & Optimization',
    description: 'Design, migrate, and optimize database systems — relational, document, and vector stores — for performance at scale.',
    price: '$65/hr',
    pricingTier: 'mid',
    features: ['Schema design & normalization', 'Query optimization & indexing', 'Migration planning & execution', 'Backup & disaster recovery'],
  },
  {
    id: 'cloud-infra',
    category: 'engineering',
    title: 'Cloud Infrastructure Engineering',
    description: 'Architect and manage scalable cloud infrastructure on AWS, GCP, or Vercel — from serverless functions to Kubernetes clusters.',
    price: '$125/hr',
    pricingTier: 'premium',
    features: ['Infrastructure as Code (Terraform)', 'Auto-scaling & load balancing', 'Cost optimization', 'Security group management'],
  },
  {
    id: 'cicd-pipeline',
    category: 'engineering',
    title: 'CI/CD Pipeline Automation',
    description: 'Build automated deployment pipelines that eliminate manual overhead and ensure reliable, repeatable releases.',
    price: '$30/hr',
    pricingTier: 'entry',
    features: ['GitHub Actions / GitLab CI setup', 'Automated testing integration', 'Staging → production workflows', 'Rollback & canary deployments'],
  },
  {
    id: 'codebase-audit',
    category: 'engineering',
    title: 'Codebase Audit & Optimization',
    description: 'Comprehensive codebase review to identify technical debt, performance bottlenecks, and security vulnerabilities.',
    price: '$65/hr',
    pricingTier: 'mid',
    features: ['Static analysis & linting', 'Performance profiling', 'Security vulnerability scan', 'Actionable remediation roadmap'],
  },
  {
    id: 'ui-ux-design',
    category: 'engineering',
    title: 'Web & UI/UX Design',
    description: 'Pixel-perfect, conversion-focused web design that balances brutalist aesthetics with intuitive user experience.',
    price: '$30/hr',
    pricingTier: 'entry',
    features: ['Wireframing & prototyping', 'Responsive design system', 'Interaction design', 'Design-to-code handoff'],
  },
  {
    id: 'perf-engineering',
    category: 'engineering',
    title: 'Performance Engineering & Scalability',
    description: 'Identify and eliminate performance bottlenecks across the full stack — from database queries to CDN configuration.',
    price: '$125/hr',
    pricingTier: 'premium',
    features: ['Load testing & benchmarking', 'Caching strategy design', 'CDN & edge optimization', 'Real-user monitoring setup'],
  },
  {
    id: 'security-hardening',
    category: 'engineering',
    title: 'Security Hardening & Compliance',
    description: 'Fortify your applications and infrastructure against OWASP Top 10 threats, with compliance mapping for SOC 2, HIPAA, and GDPR.',
    price: '$125/hr',
    pricingTier: 'premium',
    features: ['Threat modeling & risk assessment', 'Penetration testing', 'Compliance documentation', 'Security policy implementation'],
  },
  {
    id: 'mobile-dev',
    category: 'engineering',
    title: 'Mobile App Development',
    description: 'Build cross-platform mobile applications with React Native — from MVP to production — optimized for performance and user retention.',
    price: '$125/hr',
    pricingTier: 'premium',
    features: ['React Native architecture', 'App store deployment', 'Push notifications & real-time', 'Analytics & crash reporting'],
  },
  {
    id: 'tech-pm',
    category: 'engineering',
    title: 'Technical Project Management',
    description: 'Expert project management for engineering teams — sprint planning, stakeholder communication, and delivery execution.',
    price: '$65/hr',
    pricingTier: 'mid',
    features: ['Agile / Scrum ceremonies', 'Sprint planning & retrospectives', 'Risk management', 'Cross-team coordination'],
  },
]

export const consultingServices: ServiceItem[] = [
  {
    id: 'exec-consulting',
    category: 'consulting',
    title: 'Executive Tech Consulting',
    description: 'C-suite level technical guidance for organizations navigating digital transformation, platform modernization, and technology strategy.',
    price: '$125/hr',
    pricingTier: 'premium',
    features: ['Technology roadmap development', 'Build vs. buy analysis', 'Vendor evaluation', 'Board-level presentations'],
  },
  {
    id: 'startup-strategy',
    category: 'consulting',
    title: 'Startup Technical Strategy',
    description: 'From idea to MVP to scale — technical strategy and execution planning for early-stage startups and founders.',
    price: '$125/hr',
    pricingTier: 'premium',
    features: ['Technical co-founder advisory', 'MVP scope & architecture', 'Fundraising tech prep', 'Team hiring & structure'],
  },
  {
    id: 'virtual-cto',
    category: 'consulting',
    title: 'Virtual CTO / Fractional Leadership',
    description: 'Part-time CTO leadership for companies that need high-caliber technical direction without the full-time commitment.',
    price: '$125/hr',
    pricingTier: 'premium',
    features: ['Engineering team leadership', 'Technical strategy & roadmap', 'Architecture decision authority', 'Executive stakeholder management'],
  },
  {
    id: 'bpa',
    category: 'consulting',
    title: 'Business Process Automation',
    description: 'Identify and automate repetitive business processes using modern workflow engines, AI, and API integration.',
    price: '$80/hr',
    pricingTier: 'mid',
    features: ['Process mapping & analysis', 'Workflow automation design', 'Integration with existing tools', 'ROI measurement & reporting'],
  },
  {
    id: 'ops-design',
    category: 'consulting',
    title: 'Operations Workflow Design',
    description: 'Design and document scalable operations workflows that reduce friction, improve accountability, and accelerate delivery.',
    price: '$65/hr',
    pricingTier: 'mid',
    features: ['Workflow mapping & documentation', 'Toolchain optimization', 'SOP development', 'Team training & onboarding'],
  },
  {
    id: 'virtual-admin',
    category: 'consulting',
    title: 'Virtual Administrative Support',
    description: 'Reliable virtual administrative support for calendar management, email triage, research, and day-to-day operations.',
    price: '$40/hr',
    pricingTier: 'entry',
    features: ['Calendar & schedule management', 'Email triage & response', 'Research & data entry', 'Travel & logistics coordination'],
  },
  {
    id: 'exec-assistant',
    category: 'consulting',
    title: 'Executive Assistant Services',
    description: 'High-touch executive support including inbox management, meeting preparation, stakeholder communication, and priority coordination.',
    price: '$45/hr',
    pricingTier: 'entry',
    features: ['Priority inbox management', 'Meeting preparation & follow-up', 'Stakeholder communication', 'Confidential document handling'],
  },
  {
    id: 'pitch-deck',
    category: 'consulting',
    title: 'Pitch Deck & Investor Preparation',
    description: 'Craft compelling pitch decks, financial models, and investor narratives that communicate your vision with clarity and conviction.',
    price: '$85/hr',
    pricingTier: 'mid',
    features: ['Narrative development', 'Financial model review', 'Visual deck design', 'Pitch rehearsal & feedback'],
  },
  {
    id: 'due-diligence',
    category: 'consulting',
    title: 'Due Diligence & Technical Audit',
    description: 'Comprehensive technical due diligence for acquisitions, investments, or partnerships — uncovering risk and validating architecture.',
    price: '$100/hr',
    pricingTier: 'premium',
    features: ['Codebase & infrastructure review', 'Team capability assessment', 'Technical debt quantification', 'Risk mitigation plan'],
  },
  {
    id: 'project-rescue',
    category: 'consulting',
    title: 'Project Rescue & Recovery',
    description: 'Step in to salvage stalled or failing projects — assess damage, rebuild momentum, and deliver what was promised.',
    price: '$95/hr',
    pricingTier: 'premium',
    features: ['Post-mortem analysis', 'Stakeholder reset', 'Sprint restructuring', 'Delivery commitment & execution'],
  },
  {
    id: 'team-training',
    category: 'consulting',
    title: 'Team Building & Technical Training',
    description: 'Custom training programs designed to upskill engineering teams in modern practices, tools, and architectural patterns.',
    price: '$60/hr',
    pricingTier: 'mid',
    features: ['Skills gap assessment', 'Curriculum design', 'Hands-on workshops', 'Progress tracking & follow-up'],
  },
  {
    id: 'ai-workflow',
    category: 'consulting',
    title: 'AI Workflow Consulting',
    description: 'Strategic consulting on integrating AI workflows into your existing business processes — from prompt engineering to agent deployment.',
    price: '$125/hr',
    pricingTier: 'premium',
    features: ['AI opportunity assessment', 'Tool selection & integration', 'Workflow automation design', 'Team AI readiness training'],
  },
]

export const marketingServices: ServiceItem[] = [
  {
    id: 'growth-funnel',
    category: 'marketing',
    title: 'Growth Strategy & Funnel Design',
    description: 'Data-driven growth strategies and conversion funnel design that turn visitors into customers and customers into evangelists.',
    price: '$125/hr',
    pricingTier: 'premium',
    features: ['Funnel audit & optimization', 'Customer journey mapping', 'A/B testing framework', 'KPI dashboard setup'],
  },
  {
    id: 'seo-content',
    category: 'marketing',
    title: 'SEO & Content Architecture',
    description: 'Technical SEO audits, content strategy, and information architecture that drive organic traffic and improve search rankings.',
    price: '$65/hr',
    pricingTier: 'mid',
    features: ['Technical SEO audit', 'Keyword strategy & mapping', 'Content calendar development', 'Performance tracking & reporting'],
  },
  {
    id: 'cro',
    category: 'marketing',
    title: 'Conversion Rate Optimization',
    description: 'Systematic approach to improving conversion rates through data analysis, user research, and iterative experimentation.',
    price: '$125/hr',
    pricingTier: 'premium',
    features: ['Conversion funnel analysis', 'User behavior analytics', 'Landing page optimization', 'A/B & multivariate testing'],
  },
  {
    id: 'social-media',
    category: 'marketing',
    title: 'Social Media Strategy & Management',
    description: 'Strategic social media management that builds brand authority, drives engagement, and creates measurable business impact.',
    price: '$65/hr',
    pricingTier: 'mid',
    features: ['Platform strategy & positioning', 'Content creation & scheduling', 'Community management', 'Analytics & optimization'],
  },
  {
    id: 'email-automation',
    category: 'marketing',
    title: 'Email Marketing Automation',
    description: 'Design and deploy email automation sequences that nurture leads, re-engage customers, and drive recurring revenue.',
    price: '$45/hr',
    pricingTier: 'entry',
    features: ['List segmentation & hygiene', 'Drip campaign design', 'Template development', 'Performance analytics'],
  },
  {
    id: 'brand-positioning',
    category: 'marketing',
    title: 'Brand Identity & Digital Positioning',
    description: 'Define and execute a digital brand identity that cuts through the noise — from visual identity to brand voice and messaging.',
    price: '$125/hr',
    pricingTier: 'premium',
    features: ['Brand strategy & positioning', 'Visual identity design', 'Messaging & voice guidelines', 'Brand asset library'],
  },
]

export const workshopServices: ServiceItem[] = [
  {
    id: 'frontend-workshop',
    category: 'workshops',
    title: 'Frontend Engineering (React/Next.js)',
    description: 'Intensive hands-on workshop covering modern frontend development with React and Next.js — from components to production deployment.',
    price: '$65/hr',
    pricingTier: 'mid',
    features: ['Component architecture', 'State management patterns', 'Routing & data fetching', 'Performance optimization'],
  },
  {
    id: 'backend-workshop',
    category: 'workshops',
    title: 'Backend Architecture & API Design',
    description: 'Deep dive into backend architecture patterns, API design best practices, and building scalable server-side systems.',
    price: '$65/hr',
    pricingTier: 'mid',
    features: ['REST & GraphQL design', 'Authentication strategies', 'Database integration', 'Testing & documentation'],
  },
  {
    id: 'ml-workshop',
    category: 'workshops',
    title: 'Machine Learning Fundamentals',
    description: 'Foundational ML workshop covering supervised and unsupervised learning, model deployment, and MLOps basics.',
    price: '$125/hr',
    pricingTier: 'premium',
    features: ['ML pipeline design', 'Model training & evaluation', 'Deployment strategies', 'Monitoring & iteration'],
  },
  {
    id: 'sql-workshop',
    category: 'workshops',
    title: 'SQL & Database Design',
    description: 'Master SQL querying, database schema design, and data modeling techniques for modern applications.',
    price: '$30/hr',
    pricingTier: 'entry',
    features: ['Query writing & optimization', 'Schema design patterns', 'Indexing strategies', 'Real-world exercises'],
  },
  {
    id: 'nextjs-workshop',
    category: 'workshops',
    title: 'Next.js Deep Dive',
    description: 'Comprehensive workshop on Next.js App Router, server components, data fetching patterns, and deployment strategies.',
    price: '$65/hr',
    pricingTier: 'mid',
    features: ['App Router architecture', 'Server & client components', 'Data fetching & caching', 'Production deployment'],
  },
  {
    id: 'devops-workshop',
    category: 'workshops',
    title: 'CI/CD & DevOps Pipeline Engineering',
    description: 'Build and optimize CI/CD pipelines, containerization, and infrastructure automation for modern engineering teams.',
    price: '$65/hr',
    pricingTier: 'mid',
    features: ['Pipeline design & implementation', 'Docker & containerization', 'Cloud infrastructure basics', 'Monitoring & alerting'],
  },
  {
    id: 'prompt-workshop',
    category: 'workshops',
    title: 'Prompt Engineering & AI Workflows',
    description: 'Learn advanced prompt engineering techniques, AI agent design, and building production-ready AI workflows.',
    price: '$125/hr',
    pricingTier: 'premium',
    features: ['Prompt design patterns', 'Chain-of-thought techniques', 'AI API integration', 'Production deployment'],
  },
  {
    id: 'fullstack-bootcamp',
    category: 'workshops',
    title: 'Full-Stack Bootcamp (Multi-session)',
    description: 'Comprehensive multi-session bootcamp covering the entire modern full-stack development stack — from database to deployment.',
    price: '$125/hr',
    pricingTier: 'premium',
    features: ['Full-stack project build', 'Architecture decision-making', 'Production deployment', 'Code review & feedback'],
  },
]

export const growthCourses: CourseItem[] = [
  {
    id: 'resilience-faith',
    title: 'Resilience & Faith Foundation',
    description: 'Build an unshakeable foundation of resilience and faith that fuels consistency, courage, and long-term vision.',
    price: '$197',
    pricingTier: 'entry',
    modules: ['The Anatomy of Resilience', 'Faith as a Performance Multiplier', 'Overcoming Setbacks Systematically', 'Daily Resilience Rituals'],
  },
  {
    id: 'affirmations-mindset',
    title: 'Daily Affirmations & Mindset Mastery',
    description: 'Master the art of intentional mindset programming through daily affirmations, visualization, and cognitive reframing.',
    price: '$497',
    pricingTier: 'mid',
    modules: ['The Science of Affirmations', 'Designing Your Personal Mantras', 'Visualization & Mental Rehearsal', 'Cognitive Reframing Techniques'],
  },
  {
    id: 'productivity-time',
    title: 'Productivity & Time Asset Management',
    description: 'Treat time as your most valuable asset — design systems that maximize output while protecting energy and focus.',
    price: '$497',
    pricingTier: 'mid',
    modules: ['Time Auditing & Energy Mapping', 'Deep Work Protocols', 'The 80/20 Productivity System', 'Automation & Delegation Frameworks'],
  },
  {
    id: 'goal-digging',
    title: 'Goal Digging & Ruthless Execution',
    description: 'Break ambitious goals into executable systems. Learn the discipline of ruthless execution without burnout.',
    price: '$997',
    pricingTier: 'expert',
    modules: ['Goal Cascading & Decomposition', 'The Execution Operating System', 'Accountability Architecture', 'Review & Adjustment Cycles'],
  },
  {
    id: 'systems-architecture',
    title: 'Systems Architecture for Life & Business',
    description: 'Design and implement systems thinking across your life and business — from daily routines to multi-year strategic planning.',
    price: '$997',
    pricingTier: 'expert',
    modules: ['Systems Thinking Fundamentals', 'Life Architecture Design', 'Business Systems Mapping', 'Continuous Improvement Loops'],
  },
  {
    id: 'spiritual-awareness',
    title: 'Spiritual Awareness & Alignment',
    description: 'Deepen spiritual awareness and align your inner purpose with your outer mission for authentic, sustainable success.',
    price: '$1,997',
    pricingTier: 'next-level',
    modules: ['Purpose Discovery & Articulation', 'Meditation & Mindfulness Practice', 'Energy Management & Alignment', 'Legacy-First Decision Making'],
  },
  {
    id: 'building-public',
    title: 'Building In Public',
    description: 'Learn the art and strategy of building your ventures, skills, and brand in public — transparency as a competitive advantage.',
    price: '$1,997',
    pricingTier: 'next-level',
    modules: ['The Build-in-Public Manifesto', 'Content Engine Design', 'Community Building & Engagement', 'Monetization & Opportunity Capture'],
  },
  {
    id: 'legacy-vision',
    title: 'Legacy Architecture & Long-Term Vision',
    description: 'Design your legacy with intentionality — build systems, relationships, and ventures that outlast you.',
    price: '$1,997',
    pricingTier: 'next-level',
    modules: ['Legacy Thinking Frameworks', 'Multi-Generational Vision Planning', 'Mentorship & Knowledge Transfer', 'Ecosystem Building'],
  },
]

export const allServices: ServiceItem[] = [
  ...engineeringServices,
  ...consultingServices,
  ...marketingServices,
  ...workshopServices,
]

export const courseTierPrices: Record<string, string> = {
  entry: '$197',
  mid: '$497',
  expert: '$997',
  'next-level': '$1,997',
}

export const courseTierLabels: Record<string, string> = {
  entry: 'Entry',
  mid: 'Mid',
  expert: 'Expert',
  'next-level': 'Next Level',
}
