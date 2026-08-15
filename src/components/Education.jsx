import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.6 },
});

const education = [
  { degree: 'B.Tech in Information Technology', institution: 'Sri Krishna College of Technology, Coimbatore', duration: '2024 – Present', note: 'CGPA: 7.5' },
  { degree: '12th Grade', institution: 'Ruby Matric HR SEC School', duration: '2023 – 2024', note: 'Percentage: 81.16%' },
  { degree: '10th Grade', institution: 'Ruby Matric HR SEC School', duration: '2021 – 2022', note: 'Percentage: 77.2%' },
];

const Education = () => {
  return (
    <section id="education" className="py-25 sm:py-32">
      <div className="container max-w-[1148px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Education" className="mb-16" />

        <div className="space-y-14">
          {education.map((edu, i) => (
            <motion.div key={i} {...fadeUp(i * 0.15)}>
              <p className="text-xl text-muted">{edu.institution}</p>
              <p className="text-4xl sm:text-5xl font-anton leading-none mt-3 mb-2">{edu.degree}</p>
              <p className="text-lg text-muted">{edu.duration}</p>
              <p className="mt-2 text-accent font-medium">{edu.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
