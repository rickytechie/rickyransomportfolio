export interface BioSection {
  id: string
  title: string
  content: string[]
  emphasis?: string
}

export const bioSections: BioSection[] = [
  {
    id: 'origin',
    title: 'The Foundation',
    content: [
      'Before the code, before the architecture, before the keynotes — there was a body that refused to cooperate. Born with Hirschsprung disease, a congenital condition that claimed most of my large intestine, I entered the world already fighting. The diagnosis led to Short Bowel Syndrome, a lifelong battle with absorption, nutrition, and the fundamental mechanics of survival.',
      '70+ surgical procedures. Years of hospitalization. An Enterocutaneous Fistula (ECF) that nearly ended my journey. While other kids ran and played without a second thought, I learned to read my body like a dashboard — monitoring inputs, outputs, energy reserves, and warning lights. The hospital became a second home. The white walls of recovery rooms became my first classrooms in patience, resilience, and the art of fighting for tomorrow.',
      'Each procedure, each setback, each moment the doctors said "maybe" and I decided "definitely" — they forged something in me that no scalpel could remove: an unrelenting will to architect a life worth living.',
    ],
  },
  {
    id: 'medicine',
    title: 'The White Coat Years',
    content: [
      'After years as a patient, I decided to step to the other side of the stethoscope. I pursued a residency track at Weill Cornell Medicine, one of the most prestigious medical institutions in the world. The same halls where Nobel laureates walked became my proving ground.',
      'The irony was not lost on me — a body that medicine had saved was now dedicating itself to medicine\'s calling. I immersed myself in the science of healing, studying the systems that had kept me alive and learning to apply that knowledge in service of others.',
      'But even as I excelled in the clinical environment, I felt something pulling me in a different direction. The same analytical mind that could diagnose a patient could also debug a distributed system. The same precision required for a surgical procedure translated naturally to crafting elegant software architecture. The same empathy that made a good physician made a great product builder.',
    ],
  },
  {
    id: 'synthesis',
    title: 'The Synthesis — Music, Language, Machine',
    content: [
      'My path has never been linear, and that is precisely the point. Before medicine, there was music — the structured logic of composition, the emotional intelligence of performance. Before code, there was linguistics — the study of how meaning emerges from syntax and context, how symbols shape understanding.',
      'I speak five languages — not just programming languages, but human languages. Each one opened a door to a different way of thinking. French taught me nuance. Spanish taught me rhythm. Arabic taught me precision. Italian taught me expression. And English... English became the bridge between all of them.',
      'When I discovered programming, I realized it was the ultimate synthesis of everything I had studied. Code is logic and poetry simultaneously. Architecture is structure and flow. Systems design requires both the scientist\'s rigor and the artist\'s intuition. Every application I build is a composition. Every architecture I design tells a story. Every system I optimize sings.',
      'This is why the RKYRNSM approach is different. I do not just write code — I compose solutions. I do not just architect systems — I design experiences. The musician, the linguist, the physician, and the engineer all sit at the same table when I build.',
    ],
  },
  {
    id: 'ecf',
    title: 'The Comeback — ECF Recovery',
    content: [
      'The Enterocutaneous Fistula (ECF) was, in many ways, the final exam. A complication that would have broken most people — months of hospitalization, multiple surgeries, the constant threat of sepsis, and the grinding uncertainty of whether the body would ever cooperate again.',
      'But I had been training for this my entire life. The same resilience that got me through Hirschsprung as an infant got me through the ECF as an adult. The same systems-thinking that helped me manage Short Bowel Syndrome helped me navigate a complex healthcare system. The same discipline that made me a developer made me a survivor.',
      'During those months of recovery, I made a decision. If I got through this — when I got through this — I would build something that mattered. Not just another startup. Not just another app. But an engine for transformation. A platform that could help others turn their adversity into advantage, their scars into strategy, their story into systems.',
      'That is the RKYRNSM Digital Engine. Born in a hospital bed. Built by a body that refused to quit. Driven by a vision that transcends any single discipline.',
    ],
  },
  {
    id: 'vision',
    title: 'The RKYRNSM Vision',
    content: [
      'Today, I stand at the intersection of everything I have ever been: patient and physician, musician and engineer, student and teacher. The RKYRNSM Digital Engine is not a portfolio — it is a宣言 (manifesto) written in code, a thesis proven in production, a legacy under active construction.',
      'I build for founders who have been counted out. I architect for teams that are underestimated. I speak for audiences that need to hear that their obstacles are not roadblocks — they are raw materials.',
      'The Road to Success is not a straight line. It is a winding, brutal, beautiful path through hospitals and boardrooms, through syntax errors and life-saving surgeries, through moments of crushing doubt and breakthroughs that make it all worthwhile.',
      'I am Ricky Ransom. Full-stack tech architect. Success consultant. Survivor. Builder. And this is my digital engine.',
    ],
  },
]

export const bioHighlights = [
  { label: 'Languages Spoken', value: '5' },
  { label: 'Surgical Procedures', value: '70+' },
  { label: 'Years in Tech', value: '8+' },
  { label: 'Ventures Built', value: '5+' },
]
