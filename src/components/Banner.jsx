import { gsap, useGSAP } from '../lib/gsap';
import ArrowAnimation from './ArrowAnimation';
import { GENERAL_INFO } from '../lib/data';
import { Download } from 'lucide-react';
import { useRef } from 'react';

// Inline sweep button: a span slides up from below on hover. The sweep colour
// differs per variant because a solid white ellipse over light text would make
// the label invisible on the outline button.
const BTN_BASE =
  'group relative overflow-hidden h-12 px-8 inline-flex justify-center items-center gap-2 text-lg uppercase font-anton tracking-widest transition-colors banner-button slide-up-and-fade';
const BTN_VARIANTS = {
  primary: 'bg-accent text-black hover:bg-accent/90',
  secondary:
    'bg-transparent text-fg border border-border hover:bg-bg-light hover:border-accent',
};
const BTN_SWEEP = {
  primary: 'bg-white',
  secondary: 'bg-accent/15',
};

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
            <span className="text-primary">SOFTWARE</span>
            <br /> <span className="ml-4">DEVELOPER</span>
          </h1>
          <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground">
            Hi! I&apos;m{' '}
            <span className="font-medium text-foreground">
              Prakash
            </span>
            . A pre-final year B.Tech student building clean, reliable web
            applications — React frontends, Spring Boot and FastAPI backends,
            and applied AI.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={`mailto:${GENERAL_INFO.email}`}
              className={`${BTN_BASE} ${BTN_VARIANTS.primary}`}
            >
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute top-[200%] left-0 right-0 h-full rounded-[50%] group-hover:top-0 transition-all duration-500 scale-150 ${BTN_SWEEP.primary}`}
              />
              <span className="relative z-10">Let&apos;s Talk</span>
            </a>

            <a
              href={GENERAL_INFO.resume}
              download="Prakash-Resume.pdf"
              className={`${BTN_BASE} ${BTN_VARIANTS.secondary}`}
            >
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute top-[200%] left-0 right-0 h-full rounded-[50%] group-hover:top-0 transition-all duration-500 scale-150 ${BTN_SWEEP.secondary}`}
              />
              <span className="relative z-10 flex items-center gap-2">
                <Download className="w-5 h-5" aria-hidden="true" />
                Resume
              </span>
            </a>
          </div>

          <div className="flex items-center gap-2 mt-3">
            <span className="size-3 rounded-full bg-white"></span>
            <span className="text-sm text-muted-foreground">
              Available for internship opportunities
            </span>
          </div>
        </div>

        <div className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
          {GENERAL_INFO.stats.map((stat) => (
            <div className="slide-up-and-fade" key={stat.label}>
              <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                {stat.value}
              </h5>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}