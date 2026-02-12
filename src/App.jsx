import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BackToTop from './components/BackToTop';

const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Education = lazy(() => import('./components/Education'));
const Contact = lazy(() => import('./components/Contact'));

import { MotionConfig } from 'framer-motion';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen w-full overflow-x-hidden bg-[#fffaf3]">
        <Navbar />
        <Hero />
        <Suspense fallback={<div className="h-screen bg-[#fffaf3]" />}>
          <About />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </Suspense>
        <BackToTop />
      </div>
    </MotionConfig>
  );
}

export default App;