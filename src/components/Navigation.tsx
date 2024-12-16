import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img
                className="h-12 w-auto"
                src="/lovable-uploads/bdfb01d9-5048-4900-b258-e6a5a8711939.png"
                alt="FOSSHID Logo"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-fosshid-blue dark:hover:text-fosshid-blue px-3 py-2 rounded-md text-sm font-medium">
              Accueil
            </Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-200 hover:text-fosshid-blue dark:hover:text-fosshid-blue px-3 py-2 rounded-md text-sm font-medium">
              À propos
            </Link>
            <Link to="/blog" className="text-gray-700 dark:text-gray-200 hover:text-fosshid-blue dark:hover:text-fosshid-blue px-3 py-2 rounded-md text-sm font-medium">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-700 dark:text-gray-200 hover:text-fosshid-blue dark:hover:text-fosshid-blue px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
            <Link
              to="/donate"
              className="bg-fosshid-red hover:bg-fosshid-red/90 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Faire un don
            </Link>
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-fosshid-blue"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900">
            <Link
              to="/"
              className="text-gray-700 dark:text-gray-200 hover:text-fosshid-blue dark:hover:text-fosshid-blue block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Accueil
            </Link>
            <Link
              to="/about"
              className="text-gray-700 dark:text-gray-200 hover:text-fosshid-blue dark:hover:text-fosshid-blue block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              À propos
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 dark:text-gray-200 hover:text-fosshid-blue dark:hover:text-fosshid-blue block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 dark:text-gray-200 hover:text-fosshid-blue dark:hover:text-fosshid-blue block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              to="/donate"
              className="bg-fosshid-red hover:bg-fosshid-red/90 text-white block px-3 py-2 rounded-md text-base font-medium"
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