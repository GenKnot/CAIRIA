import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { getTranslation } from "../translations/translations";

export default function About() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);
  
  return (
    <section id="about" className="pb-[70px] md:pb-[130px]">
      <div className="max-w-[1860px] w-full mx-auto relative overflow-hidden bg-[#10100E] rounded-[20px]">
        <img
          src="/assets/images/home-nine/testimonials-bg.svg"
          alt=""
          className="absolute inset-0 z-0 w-full h-full object-cover hidden cta_bg_anim sm:block"
        />
        <div className="relative z-10">
          {/* <!-- about start  --> */}
          <div className="py-[70px] md:py-[130px]">
            <div className="grid grid-cols-7 mx-auto theme-container lg:grid-cols-12">
              <div className="col-span-6 md:col-span-7">
                <div className="relative w-fit">
                  <img
                    src="/assets/images/home-seven/about.png"
                    alt=""
                    className="rounded-[20px]"
                  />
                  <div className="w-[100px] aspect-square rounded-[10px] bg-it-blue flex justify-center items-center absolute -top-[50px] -right-[50px]">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2L2 7L12 12L22 7L12 2Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="white"
                      />
                      <path
                        d="M2 17L12 22L22 17"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 12L12 17L22 12"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="col-span-7 md:col-span-5">
                <div className="flex items-center h-full">
                  <div className="mt-10 md:mt-0">
                    <h1 className="px-5 bg-white/10 border border-white/20 text-white font-medium rounded-[30px] w-fit">
                      {t('about.mission')}
                    </h1>
                    <h2 className="max-w-[747px] font-semibold text-24 sm:text-48 text-white mt-5">
                      {t('about.subtitle')}
                    </h2>
                    <p className="mb-10 text-white mt-9">
                      {t('about.description')}
                    </p>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- about end  --> */}
    </section>
  );
}
