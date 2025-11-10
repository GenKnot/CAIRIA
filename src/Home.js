import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FeatureSection from "./components/FeatureSection";
import FeatureCards from "./components/FeatureCards";
import FeatureHighlights from "./components/FeatureHighlights";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CallToAction from "./components/CallToAction";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import PageLayout from "./components/PageLayout";
import Header from "./components/Header";
import About from "./components/About";
import FeatureShowcase from "./components/FeatureShowcase";

export default function Home() {
  return (
    <PageLayout>
      <Header />
      <Hero />
      <FeatureSection />
      <Features />
      <FeatureCards />
      <FeatureShowcase />
      <About />
      <FeatureHighlights />
      <Testimonials />
      <FAQ />
      <CallToAction />
      <ContactForm />
      <Footer />
    </PageLayout>
  );
}
