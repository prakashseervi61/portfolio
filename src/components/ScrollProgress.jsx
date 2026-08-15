// ponytail: right-edge scroll progress bar, framer-motion in place of GSAP ScrollTrigger
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="hidden md:block fixed top-1/2 right-[2%] -translate-y-1/2 w-1.5 h-[100px] rounded-full bg-bg-light overflow-hidden z-40">
      <motion.div
        className="w-full h-full origin-top bg-accent"
        style={{ scaleY }}
      />
    </div>
  );
};

export default ScrollProgress;
