import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { cantinaData } from '../lib/cantinaData';
import { ArrowLeft } from 'lucide-react';

export default function Cantina() {
  const navigate = useNavigate();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  const goBack = () => navigate('/');

  return (
    <div className="min-h-screen bg-dark">
      <Header />

      {/* Hero Image - Foto de La Cantina */}
      <div className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black" />

        <div className="relative z-10 text-center px-6">
          <div className="inline-block bg-red-600 text-white font-bold px-8 py-2.5 rounded-full mb-6 tracking-wider">
            CANTINA
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">DONDE OSNEIDER</h1>
          <p className="text-xl text-text-muted max-w-md mx-auto">
            Bebidas frías • Buen ambiente • Momentos para compartir
          </p>
        </div>

        {/* Botón Volver */}
        <button
          onClick={goBack}
          className="absolute top-8 left-6 sm:left-10 flex items-center gap-2 bg-black/70 hover:bg-black text-white px-6 py-3 rounded-full transition-all z-20 border border-white/20"
        >
          <ArrowLeft size={20} />
          Volver al Restaurante
        </button>
      </div>

      {/* Productos */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Bebidas Embriagantes */}
          <div>
            <h2 className="text-4xl font-bold text-red-400 mb-10 flex items-center gap-3">
              🍺 Bebidas Embriagantes
            </h2>
            <div className="space-y-4">
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
            <div className="space-y-4">
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
        </div>
      </div>

      <Footer />
    </div>
  );
}
