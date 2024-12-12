import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img
                className="h-12 w-auto"
                src="/lovable-uploads/e8f4d173-dd5a-4746-83f4-3b9621150f80.png"
                alt="FOSSHID Logo"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Accueil
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              À propos
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
            <Link
              to="/donate"
              className="bg-fosshid-green hover:bg-green-100 text-gray-800 px-4 py-2 rounded-md text-sm font-medium"
            >
              Faire un don
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Accueil
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              À propos
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              to="/donate"
              className="bg-fosshid-green hover:bg-green-100 text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Faire un don
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;