import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import cloudBg from "@/assets/cloud-bg.jpg";
import contactLantern from "@/assets/contact-lantern.jpg";

const ContactSection = () => {
  return (
    <section 
      className="py-16 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${cloudBg})` }}
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title animate-fade-in-up" style={{ animationDelay: '0.1s', opacity: 0 }}>Contact</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-4xl mx-auto">
          {/* Image */}
          <div className="flex-shrink-0 animate-slide-in-left" style={{ animationDelay: '0.3s', opacity: 0 }}>
            <img 
              src={contactLantern} 
              alt="Contact Us" 
              className="w-48 h-64 md:w-56 md:h-72 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          {/* Content */}
          <div className="text-center md:text-left max-w-md animate-slide-in-right" style={{ animationDelay: '0.5s', opacity: 0 }}>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We're here to help you get started on your Quran learning journey. Whether you have questions, want to book a free demo, or need guidance for your child, feel free to reach out.
            </p>
            
            {/* Contact Icons */}
            <div className="flex justify-center md:justify-start gap-4 mb-4">
              <a 
                href="https://wa.me/923485094889" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-primary-foreground hover:bg-green-600 transition-colors animate-scale-in"
                style={{ animationDelay: '0.7s', opacity: 0 }}
              >
                <Phone className="w-5 h-5" />
              </a>
              <a 
                href="mailto:noorulquran2646@gmail.com"
                className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-primary-foreground hover:bg-blue-600 transition-colors animate-scale-in"
                style={{ animationDelay: '0.8s', opacity: 0 }}
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            
            {/* Contact Details */}
            <div className="text-sm text-muted-foreground space-y-1 mb-6">
              <p><strong>Phone / WhatsApp:</strong> +92 348 5094889</p>
              <p><strong>Email:</strong> noorulquran2646@gmail.com</p>
            </div>
            
            <Button 
              variant="outline" 
              className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
              onClick={() => window.open("https://wa.me/923485094889", "_blank")}
            >
              Book Free Demo on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
