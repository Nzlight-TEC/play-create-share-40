import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import GameGallery from "@/components/GameGallery";
import GameCreator from "@/components/GameCreator";
import BlockBuilder from "@/components/BlockBuilder";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <GameGallery />
        <BlockBuilder />
        <GameCreator />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
