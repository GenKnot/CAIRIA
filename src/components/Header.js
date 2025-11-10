import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { getTranslation } from "../translations/translations";

export default function Header() {
  const { language, toggleLanguage } = useLanguage();
  const t = (key) => getTranslation(language, key);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="fixed top-0 z-20 justify-center hidden w-full h-24 bg-white xl:flex">
      <div className="px-[70px] w-full">
        <header className="relative flex items-center justify-between w-full h-full py-6 mx-auto">
          <div className="flex items-center gap-24">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="text-2xl font-bold text-main-black">CAIRIA</div>
            </Link>
          </div>
          <ul className="flex items-center gap-10 text-base font-medium leading-5 text-main-black font-inter h-fit">
            <li>
              <Link
                to="/"
                className={`home-two-nav-item relative before:content-['${t('nav.home')}'] before:text-main-black before:border-main-black before:h-[20px]`}
              >
                {t('nav.home')}
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`home-two-nav-item relative before:content-['${t('nav.about')}'] before:text-main-black before:border-main-black before:h-[20px]`}
              >
                {t('nav.about')}
              </Link>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('solutions')}
                className={`home-two-nav-item relative before:content-['${t('nav.programs')}'] before:text-main-black before:border-main-black before:h-[20px]`}
              >
                {t('nav.programs')}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('features')}
                className={`home-two-nav-item relative before:content-['${t('nav.services')}'] before:text-main-black before:border-main-black before:h-[20px]`}
              >
                {t('nav.services')}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className={`home-two-nav-item relative before:content-['${t('nav.mission')}'] before:text-main-black before:border-main-black before:h-[20px]`}
              >
                {t('nav.mission')}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className={`home-two-nav-item relative before:content-['${t('nav.contact')}'] before:text-main-black before:border-main-black before:h-[20px]`}
              >
                {t('nav.contact')}
              </button>
            </li>
          </ul>
          <div className="flex items-center gap-5">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold transition-all duration-300 border rounded-lg text-main-black border-main-black/10 hover:border-app-main hover:text-app-main"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12H22"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {language}
            </button>
            <button onClick={() => scrollToSection('contact')}>
              <div className="home-two-btn-white-rev home-two-btn-white-rev-sm group bg-app-main border-app-main hover:border-[#E7E8EA]">
                <span className="relative z-10 text-base font-semibold transition-all duration-300 group-hover:text-main-black text-main-black font-inter">
                  {t('nav.contactUs')}
                </span>
                <svg
                  className="relative z-10"
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="transition-all duration-300 group-hover:stroke-main-black stroke-main-black"
                    d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          </div>
        </header>
      </div>
    </div>
  );
}
