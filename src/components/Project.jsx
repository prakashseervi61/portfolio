import { Link } from 'react-router-dom';

const Project = ({ index, project }) => {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="block group leading-none py-4 border-b border-border last:border-none transition-all relative cursor-pointer"
    >
      <div className="flex items-start gap-5 md:gap-8 md:flex-nowrap">
        <div className="min-w-0 flex-1">
          <div className="font-anton text-muted-foreground shrink-0 mb-1">
            _{(index + 1).toString().padStart(2, '0')}.
          </div>
          <div className="flex items-baseline gap-2">
            <h3 className="text-4xl sm:text-6xl font-anton text-foreground group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
            <span className="text-xs font-anton text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300">
              view
            </span>
          </div>
          <div className="mt-3 flex flex-wrap gap-2 text-sm text-muted-foreground">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-background-light border border-border rounded-full hover:bg-accent hover:text-primary-foreground transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Project;
