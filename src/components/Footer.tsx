import { Button } from "@/components/ui/button";
import { Gamepad2, Github, Twitter, MessageCircle, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Gamepad2 className="text-primary-foreground" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
                  GameForge
                </h3>
                <p className="text-xs text-muted-foreground -mt-1">
                  Create • Play • Share
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              The ultimate platform for game creation and community. Build amazing games without coding.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="border-border/50 hover:border-primary/50">
                <Github size={16} />
              </Button>
              <Button variant="outline" size="sm" className="border-border/50 hover:border-primary/50">
                <Twitter size={16} />
              </Button>
              <Button variant="outline" size="sm" className="border-border/50 hover:border-primary/50">
                <MessageCircle size={16} />
              </Button>
            </div>
          </div>

          {/* Create */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Create</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary smooth-transition">Game Builder</a></li>
              <li><a href="#" className="hover:text-primary smooth-transition">Asset Library</a></li>
              <li><a href="#" className="hover:text-primary smooth-transition">Sound Studio</a></li>
              <li><a href="#" className="hover:text-primary smooth-transition">Templates</a></li>
              <li><a href="#" className="hover:text-primary smooth-transition">Tutorials</a></li>
            </ul>
          </div>

          {/* Play */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Play</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary smooth-transition">Featured Games</a></li>
              <li><a href="#" className="hover:text-primary smooth-transition">New Releases</a></li>
              <li><a href="#" className="hover:text-primary smooth-transition">Top Rated</a></li>
              <li><a href="#" className="hover:text-primary smooth-transition">Categories</a></li>
              <li><a href="#" className="hover:text-primary smooth-transition">Leaderboards</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary smooth-transition">Developer Forum</a></li>
              <li><a href="#" className="hover:text-primary smooth-transition">Discord Server</a></li>
              <li><a href="#" className="hover:text-primary smooth-transition">Events</a></li>
              <li><a href="#" className="hover:text-primary smooth-transition">Contests</a></li>
              <li><a href="#" className="hover:text-primary smooth-transition">Success Stories</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 GameForge. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart className="text-accent" size={14} /> for game creators
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;