BLQOUE A:
¿CarritoPage puede exportar metadata?
No.
¿Qué hace que sea imposible?
Porque CarritoPage es un Client Component (tiene "use client"), y metadata solo puede exportarse en Server Components dentro del App Router de Next.js.

BLOQUE B:

Si el restaurante usa imágenes de platos almacenadas en un servicio externo (como Cloudinary o AWS S3), ¿qué hay que configurar en next.config.ts para que <Image> de Next.js las muestre?
¿Dónde se configura para imágenes externas? En next.config.ts
¿Qué campo de next.config.ts controla eso? nextConfig.images.remotePatterns

BLOQUE C: 
¿Por qué un console.log en un Server Component es diferente a uno en un Client Component? ¿Dónde aparece cada uno?
¿Qué hace TypeScript cuando hay un import que no se usa? ¿Da error o solo warning?
En CarritoPage.tsx hay un comentario // TODO Día 3. ¿Se considera código de producción correcto o debe eliminarse?

1. console.log en un Server Component aparece en la terminal del servidor. En un Client Component aparece en la consola del navegador.
2.TypeScript detecta imports no usados y muestra mensajes como:
is declared but its value is never read

Puede actuar como warning o error según la configuración.

3.// TODO Día 3 no debería quedar en producción. Si ya se resolvió, se elimina; si sigue pendiente, se cambia a una nota más clara (// NOTE:).