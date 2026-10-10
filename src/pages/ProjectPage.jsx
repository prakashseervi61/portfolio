import { useParams, Navigate } from 'react-router-dom';
import { PROJECTS } from '../lib/data';
import ProjectDetails from '../components/ProjectDetails';
import { useEffect } from 'react';

export default function ProjectPage() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  // Give each project its own title instead of leaving the generic site title.
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

  return <ProjectDetails project={project} />;
}