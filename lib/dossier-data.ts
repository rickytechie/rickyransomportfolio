export interface DossierSlide {
  id: string
  title: string
  subtitle: string
  content: string[]
  competencies?: string[]
  metrics?: { label: string; value: string }[]
  tags?: string[]
  imageUrl: string
  imageQuery: string
}

export const dossierSlides: DossierSlide[] = [
  {
    id: 'executive-summary',
    title: 'Executive Summary',
    subtitle: 'Hunter Mentality · Full-Stack Architect · Force Multiplier',
    content: [
      '20+ years of experience bridging the gap between creativity, community, and code. I am Ricky Ransom — full-stack tech architect, executive success consultant, and founder of the RKYRNSM Digital Engine.',
      'My career spans the full spectrum: from designing enterprise-scale distributed systems and AI-driven architectures to building multi-million-dollar consumer brands from seed-stage. I combine deep technical expertise with the strategic vision of a CTO and the execution discipline of a founder.',
      'I operate with a Hunter Mentality — identify the target, build the system, execute with precision, and iterate relentlessly. Every engagement is treated as a mission: move the needle or get out of the way.',
    ],
    competencies: [
      'Full-Stack Architecture',
      'AI/ML Engineering',
      'Blockchain & Web3',
      'Executive Leadership',
      'Growth Strategy',
      'Systems Design',
    ],
    tags: ['20+ Years Experience', 'Seed-to-Scale', 'Hunter Mentality'],
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop&q=80',
    imageQuery: 'technology,network,abstract',
  },
  {
    id: 'scaling-success',
    title: 'Scaling Success',
    subtitle: 'NOUVINTAGE · Jimmy Swagg Eyewear · Seed to Multi-Million',
    content: [
      'I have taken concepts from zero to revenue — engineering every pixel, every pipeline, and every conversion funnel along the way. NOUVINTAGE, a high-end vintage marketplace, went from zero inventory to thousands of SKUs with zero-touch listing automation, achieving a 4.2% conversion rate through obsessive funnel optimization.',
      'Jimmy Swagg Eyewear was a seed-stage concept when I stepped in. I architected the full digital infrastructure — e-commerce platform, ERP integration, supply chain automation, and multi-channel sales operations — scaling it from idea to a multi-revenue-stream operation with wholesale and DTC channels.',
      'Beyond the builds, I bring digital and event marketing expertise, having designed automated campaign funnels, retargeting systems, and full-funnel attribution models that turned single-city activations into multi-region growth engines.',
    ],
    metrics: [
      { label: 'Revenue Accelerated', value: '$2.4M+' },
      { label: 'Inventory Items', value: '5K+' },
      { label: 'Conversion Rate', value: '4.2%' },
      { label: 'Channels Built', value: 'DTC + Wholesale' },
    ],
    tags: ['E-Commerce', 'ERP', 'Marketing Automation', 'Multi-Channel'],
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop&q=80',
    imageQuery: 'architecture,growth,urban',
  },
  {
    id: 'technical-stack',
    title: 'The Technical Stack',
    subtitle: 'Full-Stack · Web3 · AI · Blockchain',
    content: [
      'My technical foundation spans the modern engineering landscape. On the frontend, I architect with Next.js, React, and TypeScript — building performant, accessible interfaces that convert. On the backend, I design scalable APIs, serverless functions, and distributed systems that handle production traffic without breaking a sweat.',
      'In the AI domain, I design and deploy autonomous agents, build RAG pipelines, and integrate large language models into production workflows. My blockchain experience includes smart contract development, dApp architecture, and Web3 integration strategies that bridge traditional business with decentralized infrastructure.',
      'I am equally comfortable in the boardroom and the terminal. I speak the language of engineers, executives, and investors — translating technical complexity into strategic clarity.',
    ],
    competencies: [
      'Next.js / React / TypeScript',
      'Node.js / Python / Go',
      'PostgreSQL / MongoDB / Redis',
      'AWS / GCP / Vercel',
      'AI/ML Pipelines & Agents',
      'Solidity / Web3 / Blockchain',
    ],
    tags: ['Full-Stack', 'AI/ML', 'Web3', 'Cloud Infrastructure'],
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop&q=80',
    imageQuery: 'server,infrastructure,code',
  },
  {
    id: 'vision-synthesis',
    title: 'Vision & Synthesis',
    subtitle: 'Patient Residency · Culture/Code Mastery · The Road to Success',
    content: [
      'I did not walk the halls of Weill Cornell as a doctor, but as a long-term patient — a residency of necessity, not choice. I spent years navigating the landscape of trauma, undergoing 70+ major procedures, including 33 specialized UVEC stem cell surgeries on top of 38 prior life-saving interventions. This was my proving ground — not a classroom, but the front lines of human survival.',
      'The resilience I forged there, and the deep understanding of complex biological systems, became the foundation for my approach to systems architecture, software engineering, and product building. Before code, there was linguistics — four languages plus working knowledge of others that gave me a deep understanding of structure, syntax, and meaning. Before engineering, there was music — composition and performance that taught me the art of flow.',
      'The RKYRNSM Digital Engine is the synthesis of all of it. I build for founders who have been counted out. I architect for teams underestimated by the market. I speak for audiences that need to hear that their obstacles are not roadblocks — they are raw materials for something greater.',
      'This is not just a portfolio. It is a living thesis: adversity plus architecture equals advantage. Let us build.',
    ],
    competencies: [
      'Systems Architecture',
      'Full-Stack Engineering',
      'AI & Machine Learning',
      'Executive Leadership',
      'Strategic Consulting',
      'Keynote Speaking',
    ],
    metrics: [
      { label: 'Major Procedures', value: '70+' },
      { label: 'UVEC Surgeries', value: '33' },
      { label: 'Prior Interventions', value: '38' },
      { label: 'Languages Spoken', value: '4+' },
    ],
    tags: ['Resilience', 'Synthesis', 'Vision', 'The Road to Success'],
    imageUrl: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1200&h=800&fit=crop&q=80',
    imageQuery: 'ocean,coastal,resilience',
  },
]
