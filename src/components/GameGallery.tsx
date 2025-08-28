import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Play, Star, Users } from "lucide-react";
import gameSpace from "@/assets/game-space.jpg";
import gamePlatformer from "@/assets/game-platformer.jpg";
import gameRacing from "@/assets/game-racing.jpg";
import gamePuzzle from "@/assets/game-puzzle.jpg";
import gameBattle from "@/assets/game-battle.jpg";
import gameMagic from "@/assets/game-magic.jpg";

import blockWorldCreative from "@/assets/block-world-creative.jpg";
import blockWorldMultiplayer from "@/assets/block-world-multiplayer.jpg";
import blockWorldAdventure from "@/assets/block-world-adventure.jpg";

const games = [
  {
    id: 1,
    title: "Block World Creative",
    creator: "BuildMaster",
    thumbnail: blockWorldCreative,
    players: 4500,
    rating: 4.9,
    likes: 5200,
    category: "Building",
    description: "Infinite creative mode with unlimited blocks and terrain generation!"
  },
  {
    id: 2,
    title: "Block Multiplayer",
    creator: "CraftCommunity",
    thumbnail: blockWorldMultiplayer,
    players: 8900,
    rating: 4.8,
    likes: 7800,
    category: "Multiplayer",
    description: "Build together with friends in real-time collaborative worlds!"
  },
  {
    id: 3,
    title: "Block Adventure",
    creator: "ExplorerDev",
    thumbnail: blockWorldAdventure,
    players: 3200,
    rating: 4.7,
    likes: 4100,
    category: "Survival",
    description: "Survive and thrive in procedurally generated block worlds!"
  },
  {
    id: 4,
    title: "Space Adventure",
    creator: "CosmicGamer",
    thumbnail: gameSpace,
    players: 1250,
    rating: 4.8,
    likes: 2100,
    category: "Adventure",
    description: "Explore the galaxy in this epic space adventure!"
  },
  {
    id: 5,
    title: "Racing Thunder",
    creator: "SpeedDemon",
    thumbnail: gameRacing,
    players: 2100,
    rating: 4.9,
    likes: 3200,
    category: "Racing",
    description: "High-speed racing with stunning visuals!"
  },
  {
    id: 6,
    title: "Battle Arena",
    creator: "WarriorKing",
    thumbnail: gameBattle,
    players: 3400,
    rating: 4.8,
    likes: 4100,
    category: "Action",
    description: "Epic multiplayer battles await!"
  }
];

const GameGallery = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-secondary bg-clip-text text-transparent">
            Featured Games
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover amazing games created by our community of talented developers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {games.map((game) => (
            <Card key={game.id} className="group card-shadow hover:shadow-glow smooth-transition border-border/50 hover:border-primary/50 bg-card/80 backdrop-blur-sm">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={game.thumbnail} 
                    alt={game.title}
                    className="w-full h-48 object-cover group-hover:scale-105 smooth-transition"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 smooth-transition" />
                  <Button 
                    size="sm" 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 smooth-transition bg-primary/90 hover:bg-primary"
                  >
                    <Play size={16} className="mr-1" />
                    Play Now
                  </Button>
                  <Badge className="absolute top-3 left-3 bg-accent/90 text-accent-foreground">
                    {game.category}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="p-4">
                <CardTitle className="text-xl mb-2 group-hover:text-primary smooth-transition">
                  {game.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground mb-3">
                  by {game.creator}
                </p>
                <p className="text-sm text-foreground/80 mb-4">
                  {game.description}
                </p>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Users size={14} />
                      {game.players.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Star size={14} className="fill-current text-accent" />
                      {game.rating}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                    <Heart size={14} className="mr-1" />
                    {game.likes.toLocaleString()}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10 hover:shadow-glow">
            View All Games
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GameGallery;