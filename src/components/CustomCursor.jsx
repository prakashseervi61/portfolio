// ponytail: desktop-only arrow cursor, spring follow instead of GSAP tween
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

const CustomCursor = () => {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40 });
  const springY = useSpring(y, { stiffness: 500, damping: 40 });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [x, y]);

  return (
    <motion.svg
      width="27"
      height="30"
      viewBox="0 0 27 30"
      className="hidden md:block fixed top-0 left-0 z-50 pointer-events-none"
      style={{ x: springX, y: springY }}
      fill="none"
      strokeWidth="2"
    >
      <path
        d="M20.0995 11.0797L3.72518 1.13204C2.28687 0.258253 0.478228 1.44326 0.704999 3.11083L3.28667 22.0953C3.58333 24.2768 7.33319 24.6415 8.3792 22.7043C9.5038 20.6215 10.8639 18.7382 12.43 17.7122C13.996 16.6861 16.2658 16.1911 18.6244 15.9918C20.8181 15.8063 21.9811 12.2227 20.0995 11.0797Z"
        className="fill-fg stroke-bg/50"
      />
    </motion.svg>
  );
};

export default CustomCursor;
