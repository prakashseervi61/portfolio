import { useParams, Navigate } from 'react-router-dom';
import { PROJECTS } from '../lib/data';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { useEffect } from 'react';

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  useEffect(() => {
    if (!project) return;
    const previous = document.title;
    document.title = `${project.title} — Prakash`;
    return () => {
      document.title = previous;
    };
  }, [project]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="pt-5 pb-14">
      <div className="container">
        <a
          href="/"
          className="mb-16 inline-flex gap-2 items-center group h-12"
          onClick={(e) => {
            e.preventDefault();
            window.history.back();
          }}
        >
          <ArrowLeft className="group-hover:-translate-x-1 group-hover:text-primary transition-all duration-300" />
          Back
        </a>

        <div className="top-0 min-h-[calc(100svh-100px)] flex" id="info">
          <div className="relative w-full">
            <div className="flex items-start gap-6 mx-auto mb-10 max-w-[635px]">
              <h1 className="text-4xl md:text-[60px] leading-none font-anton overflow-hidden">
                <span className="inline-block">{project.title}</span>
              </h1>

              <div className="flex gap-2">
                {project.sourceCode && (
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-primary"
                    aria-label="View source code"
                    title="View source code"
                  >
                    <Github size={30} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-primary"
                    aria-label="View live site"
                    title="View live site"
                  >
                    <ExternalLink size={30} />
                  </a>
                )}
              </div>
            </div>

            <div className="max-w-[635px] space-y-7 pb-20 mx-auto">
              <div>
                <p className="text-muted-foreground font-anton mb-3">
                  Year
                </p>
                <div className="text-lg">{project.year}</div>
              </div>
              <div>
                <p className="text-muted-foreground font-anton mb-3">
                  Tech & Technique
                </p>
                <div className="text-lg">
                  {project.techStack.join(', ')}
                </div>
              </div>
              <div>
                <p className="text-muted-foreground font-anton mb-3">
                  The Problem
                </p>
                <div className="text-lg">{project.problem}</div>
              </div>
              {project.solution && (
                <div>
                  <p className="text-muted-foreground font-anton mb-3">
                    What It Does
                  </p>
                  <div className="text-lg" dangerouslySetInnerHTML={{ __html: project.solution }} />
                </div>
              )}
              {project.role && (
                <div>
                  <p className="text-muted-foreground font-anton mb-3">
                    My Role
                  </p>
                  <div className="text-lg" dangerouslySetInnerHTML={{ __html: project.role }} />
                </div>
              )}
              {project.challenge && (
                <div>
                  <p className="text-muted-foreground font-anton mb-3">
                    Challenge & Solution
                  </p>
                  <div className="text-lg">{project.challenge}</div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="relative flex flex-col gap-2 max-w-[800px] mx-auto" id="images">
          {project.images.map((image, i) => (
            <div
              key={image}
              role="img"
              aria-label={`${project.title} screenshot ${i + 1} of ${project.images.length}`}
              className="group relative w-full aspect-[750/400] bg-background-light"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center 50%',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <a
                href={image}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View full image"
                title="View full image"
                className="absolute top-4 right-4 bg-background/70 text-foreground size-12 inline-flex justify-center items-center transition-all opacity-0 hover:bg-primary hover:text-primary-foreground group-hover:opacity-100 focus-visible:opacity-100"
              >
                <ExternalLink />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
