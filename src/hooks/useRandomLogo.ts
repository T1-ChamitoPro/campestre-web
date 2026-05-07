import { useState, useEffect } from 'react';

export function useRandomLogo() {
    const [logoUrl, setLogoUrl] = useState<string>('');

    useEffect(() => {
        const logos = import.meta.glob('../assets/logos/*', {
            eager: true,
            import: 'default',
        });

        const logoPaths = Object.values(logos) as string[];

        if (logoPaths.length === 0) {
            console.warn('No hay logos.');
            return;
        }

        const randomIndex = Math.floor(Math.random() * logoPaths.length);
        setLogoUrl(logoPaths[randomIndex]);
    }, []);

    return logoUrl;
}