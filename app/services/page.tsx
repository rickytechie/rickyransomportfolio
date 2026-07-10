'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cpu, TrendingUp, GraduationCap, ExternalLink } from 'lucide-react'
import { services, categories, pricingDisplay, type PricingTier, type ServiceItem } from '@/lib/services-data'

const categoryIcons: Record<string, React.ReactNode> = {
  tech: <Cpu size={18} />,
  consulting: <TrendingUp size={18} />,
  education: <GraduationCap size={18} />,
}

function PricingBadge({ tier }: { tier: PricingTier }) {
  const price = pricingDisplay[tier]
  if (tier === 'high') {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest border border-accent-alt text-accent-alt">
        <span className="w-1.5 h-1.5 rounded-full bg-accent-alt cursor-blink" />
        {price}
      </span>
    )
  }
  if (tier === 'mid') {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest border border-stone-950 text-stone-950 bg-white">
        {price}
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest border border-concrete-dark text-concrete-dark">
      {price}
    </span>
  )
}

function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group relative border-2 border-stone-950 bg-white p-8 flex flex-col hover:border-accent-alt transition-colors duration-300"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,240,255,0.03),transparent_70%)] pointer-events-none" />
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between mb-6">
          <span className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-concrete-dark">
            {categoryIcons[service.category]}
            {categories.find((c) => c.id === service.category)?.label}
          </span>
          <span className="text-[10px] font-mono text-concrete-dark/40">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <h3 className="text-xl font-bold tracking-tight text-stone-950 mb-3 group-hover:text-accent-alt transition-colors duration-300">
          {service.title}
        </h3>

        <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
          {service.description}
        </p>

        <ul className="space-y-2 mb-8">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-xs text-concrete-dark">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-accent-alt shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between pt-6 border-t border-concrete">
          <PricingBadge tier={service.pricingTier} />
          <span className="flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-stone-950 group-hover:text-accent-alt transition-colors">
            Learn More <ExternalLink size={12} />
          </span>
        </div>
      </div>
    </motion.div>
  )
}

function CategoryFilter({
  active,
  onSelect,
}: {
  active: string | null
  onSelect: (id: string | null) => void
}) {
  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={() => onSelect(null)}
        className={`px-5 py-3 text-xs font-mono uppercase tracking-widest border-2 transition-all duration-300 ${
          active === null
            ? 'border-stone-950 bg-stone-950 text-sand'
            : 'border-concrete-dark/30 text-concrete-dark hover:border-stone-950 hover:text-stone-950'
        }`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={`inline-flex items-center gap-2 px-5 py-3 text-xs font-mono uppercase tracking-widest border-2 transition-all duration-300 ${
            active === cat.id
              ? 'border-accent-alt bg-accent-alt text-stone-950'
              : 'border-concrete-dark/30 text-concrete-dark hover:border-accent-alt hover:text-accent-alt'
          }`}
        >
          {categoryIcons[cat.id]}
          {cat.label}
        </button>
      ))}
    </div>
  )
}

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filtered = activeCategory
    ? services.filter((s) => s.category === activeCategory)
    : services

  return (
    <>
      <section className="relative min-h-[60vh] flex flex-col justify-center px-6 py-32 md:px-16 lg:px-24 bg-stone-950 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,240,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,240,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent-alt/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.3em] uppercase text-accent-alt mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-alt cursor-blink" />
              Service Catalog
            </span>
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-sand mb-6">
              What I Build
            </h1>
            <p className="text-lg text-concrete-dark/70 leading-relaxed max-w-2xl">
              From AI-powered automation to high-impact keynotes — each service is engineered
              to move the needle. Pick a lane, or take them all.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-12 bg-gradient-to-b from-accent-alt to-transparent mx-auto mb-2" />
          <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-concrete-dark">Services</p>
        </motion.div>
      </section>

      <section className="relative py-24 px-6 md:px-16 lg:px-24 bg-sand">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <CategoryFilter active={activeCategory} onSelect={setActiveCategory} />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((service, i) => (
                <ServiceCard key={service.id} service={service} index={i} />
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <p className="text-sm font-mono text-muted">No services match this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      <section className="relative py-32 px-6 md:px-16 lg:px-24 bg-stone-950 border-t border-concrete-dark/10">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,45,120,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,45,120,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-accent mb-4 block">
              Let&rsquo;s Collaborate
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter text-sand mb-6">
              Not sure where to start?
            </h2>
            <p className="text-lg text-concrete-dark/70 leading-relaxed mb-10 max-w-xl mx-auto">
              Every engagement starts with a conversation. Tell me about your project and I&rsquo;ll
              architect a solution that fits.
            </p>
            <a
              href="mailto:ricky@rickyransom.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-alt text-stone-950 font-semibold text-sm uppercase tracking-widest hover:bg-accent-alt/90 transition-all duration-300"
            >
              Start the Conversation
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
