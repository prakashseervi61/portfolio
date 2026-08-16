import '../index.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollProgressIndicator from '../components/ScrollProgress';
import ParticleBackground from '../components/Particles';
import CustomCursor from '../components/CustomCursor';
import Preloader from '../components/Preloader';

import ReactLenis from 'lenis/react';

export default function Layout({ children }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.4 }}>
      <div className="min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CustomCursor />
        <Preloader />
        <ScrollProgressIndicator />
        <ParticleBackground />
      </div>
    </ReactLenis>
  );
}