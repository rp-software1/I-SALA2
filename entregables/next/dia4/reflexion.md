BLOQUE A:

¿El backend tenía el endpoint /mesas/:id o tuvieron que usar la Opción B? ¿Qué implica eso para el rendimiento?

No usamos backend real ni endpoint GET /mesas/:id.
Se utilizó la Opción B buscando la mesa dentro del array mock con getMesas().
Esto implica peor rendimiento porque primero obtiene todas las mesas y luego filtra localmente.