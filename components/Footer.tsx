export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-16 lg:px-24 bg-stone-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-lg font-bold tracking-tight text-sand">RKYRNSM</span>
          <p className="text-[10px] font-mono text-concrete-dark mt-1 tracking-wider">
            Full-Stack Developer // Entrepreneur // Keynote Speaker
          </p>
        </div>
        <div className="flex items-center gap-8">
          <a
            href="https://github.com/rickytechie"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-mono tracking-[0.3em] uppercase text-concrete-dark hover:text-accent-alt transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ricky-ransom-515708280/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-mono tracking-[0.3em] uppercase text-concrete-dark hover:text-accent-alt transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:RICKYRANSOMCOMPANY@GMAIL.COM"
            className="text-[10px] font-mono tracking-[0.3em] uppercase text-concrete-dark hover:text-accent-alt transition-colors"
          >
            Email
          </a>
        </div>
        <p className="text-[10px] font-mono text-concrete-dark/40">
          &copy; {new Date().getFullYear()} Ricky Ransom. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
