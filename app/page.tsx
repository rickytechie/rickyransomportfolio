import Hero from "@/components/Hero";
import CaseStudy from "@/components/CaseStudy";
import PitchDeck from "@/components/PitchDeck";

export default function Home() {
  return (
    <>
      <Hero />
      <CaseStudy />
      <PitchDeck />

      <footer className="py-16 px-6 md:px-16 lg:px-24 bg-stone-950 border-t border-concrete-dark/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-lg font-bold tracking-tight text-sand">RKYRNSM</span>
            <p className="text-xs font-mono text-concrete-dark mt-1">
              Full-Stack Developer // Entrepreneur // Keynote Speaker
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/rickytechie"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono tracking-widest uppercase text-concrete-dark hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/rickytechie"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono tracking-widest uppercase text-concrete-dark hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="/ricky-ransom-dossier.pdf"
              download
              className="text-xs font-mono tracking-widest uppercase text-accent hover:text-accent-alt transition-colors"
            >
              Dossier
            </a>
          </div>
          <p className="text-[10px] font-mono text-concrete-dark/50">
            &copy; {new Date().getFullYear()} Ricky Ransom. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
