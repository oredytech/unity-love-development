import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import LatestArticles from "../components/LatestArticles";
import Events from "../components/Events";
import Newsletter from "../components/Newsletter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Mission />
      <LatestArticles />
      <Events />
      <Newsletter />
    </div>
  );
};

export default Index;