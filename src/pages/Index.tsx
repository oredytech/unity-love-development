import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Mission from "../components/Mission";
import LatestArticles from "../components/LatestArticles";
import Events from "../components/Events";
import Contact from "../components/Contact";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Separator className="my-1 opacity-30" />
      <About />
      <Separator className="my-1 opacity-30" />
      <Mission />
      <Separator className="my-1 opacity-30" />
      <LatestArticles />
      <Separator className="my-1 opacity-30" />
      <Events />
      <Separator className="my-1 opacity-30" />
      <Contact />
      <Separator className="my-1 opacity-30" />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;