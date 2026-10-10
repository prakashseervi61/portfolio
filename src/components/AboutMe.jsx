import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';
import { CERIFICATIONS, GENERAL_INFO } from '../lib/data';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function AboutMe() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          id: 'about-me-in',
          trigger: container.current,
          start: 'top 70%',
          end: 'bottom bottom',
          scrub: 0.5,
        },
      });

      tl.from('.slide-up-and-fade', {
        y: 150,
        opacity: 0,
        stagger: 0.05,
      });
    },
    { scope: container },
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          id: 'about-me-out',
          trigger: container.current,
          start: 'bottom 50%',
          end: 'bottom 10%',
          scrub: 0.5,
        },
      });

      tl.to('.slide-up-and-fade', {
        y: -150,
        opacity: 0,
        stagger: 0.02,
      });
    },
    { scope: container },
  );

  return (
    <section className="py-24" id="about-me">
      <div className="container" ref={container}>
        <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade">
          I believe in a user centered design approach, ensuring that
          every project I work on is tailored to meet the specific
          needs of its users.
        </h2>

        <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
          This is me.
        </p>

        <div className="grid md:grid-cols-12 mt-9">
          <div className="md:col-span-5">
            <p className="text-5xl slide-up-and-fade">
              Hi, I&apos;m Prakash.
            </p>
            <p className="mt-4 text-muted-foreground slide-up-and-fade">
              {GENERAL_INFO.location} · {GENERAL_INFO.phone}
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="text-lg text-muted-foreground max-w-[450px]">
              <p className="slide-up-and-fade">
                {GENERAL_INFO.summary}
              </p>
              <p className="mt-3 slide-up-and-fade">
                My approach focuses on scalable solutions with strong
                attention to detail and a commitment to readable code. I
                work across React, Spring Boot, FastAPI and applied AI.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8 slide-up-and-fade">
          <p className="text-muted text-sm uppercase tracking-wider mb-4">
            Certifications
          </p>
          <ul className="space-y-2">
            {CERIFICATIONS.map((certification) => (
              <li key={certification} className="text-muted-foreground">
                {certification}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}