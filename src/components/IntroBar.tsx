const IntroBar = () => {
  return (
    <section className="bg-primary py-4 px-4 animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
      <div className="container mx-auto">
        <p className="text-center text-primary-foreground text-sm md:text-base leading-relaxed">
          Online <span className="underline">Quran</span> academy offering recitation, Tajweed, Hifz, translation, Tafsir, Seerah, Tarbiyah, and Arabic classes for kids and adults — <span className="text-islamic-gold-light">including learners with special needs.</span>
        </p>
      </div>
    </section>
  );
};

export default IntroBar;
