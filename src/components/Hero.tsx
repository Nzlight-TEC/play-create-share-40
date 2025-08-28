import { Button } from "@/components/ui/button";
import { Play, Zap, Users } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-primary rounded-full blur-sm animate-pulse" />
      <div className="absolute bottom-32 right-16 w-12 h-12 bg-gradient-accent rounded-full blur animate-bounce" />
      <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-gradient-secondary rounded-full blur-sm animate-ping" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-in slide-in-from-bottom-8 duration-1000">
          GameForge
        </h1>
        
        <p className="text-2xl md:text-3xl mb-4 text-foreground/90 animate-in slide-in-from-bottom-8 duration-1000 delay-300">
          Create. Play. Share.
        </p>
        
        <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-2xl mx-auto animate-in slide-in-from-bottom-8 duration-1000 delay-500">
          Build amazing games with our simple drag-and-drop tools. No coding required. 
          Join millions of creators in the ultimate gaming community.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-in slide-in-from-bottom-8 duration-1000 delay-700">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-gradient-primary hover:shadow-glow smooth-transition group"
          >
            <Play className="mr-2 group-hover:scale-110 smooth-transition" size={24} />
            Start Creating
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10 hover:shadow-glow smooth-transition group"
          >
            <Zap className="mr-2 group-hover:scale-110 smooth-transition" size={24} />
            Explore Games
          </Button>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-in slide-in-from-bottom-8 duration-1000 delay-1000">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">1M+</div>
            <div className="text-sm text-muted-foreground">Games Created</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary">500K+</div>
            <div className="text-sm text-muted-foreground">Active Creators</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">10M+</div>
            <div className="text-sm text-muted-foreground">Players Daily</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;