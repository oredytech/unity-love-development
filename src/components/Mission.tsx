import { Heart, Users, Globe } from "lucide-react";

const Mission = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Notre Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            FOSSHID s'engage à promouvoir le développement durable et l'amélioration des conditions de vie en République Démocratique du Congo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-fosshid-yellow rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <Heart className="h-12 w-12 text-gray-800" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Amour</h3>
            <p className="text-gray-600">
              Nous agissons avec compassion et bienveillance pour créer un impact positif dans nos communautés.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-fosshid-blue rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <Users className="h-12 w-12 text-gray-800" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Unité</h3>
            <p className="text-gray-600">
              Ensemble, nous sommes plus forts. Nous encourageons la collaboration et la solidarité.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-fosshid-green rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <Globe className="h-12 w-12 text-gray-800" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Développement</h3>
            <p className="text-gray-600">
              Notre objectif est de contribuer au développement durable et à l'autonomisation des communautés.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;