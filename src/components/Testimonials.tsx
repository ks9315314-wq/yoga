import { Quote, Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'I came in stressed and skeptical. Six months later, Sattva is the one place I truly exhale. Maya\'s Yin class rewired how I rest.',
    name: 'Elena R.',
    role: 'Member since 2024',
    rating: 5,
  },
  {
    quote:
      'The breathwork sessions with Sona changed my mornings entirely. I arrive grounded, clear, and genuinely kinder to my team.',
    name: 'Daniel K.',
    role: 'Monthly member',
    rating: 5,
  },
  {
    quote:
      'Aria\'s vinyasa flows are a moving meditation — challenging but never rushed. The studio feels like a second home.',
    name: 'Priya M.',
    role: '10-class pass',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-sand-200/60 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="reveal mb-5 flex items-center justify-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-sage-700">
            <span className="h-px w-8 bg-sage-500" />
            Community Voices
            <span className="h-px w-8 bg-sage-500" />
          </p>
          <h2 className="reveal font-serif text-4xl font-medium leading-tight text-sand-900 sm:text-5xl lg:text-6xl">
            Stories from
            <span className="italic text-sage-700"> the mat</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="reveal relative flex flex-col rounded-3xl bg-sand-50 p-8 shadow-[0_1px_3px_rgba(135,102,74,0.06)] transition-all duration-500 hover:shadow-[0_18px_40px_-12px_rgba(135,102,74,0.2)]"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote className="h-9 w-9 text-sage-300" />
              <div className="mt-4 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-clay-400 text-clay-400" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 font-serif text-xl italic leading-relaxed text-sand-800">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-sand-100 pt-5">
                <div className="font-medium text-sand-900">{t.name}</div>
                <div className="text-sm text-sand-600">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
