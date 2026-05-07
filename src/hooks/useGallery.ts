import { useState, useEffect } from 'react';

export type MediaItem = {
    url: string;
    type: 'image' | 'video';
    name: string;
};

export function useGallery() {
    const [media, setMedia] = useState<MediaItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const images = (import.meta as any).glob('../assets/galeria/*.{jpg,jpeg,png,webp,gif}', {
            eager: true,
            import: 'default',
        });

        const videos = (import.meta as any).glob('../assets/galeria/*.{mp4,webm,mov}', {
            eager: true,
            import: 'default',
        });

        const allMedia: MediaItem[] = [];

        Object.entries(images).forEach(([path, url]) => {
            allMedia.push({
                url: url as string,
                type: 'image',
                name: path.split('/').pop() || 'image',
            });
        });

        Object.entries(videos).forEach(([path, url]) => {
            allMedia.push({
                url: url as string,
                type: 'video',
                name: path.split('/').pop() || 'video',
            });
        });

        allMedia.sort(() => Math.random() - 0.5);

        setMedia(allMedia);
        setLoading(false);
    }, []);

    return { media, loading };
};