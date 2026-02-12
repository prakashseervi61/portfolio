import React from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, Mail, Linkedin, Github, Code } from 'lucide-react';
import { useMediaQuery } from '../hooks/useMediaQuery';
import StickerLayer from './StickerLayer';
import profileImg from '../assets/images/profile_image.png';

const Hero = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)');

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/prakash-v-446194326/' },
    { icon: Github, href: 'https://github.com/prakashseervi61' },
    { icon: Code, href: 'https://leetcode.com/u/r5rxBOU1qw/' },
    { icon: Mail, href: 'mailto:prakashseervi1503@gmail.com' },
  ];

  return (
    <section
      id="home"
      className="scroll-mt-24 relative overflow-hidden w-full min-h-screen flex items-center
                 py-16 sm:py-20
                 bg-[#fffaf3]
                 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] 
                 bg-[size:40px_40px]"
    >
      <StickerLayer variant="hero" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 items-center">
          <motion.div 
            className="lg:col-span-7 text-center lg:text-left"
            initial={{ opacity: 0, x: isMobile ? 0 : -50, y: isMobile ? 30 : 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Hi, I’m{' '}
              <span className="bg-gradient-to-r from-[#ff9f45] to-[#d35400] text-transparent bg-clip-text">
                Prakash
              </span>
            </motion.h1>
            <motion.p 
              className="mt-4 text-lg sm:text-xl font-medium text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Web Developer
            </motion.p>
            <motion.p 
              className="mt-4 max-w-xl mx-auto lg:mx-0 text-gray-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              I build and maintain responsive, scalable web applications, turning ideas into real products with a focus on performance and user experience.</motion.p>
            
            <motion.div 
              className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <a 
                href="resume.pdf" 
                download="Prakash_Resume.pdf" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-br from-[#ff9f45] to-[#d35400] shadow-[0_10px_25px_rgba(211,84,0,0.3)] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(211,84,0,0.4)] hover:-translate-y-1"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
              <a 
                href="resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-[#d35400] bg-transparent border-2 border-[#d35400] transition-all duration-300 hover:bg-[rgba(211,84,0,0.1)] hover:-translate-y-1"
              >
                <Eye className="w-5 h-5" />
                View Resume
              </a>
            </motion.div>

            <motion.div 
              className="mt-8 flex justify-center lg:justify-start gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={index} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full text-[#d35400] border-2 border-[rgba(211,84,0,0.3)] bg-white/50 transition-all duration-300 hover:text-white hover:border-transparent hover:bg-gradient-to-br from-[#ff9f45] to-[#d35400] hover:shadow-[0_8px_25px_rgba(211,84,0,0.35)] hover:-translate-y-1"
                  aria-label={`Visit my ${social.href.includes('mailto') ? 'Email' : social.href.split('.')[1]}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="lg:col-span-5 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8, y: isMobile ? 30 : 0 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          >
            <div className="w-full max-w-[240px] lg:max-w-[260px] h-[380px] lg:h-[400px] mx-auto overflow-hidden rounded-2xl">
              <img src={profileImg} alt="Prakash" className="w-full h-full object-cover object-top select-none" width="240" height="380" loading="lazy" fetchPriority="high" decoding="async" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;