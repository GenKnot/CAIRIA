import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../contexts/LanguageContext";
import { getTranslation } from "../translations/translations";

export default function AboutPage() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleContactClick = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <PageLayout>
      <Header />
      
      {/* Hero Section */}
      <section className="relative flex justify-center w-full py-3 pt-24 overflow-hidden bg-white">
        <div className="relative w-full max-w-[1860px] overflow-hidden bg-[#10100E] rounded-[20px]">
          <img
            src="/assets/images/home-nine/hero-bg.png"
            alt=""
            className="absolute z-0 w-full h-full mx-auto cta_bg_anim"
          />
          <div className="w-full max-w-[1506px] theme-container mx-auto relative z-10">
            <div className="text-center pt-[70px] lg:pt-[120px] pb-[70px] lg:pb-[120px] px-4">
              <h1 className="px-5 bg-white/10 border border-white/20 text-white font-medium rounded-[30px] w-fit mb-8 mx-auto">
                {t('aboutPage.heroTitle')}
              </h1>
              <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-bold text-white leading-tight mb-6 max-w-[900px] mx-auto">
                {t('aboutPage.heroSubtitle')}
              </h2>
              <p className="text-xl font-medium text-white/90 leading-relaxed mb-10 max-w-[800px] mx-auto">
                {t('aboutPage.heroDescription')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#mission">
                  <div className="home-two-btn-white group before:bg-app-main after:bg-app-main border-app-main hover:border-white">
                    <span className="relative z-10 py-1 text-base font-semibold transition-all duration-300 group-hover:text-white text-main-black font-inter">
                      {t('aboutPage.ourMission')}
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
                <button onClick={handleContactClick}>
                  <div className="home-two-btn-white-rev group before:bg-app-main after:bg-app-main hover:border-app-main">
                    <span className="text-base group-hover:text-main-black text-white transition-all duration-300 font-semibold font-inter relative z-10 py-0.5">
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
                        className="transition-all duration-300 group-hover:stroke-main-black stroke-white"
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
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-[70px] md:py-[130px] bg-white">
        <div className="w-full mx-auto theme-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-20">
            <div className="lg:col-span-6">
              <h3 className="px-5 bg-main-gray border border-purple/20 text-purple font-medium rounded-[30px] w-fit mb-6">
                {t('about.mission')}
              </h3>
              <h4 className="text-3xl sm:text-4xl font-bold text-main-black mb-6">
                {t('about.missionTitle')}
              </h4>
              <p className="text-lg text-paragraph leading-relaxed mb-6">
                {t('about.missionText1')}
              </p>
              <p className="text-lg text-paragraph leading-relaxed">
                {t('about.missionText2')}
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="relative flex justify-center overflow-hidden rounded-[20px]">
                <video
                  src="/228243_small.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative flex justify-center">
                <img
                  src="/assets/images/home-seven/business.png"
                  alt="Vision"
                  className="relative z-10"
                />
              </div>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <h3 className="px-5 bg-main-gray border border-purple/20 text-purple font-medium rounded-[30px] w-fit mb-6">
                {t('about.vision')}
              </h3>
              <h4 className="text-3xl sm:text-4xl font-bold text-main-black mb-6">
                {t('about.visionTitle')}
              </h4>
              <p className="text-lg text-paragraph leading-relaxed mb-6">
                {t('about.visionText1')}
              </p>
              <p className="text-lg text-paragraph leading-relaxed">
                {t('about.visionText2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-[70px] md:py-[130px] bg-main-gray">
        <div className="w-full mx-auto theme-container">
          <div className="text-center max-w-[800px] mx-auto mb-16">
            <h3 className="px-5 bg-main-gray border border-purple/20 text-purple font-medium rounded-[30px] w-fit mx-auto mb-6">
              {t('whatWeDo.title')}
            </h3>
            <h4 className="text-3xl font-bold sm:text-4xl text-main-black">
              {t('whatWeDo.subtitle')}
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 bg-white rounded-2xl border-2 border-main-black/5 hover:border-purple/20 transition-all hover:shadow-lg">
              <div className="w-16 h-16 rounded-2xl bg-purple/10 flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 14L21 9L12 4L3 9L12 14Z" stroke="#5F57FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 14L21 9V15L12 20L3 15V9L12 14Z" stroke="#5F57FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h5 className="text-xl font-bold text-main-black mb-4">
                {t('whatWeDo.educationTraining.title')}
              </h5>
              <p className="text-paragraph leading-relaxed">
                {t('whatWeDo.educationTraining.description')}
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 bg-white rounded-2xl border-2 border-main-black/5 hover:border-purple/20 transition-all hover:shadow-lg">
              <div className="w-16 h-16 rounded-2xl bg-app-main/20 flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 11L12 14L22 4" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h5 className="text-xl font-bold text-main-black mb-4">
                {t('whatWeDo.certificationPrograms.title')}
              </h5>
              <p className="text-paragraph leading-relaxed">
                {t('whatWeDo.certificationPrograms.description')}
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 bg-white rounded-2xl border-2 border-main-black/5 hover:border-purple/20 transition-all hover:shadow-lg">
              <div className="w-16 h-16 rounded-2xl bg-purple/10 flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#5F57FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#5F57FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#5F57FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#5F57FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h5 className="text-xl font-bold text-main-black mb-4">
                {t('whatWeDo.globalCollaboration.title')}
              </h5>
              <p className="text-paragraph leading-relaxed">
                {t('whatWeDo.globalCollaboration.description')}
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-8 bg-white rounded-2xl border-2 border-main-black/5 hover:border-purple/20 transition-all hover:shadow-lg">
              <div className="w-16 h-16 rounded-2xl bg-app-main/20 flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h5 className="text-xl font-bold text-main-black mb-4">
                {t('whatWeDo.innovationCompetitions.title')}
              </h5>
              <p className="text-paragraph leading-relaxed">
                {t('whatWeDo.innovationCompetitions.description')}
              </p>
            </div>

            {/* Card 5 */}
            <div className="p-8 bg-white rounded-2xl border-2 border-main-black/5 hover:border-purple/20 transition-all hover:shadow-lg">
              <div className="w-16 h-16 rounded-2xl bg-purple/10 flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z" stroke="#5F57FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z" stroke="#5F57FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h5 className="text-xl font-bold text-main-black mb-4">
                {t('whatWeDo.researchDevelopment.title')}
              </h5>
              <p className="text-paragraph leading-relaxed">
                {t('whatWeDo.researchDevelopment.description')}
              </p>
            </div>

            {/* Card 6 */}
            <div className="p-8 bg-white rounded-2xl border-2 border-main-black/5 hover:border-purple/20 transition-all hover:shadow-lg">
              <div className="w-16 h-16 rounded-2xl bg-app-main/20 flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 16V8C20.9996 7.64927 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64927 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.27002 6.96L12 12.01L20.73 6.96" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22.08V12" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h5 className="text-xl font-bold text-main-black mb-4">
                {t('whatWeDo.industryPartnerships.title')}
              </h5>
              <p className="text-paragraph leading-relaxed">
                {t('whatWeDo.industryPartnerships.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Future */}
      <section className="py-[70px] md:py-[130px] bg-white">
        <div className="w-full mx-auto theme-container">
          <div className="max-w-[900px] mx-auto text-center">
            <h3 className="px-5 bg-white border border-purple/20 text-purple font-medium rounded-[30px] w-fit mx-auto mb-6">
              {t('aboutPage.impactTitle')}
            </h3>
            <h4 className="text-3xl font-bold sm:text-4xl text-main-black mb-8">
              {t('aboutPage.impactSubtitle')}
            </h4>
            <p className="text-xl text-paragraph leading-relaxed mb-8">
              {t('aboutPage.impactText1')}
            </p>
            <p className="text-xl text-paragraph leading-relaxed mb-12">
              {t('aboutPage.impactText2')}
            </p>
            <div className="flex justify-center">
              <button onClick={handleContactClick}>
                <div className="home-two-btn-bg py-4 px-8 group bg-purple border-purple hover:border-purple">
                  <span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-main-black font-inter">
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
                      className="transition-all duration-300 group-hover:stroke-main-black stroke-white"
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
          </div>
        </div>
      </section>

      <Footer />
    </PageLayout>
  );
}
