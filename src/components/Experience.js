import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import orange from '../assets/orange.jpeg';
import cicd from '../assets/CI-CD2.png';
import Playwright from '../assets/playwright.png';
import gitlab from '../assets/gitlab_logo.png';
import vue from '../assets/vue.jpg';
import liege from '../assets/liegeuniv.png';
import orange_marine from '../assets/orange_marine_logo.jpg';
import FastAPI from '../assets/FastAPI.png';
import docker from '../assets/docker.jpg';
import sonarlint from '../assets/sonarlint.png'
import Cesium from '../assets/cesium.png';
import Flask from '../assets/flask.png';
import PostgreSQL from '../assets/postgresql.png'
import { useLanguage } from '../contexts/LanguageContext';
import fr from '../locales/fr';
import en from '../locales/en';



const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const {language} = useLanguage()

  const translations = language === 'fr' ? fr.experience : en.experience;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const experiences = [
    {
      id: 1,
      title: translations.experience_1.title,
      date: translations.experience_1.date,
      company: translations.experience_1.company,
      imageUrl: [
        orange,
        orange_marine
      ],
      summary: translations.experience_1.summary,
      tasks: translations.experience_1.tasks,
      techImages: [
        vue,
        FastAPI,
        Playwright,
        docker,
        sonarlint,
        cicd,
        gitlab
      ],
      skills: translations.experience_1.skills
    },
    {
      id: 2,
      title: translations.experience_2.title,
      date: translations.experience_2.date,
      company: translations.experience_2.company,
      imageUrl: [
        liege
      ],
      summary: translations.experience_2.summary,
      tasks: translations.experience_2.tasks,
      techImages: [
        Cesium,
        Flask,
        PostgreSQL
      ],
      skills: translations.experience_2.skills
    },
  ];


  return (
    <section
      id="experience"
      className="w-full py-24 px-4 sm:px-8 lg:px-24 bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-300"
      ref={ref}
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-5xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-2 inline-block">{translations.intro}</h2>
          <div className="mx-auto w-24 h-1 bg-indigo-500 rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            variants={timelineVariants}
            className="absolute left-6 sm:left-8 top-0 h-full w-1.5 bg-indigo-400 bg-opacity-50 dark:bg-indigo-600 origin-top"
          />

          <div className="space-y-12 sm:space-y-16">
            {experiences.map((experience) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className="relative pl-16 sm:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-6 sm:top-8 transform -translate-y-1/2 -translate-x-1/2">
                  <div className="w-7 h-7 rounded-full bg-indigo-700 border-4 border-indigo-300 flex items-center justify-center shadow-md">
                    <div className="w-2.5 h-2.5 rounded-full bg-white dark:bg-gray-100"></div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800/85 backdrop-blur-md rounded-2xl p-7 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
                    <div className="flex flex-col items-start gap-6 sm:gap-8">
                      {experience.imageUrl.map((logo, index) => (
                      <img
                        key={index}
                        src={logo}
                        alt={`Logo ${experience.company}`}
                        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-indigo-400 dark:border-indigo-500 flex-shrink-0"
                      />
                      ))}
                    </div>


                    <div className="flex-1 w-full">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-tight">{experience.title}</h3>
                          <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-base sm:text-lg">{experience.company}</p>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base font-medium">{experience.date}</p>
                      </div>

                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 space-y-4">
                        <div className="bg-indigo-50 dark:bg-gray-700 p-4 rounded-lg border border-indigo-100 dark:border-gray-600 shadow-inner">
                          <p className="text-base text-gray-700 dark:text-gray-200 leading-relaxed">
                            {experience.summary}
                          </p>
                        </div>

                        <div className="mt-5">
                          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">{translations.Key_Responsibilities}</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {experience.tasks.map((task, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                                transition={{ delay: 0.3 + index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className="flex items-start gap-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
                              >
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-lg">
                                  ✔
                                </div>
                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed flex-grow">{task}</p>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-5">
                          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">{translations.skills}</h4>
                          <div className="flex items-center justify-center flex-wrap gap-2">
                            {experience.skills.map((skill, index) => (
                              <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.4 + index * 0.03, duration: 0.3 }}
                                className="inline-block bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 text-xs font-semibold px-3 py-1 rounded-full shadow-sm"
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 flex flex-wrap gap-4 justify-center">
                    {experience.techImages.map((tech, index) => (
                      <img
                        key={index}
                        src={tech}
                        alt="Technology logo"
                        className="h-14 w-14 rounded-full object-contain p-1 bg-white dark:bg-gray-700 shadow-md transform hover:scale-105 transition-transform duration-200"
                      />
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;