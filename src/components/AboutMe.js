import { useRef, useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import fr from "../locales/fr";
import en from "../locales/en";
import pdp from "../assets/profil.jpeg";
import Popup from "./Popup";

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const [openContact, setOpenContact] = useState(false);
  const { language } = useLanguage();
  const translations = language === "fr" ? fr.about : en.about;

  useEffect(() => {
    document.body.style.overflow = openContact ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openContact]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
    },
  };

  const blockClass =
    "flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 p-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg rounded-3xl shadow-xl dark:shadow-blue-800/10 border border-gray-100 dark:border-gray-800 w-full max-w-3xl";

  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 sm:py-32 md:py-40 bg-white text-gray-800 dark:bg-[#01161E] dark:text-[#AEC3B0]"
    >

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 flex flex-col items-center"
      >
        <motion.div variants={itemVariants} className="mb-24 text-center w-full">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-600 dark:to-blue-400">
            {translations.title}
          </h2>
          <div className="mx-auto mt-4 h-2 w-56 bg-gradient-to-r from-blue-700 to-blue-500 rounded-full" />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-x-20 gap-y-16 w-full">
          <motion.div
            variants={imageVariants}
            className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] overflow-hidden shadow-2xl ring-4 ring-blue-700/50 dark:ring-blue-500/30 rounded-2xl"
          >
            <img
              src={pdp}
              alt="Profile"
              className="w-full h-full object-contain bg-gray-200 dark:bg-gray-700"
            />
          </motion.div>

          <div className="relative flex flex-col items-center md:items-start text-center md:text-left gap-y-8 flex-grow">
            <div className="absolute inset-0 -z-10 flex justify-center items-center pointer-events-none">
              <div className="w-[90%] h-[90%] rounded-full bg-gradient-to-br
                              from-blue-700/30 via-blue-600/20 to-transparent
                              blur-3xl opacity-70
                              dark:from-blue-600/30 dark:via-blue-500/20" />
            </div>

            <motion.div variants={itemVariants} className={blockClass}>
              <p className="text-lg md:text-xl font-medium leading-relaxe text-gray-900 dark:text-white">
                {translations.blocks.intro.t1}
                <span className="font-semibold text-blue-800 dark:text-blue-600">{translations.blocks.intro.h1}</span>
                {translations.blocks.intro.t2}
                <span className="font-semibold text-blue-800 dark:text-blue-600">{translations.blocks.intro.h2}</span>
                {translations.blocks.intro.t3}
                <span className="font-semibold text-blue-800 dark:text-blue-600">{translations.blocks.intro.h3}</span>
                {translations.blocks.intro.t4}
                <span className="font-semibold text-blue-800 dark:text-blue-600">{translations.blocks.intro.h4}</span>
                {translations.blocks.intro.t5}
                <span className="font-semibold text-blue-800 dark:text-blue-600">{translations.blocks.intro.h5}</span>
                {translations.blocks.intro.t6}
                <span className="font-semibold text-blue-800 dark:text-blue-600">{translations.blocks.intro.h6}</span>
                {translations.blocks.intro.t7}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className={blockClass}>
              <p className="text-lg md:text-xl font-medium leading-relaxed text-gray-900 dark:text-white">
                {translations.blocks.grad.t1}
                <span className="font-semibold text-blue-800 dark:text-blue-600">{translations.blocks.grad.h1}</span>
                {translations.blocks.grad.t2}
                <span className="font-semibold text-blue-800 dark:text-blue-600">{translations.blocks.grad.h2}</span>
                {translations.blocks.grad.t3}
                <span className="font-semibold text-blue-800 dark:text-blue-600">{translations.blocks.grad.h3}</span>
                {translations.blocks.grad.t4}
                <span className="font-semibold text-blue-800 dark:text-blue-600">{translations.blocks.grad.h4}</span>
                {translations.blocks.grad.t5}
                <span className="font-semibold text-blue-800 dark:text-blue-600">{translations.blocks.grad.h5}</span>
                {translations.blocks.grad.t6}
                <span className="font-semibold text-blue-800 dark:text-blue-600">{translations.blocks.grad.h6}</span>
                {translations.blocks.grad.t7}
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div variants={itemVariants} className="mt-20 w-full flex justify-center">
          <button
            onClick={() => setOpenContact(true)}
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-blue-800 to-blue-600 text-white font-bold text-xl hover:-translate-y-1 transition-all"
          >
            {translations.contact}
            <ArrowRight className="w-7 h-7 ml-2" />
          </button>
        </motion.div>
      </motion.div>

      <Popup isOpen={openContact} onClose={() => setOpenContact(false)}>
        <h3 className="text-gray-900 text-2xl sm:text-3xl font-bold leading-tight dark:text-white text-center mb-4">{translations.contact_2}</h3>
        
        <div className="flex flex-col gap-3 text-gray-700 dark:text-gray-300 text-left">
          <p className="flex items-center gap-2">
            <HiOutlineMail className="text-blue-800 w-5 h-5" />
            <h4 className="font-semibold text-gray-800 dark:text-white text-base">
              Email: 
            </h4>
            <a href="mailto:anasshariri2002@gmail.com" className="text-blue-800 hover:underline ml-1">
              <span className="font-semibold text-blue-800 dark:text-blue-600">
                anasshariri2002@gmail.com
              </span>
            </a>
          </p>

          <p className="flex items-center gap-2">
            <HiOutlinePhone className="text-blue-800 w-5 h-5" />
            <h4 className="font-semibold text-gray-800 dark:text-white text-base">
              {translations.Phone} 
            </h4>
            <a href="tel:+33753315110" className="text-blue-800 hover:underline ml-1">
              <span className="font-semibold text-blue-800 dark:text-blue-600">
                +33 7 53 31 51 10
              </span>
            </a>
          </p>

          <p className="flex items-center gap-2">
            <FaLinkedin className="text-blue-800 w-5 h-5" />
            <h4 className="font-semibold text-gray-800 dark:text-white text-base">
              linkedin:  
            </h4>
            <a
              href="https://www.linkedin.com/in/anass-hariri/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 hover:underline ml-1"
            >
              <span className="font-semibold text-blue-800 dark:text-blue-600">
                Anass Hariri
              </span>
            </a>
          </p>
        </div>
      </Popup>
    </section>
  );
};

export default AboutMe;
