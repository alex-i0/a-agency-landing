import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Reframe.ai',
        short_name: 'Reframe',
        description:
            'Discover Reframe.ai: Your Ultimate Copy AI Solution for Effortless AI Copywriting and Repurposing Social Media Posts. Unlock the Power of Reusing Your Content Across New Platforms.',
        start_url: 'https://reframe-landing-tailwind.vercel.app',
        display: 'standalone',
        background_color: '#111827',
        theme_color: '#818cf8',
        icons: [
            {
                src: '/icon-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icon-256x256.png',
                sizes: '256x256',
                type: 'image/png',
            },
            {
                src: '/icon-384x384.png',
                sizes: '384x384',
                type: 'image/png',
            },
            {
                src: '/icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    };
}
