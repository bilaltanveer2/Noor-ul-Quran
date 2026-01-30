import cloudBg from "@/assets/cloud-bg.jpg";
import resources from "@/assets/resources.jpg";

const ResourcesSection = () => {
  return (
    <section 
      className="py-16 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${cloudBg})` }}
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title animate-fade-in-up" style={{ animationDelay: '0.1s', opacity: 0 }}>Resources</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-4xl mx-auto">
          {/* Image */}
          <div className="flex-shrink-0 animate-slide-in-left" style={{ animationDelay: '0.3s', opacity: 0 }}>
            <img 
              src={resources} 
              alt="Resources" 
              className="w-64 h-48 md:w-80 md:h-60 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          {/* Content */}
          <div className="text-center md:text-left max-w-md animate-slide-in-right" style={{ animationDelay: '0.5s', opacity: 0 }}>
            <p className="text-muted-foreground leading-relaxed">
              We also provide simple resources to support Quran learning at home, including guidance for daily Salah, essential Duas, and practice support for students. More resources will be added gradually, In shaa Allah.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
