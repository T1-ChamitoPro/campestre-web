import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';
import { useGallery } from '../hooks/useGallery';
import Lightbox from '../components/ui/LightBox';
import { useState } from 'react';

export default function Galeria() {
  const { media, loading } = useGallery();
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setCurrentIndex(index);
  const closeLightbox = () => setCurrentIndex(null);

  const goToNext = () => {
    if (currentIndex === null) return;
    setCurrentIndex((currentIndex + 1) % media.length);
  };

  const goToPrev = () => {
    if (currentIndex === null) return;
    setCurrentIndex((currentIndex - 1 + media.length) % media.length);
  };

  if (loading) {
    return (
      <>
        <Header />
        <section className="min-h-screen bg-zinc-950 pt-24 flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-zinc-400 text-lg">Cargando galería...</p>
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
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold tracking-tighter mb-4">Galería</h1>
            <p className="text-2xl text-zinc-400">
              Momentos especiales de El Campestre
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {media.map((item, index) => (
              <motion.div
                key={item.url}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
                onClick={() => openLightbox(index)}
                className="group relative aspect-video bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 cursor-pointer shadow-xl"
              >
                {item.type === 'image' ? (
                  <img
                    src={item.url}
                    alt={item.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                ) : (
                  <video
                    src={item.url}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => e.currentTarget.pause()}
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white text-sm font-medium truncate">
                    {item.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        media={media}
        currentIndex={currentIndex}
        onClose={closeLightbox}
        onNext={goToNext}
        onPrev={goToPrev}
      />

      <Footer />
    </>
  );
}