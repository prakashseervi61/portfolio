import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAVBAR_HEIGHT = 72;
const HOME_OVERRIDE_THRESHOLD = 120; // As per requirement: scrollY < 120

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [open, setOpen] = useState(false);
  
  const isClickScrolling = useRef(false);
  const scrollTimeout = useRef(null);
  const observer = useRef(null); // IntersectionObserver
  const sectionElements = useRef(new Map()); // Map to store observed section elements
  const ticking = useRef(false);

  const navLinks = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'experience', title: 'Experience' },
    { id: 'projects', title: 'Projects' },
    { id: 'education', title: 'Education' },
    { id: 'contact', title: 'Contact' },
  ];

  // Callback for IntersectionObserver
  const handleIntersection = useCallback((entries) => {
    entries.forEach(entry => sectionElements.current.set(entry.target.id, entry));
    
    if (isClickScrolling.current || window.scrollY < HOME_OVERRIDE_THRESHOLD) return;

    const intersecting = Array.from(sectionElements.current.values()).filter(e => e.isIntersecting);
    
    if (intersecting.length > 0) {
      const best = intersecting.reduce((p, c) => (p.intersectionRatio > c.intersectionRatio ? p : c));
      setActiveSection(best.target.id);
    }
  }, []);

  // Scroll listener for Home Override
  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        const homeElement = document.getElementById('home');
        const homeTop = homeElement?.getBoundingClientRect().top;
        
        if (window.scrollY < HOME_OVERRIDE_THRESHOLD || (homeTop !== undefined && homeTop > 0 && homeTop <= NAVBAR_HEIGHT + 20)) {
          setActiveSection('home');
        }
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, []);

  useEffect(() => {
    // Initialize IntersectionObserver
    observer.current = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "-20% 0px -55% 0px",
      threshold: [0, 0.1, 0.25, 0.4, 0.6, 0.8],
    });
    const currentObserver = observer.current;

    // Function to observe a section
    const observeSection = (id) => {
      const element = document.getElementById(id);
      if (element && !sectionElements.current.has(id)) { // Only observe if not already observed
        currentObserver.observe(element);
      }
    };

    // Initial observation for already mounted sections
    navLinks.forEach(link => observeSection(link.id));

    // Setup MutationObserver to watch for newly added sections
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach(mutation => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          mutation.addedNodes.forEach(node => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              navLinks.forEach(link => {
                if (node.id === link.id || node.querySelector(`#${link.id}`)) {
                  observeSection(link.id);
                }
              });
            }
          });
        }
      });
    });

    // Observe changes in the document body
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      currentObserver.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [handleIntersection, handleScroll]);

  // Effect to prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = ''; // Ensure overflow is reset on unmount
    };
  }, [open]);

  const handleLinkClick = (id) => {
    isClickScrolling.current = true;
    setActiveSection(id);
    setOpen(false);

    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 500);
  };
  
  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 w-full z-[9999] bg-[#fffaf3]/80 backdrop-blur-md shadow-sm border-b border-black/5"
      >
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-24">
          <div className="flex items-center justify-between h-16">
            <motion.a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }} 
              className="text-2xl font-bold text-[#d35400]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Prakash
            </motion.a>
            <div className="hidden md:flex items-center gap-2 lg:gap-4 whitespace-nowrap">
              {navLinks.map((link) => (
                <a key={link.id} href={`#${link.id}`} onClick={(e) => { e.preventDefault(); handleLinkClick(link.id); }}
                   className={`relative px-4 py-2 text-sm lg:text-base rounded-full font-semibold text-[#333] transition-all duration-300 ${
                     activeSection === link.id
                       ? 'text-white'
                       : 'hover:text-[#d35400] hover:bg-[rgba(211,84,0,0.12)]'
                   }`}>
                  {activeSection === link.id && (
                    <motion.div 
                      layoutId="nav-bg"
                      className="absolute inset-0 bg-gradient-to-br from-[#ff9f45] to-[#d35400] rounded-full shadow-md z-[-1]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {link.title}
                </a>
              ))}
            </div>
            <div className="md:hidden">
              <button onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} className="w-10 h-10 flex items-center justify-center rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                {open ? (
                  <X className="w-6 h-6 text-[#333] transition-opacity duration-300" />
                ) : (
                  <Menu className="w-6 h-6 text-[#333] transition-opacity duration-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 z-[9998]"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            ></motion.div>
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="fixed top-[72px] left-0 right-0 z-[9999] md:hidden w-full shadow-lg bg-[#fffaf3] px-6 py-4 rounded-b-xl"
            >
              <div className="flex flex-col items-start gap-2">
                {navLinks.map((link) => (
                  <a key={link.id} href={`#${link.id}`} onClick={(e) => { e.preventDefault(); handleLinkClick(link.id); }}
                     className={`px-4 py-3 rounded-full font-semibold text-[#333] transition-all duration-300 w-full text-left ${
                       activeSection === link.id
                         ? 'text-white bg-gradient-to-br from-[#ff9f45] to-[#d35400] shadow-md'
                         : 'hover:text-[#d35400] hover:bg-[rgba(211,84,0,0.12)]'
                     }`}>
                    {link.title}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;