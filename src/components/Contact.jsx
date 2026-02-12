import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  Mail,
  Send,
  Linkedin,
  Github,
} from 'lucide-react';
import { useMediaQuery } from '../hooks/useMediaQuery';
import StickerLayer from './StickerLayer';

const ContactMethod = ({ icon: Icon, title, value, href }) => (
  <motion.a 
    href={href} 
    target={href.startsWith('mailto:') ? '_self' : '_blank'}
    rel="noopener noreferrer"
    className="flex items-center gap-4 p-4 bg-white/50 border border-black/5 rounded-2xl
               transition-all duration-300 hover:bg-white/80 hover:shadow-lg hover:-translate-y-1"
    whileHover={{ x: 5 }}
  >
    <Icon className="w-7 h-7 text-orange-600" />
    <div>
      <p className="font-bold text-gray-800">{title}</p>
      <p className="text-sm text-gray-600 break-words">{value}</p>
    </div>
  </motion.a>
);

const SocialIcon = ({ icon: Icon, href, label }) => (
  <motion.a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    aria-label={label}
    className="w-12 h-12 flex items-center justify-center rounded-full text-[#d35400]
               border-2 border-[rgba(211,84,0,0.3)] bg-white/50
               transition-all duration-300
               hover:text-white hover:border-transparent
               hover:bg-gradient-to-br from-[#ff9f45] to-[#d35400] 
               hover:shadow-[0_8px_25px_rgba(211,84,0,0.35)]
               hover:-translate-y-1"
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
  >
    <Icon className="w-6 h-6" />
  </motion.a>
);

const Contact = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setError(false);
    setSuccess(false);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS environment variables are not set.");
      setError(true);
      setLoading(false);
      setTimeout(() => setError(false), 5000);
      return;
    }

    const templateParams = {
      from_name: form.current.name.value,
      from_email: form.current.email.value,
      message: form.current.message.value,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        setSuccess(true);
        form.current.reset();
        setTimeout(() => setSuccess(false), 5000);
      }, (error) => {
        console.error('Email sending failed:', error.text);
        setError(true);
        setTimeout(() => setError(false), 5000);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="scroll-mt-24 relative overflow-hidden w-full py-16 sm:py-20 bg-[#fffaf3] bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:40px_40px]">
      <StickerLayer variant="contact" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-800">Contact</h2>
          <p className="mt-2 text-lg text-gray-500">Let’s connect</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            className="bg-white/80 border border-black/5 rounded-3xl p-8 shadow-lg h-full flex flex-col
                          transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            initial={{ opacity: 0, x: isMobile ? 0 : -30, y: isMobile ? 30 : 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              I'm currently looking for internship opportunities and am open to collaborations. Feel free to reach out!
            </p>
            <div className="space-y-4">
              <ContactMethod icon={Mail} title="Email" value="prakashseervi1503@gmail.com" href="mailto:prakashseervi1503@gmail.com" />
              <ContactMethod icon={Linkedin} title="LinkedIn" value="prakash-v-446194326" href="https://www.linkedin.com/in/prakash-v-446194326/" />
              <ContactMethod icon={Github} title="GitHub" value="prakashseervi61" href="https://github.com/prakashseervi61" />
            </div>
            <div className="mt-auto pt-8 flex justify-center gap-4">
               <SocialIcon icon={Linkedin} href="https://www.linkedin.com/in/prakash-v-446194326/" label="LinkedIn" />
               <SocialIcon icon={Github} href="https://github.com/prakashseervi61" label="GitHub" />
            </div>
          </motion.div>

          <motion.div 
            className="bg-white/80 border border-black/5 rounded-3xl p-8 shadow-lg
                          transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            initial={{ opacity: 0, x: isMobile ? 0 : 30, y: isMobile ? 30 : 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" name="name" id="name" required placeholder="Your Name" className="w-full px-4 py-3 bg-white/80 border border-black/10 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-shadow duration-300 shadow-sm"/>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" name="email" id="email" required placeholder="your.email@example.com" className="w-full px-4 py-3 bg-white/80 border border-black/10 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-shadow duration-300 shadow-sm"/>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea name="message" id="message" rows="5" required placeholder="Your message here..." className="w-full px-4 py-3 bg-white/80 border border-black/10 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-shadow duration-300 shadow-sm resize-none"></textarea>
              </div>
              <div className="text-center">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit" 
                  disabled={loading} 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-br from-[#ff9f45] to-[#d35400] shadow-[0_10px_25px_rgba(211,84,0,0.3)] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                  {loading ? 'Sending...' : <>Send Message <Send className="w-4 h-4" /></>}
                </motion.button>
              </div>
              {success && <p className="text-center mt-4 text-green-600 font-semibold">Message sent successfully!</p>}
              {error && <p className="text-center mt-4 text-red-600 font-semibold">Failed to send message. Please try again later.</p>}
            </form>
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5 }}
        >
            <div className="inline-block px-4 py-2 text-sm font-semibold text-green-800 bg-green-100/80 border border-green-200/80 rounded-full">
                Open to internship opportunities
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

