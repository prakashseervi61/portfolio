// ponytail: no hover-follow thumbnail (no assets for all 5 projects); gradient title + arrow from reference
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.6 },
});

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <path d="M10 14 21 3" />
    <path d="M15 3h6v6" />
  </svg>
);

const projects = [
  {
    num: '01',
    title: 'myFlix',
    tech: ['React', 'Tailwind CSS', 'OMDB API', 'JavaScript'],
    href: 'https://prakashseervi61.github.io/myFlix/',
  },
  {
    num: '02',
    title: 'Todo List Web App',
    tech: ['React', 'Tailwind CSS', 'localStorage'],
    href: 'https://prakashseervi61.github.io/Todo-List-Web-App/',
  },
  {
    num: '03',
    title: 'CGPA Calculator',
    tech: ['React', 'Recharts', 'React Router', 'Tailwind CSS'],
    href: 'https://github.com/prakashseervi61/CGPA-CALC',
  },
  {
    num: '04',
    title: '3D Solar System',
    tech: ['TypeScript', 'Three.js', 'WebGL'],
    href: 'https://github.com/prakashseervi61/3D-Solar-System-Website',
  },
  {
    num: '05',
    title: 'QA Assistant',
    tech: ['Python', 'RAG', 'LLM', 'PDF Processing'],
    href: 'https://github.com/prakashseervi61/QA-Assistant',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-25 sm:py-32">
      <div className="container max-w-[1148px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Selected Projects" className="mb-16" />

        <div className="group/projects">
          <div className="flex flex-col max-md:gap-10">
            {projects.map((project, i) => (
              <motion.a
                key={project.num}
                {...fadeUp(i * 0.1)}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group project-item py-5 md:border-b border-border first:pt-0 last:pb-0 last:border-none md:group-hover/projects:opacity-30 md:hover:!opacity-100 transition-all"
              >
                <div className="flex gap-2 md:gap-5">
                  <div className="font-anton text-muted">_{project.num}.</div>
                  <div>
                    <h4 className="text-4xl sm:text-6xl flex gap-4 font-anton leading-none transition-all duration-700 bg-gradient-to-r from-accent to-fg from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group-hover:bg-left">
                      {project.title}
                      <span className="text-fg opacity-0 group-hover:opacity-100 transition-all">
                        <ExternalLinkIcon />
                      </span>
                    </h4>
                    <div className="mt-2 flex flex-wrap gap-3 text-muted text-xs">
                      {project.tech.map((tech, idx, arr) => (
                        <div className="gap-3 flex items-center" key={tech}>
                          <span>{tech}</span>
                          {idx !== arr.length - 1 && (
                            <span className="inline-block size-2 rounded-full bg-bg-light" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
