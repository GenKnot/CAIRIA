import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { getTranslation } from "../translations/translations";

export default function FeatureShowcase() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);
  
  return (
    <section className="py-[70px] sm:py-[130px] bg-white">
      <div className="theme-container mx-auto grid grid-cols-6 lg:grid-cols-12 sm:gap-[63px]">
        <div className="col-span-6">
          <h1 className="px-5 bg-main-gray border border-it-blue/20 text-it-blue font-medium rounded-[30px] w-fit">
            {t('educationalImpact.title')}
          </h1>
          <h2 className="mt-5 text-2xl font-semibold sm:text-48 text-main-black">
            {t('educationalImpact.subtitle')}
          </h2>
          <ul className="mb-[30px] max-w-full">
            <li className="flex flex-col sm:flex-row gap-[30px] items-start mt-10">
              <div className="w-[30px] aspect-square rounded-full bg-it-blue flex items-center justify-center">
                <svg
                  width="16"
                  height="11"
                  viewBox="0 0 16 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.6907 0.612031C15.1811 0.993484 15.2695 1.70029 14.888 2.19073L8.87753 9.91852C7.94196 11.1214 6.18214 11.2775 5.04945 10.2581L1.24742 6.83626C0.785601 6.42062 0.748162 5.70929 1.1638 5.24747C1.57945 4.78564 2.29077 4.7482 2.75259 5.16385L6.55462 8.58567C6.71643 8.7313 6.96783 8.709 7.10149 8.53716L13.112 0.809368C13.4934 0.318928 14.2003 0.230577 14.6907 0.612031Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h1 className="font-semibold text-main-black text-20">
                  {t('educationalImpact.research')}
                </h1>
                <p className="text-paragraph max-w-[466px]">
                  {t('educationalImpact.researchDesc')}
                </p>
              </div>
            </li>
            <li className="flex flex-col sm:flex-row gap-[30px] items-start mt-6">
              <div className="w-[30px] aspect-square rounded-full bg-it-blue flex items-center justify-center">
                <svg
                  width="16"
                  height="11"
                  viewBox="0 0 16 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.6907 0.612031C15.1811 0.993484 15.2695 1.70029 14.888 2.19073L8.87753 9.91852C7.94196 11.1214 6.18214 11.2775 5.04945 10.2581L1.24742 6.83626C0.785601 6.42062 0.748162 5.70929 1.1638 5.24747C1.57945 4.78564 2.29077 4.7482 2.75259 5.16385L6.55462 8.58567C6.71643 8.7313 6.96783 8.709 7.10149 8.53716L13.112 0.809368C13.4934 0.318928 14.2003 0.230577 14.6907 0.612031Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h1 className="font-semibold text-main-black text-20">
                  {t('educationalImpact.learning')}
                </h1>
                <p className="text-paragraph max-w-[466px]">
                  {t('educationalImpact.learningDesc')}
                </p>
              </div>
            </li>
            <li className="flex flex-col sm:flex-row gap-[30px] items-start mt-6">
              <div className="w-[30px] aspect-square rounded-full bg-it-blue flex items-center justify-center">
                <svg
                  width="16"
                  height="11"
                  viewBox="0 0 16 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.6907 0.612031C15.1811 0.993484 15.2695 1.70029 14.888 2.19073L8.87753 9.91852C7.94196 11.1214 6.18214 11.2775 5.04945 10.2581L1.24742 6.83626C0.785601 6.42062 0.748162 5.70929 1.1638 5.24747C1.57945 4.78564 2.29077 4.7482 2.75259 5.16385L6.55462 8.58567C6.71643 8.7313 6.96783 8.709 7.10149 8.53716L13.112 0.809368C13.4934 0.318928 14.2003 0.230577 14.6907 0.612031Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h1 className="font-semibold text-main-black text-20">
                  {t('educationalImpact.standards')}
                </h1>
                <p className="text-paragraph max-w-[466px]">
                  {t('educationalImpact.standardsDesc')}
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-span-6 mt-5 md:mt-0">
          <div className="relative flex justify-end w-full">
            <video
              src="/3.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="max-w-full rounded-[20px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
