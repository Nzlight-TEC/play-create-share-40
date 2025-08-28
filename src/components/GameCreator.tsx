import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Gamepad2, 
  Layers, 
  Palette, 
  Music, 
  Zap, 
  Code, 
  Sparkles,
  ArrowRight 
} from "lucide-react";
import creatorInterface from "@/assets/creator-interface.jpg";

const tools = [
  {
    icon: Layers,
    title: "Drag & Drop Builder",
    description: "Create game worlds with our intuitive visual editor",
    color: "text-primary"
  },
  {
    icon: Palette,
    title: "Asset Library",
    description: "Thousands of sprites, backgrounds, and effects",
    color: "text-secondary"
  },
  {
    icon: Music,
    title: "Sound Studio",
    description: "Add music and sound effects with one click",
    color: "text-accent"
  },
  {
    icon: Zap,
    title: "Instant Publish",
    description: "Share your games with the world instantly",
    color: "text-primary"
  }
];

const GameCreator = () => {
  return (
    <section className="py-20 px-6 relative">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-primary rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-accent rounded-full blur-2xl opacity-30" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
            Create Without Limits
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Turn your ideas into playable games with our powerful, yet simple creation tools
          </p>
        </div>
        
        {/* Creation Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {tools.map((tool, index) => (
            <Card key={index} className="group card-shadow hover:shadow-accent-glow smooth-transition border-border/50 hover:border-accent/50 bg-card/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className={`mx-auto mb-4 p-4 rounded-full bg-gradient-accent/10 group-hover:bg-gradient-accent/20 smooth-transition`}>
                  <tool.icon className={`${tool.color} group-hover:scale-110 smooth-transition`} size={32} />
                </div>
                <CardTitle className="text-lg group-hover:text-accent smooth-transition">
                  {tool.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">
                  {tool.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Creator Spotlight */}
        <div className="bg-gradient-to-r from-card/50 to-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4 bg-gradient-secondary text-secondary-foreground">
                <Sparkles size={14} className="mr-1" />
                Creator Spotlight
              </Badge>
              <h3 className="text-3xl font-bold mb-4">
                Start Your Game Dev Journey Today
              </h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of creators who have built amazing games without writing a single line of code. 
                Our intuitive tools make game development accessible to everyone.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm">No coding experience required</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span className="text-sm">Publish and monetize your games</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-sm">Active community support</span>
                </div>
              </div>
              <Button className="bg-gradient-accent hover:shadow-accent-glow smooth-transition group">
                <Code className="mr-2 group-hover:scale-110 smooth-transition" size={18} />
                Launch Creator Studio
                <ArrowRight className="ml-2 group-hover:translate-x-1 smooth-transition" size={18} />
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-gradient-hero rounded-lg overflow-hidden border border-border/50">
                <img 
                  src={creatorInterface} 
                  alt="Game Creator Interface"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Gamepad2 className="text-primary" size={20} />
                    <span className="text-sm font-medium">Visual Game Editor</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Drag, drop, and create your dream game in minutes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameCreator;