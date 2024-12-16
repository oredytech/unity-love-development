import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img
              src="/lovable-uploads/bdfb01d9-5048-4900-b258-e6a5a8711939.png"
              alt="FOSSHID Logo"
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400">
              Ensemble pour un avenir meilleur en République Démocratique du Congo.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-white">
                  Nos Projets
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Nous Rejoindre</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/membership" className="text-gray-400 hover:text-white">
                  Devenir Membre
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-400 hover:text-white">
                  Faire un Don
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="text-gray-400 hover:text-white">
                  Bénévolat
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} FOSSHID. Tous droits réservés.</p>
          <p className="mt-2">
            Conçu et développé par{" "}
            <a
              href="https://oredytechnologies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fosshid-blue hover:text-fosshid-blue/80"
            >
              Oredy Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;