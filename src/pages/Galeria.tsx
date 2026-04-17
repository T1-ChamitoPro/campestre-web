import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';

export default function Galeria() {
  return (
    <>
      <Header />

      <section className="min-h-screen bg-zinc-950 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Título */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-white tracking-tighter mb-4">
              Galería
            </h1>
            <p className="text-2xl text-zinc-400">
              Momentos especiales de El Campestre
            </p>
          </div>

          {/* Grid de Galería */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Aquí irán las fotos y videos */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="aspect-video bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800"
            >
              <div className="h-full flex items-center justify-center text-zinc-500">
                Foto o Video 1
              </div>
            </motion.div>

            {/* Repite más tarjetas según necesites */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="aspect-video bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800"
            >
              <div className="h-full flex items-center justify-center text-zinc-500">
                Foto o Video 2
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="aspect-video bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800"
            >
              <div className="h-full flex items-center justify-center text-zinc-500">
                Foto o Video 3
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12 text-zinc-500 text-sm">
            Próximamente podrás subir tus propias fotos y videos
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
