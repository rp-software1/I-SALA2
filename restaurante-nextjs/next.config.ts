// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Configurar dominios permitidos para imágenes externas
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cloudinary.com',
        // agregar otros dominios si el restaurante usa imágenes externas
      },
    ],
  },
  // Headers de seguridad básicos
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: '/carta',
        destination: '/menu',
        permanent: true,
      },
    ];
  },
};


export default nextConfig;
