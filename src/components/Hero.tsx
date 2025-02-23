
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-fosshid-blue min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/lovable-uploads/fa12d746-0a01-48cb-aa7f-92c9e72a37e4.png')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-fosshid-blue/90 to-fosshid-yellow/40"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Fondation Saidi SHISHOMBO pour le Développement
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8">
              Unité, Amour, Développement - Ensemble pour un avenir meilleur en République Démocratique du Congo
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
              <Link
                to="/join"
                className="text-sm sm:text-base bg-fosshid-yellow hover:bg-yellow-400 text-gray-800 font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition-duration-300"
              >
                Nous Rejoindre
              </Link>
              <Link
                to="/donate"
                className="text-sm sm:text-base bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition-duration-300"
              >
                Faire un Don
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-12 md:mt-0 hidden md:block">
            <img
              src="/lovable-uploads/e8f4d173-dd5a-4746-83f4-3b9621150f80.png"
              alt="FOSSHID Impact"
              className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
