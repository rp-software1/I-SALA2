BLOQUE A:
¿Por qué err es unknown y no Error directamente? ¿Qué ventaja real da eso?
Se usa unknown porque JavaScript permite lanzar cualquier valor, y TypeScript obliga a validar antes de usarlo para evitar errores en runtime
BLOQUE B: 
• ¿Omit<Pedido, ...> fue lo que esperabas? ¿Cuándo usarías Omit en otros contextos del proyecto?
Sí, Omit<Pedido, ...> era lo esperado porque estás quitando campos que el backend genera (id, estado, fechas).
Se usa cuando necesitas una versión parcial de un tipo, por ejemplo:
Crear datos (sin ID)
Actualizar (sin campos protegidos)
Mostrar vistas simplificadas
En resumen: sirve para adaptar un tipo según el contexto sin duplicarlo.

BLOQUE C:
 ¿El comportamiento de useParams te sorprendió? ¿Por qué el genérico no garantiza el tipo?

 Si me sorprendio, no garantiza el tipo porque solo sirve para describir la forma esperada, no para validar datos reales.

BLOQUE D:
 ¿Cuántos errores había al inicio del Día 1? ¿Y ahora? AL INICIO TENIA COMO 77 ERRORES
¿Qué error fue el más difícil de resolver en los 3 días? ¿Por qué?  El error más difícil fue el de PlatoCard porque requería entender el tipado de props en TypeScript, no solo corregir código.

BLOQUE E:
1. "Después de tipar 3 días el proyecto restaurante-frontend,
   ¿qué tipo de errores de runtime previene TypeScript y cuáles NO?
   Dame un ejemplo concreto de cada uno usando nuestro código."
   TypeScript previene errores de tipos (ej: usar string en un number), pero no errores de runtime como fallos de API.

2. "En DetalleMesa.tsx usamos useParams<{ mesaId: string }>() pero
   mesaId sigue siendo string | undefined. ¿Por qué el genérico no
   garantiza que es string? ¿Es un bug de TypeScript o una decisión intencional?"
   No es bug, es intencional. useParams puede ser undefined porque la URL puede no tener el parámetro.


3. "Tengo Omit<Pedido, "_id" | "creadoEn" | "actualizadoEn"> en CarritoPage.
   ¿Qué otros utility types de TypeScript existen que podrían servirme en
   este mismo proyecto? Por ejemplo: ¿para qué sirven Pick, Partial y Required?
   Muéstrame con un ejemplo concreto de Mesa o Plato."
   
   Pick selecciona campos como Pick<Mesa, "numero" | "estado">, Partial hace todo opcional como Partial<Mesa> y Required obliga todos los campos como Required<Mesa>.