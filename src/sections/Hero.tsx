import { restaurantInfo } from '../lib/constants';

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      
      {/* Imagen de fondo */}
      <div className="absolute inset-0 bg-black">
        <img 
          src="/src/assets/campestre.jpg" 
          alt="El Campestre Restaurant"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      {/* Contenido */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="inline-block bg-primary/10 border border-primary/30 text-primary px-6 py-2 rounded-full text-sm font-medium mb-6">
          {restaurantInfo.slogan}
        </div>

        <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
          Bienvenidos a<br />
          <span className="text-primary">{restaurantInfo.name}</span>
        </h1>

        <p className="text-xl md:text-2xl text-text-muted max-w-2xl mx-auto mb-8">
          {restaurantInfo.description}
        </p>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <span className="text-xs text-text-muted tracking-widest mb-2">DESCUBRE MÁS</span>
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
