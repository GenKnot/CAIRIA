import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { getTranslation } from "../translations/translations";

export default function Hero() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);

  return (
    <section
      id="banner"
      className="relative flex justify-center w-full py-3 pt-24 overflow-hidden bg-white"
    >
      <div className="relative w-full max-w-[1860px] overflow-hidden bg-[#10100E] rounded-[20px]">
        <img
          src="./assets/images/home-nine/hero-bg.png"
          alt=""
          className="absolute z-0 w-full h-full mx-auto cta_bg_anim"
        />
        {/* <!-- content start --> */}
        <div className="w-full max-w-[1506px] theme-container mx-auto">
          <div className="grid grid-cols-6 xl:grid-cols-12 z-10 pt-[70px] lg:pt-[120px] lg:pb-[120px]">
            <div className="col-span-6 my-auto">
              <div className="flex gap-2.5 relative z-10 px-3 sm:px-6 py-1.5 sm:py-3 rounded-[40px] border border-white/10 bg-white/5 items-center w-fit">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2L12.09 7.26L18 8.27L14 12.14L14.91 18.09L10 15.77L5.09 18.09L6 12.14L2 8.27L7.91 7.26L10 2Z"
                    fill="#FEC461"
                    stroke="#F7B84E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-semibold text-white text-18 sm:text-20">
                  CAIRIA
                </span>
              </div>
              <h1
                className="text-4xl md:text-65 tracking-tight font-semibold text-white pr-2 mt-7 max-w-[586px] relative z-10"
                data-depth="-0.28"
              >
                {t('hero.title')}
              </h1>
              <p className="text-18 font-medium font-inter text-white mt-5 md:mt-5 max-w-[580px] relative z-10">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col gap-3 mt-5 sm:flex-row sm:gap-6 md:mt-12">
                <a href="#feature-section">
                  <div className="home-two-btn-white group before:bg-app-main after:bg-app-main border-app-main hover:border-white">
                    <span className="relative z-10 py-1 text-base font-semibold transition-all duration-300 group-hover:text-white text-main-black font-inter">
                      {t('common.learnMore')}
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
                        className="transition-all duration-300 group-hover:stroke-white stroke-main-black"
                        d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </a>
                <a href="#contact">
                  <div className="home-two-btn-white-rev group before:bg-app-main after:bg-app-main hover:border-app-main">
                    <span className="text-base group-hover:text-main-black text-white transition-all duration-300 font-semibold font-inter relative z-10 py-0.5">
                      {t('common.contactUs')}
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
                        className="transition-all duration-300 group-hover:stroke-main-black stroke-white"
                        d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </a>
              </div>
              <div className="flex gap-2.5 items-center mt-5 relative z-10">
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.47571 13.0406C2.73638 12.21 2.13915 11.3975 1.56224 10.6106C1.03507 9.8951 0.57798 9.13054 0.197276 8.32748C-0.0410056 7.84021 -0.146474 7.34682 0.369659 7.02959C1.84884 6.12056 2.15196 6.98853 2.95595 7.99564C3.43251 8.5924 4.13524 9.57646 4.57556 10.1982C4.99614 10.792 5.50888 9.72033 5.71356 9.41795C6.44106 8.3433 8.33189 5.71236 9.11325 4.73986C9.85505 3.81666 12.2494 1.23033 12.6957 0.818964C13.0756 0.46869 13.8778 -0.299591 14.4172 0.124237C14.984 0.569549 15.2609 1.41603 14.8625 1.96642C14.1686 2.92463 13.0786 3.83615 12.3245 4.74853C10.7978 6.59541 9.35247 8.58619 7.96509 10.5684C7.49364 11.242 6.83173 12.3701 6.42079 13.1006C5.65208 14.4672 4.97688 14.7273 3.47571 13.0406Z"
                    fill="white"
                  />
                </svg>
                <p className="text-white">{t('hero.nonprofit')}</p>
              </div>
              <div className="flex gap-2.5 items-center mt-3 relative z-10">
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.47571 13.0406C2.73638 12.21 2.13915 11.3975 1.56224 10.6106C1.03507 9.8951 0.57798 9.13054 0.197276 8.32748C-0.0410056 7.84021 -0.146474 7.34682 0.369659 7.02959C1.84884 6.12056 2.15196 6.98853 2.95595 7.99564C3.43251 8.5924 4.13524 9.57646 4.57556 10.1982C4.99614 10.792 5.50888 9.72033 5.71356 9.41795C6.44106 8.3433 8.33189 5.71236 9.11325 4.73986C9.85505 3.81666 12.2494 1.23033 12.6957 0.818964C13.0756 0.46869 13.8778 -0.299591 14.4172 0.124237C14.984 0.569549 15.2609 1.41603 14.8625 1.96642C14.1686 2.92463 13.0786 3.83615 12.3245 4.74853C10.7978 6.59541 9.35247 8.58619 7.96509 10.5684C7.49364 11.242 6.83173 12.3701 6.42079 13.1006C5.65208 14.4672 4.97688 14.7273 3.47571 13.0406Z"
                    fill="white"
                  />
                </svg>
                <p className="text-white">{t('hero.federallyRegistered')}</p>
              </div>
            </div>
            <img
              src="/assets/hero-img-3.png"
              alt="CAIRIA AI & Robotics"
              className="relative self-end col-span-5 lg:absolute -right-16 -bottom-3 moving-h2-hero-main-img"
            />
          </div>
        </div>
      </div>
      {/* <!-- content end  --> */}
    </section>
  );
}
