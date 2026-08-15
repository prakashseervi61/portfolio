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
          className="fixed inset-0 z-[60] flex"
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

          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex text-[20vw] lg:text-[200px] font-anton leading-none overflow-hidden">
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
          </p>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
