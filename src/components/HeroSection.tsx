import heroMosque from "@/assets/hero-mosque.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroMosque})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 py-20 mt-12">
        <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 drop-shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
          Noor ul Quran
        </h1>
        <p className="hero-tagline text-xl md:text-2xl text-white/95 drop-shadow-lg animate-fade-in-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
          "We live by Quran"
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
