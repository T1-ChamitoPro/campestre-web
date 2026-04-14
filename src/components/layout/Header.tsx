import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { restaurantInfo } from '../../lib/constants';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  // Detectar sección activa mientras se hace scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        rootMargin: '-100px 0px -50% 0px',
        threshold: 0.4 
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false); // Cerrar menú en móvil
  };

  const navLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre', label: 'Sobre Nosotros' },
    { id: 'menu', label: 'Menú' },
    { id: 'galeria', label: 'Galería' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <header className="bg-dark border-b border-zinc-light sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        
        {/* Logo - Más compacto en móvil */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 sm:w-11 sm:h-11 bg-primary rounded-full flex items-center justify-center text-dark font-bold text-xl sm:text-2xl flex-shrink-0">
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
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`transition-colors hover:text-primary px-2 py-1 ${
                activeSection === link.id 
                  ? 'text-primary font-semibold border-b-2 border-primary' 
                  : 'text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Botón Reservas - Visible en desktop y tablet */}
        <button
          onClick={() => scrollToSection('reservas')}
          className="hidden md:block bg-primary hover:bg-primary-dark text-dark px-5 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap"
        >
          Reservas
        </button>

        {/* Botón Menú Móvil */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white hover:text-primary transition-colors"
          aria-label="Abrir menú"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú Móvil Mejorado */}
      {isOpen && (
        <div className="md:hidden bg-zinc border-t border-zinc-light">
          <nav className="flex flex-col px-6 py-8 gap-2 text-lg">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left py-4 px-4 rounded-xl transition-all ${
                  activeSection === link.id 
                    ? 'bg-primary/10 text-primary font-semibold' 
                    : 'hover:bg-zinc-light'
                }`}
              >
                {link.label}
              </button>
            ))}

            {/* Botón Reservas en móvil */}
            <button 
              onClick={() => scrollToSection('reservas')}
              className="mt-6 bg-primary hover:bg-primary-dark text-dark py-4 rounded-2xl font-semibold text-base transition-all"
            >
              Reservas para Eventos
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
