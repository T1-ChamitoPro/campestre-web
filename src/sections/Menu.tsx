import { useState } from 'react';
import { X } from 'lucide-react';
import { menuData, type Dish } from '../lib/menuData';
import { motion } from 'framer-motion';
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuData.map((dish: Dish, index: number) => (
            <motion.div
              key={dish.id || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setSelectedDish(dish)}
              className="group bg-zinc-900/90 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 hover:border-primary hover:bg-zinc-900 transition-all duration-300 cursor-pointer"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white group-hover:text-primary transition-colors duration-300">
                    {dish.name}
                  </h3>
                  {dish.category && (
                    <p className="text-sm text-zinc-500 mt-1">{dish.category}</p>
                  )}
                </div>

                <div className="text-right">
                  <span className="text-3xl font-bold text-primary">
                    {formatPrice(dish.price)}
                  </span>
                </div>
              </div>

              {dish.description && (
                <p className="text-zinc-400 text-[15px] leading-relaxed line-clamp-3">
                  {dish.description}
                </p>
              )}
            </motion.div>
          ))}
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
                className="w-full bg-primary hover:bg-primary-dark text-dark font-semibold py-4 rounded-2xl transition-all text-base">
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
