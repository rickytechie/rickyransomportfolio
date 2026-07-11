'use client'

import { use } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Check, Mail, Clock, Layers, Cpu, Briefcase, TrendingUp, Sparkles, Star } from 'lucide-react'
import { featuredServices, categories } from '@/lib/services-data'

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu size={18} />,
  Briefcase: <Briefcase size={18} />,
  TrendingUp: <TrendingUp size={18} />,
}

const tierStyles: Record<string, { badge: string; border: string; accent: string }> = {
  moderate: {
    badge: 'border-concrete-dark text-concrete-dark',
    border: 'border-concrete-dark/20',
    accent: 'text-concrete-dark',
  },
  premium: {
    badge: 'border-accent-alt text-accent-alt',
    border: 'border-accent-alt/30',
    accent: 'text-accent-alt',
  },
  executive: {
    badge: 'border-accent text-accent',
    border: 'border-accent/30',
    accent: 'text-accent',
  },
}

export default function ServiceDetailPage({ params }: { params: Promise<{ 'service-id': string }> }) {
  const { 'service-id': slug } = use(params)
  const service = featuredServices.find((s) => s.slug === slug || s.id === slug)

  if (!service) {
    return (
      <div className="min-h-screen bg-sand flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tighter text-stone-950 mb-4">Service Not Found</h1>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-accent-alt hover:text-stone-950 transition-colors"
          >
            <ArrowLeft size={14} /> Back to Services
          </Link>
        </div>
      </div>
    )
  }

  const style = tierStyles[service.pricingTier] || tierStyles.moderate
  const category = categories.find((c) => c.id === service.category)

  return (
    <>
      <section className="relative min-h-[50vh] flex flex-col justify-end px-6 pt-32 pb-16 md:px-16 lg:px-24 bg-stone-950 overflow-hidden">
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
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.3em] text-concrete-dark hover:text-accent-alt transition-colors mb-8"
            >
              <ArrowLeft size={14} /> All Services
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-concrete-dark/70">
                {iconMap[category?.icon || 'Cpu']}
                {category?.label}
              </span>
              <span className="w-px h-3 bg-concrete-dark/30" />
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-mono uppercase tracking-widest border ${style.badge}`}>
                {(service.pricingTier === 'premium' || service.pricingTier === 'executive') && (
                  <Sparkles size={10} className={service.pricingTier === 'executive' ? 'text-accent' : 'text-accent-alt'} />
                )}
                {service.pricingTier === 'executive' && <Star size={10} className="fill-accent text-accent" />}
                {service.pricingTier} tier
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-sand mb-4 leading-[0.92]">
              {service.title}
            </h1>
            <p className="text-lg text-concrete-dark/70 leading-relaxed max-w-2xl">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 px-6 md:px-16 lg:px-24 bg-sand">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Layers size={18} className="text-accent-alt" />
                  <h2 className="text-2xl font-bold tracking-tight text-stone-950">Project Scope</h2>
                </div>
                <div className="space-y-3">
                  {service.scope.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                      className="flex items-start gap-3 p-4 border border-concrete/60 bg-white"
                    >
                      <span className={`mt-0.5 flex items-center justify-center w-5 h-5 shrink-0 ${style.accent}`}>
                        <Check size={14} />
                      </span>
                      <span className="text-sm text-muted leading-relaxed">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-16"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Check size={18} className="text-accent" />
                  <h2 className="text-2xl font-bold tracking-tight text-stone-950">Key Deliverables</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-4 border border-concrete/60 bg-white"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span className="text-sm text-muted">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-16"
              >
                <h3 className="text-lg font-bold tracking-tight text-stone-950 mb-4">Included Capabilities</h3>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1.5 text-xs font-mono border border-concrete-dark/20 text-concrete-dark"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="sticky top-28"
              >
                <div className={`border-2 ${style.border} bg-white p-8`}>
                  <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-concrete-dark block mb-4">
                    Pricing Tier
                  </span>
                  <div className="mb-6">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest border ${style.badge}`}>
                      {(service.pricingTier === 'premium' || service.pricingTier === 'executive') && (
                        <Sparkles size={12} className={service.pricingTier === 'executive' ? 'text-accent' : 'text-accent-alt'} />
                      )}
                      {service.price}
                    </span>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <Clock size={14} className="text-concrete-dark shrink-0" />
                      <div>
                        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-concrete-dark block">Timeline</span>
                        <span className="text-sm text-stone-950">{service.timeline}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Layers size={14} className="text-concrete-dark shrink-0" />
                      <div>
                        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-concrete-dark block">Engagement</span>
                        <span className="text-sm text-stone-950">{service.engagementType}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-concrete/60 pt-6 mb-6">
                    <p className="text-xs text-muted leading-relaxed mb-4">
                      {service.pricingTier === 'executive'
                        ? 'Executive engagements are structured as semi-annual flat fees. Pricing is scoped to your organization\'s requirements during the discovery phase.'
                        : `Hourly rate billed in increments. Minimum engagement of 10 hours. Volume discounts available for ongoing partnerships.`}
                    </p>
                  </div>

                  <a
                    href="mailto:RICKYRANSOMCOMPANY@GMAIL.COM"
                    className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-stone-950 text-sand font-semibold text-sm uppercase tracking-widest hover:bg-stone-800 transition-colors duration-300"
                  >
                    <Mail size={16} />
                    Inquire
                  </a>

                  <p className="text-[10px] font-mono text-concrete-dark/50 text-center mt-3">
                    RICKYRANSOMCOMPANY@GMAIL.COM
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 px-6 md:px-16 lg:px-24 bg-stone-950 border-t border-concrete-dark/10">
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
              Ready to start?
            </h2>
            <p className="text-lg text-concrete-dark/70 leading-relaxed mb-10 max-w-xl mx-auto">
              Every engagement begins with a conversation. Let&rsquo;s architect a solution that fits your vision.
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
