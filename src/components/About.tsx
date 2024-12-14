import { BookOpen, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            À Propos de FOSSHID
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La Fondation Saidi SHISHOMBO pour le Développement œuvre pour l'amélioration des conditions de vie en République Démocratique du Congo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-fosshid-blue/10 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <BookOpen className="h-12 w-12 text-fosshid-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4">Notre Histoire</h3>
            <p className="text-muted-foreground">
              Fondée avec la vision de transformer positivement la vie des communautés congolaises, FOSSHID s'engage dans des projets durables et innovants.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-fosshid-yellow/10 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <Target className="h-12 w-12 text-fosshid-yellow" />
            </div>
            <h3 className="text-xl font-bold mb-4">Notre Vision</h3>
            <p className="text-muted-foreground">
              Créer un avenir meilleur pour la RDC en promouvant le développement durable et l'autonomisation des communautés.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-fosshid-red/10 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <Users className="h-12 w-12 text-fosshid-red" />
            </div>
            <h3 className="text-xl font-bold mb-4">Notre Impact</h3>
            <p className="text-muted-foreground">
              Des milliers de vies transformées à travers nos programmes de santé, d'éducation et de développement communautaire.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/about">
            <Button variant="outline" size="lg">
              En savoir plus
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;