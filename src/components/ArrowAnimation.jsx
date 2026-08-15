// ponytail: decorative drawing arrow for the hero, framer-motion loop instead of GSAP timeline
import { motion } from 'framer-motion';

const ArrowAnimation = () => {
  return (
    <div className="hidden md:block absolute bottom-20 left-1/2 -translate-x-1/2 z-0">
      <motion.svg
        width="376"
        height="111"
        viewBox="0 0 376 111"
        fill="transparent"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ y: [0, 300], opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatDelay: 1,
          times: [0, 0.1, 0.8, 1],
        }}
      >
        <motion.path
          d="M1 1V39.9286L188 110V70.6822L1 1Z"
          stroke="#2C2C2C"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.3,
            repeat: Infinity,
            repeatDelay: 3.5,
          }}
        />
        <motion.path
          d="M375 1V39.9286L188 110V70.6822L375 1Z"
          stroke="#2C2C2C"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.3,
            repeat: Infinity,
            repeatDelay: 3.5,
          }}
        />
      </motion.svg>
    </div>
  );
};

export default ArrowAnimation;
