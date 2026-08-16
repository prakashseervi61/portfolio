import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { PROJECTS } from '../lib/data';
import Project from './Project';
import { useEffect } from 'react';

// Register GSAP plugins
gsap.registerPlugin(useGSAP);

export default function ProjectList() {
  const projectsRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useGSAP(
    () => {
      const slideUpEl =
        projectsRef.current?.querySelectorAll('.slide-up');

      if (!slideUpEl?.length) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 80%',
          end: 'bottom 80%',
          scrub: 0.5,
        },
      });

      tl.from('.slide-up', {
        opacity: 0,
        y: 40,
        ease: 'none',
        stagger: 0.4,
      });
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

      tl.to(projectsRef.current, {
        y: -150,
        opacity: 0,
      });
    },
    { scope: projectsRef },
  );

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = projectsRef.current.getBoundingClientRect();
      setX(e.clientX - rect.left);
      setY(e.clientY - rect.top);
    };

    const el = projectsRef.current;
    el?.addEventListener('mousemove', handleMouseMove);
    return () => {
      el?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="py-24" id="my-projects" ref={projectsRef}>
      <div className="container">
        {/* Section title */}
        <h2 className="mb-14 text-4xl md:text-6xl font-thin slide-up">
          My Projects
        </h2>

        <div className="relative group/projects">
          {/* Image preview container */}
          <div
            className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-1/2"
            style={{ left: x, top: y }}
          >
            {selectedProject && (
              <div className="w-[250px] h-[200px] overflow-hidden rounded-lg shadow-2xl bg-white/90 backdrop-blur-sm transition-all duration-300">
                <img
                  src={PROJECTS.find((p) => p.slug === selectedProject)?.thumbnail || ''}
                  alt="Project preview"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            )}
          </div>

          {/* Projects list */}
          <div className="space-y-6">
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