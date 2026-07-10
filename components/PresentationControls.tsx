'use client'

import { Play, Pause, Square, ChevronLeft, ChevronRight } from 'lucide-react'

interface PresentationControlsProps {
  isPlaying: boolean
  currentSlide: number
  totalSlides: number
  onPlay: () => void
  onPause: () => void
  onStop: () => void
  onBack: () => void
  onForward: () => void
  onGoTo: (index: number) => void
}

export default function PresentationControls({
  isPlaying,
  currentSlide,
  totalSlides,
  onPlay,
  onPause,
  onStop,
  onBack,
  onForward,
  onGoTo,
}: PresentationControlsProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <button
          onClick={isPlaying ? onPause : onPlay}
          className={`flex items-center justify-center w-10 h-10 border transition-all duration-300 ${
            isPlaying
              ? 'border-accent-alt bg-accent-alt text-stone-950'
              : 'border-concrete-dark/30 text-concrete-dark hover:border-accent-alt hover:text-accent-alt'
          }`}
          aria-label={isPlaying ? 'Pause presentation' : 'Play presentation'}
        >
          {isPlaying ? <Pause size={14} /> : <Play size={14} />}
        </button>

        <button
          onClick={onStop}
          className="flex items-center justify-center w-10 h-10 border border-concrete-dark/30 text-concrete-dark hover:border-accent hover:text-accent transition-all duration-300"
          aria-label="Stop presentation"
        >
          <Square size={14} />
        </button>

        <div className="w-px h-6 bg-concrete-dark/20 mx-1" />

        <button
          onClick={onBack}
          className="flex items-center justify-center w-10 h-10 border border-concrete-dark/30 text-concrete-dark hover:border-accent-alt hover:text-accent-alt transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft size={14} />
        </button>

        <button
          onClick={onForward}
          className="flex items-center justify-center w-10 h-10 border border-concrete-dark/30 text-concrete-dark hover:border-accent-alt hover:text-accent-alt transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight size={14} />
        </button>

        <span className="ml-auto text-[10px] font-mono tracking-[0.3em] text-concrete-dark">
          {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
        </span>
      </div>

      <div className="flex items-center gap-1.5">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => onGoTo(i)}
            className={`h-[3px] transition-all duration-500 ${
              i === currentSlide
                ? 'w-10 bg-accent-alt'
                : 'w-4 bg-concrete-dark/20 hover:bg-concrete-dark/40'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
