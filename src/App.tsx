import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Classes from '@/components/Classes';
import Instructors from '@/components/Instructors';
import Schedule from '@/components/Schedule';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import { useReveal } from '@/hooks/useReveal';

function App() {
  useReveal();

  return (
    <div className="min-h-screen bg-sand-50 font-sans text-sand-900">
      <Navbar />
      <main>
        <Hero />
        <Classes />
        <Instructors />
        <Schedule />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;
