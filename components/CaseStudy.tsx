'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, TrendingUp, Users, Code, ArrowLeft, ArrowRight } from 'lucide-react'

interface Venture {
  id: string
  name: string
  tagline: string
  description: string
  metrics: { label: string; value: string }[]
  tags: string[]
  href: string
  icon: React.ReactNode
  color: string
}

const ventures: Venture[] = [
  {
    id: 'agency',
    name: 'Ricky Ransom Agency',
    tagline: 'Synthesis of culture and functional code',
    description:
      'A full-stack digital agency that builds high-conversion web products for brands that refuse to blend in. We take concepts from zero to revenue — engineering every pixel, every pipeline, every conversion funnel.',
    metrics: [
      { label: 'Revenue Generated', value: '$2.4M+' },
      { label: 'Ships Delivered', value: '40+' },
    ],
    tags: ['React', 'Node.js', 'Next.js', 'PostgreSQL', 'AWS'],
    href: '#',
    icon: <Code size={20} />,
    color: 'from-accent to-accent-alt',
  },
  {
    id: 'gym-mingle',
    name: 'Gym Mingle',
    tagline: 'The social fitness ecosystem',
    description:
      'Built from the ground up — a platform connecting gym-goers, trainers, and fitness brands. Scaled from zero to a thriving community through lean engineering and viral growth loops. Full-stack React Native with real-time engagement.',
    metrics: [
      { label: 'Community', value: '15K+' },
      { label: 'Engagement Rate', value: '68%' },
    ],
    tags: ['React Native', 'Firebase', 'Stripe', 'GraphQL'],
    href: 'https://gym-mingle-ii-web.vercel.app/',
    icon: <Users size={20} />,
    color: 'from-accent-alt to-neon',
  },
  {
    id: 'nouvintage',
    name: 'NOUVINTAGE',
    tagline: 'Curated resale, engineered for scale',
    description:
      'A high-end vintage marketplace blending editorial curation with robust e-commerce architecture. Automated listing pipelines, headless CMS, and a checkout flow optimized for conversion at every touchpoint.',
    metrics: [
      { label: 'Inventory Items', value: '5K+' },
      { label: 'Conversion Rate', value: '4.2%' },
    ],
    tags: ['Next.js', 'Sanity', 'Stripe', 'Tailwind', 'Vercel'],
    href: 'https://www.nouvintage.com/',
    icon: <TrendingUp size={20} />,
    color: 'from-accent-alt to-accent',
  },
]

export default function CaseStudy() {
  const [activeId, setActiveId] = useState<string | null>(null)

  const activeVenture = ventures.find((v) => v.id === activeId)
  const activeIndex = ventures.findIndex((v) => v.id === activeId)

  const navigate = (dir: number) => {
    const next = activeIndex + dir
    if (next >= 0 && next < ventures.length) {
      setActiveId(ventures[next].id)
    }
  }

  return (
    <section id="case-studies" className="relative py-32 px-6 md:px-16 lg:px-24 bg-sand">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-muted mb-4 block">
            Selected Ventures
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-stone-950">
            Case Studies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-alt mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {ventures.map((venture, i) => (
            <motion.div
              key={venture.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="perspective-[1200px]"
              style={{ perspective: '1200px' }}
            >
              <motion.div
                animate={{ rotateY: activeId === venture.id ? 180 : 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full min-h-[420px] cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
                onClick={() => setActiveId(activeId === venture.id ? null : venture.id)}
              >
                {/* Front */}
                <div
                  className="absolute inset-0 border-2 border-concrete bg-white p-8 flex flex-col"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="flex items-center justify-between mb-8">
                    <span className="p-3 border border-concrete-dark/50 text-muted group-hover:border-stone-950 transition-colors">
                      {venture.icon}
                    </span>
                    <span className="text-xs font-mono tracking-widest text-concrete-dark">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <span
                    className={`inline-block text-xs font-mono uppercase tracking-wider bg-gradient-to-r ${venture.color} bg-clip-text text-transparent mb-3`}
                  >
                    Featured
                  </span>

                  <h3 className="text-2xl font-bold tracking-tight text-stone-950 mb-2">{venture.name}</h3>
                  <p className="text-sm font-mono text-accent mb-6">{venture.tagline}</p>

                  <div className="mt-auto flex items-center gap-2 text-xs font-mono text-muted">
                    <span className="w-5 h-[1px] bg-concrete-dark" />
                    Click to flip
                  </div>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 border-2 border-accent bg-stone-950 p-8 flex flex-col overflow-y-auto"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-accent mb-4">
                    Case Study
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-sand mb-4">{venture.name}</h3>
                  <p className="text-sm text-concrete-dark leading-relaxed mb-6">
                    {venture.description}
                  </p>

                  <div className="flex gap-6 mb-6">
                    {venture.metrics.map((m) => (
                      <div key={m.label}>
                        <span className="text-2xl font-bold bg-gradient-to-r from-accent-alt to-neon bg-clip-text text-transparent block">
                          {m.value}
                        </span>
                        <span className="text-[10px] font-mono text-concrete-dark">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {venture.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[10px] font-mono border border-concrete-dark/20 text-concrete-dark"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <a
                      href={venture.href}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-accent hover:text-accent-alt transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Project <ExternalLink size={12} />
                    </a>
                    <span className="text-[10px] font-mono text-concrete-dark/50">Tap to flip back</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {activeId && activeVenture && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className="mt-8 flex items-center justify-between px-4"
            >
              <button
                onClick={() => navigate(-1)}
                disabled={activeIndex === 0}
                className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted hover:text-stone-950 transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
              >
                <ArrowLeft size={14} /> Prev
              </button>
              <span className="text-xs font-mono text-muted">
                {String(activeIndex + 1).padStart(2, '0')} / {String(ventures.length).padStart(2, '0')}
              </span>
              <button
                onClick={() => navigate(1)}
                disabled={activeIndex === ventures.length - 1}
                className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted hover:text-stone-950 transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
              >
                Next <ArrowRight size={14} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
