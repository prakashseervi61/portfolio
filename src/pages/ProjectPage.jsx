import { useParams, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../lib/data';
import ProjectDetails from '../components/ProjectDetails';
import { useEffect } from 'react';

export default function ProjectPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const project = PROJECTS.find((p) => p.slug === slug);
    if (!project) {
      navigate('/');
    }
  }, [slug, navigate]);

  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return null; // Will redirect via useEffect
  }

  return <ProjectDetails project={project} />;
}