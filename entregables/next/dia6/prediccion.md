BLQOUE A:
¿CarritoPage puede exportar metadata?
No.
¿Qué hace que sea imposible?
Porque CarritoPage es un Client Component (tiene "use client"), y metadata solo puede exportarse en Server Components dentro del App Router de Next.js.

BLOQUE B:

Si el restaurante usa imágenes de platos almacenadas en un servicio externo (como Cloudinary o AWS S3), ¿qué hay que configurar en next.config.ts para que <Image> de Next.js las muestre?
¿Dónde se configura para imágenes externas? En next.config.ts
¿Qué campo de next.config.ts controla eso? nextConfig.images.remotePatterns
