'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FileDown, ArrowRight } from 'lucide-react'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-between bg-stone-950 text-sand overflow-hidden"
    >
      <motion.div style={{ y, opacity }} className="flex-1 flex flex-col justify-center px-6 py-24 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <span className="inline-block text-xs font-mono tracking-[0.3em] uppercase text-accent mb-6">
              Full-Stack Developer // Entrepreneur // Keynote Speaker
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold leading-[0.85] tracking-tighter text-sand mb-6"
          >
            RICKY
            <br />
            <span className="text-accent">RANSOM</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <p className="text-lg md:text-xl text-concrete-dark leading-relaxed mb-4">
              I build ventures where culture meets functional code.
              From zero to revenue — the <span className="text-accent-alt font-semibold">&ldquo;Road to $1M&rdquo;</span> is a mindset, not a milestone.
            </p>
            <p className="text-base text-concrete-dark/70 leading-relaxed mb-10">
              Full-stack architect, agency founder, and speaker who turns complex systems into
              scalable, high-conversion products.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="/ricky-ransom-dossier.pdf"
              download
              className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-stone-950 font-semibold text-sm uppercase tracking-widest hover:bg-accent/90 transition-all duration-300"
            >
              <FileDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
              Download Executive Dossier
            </a>
            <a
              href="#case-studies"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-concrete-dark text-sand font-semibold text-sm uppercase tracking-widest hover:border-accent hover:text-accent transition-all duration-300"
            >
              View Case Studies
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-16 bg-gradient-to-b from-accent to-transparent mx-auto mb-2" />
        <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-concrete-dark">
          Scroll
        </p>
      </motion.div>

      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-accent/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </section>
  )
}
