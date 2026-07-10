'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowRight, Mic, Building, Lightbulb, Star } from 'lucide-react'

interface Slide {
  id: string
  icon: React.ReactNode
  iconBg: string
  title: string
  subtitle: string
  description: string
  topics: string[]
  highlight: string
}

const slides: Slide[] = [
  {
    id: 'keynote',
    icon: <Mic size={24} />,
    iconBg: 'from-accent to-accent/50',
    title: 'Keynote Speaking',
    subtitle: 'The "Road to $1M" Mindset',
    description:
      'From bootstrapped startup to multi-venture agency owner. I deliver high-energy keynotes on the intersection of engineering discipline, entrepreneurial grit, and cultural relevance.',
    topics: ['The Hunter Mentality', 'Zero-to-Revenue Engineering', 'Building in Public'],
    highlight: '50+ keynotes delivered across 3 continents',
  },
  {
    id: 'consulting',
    icon: <Building size={24} />,
    iconBg: 'from-accent-alt to-accent-alt/50',
    title: 'Technical Consulting',
    subtitle: 'Full-Stack Architecture & Strategy',
    description:
      'Hands-on consulting for teams that need to move faster. I help startups and agencies design scalable architectures, optimize conversion flows, and ship production-grade products.',
    topics: ['System Architecture', 'Codebase Audits', 'Growth Engineering'],
    highlight: '$2.4M+ in client revenue accelerated',
  },
  {
    id: 'workshop',
    icon: <Lightbulb size={24} />,
    iconBg: 'from-neon to-neon/50',
    title: 'Workshops & Masterclasses',
    subtitle: 'Engineering the Full Stack',
    description:
      'Intensive sessions covering modern full-stack development — from Next.js to deployment pipelines. Built for dev teams that want to level up their craft and output.',
    topics: ['Next.js & React Deep Dive', 'CI/CD & DevEx', 'Product Engineering'],
    highlight: '1,000+ engineers trained worldwide',
  },
]

export default function PitchDeck() {
  const [[current, direction], setCurrent] = useState([0, 0])

  const paginate = useCallback((dir: number) => {
    setCurrent(([prev]) => {
      const next = prev + dir
      if (next < 0) return [slides.length - 1, dir]
      if (next >= slides.length) return [0, dir]
      return [next, dir]
    })
  }, [])

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5500)
    return () => clearInterval(timer)
  }, [paginate])

  const slide = slides[Math.abs(current) % slides.length]

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 400 : -400, opacity: 0, rotate: dir > 0 ? 3 : -3 }),
    center: { x: 0, opacity: 1, rotate: 0 },
    exit: (dir: number) => ({ x: dir > 0 ? -400 : 400, opacity: 0, rotate: dir > 0 ? -3 : 3 }),
  }

  return (
    <section className="relative py-32 px-6 md:px-16 lg:px-24 bg-stone-950 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-alt/20 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-accent mb-4 block">
            Speaker & Consultancy
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-sand">
            Pitch Deck
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-alt to-neon mt-6" />
        </motion.div>

        <div className="relative">
          <div className="overflow-visible">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={slide.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="grid md:grid-cols-2 gap-12 md:gap-20 items-center"
              >
                <div>
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${slide.iconBg} text-stone-950 mb-8`}>
                    {slide.icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-sand mb-3">
                    {slide.title}
                  </h3>
                  <p className="text-lg font-mono text-accent-alt mb-6">
                    {slide.subtitle}
                  </p>
                  <p className="text-base text-concrete-dark/70 leading-relaxed mb-8">
                    {slide.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-mono text-accent mb-8">
                    <Star size={12} className="fill-accent" />
                    <span>{slide.highlight}</span>
                  </div>
                  <div className="flex flex-wrap gap-3 mb-10">
                    {slide.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-4 py-2 text-sm font-mono border border-concrete-dark/20 text-concrete-dark hover:border-accent-alt hover:text-accent-alt transition-colors duration-300"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-accent text-accent font-semibold text-sm uppercase tracking-widest hover:bg-accent hover:text-stone-950 transition-all duration-300"
                  >
                    Book Ricky
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                <div className="hidden md:flex relative items-center justify-center">
                  <div className="relative w-full aspect-[4/3] border border-concrete-dark/20 bg-stone-950/80 flex items-center justify-center overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-5"
                      style={{
                        backgroundImage: `
                          linear-gradient(rgba(0,240,255,0.3) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(0,240,255,0.3) 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px',
                      }}
                    />
                    <motion.div
                      key={slide.id + '-visual'}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="relative z-10 text-center p-12"
                    >
                      <span className="text-8xl font-bold text-accent-alt/20 block leading-none mb-4 font-mono">
                        {String(current + 1).padStart(2, '0')}
                      </span>
                      <span className="text-xs font-mono tracking-[0.3em] uppercase text-concrete-dark">
                        Slide {current + 1} of {slides.length}
                      </span>
                      <div className="w-16 h-[2px] bg-gradient-to-r from-accent-alt to-neon mx-auto mt-6" />
                      <p className="text-[10px] font-mono text-concrete-dark/40 mt-4 tracking-wider uppercase">
                        {slide.title}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between mt-10 pt-10 border-t border-concrete-dark/10">
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    const dir = i > current ? 1 : -1
                    setCurrent([i, dir])
                  }}
                  className={`h-[3px] transition-all duration-500 ${
                    i === current ? 'w-10 bg-accent-alt' : 'w-4 bg-concrete-dark/20 hover:bg-concrete-dark/40'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => paginate(-1)}
                className="w-11 h-11 flex items-center justify-center border border-concrete-dark/20 text-concrete-dark hover:border-accent-alt hover:text-accent-alt transition-all duration-300"
                aria-label="Previous slide"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => paginate(1)}
                className="w-11 h-11 flex items-center justify-center border border-concrete-dark/20 text-concrete-dark hover:border-accent-alt hover:text-accent-alt transition-all duration-300"
                aria-label="Next slide"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
