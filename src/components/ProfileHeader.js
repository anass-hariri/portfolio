import { useState } from "react";
import { FaLinkedin, FaFilePdf } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import profil from '../assets/profil.jpeg';
import cvFile from '../assets/cv_anasshariri.pdf';
import { useLanguage } from '../contexts/LanguageContext';
import fr from '../locales/fr';
import en from '../locales/en';

const ProfileHeader = () => {
  const [isHovered, setIsHovered] = useState(false);
  const {language} = useLanguage()

  const translations = language === 'fr' ? fr.profil : en.profil;

  return (
    <div className="px-4 sm:px-8 lg:px-32 py-16 lg:pt-[120px]" style={{ opacity: 0, animation: "fadeIn 0.8s ease-out forwards" }}>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 p-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg rounded-3xl shadow-xl dark:shadow-indigo-500/10 border border-gray-100 dark:border-gray-800"
           style={{ transform: "translateY(20px)", animation: "slideUp 0.6s ease-out forwards 0.2s" }}>
        
        {/* Profile Image and Info */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="relative group cursor-pointer"
               onMouseEnter={() => setIsHovered(true)}
               onMouseLeave={() => setIsHovered(false)}
               style={{ transition: "transform 0.3s ease-out" }}>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-[128px] h-[128px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] border-4"
                 style={{
                   backgroundImage: `url(${profil})`,
                   borderColor: isHovered ? "#6366f1" : "#4f46e5",
                   transform: isHovered ? "rotate(5deg) scale(1.05)" : "rotate(0) scale(1)",
                   transition: "all 0.3s ease-out",
                   boxShadow: isHovered ? "0 10px 25px -5px rgba(99, 102, 241, 0.4)" : "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                 }} />
            <div className="absolute inset-0 rounded-full flex items-center justify-center"
                 style={{
                   background: "linear-gradient(135deg, rgba(99, 102, 241, 0.7), rgba(79, 70, 229, 0.7))",
                   opacity: isHovered ? 1 : 0,
                   transition: "opacity 0.3s ease-out"
                 }} />
          </div>

          <div className="flex flex-col justify-center text-center sm:text-left" style={{ opacity: 0, animation: "fadeIn 0.6s ease-out forwards 0.4s" }}>
            <p className="text-gray-900 text-2xl sm:text-3xl font-bold leading-tight dark:text-white">
              {translations.name}
            </p>
            <p className="text-indigo-600 dark:text-indigo-400 text-sm sm:text-base mt-2">
              {translations.speciality}
            </p>

            {/* Social Icons */}
            <div className="flex justify-center sm:justify-start gap-4 mt-4" style={{ opacity: 0, animation: "fadeIn 0.6s ease-out forwards 0.6s" }}>
              <a href="https://www.linkedin.com/in/anass-hariri/" target="_blank" rel="noopener noreferrer"
                 className="text-indigo-500 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 text-xl"
                 style={{ transition: "all 0.3s ease" }}
                 onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-3px)"}
                 onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}>
                <FaLinkedin />
              </a>
              {/* <a href="https://github.com/mbouhaja02" target="_blank" rel="noopener noreferrer"
                 className="text-indigo-500 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 text-xl"
                 style={{ transition: "all 0.3s ease" }}
                 onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-3px)"}
                 onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}>
                <FaGithub />
              </a> */}
            </div>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row gap-4 sm:w-auto w-full" style={{ opacity: 0, animation: "fadeIn 0.6s ease-out forwards 0.8s" }}>
          <a href={cvFile} download="Cv_anasshariri.pdf">
            <button className="flex items-center justify-center gap-2 rounded-xl h-14 px-6 text-white text-sm font-bold leading-normal w-full sm:w-auto"
                    style={{ background: "linear-gradient(135deg, #4f46e5, #6366f1)" }}>
              <FaFilePdf />
              <span className="truncate">{translations.download}</span>
            </button>
          </a>

          <a href="mailto:your-email@example.com">
            <button className="flex items-center justify-center gap-2 rounded-xl h-12 px-6 text-indigo-600 dark:text-indigo-400 text-sm font-bold leading-normal w-full sm:w-auto bg-white dark:bg-gray-800"
                    style={{ border: "2px solid #4f46e5", transition: "all 0.3s ease", boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)" }}>
              <HiOutlineMail />
              <span className="truncate">{translations.contact}</span>
            </button>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default ProfileHeader;