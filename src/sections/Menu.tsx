import { useState } from 'react';
import { X } from 'lucide-react';
import { menuData, type Dish } from '../lib/menuData';

export default function Menu() {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <section id="menu" className="py-20 bg-zinc">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Nuestro Menú</h2>
          <p className="text-text-muted text-lg">Platos preparados con ingredientes frescos y sabor auténtico</p>
        </div>

        {/* Contenedor del Menú */}
        <div className="bg-dark border border-zinc-light rounded-3xl overflow-hidden">
          <div className="bg-zinc px-6 sm:px-8 py-5 border-b border-zinc-light">
            <h3 className="text-xl font-semibold text-white">Lista de Platos</h3>
          </div>

          <div className="max-h-[620px] overflow-y-auto custom-scroll p-4 sm:p-6 space-y-3">
            {menuData.map((dish) => (
              <div
                key={dish.id}
                onClick={() => setSelectedDish(dish)}
                className="group bg-zinc-light hover:bg-zinc border border-transparent hover:border-primary/40 rounded-2xl px-5 sm:px-7 py-5 sm:py-6 flex justify-between items-center cursor-pointer transition-all duration-300"
              >
                <div className="pr-4 flex-1">
                  <h3 className="text-base sm:text-lg font-medium group-hover:text-primary transition-colors">
                    {dish.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-muted mt-1.5">{dish.category}</p>
                </div>

                <div className="text-right flex-shrink-0">
                  <span className="text-xl sm:text-2xl font-bold text-primary">
                    {formatPrice(dish.price)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL RESPONSIVO */}
      {selectedDish && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="bg-zinc rounded-3xl w-full max-w-lg max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
            
            {/* Foto del Plato */}
            <div className="relative h-56 sm:h-72 bg-zinc-light flex-shrink-0">
              <img 
                src={selectedDish.image} 
                alt={selectedDish.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>

            {/* Contenido */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 pr-8">{selectedDish.name}</h3>
              
              <p className="text-3xl sm:text-4xl font-bold text-primary mb-8">
                {formatPrice(selectedDish.price)}
              </p>

              <div className="pt-6 border-t border-zinc-light">
                <h4 className="font-semibold text-white mb-4 text-base">Especificaciones:</h4>
                <p className="text-text-muted leading-relaxed text-[15px] sm:text-base">
                  {selectedDish.accompaniments || "Sin especificaciones adicionales."}
                </p>
              </div>
            </div>

            {/* Botón Cerrar */}
            <div className="p-6 border-t border-zinc-light bg-zinc flex-shrink-0">
              <button 
                onClick={() => setSelectedDish(null)}
                className="w-full bg-primary hover:bg-primary-dark text-dark font-semibold py-4 rounded-2xl transition-all text-base"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
