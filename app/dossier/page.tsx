'use client'

import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Target, TrendingUp, Cpu, Eye } from 'lucide-react'
import { dossierSlides } from '@/lib/dossier-data'

const iconMap: Record<string, React.ReactNode> = {
  'executive-summary': <Target size={24} />,
  'scaling-success': <TrendingUp size={24} />,
  'technical-stack': <Cpu size={24} />,
  'vision-synthesis': <Eye size={24} />,
}

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 500 : -500, opacity: 0, rotateY: dir > 0 ? 5 : -5 }),
  center: { x: 0, opacity: 1, rotateY: 0 },
  exit: (dir: number) => ({ x: dir > 0 ? -500 : 500, opacity: 0, rotateY: dir > 0 ? -5 : 5 }),
}

export default function DossierPage() {
  const [[current, direction], setCurrent] = useState([0, 0])
  const slide = dossierSlides[Math.abs(current) % dossierSlides.length]

  const paginate = useCallback((dir: number) => {
    setCurrent(([prev]) => {
      const next = prev + dir
      if (next < 0) return [dossierSlides.length - 1, dir]
      if (next >= dossierSlides.length) return [0, dir]
      return [next, dir]
    })
  }, [])

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 7000)
    return () => clearInterval(timer)
  }, [paginate])

  return (
    <div className="min-h-screen bg-stone-950">
      <section className="relative min-h-screen flex flex-col justify-center px-6 py-32 md:px-16 lg:px-24 bg-stone-950 overflow-hidden">
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
            className="mb-12"
          >
            <span className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.3em] uppercase text-accent-alt mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-alt cursor-blink" />
              Interactive Pitch
            </span>
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-sand mb-6">
              The Dossier
            </h1>
            <p className="text-lg text-concrete-dark/70 leading-relaxed max-w-2xl">
              An executive-level synthesis of capability, track record, and vision.
              Navigate through the slides below.
            </p>
          </motion.div>

          <div className="flex items-center gap-3 mb-8">
            {dossierSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const dir = i > current ? 1 : -1
                  setCurrent([i, dir])
                }}
                className={`h-[3px] transition-all duration-500 ${
                  i === current ? 'w-12 bg-accent-alt' : 'w-6 bg-concrete-dark/20 hover:bg-concrete-dark/40'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
            <span className="ml-auto text-[10px] font-mono tracking-[0.3em] text-concrete-dark">
              {String(current + 1).padStart(2, '0')} / {String(dossierSlides.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-32 md:px-16 lg:px-24 -mt-32">
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={slide.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ perspective: '1200px' }}
            >
              <div className="border-2 border-stone-800 bg-stone-950/80 backdrop-blur-sm overflow-hidden">
                <div className="grid lg:grid-cols-5 gap-0">
                  <div className="lg:col-span-3 p-8 md:p-12 lg:p-16">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="flex items-center justify-center w-12 h-12 border border-accent-alt/30 text-accent-alt">
                        {iconMap[slide.id]}
                      </span>
                      <div>
                        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-accent-alt block">
                          Slide {String(current + 1).padStart(2, '0')}
                        </span>
                        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-concrete-dark block">
                          {slide.subtitle}
                        </span>
                      </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-sand mb-8 leading-[0.95]">
                      {slide.title}
                    </h2>

                    <div className="space-y-4 mb-8">
                      {slide.content.map((paragraph, i) => (
                        <motion.p
                          key={i}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                          className="text-sm md:text-base text-concrete-dark/80 leading-relaxed"
                        >
                          {paragraph}
                        </motion.p>
                      ))}
                    </div>

                    {slide.tags && (
                      <div className="flex flex-wrap gap-2">
                        {slide.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-[10px] font-mono border border-concrete-dark/20 text-concrete-dark"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="lg:col-span-2 border-t lg:border-t-0 lg:border-l border-stone-800 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-stone-950/50">
                    {slide.competencies && (
                      <div>
                        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-accent mb-6 block">
                          Core Competencies
                        </span>
                        <div className="space-y-3">
                          {slide.competencies.map((comp) => (
                            <div key={comp} className="flex items-center gap-3">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent-alt shrink-0" />
                              <span className="text-sm font-mono text-sand">{comp}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {slide.metrics && (
                      <div className="mt-auto pt-8">
                        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-accent mb-6 block">
                          Key Metrics
                        </span>
                        <div className="grid grid-cols-2 gap-6">
                          {slide.metrics.map((m) => (
                            <div key={m.label}>
                              <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-accent-alt to-neon bg-clip-text text-transparent block leading-none">
                                {m.value}
                              </span>
                              <span className="text-[10px] font-mono text-concrete-dark mt-1 block">
                                {m.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-8">
                <button
                  onClick={() => paginate(-1)}
                  className="flex items-center gap-2 px-6 py-3 border border-concrete-dark/20 text-concrete-dark hover:border-accent-alt hover:text-accent-alt transition-all duration-300 text-xs font-mono uppercase tracking-widest"
                >
                  <ChevronLeft size={14} /> Previous
                </button>
                <span className="text-[10px] font-mono text-concrete-dark/40">
                  Slide {current + 1} of {dossierSlides.length}
                </span>
                <button
                  onClick={() => paginate(1)}
                  className="flex items-center gap-2 px-6 py-3 border border-concrete-dark/20 text-concrete-dark hover:border-accent-alt hover:text-accent-alt transition-all duration-300 text-xs font-mono uppercase tracking-widest"
                >
                  Next <ChevronRight size={14} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
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
              Ready to work together?
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter text-sand mb-6">
              Let&rsquo;s build your next chapter.
            </h2>
            <p className="text-lg text-concrete-dark/70 leading-relaxed mb-10 max-w-xl mx-auto">
              Whether you need a technical architect, a fractional CTO, or a keynote that
              transforms how your team thinks about possibility — the conversation starts here.
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
    </div>
  )
}
