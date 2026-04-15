import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { restaurantInfo } from '../../lib/constants';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isCantinaPage = location.pathname === '/cantina';

  const scrollToSection = (id: string) => {
    if (isCantinaPage) {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false);
  };

  const goToCantina = () => {
    navigate('/cantina');
    setIsOpen(false);
  };

  const goToHome = () => {
    navigate('/');
    setIsOpen(false);
  };

  return (
    <header className="bg-dark border-b border-zinc-light sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer" 
          onClick={goToHome}
        >
          <div className="w-9 h-9 sm:w-11 sm:h-11 bg-primary rounded-full flex items-center justify-center text-dark font-bold text-xl sm:text-2xl flex-shrink-0">
            C
          </div>
          <div className="min-w-0">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
              {isCantinaPage ? "La Cantina" : restaurantInfo.name}
            </h1>
            <p className="text-[10px] sm:text-xs text-text-muted -mt-1 truncate">
              {isCantinaPage ? "Bebidas y buen ambiente" : restaurantInfo.slogan}
            </p>
          </div>
        </div>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {!isCantinaPage && (
            <>
              <button 
                onClick={() => scrollToSection('inicio')} 
                className="hover:text-primary transition-colors"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('sobre')} 
                className="hover:text-primary transition-colors"
              >
                Sobre Nosotros
              </button>
            </>
          )}
          
          <button 
            onClick={goToCantina}
            className={`hover:text-primary transition-colors ${isCantinaPage ? 'text-primary font-semibold' : ''}`}
          >
            Cantina
          </button>
        </nav>

        {/* Botón Principal */}
        <button
          onClick={isCantinaPage ? goToHome : () => scrollToSection('menu')}
          className="hidden md:block bg-primary hover:bg-primary-dark text-dark px-6 py-3 rounded-full text-sm font-semibold transition-all"
        >
          {isCantinaPage ? "Volver al Restaurante" : "Ver Menú"}
        </button>

        {/* Botón Menú Móvil */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white hover:text-primary transition-colors"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú Móvil */}
      {isOpen && (
        <div className="md:hidden bg-zinc border-t border-zinc-light">
          <nav className="flex flex-col px-6 py-8 gap-2 text-lg">
            {!isCantinaPage && (
              <>
                <button 
                  onClick={() => scrollToSection('inicio')} 
                  className="text-left py-4 px-4 rounded-xl hover:bg-zinc-light"
                >
                  Inicio
                </button>
                <button 
                  onClick={() => scrollToSection('sobre')} 
                  className="text-left py-4 px-4 rounded-xl hover:bg-zinc-light"
                >
                  Sobre Nosotros
                </button>
                <button 
                  onClick={() => scrollToSection('menu')} 
                  className="text-left py-4 px-4 rounded-xl hover:bg-zinc-light"
                >
                  Menú
                </button>
              </>
            )}
            
            <button 
              onClick={goToCantina}
              className="text-left py-4 px-4 rounded-xl hover:bg-zinc-light text-primary font-semibold"
            >
              La Cantina
            </button>

            <button 
              onClick={isCantinaPage ? goToHome : () => scrollToSection('menu')}
              className="mt-6 bg-primary hover:bg-primary-dark text-dark py-4 rounded-2xl font-semibold"
            >
              {isCantinaPage ? "Volver al Restaurante" : "Ver Menú"}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
