import Component from "./_components/Hero";
import UniqueHeader from "./_components/Header";

import AnimatedFeatures from "./_components/Feature";

import SmoothFAQ from "./_components/Faq";

import AnimatedFooter from "./_components/Footer";

export default function Home() {
  return (
    <div>
      <UniqueHeader />
      <Component />
      <AnimatedFeatures />
      <SmoothFAQ />
      <AnimatedFooter />
    </div>
  );
}
