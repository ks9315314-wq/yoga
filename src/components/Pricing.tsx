import { Check, Sparkles } from 'lucide-react';

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  featured?: boolean;
  cta: string;
}

const plans: Plan[] = [
  {
    name: 'Drop-In',
    price: '$18',
    period: 'per class',
    description: 'Try a single class with no commitment.',
    features: ['Any single class', 'Mat & prop rental', 'Tea after class'],
    cta: 'Book a class',
  },
  {
    name: 'Monthly Unlimited',
    price: '$120',
    period: 'per month',
    description: 'Our most loved plan — come as often as you like.',
    features: [
      'Unlimited classes',
      'All instructors & styles',
      'Priority booking',
      'Guest pass each month',
      '10% off workshops',
    ],
    featured: true,
    cta: 'Start membership',
  },
  {
    name: '10-Class Pass',
    price: '$150',
    period: 'valid 3 months',
    description: 'Flexibility without the monthly commitment.',
    features: ['Any 10 classes', 'Shareable with a friend', 'No expiry extensions'],
    cta: 'Buy pass',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-sand-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="reveal mb-5 flex items-center justify-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-sage-600">
            <span className="h-px w-8 bg-sage-400" />
            Membership
            <span className="h-px w-8 bg-sage-400" />
          </p>
          <h2 className="reveal font-serif text-4xl font-medium leading-tight text-sand-900 sm:text-5xl lg:text-6xl">
            Simple plans,
            <span className="italic text-sage-700"> no pressure</span>
          </h2>
          <p className="reveal mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-sand-700">
            Whether you drop in once or practice daily, there's a way to join
            that fits your life. No contracts, cancel anytime.
          </p>
        </div>

        <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`reveal relative flex flex-col rounded-3xl p-8 transition-all duration-500 lg:hover:-translate-y-1.5 ${
                plan.featured
                  ? 'bg-sage-700 text-sand-50 shadow-[0_30px_60px_-20px_rgba(63,86,64,0.55)] lg:scale-105'
                  : 'bg-white text-sand-900 shadow-[0_1px_3px_rgba(135,102,74,0.08)]'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-clay-400 px-4 py-1.5 text-xs font-medium text-sand-50 shadow-lg">
                  <Sparkles className="h-3.5 w-3.5" />
                  Most loved
                </span>
              )}

              <h3 className="font-serif text-2xl font-semibold">{plan.name}</h3>
              <p className={`mt-2 text-sm ${plan.featured ? 'text-sand-100/80' : 'text-sand-600'}`}>
                {plan.description}
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-serif text-5xl font-semibold">{plan.price}</span>
                <span className={`text-sm ${plan.featured ? 'text-sand-100/70' : 'text-sand-500'}`}>
                  {plan.period}
                </span>
              </div>

              <ul className="mt-7 space-y-3.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check
                      className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                        plan.featured ? 'text-sage-200' : 'text-sage-500'
                      }`}
                    />
                    <span className={plan.featured ? 'text-sand-100/90' : 'text-sand-700'}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full rounded-full py-3.5 text-sm font-medium transition-all duration-300 ${
                  plan.featured
                    ? 'bg-sand-50 text-sage-800 hover:bg-sand-100 hover:shadow-lg'
                    : 'bg-sage-600 text-sand-50 hover:bg-sage-700 hover:shadow-lg'
                }`}
                onClick={() =>
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
