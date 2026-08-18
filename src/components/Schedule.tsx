import { useState } from 'react';
import { Clock, User } from 'lucide-react';

type Day = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';

interface Session {
  time: string;
  name: string;
  instructor: string;
  duration: string;
  level: 'Gentle' | 'All' | 'Intermediate' | 'Advanced';
}

const schedule: Record<Day, Session[]> = {
  Mon: [
    { time: '07:00', name: 'Morning Breathwork', instructor: 'Sona', duration: '45 min', level: 'All' },
    { time: '09:30', name: 'Hatha Flow', instructor: 'Maya', duration: '60 min', level: 'All' },
    { time: '18:00', name: 'Vinyasa Dynamic', instructor: 'Aria', duration: '75 min', level: 'Intermediate' },
  ],
  Tue: [
    { time: '08:00', name: 'Hatha Flow', instructor: 'Maya', duration: '60 min', level: 'All' },
    { time: '12:30', name: 'Yin & Restore', instructor: 'Maya', duration: '90 min', level: 'Gentle' },
    { time: '19:00', name: 'Power Vinyasa', instructor: 'Aria', duration: '75 min', level: 'Advanced' },
  ],
  Wed: [
    { time: '07:00', name: 'Morning Breathwork', instructor: 'Sona', duration: '45 min', level: 'All' },
    { time: '09:30', name: 'Vinyasa Dynamic', instructor: 'Aria', duration: '75 min', level: 'Intermediate' },
    { time: '18:30', name: 'Sunset Meditation', instructor: 'Sona', duration: '50 min', level: 'All' },
  ],
  Thu: [
    { time: '08:00', name: 'Hatha Flow', instructor: 'Maya', duration: '60 min', level: 'All' },
    { time: '12:30', name: 'Yin & Restore', instructor: 'Maya', duration: '90 min', level: 'Gentle' },
    { time: '19:00', name: 'Power Vinyasa', instructor: 'Aria', duration: '75 min', level: 'Advanced' },
  ],
  Fri: [
    { time: '07:00', name: 'Morning Breathwork', instructor: 'Sona', duration: '45 min', level: 'All' },
    { time: '09:30', name: 'Vinyasa Dynamic', instructor: 'Aria', duration: '75 min', level: 'Intermediate' },
    { time: '17:30', name: 'Sunset Meditation', instructor: 'Sona', duration: '50 min', level: 'All' },
  ],
  Sat: [
    { time: '09:00', name: 'Hatha Flow', instructor: 'Maya', duration: '75 min', level: 'All' },
    { time: '11:00', name: 'Power Vinyasa', instructor: 'Aria', duration: '75 min', level: 'Advanced' },
    { time: '16:00', name: 'Yin & Restore', instructor: 'Maya', duration: '90 min', level: 'Gentle' },
  ],
  Sun: [
    { time: '10:00', name: 'Gentle Hatha', instructor: 'Maya', duration: '60 min', level: 'Gentle' },
    { time: '17:00', name: 'Sunset Meditation', instructor: 'Sona', duration: '50 min', level: 'All' },
  ],
};

const days: Day[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const fullDay: Record<Day, string> = {
  Mon: 'Monday', Tue: 'Tuesday', Wed: 'Wednesday', Thu: 'Thursday',
  Fri: 'Friday', Sat: 'Saturday', Sun: 'Sunday',
};

const levelColor: Record<Session['level'], string> = {
  Gentle: 'bg-clay-100 text-clay-700',
  All: 'bg-sage-100 text-sage-700',
  Intermediate: 'bg-sand-200 text-sand-800',
  Advanced: 'bg-sage-800 text-sand-50',
};

export default function Schedule() {
  const [active, setActive] = useState<Day>('Mon');

  return (
    <section id="schedule" className="bg-sand-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="reveal mb-5 flex items-center justify-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-sage-600">
            <span className="h-px w-8 bg-sage-400" />
            Weekly Schedule
            <span className="h-px w-8 bg-sage-400" />
          </p>
          <h2 className="reveal font-serif text-4xl font-medium leading-tight text-sand-900 sm:text-5xl lg:text-6xl">
            Find your rhythm
            <span className="italic text-sage-700"> each week</span>
          </h2>
        </div>

        {/* Day tabs */}
        <div className="reveal mt-14 flex flex-wrap justify-center gap-2 sm:gap-3">
          {days.map((d) => (
            <button
              key={d}
              onClick={() => setActive(d)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                active === d
                  ? 'bg-sage-600 text-sand-50 shadow-md'
                  : 'bg-sand-50 text-sand-700 hover:bg-sage-100'
              }`}
            >
              <span className="hidden sm:inline">{fullDay[d]}</span>
              <span className="sm:hidden">{d}</span>
            </button>
          ))}
        </div>

        {/* Sessions */}
        <div key={active} className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {schedule[active].map((s, i) => (
            <div
              key={`${active}-${s.time}`}
              className="group flex flex-col rounded-2xl bg-white p-5 shadow-[0_1px_3px_rgba(135,102,74,0.06)] transition-all duration-500 hover:shadow-[0_12px_28px_-8px_rgba(135,102,74,0.2)] animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-3xl font-semibold text-sand-900">
                  {s.time}
                </span>
                <span className={`rounded-full px-3 py-1 text-xs font-medium ${levelColor[s.level]}`}>
                  {s.level}
                </span>
              </div>
              <h3 className="mt-3 text-lg font-medium text-sand-900">{s.name}</h3>
              <div className="mt-3 flex items-center gap-4 text-sm text-sand-600">
                <span className="inline-flex items-center gap-1.5">
                  <User className="h-4 w-4 text-sage-500" /> {s.instructor}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-sage-500" /> {s.duration}
                </span>
              </div>
              <button
                onClick={() =>
                  document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="mt-4 w-full rounded-full border border-sage-200 py-2.5 text-sm font-medium text-sage-700 transition-all duration-300 hover:bg-sage-600 hover:text-sand-50"
              >
                Reserve spot
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
