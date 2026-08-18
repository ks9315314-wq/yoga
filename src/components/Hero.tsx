import { ArrowRight, Play } from 'lucide-react';

const heroImg =
  'https://images.pexels.com/photos/4457945/pexels-photo-4457945.jpeg?auto=compress&cs=tinysrgb&w=1920';

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Woman meditating outdoors on a yoga mat"
          className="h-full w-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sand-950/70 via-sand-950/40 to-sand-950/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-sand-950/60 via-transparent to-sand-950/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 pb-16 lg:px-10">
        <div className="max-w-2xl">
          <p
            className="mb-6 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-sand-200 opacity-0"
            style={{ animation: 'fade-up 0.8s ease-out 0.2s forwards' }}
          >
            <span className="h-px w-10 bg-sand-300" />
            Mindful Movement Studio
          </p>
          <h1
            className="font-serif text-5xl font-medium leading-[1.05] text-sand-50 sm:text-6xl lg:text-7xl opacity-0"
            style={{ animation: 'fade-up 0.8s ease-out 0.45s forwards' }}
          >
            Find your balance,
            <span className="block italic text-sand-200">breathe with intention</span>
          </h1>
          <p
            className="mt-7 max-w-xl text-lg leading-relaxed text-sand-100/90 opacity-0"
            style={{ animation: 'fade-up 0.8s ease-out 0.7s forwards' }}
          >
            A sanctuary for body and breath — where ancient practice meets
            modern life. Classes for every level, guided by teachers who honor
            your journey.
          </p>
          <div
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center opacity-0"
            style={{ animation: 'fade-up 0.8s ease-out 0.95s forwards' }}
          >
            <button
              onClick={() => scrollTo('#classes')}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-sage-500 px-8 py-4 text-base font-medium text-sand-50 transition-all duration-300 hover:bg-sage-600 hover:shadow-xl"
            >
              Explore Classes
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo('#schedule')}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-sand-200/40 px-8 py-4 text-base font-medium text-sand-50 backdrop-blur-sm transition-all duration-300 hover:bg-sand-50/10"
            >
              <Play className="h-4 w-4 fill-current" />
              View Schedule
            </button>
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-sand-200/15 bg-sand-950/30 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-sand-200/15 px-6 lg:px-10">
          {[
            { stat: '12+', label: 'Weekly Classes' },
            { stat: '6', label: 'Expert Teachers' },
            { stat: '8 yrs', label: 'Guiding Practice' },
          ].map((item) => (
            <div key={item.label} className="px-4 py-5 text-center sm:px-8">
              <div className="font-serif text-3xl font-semibold text-sand-50 sm:text-4xl">
                {item.stat}
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.2em] text-sand-200/80 sm:text-sm">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
