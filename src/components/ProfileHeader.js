import { useState, useEffect } from "react";
import { FaLinkedin, FaFilePdf } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import profil from "../assets/profil.jpeg";
import cvFile from "../assets/cv_anasshariri.pdf";
import { useLanguage } from "../contexts/LanguageContext";
import fr from "../locales/fr";
import en from "../locales/en";
import Popup from "./Popup";

const ProfileHeader = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const { language } = useLanguage();
  const translations = language === "fr" ? fr.profil : en.profil;

  useEffect(() => {
    document.body.style.overflow = openContact ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openContact]);

  return (
    <div className="px-4 sm:px-8 lg:px-32 py-16 lg:pt-[120px] bg-white text-gray-800 dark:bg-[#01161E] dark:text-[#AEC3B0]" style={{ opacity: 0, animation: "fadeIn 0.8s ease-out forwards" }}>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 p-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg rounded-3xl shadow-xl dark:shadow-blue-500/10 border border-gray-100 dark:border-gray-800"
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
                   borderColor: isHovered ? "#1e3a8a" : "#1e40af", // dark blue
                   transform: isHovered ? "rotate(5deg) scale(1.05)" : "rotate(0) scale(1)",
                   transition: "all 0.3s ease-out",
                   boxShadow: isHovered ? "0 10px 25px -5px rgba(30, 58, 138, 0.4)" : "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                 }} />
            <div className="absolute inset-0 rounded-full flex items-center justify-center"
                 style={{
                   background: "linear-gradient(135deg, rgba(30, 58, 138, 0.7), rgba(30, 64, 175, 0.7))", // dark blue gradient
                   opacity: isHovered ? 1 : 0,
                   transition: "opacity 0.3s ease-out"
                 }} />
          </div>

          <div className="flex flex-col justify-center text-center sm:text-left" style={{ opacity: 0, animation: "fadeIn 0.6s ease-out forwards 0.4s" }}>
            <p className="text-gray-900 text-2xl sm:text-3xl font-bold leading-tight dark:text-white">
              {translations.name}
            </p>
            <p className="text-blue-700 dark:text-blue-400 text-sm sm:text-base mt-2">
              {translations.speciality}
            </p>

            {/* Social Icons */}
            <div className="flex justify-center sm:justify-start gap-4 mt-4" style={{ opacity: 0, animation: "fadeIn 0.6s ease-out forwards 0.6s" }}>
              <a href="https://www.linkedin.com/in/anass-hariri/" target="_blank" rel="noopener noreferrer"
                 className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-xl"
                 style={{ transition: "all 0.3s ease" }}
                 onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-3px)"}
                 onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}>
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row gap-4 sm:w-auto w-full" style={{ opacity: 0, animation: "fadeIn 0.6s ease-out forwards 0.8s" }}>
          <a href={cvFile} download="Cv_anasshariri.pdf">
            <button className="flex items-center justify-center gap-2 rounded-xl h-14 px-6 text-white text-sm font-bold leading-normal w-full sm:w-auto"
                    style={{ background: "linear-gradient(135deg, #1e40af, #1e3a8a)" }}>
              <FaFilePdf />
              <span className="truncate">{translations.download}</span>
            </button>
          </a>

          {/* Contact */}
          <button
            onClick={() => setOpenContact(true)}
            className="flex items-center justify-center gap-2 rounded-xl h-14 px-6 text-blue-700 dark:text-blue-400 text-sm font-bold w-full sm:w-auto bg-white dark:bg-gray-800 border-2 border-blue-700"
          >
            <HiOutlineMail />
            <span>{translations.contact}</span>
          </button>
        </div>
      </div>

      {/* Popup */}
      <Popup isOpen={openContact} onClose={() => setOpenContact(false)}>
        <h3 className="text-gray-900 text-2xl sm:text-3xl font-bold leading-tight dark:text-white text-center mb-4">{translations.contact}</h3>
        
        <div className="flex flex-col gap-3 text-gray-700 dark:text-gray-300 text-left">
          {/* Email */}
          <p className="flex items-center gap-2">
            <HiOutlineMail className="text-blue-700 w-5 h-5" />
            <h4 className="font-semibold text-gray-800 dark:text-white text-base">
              Email: 
            </h4>
            <a href="mailto:anasshariri2002@gmail.com" className="text-blue-700 hover:underline ml-1">
              <span className="font-semibold text-blue-700 dark:text-blue-400">
                anasshariri2002@gmail.com
              </span>
            </a>
          </p>

          {/* Téléphone */}
          <p className="flex items-center gap-2">
            <HiOutlinePhone className="text-blue-700 w-5 h-5" />
            <h4 className="font-semibold text-gray-800 dark:text-white text-base">
              {translations.Phone} 
            </h4>
            <a href="tel:+33753315110" className="text-blue-700 hover:underline ml-1">
              <span className="font-semibold text-blue-700 dark:text-blue-400">
                +33 7 53 31 51 10
              </span>
            </a>
          </p>
        </div>
      </Popup>

      {/* Animations */}
      <style>{`
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
