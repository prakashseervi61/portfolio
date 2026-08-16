import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const Project = ({ index, project, selectedProject, onMouseEnter }) => {
  const externalLinkSVGRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => () => timelineRef.current?.kill(), []);

  const handleMouseEnter = () => {
    onMouseEnter(project.slug);

    const arrowLine = externalLinkSVGRef.current?.querySelector('#arrow-line');
    const arrowCurb = externalLinkSVGRef.current?.querySelector('#arrow-curb');
    const box = externalLinkSVGRef.current?.querySelector('#box');

    timelineRef.current?.kill();

    gsap.set(box, {
      opacity: 0,
      strokeDasharray: box ? box.getTotalLength() : 0,
      strokeDashoffset: box ? box.getTotalLength() : 0,
    });
    gsap.set(arrowLine, {
      opacity: 0,
      strokeDasharray: arrowLine ? arrowLine.getTotalLength() : 0,
      strokeDashoffset: arrowLine ? arrowLine.getTotalLength() : 0,
    });
    gsap.set(arrowCurb, {
      opacity: 0,
      strokeDasharray: arrowCurb ? arrowCurb.getTotalLength() : 0,
      strokeDashoffset: arrowCurb ? arrowCurb.getTotalLength() : 0,
    });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    timelineRef.current = tl;
    tl.to(externalLinkSVGRef.current, {
      autoAlpha: 1,
    })
      .to(box, {
        opacity: 1,
        strokeDashoffset: 0,
      })
      .to(
        arrowLine,
        {
          opacity: 1,
          strokeDashoffset: 0,
        },
        '<0.2'
      )
      .to(arrowCurb, {
        opacity: 1,
        strokeDashoffset: 0,
      })
      .to(
        externalLinkSVGRef.current,
        {
          autoAlpha: 0,
        },
        '+=1'
      );
  };

  const handleMouseLeave = () => {
    onMouseEnter(null);
    timelineRef.current?.kill();
    timelineRef.current = null;
  };

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="project-item group leading-none py-5 border-b first:!pt-0 last:pb-0 last:border-none md:group-hover/projects:opacity-30 md:hover:!opacity-100 transition-all"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {selectedProject === null && (
        <img
          src={project.thumbnail}
          alt={project.title}
          width="300"
          height="200"
          className="w-full object-cover mb-6 aspect-[3/2] object-top md:hidden"
          loading="lazy"
        />
      )}
      <div className="flex gap-2 md:gap-5">
        <div className="font-anton text-muted-foreground">
          _{(index + 1).toString().padStart(2, '0')}.
        </div>
        <div className="">
          <h4 className="text-4xl sm:text-6xl flex gap-4 font-anton transition-all duration-700 bg-gradient-to-r from-primary to-foreground from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group-hover:bg-left">
            {project.title}
            <span className="text-foreground opacity-0 group-hover:opacity-100 transition-all">
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
                ref={externalLinkSVGRef}
              >
                <path
                  id="box"
                  d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                ></path>
                <path id="arrow-line" d="M10 14 21 3"></path>
                <path id="arrow-curb" d="M15 3h6v6"></path>
              </svg>
            </span>
          </h4>
          <div className="mt-2 flex flex-wrap gap-3 text-muted-foreground text-xs">
            {project.techStack
              .slice(0, 3)
              .map((tech, idx, stackArr) => (
                <div
                  className="gap-3 flex items-center"
                  key={tech}
                >
                  <span>{tech}</span>
                  {idx !== stackArr.length - 1 && (
                    <span className="inline-block size-2 rounded-full bg-background-light"></span>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Project;