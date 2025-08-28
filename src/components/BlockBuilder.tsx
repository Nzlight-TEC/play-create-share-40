import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Box, 
  Pickaxe, 
  TreePine, 
  Mountain, 
  Waves, 
  Users,
  Settings,
  Share2,
  Play,
  ArrowRight
} from "lucide-react";
import blockWorldCreative from "@/assets/block-world-creative.jpg";

const blockTypes = [
  { icon: Box, name: "Stone", color: "bg-slate-500" },
  { icon: TreePine, name: "Wood", color: "bg-amber-600" },
  { icon: Mountain, name: "Dirt", color: "bg-amber-800" },
  { icon: Waves, name: "Water", color: "bg-blue-500" }
];

const BlockBuilder = () => {
  return (
    <section className="py-20 px-6 relative">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-secondary rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-10 left-20 w-32 h-32 bg-gradient-primary rounded-full blur-2xl opacity-30" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-accent text-accent-foreground">
            <Box size={14} className="mr-1" />
            Block World Creator
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Build Without Limits
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create infinite 3D worlds with our block-based building system. 
            The ultimate digital LEGO experience with unlimited possibilities.
          </p>
        </div>
        
        {/* Block Builder Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6">
              Procedural Block Worlds
            </h3>
            <p className="text-muted-foreground mb-8">
              Generate infinite terrain made of cubes. Build, break, and reshape your world 
              with simple yet powerful tools that anyone can master.
            </p>
            
            {/* Block Types */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {blockTypes.map((block, index) => (
                <Card key={index} className="group cursor-pointer border-border/50 hover:border-primary/50 smooth-transition bg-card/50">
                  <CardContent className="p-4 text-center">
                    <div className={`mx-auto mb-2 p-3 rounded-lg ${block.color} text-white`}>
                      <block.icon size={24} />
                    </div>
                    <p className="text-sm font-medium">{block.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-sm">Place and destroy blocks freely</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span className="text-sm">Procedurally generated infinite worlds</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-sm">Real-time multiplayer building</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-sm">Simple avatar system for exploration</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button className="bg-gradient-primary hover:shadow-glow smooth-transition group">
                <Play className="mr-2 group-hover:scale-110 smooth-transition" size={18} />
                Start Building
                <ArrowRight className="ml-2 group-hover:translate-x-1 smooth-transition" size={18} />
              </Button>
              <Button variant="outline" className="border-secondary/50 hover:bg-secondary/10">
                <Users className="mr-2" size={18} />
                Join Multiplayer
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-video bg-gradient-secondary rounded-2xl overflow-hidden border border-border/50 shadow-card">
              <img 
                src={blockWorldCreative} 
                alt="Block World Creator Interface"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              
              {/* Floating Tool Palette */}
              <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 border border-border/50">
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                    <Pickaxe size={16} className="text-white" />
                  </div>
                  <div className="w-8 h-8 bg-secondary rounded flex items-center justify-center">
                    <Box size={16} className="text-white" />
                  </div>
                  <div className="w-8 h-8 bg-accent rounded flex items-center justify-center">
                    <Settings size={16} className="text-white" />
                  </div>
                </div>
              </div>
              
              {/* Share Button */}
              <div className="absolute top-4 right-4">
                <Button size="sm" className="bg-accent/90 hover:bg-accent">
                  <Share2 size={16} className="mr-1" />
                  Share World
                </Button>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Box className="text-primary" size={18} />
                      <span className="text-sm font-medium">Creative Mode</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Unlimited blocks • Infinite terrain • Real-time collaboration
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">∞</div>
                    <p className="text-xs text-muted-foreground">Blocks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockBuilder;