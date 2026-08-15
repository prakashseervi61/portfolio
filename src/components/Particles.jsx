import { useEffect, useRef } from 'react';

// ponytail: simple CSS particle field — no library needed
const Particles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    for (let i = 0; i < 60; i++) {
      const dot = document.createElement('div');
      const size = Math.random() * 3 + 1;
      dot.style.cssText = `
        position:absolute;
        width:${size}px;
        height:${size}px;
        border-radius:50%;
        background:rgba(255,255,255,${Math.random() * 0.4 + 0.1});
        left:${Math.random() * 100}%;
        top:${Math.random() * 100}%;
        animation:float ${Math.random() * 20 + 15}s linear infinite;
        animation-delay:${Math.random() * -20}s;
      `;
      container.appendChild(dot);
    }

    return () => { container.innerHTML = ''; };
  }, []);

  return (
    <>
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(${Math.random() > 0.5 ? '' : '-'}50px); opacity: 0; }
        }
      `}</style>
      <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none overflow-hidden" />
    </>
  );
};

export default Particles;
