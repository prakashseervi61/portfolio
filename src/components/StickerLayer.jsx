import React from 'react';
import { motion } from 'framer-motion';
import {
  Rocket, Sparkles, CodeXml,
  User, Layers, Cpu,
  Briefcase, Trophy, TrendingUp,
  Film, List, GitBranch,
  School, Book, Ribbon,
  Mail, MessageSquare, Send,
} from 'lucide-react';

const Sticker = ({ icon: Icon, position, delay = 0, colorClass }) => (
  <motion.div 
    className={`absolute ${position}`}
    initial={{ opacity: 0.1, scale: 1 }}
    whileInView={{ opacity: 0.15, scale: 1 }}
    animate={{ 
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0],
    }}
    transition={{ 
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay
    }}
    style={{ willChange: 'transform' }}
  >
    <Icon className={`${colorClass} pointer-events-none 
                    w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20`} />
  </motion.div>
);

const stickerSets = {
  hero: [
    { icon: Rocket, position: 'top-[15%] left-[5%] rotate-12', colorClass: 'text-[#d35400]', delay: 0 },
    { icon: Sparkles, position: 'top-[20%] right-[8%]', colorClass: 'text-[#ff9f45]', delay: 1 },
    { icon: CodeXml, position: 'bottom-[15%] left-[10%]', colorClass: 'text-[#ff9f45]', delay: 2 },
  ],
  about: [
    { icon: User, position: 'top-[10%] left-[8%]', colorClass: 'text-[#ff9f45]', delay: 0.5 },
    { icon: Layers, position: 'top-[15%] right-[10%] rotate-12', colorClass: 'text-[#d35400]', delay: 1.5 },
    { icon: Cpu, position: 'bottom-[10%] left-[12%] -rotate-6', colorClass: 'text-[#d35400]', delay: 2.5 },
  ],
  experience: [
    { icon: Briefcase, position: 'top-[12%] left-[10%]', colorClass: 'text-[#d35400]', delay: 0.2 },
    { icon: Trophy, position: 'top-[18%] right-[12%] rotate-12', colorClass: 'text-[#ff9f45]', delay: 1.2 },
    { icon: TrendingUp, position: 'bottom-[12%] left-[8%] -rotate-6', colorClass: 'text-[#ff9f45]', delay: 2.2 },
  ],
  projects: [
    { icon: Film, position: 'top-[10%] left-[5%]', colorClass: 'text-[#ff9f45]', delay: 0.8 },
    { icon: List, position: 'top-[15%] right-[5%] rotate-12', colorClass: 'text-[#d35400]', delay: 1.8 },
    { icon: GitBranch, position: 'bottom-[10%] left-[8%] -rotate-12', colorClass: 'text-[#d35400]', delay: 2.8 },
  ],
  education: [
    { icon: School, position: 'top-[15%] left-[8%]', colorClass: 'text-[#ff9f45]', delay: 0.3 },
    { icon: Book, position: 'top-[20%] right-[10%] rotate-12', colorClass: 'text-[#d35400]', delay: 1.3 },
    { icon: Ribbon, position: 'bottom-[15%] left-[12%] -rotate-6', colorClass: 'text-[#ff9f45]', delay: 2.3 },
  ],
  contact: [
    { icon: Mail, position: 'top-[15%] left-[8%]', colorClass: 'text-[#d35400]', delay: 1 },
    { icon: MessageSquare, position: 'top-[20%] right-[10%] rotate-12', colorClass: 'text-[#ff9f45]', delay: 2 },
    { icon: Send, position: 'bottom-[15%] right-[12%]', colorClass: 'text-[#d35400]', delay: 0 },
  ],
};

const StickerLayer = ({ variant = 'hero' }) => {
  const stickers = stickerSets[variant] || [];

  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
      {stickers.map((sticker, index) => (
        <Sticker key={index} {...sticker} />
      ))}
    </div>
  );
};

export default StickerLayer;

