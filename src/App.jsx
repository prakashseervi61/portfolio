// ponytail: single-page, all sections render at mount — lazy/Suspense split no work
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BackToTop from './components/BackToTop';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import { MotionConfig } from 'framer-motion';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen w-full overflow-x-hidden bg-[#fffaf3]">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <BackToTop />
      </div>
    </MotionConfig>
  );
}

export default App;