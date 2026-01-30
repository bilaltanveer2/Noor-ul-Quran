import { Button } from "@/components/ui/button";
import cloudBg from "@/assets/cloud-bg.jpg";
import hifzQuran from "@/assets/hifz-quran.jpg";

const FreeDemoSection = () => {
  return (
    <section 
      className="py-16 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${cloudBg})` }}
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title animate-fade-in-up" style={{ animationDelay: '0.1s', opacity: 0 }}>Free Demo</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-4xl mx-auto">
          {/* Image */}
          <div className="flex-shrink-0 animate-slide-in-left" style={{ animationDelay: '0.3s', opacity: 0 }}>
            <img 
              src={hifzQuran} 
              alt="Free Demo Class" 
              className="w-64 h-48 md:w-80 md:h-60 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          {/* Content */}
          <div className="text-center md:text-left max-w-md animate-slide-in-right" style={{ animationDelay: '0.5s', opacity: 0 }}>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Ready to begin your Quran learning journey? Book a free demo class and experience our supportive teaching environment firsthand. See how our qualified teachers can help you or your child connect with the Quran.
            </p>
            
            <Button 
              variant="outline" 
              className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
              onClick={() => window.open("https://wa.me/923485094889", "_blank")}
            >
              Book Free Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeDemoSection;
