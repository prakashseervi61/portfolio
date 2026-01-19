import React from 'react';
import {
  Rocket, Sparkles, CodeXml,
  User, Layers, Cpu,
  Briefcase, Trophy, TrendingUp,
  Film, List, GitBranch,
  School, Book, Ribbon,
  Mail, MessageSquare, Send,
} from 'lucide-react';

const Sticker = ({ icon: Icon, position, animation, colorClass }) => (
  <div className={`absolute ${position} ${animation} 
                 motion-reduce:animate-none motion-reduce:transform-none`}
       style={{ willChange: 'transform' }}>
    <Icon className={`${colorClass} opacity-25 sm:opacity-30 md:opacity-35 pointer-events-none 
                   w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20`} />
  </div>
);

const stickerSets = {
  hero: [
    { icon: Rocket, position: 'top-[15%] left-[5%] rotate-12', animation: 'animate-floatSlow', colorClass: 'text-[#d35400]' },
    { icon: Sparkles, position: 'top-[20%] right-[8%]', animation: 'animate-floatFast', colorClass: 'text-[#ff9f45]' },
    { icon: CodeXml, position: 'bottom-[15%] left-[10%]', animation: 'animate-floatMedium', colorClass: 'text-[#ff9f45]' },
  ],
  about: [
    { icon: User, position: 'top-[10%] left-[8%]', animation: 'animate-floatSlow', colorClass: 'text-[#ff9f45]' },
    { icon: Layers, position: 'top-[15%] right-[10%] rotate-12', animation: 'animate-floatFast', colorClass: 'text-[#d35400]' },
    { icon: Cpu, position: 'bottom-[10%] left-[12%] -rotate-6', animation: 'animate-floatMedium', colorClass: 'text-[#d35400]' },
  ],
  experience: [
    { icon: Briefcase, position: 'top-[12%] left-[10%]', animation: 'animate-floatFast', colorClass: 'text-[#d35400]' },
    { icon: Trophy, position: 'top-[18%] right-[12%] rotate-12', animation: 'animate-floatSlow', colorClass: 'text-[#ff9f45]' },
    { icon: TrendingUp, position: 'bottom-[12%] left-[8%] -rotate-6', animation: 'animate-floatMedium', colorClass: 'text-[#ff9f45]' },
  ],
  projects: [
    { icon: Film, position: 'top-[10%] left-[5%]', animation: 'animate-floatSlow', colorClass: 'text-[#ff9f45]' },
    { icon: List, position: 'top-[15%] right-[5%] rotate-12', animation: 'animate-floatFast', colorClass: 'text-[#d35400]' },
    { icon: GitBranch, position: 'bottom-[10%] left-[8%] -rotate-12', animation: 'animate-floatMedium', colorClass: 'text-[#d35400]' },
  ],
  education: [
    { icon: School, position: 'top-[15%] left-[8%]', animation: 'animate-floatFast', colorClass: 'text-[#ff9f45]' },
    { icon: Book, position: 'top-[20%] right-[10%] rotate-12', animation: 'animate-floatSlow', colorClass: 'text-[#d35400]' },
    { icon: Ribbon, position: 'bottom-[15%] left-[12%] -rotate-6', animation: 'animate-floatMedium', colorClass: 'text-[#ff9f45]' },
  ],
  contact: [
    { icon: Mail, position: 'top-[15%] left-[8%]', animation: 'animate-floatSlow', colorClass: 'text-[#d35400]' },
    { icon: MessageSquare, position: 'top-[20%] right-[10%] rotate-12', animation: 'animate-floatFast', colorClass: 'text-[#ff9f45]' },
    { icon: Send, position: 'bottom-[15%] right-[12%]', animation: 'animate-floatMedium', colorClass: 'text-[#d35400]' },
  ],
};

const StickerLayer = ({ variant = 'hero' }) => {
  const stickers = stickerSets[variant] || [];

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      {stickers.map((sticker, index) => (
        <Sticker key={index} {...sticker} />
      ))}
    </div>
  );
};

export default StickerLayer;
