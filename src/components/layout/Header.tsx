import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { restaurantInfo } from '../../lib/constants';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-dark border-b border-zinc-light sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Logo + Nombre */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-primary rounded-full flex items-center justify-center text-dark font-bold text-2xl">
            C
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white">{restaurantInfo.name}</h1>
            <p className="text-xs text-text-muted -mt-1">{restaurantInfo.slogan}</p>
          </div>
        </div>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#inicio" className="hover:text-primary transition-colors">Inicio</a>
          <a href="#sobre" className="hover:text-primary transition-colors">Sobre Nosotros</a>
          <a href="#menu" className="hover:text-primary transition-colors">Menú</a>
          <a href="#galeria" className="hover:text-primary transition-colors">Galería</a>
          <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
        </nav>

        {/* Botón Reservar */}
        <a 
          href="#reservas"
          className="hidden md:block bg-primary hover:bg-primary-dark text-dark px-6 py-3 rounded-full text-sm font-semibold transition-all"
        >
          Reservas
        </a>

        {/* Menú Móvil */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden bg-zinc border-t border-zinc-light">
          <nav className="flex flex-col px-6 py-8 gap-5 text-lg">
            <a href="#inicio" className="py-2 hover:text-primary">Inicio</a>
            <a href="#sobre" className="py-2 hover:text-primary">Sobre Nosotros</a>
            <a href="#menu" className="py-2 hover:text-primary">Menú</a>
            <a href="#galeria" className="py-2 hover:text-primary">Galería</a>
            <a href="#contacto" className="py-2 hover:text-primary">Contacto</a>
            
            <a 
              href="#reservas"
              className="bg-primary hover:bg-primary-dark text-dark py-4 text-center rounded-full font-semibold mt-4"
            >
              Reservas
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
