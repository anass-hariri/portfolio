import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FaLinkedin, FaFilePdf } from "react-icons/fa";
import cvFile from "../assets/cv_anasshariri.pdf";
import { useLanguage } from "../contexts/LanguageContext";
import fr from "../locales/fr";
import en from "../locales/en";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const { language } = useLanguage();
  const translations = language === "fr" ? fr.profil : en.profil;

  return (
    <section
      id="contact"
      className="w-full py-24 px-4 sm:px-8 lg:px-16 bg-white text-gray-800 dark:bg-[#01161E] dark:text-[#AEC3B0]"
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl flex flex-col gap-6 items-start"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          {translations.contact}
          <div className="w-24 h-1 bg-blue-600 rounded-full mt-2" />
        </h2>

        {/* Email */}
        <p className="flex items-center gap-2">
          <HiOutlineMail className="text-blue-600 w-5 h-5" />
          <span className="font-semibold text-gray-800 dark:text-white">Email:</span>
          <a
            href="mailto:anasshariri2002@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline ml-1"
          >
            anasshariri2002@gmail.com
          </a>
        </p>

        {/* Téléphone */}
        <p className="flex items-center gap-2">
          <HiOutlinePhone className="text-blue-600 w-5 h-5" />
          <span className="font-semibold text-gray-800 dark:text-white">{translations.Phone}</span>
          <a
            href="tel:+33753315110"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline ml-1"
          >
            +33 7 53 31 51 10
          </a>
        </p>

        {/* LinkedIn */}
        <p className="flex items-center gap-2">
          <FaLinkedin className="text-blue-600 w-5 h-5" />
          <span className="font-semibold text-gray-800 dark:text-white">LinkedIn:</span>
          <a
            href="https://www.linkedin.com/in/anass-hariri/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline ml-1"
          >
            Anass Hariri
          </a>
        </p>

        {/* CV */}
        <p className="flex items-center gap-2">
          <FaFilePdf className="text-blue-600 w-5 h-5" />
          <span className="font-semibold text-gray-600 dark:text-white">CV:</span>
          <a
            href={cvFile}
            download="Cv_anasshariri.pdf"
            className="text-blue-600 hover:underline ml-1"
          >
            {translations.download}
          </a>
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
