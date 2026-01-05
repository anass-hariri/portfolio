import { useState, useEffect } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react';
import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../contexts/LanguageContext';
import fr from '../locales/fr';
import en from '../locales/en';

const navigation = [
  { key: 'about', href: '#about' },
  { key: 'formations', href: '#formations' },
  { key: 'experience', href: '#experience' },
  { key: 'projects', href: '#projects' },
  { key: 'skills', href: '#skills' },
  { key: 'contact', href: '#contact' },
];

export default function ModernNavigation() {
  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [darkMode, setDarkMode] = useState(prefersDarkMode);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const {language, setLanguage} = useLanguage();

  const translations = language === 'fr' ? fr.head : en.head;

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('language', language);
  }, [darkMode, language]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setScrolled(true);
      else setScrolled(false);

      const sections = navigation.map(item => item.href.replace('#', ''));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${darkMode ? 'dark' : ''}`}>
      <Disclosure as="nav" className={`${scrolled ? 'bg-white/90 dark:bg-gray-900/90 shadow-md backdrop-blur-lg' : 'bg-transparent'} transition-all duration-300`}>
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="shrink-0 flex items-center">
                    <span className={`text-lg font-bold ${scrolled ? 'text-blue-800 dark:text-blue-600' : 'text-blue-700 dark:text-white'} transition-colors duration-300`}>
                      AH
                    </span>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-1">
                      {navigation.map((item) => {
                        const isActive = activeSection === item.href.replace('#', '');
                        return (
                          <a
                            key={translations[item.key]}
                            href={item.href}
                            className={`relative px-3 py-2 text-sm font-medium rounded-full transition-all duration-300 mx-1
                              ${isActive 
                                ? 'text-blue-800 dark:text-blue-600' 
                                : `${scrolled ? 'text-gray-700 dark:text-gray-300' : 'text-gray-800 dark:text-gray-200'} hover:text-blue-800 dark:hover:text-blue-600`}`}
                            style={{ overflow: 'hidden' }}
                          >
                            {translations[item.key]}
                            {isActive && (
                              <span className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-800 dark:bg-blue-600" style={{ animation: 'expandWidth 0.3s ease-out forwards' }} />
                            )}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    <button
                      onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                      type="button"
                      className={`relative rounded-full p-2 mx-2 transition-all duration-300
                        ${scrolled ? 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300' : 'bg-white/20 dark:bg-gray-800/20 text-gray-800 dark:text-gray-200'}
                        hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-800 dark:hover:text-blue-600`}
                    >
                      {language.toUpperCase()}
                    </button>
                    <button
                      onClick={toggleDarkMode}
                      type="button"
                      className={`relative rounded-full p-2 mx-2 transition-all duration-300
                        ${scrolled ? 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300' : 'bg-white/20 dark:bg-gray-800/20 text-gray-800 dark:text-gray-200'}
                        hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-800 dark:hover:text-blue-600`}
                    >
                      {darkMode ? <SunIcon className="size-5" /> : <MoonIcon className="size-5" />}
                    </button>
                  </div>
                </div>

                <div className="-mr-2 flex md:hidden">
                  <button
                    onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                    type="button"
                    className={`relative rounded-full p-2 mx-2 transition-all duration-300
                      ${scrolled ? 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300' : 'bg-white/20 dark:bg-gray-800/20 text-gray-800 dark:text-gray-200'}
                      hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-800 dark:hover:text-blue-600`}
                  >
                    {language.toUpperCase()}
                  </button>
                  <button
                    onClick={toggleDarkMode}
                    type="button"
                    className={`relative rounded-full p-2 mr-2 transition-all duration-300
                      ${scrolled ? 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300' : 'bg-white/20 dark:bg-gray-800/20 text-gray-800 dark:text-gray-200'}
                      hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-800 dark:hover:text-blue-600`}
                  >
                    {darkMode ? <SunIcon className="size-5" /> : <MoonIcon className="size-5" />}
                  </button>
                  <DisclosureButton 
                    className={`inline-flex items-center justify-center rounded-md p-2 transition-all duration-300
                      ${scrolled ? 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300' : 'bg-white/20 dark:bg-gray-800/20 text-gray-800 dark:text-gray-200'}
                      hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-800 dark:hover:text-blue-600`}
                  >
                    {open ? <XMarkIcon className="block size-6" /> : <Bars3Icon className="block size-6" />}
                  </DisclosureButton>
                </div>
              </div>
            </div>

            <DisclosurePanel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 bg-white dark:bg-gray-900 shadow-lg border-t border-gray-100 dark:border-gray-800"
                style={{ animation: 'slideDown 0.3s ease-out forwards' }}
              >
                {navigation.map((item) => {
                  const isActive = activeSection === item.href.replace('#', '');
                  return (
                    <DisclosureButton
                      key={translations[item.key]}
                      as="a"
                      href={item.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300
                        ${isActive 
                          ? 'text-blue-800 dark:text-blue-600 bg-blue-100 dark:bg-blue-900/20' 
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-blue-800 dark:hover:text-blue-600'}`}
                    >
                      {translations[item.key]}
                    </DisclosureButton>
                  );
                })}
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>

      <style jsx>{`
        @keyframes expandWidth {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
