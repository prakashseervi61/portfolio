import { PROJECTS } from '../lib/data';
import Project from './Project';

export default function ProjectList() {
  return (
    <section className="py-16" id="my-projects">
      <div className="container">
        <h2 className="mb-14 text-4xl md:text-6xl font-anton uppercase tracking-wider text-muted-foreground">
          My Projects
        </h2>

        <div className="flex flex-col gap-8">
          {PROJECTS.map((project, index) => (
            <Project
              key={project.slug}
              index={index}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
