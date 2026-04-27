import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isCantinaPage = location.pathname === '/cantina';
  const isCabanaPage = location.pathname === '/cabana';
  const isGaleriaPage = location.pathname === '/galeria';

  const scrollToSection = (id: string) => {
    if (isCantinaPage || isCabanaPage || isGaleriaPage) {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
    setIsMoreOpen(false);
  };

  const goToCantina = () => {
    navigate('/cantina');
    setIsOpen(false);
    setIsMoreOpen(false);
  };

  const goToCabana = () => {
    navigate('/cabana');
    setIsOpen(false);
    setIsMoreOpen(false);
  };

  const goToGaleria = () => {
    navigate('/galeria');
    setIsOpen(false);
    setIsMoreOpen(false);
  };

  const goToHome = () => {
    navigate('/');
    setIsOpen(false);
    setIsMoreOpen(false);
  };

  return (
    <header className="bg-dark border-b border-zinc-light sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer" 
          onClick={goToHome}
        >
          <div className="w-9 h-9 sm:w-11 sm:h-11 bg-primary rounded-full flex items-center justify-center text-dark font-bold text-xl sm:text-2xl">
            C
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
              El Campestre
            </h1>
          </div>
        </div>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <button onClick={() => scrollToSection('inicio')} className="hover:text-primary transition-colors">Inicio</button>
          <button onClick={() => scrollToSection('sobre')} className="hover:text-primary transition-colors">Sobre Nosotros</button>
          <button onClick={goToCantina} className={`hover:text-primary transition-colors font-medium ${isCantinaPage ? 'text-primary' : ''}`}> La Cantina </button>

          {/* Dropdown para Más Negocios */}
          <div className="relative">
            <button 
              onClick={() => setIsMoreOpen(!isMoreOpen)}
              className="flex items-center gap-1 hover:text-primary transition-colors"
            >
              Más Negocios
              <ChevronDown size={16} className={`transition-transform ${isMoreOpen ? 'rotate-180' : ''}`} />
            </button>

            {isMoreOpen && (
              <div className="absolute top-10 right-0 bg-zinc border border-zinc-light rounded-2xl shadow-xl w-56 py-3 z-50">
                <div className="px-6 py-2 text-xs text-text-muted">Nuestros Negocios</div>
                
                <button 
                  onClick={goToCabana}
                  className={`w-full text-left px-6 py-3 hover:bg-zinc-light transition-colors ${isCabanaPage ? 'text-primary' : ''}`}
                >
                  La Cabaña
                </button>

                <button 
                  onClick={goToGaleria}
                  className={`w-full text-left px-6 py-3 hover:bg-zinc-light transition-colors ${isGaleriaPage ? 'text-primary' : ''}`}
                >
                  Galería
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Botón Principal */}
        <button
          onClick={() => scrollToSection('menu')}
          className="hidden md:block bg-primary hover:bg-primary-dark text-dark px-6 py-3 rounded-full text-sm font-semibold transition-all"
        >
          Ver Menú
        </button>

        {/* Menú Móvil */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú Móvil */}
      {isOpen && (
        <div className="md:hidden bg-zinc border-t border-zinc-light">
          <nav className="flex flex-col px-6 py-8 gap-2 text-lg">
            <button onClick={() => scrollToSection('inicio')} className="text-left py-4 px-4 rounded-xl hover:bg-zinc-light">Inicio</button>
            <button onClick={() => scrollToSection('sobre')} className="text-left py-4 px-4 rounded-xl hover:bg-zinc-light">Sobre Nosotros</button>
            <button onClick={() => scrollToSection('menu')} className="text-left py-4 px-4 rounded-xl hover:bg-zinc-light">Menú</button>
            
            <button 
              onClick={goToCantina}
              className="text-left py-4 px-4 rounded-xl hover:bg-zinc-light text-primary font-semibold"
            >
              La Cantina
            </button>

            <button 
              onClick={goToCabana}
              className="text-left py-4 px-4 rounded-xl hover:bg-zinc-light text-primary font-semibold"
            >
              La Cabaña
            </button>

            <button 
              onClick={goToGaleria}
              className="text-left py-4 px-4 rounded-xl hover:bg-zinc-light text-primary font-semibold"
            >
              Galería
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
