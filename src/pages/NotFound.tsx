import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-8xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            Game Not Found
          </h2>
          <p className="text-muted-foreground mb-8">
            Looks like this game got lost in the digital void. Let's get you back to the action!
          </p>
        </div>
        
        <div className="space-y-4">
          <a 
            href="/" 
            className="inline-flex items-center justify-center rounded-lg bg-gradient-primary px-6 py-3 text-primary-foreground font-medium hover:shadow-glow smooth-transition"
          >
            Return to GameForge
          </a>
          <div className="text-sm text-muted-foreground">
            Or explore our <a href="/" className="text-primary hover:underline">featured games</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
