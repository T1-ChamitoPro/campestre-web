import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Columna Izquierda - Imagen */}
          <div className="relative">
            <div className="aspect-square bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800">
              <img 
                src="/src/assets/aboutCampestre.jpg"
                alt="El Campestre - Ambiente campestre familiar"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  console.warn("Imagen about-campestre.jpg no encontrada");
                }}
              />
              {/* Overlay sutil */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent" />
            </div>
          </div>

          {/* Columna Derecha - Texto */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-white tracking-tighter mb-6">
                Nuestra Historia
              </h2>
              
              <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
                <p>
                  El Campestre nace como un sueño familiar: crear un espacio donde la buena comida, 
                  la naturaleza y la calidez se encuentren en un solo lugar.
                </p>
                <p>
                  Ubicados a orillas del río Guatapurí, ofrecemos una experiencia auténtica de 
                  comida campestre con ingredientes frescos y preparaciones tradicionales.
                </p>
                <p>
                  Más que un restaurante, somos un lugar para compartir momentos especiales 
                  con familia y amigos, rodeados de un ambiente natural y acogedor.
                </p>
              </div>
            </motion.div>

            <div className="pt-6">
              <div className="inline-flex items-center gap-3 bg-zinc-900 px-6 py-3 rounded-2xl border border-zinc-700">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm text-zinc-400">Abierto desde 2018</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
