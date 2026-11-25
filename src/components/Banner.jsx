import { GENERAL_INFO } from '../lib/data';
import { Download, Github, ArrowUpRight } from 'lucide-react';

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
  return (
    <section className="relative overflow-hidden" id="banner">
      <div
        className="container min-h-[100svh] flex justify-between items-center gap-10 max-md:flex-col max-md:items-start max-md:pt-24 max-md:pb-10"
      >
        <div className="max-md:grow flex flex-col justify-center items-start max-w-[544px]">
          <div className="inline-flex items-center gap-2 mb-6 rounded-full border border-border bg-bg-light px-3 py-1.5 text-sm text-muted-foreground">
            <span className="size-2 rounded-full bg-accent animate-pulse" />
            Open to internship opportunities
          </div>

          <h1 className="banner-title leading-[.95] text-6xl sm:text-[80px] font-anton">
            <span className="text-primary">FULL-STACK</span>
            <br />
            <span className="ml-4">DEVELOPER</span>
          </h1>

          <p className="banner-description mt-6 text-lg text-muted-foreground">
            Hi! I&apos;m{' '}
            <span className="font-medium text-foreground">
              Prakash
            </span>
            . I build web apps end to end — React frontends, Spring Boot &
            FastAPI backends, and applied AI.
          </p>

          <p className="mt-2 text-sm text-muted-foreground/80">
            {GENERAL_INFO.location} · {GENERAL_INFO.education} · Coimbatore
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={GENERAL_INFO.resume}
              download="Prakash-Resume.pdf"
              className={`${BTN_BASE} ${BTN_VARIANTS.primary}`}
            >
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute top-[200%] left-0 right-0 h-full rounded-[50%] group-hover:top-0 transition-all duration-500 scale-150 ${BTN_SWEEP.primary}`}
              />
              <span className="relative z-10 flex items-center gap-2">
                <Download className="w-5 h-5" aria-hidden="true" />
                Resume
              </span>
            </a>

            <a
              href={GENERAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`${BTN_BASE} ${BTN_VARIANTS.secondary}`}
            >
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute top-[200%] left-0 right-0 h-full rounded-[50%] group-hover:top-0 transition-all duration-500 scale-150 ${BTN_SWEEP.secondary}`}
              />
              <span className="relative z-10 flex items-center gap-2">
                <Github className="w-5 h-5" aria-hidden="true" />
                GitHub
                <ArrowUpRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </span>
            </a>
          </div>
        </div>

        <div className="flex md:flex-col gap-4 md:gap-8 text-left md:text-right md:absolute md:bottom-[10%] md:right-[4%]">
          {GENERAL_INFO.stats.map((stat) => (
            <div key={stat.label}>
              <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                {stat.value}
              </h5>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
