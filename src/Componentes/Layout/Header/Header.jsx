import { useState } from 'react';
import Boton from '../../Reutilizables/Boton/Boton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">
              Logo
            </span>
          </div>

        
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Características
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Precios
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contacto
            </a>
            <Boton variant="primary">
              Comenzar
            </Boton>
          </div>

        
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 w-6 bg-gray-700 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-700 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-700 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

      
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                Características
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                Precios
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                Contacto
              </a>
              <Boton variant="primary" className="w-full justify-center mt-4">
                Comenzar
              </Boton>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;