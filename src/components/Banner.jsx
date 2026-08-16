import ArrowAnimation from './ArrowAnimation';
import Button from './Button';
import { GENERAL_INFO } from '../lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';
import { useRef } from 'react';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function Banner() {
  const containerRef = useRef(null);

  // Move content up on scroll
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'bottom 70%',
          end: 'bottom 10%',
          scrub: 1,
        },
      });

      tl.fromTo(
        '.slide-up-and-fade',
        { y: 0 },
        { y: -150, opacity: 0, stagger: 0.02 },
      );
    },
    { scope: containerRef },
  );

  return (
    <section className="relative overflow-hidden" id="banner">
      <ArrowAnimation />
      <div
        className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
        ref={containerRef}
      >
        <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px]">
          <h1 className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton">
            <span className="text-primary">FRONTEND</span>
            <br /> <span className="ml-4">DEVELOPER</span>
          </h1>
          <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground">
            Hi! I&apos;m{' '}
            <span className="font-medium text-foreground">
              Prakash
            </span>
            . A passionate frontend developer focused on building
            clean, responsive, and reliable web applications with
            modern tools.
          </p>
          <Button
            as="link"
            href={`mailto:${GENERAL_INFO.email}`}
            variant="primary"
            className="mt-9 banner-button slide-up-and-fade"
          >
            Let&apos;s Talk
          </Button>

          <div className="flex items-center gap-2 mt-3">
            <span className="size-3 rounded-full bg-white"></span>
            <span className="text-sm text-muted-foreground">
              Available for internship opportunities
            </span>
          </div>
        </div>

        <div className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
          <div className="slide-up-and-fade">
            <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
              5+
            </h5>
            <p className="text-muted-foreground">
              Projects
            </p>
          </div>
          <div className="slide-up-and-fade">
            <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
              3+
            </h5>
            <p className="text-muted-foreground">
              Year of Learning
            </p>
          </div>
          <div className="slide-up-and-fade">
            <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
              10+
            </h5>
            <p className="text-muted-foreground">Technologies</p>
          </div>
        </div>
      </div>
    </section>
  );
}