import { Instagram, Music2 } from 'lucide-react';

interface Instructor {
  name: string;
  specialty: string;
  bio: string;
  image: string;
  years: string;
}

const instructors: Instructor[] = [
  {
    name: 'Maya Lindqvist',
    specialty: 'Hatha &amp; Yin',
    bio: 'A decade of study in India and Sweden. Maya weaves gentle alignment with deep restorative holds, holding space for each student.',
    image:
      'https://images.pexels.com/photos/4498516/pexels-photo-4498516.jpeg?auto=compress&cs=tinysrgb&w=800',
    years: '10 yrs',
  },
  {
    name: 'Aria Chen',
    specialty: 'Vinyasa &amp; Power',
    bio: 'Former dancer turned yogi. Aria teaches fluid, musical sequences that build strength while keeping the breath steady and soft.',
    image:
      'https://images.pexels.com/photos/4534878/pexels-photo-4534878.jpeg?auto=compress&cs=tinysrgb&w=800',
    years: '8 yrs',
  },
  {
    name: 'Sona Patel',
    specialty: 'Breathwork &amp; Meditation',
    bio: 'Certified pranayama and sound therapy guide. Sona leads morning breathwork and sunset sound baths that reset the nervous system.',
    image:
      'https://images.pexels.com/photos/6739127/pexels-photo-6739127.jpeg?auto=compress&cs=tinysrgb&w=800',
    years: '12 yrs',
  },
];

export default function Instructors() {
  return (
    <section id="instructors" className="relative overflow-hidden bg-sage-950 py-24 lg:py-32">
      {/* Decorative texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-sage-300 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-sand-300 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="reveal mb-5 flex items-center justify-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-sage-300">
            <span className="h-px w-8 bg-sage-400/60" />
            Your Guides
            <span className="h-px w-8 bg-sage-400/60" />
          </p>
          <h2 className="reveal font-serif text-4xl font-medium leading-tight text-sand-50 sm:text-5xl lg:text-6xl">
            Teachers who hold
            <span className="italic text-sage-300"> space for you</span>
          </h2>
          <p className="reveal mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-sand-100/70">
            Each instructor brings years of dedicated practice and a unique
            voice. They meet you where you are — with patience, warmth, and
            steadiness.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {instructors.map((ins, i) => (
            <article
              key={ins.name}
              className="reveal group relative overflow-hidden rounded-3xl"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Portrait */}
              <div className="relative h-[26rem] overflow-hidden rounded-3xl">
                <img
                  src={ins.image}
                  alt={ins.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-950 via-sage-950/20 to-transparent" />

                {/* Years badge */}
                <span className="absolute right-4 top-4 rounded-full bg-sand-50/90 px-3 py-1 text-xs font-medium text-sand-800 backdrop-blur-sm">
                  {ins.years}
                </span>

                {/* Info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-2xl font-semibold text-sand-50">
                    {ins.name}
                  </h3>
                  <p
                    className="mt-1 text-sm font-medium uppercase tracking-wider text-sage-300"
                    dangerouslySetInnerHTML={{ __html: ins.specialty }}
                  />

                  {/* Expand-on-hover bio */}
                  <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      <p className="pt-3 text-sm leading-relaxed text-sand-100/85">
                        {ins.bio}
                      </p>
                      <div className="mt-4 flex gap-3">
                        <a
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sand-50/15 text-sand-50 backdrop-blur-sm transition-colors hover:bg-sand-50/25"
                          aria-label={`${ins.name} on Instagram`}
                        >
                          <Instagram className="h-4 w-4" />
                        </a>
                        <a
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sand-50/15 text-sand-50 backdrop-blur-sm transition-colors hover:bg-sand-50/25"
                          aria-label={`${ins.name} playlist`}
                        >
                          <Music2 className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
