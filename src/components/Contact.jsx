import SectionTitle from './SectionTitle';
import { GENERAL_INFO } from '../lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { MoveUpRight } from 'lucide-react';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const CONTACT_LINKS = [
  { label: 'GitHub', url: 'https://github.com/prakashseervi61' },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/prakash-v-446194326/',
  },
  { label: 'LeetCode', url: 'https://leetcode.com/u/r5rxBOU1qw/' },
  { label: 'Email', url: `mailto:${GENERAL_INFO.email}` },
];

export default function Contact() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
          end: 'bottom 50%',
          toggleActions: 'restart none none reverse',
          scrub: 1,
        },
      });

      tl.from('.slide-up', { y: 50, opacity: 0, stagger: 0.15 });
    },
    { scope: containerRef },
  );

  return (
    <section className="py-24" id="contact" ref={containerRef}>
      <div className="container">
        <SectionTitle title="Contact" className="mb-16" />

        <h2 className="slide-up text-4xl md:text-6xl font-thin leading-snug max-w-[700px]">
          Let&apos;s build something together.
        </h2>

        <p className="slide-up mt-4 text-lg text-muted-foreground max-w-[500px]">
          I&apos;m currently open to internship opportunities and
          collaborations. Feel free to reach out!
        </p>

        <a
          href={`mailto:${GENERAL_INFO.email}`}
          className="slide-up inline-block mt-10 mb-14 font-anton leading-none text-3xl sm:text-5xl md:text-6xl break-all hover:text-accent transition-colors"
        >
          {GENERAL_INFO.email}
        </a>

        <div className="slide-up flex flex-wrap gap-x-8 gap-y-4">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target={link.url.startsWith('mailto:') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-lg text-muted-foreground hover:text-fg transition-colors"
            >
              {link.label}
              <MoveUpRight
                size={15}
                className="text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
