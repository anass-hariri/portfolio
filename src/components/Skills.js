import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPython,
  faJs,
  faAngular,
  faReact,
  faNodeJs,
  faVuejs,
  faJava,
  faHtml5,
  faBootstrap,
  faDocker,
  faPhp,
  faCss3Alt,
  faGitAlt
} from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase,
  faCogs,
  faProjectDiagram,
  faChartBar,
  faBrain,
  faGlobe
} from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../contexts/LanguageContext';
import fr from '../locales/fr';
import en from '../locales/en';

/* --------------------------------------------------
  SkillBar – single skill with animated progress bar
-------------------------------------------------- */
const SkillBar = ({ skill, percentage, icon, variants }) => {
  const {language} = useLanguage();
  const translations = language === 'fr' ? fr.skills : en.skills;
  const getLevel = (pct) =>
    pct >= 80 ? translations.Advanced : pct >= 50 ? translations.Intermediate : translations.Beginner;

  return (
    <motion.div variants={variants} className="w-full p-2">
      <div className="bg-white dark:bg-gray-800/70 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full">
        <div className="flex items-center gap-3 mb-3">
          <div className="text-blue-600 dark:text-blue-400 text-xl">
            <FontAwesomeIcon icon={icon} />
          </div>
          <h4 className="font-semibold text-gray-800 dark:text-white text-base">
            {skill}
          </h4>
        </div>

        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-1.5">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 1.3, delay: 0.2, type: 'spring' }}
            className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
          />
        </div>

        <div className="flex justify-between text-xs font-medium">
          <span className="text-gray-500 dark:text-gray-400">{getLevel(percentage)}</span>
          <span className="text-blue-600 dark:text-blue-400">{percentage}%</span>
        </div>
      </div>
    </motion.div>
  );
};

/* --------------------------------------------------
  Categories with your skills
-------------------------------------------------- */
const categories = [
  {
    name: 'Languages',
    skills: [
      { skill: 'Python', percentage: 90, icon: faPython },
      { skill: 'Java', percentage: 60, icon: faJava },
      { skill: 'C++', percentage: 50, icon: faProjectDiagram },
      { skill: 'C', percentage: 50, icon: faProjectDiagram },
      { skill: 'JavaScript', percentage: 80, icon: faJs },
      { skill: 'TypeScript', percentage: 80, icon: faJs },
      { skill: 'PHP', percentage: 50, icon: faPhp },
      { skill: 'HTML5', percentage: 85, icon: faHtml5 },
      { skill: 'CSS3', percentage: 80, icon: faCss3Alt }
    ]
  },
  {
    name: 'Frameworks & Libraries',
    skills: [
      { skill: 'Vue.js', percentage: 85, icon: faVuejs },
      { skill: 'Node.js', percentage: 80, icon: faNodeJs },
      { skill: 'React.js', percentage: 75, icon: faReact },
      { skill: 'Angular', percentage: 80, icon: faAngular },
      { skill: 'Cesium.js', percentage: 60, icon: faGlobe },
      { skill: 'FastAPI', percentage: 75, icon: faPython },
      { skill: 'Flask', percentage: 70, icon: faPython },
      { skill: 'Bootstrap', percentage: 65, icon: faBootstrap }
    ]
  },
  {
    name: 'Databases',
    skills: [
      { skill: 'SQLite', percentage: 70, icon: faDatabase },
      { skill: 'MySQL', percentage: 75, icon: faDatabase },
      { skill: 'PostgreSQL', percentage: 75, icon: faDatabase }
    ]
  },
  {
    name: 'Tests & CI/CD',
    skills: [
      { skill: 'Playwright', percentage: 70, icon: faProjectDiagram },
      { skill: 'Cypress', percentage: 40, icon: faProjectDiagram },
      { skill: 'SonarLint', percentage: 50, icon: faProjectDiagram },
      { skill: 'GitLab CI/CD', percentage: 55, icon: faCogs }
    ]
  },
  {
    name: 'Tools',
    skills: [
      { skill: 'Docker', percentage: 60, icon: faDocker },
      { skill: 'Git', percentage: 70, icon: faGitAlt },
      { skill: 'Jira', percentage: 70, icon: faProjectDiagram }
    ]
  },
  {
    name: 'AI / Machine Learning',
    skills: [
      { skill: 'Reinforcement Learning', percentage: 50, icon: faBrain },
      { skill: 'YOLO', percentage: 55, icon: faBrain },
      { skill: 'SAM', percentage: 50, icon: faBrain },
      { skill: 'PyTorch', percentage: 50, icon: faBrain },
      { skill: 'NumPy', percentage: 70, icon: faChartBar },
      { skill: 'Pandas', percentage: 60, icon: faChartBar }
    ]
  },
  {
    name: 'Methodologies',
    skills: [
      { skill: 'Scrum', percentage: 75, icon: faProjectDiagram }
    ]
  }
];

/* --------------------------------------------------
  Main component
-------------------------------------------------- */
const ProgrammingSkills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const {language} = useLanguage();
  const translations = language === 'fr' ? fr.skills : en.skills;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.25 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section
      id="skills"
      className="w-full py-20 px-4 sm:px-8 lg:px-16 bg-white text-gray-800 dark:bg-[#01161E] dark:text-[#AEC3B0]"
      ref={ref}
    >
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-2 inline-block">{translations.intro}</h2>
          <div className="mx-auto w-24 h-1 bg-blue-600 rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl text-left">
            {translations.Paragraph}
          </p>
        </motion.div>

        {/* Category grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-gray-50 dark:bg-gray-800/60 rounded-3xl p-6 shadow border border-gray-100 dark:border-gray-700 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4 text-center">
                {category.name}
              </h3>

              <div className="flex grow flex-wrap -mx-2">
                {category.skills.map((skillItem, i) => (
                  <SkillBar
                    key={i}
                    skill={skillItem.skill}
                    percentage={skillItem.percentage}
                    icon={skillItem.icon}
                    variants={itemVariants}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProgrammingSkills;
