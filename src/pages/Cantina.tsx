import { cantinaData } from '../lib/cantinaData';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function Cantina() {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-dark">
      <Header />

      {/* Hero Grande - Pantalla completa */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <img 
            src="/src/assets/cantina.jpg" 
            alt="La Cantina"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>

        {/* Overlay más oscuro para mejor legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" />

        {/* Contenido centrado */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          
          <h1 className="text-6xl sm:text-7xl font-bold text-white mb-6 tracking-tighter">
            DONDE OSNEIDER
          </h1>
          
          <p className="text-2xl text-text-muted max-w-2xl mx-auto">
            El mejor lugar para disfrutar bebidas frías y buena compañía
          </p>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-text-muted">
          <span className="text-xs tracking-widest mb-2">DESLIZA PARA VER EL MENÚ</span>
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
        </div>
      </div>

      {/* Lista de Productos - Después del scroll */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="space-y-20 pt-10">

          {/* Bebidas Embriagantes */}
          <div>
            <h2 className="text-4xl font-bold text-red-400 mb-10 flex items-center gap-3">
              🍺 Bebidas Embriagantes
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {cantinaData
                .filter(p => p.category === "Bebidas Embriagantes")
                .map(product => (
                  <div key={product.id} className="bg-zinc-light rounded-2xl px-7 py-6 flex justify-between items-center">
                    <p className="text-lg font-medium">{product.name}</p>
                    <p className="text-2xl font-bold text-red-400">
                      {formatPrice(product.price)}
                    </p>
                  </div>
                ))}
            </div>
          </div>

          {/* Gaseosas */}
          <div>
            <h2 className="text-4xl font-bold text-yellow-400 mb-10 flex items-center gap-3">
              🥤 Gaseosas y Refrescos
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {cantinaData
                .filter(p => p.category === "Gaseosas")
                .map(product => (
                  <div key={product.id} className="bg-zinc-light rounded-2xl px-7 py-6 flex justify-between items-center">
                    <p className="text-lg font-medium">{product.name}</p>
                    <p className="text-2xl font-bold text-yellow-400">
                      {formatPrice(product.price)}
                    </p>
                  </div>
                ))}
            </div>
          </div>

          {/* Tragos Cortos */}
          <div>
            <h2 className="text-4xl font-bold text-amber-400 mb-10 flex items-center gap-3">
              🥃 Tragos Cortos / Botellas Premium
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {cantinaData
                .filter(p => p.category === "Tragos Cortos")
                .map(product => (
                  <div key={product.id} className="bg-zinc-light rounded-2xl px-7 py-6 flex justify-between items-center border border-amber-500/20">
                    <p className="text-lg font-medium">{product.name}</p>
                    <p className="text-2xl font-bold text-amber-400">
                      {formatPrice(product.price)}
                    </p>
                  </div>
                ))}
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
