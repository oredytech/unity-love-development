import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Mission from "../components/Mission";
import LatestArticles from "../components/LatestArticles";
import Events from "../components/Events";
import Contact from "../components/Contact";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Mission />
      <LatestArticles />
      <Events />
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;