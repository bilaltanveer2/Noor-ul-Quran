import CourseCard from "./CourseCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import cloudBg from "@/assets/cloud-bg.jpg";
import quranRecitation from "@/assets/quran-recitation.jpg";
import tajweedRules from "@/assets/tajweed-rules.jpg";
import hifzQuran from "@/assets/hifz-quran.jpg";
import quranicStories from "@/assets/quranic-stories.jpg";
import arabicLanguage from "@/assets/arabic-language.jpg";

const courses = [
  {
    image: quranRecitation,
    title: "Quran Recitation",
    description: "Learn recitation/Nazra with proper pronunciation in a calm and supportive learning environment."
  },
  {
    image: tajweedRules,
    title: "Tajweed Rules",
    description: "Understand and apply Tajweed rules step by step to recite the Quran accurately and beautifully."
  },
  {
    image: hifzQuran,
    title: "Hifz-ul-Quran",
    description: "Structured memorization program with regular revision, guidance, and individual attention."
  },
  {
    image: quranRecitation,
    title: "Quran Easy Translation & Tafsir with Notes",
    description: "Understand the meaning and explanation of Quranic verses for reflection and practical guidance in daily life."
  },
  {
    image: quranicStories,
    title: "Quranic Stories & Background of Surahs",
    description: "Explore Quranic stories and the background of Surahs to build understanding, connection, and love for the Quran."
  },
  {
    image: arabicLanguage,
    title: "Arabic Language (For Non-Native Speakers)",
    description: "Learn Arabic reading, speaking, and comprehension along with basic grammar in a simple and structured manner."
  }
];

const CoursesSection = () => {
  const titleAnim = useScrollAnimation(0);

  return (
    <section 
      className="py-16 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${cloudBg})` }}
    >
      <div className="container mx-auto px-4">
        <h2 ref={titleAnim.ref} className={`section-title scroll-fade-up ${titleAnim.isVisible ? 'visible' : ''}`}>Courses we Offer</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <CourseCard 
              key={index} 
              image={course.image} 
              title={course.title} 
              description={course.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
