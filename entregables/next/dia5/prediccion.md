BLOQUE A: 
¿El backend tiene GET /pedidos?estado=pendiente para filtrar? Verificarlo con Postman antes de escribir código.
¿GET /pedidos?estado=pendiente funciona? No de forma nativa en el frontend por HTTP, pero si lo usaremos usando .filter(p => p.estado === 'pendiente') sobre tu array de objetos mock.
URL exacta de PATCH para cambiar estado: simularemos elcambio de estado con un boton que cambie el estado del objeto mock a 'en_preparacion'.

BLOQUE B:
¿generateMetadata necesita async en /comandas? ¿Necesita hacer fetch para construir el título?
¿Puede ser síncrona? Sí.

¿Por qué? Porque generateMetadata solo necesita async cuando haces fetch, consultas una API o esperas datos dinámicos. Si el título de /comandas es fijo, puede ser una función normal síncrona.

BLOQUE C: 
¿Qué muestra ComandaCard para un pedido tipo "para_llevar" donde mesaId es null?
Para un pedido "para_llevar" muestra: Para llevar 
Para un pedido "mesa" muestra: numero de mesa 

BLOQUE D: 
Si avanzarEstadoPedido() llama a revalidatePath("/comandas") en el servidor, ¿ComandasPage hace el fetch automáticamente o el usuario tiene que recargar?
¿La lista se actualiza automáticamente? ___________
¿router.refresh() sería necesario en el Cliente? ___________

¿La lista se actualiza automáticamente? → Sí, si ComandasPage es un Server Component y hace el fetch en el servidor.
revalidatePath("/comandas") invalida el caché de esa ruta y Next.js vuelve a ejecutar el fetch cuando la página se renderiza otra vez.

¿router.refresh() sería necesario en el Cliente? → Sí, normalmente sí, si quieres que el usuario vea el cambio inmediatamente sin recargar manualmente.
revalidatePath() solo invalida el caché en el servidor; router.refresh() fuerza al cliente a pedir el nuevo render actualizado.
