BLOQUE A:
¿La predicción sobre CarritoPage fue correcta? ¿Qué implica que Client Components no puedan exportar metadata?
Sí, fue correcta.
CarritoPage no pudo exportar metadata porque es un Client Component ('use client').

Eso implica que:
Los Server Components sí pueden usar metadata
Los Client Components no pueden usar metadata
En Client Components se usa document.title con useEffect para cambiar el título de la página.

BLOQUE B:
¿robots: { index: false } fue una decisión que esperaban en una app de restaurante? ¿Por qué importa? 
Sí, fue una decisión esperada. Porque la app de restaurante es para uso interno, no necesita ser indexada por motores de búsqueda. Importa para controlar la visibilidad de la app en buscadores y mantener la privacidad de la información interna del restaurante.