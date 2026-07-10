'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { bioSections, bioHighlights } from '@/lib/bio-content'

function SectionReveal({
  section,
  index,
}: {
  section: (typeof bioSections)[number]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="mb-24 md:mb-32 last:mb-0"
    >
      <div className="flex items-start gap-6 md:gap-12">
        <div className="hidden md:flex flex-col items-center shrink-0">
          <span className="text-[10px] font-mono tracking-[0.3em] text-accent-alt">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="w-px flex-1 bg-gradient-to-b from-accent-alt/30 to-transparent mt-3" />
        </div>

        <div className="flex-1 max-w-3xl">
          <motion.span
            className="text-xs font-mono tracking-[0.3em] uppercase text-accent-alt mb-4 block"
          >
            Chapter {String(index + 1).padStart(2, '0')}
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-stone-950 mb-8 leading-[0.92]">
            {section.title}
          </h2>

          <div className="space-y-5">
            {section.content.map((paragraph, pIdx) => (
              <motion.p
                key={pIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + pIdx * 0.1 }}
                className="text-base md:text-lg text-muted leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {section.emphasis && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 pl-6 border-l-2 border-accent-alt"
            >
              <p className="text-base md:text-lg font-mono text-stone-950 italic">
                {section.emphasis}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function BioPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <>
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex flex-col justify-center px-6 py-32 md:px-16 lg:px-24 bg-stone-950 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,240,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,240,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,240,255,0.06),transparent_70%)] pointer-events-none" />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.3em] uppercase text-accent-alt mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-alt cursor-blink" />
              Bio & Vision
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-bold leading-[0.82] tracking-tighter text-sand mb-8"
          >
            <span className="block">The Story</span>
            <span className="block text-accent-alt">Behind the Code</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-concrete-dark/70 leading-relaxed max-w-2xl"
          >
            From Hirschsprung survivor to Weill Cornell resident, from linguistic polyglot to full-stack
            architect — every line of code I write carries the weight of a body that refused to break
            and a mind that refused to stop learning.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-16 bg-gradient-to-b from-accent-alt to-transparent mx-auto mb-2" />
          <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-concrete-dark">Scroll</p>
        </motion.div>
      </section>

      <section className="relative py-24 px-6 md:px-16 lg:px-24 bg-sand">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-6 md:gap-12 mb-24 md:mb-32">
            {bioHighlights.map((item) => (
              <div key={item.label} className="flex flex-col">
                <span className="text-4xl md:text-5xl font-bold tracking-tighter text-stone-950">
                  {item.value}
                </span>
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-concrete-dark mt-1">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {bioSections.map((section, i) => (
            <SectionReveal key={section.id} section={section} index={i} />
          ))}
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
              The Mission Continues
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter text-sand mb-6">
              Let&rsquo;s build something that matters.
            </h2>
            <p className="text-lg text-concrete-dark/70 leading-relaxed mb-10 max-w-xl mx-auto">
              Every project is an opportunity to turn obstacle into architecture, adversity into algorithm,
              story into system. The Road to Success is built one line of code at a time.
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
