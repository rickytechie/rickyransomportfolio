'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowRight, Mic, Building, Lightbulb } from 'lucide-react'

interface Slide {
  id: string
  icon: React.ReactNode
  title: string
  subtitle: string
  description: string
  topics: string[]
}

const slides: Slide[] = [
  {
    id: 'keynote',
    icon: <Mic size={24} />,
    title: 'Keynote Speaking',
    subtitle: 'The &ldquo;Road to $1M&rdquo; Mindset',
    description:
      'From bootstrapped startup to multi-venture agency owner. I deliver high-energy keynotes on the intersection of engineering discipline, entrepreneurial grit, and cultural relevance.',
    topics: ['The Hunter Mentality', 'Zero-to-Revenue Engineering', 'Building in Public'],
  },
  {
    id: 'consulting',
    icon: <Building size={24} />,
    title: 'Technical Consulting',
    subtitle: 'Full-Stack Architecture & Strategy',
    description:
      'Hands-on consulting for teams that need to move faster. I help startups and agencies design scalable architectures, optimize conversion flows, and ship production-grade products.',
    topics: ['System Architecture', 'Codebase Audits', 'Growth Engineering'],
  },
  {
    id: 'workshop',
    icon: <Lightbulb size={24} />,
    title: 'Workshops & Masterclasses',
    subtitle: 'Engineering the Full Stack',
    description:
      'Intensive sessions covering modern full-stack development — from Next.js to deployment pipelines. Built for dev teams that want to level up their craft and output.',
    topics: ['Next.js & React Deep Dive', 'CI/CD & DevEx', 'Product Engineering'],
  },
]

export default function PitchDeck() {
  const [[current, direction], setCurrent] = useState([0, 0])

  const paginate = useCallback(
    (dir: number) => {
      setCurrent(([prev]) => {
        const next = prev + dir
        if (next < 0) return [slides.length - 1, dir]
        if (next >= slides.length) return [0, dir]
        return [next, dir]
      })
    },
    []
  )

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 6000)
    return () => clearInterval(timer)
  }, [paginate])

  const slide = slides[Math.abs(current) % slides.length]

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  }

  return (
    <section className="relative py-32 px-6 md:px-16 lg:px-24 bg-stone-950 overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-accent/5 to-transparent pointer-events-none" />

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
          <div className="w-24 h-1 bg-accent-alt mt-6" />
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={slide.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="grid md:grid-cols-2 gap-12 md:gap-20 items-center"
              >
                <div>
                  <span className="inline-flex items-center justify-center w-14 h-14 border border-accent text-accent mb-8">
                    {slide.icon}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-sand mb-3">
                    {slide.title}
                  </h3>
                  <p
                    className="text-lg font-mono text-accent-alt mb-6"
                    dangerouslySetInnerHTML={{ __html: slide.subtitle }}
                  />
                  <p className="text-base text-concrete-dark/70 leading-relaxed mb-8">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-10">
                    {slide.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-4 py-2 text-sm font-mono border border-concrete-dark/20 text-concrete-dark"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-8 py-4 border-2 border-accent text-accent font-semibold text-sm uppercase tracking-widest hover:bg-accent hover:text-stone-950 transition-all duration-300"
                  >
                    Book Ricky
                    <ArrowRight size={16} />
                  </a>
                </div>

                <div className="hidden md:block relative">
                  <div className="aspect-[4/3] border border-concrete-dark/20 bg-stone-950/50 flex items-center justify-center">
                    <div className="text-center p-12">
                      <span className="text-8xl font-bold text-accent/20 block leading-none mb-4">
                        {String(current + 1).padStart(2, '0')}
                      </span>
                      <span className="text-xs font-mono tracking-[0.3em] uppercase text-concrete-dark">
                        Slide {current + 1} of {slides.length}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between mt-10 pt-10 border-t border-concrete-dark/20">
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    const dir = i > current ? 1 : -1
                    setCurrent([i, dir])
                  }}
                  className={`w-2 h-2 transition-all duration-300 ${
                    i === current ? 'w-8 bg-accent' : 'bg-concrete-dark/30 hover:bg-concrete-dark/50'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => paginate(-1)}
                className="w-12 h-12 flex items-center justify-center border border-concrete-dark/30 text-concrete-dark hover:border-accent hover:text-accent transition-all duration-300"
                aria-label="Previous slide"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => paginate(1)}
                className="w-12 h-12 flex items-center justify-center border border-concrete-dark/30 text-concrete-dark hover:border-accent hover:text-accent transition-all duration-300"
                aria-label="Next slide"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
