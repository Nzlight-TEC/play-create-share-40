import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import GameGallery from "@/components/GameGallery";
import GameCreator from "@/components/GameCreator";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <GameGallery />
        <GameCreator />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
