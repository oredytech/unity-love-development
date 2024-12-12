import { BookOpen, Users, Target } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            À Propos de FOSSHID
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La Fondation Saidi SHISHOMBO pour le Développement œuvre pour l'amélioration des conditions de vie en République Démocratique du Congo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-fosshid-blue rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <BookOpen className="h-12 w-12 text-gray-800" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Notre Histoire</h3>
            <p className="text-gray-600">
              Fondée avec la vision de transformer positivement la vie des communautés congolaises, FOSSHID s'engage dans des projets durables et innovants.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-fosshid-yellow rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <Target className="h-12 w-12 text-gray-800" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Notre Vision</h3>
            <p className="text-gray-600">
              Créer un avenir meilleur pour la RDC en promouvant le développement durable et l'autonomisation des communautés.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-fosshid-green rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <Users className="h-12 w-12 text-gray-800" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Notre Impact</h3>
            <p className="text-gray-600">
              Des milliers de vies transformées à travers nos programmes de santé, d'éducation et de développement communautaire.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;