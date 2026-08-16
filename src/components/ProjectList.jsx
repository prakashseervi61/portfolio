import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { PROJECTS } from '../lib/data';
import Project from './Project';

gsap.registerPlugin(useGSAP);

export default function ProjectList() {
  const projectsRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useGSAP(
    () => {
      const slideUpEl = projectsRef.current?.querySelectorAll('.slide-up');
      if (!slideUpEl?.length) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 80%',
          end: 'bottom 80%',
          scrub: 0.5,
        },
      });

      tl.from('.slide-up', { opacity: 0, y: 40, ease: 'none', stagger: 0.4 });
    },
    { scope: projectsRef },
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'bottom 50%',
          end: 'bottom 10%',
          scrub: 1,
        },
      });
      tl.to(projectsRef.current, { y: -150, opacity: 0 });
    },
    { scope: projectsRef },
  );

  return (
    <section className="py-24" id="my-projects" ref={projectsRef}>
      <div className="container">
        <h2 className="mb-14 text-4xl md:text-6xl font-thin slide-up">
          My Projects
        </h2>

        <div
          className="group/projects relative"
          onMouseLeave={() => setSelectedProject(null)}
        >
          {/* Stacked image previews — absolute right, all images present, active one visible */}
          <div className="max-md:hidden absolute right-0 top-0 z-[1] pointer-events-none w-[200px] xl:w-[350px] aspect-[3/2] overflow-hidden">
            {PROJECTS.map((project) => (
              <img
                key={project.slug}
                src={project.thumbnail}
                alt="Project"
                loading="lazy"
                width="400"
                height="500"
                className={`absolute inset-0 transition-all duration-500 w-full h-full object-cover ${
                  selectedProject === project.slug ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>

          {/* Projects list */}
          <div className="flex flex-col max-md:gap-10">
            {PROJECTS.map((project, index) => (
              <Project
                key={project.slug}
                index={index}
                project={project}
                selectedProject={selectedProject}
                onMouseEnter={setSelectedProject}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
