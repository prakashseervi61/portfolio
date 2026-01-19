import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          inline-flex items-center justify-center w-12 h-12 rounded-full 
          bg-gradient-to-br from-[#ff9f45] to-[#d35400] text-white
          shadow-lg transition-all duration-300 ease-in-out
          hover:shadow-2xl hover:-translate-y-1
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500
        `}
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
};

export default BackToTop;