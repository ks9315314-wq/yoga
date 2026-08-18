import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Flower2, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contact" className="bg-sage-950 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left — info */}
          <div>
            <p className="reveal mb-5 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-sage-300">
              <span className="h-px w-8 bg-sage-400/60" />
              Visit Us
            </p>
            <h2 className="reveal font-serif text-4xl font-medium leading-tight text-sand-50 sm:text-5xl lg:text-6xl">
              Come practice
              <span className="italic text-sage-300"> with us</span>
            </h2>
            <p className="reveal mt-6 max-w-md text-lg leading-relaxed text-sand-100/70">
              Drop by the studio, send a note, or book your first class. Your
              first trial session is on us — just mention it in your message.
            </p>

            <div className="reveal mt-10 space-y-5">
              {[
                { icon: MapPin, label: 'Studio', value: '14 Birchwood Lane, Greenfield Park' },
                { icon: Phone, label: 'Phone', value: '+1 (555) 248-9012' },
                { icon: Mail, label: 'Email', value: 'hello@sattvayoga.studio' },
                { icon: Clock, label: 'Open', value: 'Mon–Fri 6:30am–9pm · Sat–Sun 8am–6pm' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-sage-800/60">
                    <item.icon className="h-5 w-5 text-sage-300" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-sage-400">
                      {item.label}
                    </div>
                    <div className="mt-0.5 text-sand-100">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal rounded-3xl bg-sand-50 p-8 shadow-2xl lg:p-10">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sage-100">
                  <Flower2 className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="mt-6 font-serif text-3xl font-semibold text-sand-900">
                  Thank you
                </h3>
                <p className="mt-3 max-w-sm text-sand-600">
                  Your message has reached us. We'll be in touch within one
                  studio day to welcome you.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-medium text-sage-700 underline-offset-4 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-serif text-2xl font-semibold text-sand-900">
                  Send us a note
                </h3>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-sand-700">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-sand-200 bg-sand-50 px-4 py-3 text-sand-900 outline-none transition-all duration-300 focus:border-sage-500 focus:ring-2 focus:ring-sage-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-sand-700">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-sand-200 bg-sand-50 px-4 py-3 text-sand-900 outline-none transition-all duration-300 focus:border-sage-500 focus:ring-2 focus:ring-sage-200"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-sand-700">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none rounded-xl border border-sand-200 bg-sand-50 px-4 py-3 text-sand-900 outline-none transition-all duration-300 focus:border-sage-500 focus:ring-2 focus:ring-sage-200"
                    placeholder="Which class are you curious about?"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-sage-600 py-4 text-base font-medium text-sand-50 transition-all duration-300 hover:bg-sage-700 hover:shadow-lg"
                >
                  Send message
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <footer className="mt-24 border-t border-sage-800/50 pt-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 lg:flex-row lg:px-10">
          <div className="flex items-center gap-2.5 text-sage-300">
            <Flower2 className="h-6 w-6" strokeWidth={1.5} />
            <span className="font-serif text-xl font-semibold">Sattva</span>
          </div>
          <p className="text-sm text-sand-100/50">
            © {new Date().getFullYear()} Sattva Yoga Studio. Made with breath &amp; care.
          </p>
        </div>
      </footer>
    </section>
  );
}
