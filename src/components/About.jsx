import { Download, CheckCircle2, FileCode, AppWindow, GitBranch } from 'lucide-react';
import StickerLayer from './StickerLayer';

const Highlight = ({ icon: Icon, children }) => (
  <li className="flex items-center gap-3">
    <Icon className="w-5 h-5 text-orange-600 flex-shrink-0" />
    <span className="text-gray-700">{children}</span>
  </li>
);

const SkillItem = ({ name }) => (
  <div className="flex items-center gap-2.5 p-2 bg-gray-50/70 border border-gray-200/80 rounded-xl
                  transition-all duration-300
                  hover:border-orange-300 hover:bg-orange-50/70 hover:-translate-y-px hover:shadow-sm">
    <CheckCircle2 className="w-5 h-5 text-orange-500" />
    <span className="font-medium text-sm text-gray-700">{name}</span>
  </div>
);

const SkillColumn = ({ title, skills }) => (
  <div className="flex flex-col gap-4">
    <div className="flex items-center gap-2">
      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
      <h4 className="text-sm font-bold uppercase tracking-wider text-gray-600">{title}</h4>
    </div>
    <div className="space-y-2">
      {skills.map((skill) => <SkillItem key={skill} name={skill} />)}
    </div>
  </div>
);

const About = () => {
  const skills = {
    Languages: ["C++","Python", "JavaScript", "SQL"],
    Frameworks: ["Spring Boot", "React", "Tailwind CSS"],
    Tools: ["VS Code", "Git", "GitHub", "MySQL",],
  };

  return (
    <section
      id="about"
      className="scroll-mt-24 relative overflow-hidden w-full py-16 sm:py-20
                  bg-[#fffaf3]
                  bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] 
                  bg-[size:40px_40px]"
    >
      <StickerLayer variant="about" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-800">
            About{' '}
            <span className="bg-gradient-to-r from-[#ff9f45] to-[#d35400] text-transparent bg-clip-text">
              Me
            </span>
          </h2>
          <p className="mt-2 text-lg text-gray-500">Who I am</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Optimized About Card */}
          <div className="bg-white/80 border border-black/5 rounded-3xl shadow-lg
                          transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 p-8">
            <p className="text-gray-600 leading-relaxed">
              I’m a passionate web developer focused on building clean, responsive, and reliable web applications. I enjoy turning complex problems into simple, maintainable solutions with strong attention to detail and a commitment to writing readable code.
            </p>
            <ul className="mt-6 space-y-4">
              <Highlight icon={FileCode}>Strong in C++ and Python with solid problem-solving skills.</Highlight>
              <Highlight icon={AppWindow}>Building modern, responsive frontends with React & Tailwind.</Highlight>
              <Highlight icon={GitBranch}>Proficient in version control and collaborative development workflows.</Highlight>
            </ul>
            <a 
              href="resume.pdf" 
              download="Prakash_Resume.pdf" 
              className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-orange-600
                          transition-transform duration-300 hover:translate-x-1"
            >
              Download Resume <Download />
            </a>
          </div>

          {/* Optimized Skills Card */}
          <div className="bg-white/80 border border-black/5 rounded-3xl shadow-lg
                          transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 p-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <SkillColumn title="Languages" skills={skills.Languages} />
              <SkillColumn title="Frameworks" skills={skills.Frameworks} />
              <SkillColumn title="Tools" skills={skills.Tools} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
