import { Clock, Users, ArrowUpRight } from 'lucide-react';

interface YogaClass {
  name: string;
  level: string;
  duration: string;
  capacity: string;
  description: string;
  image: string;
  tags: string[];
}

const classes: YogaClass[] = [
  {
    name: 'Hatha Flow',
    level: 'All levels',
    duration: '60 min',
    capacity: '12 max',
    description:
      'A grounded, alignment-focused practice linking breath to posture. The perfect foundation for beginners and a steady home for experienced yogis.',
    image:
      'https://images.pexels.com/photos/6648583/pexels-photo-6648583.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Breath', 'Alignment', 'Foundation'],
  },
  {
    name: 'Vinyasa Dynamic',
    level: 'Intermediate',
    duration: '75 min',
    capacity: '14 max',
    description:
      'Fluid sequences that build heat, strength, and grace. Move with your breath through creative flows that challenge body and quiet mind.',
    image:
      'https://images.pexels.com/photos/8436610/pexels-photo-8436610.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Flow', 'Strength', 'Heat'],
  },
  {
    name: 'Yin & Restore',
    level: 'All levels',
    duration: '90 min',
    capacity: '10 max',
    description:
      'Long, passive holds that release deep connective tissue and calm the nervous system. A meditative practice in stillness and surrender.',
    image:
      'https://images.pexels.com/photos/9031648/pexels-photo-9031648.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Stillness', 'Release', 'Calm'],
  },
  {
    name: 'Morning Breathwork',
    level: 'All levels',
    duration: '45 min',
    capacity: '16 max',
    description:
      'Begin with breath. Pranayama techniques to awaken energy, sharpen focus, and set an intentional tone for the day ahead.',
    image:
      'https://images.pexels.com/photos/7878206/pexels-photo-7878206.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Pranayama', 'Energy', 'Focus'],
  },
  {
    name: 'Power Vinyasa',
    level: 'Advanced',
    duration: '75 min',
    capacity: '12 max',
    description:
      'An athletic, energizing flow building stamina, core strength, and balance. Arm balances and inversions woven into a rhythmic sequence.',
    image:
      'https://images.pexels.com/photos/4083050/pexels-photo-4083050.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Power', 'Core', 'Inversions'],
  },
  {
    name: 'Sunset Meditation',
    level: 'All levels',
    duration: '50 min',
    capacity: '20 max',
    description:
      'Guided meditation and sound bath as the day softens. Release tension, observe the breath, and rest in spacious awareness.',
    image:
      'https://images.pexels.com/photos/34395954/pexels-photo-34395954.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Meditation', 'Sound', 'Rest'],
  },
];

export default function Classes() {
  return (
    <section id="classes" className="bg-sand-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Intro */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="reveal mb-5 flex items-center justify-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-sage-600">
            <span className="h-px w-8 bg-sage-400" />
            Our Practice
            <span className="h-px w-8 bg-sage-400" />
          </p>
          <h2 className="reveal font-serif text-4xl font-medium leading-tight text-sand-900 sm:text-5xl lg:text-6xl">
            Classes crafted for every
            <span className="italic text-sage-700"> body &amp; breath</span>
          </h2>
          <p className="reveal mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-sand-700">
            From gentle restorative stillness to energizing power flows, each
            class is an invitation to listen deeply and move with intention.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((cls, i) => (
            <article
              key={cls.name}
              className="reveal group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_1px_3px_rgba(135,102,74,0.08)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-12px_rgba(135,102,74,0.25)]"
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={cls.image}
                  alt={cls.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sand-950/50 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-sand-50/90 px-3 py-1 text-xs font-medium text-sand-800 backdrop-blur-sm">
                  {cls.level}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-2xl font-semibold text-sand-900">
                  {cls.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-sand-700">
                  {cls.description}
                </p>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {cls.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-sage-50 px-3 py-1 text-xs font-medium text-sage-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta */}
                <div className="mt-5 flex items-center gap-5 border-t border-sand-100 pt-4 text-sm text-sand-600">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-sage-500" />
                    {cls.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="h-4 w-4 text-sage-500" />
                    {cls.capacity}
                  </span>
                  <span className="ml-auto inline-flex items-center gap-1 font-medium text-sage-700 transition-colors group-hover:text-sage-600">
                    Details
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
