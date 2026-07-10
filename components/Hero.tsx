'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowRight, Download, Shield, CheckCircle } from 'lucide-react'

const terminalLines = [
  { text: 'SECURE_CHANNEL_ESTABLISHED', delay: 400 },
  { text: 'HANDSHAKE_PROTOCOL_v3.2.1_INITIALIZED', delay: 600 },
  { text: 'AUTHENTICATION: RKYRNSM_MASTER_KEY_ACCEPTED', delay: 800 },
  { text: 'RETRIEVING: /secure/dossier/executive_summary.pdf', delay: 700 },
  { text: 'DECRYPTING_PAYLOAD...', delay: 1000 },
  { text: 'DOSSIER_READY', delay: 500 },
]

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const [showTerminal, setShowTerminal] = useState(false)
  const [visibleLines, setVisibleLines] = useState<number[]>([])
  const [progress, setProgress] = useState(0)
  const [transferComplete, setTransferComplete] = useState(false)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([])

  const runTerminal = useCallback(() => {
    timersRef.current.forEach(clearTimeout)
    timersRef.current = []

    let lineIndex = 0

    const showNextLine = () => {
      if (lineIndex < terminalLines.length) {
        const line = terminalLines[lineIndex]
        setVisibleLines((prev) => [...prev, lineIndex])
        lineIndex++
        const timer = setTimeout(showNextLine, line.delay)
        timersRef.current.push(timer)
      }
    }

    const timer = setTimeout(showNextLine, 500)
    timersRef.current.push(timer)

    const progressTimer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(progressTimer)
          setTimeout(() => setTransferComplete(true), 600)
          return 100
        }
        return p + 2
      })
    }, 80)

    timersRef.current.push(progressTimer as unknown as ReturnType<typeof setTimeout>)
  }, [])

  useEffect(() => {
    if (!showTerminal) return
    runTerminal()
    return () => {
      timersRef.current.forEach(clearTimeout)
      timersRef.current = []
    }
  }, [showTerminal, runTerminal])

  useEffect(() => {
    if (!transferComplete) return
    const timer = setTimeout(() => {
      const link = document.createElement('a')
      link.href = '/ricky-ransom-dossier.pdf'
      link.download = 'Ricky_Ransom_Executive_Dossier.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      setTimeout(() => {
        setShowTerminal(false)
        setVisibleLines([])
        setProgress(0)
        setTransferComplete(false)
      }, 1200)
    }, 800)
    return () => clearTimeout(timer)
  }, [transferComplete])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-between bg-stone-950 text-sand overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,45,120,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,240,255,0.05),transparent_70%)] pointer-events-none" />

      <motion.div style={{ y, opacity }} className="flex-1 flex flex-col justify-center px-6 py-24 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.3em] uppercase text-accent-alt mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-alt cursor-blink" />
              Full-Stack Developer // Entrepreneur // Keynote Speaker
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold leading-[0.82] tracking-tighter text-sand mb-6"
          >
            <span className="block">RICKY</span>
            <span className="block text-accent relative">
              RANSOM
              <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-accent via-accent-alt to-transparent" />
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mt-8"
          >
            <p className="text-lg md:text-xl text-concrete-dark leading-relaxed mb-4">
              Bridging the gap between creativity, community, and code. As a full-stack tech architect
              and success consultant, I empower teams, startups, and entrepreneurs to reach their next
              level of peak performance.
            </p>
            <p className="text-base text-concrete-dark/70 leading-relaxed mb-12">
              Through a curated medley of systems, AI-driven architectures, and high-impact resources,
              I help the next generation of thinkers and doers build, scale, and sustain success.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={runTerminal}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-accent text-stone-950 font-semibold text-sm uppercase tracking-widest hover:bg-accent/90 transition-all duration-300 overflow-hidden glow-accent"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
              Download Executive Dossier
            </button>
            <a
              href="#case-studies"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-concrete-dark text-sand font-semibold text-sm uppercase tracking-widest hover:border-accent-alt hover:text-accent-alt transition-all duration-300"
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
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-16 bg-gradient-to-b from-accent-alt to-transparent mx-auto mb-2" />
        <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-concrete-dark">Scroll</p>
      </motion.div>

      <AnimatePresence>
        {showTerminal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/80 backdrop-blur-sm"
            onClick={() => {
              if (transferComplete) {
                setShowTerminal(false)
                setVisibleLines([])
                setProgress(0)
                setTransferComplete(false)
              }
            }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg mx-4 border border-concrete-dark/30 bg-stone-950 shadow-2xl terminal-scanline"
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b border-concrete-dark/20 bg-stone-900">
                <span className="w-3 h-3 rounded-full bg-accent" />
                <span className="w-3 h-3 rounded-full bg-concrete-dark/50" />
                <span className="w-3 h-3 rounded-full bg-concrete-dark/30" />
                <span className="ml-3 text-[10px] font-mono tracking-wider text-concrete-dark uppercase">Secure Transfer Terminal</span>
              </div>

              <div className="p-6 font-mono text-sm">
                <div className="flex items-center gap-2 text-accent-alt text-xs mb-4">
                  <Shield size={14} />
                  <span>ENCRYPTED_CHANNEL_ACTIVE</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-neon cursor-blink ml-auto" />
                </div>

                <div className="space-y-1.5 mb-4">
                  {terminalLines.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={
                        visibleLines.includes(i)
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: -10 }
                      }
                      transition={{ duration: 0.2 }}
                      className={`flex items-start gap-2 ${
                        i === terminalLines.length - 1 && visibleLines.includes(i)
                          ? 'text-neon'
                          : 'text-concrete-dark'
                      }`}
                    >
                      <span className="text-muted shrink-0">{'>'}</span>
                      <span>{line.text}</span>
                      {i === visibleLines.length - 1 && i < terminalLines.length && (
                        <span className="w-1.5 h-4 bg-accent-alt cursor-blink" />
                      )}
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-concrete-dark">TRANSFERRING_DOSSIER</span>
                    <span className={progress >= 100 ? 'text-neon' : 'text-accent-alt'}>
                      {progress}%
                    </span>
                  </div>
                  <div className="h-2 border border-concrete-dark/30 bg-stone-900 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-accent-alt to-neon"
                      initial={{ width: '0%' }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                </div>

                {transferComplete && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 mt-4 text-neon"
                  >
                    <CheckCircle size={16} />
                    <span>TRANSFER_COMPLETE_DOSSIER_READY</span>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
