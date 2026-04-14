import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { restaurantInfo } from '../../lib/constants';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNegociosOpen, setIsNegociosOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  // Detectar sección activa
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -50% 0px', threshold: 0.4 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const offsetPosition = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsOpen(false);
    setIsNegociosOpen(false);
  };

  const negocios = [
    { id: 'campestre', label: 'El Campestre - Restaurante' },
    { id: 'cantina', label: 'Cantina' },
    { id: 'cabana', label: 'Cabaña (Comidas Rápidas)' },
    { id: 'tiendita', label: 'Tiendita' },
    { id: 'micheladas', label: 'Puesto de Micheladas' },
    { id: 'dulces', label: 'Dulces y Snacks' },
    { id: 'carnes', label: 'Carnes Llaneras' },
  ];

  return (
    <header className="bg-dark border-b border-zinc-light sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 sm:w-11 sm:h-11 bg-primary rounded-full flex items-center justify-center text-dark font-bold text-xl sm:text-2xl">
            C
          </div>
          <div className="min-w-0">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight truncate">
              {restaurantInfo.name}
            </h1>
            <p className="text-[10px] sm:text-xs text-text-muted -mt-1 truncate">
              {restaurantInfo.slogan}
            </p>
          </div>
        </div>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <button onClick={() => scrollToSection('inicio')} className={`hover:text-primary transition-colors ${activeSection === 'inicio' ? 'text-primary' : ''}`}>
            Inicio
          </button>
          <button onClick={() => scrollToSection('sobre')} className={`hover:text-primary transition-colors ${activeSection === 'sobre' ? 'text-primary' : ''}`}>
            Sobre Nosotros
          </button>

          {/* Dropdown Negocios */}
          <div className="relative group">
            <button 
              onClick={() => setIsNegociosOpen(!isNegociosOpen)}
              className="flex items-center gap-1 hover:text-primary transition-colors"
            >
              Negocios
              <ChevronDown size={16} />
            </button>

            {/* Menú desplegable */}
            {isNegociosOpen && (
              <div className="absolute top-10 left-0 bg-zinc border border-zinc-light rounded-2xl shadow-xl py-4 w-64 z-50">
                {negocios.map((negocio) => (
                  <button
                    key={negocio.id}
                    onClick={() => scrollToSection(negocio.id)}
                    className="w-full text-left px-6 py-3 hover:bg-zinc-light transition-colors text-sm"
                  >
                    {negocio.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button onClick={() => scrollToSection('reservas')} className={`hover:text-primary transition-colors ${activeSection === 'reservas' ? 'text-primary' : ''}`}>
            Reservas
          </button>
          <button onClick={() => scrollToSection('contacto')} className={`hover:text-primary transition-colors ${activeSection === 'contacto' ? 'text-primary' : ''}`}>
            Contacto
          </button>
        </nav>

        {/* Botón Reservas */}
        <button
          onClick={() => scrollToSection('reservas')}
          className="hidden md:block bg-primary hover:bg-primary-dark text-dark px-5 py-2.5 rounded-full text-sm font-semibold transition-all"
        >
          Reservas
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
            {/* ... (menú móvil similar) */}
          </nav>
        </div>
      )}
    </header>
  );
}
