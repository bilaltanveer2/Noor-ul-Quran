import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import cloudBg from "@/assets/cloud-bg.jpg";
import inclusiveLearning from "@/assets/inclusive-learning.jpg";

const InclusiveLearningSection = () => {
  const titleAnim = useScrollAnimation(0);
  const imageAnim = useScrollAnimation(100);
  const contentAnim = useScrollAnimation(200);

  return (
    <section 
      className="py-16 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${cloudBg})` }}
    >
      <div className="container mx-auto px-4">
        <h2 ref={titleAnim.ref} className={`section-title scroll-fade-up ${titleAnim.isVisible ? 'visible' : ''}`}>Inclusive Learning</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-4xl mx-auto">
          {/* Image */}
          <div ref={imageAnim.ref} className={`flex-shrink-0 scroll-slide-left ${imageAnim.isVisible ? 'visible' : ''}`}>
            <img 
              src={inclusiveLearning} 
              alt="Inclusive Learning" 
              className="w-64 h-48 md:w-80 md:h-60 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          {/* Content */}
          <div ref={contentAnim.ref} className={`text-center md:text-left max-w-md scroll-slide-right ${contentAnim.isVisible ? 'visible' : ''}`}>
            <p className="text-muted-foreground leading-relaxed">
              At Noor ul Quran, we understand that every child learns differently. We provide supportive Quran learning for children with special needs, including autism and ADHD. Our teachers are experienced in working with such learners, offering patience, structure, and individualized attention in a calm and encouraging environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InclusiveLearningSection;
