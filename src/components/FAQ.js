import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { getTranslation } from "../translations/translations";

export default function FAQ() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);
  
  const faqs = [
    {
      question: t('faq.q1'),
      answer: t('faq.a1'),
    },
    {
      question: t('faq.q2'),
      answer: t('faq.a2'),
    },
    {
      question: t('faq.q3'),
      answer: t('faq.a3'),
    },
    {
      question: t('faq.q4'),
      answer: t('faq.a4'),
    },
  ];
  
  const [activeFAQ, setActiveFAQ] = useState(0);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? 0 : index);
  };

  return (
    <section id="faq" className="py-[70px] sm:py-[130px] bg-white max-w-full">
      <div className="theme-container mx-auto grid grid-cols-6 lg:grid-cols-12 sm:gap-[63px]">
        <div className="col-span-6">
          <h1 className="px-5 bg-main-gray border border-it-blue/20 text-it-blue font-medium rounded-[30px] w-fit">
            {t('faq.title')}
          </h1>
          <h2 className="mt-5 font-semibold text-24 sm:text-48 text-main-black">
            {t('faq.subtitle')}
          </h2>
          <p className="text-paragraph mt-[30px] max-w-[424px] mb-[18px]">
            {t('faq.description')}
          </p>

        </div>
        <div className="col-span-6 mt-5 md:mt-0">
          <div data-aos="fade-up" className="flex flex-col gap-2.5 w-full">
            {/* <!-- faq single start  --> */}
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`py-5 px-2 md:px-[30px] w-full rounded-[10px] h7-faq-toggler overflow-hidden transition-all duration-300 max-h-fit h-fit border border-it-blue/15 ${
                  activeFAQ === index ? "active-h7-faq bg-it-blue/10" : ""
                }`}
                name="faq-1"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between w-full pointer-events-none h-fit">
                  <h1 className="font-semibold sm:text-18 text-main-black">
                    {faq.question}
                  </h1>
                  <svg
                    width="19"
                    height="10"
                    viewBox="0 0 19 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 2L9.5 8L17 2"
                      stroke="#5F57FF"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                {activeFAQ === index && (
                  <p className="mt-3.5 text-paragraph pointer-events-none h-fit">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
