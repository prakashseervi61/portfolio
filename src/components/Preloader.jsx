// ponytail: framer-motion name reveal + panel slide, no GSAP
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const NAME = 'PRAKASH';

const Preloader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2300);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[80] flex"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="absolute inset-0 flex">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="h-full w-[10%] bg-black"
                initial={{ y: 0 }}
                animate={{ y: '-100%' }}
                transition={{
                  delay: 1.1 + i * 0.05,
                  duration: 0.5,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>

          {/* The name rises together with the panels; overflow-hidden clips it
              as it exits, so it looks carried off the top of the screen. */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <p className="flex text-[20vw] lg:text-[200px] font-anton leading-none overflow-hidden">
              <motion.span
                className="inline-flex"
                initial={{ y: '0%' }}
                animate={{ y: '-120%' }}
                transition={{
                  delay: 1.1,
                  duration: 0.5,
                  ease: 'easeInOut',
                }}
              >
                {NAME.split('').map((ch, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.25 }}
                  >
                    {ch}
                  </motion.span>
                ))}
              </motion.span>
            </p>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
