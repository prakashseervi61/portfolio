import { motion } from 'framer-motion';

const stats = [
  { value: '2+', label: 'Projects' },
  { value: '1+', label: 'Year of Learning' },
  { value: '5+', label: 'Technologies' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.6 },
});

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex items-center">
      <div className="container h-[100svh] min-h-[530px] flex justify-between items-center max-md:flex-col max-md:pb-10 px-4 sm:px-6 lg:px-8 mx-auto max-w-[1148px]">
        {/* Left content */}
        <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px]">
          <motion.h1 {...fadeUp(0)} className="leading-[.95] text-6xl sm:text-[80px] font-anton">
            <span className="text-accent">FRONTEND</span>
            <br />
            <span className="ml-4">DEVELOPER</span>
          </motion.h1>

          <motion.p {...fadeUp(0.15)} className="mt-6 text-lg text-muted">
            Hi! I&apos;m{' '}
            <span className="font-medium text-fg">Prakash</span>. A passionate
            frontend developer focused on building clean, responsive, and
            reliable web applications with modern tools.
          </motion.p>

          <motion.a
            {...fadeUp(0.3)}
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="mt-9 h-12 px-8 inline-flex justify-center items-center gap-2 text-lg uppercase font-anton tracking-wider bg-accent text-black rounded-md hover:bg-accent/80 transition-colors"
          >
            Let&apos;s Talk
          </motion.a>

          <motion.div {...fadeUp(0.45)} className="flex items-center gap-2 mt-3">
            <span className="size-3 rounded-full bg-accent" />
            <span className="text-sm text-muted">Available for internship opportunities</span>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          {...fadeUp(0.3)}
          className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <h5 className="text-3xl sm:text-4xl font-anton text-accent mb-1.5">{s.value}</h5>
              <p className="text-muted">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
