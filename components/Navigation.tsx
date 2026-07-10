'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/dossier', label: 'Dossier' },
  { href: '/bio', label: 'Bio & Vision' },
  { href: null, label: 'CV', isPdf: true },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-stone-950/90 backdrop-blur-md border-b border-concrete-dark/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="text-base font-bold tracking-tight text-sand hover:text-accent-alt transition-colors"
          >
            RKYRNSM
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) =>
              link.isPdf ? (
                <button
                  key={link.label}
                  onClick={() => window.open('/RICKY RANSOM RESUME.pdf', '_blank')}
                  className="px-4 py-2 text-[11px] font-mono uppercase tracking-[0.3em] text-concrete-dark hover:text-accent-alt transition-colors"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className={`px-4 py-2 text-[11px] font-mono uppercase tracking-[0.3em] transition-colors ${
                    pathname === link.href
                      ? 'text-accent-alt'
                      : 'text-concrete-dark hover:text-accent-alt'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 text-sand hover:text-accent-alt transition-colors"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-concrete-dark/10 bg-stone-950/95 backdrop-blur-md">
          <div className="px-6 py-6 space-y-1">
            {links.map((link) =>
              link.isPdf ? (
                <button
                  key={link.label}
                  onClick={() => {
                    window.open('/RICKY RANSOM RESUME.pdf', '_blank')
                    closeMenu()
                  }}
                  className="block w-full text-left px-4 py-3 text-sm font-mono uppercase tracking-[0.3em] text-concrete-dark hover:text-accent-alt transition-colors"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  onClick={closeMenu}
                  className={`block px-4 py-3 text-sm font-mono uppercase tracking-[0.3em] transition-colors ${
                    pathname === link.href
                      ? 'text-accent-alt'
                      : 'text-concrete-dark hover:text-accent-alt'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  )
}
