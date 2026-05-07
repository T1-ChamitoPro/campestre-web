import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { MediaItem } from '../../hooks/useGallery';
import { useEffect } from 'react';

interface LightboxProps {
    media: MediaItem[];
    currentIndex: number | null;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
}

export default function Lightbox({
    media,
    currentIndex,
    onClose,
    onNext,
    onPrev
}: LightboxProps) {

    const currentItem = currentIndex !== null ? media[currentIndex] : null;

    // Cerrar con tecla ESC
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNext();
            if (e.key === 'ArrowLeft') onPrev();
        };

        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose, onNext, onPrev]);

    if (currentIndex === null || !currentItem) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
                {/* Botón cerrar */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-white hover:text-primary transition-colors z-50"
                >
                    <X size={32} />
                </button>

                {/* Navegación */}
                {media.length > 1 && (
                    <>
                        <button
                            onClick={onPrev}
                            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-50"
                        >
                            <ChevronLeft size={40} />
                        </button>
                        <button
                            onClick={onNext}
                            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-50"
                        >
                            <ChevronRight size={40} />
                        </button>
                    </>
                )}

                {/* Contenido */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="relative max-w-[95%] max-h-[95vh] flex items-center justify-center"
                >
                    {currentItem.type === 'image' ? (
                        <img
                            src={currentItem.url}
                            alt={currentItem.name}
                            className="max-h-[90vh] max-w-full object-contain rounded-xl"
                        />
                    ) : (
                        <video
                            src={currentItem.url}
                            controls
                            autoPlay
                            className="max-h-[90vh] max-w-full rounded-xl"
                        />
                    )}
                </motion.div>

                {/* Nombre del archivo */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-sm bg-black/50 px-6 py-2 rounded-full">
                    {currentItem.name}
                </div>
            </div>
        </AnimatePresence>
    );
}