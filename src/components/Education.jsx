import React from 'react';
import { motion } from 'framer-motion';
import { School } from 'lucide-react';
import StickerLayer from './StickerLayer';

const EducationCard = ({ entry }) => (
  <div className="bg-white/80 border border-black/5 rounded-3xl p-6 shadow-lg 
                  w-full max-w-none md:max-w-[420px] md:min-w-[320px] flex-none
                  transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
    <div className="flex justify-between items-start gap-4">
      <div className="flex items-start gap-4">
        <School className="w-8 h-8 text-orange-500 mt-1 flex-shrink-0" />
        <div>
          <h3 className="text-lg font-bold text-gray-800 text-left">{entry.degree}</h3>
          <p className="text-gray-600 font-medium text-left">{entry.institution}</p>
        </div>
      </div>
      <div className="mt-1 flex-shrink-0 px-3 py-1 bg-gray-100 border border-gray-200/80 rounded-full">
        <p className="text-xs font-semibold text-gray-600">{entry.duration}</p>
      </div>
    </div>
    <div className="mt-4 pl-12 text-left">
      <p className="text-base font-bold text-orange-600">{entry.note}</p>
    </div>
  </div>
);

const TimelineItem = ({ entry, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <div className="py-10 md:py-0">
      <div className="md:hidden relative pl-16">
        <motion.div 
          className="absolute left-6 top-0 w-5 h-5 bg-[#d35400] rounded-full ring-8 ring-[rgba(211,84,0,0.18)] z-10"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <EducationCard entry={entry} />
        </motion.div>
      </div>

      <div className="hidden md:grid md:grid-cols-[1fr_64px_1fr] md:gap-x-4 items-center">
        {isLeft ? (
          <>
            <motion.div 
              className="flex justify-end"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
            >
              <EducationCard entry={entry} />
            </motion.div>
            <div className="w-full flex items-center justify-center flex-row-reverse">
              <motion.div 
                className="w-4 h-4 bg-[#d35400] rounded-full ring-8 ring-[rgba(211,84,0,0.18)] z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false }}
              ></motion.div>
              <motion.div 
                className="w-full h-[2px] bg-[#ffb347]/70"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: false }}
              ></motion.div>
            </div>
            <div></div>
          </>
        ) : (
          <>
            <div></div>
            <div className="w-full flex items-center justify-center">
              <motion.div 
                className="w-4 h-4 bg-[#d35400] rounded-full ring-8 ring-[rgba(211,84,0,0.18)] z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false }}
              ></motion.div>
              <motion.div 
                className="w-full h-[2px] bg-[#ffb347]/70"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: false }}
              ></motion.div>
            </div>
            <motion.div 
              className="flex justify-start"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
            >
              <EducationCard entry={entry} />
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};

const Education = () => {
  const educationHistory = [
    { degree: "B.Tech in Information Technology", institution: "Sri Krishna College of Technology, Coimbatore", duration: "2024 – Present", note: "CGPA: 7.5" },
    { degree: "12th Grade", institution: "Ruby Matric HR SEC School", duration: "2023 – 2024", note: "Percentage: 81.16%" },
    { degree: "10th Grade", institution: "Ruby Matric HR SEC School", duration: "2021 – 2022", note: "Percentage: 77.2%" },
  ];

  return (
    <section id="education" className="scroll-mt-24 relative overflow-hidden w-full py-16 sm:py-20 bg-[#fffaf3] bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:40px_40px]">
      <StickerLayer variant="education" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div 
          className="text-center mb-16 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-800">Education</h2>
          <p className="mt-2 text-lg text-gray-500">Academic timeline</p>
        </motion.div>
        <div className="relative">
          <motion.div 
            className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#ffb347] to-[#d35400] z-0 left-6 md:left-1/2 md:-translate-x-1/2"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          ></motion.div>
          <div className="flex flex-col gap-y-12 md:gap-y-0">
            {educationHistory.map((entry, index) => (
              <TimelineItem key={index} entry={entry} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

