import { Button } from "@/components/ui/button";

interface CourseCardProps {
  image: string;
  title: string;
  description: string;
  index?: number;
}

const CourseCard = ({ image, title, description, index = 0 }: CourseCardProps) => {
  return (
    <div 
      className="course-card-glass group flex flex-col items-center text-center max-w-sm rounded-2xl p-6 backdrop-blur-lg bg-white/40 border border-white/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.15),inset_0_1px_0_0_rgba(255,255,255,0.5)] hover:bg-white/50 hover:border-white/70 hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.2),inset_0_1px_0_0_rgba(255,255,255,0.6)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
      style={{ 
        animationDelay: `${index * 0.1}s`,
        animation: 'fadeInUp 0.8s ease-out forwards'
      }}
    >
      {/* Glass overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
      
      {/* Water Drops - Stay on glass then fall */}
      <div className="water-drop-falling absolute top-0 left-[10%] w-2 h-2" style={{ animationDelay: '0s', animationDuration: '3.5s' }}></div>
      <div className="water-drop-falling absolute top-0 left-[25%] w-1.5 h-1.5" style={{ animationDelay: '0.3s', animationDuration: '3.8s' }}></div>
      <div className="water-drop-falling absolute top-0 left-[45%] w-1 h-1" style={{ animationDelay: '0.6s', animationDuration: '3.6s' }}></div>
      <div className="water-drop-falling absolute top-0 left-[65%] w-2.5 h-2.5" style={{ animationDelay: '0.9s', animationDuration: '4s' }}></div>
      <div className="water-drop-falling absolute top-0 left-[80%] w-1.5 h-1.5" style={{ animationDelay: '1.2s', animationDuration: '3.7s' }}></div>
      <div className="water-drop-falling absolute top-0 left-[15%] w-1 h-1" style={{ animationDelay: '1.5s', animationDuration: '3.9s' }}></div>
      <div className="water-drop-falling absolute top-0 left-[35%] w-2 h-2" style={{ animationDelay: '1.8s', animationDuration: '3.5s' }}></div>
      <div className="water-drop-falling absolute top-0 left-[55%] w-1.5 h-1.5" style={{ animationDelay: '2.1s', animationDuration: '3.6s' }}></div>
      <div className="water-drop-falling absolute top-0 left-[75%] w-1 h-1" style={{ animationDelay: '2.4s', animationDuration: '3.8s' }}></div>
      <div className="water-drop-falling absolute top-0 left-[20%] w-2 h-2" style={{ animationDelay: '2.7s', animationDuration: '3.5s' }}></div>
      <div className="water-drop-falling absolute top-0 left-[40%] w-1.5 h-1.5" style={{ animationDelay: '3s', animationDuration: '3.7s' }}></div>
      <div className="water-drop-falling absolute top-0 left-[60%] w-1 h-1" style={{ animationDelay: '3.3s', animationDuration: '3.9s' }}></div>
      
      {/* Content wrapper */}
      <div className="relative z-10 w-full">
        {/* Image */}
        <div className="w-full aspect-square mb-4 overflow-hidden rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.25)] border border-white/40 backdrop-blur-sm bg-white/10 group-hover:border-white/60 transition-all duration-300">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        
        {/* Content */}
        <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 drop-shadow-sm">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed drop-shadow-sm">
          {description}
        </p>
        
        <Button 
          variant="outline" 
          className="w-full border-green-500 text-green-600 hover:bg-green-500 hover:text-white shadow-md hover:shadow-lg backdrop-blur-sm bg-white/30 hover:bg-green-500 transition-all duration-300"
          onClick={() => window.open("https://wa.me/923485094889", "_blank")}
        >
          Book Free Demo
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
