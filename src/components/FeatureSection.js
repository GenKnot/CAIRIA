import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { getTranslation } from "../translations/translations";

export default function FeatureSection() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);
  
  return (
    <section id="feature-section" className="pt-[70px] md:pt-[175px] pb-[70px] md:pb-[130px]">
      <div className="w-full mx-auto theme-container">
        <div className="grid grid-cols-3 gap-3 md:grid-cols-6 gap-y-10">
          <div className="relative col-span-3 flex justify-center items-end xl:px-[62px]">
            <div className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] max-h-[700px] overflow-hidden rounded-[20px]">
              <video
                src="/310148_small.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover cta_bg_anim"
              />
            </div>
            {/* <img
              src="/assets/images/home-nine/features-img.png"
              alt=""
              className="relative z-10 moving-h2-hero-main-img rounded-t-[20px]"
            /> */}
          </div>
          <div className="col-span-3 xl:px-[62px]">
            <div className="max-w-[476px]">
              <h1 className="pt-5 font-semibold text-24 sm:text-48 text-main-black">
                {t('featureSection.title')}
              </h1>
              <p className="pt-5 text-paragraph sm:pt-10">
                {t('featureSection.description')}
              </p>
              <ul className="flex flex-col gap-0.5 mt-6 mb-11">
                <li className="flex items-center gap-2.5 before:h-[18px] before:w-[18px] before:rounded-full before:bg-purple tick-before before:flex before:justify-center before:items-center text-main-black">
                  {t('featureSection.point1')}
                </li>
                <li className="flex items-center gap-2.5 before:h-[18px] before:w-[18px] before:rounded-full before:bg-purple tick-before before:flex before:justify-center before:items-center text-main-black">
                  {t('featureSection.point2')}
                </li>
                <li className="flex items-center gap-2.5 before:h-[18px] before:w-[18px] before:rounded-full before:bg-purple tick-before before:flex before:justify-center before:items-center text-main-black">
                  {t('featureSection.point3')}
                </li>
              </ul>
              <Link to="/about">
                <div className="home-two-btn-bg group bg-app-main border-app-main hover:border-main-black py-[15px] w-fit">
                  <span className="relative z-10 text-base font-semibold transition-all duration-300 group-hover:text-main-black text-main-black font-inter">
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
                      className="transition-all duration-300 group-hover:stroke-main-black stroke-main-black"
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
    </section>
  );
}
