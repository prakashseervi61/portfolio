import React from 'react';
import { Github, Link } from 'lucide-react'; // Only need Link and Github for buttons
import StickerLayer from './StickerLayer';

// Import images
import myflixImg from "../assets/images/myFlix.png";
import todoImg from "../assets/images/ToDo.png";

const TechChip = ({ children }) => (
  <div className="px-2.5 py-1 text-xs font-semibold text-gray-700 bg-gray-100 border border-gray-200/80 rounded-full">
    {children}
  </div>
);

const ProjectCard = ({ project }) => (
  <div className="bg-white/80 border border-black/5 rounded-3xl shadow-lg
                  transition-all duration-300 hover:shadow-2xl hover:-translate-y-1
                  flex flex-col overflow-hidden">
    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="block group">
      <div className="aspect-[16/9] w-full overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 select-none" 
          loading="lazy" 
          decoding="async" 
          width="640" // Common 16:9 width
          height="360" // Common 16:9 height
        />
      </div>
    </a>

    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
      <p className="mt-2 text-sm text-gray-600 leading-relaxed flex-grow">
        {project.description}
      </p>
      
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map(tech => <TechChip key={tech}>{tech}</TechChip>)}
      </div>

      <div className="mt-6 pt-4 border-t border-black/5 flex items-center gap-4">
        {project.links.live && (
          <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-br from-[#ff9f45] to-[#d35400] rounded-full shadow-[0_4px_15px_rgba(211,84,0,0.2)] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
            <Link className="w-4 h-4" /> Live Demo
          </a>
        )}
        {project.links.github && (
          <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-orange-600 border-2 border-orange-400 rounded-full transition-colors duration-300 hover:bg-orange-50">
            <Github className="w-4 h-4" /> View Code
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "myFlix",
      description: "A dynamic web application to browse, view details, search/filter, and manage a personalized watchlist of movies.",
      tech: ["React", "Tailwind CSS", "API Integration", "JavaScript"],
      links: { github: "https://github.com/prakashseervi61/myFlix", live: "https://prakashseervi61.github.io/myFlix/" },
      image: myflixImg,
    },
    {
      title: "Todo List Web App",
      description: "A simple yet effective To-Do list application allowing users to create, edit, delete, and mark tasks as complete, with data persisting in local storage.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      links: { github: "https://github.com/prakashseervi61/Todo-List-Web-App", live: "https://prakashseervi61.github.io/Todo-List-Web-App/" },
      image: todoImg,
    },
  ];

  return (
    <section
      id="projects"
      className="scroll-mt-24 relative overflow-hidden w-full py-16 sm:py-20
                 bg-[#fffaf3]
                 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] 
                 bg-[size:40px_40px]"
    >
      <StickerLayer variant="projects" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-800">
            Projects
          </h2>
          <p className="mt-2 text-lg text-gray-500">A few things I’ve built</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a href="https://github.com/prakashseervi61" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 text-lg font-semibold text-white bg-gradient-to-br from-[#ff9f45] to-[#d35400] rounded-full shadow-[0_10px_25px_rgba(211,84,0,0.3)] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
