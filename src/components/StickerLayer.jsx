import React, { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Rocket, Sparkles, CodeXml,
  User, Cpu,
  Briefcase, Trophy,
  Film, GitBranch,
  School, Book,
  Mail, MessageSquare,
} from 'lucide-react';

const Sticker = memo(({ icon: Icon, position, delay = 0, colorClass }) => {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.div 
      className={`absolute ${position}`}
      initial={{ opacity: 0.1 }}
      animate={!shouldReduceMotion ? { 
        y: [0, -10, 0],
      } : {}}
      transition={{ 
        duration: 8,
        repeat: Infinity,
        ease: "linear",
        delay: delay
      }}
      style={{ willChange: 'transform' }}
    >
      <Icon className={`${colorClass} pointer-events-none w-12 h-12 md:w-16 md:h-16`} />
    </motion.div>
  );
});

const stickerSets = {
  hero: [
    { icon: Rocket, position: 'top-[15%] left-[5%]', colorClass: 'text-[#d35400]', delay: 0 },
    { icon: Sparkles, position: 'bottom-[20%] right-[8%]', colorClass: 'text-[#ff9f45]', delay: 1 },
  ],
  about: [
    { icon: User, position: 'top-[10%] left-[8%]', colorClass: 'text-[#ff9f45]', delay: 0.5 },
    { icon: Cpu, position: 'bottom-[12%] right-[10%]', colorClass: 'text-[#d35400]', delay: 1.5 },
  ],
  experience: [
    { icon: Briefcase, position: 'top-[12%] left-[10%]', colorClass: 'text-[#d35400]', delay: 0.2 },
    { icon: Trophy, position: 'bottom-[12%] right-[12%]', colorClass: 'text-[#ff9f45]', delay: 1.2 },
  ],
  projects: [
    { icon: Film, position: 'top-[10%] left-[5%]', colorClass: 'text-[#ff9f45]', delay: 0.8 },
    { icon: GitBranch, position: 'bottom-[10%] right-[8%]', colorClass: 'text-[#d35400]', delay: 2.8 },
  ],
  education: [
    { icon: School, position: 'top-[15%] left-[8%]', colorClass: 'text-[#ff9f45]', delay: 0.3 },
    { icon: Book, position: 'bottom-[15%] right-[10%]', colorClass: 'text-[#d35400]', delay: 1.3 },
  ],
  contact: [
    { icon: Mail, position: 'top-[15%] left-[8%]', colorClass: 'text-[#d35400]', delay: 1 },
    { icon: MessageSquare, position: 'bottom-[15%] right-[12%]', colorClass: 'text-[#ff9f45]', delay: 2 },
  ],
};

const StickerLayer = memo(({ variant = 'hero' }) => {
  const stickers = stickerSets[variant] || [];

  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none select-none opacity-40">
      {stickers.map((sticker, index) => (
        <Sticker key={index} {...sticker} />
      ))}
    </div>
  );
});

export default StickerLayer;


