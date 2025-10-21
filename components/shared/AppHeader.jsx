import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiSun, FiMoon, FiX, FiMenu } from "react-icons/fi";
import { useRouter } from "next/router";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../../context/LanguageContext";
import logoLight from "../../public/images/S-Logo/S-Logo.jpg";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";
function AppHeader() {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const [activeTheme, setTheme] = useThemeSwitcher();
  const { t, currentLanguage } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  function toggleMenu() {
    if (!showMenu) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }

  function showHireMeModal() {
    if (!showModal) {
      document
        .getElementsByTagName("html")[0]
        .classList.add("overflow-y-hidden");
      setShowModal(true);
    } else {
      document
        .getElementsByTagName("html")[0]
        .classList.remove("overflow-y-hidden");
      setShowModal(false);
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="fixed top-0 left-0 right-0 z-50 py-4 sm:py-6 bg-primary-light bg-opacity-90 dark:bg-secondary-dark dark:bg-opacity-90 backdrop-blur-sm shadow-lg"
    >
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-12 h-12 sm:w-14 sm:h-14">
            <Link href={`/${currentLanguage}`}>
              <Image
                src={logoLight}
                className={
                  activeTheme === "dark" ? "border-2 border-purple-600 rounded-lg" : "rounded-lg"
                }
                alt="Logo"
                width={56}
                height={56}
                style={{ objectFit: 'contain' }}
              />
            </Link>
          </div>
        </div>

        {/* Mobile menu controls: language switcher, theme switcher, and menu button */}
        <div className="flex items-center gap-3 sm:hidden">
          {/* Language Switcher - moved outside main navigation */}
          <LanguageSwitcher />
          
          <button
            onClick={() => setTheme(activeTheme)}
            type="button"
            aria-label="Toggle theme"
            className="bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer"
          >
            {activeTheme === "dark" ? (
              <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-lg" />
            ) : (
              <FiSun className="text-gray-200 hover:text-gray-50 text-lg" />
            )}
          </button>

          <button
            onClick={toggleMenu}
            type="button"
            className="focus:outline-none p-2"
            aria-label="Hamburger Menu"
          >
            {showMenu ? (
              <FiX className="text-2xl text-secondary-dark dark:text-ternary-light" />
            ) : (
              <FiMenu className="text-2xl text-secondary-dark dark:text-ternary-light" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {showMenu && (
          <div className="absolute top-full left-0 right-0 bg-primary-light dark:bg-secondary-dark bg-opacity-95 backdrop-blur-sm shadow-lg border-t border-gray-200 dark:border-gray-700 sm:hidden">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-2">
                <Link
                  href={`/${currentLanguage}`}
                  className={`block text-center py-3 px-4 rounded-lg transition-colors duration-300 ${
                    router.pathname === "/[lang]" || router.pathname === "/"
                      ? "bg-indigo-500 text-white"
                      : "text-primary-dark dark:text-ternary-light hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => setShowMenu(false)}
                >
                  {t('header.home')}
                </Link>
                <Link
                  href={`/${currentLanguage}/about`}
                  className={`block text-center py-3 px-4 rounded-lg transition-colors duration-300 ${
                    router.pathname === "/[lang]/about" || router.pathname === "/about"
                      ? "bg-indigo-500 text-white"
                      : "text-primary-dark dark:text-ternary-light hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => setShowMenu(false)}
                >
                  {t('header.about')}
                </Link>
                <Link
                  href={`/${currentLanguage}/experience`}
                  className={`block text-center py-3 px-4 rounded-lg transition-colors duration-300 ${
                    router.pathname === "/[lang]/experience" || router.pathname === "/experience"
                      ? "bg-indigo-500 text-white"
                      : "text-primary-dark dark:text-ternary-light hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => setShowMenu(false)}
                >
                  {t('header.experience')}
                </Link>
                <Link
                  href={`/${currentLanguage}/contact`}
                  className={`block text-center py-3 px-4 rounded-lg transition-colors duration-300 ${
                    router.pathname === "/[lang]/contact" || router.pathname === "/contact"
                      ? "bg-indigo-500 text-white"
                      : "text-primary-dark dark:text-ternary-light hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => setShowMenu(false)}
                >
                  {t('header.contact')}
                </Link>
                <Link
                  href={`/${currentLanguage}/projects`}
                  className={`block text-center py-3 px-4 rounded-lg transition-colors duration-300 ${
                    router.pathname === "/[lang]/projects" || router.pathname === "/projects"
                      ? "bg-indigo-500 text-white"
                      : "text-primary-dark dark:text-ternary-light hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => setShowMenu(false)}
                >
                  {t('header.projects')}
                </Link>
                <Link
                  href={`/${currentLanguage}/certifications`}
                  className={`block text-center py-3 px-4 rounded-lg transition-colors duration-300 ${
                    router.pathname === "/[lang]/certifications" || router.pathname === "/certifications"
                      ? "bg-indigo-500 text-white"
                      : "text-primary-dark dark:text-ternary-light hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => setShowMenu(false)}
                >
                  {t('header.certifications')}
                </Link>
                
                {/* Additional menu items can be added here if needed */}
                {/* Language switcher is now in the header, outside of main navigation */}
              </div>
            </div>
          </div>
        )}

        {/* Header links large screen */}
        <div className="font-general-medium hidden sm:flex items-center justify-center flex-1">
          <div className="flex items-center space-x-1 p-2 rounded-2xl bg-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5px] border border-white/30">
            <div
              className={`block text-base sm:text-lg font-medium rounded-full px-4 py-1 transition-colors duration-300 ${
                router.pathname === "/[lang]" || router.pathname === "/"
                  ? "bg-ternary-dark text-white"
                  : "text-primary-dark dark:text-ternary-light hover:bg-primary-light dark:hover:bg-ternary-dark"
              }`}
              aria-label="Home"
            >
              <Link href={`/${currentLanguage}`}>{t('header.home')}</Link>
            </div>
            <div
              className={`block text-base sm:text-lg font-medium rounded-full px-4 py-1 transition-colors duration-300 ${
                router.pathname === "/[lang]/about" || router.pathname === "/about"
                  ? "bg-ternary-dark text-white"
                  : "text-primary-dark dark:text-ternary-light hover:bg-primary-light dark:hover:bg-ternary-dark"
              }`}
              aria-label="About Me"
            >
              <Link href={`/${currentLanguage}/about`}>{t('header.about')}</Link>
            </div>
            <div
              className={`block text-base sm:text-lg font-medium rounded-full px-4 py-1 transition-colors duration-300 ${
                router.pathname === "/[lang]/experience" || router.pathname === "/experience"
                  ? "bg-ternary-dark text-white"
                  : "text-primary-dark dark:text-ternary-light hover:bg-primary-light dark:hover:bg-ternary-dark"
              }`}
              aria-label="Experience"
            >
              <Link href={`/${currentLanguage}/experience`}>{t('header.experience')}</Link>
            </div>
            <div
              className={`block text-base sm:text-lg font-medium rounded-full px-4 py-1 transition-colors duration-300 ${
                router.pathname === "/[lang]/contact" || router.pathname === "/contact"
                  ? "bg-ternary-dark text-white"
                  : "text-primary-dark dark:text-ternary-light hover:bg-primary-light dark:hover:bg-ternary-dark"
              }`}
              aria-label="Contact"
            >
              <Link href={`/${currentLanguage}/contact`}>{t('header.contact')}</Link>
            </div>
            <div
              className={`block text-base sm:text-lg font-medium rounded-full px-4 py-1 transition-colors duration-300 ${
                router.pathname === "/[lang]/projects" || router.pathname === "/projects"
                  ? "bg-ternary-dark text-white"
                  : "text-primary-dark dark:text-ternary-light hover:bg-primary-light dark:hover:bg-ternary-dark"
              }`}
              aria-label="Projects"
            >
              <Link href={`/${currentLanguage}/projects`}>{t('header.projects')}</Link>
            </div>
            <div
              className={`block text-base sm:text-lg font-medium rounded-full px-4 py-1 transition-colors duration-300 ${
                router.pathname === "/[lang]/certifications" || router.pathname === "/certifications"
                  ? "bg-ternary-dark text-white"
                  : "text-primary-dark dark:text-ternary-light hover:bg-primary-light dark:hover:bg-ternary-dark"
              }`}
              aria-label="Certifications"
            >
              <Link href={`/${currentLanguage}/certifications`}>{t('header.certifications')}</Link>
            </div>
          </div>
        </div>

        {/* Header right section buttons */}
        <div className="hidden sm:flex items-center gap-3">

          {/* Language Switcher */}
          <LanguageSwitcher />
          
          {/* Theme switcher large screen */}
          <button
            onClick={() => setTheme(activeTheme)}
            type="button"
            aria-label="Toggle theme"
            className="bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer transition-all hover:scale-105"
          >
            {activeTheme === "dark" ? (
              <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-lg" />
            ) : (
              <FiSun className="text-gray-200 hover:text-gray-50 text-lg" />
            )}
          </button>
        </div>
      </div>

    </motion.nav>
  );
}

export default AppHeader;
