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
