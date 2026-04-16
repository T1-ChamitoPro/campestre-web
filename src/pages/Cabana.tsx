import { useState } from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { cabanaMenuData, type CabanaItem } from '../lib/cabanaData';

export default function Cabana() {
  const [selectedItem, setSelectedItem] = useState<CabanaItem | null>(null);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const categories = [
    { title: "Comidas Rápidas", items: cabanaMenuData.filter(i => i.category === "Comidas Rápidas") },
    { title: "Limonadas", items: cabanaMenuData.filter(i => i.category === "Limonadas") },
    { title: "Jugos Naturales en Agua", items: cabanaMenuData.filter(i => i.category === "Jugos en Agua") },
    { title: "Jugos Naturales en Leche", items: cabanaMenuData.filter(i => i.category === "Jugos en Leche") },
  ];

  return (
    <>
      <Header />

      {/* ==================== HERO GRANDE ==================== */}
         <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <img
            src="/src/assets/cabana.jpg"
            alt="La Cantina"
            className="w-full h-full object-cover"
            onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black" />

        {/* Overlay con degradado */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" />

        {/* Contenido del Hero */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-6 tracking-tighter"
          >
            LA CABAÑA DE LILIANA
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl sm:text-2xl text-zinc-300 max-w-xl mx-auto"
          >
            Comida rápida • Sabores auténticos • Precios justos
          </motion.p>
        </div>

        {/* Flecha indicadora */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white flex flex-col items-center"
        >
          <span className="text-xs tracking-widest mb-2">DESLIZA PARA VER EL MENÚ</span>
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/60 to-transparent" />
        </motion.div>
      </div>

      {/* ==================== SECCIÓN DE PRODUCTOS ==================== */}
      <section className="bg-zinc-950 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-20">
            {categories.map((category, catIndex) => (
              <div key={catIndex}>
                <h2 className="text-4xl font-semibold text-primary mb-10 text-center">
                  {category.title}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.04 }}
                      onClick={() => setSelectedItem(item)}
                      className="group bg-zinc-900 border border-zinc-800 hover:border-primary rounded-3xl p-7 transition-all duration-300 cursor-pointer hover:-translate-y-1"
                    >
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-medium text-white group-hover:text-primary transition-colors pr-4">
                          {item.name}
                        </h3>
                        <span className="text-2xl font-bold text-primary whitespace-nowrap">
                          {formatPrice(item.price)}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-zinc-900 rounded-3xl max-w-md w-full p-10 relative"
          >
            <button 
              onClick={() => setSelectedItem(null)} 
              className="absolute top-6 right-6 text-zinc-400 hover:text-white"
            >
              <X size={32} />
            </button>
            
            <h3 className="text-3xl font-bold text-white mb-3">{selectedItem.name}</h3>
            <p className="text-primary mb-8">{selectedItem.category}</p>
            
            <div className="text-5xl font-bold text-primary">
              {formatPrice(selectedItem.price)}
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
