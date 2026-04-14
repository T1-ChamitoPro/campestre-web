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
          <h2 className="text-5xl font-bold mb-4">Nuestro Menú</h2>
          <p className="text-text-muted text-lg">Platos preparados con ingredientes frescos y sabor auténtico</p>
        </div>

        {/* Contenedor principal del menú - Más integrado */}
        <div className="bg-dark border border-zinc-light rounded-3xl overflow-hidden">

          {/* Lista con Scrollbar integrado */}
          <div className="max-h-[580px] overflow-y-auto custom-scroll p-6 space-y-3">
            {menuData.map((dish) => (
              <div
                key={dish.id}
                onClick={() => setSelectedDish(dish)}
                className="group bg-zinc-light hover:bg-zinc border border-transparent hover:border-primary/40 rounded-2xl px-7 py-6 flex justify-between items-center cursor-pointer transition-all duration-300"
              >
                <div className="pr-4">
                  <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
                    {dish.name}
                  </h3>
                  <p className="text-sm text-text-muted mt-1.5">{dish.category}</p>
                </div>

                <div className="text-right flex-shrink-0">
                  <span className="text-2xl font-bold text-primary">
                    {formatPrice(dish.price)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nota aclaratoria */}
        <div className="mt-10 text-center text-sm text-text-muted max-w-2xl mx-auto">
          Todos los asados incluyen plátano asado, ensalada y picadillo. 
          Los platos criollos incluyen ensalada, yuca y arroz blanco.
        </div>
      </div>

      {/* Modal de detalles */}
      {selectedDish && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="bg-zinc rounded-3xl max-w-md w-full overflow-hidden shadow-2xl">
            
            {/* Foto del Plato */}
            <div className="h-72 bg-zinc-light relative">
              <img 
                src={selectedDish.image} 
                alt={selectedDish.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>

            {/* Contenido del Modal */}
            <div className="p-7">
              <h3 className="text-2xl font-bold mb-2">{selectedDish.name}</h3>
              <p className="text-primary text-4xl font-bold mb-6">
                {formatPrice(selectedDish.price)}
              </p>

              <div className="pt-6 border-t border-zinc-light">
                <h4 className="font-semibold text-white mb-3">Especificaciones:</h4>
                <p className="text-text-muted leading-relaxed">
                  {selectedDish.accompaniments || "Sin especificaciones adicionales."}
                </p>
              </div>
            </div>

            {/* Botón Cerrar */}
            <div className="px-7 py-6 border-t border-zinc-light bg-zinc">
              <button 
                onClick={() => setSelectedDish(null)}
                className="w-full bg-primary hover:bg-primary-dark text-dark font-semibold py-4 rounded-2xl transition-all"
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
