import { useEffect, useState } from 'react';
import { Menu, X, Flower2 } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Classes', href: '#classes' },
  { label: 'Instructors', href: '#instructors' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-sand-50/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(135,102,74,0.12)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <button
          onClick={() => handleNav('#home')}
          className="flex items-center gap-2.5 text-sage-700 transition-colors hover:text-sage-600"
          aria-label="Sattva Yoga home"
        >
          <Flower2 className="h-7 w-7" strokeWidth={1.5} />
          <span className="font-serif text-2xl font-semibold tracking-wide">
            Sattva
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleNav(l.href)}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-sage-600 ${
                  scrolled ? 'text-sand-800' : 'text-sand-900/80'
                }`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleNav('#pricing')}
          className="hidden rounded-full bg-sage-600 px-6 py-2.5 text-sm font-medium text-sand-50 transition-all duration-300 hover:bg-sage-700 hover:shadow-lg md:inline-block"
        >
          Book a Class
        </button>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="text-sand-900 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-400 md:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="mx-6 mt-3 space-y-1 rounded-2xl bg-sand-50 p-4 shadow-lg">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleNav(l.href)}
                className="block w-full rounded-lg px-4 py-3 text-left text-sand-800 transition-colors hover:bg-sand-100"
              >
                {l.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleNav('#pricing')}
              className="mt-2 block w-full rounded-full bg-sage-600 px-4 py-3 text-center text-sand-50"
            >
              Book a Class
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
