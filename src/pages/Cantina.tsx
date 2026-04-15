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

      {/* Hero Grande */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <img 
            src="/src/assets/cantina.jpg" 
            alt="La Cantina"
            className="w-full h-full object-cover"
            onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black" />

        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl sm:text-7xl font-bold text-white mb-6 tracking-tighter">
             DONDE OSNEIDER
          </h1>
          <p className="text-2xl text-text-muted max-w-xl mx-auto">
            El lugar ideal para disfrutar buenas bebidas y buena compañía
          </p>
        </div>
      </div>

      {/* Contenido de Productos */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="space-y-20">

          {/* Bebidas Embriagantes */}
          <div>
            <div className="flex items-end gap-4 mb-10">
              <div className="text-5xl">🍺</div>
              <div>
                <h2 className="text-4xl font-bold text-red-400">Bebidas Embriagantes</h2>
                <p className="text-text-muted mt-1">Cervezas y licores</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cantinaData
                .filter(p => p.category === "Bebidas Embriagantes")
                .map(product => (
                  <div key={product.id} className="bg-zinc-light rounded-3xl px-6 py-7 flex justify-between items-center hover:bg-zinc transition-all">
                    <p className="text-lg font-medium pr-4">{product.name}</p>
                    <p className="text-2xl font-bold text-red-400 whitespace-nowrap">
                      {formatPrice(product.price)}
                    </p>
                  </div>
                ))}
            </div>
          </div>

          {/* Gaseosas */}
          <div>
            <div className="flex items-end gap-4 mb-10">
              <div className="text-5xl">🥤</div>
              <div>
                <h2 className="text-4xl font-bold text-yellow-400">Gaseosas y Refrescos</h2>
                <p className="text-text-muted mt-1">Para acompañar o refrescarte</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cantinaData
                .filter(p => p.category === "Gaseosas")
                .map(product => (
                  <div key={product.id} className="bg-zinc-light rounded-3xl px-6 py-7 flex justify-between items-center hover:bg-zinc transition-all">
                    <p className="text-lg font-medium pr-4">{product.name}</p>
                    <p className="text-2xl font-bold text-yellow-400 whitespace-nowrap">
                      {formatPrice(product.price)}
                    </p>
                  </div>
                ))}
            </div>
          </div>

          {/* Tragos Cortos / Premium */}
          <div>
            <div className="flex items-end gap-4 mb-10">
              <div className="text-5xl">🥃</div>
              <div>
                <h2 className="text-4xl font-bold text-amber-400">Tragos Cortos y Botellas Premium</h2>
                <p className="text-text-muted mt-1">Para ocasiones especiales</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cantinaData
                .filter(p => p.category === "Tragos Cortos")
                .map(product => (
                  <div key={product.id} className="bg-zinc-light rounded-3xl px-6 py-7 flex justify-between items-center border border-amber-500/30 hover:bg-zinc transition-all">
                    <p className="text-lg font-medium pr-4">{product.name}</p>
                    <p className="text-2xl font-bold text-amber-400 whitespace-nowrap">
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
