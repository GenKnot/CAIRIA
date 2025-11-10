import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { getTranslation } from "../translations/translations";

export default function ContactForm() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrate with web3forms.com
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="pt-[30px] md:pt-[50px] pb-[70px] md:pb-[130px] bg-white">
      <div className="w-full mx-auto theme-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Side - Content */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-main-black leading-[1.1] mb-8">
              {t('contactForm.title')}<br />
              <span className="text-purple">{t('contactForm.titleHighlight')}</span>
            </h2>
            <p className="text-xl text-paragraph leading-relaxed mb-12">
              {t('contactForm.subtitle')}
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-purple/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                      stroke="#5F57FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 6L12 13L2 6"
                      stroke="#5F57FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-paragraph uppercase tracking-wider mb-1">{t('contactForm.email')}</p>
                  <a
                    href="mailto:info@cairia.ca"
                    className="text-xl font-semibold text-main-black hover:text-purple transition-colors"
                  >
                    info@cairia.ca
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-app-main/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                      stroke="#1E1E1E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                      stroke="#1E1E1E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-paragraph uppercase tracking-wider mb-1">{t('contactForm.location')}</p>
                  <p className="text-xl font-semibold text-main-black">
                    {t('contactForm.locationText')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:col-span-7">
            <div className="bg-main-gray/30 rounded-3xl p-8 md:p-12 lg:p-14 border-2 border-main-black/5">
              <form onSubmit={handleSubmit} className="space-y-7">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-7 py-6 border-2 border-main-black/10 rounded-2xl focus:outline-none focus:border-purple focus:ring-2 focus:ring-purple/20 transition-all bg-white text-main-black placeholder:text-paragraph/40 text-lg"
                    placeholder={t('contactForm.namePlaceholder')}
                  />
                </div>

                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-7 py-6 border-2 border-main-black/10 rounded-2xl focus:outline-none focus:border-purple focus:ring-2 focus:ring-purple/20 transition-all bg-white text-main-black placeholder:text-paragraph/40 text-lg"
                    placeholder={t('contactForm.emailPlaceholder')}
                  />
                </div>

                <div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-7 py-6 border-2 border-main-black/10 rounded-2xl focus:outline-none focus:border-purple focus:ring-2 focus:ring-purple/20 transition-all bg-white text-main-black placeholder:text-paragraph/40 resize-none text-lg"
                    placeholder={t('contactForm.messagePlaceholder')}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full home-two-btn-bg py-6 group bg-purple border-purple hover:border-purple"
                >
                  <span className="relative z-10 text-lg font-semibold text-white transition-all duration-300 group-hover:text-main-black font-inter">
                    {t('contactForm.sendMessage')}
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
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
