'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, TrendingUp, Users, Code } from 'lucide-react'

interface Venture {
  id: string
  name: string
  tagline: string
  description: string
  metrics: { label: string; value: string }[]
  tags: string[]
  href: string
  icon: React.ReactNode
}

const ventures: Venture[] = [
  {
    id: 'agency',
    name: 'Ricky Ransom Agency',
    tagline: 'Synthesis of culture and functional code',
    description:
      'A full-stack digital agency that builds high-conversion web products for brands that refuse to blend in. We take ideas from concept to revenue, engineering every pixel and every pipeline.',
    metrics: [
      { label: 'Revenue Generated', value: '$2.4M+' },
      { label: 'Ships Delivered', value: '40+' },
    ],
    tags: ['React', 'Node.js', 'Next.js', 'PostgreSQL', 'AWS'],
    href: '#',
    icon: <Code size={20} />,
  },
  {
    id: 'gym-mingle',
    name: 'Gym Mingle',
    tagline: 'The social fitness ecosystem',
    description:
      'Built from the ground up — a platform connecting gym-goers, trainers, and fitness brands. Scaled from zero to a thriving community through lean engineering and viral growth loops.',
    metrics: [
      { label: 'Community', value: '15K+' },
      { label: 'Engagement Rate', value: '68%' },
    ],
    tags: ['React Native', 'Firebase', 'Stripe', 'GraphQL'],
    href: '#',
    icon: <Users size={20} />,
  },
  {
    id: 'nouvintage',
    name: 'NOUVINTAGE',
    tagline: 'Curated resale, engineered for scale',
    description:
      'A high-end vintage marketplace blending editorial curation with robust e-commerce architecture. Automated listing pipelines, custom CMS, and a checkout flow optimized for conversion.',
    metrics: [
      { label: 'Inventory', value: '5K+' },
      { label: 'Conversion Rate', value: '4.2%' },
    ],
    tags: ['Next.js', 'Sanity', 'Stripe', 'Tailwind', 'Vercel'],
    href: '#',
    icon: <TrendingUp size={20} />,
  },
]

export default function CaseStudy() {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <section id="case-studies" className="relative py-32 px-6 md:px-16 lg:px-24 bg-sand">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-muted mb-4 block">
            Selected Work
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-stone-950">
            Case Studies
          </h2>
          <div className="w-24 h-1 bg-accent mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {ventures.map((venture, i) => (
            <motion.div
              key={venture.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div
                className={`group relative border-2 transition-all duration-500 cursor-pointer ${
                  activeId === venture.id
                    ? 'border-accent bg-stone-950 text-sand'
                    : 'border-concrete bg-white text-stone-950 hover:border-stone-950'
                }`}
                onClick={() => setActiveId(activeId === venture.id ? null : venture.id)}
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`p-2 border ${
                        activeId === venture.id
                          ? 'border-accent text-accent'
                          : 'border-concrete-dark text-muted group-hover:border-stone-950'
                      } transition-colors duration-300`}
                    >
                      {venture.icon}
                    </span>
                    <span className="text-xs font-mono tracking-widest uppercase">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight mb-2">{venture.name}</h3>
                  <p
                    className={`text-sm font-mono mb-4 ${
                      activeId === venture.id ? 'text-accent' : 'text-accent'
                    }`}
                  >
                    {venture.tagline}
                  </p>

                  <AnimatePresence>
                    {activeId === venture.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm leading-relaxed mb-6 text-concrete-dark">
                          {venture.description}
                        </p>

                        <div className="flex gap-6 mb-6">
                          {venture.metrics.map((m) => (
                            <div key={m.label}>
                              <span className="text-2xl font-bold text-accent-alt block">{m.value}</span>
                              <span className="text-xs font-mono text-concrete-dark">{m.label}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {venture.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-xs font-mono border border-concrete-dark/30 text-concrete-dark"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <a
                          href={venture.href}
                          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent hover:text-accent-alt transition-colors"
                        >
                          View Project <ExternalLink size={14} />
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {activeId !== venture.id && (
                    <p className="text-xs font-mono text-muted mt-4">
                      Click to expand
                    </p>
                  )}
                </div>

                <div
                  className={`absolute top-0 right-0 w-12 h-12 flex items-center justify-center text-xs font-bold border-l-2 border-b-2 transition-colors duration-500 ${
                    activeId === venture.id
                      ? 'border-accent bg-accent text-stone-950'
                      : 'border-concrete bg-transparent text-muted group-hover:border-stone-950'
                  }`}
                >
                  {activeId === venture.id ? '−' : '+'}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
