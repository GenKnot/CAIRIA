import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { getTranslation } from "../translations/translations";

export default function CallToAction() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);
  
  return (
    <section id="ourApp" className="pb-[70px] md:pb-[130px]">
      <div className="max-w-[1860px] w-full mx-auto relative overflow-hidden bg-[#10100E] rounded-[20px]">
        <img
          src="/assets/images/home-nine/cta-bg.svg"
          alt=""
          className="absolute inset-0 z-0 w-full h-full object-cover hidden cta_bg_anim sm:block"
        />
        <div className="w-full mx-auto theme-container">
          <div className="py-[70px] md:py-[130px] relative z-10">
            <div className="text-center max-w-[900px] mx-auto">
              <h1 className="py-0.5 px-5 bg-white/10 border-white/20 border rounded-[30px] font-medium text-white w-fit mx-auto">
                {t('cta.badge')}
              </h1>
              <h2
                className="text-3xl sm:text-5xl lg:text-6xl tracking-tight font-semibold text-white mt-8 relative z-10"
                data-depth="-0.28"
              >
                {t('cta.title')}
              </h2>
              <p className="text-xl text-white/90 mt-8 relative z-10 leading-relaxed">
                {t('cta.description')}
              </p>
              <div className="flex flex-col gap-4 mt-10 sm:flex-row sm:gap-6 justify-center">
                <Link to="/about">
                  <div className="home-two-btn-white group before:bg-app-main after:bg-app-main border-app-main hover:border-white hover:text-white text-main-black">
                    <span className="relative z-10 py-1 text-base font-semibold transition-all duration-300 font-inter">
                      {t('cta.aboutUs')}
                    </span>
                    <svg
                      className="relative z-10 transition-all duration-300"
                      width="7"
                      height="12"
                      viewBox="0 0 7 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="transition-all duration-300 group-hover:stroke-white stroke-main-black"
                        d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
                <Link to="/contact">
                  <div className="text-white home-two-btn-white group before:bg-purple after:bg-purple border-purple hover:border-white hover:text-white">
                    <span className="relative z-10 py-1 text-base font-semibold transition-all duration-300 font-inter">
                      {t('cta.contactUs')}
                    </span>
                    <svg
                      className="relative z-10 transition-all duration-300"
                      width="7"
                      height="12"
                      viewBox="0 0 7 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="transition-all duration-300 group-hover:stroke-white stroke-white"
                        d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
