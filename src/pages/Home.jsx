import Banner from '../components/Banner';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Experiences from '../components/Experiences';
import ProjectList from '../components/ProjectList';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div>
      <Banner />
      <AboutMe />
      <Skills />
      <Experiences />
      <ProjectList />
      <Contact />
    </div>
  );
}