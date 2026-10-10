import { gsap, useGSAP } from '../lib/gsap';
import { useRef, useState } from 'react';
import { PROJECTS } from '../lib/data';
import Project from './Project';

export default function ProjectList() {
  const projectsRef = useRef(null);
  const listRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  // Vertical offset of the preview, kept aligned with the hovered row instead
  // of sitting at a fixed spot in the corner.
  const [previewTop, setPreviewTop] = useState(0);

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

  /*
   * Vertically centre the preview on the hovered row and clamp it inside the
   * list so it never spills past the first or last project.
   */
  const handleEnter = (slug, element) => {
    setSelectedProject(slug);

    const list = listRef.current;
    if (!list || !element) return;

    const preview = list.querySelector('[data-project-preview]');
    if (!preview) return;

    const previewHeight = preview.offsetHeight;
    const rowTop = element.offsetTop;
    const rowHeight = element.offsetHeight;

    const centered = rowTop + rowHeight / 2 - previewHeight / 2;
    const maxTop = Math.max(0, list.offsetHeight - previewHeight);

    setPreviewTop(Math.min(Math.max(0, centered), maxTop));
  };

  const handleLeave = () => {
    setSelectedProject(null);
  };

  return (
    <section className="py-24" id="my-projects" ref={projectsRef}>
      <div className="container">
        <h2 className="mb-14 text-4xl md:text-6xl font-thin slide-up">
          My Projects
        </h2>

        <div
          className="group/projects relative"
          onMouseLeave={handleLeave}
          ref={listRef}
        >
          {/* Preview slides to whichever project is hovered; all images stay
              mounted and only the active one is opaque. */}
          <div
            data-project-preview
            className={`max-md:hidden absolute right-0 z-[1] pointer-events-none w-[200px] xl:w-[350px] aspect-[3/2] overflow-hidden transition-[top,opacity] duration-300 ease-out ${
              selectedProject ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ top: previewTop }}
          >
            {PROJECTS.filter((project) => project.thumbnail).map((project) => (
              <img
                key={project.slug}
                src={project.thumbnail}
                alt=""
                loading="lazy"
                width="400"
                height="500"
                className={`absolute inset-0 transition-opacity duration-300 w-full h-full object-cover ${
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
                onMouseEnter={handleEnter}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
