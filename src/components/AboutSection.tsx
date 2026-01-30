import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import logo from "@/assets/logo.png";
import cloudBg from "@/assets/cloud-bg.jpg";

const AboutSection = () => {
  const titleAnim = useScrollAnimation(0);
  const logoAnim = useScrollAnimation(100);
  const contentAnim = useScrollAnimation(200);

  return (
    <section 
      className="py-16 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${cloudBg})` }}
    >
      <div className="container mx-auto px-4">
        <h2 ref={titleAnim.ref} className={`section-title scroll-fade-up ${titleAnim.isVisible ? 'visible' : ''}`}>About us</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 max-w-4xl mx-auto">
          {/* Logo */}
          <div ref={logoAnim.ref} className={`flex-shrink-0 scroll-scale ${logoAnim.isVisible ? 'visible' : ''}`}>
            <img 
              src={logo} 
              alt="Noor ul Quran Logo" 
              className="w-48 h-48 md:w-56 md:h-56 object-contain"
            />
          </div>
          
          {/* Content */}
          <div ref={contentAnim.ref} className={`text-center md:text-left max-w-md scroll-slide-right ${contentAnim.isVisible ? 'visible' : ''}`}>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Noor ul Quran is an online Quran learning platform dedicated to helping students build a strong connection with the Quran through correct recitation, understanding, and Islamic character building. Our classes are designed for children, women, and adults in a calm and supportive online environment.
            </p>
            
            <Button 
              variant="outline" 
              className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
              onClick={() => window.open("https://wa.me/923485094889", "_blank")}
            >
              Book Free Demo
            </Button>
            
            <p className="text-sm text-muted-foreground mt-3">
              One Free Trial Class Available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
