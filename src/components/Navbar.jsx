import { useState, useCallback } from 'react';
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

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = useCallback(() => setOpen(false), []);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="group size-12 fixed top-5 right-5 md:right-10 z-[70]"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="site-menu-panel"
      >
        <span
          className={`inline-block w-3/5 h-0.5 bg-fg rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 transition-all duration-300 ${open ? 'rotate-45' : '-translate-y-[5px]'}`}
        />
        <span
          className={`inline-block w-3/5 h-0.5 bg-fg rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 transition-all duration-300 ${open ? '-rotate-45' : 'translate-y-[5px]'}`}
        />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-[55] bg-black/70" onClick={closeMenu} />
          <div
            id="site-menu-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className={`fixed top-0 right-0 h-screen w-[500px] max-w-[calc(100vw-3rem)] z-[56] bg-bg-light border-l border-border shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <div className="w-full max-w-[300px] mx-8 sm:mx-auto py-10">
              <div className="flex gap-10 max-lg:flex-col">
                <div className="max-lg:order-2">
                  <p className="text-muted mb-5 md:mb-8 text-sm uppercase tracking-wider">SOCIAL</p>
                  <ul className="space-y-3">
                    {SOCIAL_LINKS.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.url}
                          target={link.url.startsWith('mailto:') ? undefined : '_blank'}
                          rel="noreferrer"
                          className="text-lg capitalize hover:text-accent transition-colors"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-muted mb-5 md:mb-8 text-sm uppercase tracking-wider">MENU</p>
                  <ul className="space-y-3">
                    {MENU_LINKS.map((link) => (
                      <li key={link.name}>
                        <button
                          onClick={() => {
                            setOpen(false);
                            document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="group text-xl flex items-center gap-3 transition-colors"
                        >
                          {link.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10">
                  <p className="text-muted mb-4 text-sm uppercase tracking-wider">GET IN TOUCH</p>
                  <a href="mailto:prakashseervi1503@gmail.com" className="hover:text-accent transition-colors">
                    prakashseervi1503@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
