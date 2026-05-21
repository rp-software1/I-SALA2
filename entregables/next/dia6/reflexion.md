BLOQUE A:
¿La predicción sobre CarritoPage fue correcta? ¿Qué implica que Client Components no puedan exportar metadata?
Sí, fue correcta.
CarritoPage no pudo exportar metadata porque es un Client Component ('use client').

Eso implica que:
Los Server Components sí pueden usar metadata
Los Client Components no pueden usar metadata
En Client Components se usa document.title con useEffect para cambiar el título de la página.