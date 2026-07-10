import Hero from "@/components/Hero";
import CaseStudy from "@/components/CaseStudy";
import PitchDeck from "@/components/PitchDeck";

export default function Home() {
  return (
    <>
      <Hero />
      <CaseStudy />
      <PitchDeck />

      <section className="relative py-32 px-6 md:px-16 lg:px-24 bg-sand border-t border-concrete">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-muted mb-4 block">
            Let&rsquo;s Build
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter text-stone-950 mb-6">
            Ready to scale?
          </h2>
          <p className="text-lg text-muted leading-relaxed mb-10 max-w-xl mx-auto">
            Whether you need a keynote, architectural consulting, or a full-stack build —
            the Road to Success starts with a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:RICKYRANSOMCOMPANY@GMAIL.COM"
              className="inline-flex items-center gap-2 px-8 py-4 bg-stone-950 text-sand font-semibold text-sm uppercase tracking-widest hover:bg-stone-800 transition-colors duration-300"
            >
              Start the Conversation
            </a>
            <a
              href="/ricky-ransom-dossier.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-stone-950 text-stone-950 font-semibold text-sm uppercase tracking-widest hover:bg-stone-950 hover:text-sand transition-colors duration-300"
            >
              Download Dossier
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
