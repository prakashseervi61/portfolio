import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.6 },
});

const experiences = [
  {
    title: 'Personal Portfolio Website',
    company: 'Self Project',
    duration: '2025',
    details: 'Responsive portfolio built with React and Tailwind CSS with interactive UI components.',
  },
  {
    title: 'Self-learning & Skill Development',
    company: 'Personal Growth',
    duration: '2024 – Present',
    details: 'Focused on mastering DSA in C++, building REST APIs with Spring Boot, and modern frontend with React.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-25 sm:py-32">
      <div className="container max-w-[1148px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp(0)} className="flex items-center gap-4 mb-16">
          <div className="w-2 h-2 bg-accent rounded-full" />
          <h2 className="text-xl uppercase tracking-wider">My Experience</h2>
        </motion.div>

        <div className="space-y-14">
          {experiences.map((exp, i) => (
            <motion.div key={i} {...fadeUp(i * 0.15)}>
              <p className="text-xl text-muted">{exp.company}</p>
              <p className="text-4xl sm:text-5xl font-anton leading-none mt-3 mb-2">{exp.title}</p>
              <p className="text-lg text-muted">{exp.duration}</p>
              <p className="mt-3 text-muted max-w-[600px]">{exp.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
