import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Images des projets
import ppmoj from '../assets/ppmoj.png';
import school from '../assets/school.jpg';
import chu from '../assets/chu.jpg';
import hyblab from '../assets/hyblab.webp';
import Dijkstra from '../assets/Dijkstra.png';
import santa from '../assets/santa.png';
import { useLanguage } from '../contexts/LanguageContext';
import fr from '../locales/fr';
import en from '../locales/en';


// Variantes Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const projectCardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: [0.22,1,0.36,1] } }
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const {language} = useLanguage()

  const translations = language === 'fr' ? fr.projects : en.projects;

  const allProjects = [
    {
      title: translations.project_1.title,
      date: translations.project_1.date,
      description: translations.project_1.description,
      skills: translations.project_1.skills,
      image: ppmoj,
    },
    {
      title: translations.project_2.title,
      date: translations.project_2.date,
      description: translations.project_2.description,
      skills: translations.project_2.skills,
      image: hyblab,
    },
    {
      title: translations.project_3.title,
      date: translations.project_3.date,
      description: translations.project_3.description,
      skills: translations.project_3.skills,
      image: school,
    },
    {
      title: translations.project_4.title,
      date: translations.project_4.date,
      description: translations.project_4.description,
      skills: translations.project_4.skills,
      image: santa,
    },
    {
      title: translations.project_5.title,
      date: translations.project_5.date,
      description: translations.project_5.description,
      skills: translations.project_5.skills,
      image: Dijkstra,
    },
    {
      title: translations.project_6.title,
      date: translations.project_6.date,
      description: translations.project_6.description,
      skills: translations.project_6.skills,
      image: chu,
    },
  ];

  const ProjectCard = ({ project }) => {
    const [isActive, setIsActive] = useState(false); // Overlay indépendant

    return (
      <motion.div
        variants={projectCardVariants}
        className="relative w-full h-96 rounded-3xl overflow-hidden cursor-pointer group shadow-xl border border-indigo-200 dark:border-indigo-700 bg-white/90 dark:bg-gray-900/80 backdrop-blur-lg"
        onClick={() => setIsActive(!isActive)}
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
      >
        {/* Background Image */}
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 group-hover:from-indigo-900/40 transition-colors duration-500" />

        {/* Title & date */}
        <div className="absolute bottom-6 left-6 right-6 z-10">
          <h4 className="text-xl font-bold text-white drop-shadow">{project.title}</h4>
          <p className="text-sm text-gray-200">{project.date}</p>
        </div>

        {/* Details overlay */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 p-6 flex flex-col justify-center text-sm text-gray-200 backdrop-blur-sm bg-black/60 pointer-events-none"
        >
          <p className="mb-3 max-h-40 overflow-y-auto whitespace-pre-line scrollbar-hide text-left">{project.description}</p>
          <div className="flex items-center justify-center flex-wrap gap-2">
            {project.skills.map((skill, i) => (
              <span key={i} className="text-[0.65rem] font-medium px-2 py-0.5 bg-indigo-300/30 text-indigo-100 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="projects" ref={ref} className="w-full py-20 px-4 sm:px-8 lg:px-16 bg-white dark:bg-[#01161E]">
      <motion.div initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={containerVariants} className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div variants={projectCardVariants} className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-2 inline-block">
            {translations.intro}
          </h2>
          <div className="mx-auto w-24 h-1 bg-indigo-500 rounded-full" />
        </motion.div>

        {/* Grid Projects 1/2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {allProjects.map((project, idx) => (
            <ProjectCard project={project} key={idx} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
