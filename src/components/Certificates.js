import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const certificates = [
  {
    id: 1,
    title: "JavaScript Mastery",
    issuer: "Udemy",
    date: "nov. 2024",
    skills: ["JavaScript"],
    credentialId: "UC-20ae1bf2-9e0f-418e-aa10-7453cc6290fa",
    logo: "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
  },
  {
    id: 2,
    title: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    date: "oct. 2024",
    skills: ["React.js", "jQuery", "HTML", "CSS"],
    credentialId: "fccb6009adb-b9f0-49b0-805b-19493c8bd980-fedl",
    logo: "https://www.freecodecamp.org/icons/icon-96x96.png"
  },
  {
    id: 3,
    title: "Python Bootcamp: From Zero to Hero",
    issuer: "Udemy",
    date: "oct. 2024",
    skills: ["Python"],
    credentialId: "UC-4806a7b7-43cd-45b5-940f-16992e5ab998",
    logo: "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
  }
];

// Variants animés partagés
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.25 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const CertificateCard = ({ cert }) => (
  <motion.div 
    variants={itemVariants} 
    whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(99, 102, 241, 0.2)" }}
    className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-gray-700 cursor-pointer transition-shadow duration-300"
  >
    <div className="flex items-center gap-6">
      <img 
        src={cert.logo} 
        alt={`${cert.issuer} logo`} 
        className="w-16 h-16 object-contain rounded-lg flex-shrink-0"
        loading="lazy"
      />
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{cert.title}</h3>
            <p className="text-indigo-600 dark:text-indigo-400 font-medium">{cert.issuer}</p>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-4 py-1 rounded-full select-none">
            {cert.date}
          </span>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {cert.skills.map((skill, idx) => (
            <span 
              key={idx} 
              className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/70 text-indigo-800 dark:text-indigo-200"
            >
              {skill}
            </span>
          ))}
        </div>

        <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 pt-3 select-text">
          <span className="font-medium">ID:</span> {cert.credentialId}
        </p>
      </div>
    </div>
  </motion.div>
);

const Certificates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.15, once: true });

  return (
    <section 
      id="certificates"
      ref={ref}
      className="w-full py-24 px-6 sm:px-12 lg:px-20 bg-white dark:bg-[#01161E]"
    >
      <motion.div
        className="max-w-5xl mx-auto"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.header variants={itemVariants} className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-2">
            Certifications
          </h2>
          <div className="mx-auto w-24 h-1 rounded-full bg-indigo-500 dark:bg-indigo-400"></div>
        </motion.header>

        <div className="grid gap-8 sm:grid-cols-2">
          {certificates.map(cert => (
            <CertificateCard key={cert.id} cert={cert} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certificates;
