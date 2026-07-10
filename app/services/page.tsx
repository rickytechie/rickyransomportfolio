'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cpu, Briefcase, TrendingUp, GraduationCap, BookOpen, ExternalLink, Sparkles } from 'lucide-react'
import {
  allServices,
  growthCourses,
  categories,
  type PricingTier,
  type ServiceItem,
  type CourseItem,
} from '@/lib/services-data'

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu size={18} />,
  Briefcase: <Briefcase size={18} />,
  TrendingUp: <TrendingUp size={18} />,
  GraduationCap: <GraduationCap size={18} />,
  BookOpen: <BookOpen size={18} />,
}

const tierStyles: Record<string, { border: string; text: string; badge: string }> = {
  entry: {
    border: 'border-concrete-dark',
    text: 'text-concrete-dark',
    badge: 'border-concrete-dark text-concrete-dark',
  },
  mid: {
    border: 'border-stone-950',
    text: 'text-stone-950',
    badge: 'border-stone-950 text-stone-950 bg-white',
  },
  premium: {
    border: 'border-accent-alt',
    text: 'text-accent-alt',
    badge: 'border-accent-alt text-accent-alt',
  },
  expert: {
    border: 'border-accent-alt',
    text: 'text-accent-alt',
    badge: 'border-accent-alt text-accent-alt',
  },
  'next-level': {
    border: 'border-accent',
    text: 'text-accent',
    badge: 'border-accent text-accent',
  },
}

const courseTierConfig: Record<string, { label: string; glow: string }> = {
  entry: { label: 'Entry', glow: 'from-concrete-dark/20 to-transparent' },
  mid: { label: 'Mid', glow: 'from-stone-950/10 to-transparent' },
  expert: { label: 'Expert', glow: 'from-accent-alt/10 to-transparent' },
  'next-level': { label: 'Next Level', glow: 'from-accent/10 to-transparent' },
}

function PricingBadge({ tier, price }: { tier: PricingTier; price: string }) {
  const style = tierStyles[tier] || tierStyles.entry
  const isPremium = tier === 'premium' || tier === 'expert'
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest border ${style.badge}`}
    >
      {isPremium && <Sparkles size={12} className="text-accent-alt" />}
      {tier === 'next-level' && <Sparkles size={12} className="text-accent" />}
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
      transition={{ duration: 0.4, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }}
      className="group relative border-2 border-stone-950 bg-white p-6 sm:p-8 flex flex-col hover:border-accent-alt transition-all duration-300"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,240,255,0.03),transparent_70%)] pointer-events-none group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between mb-5">
          <span className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-concrete-dark">
            {iconMap[categories.find((c) => c.id === service.category)?.icon || 'Cpu']}
            {categories.find((c) => c.id === service.category)?.label}
          </span>
          <span className="text-[10px] font-mono text-concrete-dark/40">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-stone-950 mb-3 group-hover:text-accent-alt transition-colors duration-300">
          {service.title}
        </h3>

        <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
          {service.description}
        </p>

        <ul className="space-y-1.5 mb-6">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-xs text-concrete-dark">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-accent-alt shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between pt-5 border-t border-concrete mt-auto">
          <PricingBadge tier={service.pricingTier} price={service.price} />
          <span className="flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-stone-950 group-hover:text-accent-alt transition-colors">
            Learn More <ExternalLink size={12} />
          </span>
        </div>
      </div>
    </motion.div>
  )
}

function CourseCard({ course, index }: { course: CourseItem; index: number }) {
  const config = courseTierConfig[course.pricingTier] || courseTierConfig.entry
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative border-2 border-stone-950 bg-white overflow-hidden"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${config.glow} pointer-events-none`} />
      <div className="relative z-10 p-6 sm:p-8">
        <div className="flex items-center justify-between mb-4">
          <span className={`text-[10px] font-mono uppercase tracking-[0.3em] ${course.pricingTier === 'next-level' ? 'text-accent' : 'text-concrete-dark'}`}>
            {config.label} Course
          </span>
          <span className="text-[10px] font-mono text-concrete-dark/40">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <h3 className="text-xl font-bold tracking-tight text-stone-950 mb-3">
          {course.title}
        </h3>

        <p className="text-sm text-muted leading-relaxed mb-6">
          {course.description}
        </p>

        <div className="space-y-2 mb-6">
          {course.modules.map((module) => (
            <div key={module} className="flex items-start gap-2 text-xs text-concrete-dark">
              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${course.pricingTier === 'next-level' ? 'bg-accent' : 'bg-accent-alt'}`} />
              {module}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-5 border-t border-concrete">
          <PricingBadge tier={course.pricingTier as PricingTier} price={course.price} />
          <span className="flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-stone-950 group-hover:text-accent-alt transition-colors">
            Enroll Now <ExternalLink size={12} />
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
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect(null)}
        className={`px-4 py-2.5 text-[11px] font-mono uppercase tracking-widest border-2 transition-all duration-300 ${
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
          className={`inline-flex items-center gap-2 px-4 py-2.5 text-[11px] font-mono uppercase tracking-widest border-2 transition-all duration-300 ${
            active === cat.id
              ? 'border-accent-alt bg-accent-alt text-stone-950'
              : 'border-concrete-dark/30 text-concrete-dark hover:border-accent-alt hover:text-accent-alt'
          }`}
        >
          {iconMap[cat.icon]}
          {cat.label}
        </button>
      ))}
    </div>
  )
}

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const showCourses = activeCategory === 'courses'
  const showServices = activeCategory === null || activeCategory !== 'courses'

  const filteredServices = !activeCategory || activeCategory === 'courses'
    ? allServices
    : allServices.filter((s) => s.category === activeCategory)

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
              The RKYRNSM Service Engine
            </span>
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-sand mb-6">
              What I Build
            </h1>
            <p className="text-lg text-concrete-dark/70 leading-relaxed max-w-2xl">
              AI-powered automation, full-stack architecture, high-impact consulting, and
              next-level growth courses — each offering engineered to move the needle.
              Browse the catalog or filter by category.
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

          {showServices && (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                <AnimatePresence mode="popLayout">
                  {filteredServices.map((service, i) => (
                    <ServiceCard key={service.id} service={service} index={i} />
                  ))}
                </AnimatePresence>
              </div>
              {filteredServices.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-24"
                >
                  <p className="text-sm font-mono text-muted">No services match this category.</p>
                </motion.div>
              )}
            </>
          )}

          {showCourses && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-10">
                <span className="text-xs font-mono tracking-[0.3em] uppercase text-accent mb-3 block">
                  Mindset & Performance
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter text-stone-950">
                  Growth Mindset Courses
                </h2>
                <p className="text-sm text-muted mt-3 max-w-xl">
                  Structured programs designed to rewire your approach to success —
                  from foundational resilience to legacy architecture.
                </p>
                <div className="w-20 h-1 bg-gradient-to-r from-accent-alt to-accent mt-5" />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                {growthCourses.map((course, i) => (
                  <CourseCard key={course.id} course={course} index={i} />
                ))}
              </div>
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
              href="mailto:RICKYRANSOMCOMPANY@GMAIL.COM"
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
