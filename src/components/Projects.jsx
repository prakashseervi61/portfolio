import { motion } from 'framer-motion';
import { Github, Link } from 'lucide-react';

import myflixImg from '../assets/images/myFlix.png';
import todoImg from '../assets/images/ToDo.png';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.6 },
});

const projects = [
  {
    num: '01',
    title: 'myFlix',
    tech: ['React', 'Tailwind CSS', 'OMDB API', 'JavaScript'],
    live: 'https://prakashseervi61.github.io/myFlix/',
    github: 'https://github.com/prakashseervi61/myFlix',
    image: myflixImg,
  },
  {
    num: '02',
    title: 'Todo List Web App',
    tech: ['React', 'Tailwind CSS', 'localStorage'],
    live: 'https://prakashseervi61.github.io/Todo-List-Web-App/',
    github: 'https://github.com/prakashseervi61/Todo-List-Web-App',
    image: todoImg,
  },
  {
    num: '03',
    title: 'CGPA Calculator',
    tech: ['React', 'Recharts', 'React Router', 'Tailwind CSS'],
    live: null,
    github: 'https://github.com/prakashseervi61/CGPA-CALC',
    image: null,
  },
  {
    num: '04',
    title: '3D Solar System',
    tech: ['TypeScript', 'Three.js', 'WebGL'],
    live: null,
    github: 'https://github.com/prakashseervi61/3D-Solar-System-Website',
    image: null,
  },
  {
    num: '05',
    title: 'QA Assistant',
    tech: ['Python', 'RAG', 'LLM', 'PDF Processing'],
    live: null,
    github: 'https://github.com/prakashseervi61/QA-Assistant',
    image: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-25 sm:py-32">
      <div className="container max-w-[1148px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp(0)} className="flex items-center gap-4 mb-16">
          <div className="w-2 h-2 bg-accent rounded-full" />
          <h2 className="text-xl uppercase tracking-wider">Selected Projects</h2>
        </motion.div>

        <div className="flex flex-col max-md:gap-10">
          {projects.map((project, i) => (
            <motion.a
              key={project.num}
              {...fadeUp(i * 0.1)}
              href={project.live || project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-6 py-6 border-b border-border hover:border-accent/40 transition-colors"
            >
              <span className="text-muted text-lg font-mono shrink-0">_{project.num}.</span>
              <div className="flex-1">
                <h4 className="text-3xl sm:text-5xl font-anton leading-none group-hover:text-accent transition-colors">
                  {project.title}
                </h4>
                <div className="flex flex-wrap gap-3 mt-3">
                  {project.tech.map((t) => (
                    <span key={t} className="text-sm text-muted">{t}</span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 shrink-0">
                {project.github && (
                  <Github className="w-5 h-5 text-muted group-hover:text-accent transition-colors" />
                )}
                {project.live && (
                  <Link className="w-5 h-5 text-muted group-hover:text-accent transition-colors" />
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
