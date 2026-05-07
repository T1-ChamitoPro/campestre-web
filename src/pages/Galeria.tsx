import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';
import { useGallery } from '@/hooks/useGallery';  // Ajusta la ruta si es necesario

export default function Galeria() {
  const { media, loading } = useGallery();

  if (loading) {
    return (
      <>
        <Header />
        <section className="min-h-screen bg-zinc-950 pt-24 pb-20 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-zinc-400">Cargando galería...</p>
          </div>
        </section>
        <Footer />
      </>
    );
  }

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

          {/* Grid Dinámico */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {media.map((item, index) => (
              <motion.div
                key={item.url}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                className="group relative aspect-video bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 cursor-pointer"
              >
                {item.type === 'image' ? (
                  <img
                    src={item.url}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <video
                    src={item.url}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    poster=""
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => e.currentTarget.pause()}
                  />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <p className="text-sm text-white/90 truncate font-medium">
                      {item.name}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {media.length === 0 && (
            <div className="text-center py-20 text-zinc-500">
              No se encontraron archivos en la carpeta <span className="text-primary">/src/assets/galeria</span>
            </div>
          )}

          <div className="text-center mt-16 text-zinc-500 text-sm">
            Próximamente podrás subir tus propias fotos y videos
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}