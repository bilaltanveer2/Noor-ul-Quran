import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroBar from "@/components/IntroBar";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import InclusiveLearningSection from "@/components/InclusiveLearningSection";
import ResourcesSection from "@/components/ResourcesSection";
import FreeDemoSection from "@/components/FreeDemoSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WaterDrops from "@/components/WaterDrops";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <WaterDrops />
      <Navbar />
      <HeroSection />
      <IntroBar />
      <AboutSection />
      <CoursesSection />
      <WhyChooseUsSection />
      <InclusiveLearningSection />
      <ResourcesSection />
      <FreeDemoSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
