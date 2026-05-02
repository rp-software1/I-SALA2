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