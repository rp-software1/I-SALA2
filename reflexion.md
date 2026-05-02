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