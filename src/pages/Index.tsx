
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Knowledge from '../components/Knowledge';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { BeamsBackground } from '../components/ui/beams-background';

const Index = () => {
  return (
    <BeamsBackground intensity="subtle" className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About />
      <Knowledge />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gray-900/80 backdrop-blur-sm text-white py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 harryhunkalive. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </BeamsBackground>
  );
};

export default Index;
