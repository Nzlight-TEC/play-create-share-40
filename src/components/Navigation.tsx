import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Gamepad2, 
  Home, 
  Compass, 
  PlusCircle, 
  User, 
  Menu,
  Search,
  Trophy
} from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <Gamepad2 className="text-primary-foreground" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                GameForge
              </h1>
              <div className="text-xs text-muted-foreground -mt-1">
                Create • Play • Share
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <Button variant="ghost" size="sm" className="gap-2 hover:bg-primary/10">
              <Home size={16} />
              Home
            </Button>
            <Button variant="ghost" size="sm" className="gap-2 hover:bg-primary/10">
              <Compass size={16} />
              Discover
            </Button>
            <Button variant="ghost" size="sm" className="gap-2 hover:bg-primary/10">
              <Trophy size={16} />
              Trending
            </Button>
            <Button variant="ghost" size="sm" className="gap-2 hover:bg-primary/10">
              <Search size={16} />
              Search
            </Button>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden sm:flex gap-2 border-primary/50 hover:bg-primary/10 hover:shadow-glow"
            >
              <PlusCircle size={16} />
              Create Game
            </Button>
            
            <div className="relative">
              <Button variant="ghost" size="sm" className="gap-2 hover:bg-primary/10">
                <User size={16} />
                <span className="hidden sm:inline">Profile</span>
              </Button>
              <Badge className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs px-1.5 py-0.5">
                1.2K
              </Badge>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={20} />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 py-4 space-y-2">
            <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
              <Home size={16} />
              Home
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
              <Compass size={16} />
              Discover
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
              <Trophy size={16} />
              Trending
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
              <Search size={16} />
              Search
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full justify-start gap-2 border-primary/50 hover:bg-primary/10"
            >
              <PlusCircle size={16} />
              Create Game
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;