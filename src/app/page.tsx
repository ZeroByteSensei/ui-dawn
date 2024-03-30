import CTAsection from "@/components/ui/CTASection/page";
import FeaturesSection from "@/components/ui/FeaturesSection/page";
import FrameworkSection from "@/components/ui/FrameworkSection/page";
import HeroSection from "@/components/ui/HeroSection/page";

import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section will come here */}
      <HeroSection/>

      {/* Features Section will come here */}
      <FeaturesSection/>

      {/* Frameworks Section will come here */}
      <FrameworkSection/>

      {/* Template CTA Section will come here */}

      {/* CTA Section will come here */}
      <CTAsection/>
    </>
  );
}
