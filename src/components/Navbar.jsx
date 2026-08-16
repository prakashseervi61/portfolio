import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MoveUpRight } from 'lucide-react';

const SOCIAL_LINKS = [
  { name: 'github', url: 'https://github.com/prakashseervi61' },
  { name: 'linkedin', url: 'https://www.linkedin.com/in/prakashv-dev/' },
  { name: 'leetcode', url: 'https://leetcode.com/u/r5rxBOU1qw/' },
  { name: 'email', url: 'mailto:prakashseervi1503@gmail.com' },
];

const MENU_LINKS = [
  { name: 'Home', id: 'banner' },
  { name: 'About Me', id: 'about-me' },
  { name: 'Stack', id: 'my-stack' },
  { name: 'Experience', id: 'my-experience' },
  { name: 'Projects', id: 'my-projects' },
  { name: 'Contact', id: 'contact' },
];

const COLORS = [
  'bg-yellow-500 text-black',
  'bg-blue-500 text-white',
  'bg-teal-500 text-black',
  'bg-indigo-500 text-white',
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('banner');

  useEffect(() => {
    const observers = [];
    MENU_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="group size-12 fixed top-5 right-5 md:right-10 z-[70]"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        <span className={`inline-block w-3/5 h-0.5 bg-fg rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 ${open ? 'rotate-45 md:group-hover:rotate-[30deg] md:group-hover:-translate-y-[5px]' : '-translate-y-[5px] md:group-hover:rotate-12'}`} />
        <span className={`inline-block w-3/5 h-0.5 bg-fg rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 ${open ? '-rotate-45 md:group-hover:-rotate-[30deg] md:group-hover:translate-y-[5px]' : 'translate-y-[5px] md:group-hover:-rotate-12'}`} />
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[55] bg-black/70"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Slide-in panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-screen w-[500px] max-w-[calc(100vw-3rem)] z-[56] bg-bg-light flex flex-col justify-center py-10 overflow-hidden"
          >
            <div className="w-full max-w-[300px] mx-8 sm:mx-auto">
              <div className="flex gap-10 max-lg:flex-col">
                {/* Social */}
                <div className="max-lg:order-2">
                  <p className="text-muted mb-5 md:mb-8 text-sm uppercase tracking-wider">SOCIAL</p>
                  <ul className="space-y-3">
                    {SOCIAL_LINKS.map((link) => (
                      <li key={link.name}>
                        <a href={link.url} target="_blank" rel="noreferrer" className="text-lg capitalize hover:text-accent transition-colors">
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Menu */}
                <div>
                  <p className="text-muted mb-5 md:mb-8 text-sm uppercase tracking-wider">MENU</p>
                  <ul className="space-y-3">
                    {MENU_LINKS.map((link, idx) => (
                      <li key={link.name}>
                        <button
                          onClick={() => scrollTo(link.id)}
                          className={`group text-xl flex items-center gap-3 transition-colors ${active === link.id ? 'text-accent' : ''}`}
                        >
                          <span className={`size-3.5 rounded-full flex items-center justify-center group-hover:scale-[200%] transition-all ${active === link.id ? COLORS[idx % COLORS.length] : 'bg-white/20'}`}>
                            <MoveUpRight size={8} className={`transition-all ${active === link.id ? 'scale-100' : 'scale-0 group-hover:scale-100'}`} />
                          </span>
                          {link.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Get in touch */}
              <div className="mt-10">
                <p className="text-muted mb-4 text-sm uppercase tracking-wider">GET IN TOUCH</p>
                <a href="mailto:prakashseervi1503@gmail.com" className="hover:text-accent transition-colors">
                  prakashseervi1503@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
