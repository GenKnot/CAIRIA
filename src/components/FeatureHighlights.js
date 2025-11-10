import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { getTranslation } from "../translations/translations";

export default function FeatureHighlights() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);
  
  return (
    <section className="pt-[10px] md:pt-[20px] pb-[70px] md:pb-[130px]">
      <div className="w-full mx-auto theme-container">
        <div className="grid grid-cols-3 gap-3 md:grid-cols-6 gap-y-10">
          <div className="col-span-3 xl:px-[62px]">
            <div className="max-w-[476px]">
              <h1 className="pt-5 font-semibold text-24 sm:text-48 text-main-black">
                {t('featureHighlights.title')}
              </h1>
              <p className="pt-5 text-paragraph sm:pt-10">
                {t('featureHighlights.description')}
              </p>
              <ul className="flex flex-col gap-0.5 mt-6 mb-11">
                <li className="flex gap-2.5 before:h-[18px] before:w-[18px] before:rounded-full before:mt-1.5 before:bg-purple tick-before before:flex before:justify-center before:items-center text-main-black">
                  <div className="flex-1">
                    <h1 className="font-semibold text-18 text-main-black">
                      {t('featureHighlights.certification')}
                    </h1>
                    <p className="text-paragraph mt-0.5">
                      {t('featureHighlights.certificationDesc')}
                    </p>
                  </div>
                </li>
                <li className="flex gap-2.5 before:h-[18px] before:w-[18px] before:rounded-full before:mt-1.5 before:bg-purple tick-before before:flex before:justify-center before:items-center text-main-black mt-6">
                  <div className="flex-1">
                    <h1 className="font-semibold text-18 text-main-black">
                      {t('featureHighlights.expertLed')}
                    </h1>
                    <p className="text-paragraph mt-0.5">
                      {t('featureHighlights.expertLedDesc')}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative col-span-3 flex justify-center items-end xl:px-[62px]">
            <img
              src="/assets/images/home-nine/features-bg.svg"
              alt=""
              className="absolute z-0 cta_bg_anim"
            />
            <img
              src="/assets/images/home-nine/features-img-2.png"
              alt=""
              className="relative z-10 moving-h2-hero-main-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
