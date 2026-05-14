BLOQUE A:

¿El backend tenía el endpoint /mesas/:id o tuvieron que usar la Opción B? ¿Qué implica eso para el rendimiento?

No usamos backend real ni endpoint GET /mesas/:id.
Se utilizó la Opción B buscando la mesa dentro del array mock con getMesas().
Esto implica peor rendimiento porque primero obtiene todas las mesas y luego filtra localmente.


BLOQUE B:

 ¿La predicción sobre generateMetadata async fue correcta? ¿Qué implica hacer dos fetches iguales (en generateMetadata y en el componente)?
Sí, la predicción fue correcta.

generateMetadata:

puede ser async
puede usar await
puede hacer fetch
puede consultar DB
puede llamar getMesaById()

Todo eso funciona porque corre en el servidor dentro del App Router de Next.js

BLOQUE C: 
• ¿useTransition fue más claro o más confuso que un useState<boolean> de loading?
FUE UN POCO CONFUSO PERO EN GENERAL CREO QUE ES MAS FACIL DE USAR. 