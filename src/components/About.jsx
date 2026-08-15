import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.6 },
});

const About = () => {
  return (
    <section id="about" className="py-25 sm:py-32">
      <div className="container max-w-[1148px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 {...fadeUp(0)} className="text-4xl md:text-6xl font-thin mb-20 leading-snug">
          I believe in a user centered design approach, ensuring that every
          project I work on is tailored to meet the specific needs of its users.
        </motion.h2>

        <motion.p {...fadeUp(0.1)} className="pb-3 border-b border-border text-muted">
          This is me.
        </motion.p>

        <div className="grid md:grid-cols-12 mt-9 gap-8">
          <motion.div {...fadeUp(0.15)} className="md:col-span-5">
            <p className="text-5xl">Hi, I&apos;m Prakash.</p>
          </motion.div>
          <motion.div {...fadeUp(0.2)} className="md:col-span-7">
            <div className="text-lg text-muted max-w-[450px]">
              <p>
                I&apos;m a web developer focused on building clean, responsive,
                and reliable web applications. I enjoy turning complex problems
                into simple, maintainable solutions.
              </p>
              <p className="mt-3">
                My approach focuses on creating scalable solutions with strong
                attention to detail and a commitment to writing readable code.
                I specialize in React, Tailwind CSS, and modern frontend tools.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
