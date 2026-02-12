import React from 'react';
import { motion } from 'framer-motion';
import {
  CodeXml,
  School,
  ArrowRight,
} from 'lucide-react';
import { useMediaQuery } from '../hooks/useMediaQuery';
import StickerLayer from './StickerLayer';

const InterestChip = ({ children }) => (
  <motion.div 
    className="px-3 py-1 text-sm font-medium text-orange-700 bg-orange-100/70 border border-orange-200/80 rounded-full"
    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 159, 69, 0.2)" }}
  >
    {children}
  </motion.div>
);

const TechChip = ({ children }) => (
  <div className="px-2 py-0.5 text-xs font-semibold text-gray-600 bg-gray-100 border border-gray-200/80 rounded-full">
    {children}
  </div>
);

const ExperienceCard = ({ icon: Icon, title, duration, details, techStack, index, isMobile }) => (
  <motion.div 
    className="bg-white/80 border border-black/5 rounded-3xl p-6 shadow-lg
                  transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
    initial={{ opacity: 0, x: isMobile ? 0 : (index % 2 === 0 ? -30 : 30), y: isMobile ? 30 : 0 }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
  >
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-white/60 text-orange-600">
        <Icon className="w-7 h-7" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-sm font-medium text-gray-500">{duration}</p>
      </div>
    </div>
    <ul className="mt-4 space-y-2 pl-2">
      {details.map((point, idx) => (
        <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
          <span className="mt-1 w-1.5 h-1.5 bg-orange-300 rounded-full flex-shrink-0"></span>
          <span>{point}</span>
        </li>
      ))}
    </ul>
    <div className="mt-4 flex flex-wrap gap-2">
      {techStack.map(tech => <TechChip key={tech}>{tech}</TechChip>)}
    </div>
  </motion.div>
);

const Experience = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)');

  const experiences = [
    {
      icon: CodeXml,
      title: "Personal Portfolio Website",
      duration: "2025",
      details: ["Developed a responsive portfolio using React and Tailwind CSS.", "Implemented interactive UI components and a modern, clean design."],
      techStack: ["React", "Tailwind CSS", "JavaScript", "Vite"],
    },
    {
      icon: School,
      title: "Self-learning & Skill Development",
      duration: "2024–Present",
      details: ["Focused on mastering Data Structures & Algorithms in Java.", "Practiced building RESTful APIs with Spring Boot and JPA."],
      techStack: ["Java", "DSA", "Spring Boot", "JPA"],
    },
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="experience" 
      className="scroll-mt-24 relative overflow-hidden w-full py-16 sm:py-20 min-h-[60vh]
                 bg-[#fffaf3] 
                 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] 
                 bg-[size:40px_40px]"
    >
      <StickerLayer variant="experience" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-800">Experience</h2>
          <p className="mt-2 text-lg text-orange-600 font-semibold">Fresher • Actively seeking internship opportunities</p>
        </motion.div>

        <motion.div 
          className="bg-white/80 border border-black/5 rounded-3xl p-8 shadow-lg mb-12"
          initial={{ opacity: 0, scale: 0.95, y: isMobile ? 30 : 0 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Internship Objective</h3>
          <p className="text-center text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I am eager to secure an internship role as a Java Full Stack, Backend, or Frontend Developer. My goal is to apply my problem-solving skills and technical knowledge to contribute to real-world projects, while learning from experienced professionals and growing within a collaborative team environment.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <InterestChip>Spring Boot</InterestChip>
            <InterestChip>React</InterestChip>
            <InterestChip>REST APIs</InterestChip>
            <InterestChip>MySQL</InterestChip>
            <InterestChip>Data Structures</InterestChip>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} index={index} isMobile={isMobile} />
          ))}
        </div>

        <motion.div 
          className="text-center mt-16 p-8 bg-white/80 border border-black/5 rounded-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-800">Looking for an intern?</h3>
          <p className="mt-2 text-gray-600">Let’s build something useful together.</p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact} 
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-br from-[#ff9f45] to-[#d35400] shadow-[0_10px_25px_rgba(211,84,0,0.3)] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            Contact Me <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};


export default Experience;

