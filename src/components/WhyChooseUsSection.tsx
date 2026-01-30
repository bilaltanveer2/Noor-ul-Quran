import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import cloudBg from "@/assets/cloud-bg.jpg";

const features = [
  "Qualified and experienced female teachers",
  "Online classes with flexible timings",
  "One-to-one and small group options",
  "Gentle and supportive teaching style",
  "Free demo class available"
];

const WhyChooseUsSection = () => {
  const titleAnim = useScrollAnimation(0);

  return (
    <section 
      className="py-16 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${cloudBg})` }}
    >
      <div className="container mx-auto px-4">
        <h2 ref={titleAnim.ref} className={`section-title scroll-fade-up ${titleAnim.isVisible ? 'visible' : ''}`}>Why Choose Us?</h2>
        
        <div className="max-w-2xl mx-auto">
          <ul className="space-y-3">
            {features.map((feature, index) => {
              const featureAnim = useScrollAnimation(100 + index * 50);
              return (
                <li 
                  key={index}
                  ref={featureAnim.ref}
                  className={`flex items-start gap-3 text-muted-foreground scroll-fade-up ${featureAnim.isVisible ? 'visible' : ''}`}
                >
                  <span className="text-primary mt-1">•</span>
                  <span>{feature}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
