import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.6 },
});

const STACK = {
  frontend: ['JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Redux', 'HTML', 'CSS'],
  backend: ['Spring Boot', 'Node.js', 'Express.js', 'JPA'],
  database: ['MySQL', 'PostgreSQL', 'MongoDB'],
  tools: ['Git', 'GitHub', 'VS Code', 'Docker', 'Postman'],
};

const Stack = () => {
  return (
    <section id="stack" className="py-25 sm:py-32">
      <div className="container max-w-[1148px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp(0)} className="flex items-center gap-4 mb-16">
          <div className="w-2 h-2 bg-accent rounded-full" />
          <h2 className="text-xl uppercase tracking-wider">My Stack</h2>
        </motion.div>

        <div className="space-y-16">
          {Object.entries(STACK).map(([category, items], catIdx) => (
            <motion.div
              key={category}
              {...fadeUp(catIdx * 0.1)}
              className="grid sm:grid-cols-12 gap-6"
            >
              <div className="sm:col-span-5">
                <p className="text-4xl font-anton leading-none text-muted uppercase">
                  {category}
                </p>
              </div>
              <div className="sm:col-span-7 flex gap-x-8 gap-y-4 flex-wrap">
                {items.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
